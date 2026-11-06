#!/usr/bin/env node
/** Fast source audit beyond TypeScript: TS/TSX syntax, local dependencies, and Heroicons exports. */
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const extensions=['.ts','.tsx','.js','.jsx','.mjs','.cjs','.json','.css','.scss','.svg','.png','.jpg','.jpeg','.webp','.gif','.avif','.ico','.woff','.woff2'];
const sourceExtensions=new Set(['.ts','.tsx','.js','.jsx','.mjs','.cjs']);
const errors=[];
const report={sourceFiles:0,localImports:0,iconImports:0,staticImagePaths:0,runtimeEdgeReferences:0};
const folders=['app','Compentents','content','data','lib','utils','components'].filter(x=>fs.existsSync(path.join(root,x)));
const localFiles=[];
function walk(dir){for(const it of fs.readdirSync(dir,{withFileTypes:true})){if(['node_modules','.next','.git'].includes(it.name))continue; const p=path.join(dir,it.name);if(it.isDirectory())walk(p);else if(sourceExtensions.has(path.extname(it.name)))localFiles.push(p);}}
for(const f of folders)walk(path.join(root,f));
const resolveImport=(from,spec)=>{
 const base=spec.startsWith('@/')?path.join(root,spec.slice(2)):path.resolve(path.dirname(from),spec);
 if(fs.existsSync(base)&&fs.statSync(base).isFile())return true;
 for(const ext of extensions)if(fs.existsSync(base+ext))return true;
 for(const ext of extensions)if(fs.existsSync(path.join(base,'index'+ext)))return true;
 return false;
};
const iconModule='/@heroicons/react/24/outline';
const availableIcons=require('@heroicons/react/24/outline');
for(const f of localFiles){
 const input=fs.readFileSync(f,'utf8');const rel=path.relative(root,f).replaceAll('\\','/');
 const kind=f.endsWith('x')?ts.ScriptKind.TSX:ts.ScriptKind.TS;
 const ast=ts.createSourceFile(f,input,ts.ScriptTarget.Latest,true,kind);
 report.sourceFiles++;
 for(const d of ast.parseDiagnostics){const lc=ast.getLineAndCharacterOfPosition(d.start||0);errors.push(`${rel}:${lc.line+1} parse: ${ts.flattenDiagnosticMessageText(d.messageText,' ')}`);}
 function examineModule(spec,node){
  if(spec.startsWith('@/')||spec.startsWith('./')||spec.startsWith('../')){
   report.localImports++;
   if(!resolveImport(f,spec)){const line=ast.getLineAndCharacterOfPosition(node.getStart(ast)).line+1;errors.push(`${rel}:${line} unresolved module: ${spec}`);}
  }
  if(spec==='@heroicons/react/24/outline' && ts.isImportDeclaration(node) && node.importClause?.namedBindings && ts.isNamedImports(node.importClause.namedBindings)){
   for(const imported of node.importClause.namedBindings.elements){let name=(imported.propertyName||imported.name).text;report.iconImports++;if(!(name in availableIcons))errors.push(`${rel} unsupported Heroicon: ${name}`);}
  }
 }
 function scan(node){
  if(ts.isImportDeclaration(node) && ts.isStringLiteralLike(node.moduleSpecifier))examineModule(node.moduleSpecifier.text,node);
  if(ts.isExportDeclaration(node) && node.moduleSpecifier && ts.isStringLiteralLike(node.moduleSpecifier))examineModule(node.moduleSpecifier.text,node);
  if(ts.isCallExpression(node) && node.expression.kind===ts.SyntaxKind.ImportKeyword && node.arguments.length===1 && ts.isStringLiteralLike(node.arguments[0]))examineModule(node.arguments[0].text,node);
  if(ts.isJsxAttribute(node) && node.name.text==='src' && node.initializer && ts.isStringLiteralLike(node.initializer)){
   const s=node.initializer.text; if(s.startsWith('//'))errors.push(`${rel} protocol-relative image src: ${s}`);
   if(s.startsWith('/') && !/\.(?:ts|tsx)$/.test(s)){
    report.staticImagePaths++;
    if(!/^\/(?:_next|api)\//.test(s)&&!fs.existsSync(path.join(root,'public',s.slice(1))))errors.push(`${rel} static image missing: ${s}`);
   }
  }
  ts.forEachChild(node,scan);
 }
 scan(ast);
 if(/\bexport\s+const\s+runtime\s*=\s*['"]edge['"]/.test(input)){
   report.runtimeEdgeReferences++;errors.push(`${rel} still exports Edge runtime`);
 }
}
if(errors.length){console.error(`Source validation FAILED with ${errors.length} findings:`);errors.slice(0,160).forEach(x=>console.error(' - '+x));process.exitCode=1;}
else console.log(`Source validation PASSED:\n${JSON.stringify(report,null,2)}`);

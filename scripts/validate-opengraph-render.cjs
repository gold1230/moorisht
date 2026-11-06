#!/usr/bin/env node
/** Run every opengraph-image.tsx as a real Next ImageResponse and verify PNG dimensions. */
const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const root=path.resolve(__dirname,'..','app');
const files=[];
function walk(d){for(const ent of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,ent.name);if(ent.isDirectory())walk(p);else if(ent.name==='opengraph-image.tsx')files.push(p);}}
walk(root);
(async()=>{
 const errors=[];const images=[];
 for(const filename of files.sort()){
  const rel=path.relative(root,filename).replaceAll(path.sep,'/');
  try{
   const js=ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;
   const m=new Module(filename,module);m.filename=filename;m.paths=Module._nodeModulePaths(path.dirname(filename));m._compile(js,filename);
   if(m.exports.runtime && m.exports.runtime!=='nodejs')throw Error('runtime is not Node.js');
   if(typeof m.exports.default!=='function')throw Error('no default image generator');
   const result=m.exports.default();if(!result || typeof result.arrayBuffer!=='function')throw Error('did not return ImageResponse');
   const image=Buffer.from(await result.arrayBuffer());
   if(image.length<30 || image.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw Error('output is not a PNG');
   const width=image.readUInt32BE(16),height=image.readUInt32BE(20);
   if(width!==1200||height!==630)throw Error(`wrong dimensions ${width}x${height}`);
   images.push({file:rel,bytes:image.length,width,height});
  }catch(e){errors.push(`${rel}: ${e.message}`);}
 }
 if(errors.length){console.error('Open Graph actual render FAILED:',...errors.map(x=>' - '+x));process.exitCode=1;}
 else console.log(`Open Graph REAL RENDER PASSED: ${images.length} PNG files, each 1200x630; all render using Node.js.`);
})().catch(e=>{console.error(e);process.exitCode=1;});

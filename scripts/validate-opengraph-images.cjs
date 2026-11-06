#!/usr/bin/env node
/** Validate the JSX layout restrictions used by Next.js ImageResponse (Satori). */
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.join(__dirname, '..', 'app');
const images = [];

function walk(dir) {
  for (const dirent of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, dirent.name);
    if (dirent.isDirectory()) walk(file);
    else if (/^opengraph-image\.tsx$/.test(dirent.name)) images.push(file);
  }
}
walk(root);
const errors = [];
for (const file of images) {
  const text = fs.readFileSync(file, 'utf8');
  const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  for (const diagnostic of ast.parseDiagnostics) {
    errors.push(`${path.relative(root, file)}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`);
  }
  const relative = path.relative(root, file);
  function visit(node) {
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(ast).toLowerCase() === 'br') {
      errors.push(`${relative}: <br /> is not supported in this project's Open Graph image layouts. Use two spans in a flex column.`);
    }
    if (ts.isJsxElement(node) && node.openingElement.tagName.getText(ast).toLowerCase() === 'div') {
      const children = node.children.filter(child =>
        !(ts.isJsxText(child) && !child.getText(ast).trim()) &&
        !(ts.isJsxExpression(child) && !child.expression)
      );
      if (children.length > 1) {
        const style = node.openingElement.attributes.properties.find(attr =>
          ts.isJsxAttribute(attr) && attr.name.text === 'style'
        );
        let valid = false;
        if (style && style.initializer && ts.isJsxExpression(style.initializer) && style.initializer.expression && ts.isObjectLiteralExpression(style.initializer.expression)) {
          for (const prop of style.initializer.expression.properties) {
            if (!ts.isPropertyAssignment(prop)) continue;
            const key = prop.name.getText(ast).replace(/["']/g, '');
            if (key === 'display' && ts.isStringLiteralLike(prop.initializer) && ['flex', 'contents', 'none'].includes(prop.initializer.text)) {
              valid = true;
            }
          }
        }
        if (!valid) {
          const line = ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1;
          errors.push(`${relative}:${line}: <div> with multiple children must set style display to flex, contents or none.`);
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
}
if (errors.length) {
  console.error('Open Graph image validation failed:\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`Open Graph image JSX validated (${images.length} files).`);

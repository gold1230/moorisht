/**
 * Check Next.js App Router module exports before the production build.
 * App Router page/layout/route files accept only documented exports.
 * A custom exported const (e.g. `export const tableOfContents`) makes
 * .next/types type validation fail, even when `tsc --noEmit` succeeds.
 */
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..", "app");
const segmentFiles = new Set(["page.ts", "page.tsx", "layout.ts", "layout.tsx", "route.ts", "route.tsx"]);
const segmentConfig = new Set([
  "dynamic", "dynamicParams", "revalidate", "fetchCache", "runtime",
  "preferredRegion", "maxDuration", "generateStaticParams",
]);
const pageLayout = new Set([
  "default", "metadata", "generateMetadata", "viewport", "generateViewport",
  ...segmentConfig,
]);
const route = new Set([
  "GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS",
  ...segmentConfig,
]);
let checked = 0;
const errors = [];

function visit(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!entry.name.startsWith(".") && entry.name !== "node_modules") visit(file);
    } else if (segmentFiles.has(entry.name)) {
      inspect(file);
    }
  }
}

function inspect(file) {
  checked++;
  const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const allowed = path.basename(file).startsWith("route.") ? route : pageLayout;
  const unexpected = new Set();
  for (const statement of source.statements) {
    const modifiers = statement.modifiers || [];
    const isExport = modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
    const isDefault = modifiers.some(m => m.kind === ts.SyntaxKind.DefaultKeyword);
    // Type-only declarations are erased at runtime and do not occur in typeof import(...).
    if (ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement)) continue;
    if (ts.isExportAssignment(statement)) {
      if (statement.isExportEquals) unexpected.add("export =");
      continue;
    }
    if (ts.isExportDeclaration(statement)) {
      if (statement.isTypeOnly) continue;
      if (!statement.exportClause || !ts.isNamedExports(statement.exportClause)) {
        unexpected.add("export *");
        continue;
      }
      for (const element of statement.exportClause.elements) {
        if (!element.isTypeOnly && !allowed.has(element.name.text)) unexpected.add(element.name.text);
      }
      continue;
    }
    if (!isExport || isDefault) continue;
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name)) {
          if (!allowed.has(declaration.name.text)) unexpected.add(declaration.name.text);
        } else {
          unexpected.add("exported destructuring");
        }
      }
    } else if (statement.name && ts.isIdentifier(statement.name)) {
      if (!allowed.has(statement.name.text)) unexpected.add(statement.name.text);
    }
  }
  if (unexpected.size) errors.push(`${path.relative(root,file).replaceAll(path.sep,"/")}: ${[...unexpected].join(", ")}`);
}

visit(root);
if (errors.length) {
  console.error(`Next.js App Router export check FAILED (${errors.length} files):`);
  for (const issue of errors) console.error(" - " + issue);
  console.error("Move helpers into other modules or remove `export` from local-only constants.");
  process.exitCode = 1;
} else {
  console.log(`Next.js App Router export check PASSED: ${checked} page/layout/route modules.`);
}

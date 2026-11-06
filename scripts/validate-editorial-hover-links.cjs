const fs = require('node:fs');
const path = require('node:path');
const ts = require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js');

const load = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const fileExists = (file) => fs.existsSync(path.join(process.cwd(), file));
const srcFile = 'content/editorial/editorialConnections.ts';
const source = fs.readFileSync(srcFile, 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const exported = {};
new Function('exports', 'require', js)(exported, require);
const configs = exported.editorialConnections;
const posts = load('data/editorial/posts.json');
const tours = load('data/tours.json');
const places = load('data/places.json');
const byTourSlug = new Set(tours.map((t) => t.slug));
const byPostSlug = new Set(posts.map((p) => p.slug));
let links = 0, errors = [], placeCards = 0, tourCards = 0, inlineMentions = 0;
function route(href) {
  if (!href.startsWith('/')) return errors.push(`Expected internal URL: ${href}`);
  if (!fileExists(`app${href.replace(/\/$/, '')}/page.tsx`)) errors.push(`Missing page for ${href}`);
  links += 1;
}
for (const post of posts) {
  const cfg = configs[post.slug];
  if (!cfg) { errors.push(`Missing config ${post.slug}`); continue; }
  const text = [...post.introduction, ...post.sections.flatMap((s) => s.paragraphs)].join(' ');
  let matches = 0;
  for (const id of cfg.destinations) {
    if (!places[id]) { errors.push(`Missing place ${id} in ${post.slug}`); continue; }
    route(places[id].href);
    if (!fileExists(`public${places[id].image}`)) errors.push(`Missing image ${places[id].image}`);
    placeCards++;
    if (text.toLowerCase().includes(places[id].title.toLowerCase()) || text.toLowerCase().includes(id.replaceAll('-', ' '))) matches++;
  }
  for (const slug of cfg.tours) {
    if (!byTourSlug.has(slug)) errors.push(`Missing tour data ${slug}`);
    route(`/${slug}/`);
    tourCards++;
  }
  for (const slug of cfg.guides) {
    if (!byPostSlug.has(slug)) errors.push(`Missing related editorial ${slug}`);
    route(`/${slug}/`);
  }
  for (const { text:phrase, href } of cfg.phrases) {
    route(href);
    if (text.toLowerCase().includes(phrase.toLowerCase())) matches++;
  }
  inlineMentions += matches;
  if (matches < 2) errors.push(`Too few inline place/page mentions on ${post.slug}: ${matches}`);
  console.log(`${post.slug}: ${matches} matching inline links, ${cfg.destinations.length} place cards, ${cfg.tours.length} related tours, ${cfg.guides.length} related guides`);
}
const main = fs.readFileSync('content/editorial/MoroccoEditorialArticle.tsx', 'utf8');
for (const token of ['makeEditorialTextLinker','<EditorialDestinationCards','<EditorialRelatedTours','<EditorialRelatedReading']) {
  if (!main.includes(token)) errors.push(`Article renderer missing ${token}`);
}
for (const f of [srcFile, 'content/editorial/MoroccoEditorialArticle.tsx', 'content/editorial/editorialInlineLinks.tsx', 'content/editorial/EditorialExplorationCards.tsx']) {
  const result = ts.transpileModule(fs.readFileSync(f, 'utf8'), {fileName:f,reportDiagnostics:true,compilerOptions:{jsx:ts.JsxEmit.Preserve,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}});
  if (result.diagnostics?.length) errors.push(`TypeScript parse error ${f}`);
}
console.log(`Audit: ${posts.length} guides, ${placeCards} destination cards, ${tourCards} tour cards, ${links} checked links, ${inlineMentions} matching inline mentions`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('PASS: editorial hover cards and internal-link destinations verified.');

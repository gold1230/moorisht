/* Verifies the project-wide tour Product/TouristTrip connection, without npm packages. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const folder = path.join(root, 'app', 'tour');
let count = 0;
for (const item of fs.readdirSync(folder, { withFileTypes: true })) {
  if (!item.isDirectory()) continue;
  const file = path.join(folder, item.name, 'page.tsx');
  if (!fs.existsSync(file)) continue;
  const code = fs.readFileSync(file, 'utf8');
  const errors = [];
  const delegated = code.includes('popularTourJsonLd(tour)') && code.includes('popularTours[');
  if (!delegated && !code.includes('attachProductToTourGraph(')) errors.push('no linked Product graph');
  if (!delegated && !code.includes('serializeStructuredData(')) errors.push('missing JSON-LD HTML escaping');
  if (!delegated && !code.includes('"TouristTrip"')) errors.push('missing TouristTrip node');
  if (code.includes('JSON.stringify(reviewSchema)')) errors.push('unverified standalone review schema');
  if (errors.length) throw new Error(`${item.name}: ${errors.join('; ')}`);
  count++;
}
if (count !== 41) throw new Error(`Expected 41 tour pages, got ${count}`);
const popularSchema = fs.readFileSync(path.join(root, 'lib', 'popularTourPages.ts'), 'utf8');
if (!popularSchema.includes('attachProductToTourGraph(') || !popularSchema.includes('serializeStructuredData(') || !popularSchema.includes('TouristTrip')) throw new Error('Shared popular tour schema not wired');
console.log(`PASS: ${count} tour pages use a connected Product + TouristTrip JSON-LD graph, without standalone unverified Product reviews.`);

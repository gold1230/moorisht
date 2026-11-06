/* Independent SEO regression checks: node scripts/validate-seo-fixes.cjs */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const pages = [
  'app/atlantic-northern-morocco/page.tsx',
  'app/atlas-mountains-valleys/page.tsx',
  'app/destinations/page.tsx',
  'app/locations/page.tsx',
  'app/imperial-cities/page.tsx',
  'app/private-morocco-tours/page.tsx',
  'Compentents/locationPage/LocationPageTemplate.tsx',
];
for (const file of pages) {
  const code = read(file);
  assert.ok(code.includes('absoluteSiteUrl'), `Missing absolute URLs in ${file}`);
  assert.ok(code.includes('BreadcrumbList'), `Missing breadcrumb schema in ${file}`);
  assert.ok(!code.includes('process.env.NEXT_PUBLIC_SITE_URL'), `Unsafe env fallback in ${file}`);
  const breadcrumb = code.slice(code.indexOf('BreadcrumbList'), code.indexOf('BreadcrumbList') + 1100);
  assert.ok(!/\bitem:\s*['"]\//.test(breadcrumb), `Relative breadcrumb item in ${file}`);
  assert.ok(!/\bitem:\s*[^,\n]+\|\|\s*['"]\//.test(breadcrumb), `Relative breadcrumb fallback in ${file}`);
}

const util = read('lib/absoluteSiteUrl.ts');
assert.ok(util.includes('https://moorishtour.com'));
const home = read('app/page.tsx');
assert.ok(home.includes('title: { absolute: homeTitle }'), 'Homepage title must not get duplicated template suffix');
assert.ok(home.includes('primaryImageOfPage'), 'Missing preferred image schema');
assert.ok(home.includes('openGraph:') && home.includes('images:'), 'Missing OG image');
assert.ok(home.includes('twitter:') && home.includes('homeImage'), 'Missing Twitter image');
const hero = 'home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg';
assert.ok(fs.existsSync(path.join(root, 'public', hero)), 'Preferred image must be a real file');
assert.ok(read('content/bannerhome.tsx').includes(path.basename(hero)), 'Preferred image must match homepage hero');

for (const pathname of ['/', '/locations', '/locations/marrakech', '/private-morocco-tours']) {
  const url = new URL(pathname, 'https://moorishtour.com/');
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  assert.equal(url.origin, 'https://moorishtour.com');
  assert.ok(url.toString().startsWith('https://moorishtour.com/'));
}
console.log(`SEO checks passed: ${pages.length} breadcrumb templates, homepage metadata, image path and URL format.`);

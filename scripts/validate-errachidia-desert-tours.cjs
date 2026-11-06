const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const get = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const page = get('app/errachidia-desert-tours/page.tsx');
const routes = JSON.parse(get('data/routes.json'));
const tours = JSON.parse(get('data/tours.json'));
const selectedTours = tours.filter((t) => t.collections.includes('tours-from-errachidia'));
assert(fs.existsSync(path.join(root, 'public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg')));
assert(routes.some((x) => x.path === '/errachidia-desert-tours' && x.kind === 'page'));
assert.equal(selectedTours.length, 2);
assert(page.includes('alternates: { canonical: pagePath }'));
assert(page.includes('BreadcrumbList') && page.includes('absoluteSiteUrl'));
assert(page.includes('PopularMoroccoTours'));
assert(page.includes('openGraph:') && page.includes('twitter:'));
assert(page.includes('href="/locations/errachidia/"'));
assert(get('Compentents/footer.tsx').includes('href: "/errachidia-desert-tours"'));
for (const tour of selectedTours) {
  assert(fs.existsSync(path.join(root, 'app', tour.slug, 'page.tsx')));
}
console.log('Errachidia desert tours verified: 2 tours, canonical, breadcrumb schema, sitemap, image and footer link.');

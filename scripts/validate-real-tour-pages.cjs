const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const marrakechRoute = 'app/tour/3-days-tour-from-marrakech-to-merzouga/page.tsx';
const errachidiaRoute = 'app/errachidia-desert-tours/page.tsx';
const marrakech = read(marrakechRoute);
const errachidia = read(errachidiaRoute);
const routes = JSON.parse(read('data/routes.json'));
for (const [url, kind] of [
  ['/tour/3-days-tour-from-marrakech-to-merzouga', 'tour'],
  ['/errachidia-desert-tours', 'page'],
]) {
  const matches = routes.filter(route => route.path === url && route.kind === kind);
  assert.equal(matches.length, 1, `sitemap must have exactly one ${url} entry`);
}
for (const [name, contents] of [[marrakechRoute, marrakech], [errachidiaRoute, errachidia]]) {
  assert(!/\b(permanentRedirect|redirect|NextResponse\.redirect)\s*\(/.test(contents), `${name} must not redirect`);
  assert(contents.includes('export const metadata'), `${name} missing SEO metadata`);
  assert(contents.includes('BreadcrumbList'), `${name} missing breadcrumb structured data`);
  assert(contents.includes('absoluteSiteUrl'), `${name} missing absolute URL helper`);
}
assert(marrakech.includes('alternates: { canonical: url }'), 'Marrakech needs its own canonical');
assert(marrakech.includes('<TourItinerary '), 'Marrakech needs an actual itinerary');
assert(marrakech.includes('<TourSidebar '), 'Marrakech needs the booking widget');
assert(marrakech.includes('<TourFAQs'), 'Marrakech needs FAQs');
assert(marrakech.includes('type="application/ld+json"'), 'Marrakech needs JSON-LD');
assert(marrakech.includes('openGraph:') && marrakech.includes('imageUrl'), 'Marrakech needs preview image');
assert(errachidia.includes('<PopularMoroccoTours'), 'Errachidia needs actual tour listings');
assert(errachidia.includes('alternates: { canonical: pagePath }'), 'Errachidia needs own canonical');
assert(fs.existsSync(path.join(root, 'public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg')));
assert(fs.existsSync(path.join(root, 'app/tour/3-days-desert-tour-from-marrakech-to-merzouga/page.tsx')),
  'Original 3-day tour should remain untouched');
assert(read('app/marrakech-desert-tours/page.tsx').includes('href="/tour/3-days-tour-from-marrakech-to-merzouga/"'),
  'Internal page link must exist');
console.log('PASS: Both requested routes are real pages with own SEO metadata, structured data, and no redirects.');

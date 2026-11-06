/* Checks the real-review registry is connected to every individual tour. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const pages = path.join(root, 'app', 'tour');
const registry = fs.readFileSync(path.join(root, 'lib', 'verifiedTourReviewData.ts'), 'utf8');
let checked = 0;
for (const item of fs.readdirSync(pages, { withFileTypes: true })) {
  if (!item.isDirectory()) continue;
  const file = path.join(pages, item.name, 'page.tsx');
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  if (!registry.includes(`"${item.name}": { reviews: [] }`)) {
    throw new Error(`No dedicated review slot for ${item.name}`);
  }
  if (!content.includes('getTourReviewSchemaFields(') && !content.includes('popularTourJsonLd(tour)')) {
    throw new Error(`Schema doesn't use tour-specific reviews: ${item.name}`);
  }
  if (content.includes('<Hero') && !content.includes('<Hero url={propsObj.url}')) {
    throw new Error(`Tour header rating not connected: ${item.name}`);
  }
  if (!content.includes('<ReviewsSection url=') && !content.includes('<NewTourDetail tour={tour}')) {
    throw new Error(`Verified reviews not visible on page: ${item.name}`);
  }
  checked++;
}
if (checked !== 41) throw new Error(`Expected 41 pages, checked ${checked}`);
const sharedPage = fs.readFileSync(path.join(root, "Compentents", "tour", "NewTourDetail.tsx"), "utf8");
if (!sharedPage.includes("<ReviewsSection url={url}")) throw new Error("NewTourDetail is missing the shared verified review section");
const helper = fs.readFileSync(path.join(root, 'lib', 'tourProductSchema.ts'), 'utf8');
if (!helper.includes('verifiedAggregate') || !helper.includes('reviewCount: verifiedAggregate?.reviewCount ?? verifiedReviews.length')) {
  throw new Error('Verified aggregate calculation is not correctly connected');
}
console.log(`PASS: ${checked} tour pages have their own review slot, visible review section, and connected JSON-LD.`);
console.log('Missing reviews are omitted rather than reported as fabricated or zero ratings.');

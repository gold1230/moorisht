// Lightweight social identity audit: runs without node_modules.
const fs = require('node:fs');
const path = require('node:path');
const base = path.resolve(__dirname, '..');
const get = (file) => fs.readFileSync(path.join(base, file), 'utf8');
const config = get('lib/socialProfiles.ts');
const layout = get('app/layout.tsx');
const home = get('app/page.tsx');
const links = get('Compentents/SocialLinks.tsx');
const footer = get('Compentents/footer.tsx');
const contact = get('app/contact/page.tsx');
const profiles = [
  'https://www.instagram.com/moorishtours/',
  'https://x.com/MoorishTours',
  'https://www.threads.com/@moorishtours',
  'https://www.pinterest.com/moorishtour/',
  'https://www.facebook.com/profile.php?id=61561111442261',
];
for (const url of profiles) {
  if (config.split(url).length !== 2) {
    throw new Error(`Social profile must occur exactly once in shared config: ${url}`);
  }
}
const expectations = [
  [layout.includes('sameAs: SOCIAL_PROFILE_URLS'), 'Organization sameAs in root layout'],
  [layout.includes('"@type": "TravelAgency"'), 'TravelAgency schema type'],
  [layout.includes('"@id": "https://moorishtour.com/#organization"'), 'consistent Organization ID'],
  [layout.includes('application/ld+json'), 'global JSON-LD script'],
  [!home.includes('const organizationSchema ='), 'home does not duplicate agency schema'],
  [home.includes('publisher: {'), 'WebSite publisher references agency'],
  [home.includes('site: "@MoorishTours"'), 'X account in Twitter Card metadata'],
  [links.includes('SOCIAL_PROFILES.map('), 'social link component uses shared config'],
  [links.includes('aria-label='), 'accessible social link names'],
  [footer.includes('<SocialLinks variant="footer" />'), 'footer social links'],
  [contact.includes('<SocialLinks variant="contact" />'), 'contact social links'],
];
for (const [ok, label] of expectations) {
  if (!ok) throw new Error(`Social validation failed: ${label}`);
}
console.log(`Social profile audit PASSED: ${profiles.length} profiles, global TravelAgency sameAs, footer, contact, X metadata.`);

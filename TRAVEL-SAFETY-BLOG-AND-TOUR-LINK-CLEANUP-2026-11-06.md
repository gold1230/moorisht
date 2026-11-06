# Moorish Tour — 2026 Travel Safety Blog and Tour Linking Update

## New long-form article

- URL: `https://moorishtour.com/is-there-a-war-in-morocco-safe-to-visit-2026/`
- H1: Is There a War in Morocco? Is It Safe to Visit in 2026?
- SEO title: Is Morocco at War? Travel Safety Guide for 2026 | Moorish Tour
- Meta description: Is Morocco at war in 2026? Understand current travel advisories, safety in Marrakech and Merzouga, regional risks and practical tips for tourists.
- 2,250+ words of new, independently written travel advice, checked against published travel advisories on Nov 6, 2026
- Uses existing Moorish Tour editorial article design: hero, table of contents, sidebar, FAQ, inline image hover cards, destination cards and related tour links
- Added to `data/blogs.json` for cards on `/blog/` and to `data/routes.json` for sitemap
- Uses `BlogPosting` and `BreadcrumbList` structured data through the common article template
- Official sources link to the U.S. Department of State, UK FCDO, Government of Canada, and Australia Smartraveller. **Review periodically: travel advice may change.**

## Tour hover links cleaned up

- All itinerary day titles now appear as plain-text headings; no place hover links inside H3s.
- The 20 popular tours using `NewTourDetail` get inline hover links **only in the first overview paragraph**, plus one link per place in the dedicated route-place preview list.
- These tour itinerary descriptions/details remain readable plain text, not automatically linked every time a city or place is mentioned.
- The shared `InlinePlaceLinks` helper prevents linking the same place repeatedly inside a single text block.
- Booking popups, route details, prices, images, and tour page schema remain unchanged.

## Review names

- Existing named review entries remain unmodified.
- Older sample placeholders such as `Sample Traveler 1`, `Traveler 2` or `Example ...` are filtered from the on-page legacy review fallback rather than renamed to invented customers.
- Original-tour attribution for related tour testimonials is unchanged. Reviews are not assigned to a tour the reviewer did not take.

## Check and deploy

```bash
npm ci
npm run check:routes
npm run check:tour-products
npm run check:tour-reviews
npm run typecheck
npm run build

git add -A
git commit -m "Add Morocco travel safety guide and clean tour internal links"
git push origin main
```

Core static checks completed successfully. A complete Next.js production build was not run in this editing environment because dependencies were not installed. Run it on your development computer or Hostinger before putting the changes into production.

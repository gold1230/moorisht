# The 3 Days Tour from Marrakech to Merzouga has its own full page

URL: https://moorishtour.com/tour/3-days-tour-from-marrakech-to-merzouga/

## What changed

- Replaced the earlier `permanentRedirect()` route with a complete Next.js page using the project's existing tour UI components.
- Dedicated on-page hero, three-day itinerary, tour highlights, inclusions/exclusions, booking widget, a route map, FAQs and related tours.
- Self-referencing canonical URL and its own metadata and image (not the logo).
- Absolute URLs in BreadcrumbList, TouristTrip and WebPage structured data.
- Added to the generated sitemap by `data/routes.json`.
- Added an internal link from `/marrakech-desert-tours/` to the new page.
- Preserved the older working tour URL (`/tour/3-days-desert-tour-from-marrakech-to-merzouga/`) and its contents.

The Errachidia Desert Tours page at `/errachidia-desert-tours/` is also a real page, not a redirect, and is preserved.

**SEO caution:** Two pages advertising very similar three-day tours may compete in Google Search. These URLs are both real 200 pages with self-canonical metadata per your request; Google may still select one as the canonical if it judges them equivalent. Distinct content, accurate details and clear internal linking help, but cannot guarantee both will rank.

## Deployment and verification

1. Deploy this Next.js project after updating your GitHub repository.
2. Run `npm ci` then `npm run build`.
3. Run `node scripts/validate-real-tour-pages.cjs` and `npm run check:routes`.
4. Confirm both page URLs return **200 OK** with normal HTML, not 301/308, then inspect the rendered canonical and structured data.
5. After deployment, request indexing in Search Console and submit the refreshed sitemap.

This package includes the earlier breadcrumb SEO fixes and homepage metadata updates.

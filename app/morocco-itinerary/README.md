# Morocco Itinerary — Special Planning Hub (Next.js App Router)

Copy the complete **morocco-itinerary/** folder into `app/morocco-itinerary/` in your Next.js project. All local route imports use `./` and all 10 WebP illustrations are bundled in `./assets/`. No remote image sources, competitor links, external libraries or external icon imports are used.

## Page design
- Custom, high-impact responsive navy-and-gold hero, with three local illustrated images.
- Interactive duration and travel-style chooser with accessible buttons, used client-side.
- Six route cards and **60 day-by-day entries** across 3, 5, 7, 10, 14 and 21 days.
- Sticky desktop Table of Contents, feature grids, seasonal cards, compare table, FAQ accordion, CTA.
- Genuine internal links to related Moorish Tour articles and tours; `Morocco` links to `/morocco/` once in article copy.
- `PlaceHoverCard` reused from `@/Compentents/placeCard` (existing project component). Fix the import only if your shared component is elsewhere.
- Next.js App Router metadata, canonical, OpenGraph image, schema.org WebPage, BreadcrumbList, ItemList, FAQPage.

## Before publishing
1. Keep the asset files in `app/morocco-itinerary/assets/`; they are original illustrations, not destination photographs.
2. Verify `@/Compentents/placeCard` exists in your project, and install Next.js + React as in your existing site.
3. Run `npm run build` in your project. Parsing and relative imports were verified in the generation environment, but a full project compile is not possible without the site.
4. Sample routes are planning ideas, not booked products. Flight times, weather, transport, services and final pricing require confirmation.
5. To change route wording edit `itineraries.ts`; the interactive chooser and itinerary sections read the same typed data.
6. No invented historical publication date: this is a purpose-built evergreen itinerary hub.

## Structure
- `page.tsx`: server-rendered layout, SEO metadata, JSON-LD.
- `ItineraryFinder.tsx`: the only client component; interactive trip finder.
- `itineraries.ts`: six complete route plans, 60 days.
- `ItineraryCards.tsx`, `ItineraryDetails.tsx`, `SupportSections.tsx`: responsive presentation.
- `faqData.ts`, `LocalPhoto.tsx`, `opengraph-image.tsx`: FAQs, local images and preview image.
- `article-content.md`: readable copy for review.
- `IMPORT_VALIDATION.json`: generated code validation details.

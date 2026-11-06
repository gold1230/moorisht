# Morocco Tours from Spain — Next.js page

## Install
Copy this entire folder to `app/morocco-tours-from-spain/` in the Moorish Tour Next.js App Router project. Keep the `assets/` subfolder alongside the `.tsx` components. All local article components import via `./`, and all **10 bundled WebP illustrations** import via `./assets/...`, so there are **no externally hosted image URLs** and no dependence on nonexistent public article photos.

Shared website imports assumed to already exist (as in your other pages):
- `@/Compentents/blogtour/blogTour`
- `@/Compentents/blogtour/sidebareBlogTou`
- `@/Compentents/blogtour/contentTable`
- `@/Compentents/placeCard`
- `@/public/plan/plan-your-morocco-tour-hero-extracted.jpg` (existing website sidebar artwork)

## Editorial specification
- English; original URL and 2024-06-15 publication date preserved.
- 29 section components, 18 FAQs, 5 responsive tables, 4 itinerary timelines, 6 card collections and 4 checklists.
- 10 original local illustrative WebP images bundled in this route; images are *illustrations, not photographs* and are captioned accordingly. You may replace them with your own travel photos without changing the article text.
- 22 contextual internal links across 17 unique site routes; exactly one Morocco to `/morocco/` link in the article body; no external competitor links.
- Includes Next.js metadata, canonical, OG, BlogPosting, BreadcrumbList, FAQPage schema.

## Important
Ferry schedules, entry policies, visa rules and route availability can change. The article avoids fixed operator departure times and advises checking official information. Current route details were researched in October 2026. It does not guarantee visas or bookings.

## Build notes
- Only imports actually referenced by the individual section are emitted.
- `@heroicons/react/24/outline` uses only `ArrowRightIcon`, `CheckCircleIcon`, `MapPinIcon`, `LightBulbIcon`. No CompassIcon/LightbulbIcon.
- The site-wide hero, sidebar and `PlaceHoverCard` components are intentionally imported from your existing project, not bundled here.
- A full `next build` should still be run in your project after installation.

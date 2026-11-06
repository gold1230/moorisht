# Moorish Tour – Three full tour pages added (21 October 2026)

This update creates **three real Next.js App Router pages**, not redirects:

1. `/tour/3-days-desert-tour-from-marrakech-to-fes/` – classic one-way Sahara itinerary via Merzouga.
2. `/tour/8-days-desert-tour-in-morocco-from-casablanca/` – Casablanca, Rabat, Fes, Merzouga, Dades and Marrakech.
3. `/tour/3-days-tour-from-marrakech-to-fes/` – private and flexible one-way Marrakech–Fes route via Merzouga.

## What is included

- Reuses existing Moorish Tour styling and tour components: images, breadcrumb navigation, feature strip, table of contents, itinerary, highlights, inclusions/exclusions, what-to-bring, interactive route map, FAQs, customer review integration and related tour cards.
- Individual page titles, descriptions, SEO keywords, canonical URLs, Open Graph/Twitter images.
- Linked `WebPage`, `TouristTrip`, `Product`, `BreadcrumbList` and `FAQPage` JSON-LD schema.
- Place hover previews linking to existing destination pages and links to related itineraries.
- Registered in `data/routes.json` (the existing sitemap source).
- Featured tour cards on `/tour/` plus links from `/marrakech-desert-tours/` and `/morocco-desert-tours-from-casablanca/`.
- Three empty **review registry slots** for future genuine tour feedback; the schema never invents review totals.

## Prices and booking

The supplied project did not document confirmed rates for these exact three packages. Rather than publish an invented starting price, the pages provide a quote request link through your existing Contact page. Add confirmed rates/booking options before advertising a price.

## Checks run

- `node scripts/validate-routes.mjs` – passed, all new URL routes and linked local pages exist.
- `node scripts/validate-tour-product-schema.cjs` – passed, 21 individual tour pages.
- `node scripts/validate-tour-review-wiring.cjs` – passed, 21 individual tour pages.
- `node scripts/validate-seo-fixes.cjs` – passed.
- `node scripts/validate-opengraph-images.cjs` – passed.
- `node scripts/validate-next-exports.cjs` – passed.
- `node scripts/validate-home-performance.cjs` – passed.
- `node scripts/validate-color-contrast.cjs` – passed.
- TypeScript/TSX source parsing and all three image files – passed.

**Still needed:** Run `npm ci && npm run build` using your real deployment dependencies. No full production build or live HTTP 200 validation was possible in this workspace.

## Deploy using Git

Copy the contents of the ZIP's `moorishtour/` directory into your Git working tree without replacing `.git` or private `.env*` files. Then run:

```bash
git add -A
git commit -m "Add three Marrakech-Fes and Casablanca desert tour pages"
git push origin main
```

After Hostinger deploys, open each new URL, inspect its itinerary, quote link and route map, and request indexing in Search Console. The two Marrakech-to-Fes pages intentionally have different classic/private angles; monitor search performance for potential keyword overlap.

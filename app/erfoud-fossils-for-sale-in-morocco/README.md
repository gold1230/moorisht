# Erfoud Fossils for Sale in Morocco — Moorish Tour

## Installation

Copy this **whole directory** into `app/erfoud-fossils-for-sale-in-morocco/`. Do not relocate individual section files. All article files use sibling relative imports.

## Existing shared website dependencies

- `@/Compentents/blogtour/blogTour` (MarrakechMerzougaBlogHero)
- `@/Compentents/blogtour/sidebareBlogTou` (BlogSidebar)
- `@/Compentents/blogtour/contentTable` (BlogTableOfContents)
- `@/Compentents/placeCard` (PlaceHoverCard, supported place keys required)
- `@/public/plan/plan-your-morocco-tour-hero-extracted.jpg` (sidebar CTA)
- Next.js, Tailwind CSS and `@heroicons/react/24/outline`

## SEO & GEO

Canonical: https://moorishtour.com/erfoud-fossils-for-sale-in-morocco/
Original published date: January 25, 2025; updated October 12, 2026.
Contains BlogPosting, BreadcrumbList, TravelAgency and FAQPage JSON-LD; Open Graph image generator.
Clear answer-first introduction, factual buyer checks, 18 FAQs, 25 descriptive main sections, contextual Moorish Tour internal links, and one `/morocco/` link.

## Photos and diagrams

12 image/illustration placements. The external image URLs point **only to your own moorishtour.com original blog photos** (the image files are not embedded as downloaded bytes). Four original SVG diagrams are bundled in `assets/` and their optimized data URLs are embedded into `ArticlePhoto.tsx`, so they do not depend on image-domain configuration. Replace repeated landscape photos with high-resolution photos from your shop when available, and add appropriate license/captions if needed. Unlike the previous posts, this route does not require files under `public/blog/content/` to render its article images.

## Editorial notes

- This is an **informational travel and fossil buying guide**, not a verified inventory or a claim that Moorish Tour issues authenticity certificates or handles export permissions.
- Check sale/export/import law and permissions with the relevant authority. Fossils may be restricted, especially rare vertebrate specimens.
- No competitor outbound links or visitmorocco.com links are in the article.
- Check actual workshop opening times, visits, tour inclusions, insurance and documentation before publishing service claims.
- The `Erfoud` and other place names use PlaceHoverCard for first body mentions. Confirm exact slugs in the installed component.
- Run `npm run build` in your real site. A TypeScript parser check does not replace an integrated Next.js build.

## Verified reference background (not linked from article)

- https://moorishtour.com/erfoud-fossils-for-sale-in-morocco/ (original article)
- https://mem.gov.ma/pages/TextesReglementaires.html (regulatory text describing fossil collection/export processes; verify current requirements)

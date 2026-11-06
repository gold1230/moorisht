# Explore Marrakech Tour Company — Next.js Article

## Installation

Copy the **entire folder** `explore-marrakech-tour-company` into your Next.js `app/` directory:

`app/explore-marrakech-tour-company/`

All generated TSX section files use local relative imports (`./section1`, `./ArticleElements`, etc.). Do not move them into another folder. The only `@/` imports are existing components or images expected to be present in your Moorish Tour project.

## Important existing project dependencies

- `@/Compentents/blogtour/blogTour` — `MarrakechMerzougaBlogHero` component that accepts a `metainfo` prop
- `@/Compentents/blogtour/sidebareBlogTou` — `BlogSidebar` with `ctaImage` and `ctaHref`
- `@/Compentents/blogtour/contentTable` — `BlogTableOfContents`
- `@/Compentents/placeCard` — `PlaceHoverCard` with supported slugs
- `@heroicons/react/24/outline`, `next/link`, `next/image`, Tailwind CSS
- `@/public/plan/plan-your-morocco-tour-hero-extracted.jpg` for the sidebar CTA

## Content and design

- A detailed Marrakech tour company guide with original article themes preserved and expanded
- Numbered editorial headings, information panels, icon cards, image-and-text split layouts, trip timelines, comparisons, checklists, FAQs and CTA sections
- Images use seven distinct local photo references (eight total placements) from your previously supplied Marrakech TSX files; the images themselves are not bundled
- One and only one link to `/morocco/` in the article text
- First natural mention of selected locations uses `PlaceHoverCard`
- Article links point only to Moorish Tour pages; no competitors or visitmorocco.com
- SEO title, meta description, canonical, OG image route, BlogPosting, BreadcrumbList, FAQPage structured data
- Original post date: February 14, 2025; article updated on October 11, 2026

## Clean imports (regenerated)

- Each section imports **only** the components it actually uses. No copied boilerplate import lists remain.
- Correct Heroicons exports: `ArrowRightIcon`, `CheckCircleIcon`, `MapPinIcon`, `LightBulbIcon`.
- The two unused photo imports and image records were removed from `ArticlePhoto.tsx`.
- All generated route files stay together and all relative imports have been checked.

## Before publishing

1. Make sure the seven referenced image files in `public/blog/content/` exist with the precise filenames listed in `ArticlePhoto.tsx`. Replace missing images with your own files.
2. Verify your `PlaceHoverCard` component supports the identifiers in `internal-link-audit.json`.
3. Check the destination of every tour link; paths are based on publicly visible Moorish Tour links and existing site patterns, which can change.
4. Review tour descriptions and offerings to ensure these match services you currently provide.
5. Run `npm run build` within the full project for complete type and import verification. Syntax checks alone do not verify project dependencies.

## SEO

Canonical: `https://moorishtour.com/explore-marrakech-tour-company/`

Meta title: `Explore Marrakech Tour Company: Private Trips | Moorish Tour`

Meta description: `Explore Marrakech with a local tour company. Compare medina walks, Atlas day trips, Agafay and Sahara routes, private guides, costs and booking tips.`

The `opengraph-image.tsx` file produces a branded graphic dynamically within this same folder without depending on any external image host.

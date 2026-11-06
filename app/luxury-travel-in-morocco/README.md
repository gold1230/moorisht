# Luxury Travel in Morocco — Moorish Tour

## Install

Copy the **entire** `luxury-travel-in-morocco` folder into the Next.js `app/` folder:

`app/luxury-travel-in-morocco/`

**Do not move individual section files.** All section imports (`./section1`, `./ArticleElements`, `./ArticlePhoto`, `./tables`, `./faqData`, etc.) are relative to this folder. There are no unused imports in generated section components.

## Existing project dependencies

- `@/Compentents/blogtour/blogTour` (MarrakechMerzougaBlogHero with `metainfo` prop)
- `@/Compentents/blogtour/sidebareBlogTou` (BlogSidebar with CTA props)
- `@/Compentents/blogtour/contentTable` (BlogTableOfContents and TableOfContentItem)
- `@/Compentents/placeCard` (supported PlaceHoverCard slugs)
- `@/public/plan/plan-your-morocco-tour-hero-extracted.jpg` (sidebar CTA)
- `@heroicons/react/24/outline`, Next.js and Tailwind CSS

## Design

Luxury-themed navy and amber editorial layout with 29 numbered sections, information panels, comparison tables, feature cards, timelines, block quotes, FAQs, and an inviting contact CTA. The article uses nine different known local image references from your older design. They are **not bundled**, so check the image filenames in `ArticlePhoto.tsx` before building. For best results replace generic travel photos with your own licensed pictures of Marrakech hotels, luxury riads and the desert.

## SEO and GEO

- Existing canonical URL: `https://moorishtour.com/luxury-travel-in-morocco/`
- Original publication date: February 7, 2025
- Current revision date: October 11, 2026
- `BlogPosting`, `BreadcrumbList`, `FAQPage`, `TravelAgency` JSON-LD and a locally generated OG image
- Concise answers, itinerary examples, pricing factors, and helpful descriptive headings
- One natural `/morocco/` link in the article body
- Article links only to Moorish Tour (no competitor or VisitMorocco links)
- First mentions of supported destination cities use `PlaceHoverCard`

## Important before publishing

1. Confirm the local image assets are present under `public/blog/content/` and sidebar CTA file exists.
2. Check that the place slugs used by `PlaceHoverCard` are supported by your component.
3. Verify the Moorish Tour internal URLs and all actual current tour inclusions.
4. Accommodation examples are informational, **not** confirmation of business relationships or availability. All services and prices require confirmation.
5. Run `npm run build` in your website to validate real TypeScript/component/image dependencies. Syntax parsing alone is not a complete Next.js build.

## Image files

All nine unique images are referenced (not bundled). Check `ArticlePhoto.tsx` for their exact `public/blog/content/` filenames.

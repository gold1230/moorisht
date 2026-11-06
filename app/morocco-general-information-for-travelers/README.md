# Morocco – General Information for Travelers | Moorish Tour

## Installation — one folder, no moving imported files

Copy this entire folder to:

`app/morocco-general-information-for-travelers/`

Next.js will read `page.tsx` automatically. Every generated TSX module imported by the page remains next to the page in the **same folder**:

- `page.tsx` — metadata, structured data, hero, sidebar, Table of Contents, CTA
- `MoroccoGeneralInformationArticle.tsx` — renders section1.tsx through section7.tsx
- `section1.tsx` ... `section7.tsx` — expanded article sections
- `MoroccoGeneralInformationSingle.tsx` — optional complete single-component article; can be substituted in page.tsx
- `tableOfContents.ts` — 29 heading anchors
- `article-content.md` — easy-to-edit article draft
- `internal-link-audit.json` — site links used in the article

**Correct relative imports:**

```tsx
import MoroccoGeneralInformationArticle from "./MoroccoGeneralInformationArticle";
import { tableOfContents } from "./tableOfContents";
```

Section components import their siblings only through relative paths. Do **not** put the components in `Compentents/blog/morocco-general/`.

**Shared site component imports** stay absolute (`@/Compentents/blogtour/blogTour`, `@/Compentents/blogtour/contentTable`, `@/Compentents/blogtour/sidebareBlogTou`, `@/Compentents/placeCard`), matching your most recent Moorish Tour posts. The photo uses `@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg` as an existing fallback; update to a better Morocco-wide original image if available.

## Word 'Morocco' linking

The **first readable mention of Morocco in each main section** is linked to `/morocco/` using Next.js `<Link>`. We intentionally avoid linking every repeated use of the word. Each section also includes two or three relevant editorial internal links to existing Moorish Tour guides and tours. City names keep their existing `PlaceHoverCard` usage.

## SEO / GEO

Canonical: `https://moorishtour.com/morocco-general-information-for-travelers/`  
Original publication: December 21, 2025  
Updated: October 11, 2026  
Schema: BlogPosting, BreadcrumbList, FAQPage (FAQ script embedded in original article).  
Useful for search engines and AI readers; no guarantee of rankings or citations.

## Publishing notes

- Inspect your site's actual component interfaces; an isolated TypeScript syntax test cannot validate app-specific properties or imported assets.
- Confirm that the photo and shared components exist at the specified paths.
- Review travel entry rules, visa information, prices and travel advisories before publishing, as they can change.
- A full `next build` in your project has not been run.

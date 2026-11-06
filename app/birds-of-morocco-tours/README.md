# Birds of Morocco Tours — Moorish Tour Next.js article

## Installation: ONE folder, no moving generated components

Copy the entire `birds-of-morocco-tours/` directory into your Next.js project at:

`app/birds-of-morocco-tours/`

This already contains `page.tsx`, `BirdsOfMoroccoToursArticle.tsx`, `BirdsOfMoroccoToursSingle.tsx`, `section1.tsx`–`section13.tsx`, `faqData.ts`, `tableOfContents.ts`, `article-content.md` and `internal-link-audit.json`.

Inside `page.tsx`, the imports are relative:

```tsx
import BirdsOfMoroccoToursArticle from "./BirdsOfMoroccoToursArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";
```

`BirdsOfMoroccoToursArticle.tsx` imports `./section1` through `./section13`. There are no separate article component folders.

Use **either** the modular `BirdsOfMoroccoToursArticle` (default page) **or** the complete `BirdsOfMoroccoToursSingle` (alternative)—not both on one page.

## Existing project dependencies (must already exist)
- `@/Compentents/blogtour/blogTour` — hero component with `metainfo` prop
- `@/Compentents/blogtour/sidebareBlogTou` — blog sidebar
- `@/Compentents/blogtour/contentTable` — contents widget
- `@/Compentents/placeCard` — PlaceHoverCard
- `@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg` — **temporary landscape photo**, replace with a relevant licensed birdwatching photo and update hero/OG alt and image URL as needed
- `@heroicons/react/24/outline`, Next.js `Link` and `Image`, Tailwind CSS

## Article details
- URL: `/birds-of-morocco-tours/`
- Canonical: `https://moorishtour.com/birds-of-morocco-tours/`
- Original publication date: February 20, 2026
- 12 preserved source sections + 1 FAQ section, 58 TOC anchors, 14 FAQs
- 31 contextual article links to 21 different URLs
- **`/morocco/` is linked exactly once in the article body** (first natural occurrence of the word Morocco)
- First PlaceHoverCard only: agadir, casablanca, dades-valley, erg-chebbi, essaouira, fes, high-atlas-mountains, ifrane, marrakech, merzouga, middle-atlas, ouarzazate
- Server-rendered sections with no required client-side JS; FAQ opens natively with `<details>`
- `BlogPosting`, `BreadcrumbList` and `FAQPage` structured data; answer-first intro and wildlife/itinerary comparisons

## Editorial / fact-checking notes
The provided source includes claims about guide qualifications, 4×4 inclusions, booking/deposits and facilities. Confirm every specific promise against current Moorish Tour operations before publication. Sightings are never guaranteed; Dayet Srij is seasonal and protected bird areas require responsible access. Some species called 'endemic' in older tourist writing are actually regional North African specialties or checklist-dependent forms. The final code has a clarifying taxonomic note.

Other real-world caveats: links included are existing or previously used Moorish Tour URLs, but check every destination after publishing. The generated code was syntax checked, not built against your actual project.

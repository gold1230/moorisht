# Moroccan Food Tour – The Tasty Heart of Morocco

## EXACT PLACEMENT: ONE FOLDER. NO IMPORT PATH FIXES.
Copy the ENTIRE folder `moroccan-food-tour-the-tasty-heart-of-morocco` straight into your project's **`app/`** directory:

```
app/
  moroccan-food-tour-the-tasty-heart-of-morocco/
    page.tsx                  <- Next.js route (already correct)
    MoroccanFoodTourArticle.tsx
    MoroccanFoodTourSingle.tsx
    ArticleElements.tsx
    tableOfContents.ts
    faqData.ts
    section1.tsx ... section22.tsx
    article-content.md
    internal-link-audit.json
    README.md
```

The page correctly uses:
```tsx
import MoroccanFoodTourArticle from "./MoroccanFoodTourArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";
```
The article correctly imports `./section1` ... `./section22`.
Every section correctly imports `./ArticleElements` and, as required, existing site components from `@/Compentents/...`.
**Do not** move the generated section files to `Compentents/blog/` or copy `page.tsx` elsewhere.

## Existing site dependencies (already in your reference page)
These imports refer to existing site-wide code or assets, not generated local files:
- `@/Compentents/blogtour/blogTour`
- `@/Compentents/blogtour/sidebareBlogTou`
- `@/Compentents/blogtour/contentTable`
- `@/Compentents/placeCard`
- `@/public/plan/plan-your-morocco-tour-hero-extracted.jpg`
- `next/link`, `@heroicons/react/24/outline`

`ctaImage` uses the same local site image referenced in your uploaded `page(9).tsx`. If that site image has been renamed, update the import in **one** place (`page.tsx`).

## SEO AND GEO
- Canonical: `https://moorishtour.com/moroccan-food-tour-the-tasty-heart-of-morocco/`
- Original publication date: June 28, 2025; expanded date: October 11, 2026.
- SEO title: `Moroccan Food Tour: Local Dishes & Culinary Guide | Moorish Tour`
- Meta description: `Explore Moroccan food tours, Marrakech and Fes flavours, tagine, couscous, street food, cooking classes, vegetarian choices and culinary itineraries with Moorish Tour.`
- BlogPosting, BreadcrumbList and FAQPage JSON-LD matches the visible content. Google may not show FAQ rich results for travel websites.
- Answer-first intro, descriptive headings, tables, regional specialities and practical itineraries for search and AI retrieval.
- No fabricated tour prices or guaranteed dietary arrangements.

## CONTENT SOURCES AND REVIEW
Original user website article: https://moorishtour.com/moroccan-food-tour-the-tasty-heart-of-morocco/
Official Moroccan National Tourist Office food guide: https://www.visitmorocco.com/en/travel-info/food-drinks
Official gastronomy guide: https://www.visitmorocco.com/en/discover-morocco/gastronomy
Check every advertised cooking lesson, home visit or food tour with the actual local supplier before selling.

## BUILD
From your website project, run `npx tsc --noEmit` and `npm run build`. The generated files are checked for TS/TSX syntax, local import existence, TOC anchors and ZIP integrity, but the site-specific components have not been fully typechecked in your project.

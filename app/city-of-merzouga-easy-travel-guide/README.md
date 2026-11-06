# Merzouga Travel Guide — Moorish Tour

## Installation (all files in one folder)

1. Extract the archive. Place the complete `city-of-merzouga-easy-travel-guide` directory inside **`app/city-of-merzouga-easy-travel-guide/`**.
2. All article components remain in this route folder, beside `page.tsx`. All generated imports are relative (`./section1`, `./ArticlePhoto`, and so on).
3. Your website's existing shared components are used from their original locations: `@/Compentents/blogtour/blogTour`, `@/Compentents/blogtour/sidebareBlogTou`, `@/Compentents/blogtour/contentTable`, and `@/Compentents/placeCard`.
4. The page uses your previously provided `@/public/plan/plan-your-morocco-tour-hero-extracted.jpg` image for the sidebar CTA.
5. **Important:** the nine article photographs are references to existing local image paths from your earlier site components. Their actual photo bytes are NOT in the ZIP. You must ensure these paths exist or replace them before building:

- `public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg`
- `public/blog/content/travelers-camel-trekking-across-erg-chebbi-dunes-at-sunset.jpg`
- `public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg`
- `public/blog/content/4x4-vehicle-exploring-desert-landscapes-around-merzouga-and-erg-chebbi.jpg`
- `public/blog/content/road-through-southern-morocco-during-marrakech-to-merzouga-desert-tour.jpg`
- `public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg`
- `public/blog/content/tourists-visiting-nomad-tent-merzouga-desert.jpg`
- `public/blog/content/tourists-exploring-merzouga-desert-morocco.jpg`
- `public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg`

## SEO and GEO
- Canonical URL: `https://moorishtour.com/city-of-merzouga-easy-travel-guide/`
- SEO title: `Merzouga Travel Guide: Things to Do, Desert Camps & Tips | Moorish Tour`
- Meta description: `Explore Merzouga with local travel tips: Erg Chebbi dunes, camel trekking, desert camps, best time to visit, 1–3 day itineraries and how to get there.`
- Preserved published date: May 30, 2025. No fabricated updated date or ratings.
- Semantic tables, clear answer-first introduction, relevant internal links, FAQs, BlogPosting and BreadcrumbList schema.
- FAQPage markup may be ignored for rich-result display by major search engines; do not promise a rich-result feature.
- The word 'Morocco' links to `/morocco/` exactly **once in the article body**.
- PlaceHoverCard is used at the first natural destination mentions wherever supported.
- **No links to competitors, and no external outbound links in the article.** Only Moorish Tour relative URLs.
- 23 sections, 16 FAQs, 23 internal contextual links (20 unique targets), 10 in-article image placements from 9 local pictures.

## Editorial notes
- The previous post contained an exaggerated dune height. The guide uses *roughly 150 metres* rather than 400m.
- Dayet Srij is a seasonal lake; visitors must check water and sightings for their dates.
- All sample trip plans and prices require confirmation; no guaranteed camp facilities, wildlife sightings or weather.
- `node` syntax-parsing verification does not replace a full project typecheck. Run `npm run build` after copying into your project.

# New original Morocco blog guides — 20 October 2026

These **six original, English-language articles** were added to Moorish Tour using the existing article header, blog sidebar and card template. They are *inspired by general subject areas* researched on MarocMama, but do not copy its language, photos or distinctive content.

| Article | Route | Approximate length |
|---|---|---|
| Morocco with Kids: A Complete Family Travel Guide | `/morocco-with-kids-family-travel-guide/` | 1,769 words |
| What to Eat in Morocco: Traditional Food & Dining Guide | `/moroccan-food-what-to-eat-travel-guide/` | 1,733 words |
| Morocco in Winter: Weather, Packing & Best Places to Visit | `/morocco-in-winter-weather-packing-guide/` | 1,506 words |
| Marrakech Souks Guide: Shopping, Prices & Local Tips | `/marrakech-souks-shopping-guide/` | 1,606 words |
| Getting Around Morocco: Trains, Buses, Taxis & Drivers | `/getting-around-morocco-transport-guide/` | 1,588 words |
| Morocco in Summer: Where to Go & How to Stay Cool | `/morocco-in-summer-where-to-go-guide/` | 1,582 words |

## Integration
- Each article has its own Next.js route under `app/<slug>/page.tsx`.
- Shared page styling and structured data are in `content/editorial/MoroccoEditorialArticle.tsx`.
- Article text, FAQ content, metadata, related posts and reusable images are in `data/editorial/posts.json`.
- New cards are added to `data/blogs.json` and shown at the top of `app/blog/latestGuide.tsx` (sorted by newest date).
- The blog listing has an image hover/zoom card with a visible "Read travel guide" hover badge.
- Every new article includes a destination hover/photo card after the third article section, linking to an existing `/locations/...` page.
- The index sitemap uses the updated `data/routes.json`, so the six posts enter `/sitemap.xml`.
- BlogPosting and BreadcrumbList structured data are generated for the new posts without invented reviews.

## Image placeholders
These posts currently use existing **Moorish Tour image assets as temporary photographs**. The image sources can be replaced with original, accurate photographs via `data/editorial/posts.json` without editing page structure. The Moroccan food and Marrakech souks posts currently use a general Marrakech city image; replace with a photograph of food/souks when available. All six image paths exist in the project.

## Editing
Edit text in `data/editorial/posts.json` (the live source). The Python builder under `content/editorial/build_articles.py` is a development-only source generator; running it again overwrites the article JSON with the source text in that builder, so avoid running it after editing JSON unless you intend to regenerate all articles. The integration script is a one-time script and must not be rerun over the already-integrated project.

## Deploy via Git
1. Unzip the project; copy changed files into the root of your existing Git repository without deleting `.git` or secrets/environment files.
2. Run `git add -A && git commit -m "Add six original Morocco travel guides" && git push origin main`.
3. Verify the new routes, images and cards after deployment. Visit the live sitemap and test one article in Google Rich Results Test.

## Validation
Static route, asset path, SEO, TypeScript syntax and project contrast audits have passed. An actual production build and visual browser tests should be run after installing project dependencies (`npm ci && npm run build`).

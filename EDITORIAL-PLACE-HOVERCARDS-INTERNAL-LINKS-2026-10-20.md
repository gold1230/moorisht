# Moorish Tour Blog: Place Hover Previews & Internal Links

Updated six newly published travel guides without changing their long-form text or existing article template.

## What readers will now see

- Highlighted place names in the article body use the site's existing `PlaceHoverCard` component. Hovering or keyboard-focusing displays a photo, description and link; clicking or tapping the text navigates to the destination page.
- A dedicated **Places mentioned in this guide** image-card grid is inserted after the third article section (between 3 and 4 cards on most posts). Cards lift and zoom on hover, and navigate to the appropriate destination guide.
- A contextual **Useful guides** panel after the second article section links to two related blog guides.
- A **Tours related to this guide** panel after the sixth article section links to 2–3 real, existing Moorish Tour itineraries, with images, duration and links.
- Existing FAQs, SEO metadata, tables of contents, BlogPosting and BreadcrumbList schema, sidebars, related blog cards, and lengthy article content are preserved.
- These sections are also included in the table of contents.

## Files changed or added

- `content/editorial/MoroccoEditorialArticle.tsx` — displays the new internal links and sections.
- `content/editorial/editorialConnections.ts` — per-article curated destination, tour and guide links.
- `content/editorial/editorialInlineLinks.tsx` — places previewed inline with existing `PlaceHoverCard`; additional page links appear naturally inside prose.
- `content/editorial/EditorialExplorationCards.tsx` — responsive hoverable destination cards, tour cards, and related-guide panel.
- `scripts/validate-editorial-hover-links.cjs` — verifies all routes, image assets, configuration and TSX syntax.

## Important deployment note

The ZIP contains `moorishtour/` at the top level. Copy the contents **inside** that folder over the root of your cloned Git repository; do not create `moorishtour/moorishtour` or overwrite `.git`, `.env` or private secrets.

```bash
node scripts/validate-editorial-hover-links.cjs
npm ci
npm run build
git add -A
git commit -m "Add blog place hover previews and related tour links"
git push origin main
```

After deployment, test the following as examples:

- https://moorishtour.com/morocco-with-kids-family-travel-guide/
- https://moorishtour.com/marrakech-souks-shopping-guide/
- https://moorishtour.com/morocco-in-summer-where-to-go-guide/

Scroll inside the guide and hover or focus on linked place names (such as Marrakech, Fes, Merzouga and Essaouira). On touchscreen devices, tap to visit the page; the large destination cards are always visible.

## Automated validation

Local tests: 6 guides, 34 matching in-text place/page mentions, 23 destination cards, 15 tour cards and 68 route checks. Existing route, SEO, Product/TouristTrip and static contrast checks also passed. The full Next.js build and live hover visual QA were not run in this environment because npm dependencies are not installed.

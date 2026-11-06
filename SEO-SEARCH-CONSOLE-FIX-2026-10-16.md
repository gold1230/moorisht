# Google Search Console Breadcrumbs + Homepage SEO Fix — 16 October 2026

## Homepage SEO title (one sentence)
Explore Morocco Tours & Marrakech Desert Tours with Moorish Tour

The homepage uses `title: { absolute: homeTitle }` so the global title template does not append a second brand name.

## Homepage SEO description
Explore Morocco tours and Marrakech desert tours with local guides. Discover Sahara adventures, private itineraries and top places to visit in Morocco.

## Google Search thumbnail
The same existing Merzouga desert trip photo used in the homepage hero is now explicitly preferred through:
- Homepage `openGraph.images` (`og:image`)
- `twitter.images`
- `WebPage.primaryImageOfPage` with a full-size, publicly accessible image URL

The logo is preserved in the sitewide `TravelAgency.logo`, where it belongs. Google can still select a different preview image; these tags are preference signals, not a guarantee. Google's small site icon (favicon) is separate from the large result thumbnail.

## Breadcrumb structured data
The `LocationPageTemplate` was producing relative `item` URLs when `NEXT_PUBLIC_SITE_URL` was unset. Other archives had the same problem. Pages covered:
- All location detail pages (shared template)
- Locations archive
- Destinations archive
- Imperial Cities archive
- Atlas Mountains & Valleys archive
- Atlantic & Northern Morocco archive
- Private Morocco Tours archive

These now use `lib/absoluteSiteUrl.ts` to always produce full `https://moorishtour.com/.../` URLs. No environment-variable configuration is required.

## QA
Run `npm run check:seo` to test the changed SEO source and preferred image. All 9 changed TS/TSX files also passed syntax transpile checks separately. A full dependency-based Next.js build was **not** completed in this environment because `npm ci` did not finish; please run `npm ci && npm run build` in your usual environment/CI.

## How to deploy and verify
1. Replace your existing project with the updated files; commit and deploy as usual.
2. Check the page source of the live homepage for `og:image` and `primaryImageOfPage` using the selected Sahara image URL.
3. Run [Google Rich Results Test](https://search.google.com/test/rich-results) for a previously affected URL, e.g. `https://moorishtour.com/locations/marrakech/`. Verify each `BreadcrumbList.itemListElement[].item` is an absolute `https://` URL.
4. In Google Search Console, open **Breadcrumbs** -> the URL/id issue -> **Validate Fix**. Use URL Inspection to request recrawl of the homepage.
5. Wait for Google to recrawl and update its index. Google determines the final search title and thumbnail automatically, so visible Search changes are not immediate or guaranteed.

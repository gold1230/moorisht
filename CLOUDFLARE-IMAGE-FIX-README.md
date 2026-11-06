# Moorish Tour — Next.js Image Error / Cloudflare CDN

Error: `The requested resource isn't a valid image for /_next/static/media/abdou-faiz-mBo2EUfJ7sY-unsplash.f915c7ec.jpg received null`

## Changes in this package

* `Compentents/blogtour/blogTour.tsx`: the blog author image now uses a stable image URL under `/public/images` instead of a build-hashed static-media import.
* `content/blogsection.tsx`: removes an unused import of the same card image.
* `public/images/morocco-desert-author.jpg`: validated copy of existing 301x201 JPEG, with a clean filename.
* No redirects, SEO, page routes, CSP settings or global image optimization rules changed.

These changes prevent new pages using this component from requesting a build-hashed variant of that card image. The specific logged hash may also belong to a previous deployment; only purging stale CDN/HTML caches and deploying an internally consistent build will resolve such older references.

## Apply the fix

1. Copy the three changed files to the same paths in your Next.js project, or deploy the complete package.
2. Build and deploy the entire Next.js application as one release (`npm ci && npm run build`, then restart your production service). Never deploy a new HTML build separately from its matching `/_next/static` assets.
3. In Cloudflare, go to **Caching -> Configuration -> Purge Cache**. Purge cached affected pages and old image optimization URLs, or purge everything once if the site was just migrated.
4. Under Cloudflare Cache Rules, **do not apply Cache Everything to HTML/Next.js dynamic routes**. Avoid custom cache rules for `/_next/image*` until the application works correctly. Leave hashed `/_next/static/*` assets cacheable normally.
5. Inspect the URL `https://moorishtour.com/images/morocco-desert-author.jpg` in your browser. It should return an image. Then check the affected page with Chrome DevTools > Network, reload, filter by Images, and confirm that images return 200 and Content-Type starts with `image/`.
6. Test in Chrome Incognito. If the exact old `.f915c7ec.jpg` error still occurs, inspect the page/Referer that requests it; a stale browser/CDN HTML response or a mismatched deployment is likely.

IMPORTANT: We validated the local JPEG file and source references; a production Next.js build or live image response test was not available in this environment. This is a targeted preventative code change, not a confirmed repair of Cloudflare cache behavior.

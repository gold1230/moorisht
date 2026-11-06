# Moorish Tour — deployment-ready project

This folder is the complete Next.js source code with repaired routes and JSON catalogs. It deliberately excludes development caches, dependencies, Git history and secrets. Your own `.env.local` values must be set in your hosting environment if required.

## 1. Install and validate

```bash
npm ci
npm run check:deploy
npm run build
npm start
```

Your hosting provider can use **Build command:** `npm run build`; **Start command:** `npm run start`. The app uses Next.js App Router, Node 22 or a supported Node version, and Webpack build settings from `package.json`.

## 2. What was repaired

- Rebuilt `data/blogs.json` from all 33 real article routes; every entry includes title, description, metadata, canonical URL, valid local image and a valid route slug.
- Rebuilt `data/tours.json` from all 17 real tour detail page routes and their own tour data.
- Blog sidebar, post search, card collections and tour archive now link to real routes without `/blog/blog/` or `/tours/tour/`.
- Updated `data/destinations.json` and `data/places.json`: all links and images resolve to local existing pages/files. Some unavailable location-specific photos use local illustrative alternatives until you add the intended originals.
- Removed accidental nested `app/app/` duplicate routes and old single-component demo pages that imported missing files.
- Corrected static links, several canonical URLs and missing article page metadata.
- Regenerated `app/sitemap.ts` using `data/routes.json` so it lists actual pages only.
- Added `npm run check:routes` to validate live App Router directories against JSON entries, images and static internal hrefs; `npm run check:deploy` also checks TypeScript.

## 3. JSON slug format

All JSON `slug` values hold the **existing route without a leading slash**, e.g. `city-of-merzouga-easy-travel-guide` and `tour/3-days-tour-from-fes-to-merzouga`. In cards, link via `href={`/${post.slug}`}` or `href={`/${tour.slug}`}`. Never prepend `/blog/` or `/tours/` blindly.

## 4. Validation boundary

`tsc --noEmit` passed and the source route checks passed in the working environment. A complete local `next build` could not run here because the user-provided `node_modules` contained Windows-native SWC binaries, whereas the validation container is Linux and cannot access npmjs.org. Running `npm ci` on the deployment platform will install its platform-specific SWC package. You should run the build command there before switching the live website.

## 5. Security

No `.env*`, `.git`, `.next`, `node_modules` or TypeScript build cache is bundled. Do not publicly upload environment secrets. When replacing a live project, back up your existing `.env` and deployment settings first.

## Next.js 16 page export validation

Use `npm run check:next-exports` to check that all App Router page/layout/route files export only Next.js-supported fields. For example, the 3-days article now keeps `tableOfContents` private rather than exporting it from `page.tsx`. Run `npm run check:deploy` and then `npm run build` on your machine.

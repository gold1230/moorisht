# Moorish Tour — deployment audit (14 October 2026)

This is the full corrected **Next.js 16** source project. It includes all of the existing blog pages, tour detail pages, images in `public`, JSON catalogs, components, configuration, and a strengthened suite of validation scripts. It excludes Windows-only `node_modules`, `.next`, caches, the original Git repository, and environment secrets.

## Changes

- Explicitly set `runtime = "nodejs"` on all **eight** Open Graph image generators. No Edge runtime exports remain.
- Verified that **all eight Open Graph generators actually render valid 1200 × 630 PNGs** using `next/og` in Node.js. This tests the Satori layout error that previously stopped the production build.
- Fixed a missing `/videos/morocco-tour-video.mp4` reference: the affected tour-hero button now links to the site's real `/activity/` page rather than trying to play a nonexistent video. The hero no longer needs client-only state.
- Corrected **219 invalid JSX text entities** (apostrophes, etc.) in existing components and pages, without changing the visible article wording.
- Fixed remaining ESLint errors involving effect state updates, ambiguous `any` types, and an anonymous page component.
- Retained all prior navigation, blog/tour JSON, sidebar, homepage search image, and App Router export fixes.
- Added `scripts/validate-source.cjs` (all TS/TSX syntax, 3,069 local imports, 573 imported Heroicons and no Edge exports) and `scripts/validate-opengraph-render.cjs` (real PNG rendering, dimensions and runtime). The `check:deploy` command runs ESLint and all source, route, and Open Graph checks. TypeScript is available separately through `npm run typecheck`, and `npm run build` runs its own Next.js type check.

## Checks executed successfully in the audit environment

- `tsc --noEmit` — **PASS** (strict TypeScript type checking).
- `eslint app Compentents --quiet` — **PASS** (no lint errors).
- Next.js App Router export verification — **PASS**, 126 modules.
- Route, post, tour and local JSON image validation — **PASS**: 122 pages, 33 blog entries, 17 tour entries, 30 destination entries, 45 place entries, 1,253 static links, and 125 JSON images.
- Source syntax and dependency audit — **PASS**: 1,109 source files, 3,069 local imports, 573 Heroicons imports, zero Edge runtime exports.
- Image JSX validator — **PASS**, eight image generators.
- **Actual Open Graph image rendering — PASS**, eight valid PNG outputs of 1200 × 630.
- Archive contents are verified and exclude environment secrets and prebuilt caches.

## Production build limitation

The **full Linux production build could not be completed here** because the uploaded dependencies contain only Windows-native Next.js SWC packages (`@next/swc-win32-x64-msvc`), and the audit environment has no network access to download the required Linux SWC binary (`@next/swc-linux-x64-gnu`). This is a **testing-environment limitation**, not a detected application compile error. Your prior Windows build had already passed compilation and type checking; the Open Graph route that failed subsequently is now tested by real rendering.

**A clean successful `npm run build` on your Windows machine or actual hosting platform is still required before live deployment.** No claim is made that the full production build has been independently verified here.

## Deploy on Windows (PowerShell)

1. Extract the ZIP. Open a terminal inside the extracted `moorishtour` folder (where `package.json` lives).
2. Use Node.js 22 or newer and run:

   ```powershell
   npm ci
   npm run check:deploy
   npm run build
   ```

3. Only deploy if **all three commands finish without errors**. Start locally with `npm run start` and visit the homepage, `/blog/`, `/tour/`, `/activity/`, and the previously failing Open Graph image URL `/morocco-tours-from-spain/opengraph-image`.
4. On your hosting provider, configure production environment variables in the hosting settings; no `.env` file or secrets are included here.

## Notes

- The site's current routes, folders, page copy, sidebar, local image assets, JSON catalogs and SEO metadata have been preserved except for the specific fixes described above.
- `check:deploy` now includes lint, Next.js exports, routes/JSON/local images, source imports, and real Open Graph rendering. Type checking remains available as `npm run typecheck` and is performed by the production build.

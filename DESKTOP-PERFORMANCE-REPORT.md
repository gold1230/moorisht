# Moorish Tour: Desktop performance changes (15 October 2026)

## Baselines supplied by the site owner

- Desktop Lighthouse: performance **68**, FCP **0.3 s**, LCP **0.5 s**, TBT **1,900 ms**, Speed Index **1.6 s**, CLS **0**.
- Earlier mobile report: FCP **1.5 s**, LCP **2.0 s**, TBT **730 ms**, Speed Index **2.7 s**, CLS **0**.
- Desktop diagnostics: 3.2 seconds of main-thread work, including 2.6 seconds categorized as “Other”, 65 KiB potentially unused JavaScript, ~17 KiB legacy-JavaScript warning, a large decorative background image, 32 ms attributed to forced reflow, and a non-composited animated shadow.

## Source changes made

1. **Interactive search is now loaded on demand.** The initial homepage search field remains visible and accessible. The full `searchBoxInteractive.tsx` (tour/blog dataset filtering, autocomplete, recommendation cards) is loaded only when a visitor focuses or types into the search field. This reduces unnecessary initial JS work while retaining the search feature.
2. **Homepage and internal navigation headers are code-split** using dynamic imports in `Compentents/headerAll.tsx`, so the unused header need not be part of the initial route's JavaScript chunk.
3. **Disabled automatic Next.js link prefetch** in the homepage hero, popular tour cards, blog cards, destination cards, footer, and navigation. The links remain fully functional and crawlable, but loading a large set of linked pages is no longer encouraged merely because cards enter the viewport.
4. **Removed scroll-to-top React hydration/scroll listener.** The control is now an accessible native `#top` link. CSS scroll-driven animation reveals it after scrolling in browsers that support the feature; it remains usable in browsers without that feature.
5. **Eliminated non-composited shadow animation** from the contact disclosure's transition, using `transition-colors` instead.
6. **Compressed the destinations background:** created `public/abdou-faiz-morocco-destinations.webp` (~90.8 KB) from the 408 KB JPEG source. Both homepage destinations and CTA components use the optimized image. Destination background uses a smaller allowed Next.js quality and a responsive `sizes` hint. Kept the original JPEG because other site pages reference it.
7. **Reduced off-screen rendering work** with `content-visibility: auto` and estimated sizes on four below-the-fold homepage sections. The content remains present in the server-generated HTML, and the sizes are updated by supported browsers after rendering.
8. Preserved all previous route, Open Graph, accessibility, Node.js runtime, mobile image and `source-map-js` 1.2.2 security changes. Added `npm run check:performance` to catch accidental regressions.

## Important caveats

- **No new Lighthouse score is asserted.** The estimated improvements are not equivalent to a measured speed increase; only a fresh test on the deployed website can show the effect. Desktop TBT categorized as “Other” by Lighthouse may also depend on server/environment and the testing conditions rather than only application JS.
- A small Next.js/Tailwind CSS file may still render-block initial paint. Avoid disabling critical CSS simply to remove a zero-millisecond desktop warning.
- The legacy-JavaScript warning can be framework compatibility code. Unverified polyfill removal or forced browser-target hacks were avoided.
- The 32 ms reflow diagnostic is relatively small and unattributed. No arbitrary DOM-read rewrites were made without an identified culprit.
- CSS `content-visibility` and scroll-driven animations are progressive enhancements; unsupported browsers still show the content and the scroll control.
- The existing WhatsApp link still points to a **placeholder number**. Replace `https://wa.me/212600000000` in `Compentents/FloatingContactButtons.tsx` with your real verified contact before deployment.

## Validation and deployment

Source-only checks completed in the sandbox:
- **1,120** TS/TSX/JS source files passed parser syntax checks.
- **122** routes and **126** Next.js App Router modules passed the existing audits.
- **1,253** internal static links, **125** JSON image paths; Open Graph layout check passed for **eight** images.
- `npm run check:performance` passed; security lockfile preserved at 1.2.2.

The sandbox cannot access the npm registry, and there is no complete installed Next.js dependency tree, so **a full TypeScript semantic check, production build and browser Lighthouse re-test could not be completed here**.

From your Windows PowerShell in the project root:

```powershell
npm ci
npm run typecheck
npm run check:deploy
npm run build
```

Only after those pass should you deploy:

```powershell
git add .
git commit -m "Reduce homepage JS and improve desktop performance"
git push origin main
```

Measure the deployed site again at https://pagespeed.web.dev/ in **both Desktop and Mobile** modes. Compare TBT, LCP, INP field data (where available), total JS transferred, and dropped frames when opening the tour-search dropdown. SEO ranking also depends on quality, relevance and other signals: PageSpeed improvements alone do not guarantee search placement.

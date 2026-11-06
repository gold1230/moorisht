# Moorish Tour Mobile Performance and Accessibility Fixes

## Changes compared with the last security-fixed project

- Removed client hydration from the site's footer, which uses no client-only features.
- Replaced the heavyweight animated contact portal (604 lines of React state, effects and timers) with a native accessible `<details>` disclosure. WhatsApp and email options remain available, but the first-visit animation is intentionally removed for performance.
- Corrected rating containers to use `role="img"` with accessible rating labels.
- Gave each homepage “View Tour” link a unique accessible name containing that tour's title.
- Darkened amber text/buttons over light backgrounds for better WCAG contrast.
- Lowered image compression quality to 60 for the hero, tour cards, destination images and blog cards; corrected responsive `sizes` to reflect content width. Existing originals and Next/Image lazy loading are kept.
- Updated permitted Next.js image qualities to include quality 60.
- Kept the render-blocking Tailwind CSS link rather than implementing unsafe asynchronous stylesheet tricks, as the measured opportunity was only ~80 ms and hiding critical CSS would risk flash of unstyled content.
- Added a compatibility-focused CSP baseline: `script-src`, `object-src 'none'`, `base-uri`, frame protection, and permissions for Cloudflare Turnstile. **This is not a strict nonce/hash CSP**, because enforcing it untested would risk breaking Next.js hydration and the site's forms. Trusted Types enforcement has NOT been enabled for the same reason.
- Corrected the homepage Open Graph and TravelAgency logo URLs; both old paths were missing from the project.
- Moved homepage JSON-LD into server-rendered native `script` tags to keep it in initial HTML without the Next Script client runtime. Removed unsupported Website SearchAction markup that pointed to `/tour?search=...`, because the tour listing does not read that query parameter.
- Preserved the `source-map-js` override at patched version 1.2.2 and prior Node.js/OG/build fixes.

## Validation performed

- Next.js static route audit: **122 routes; 33 blog, 17 tour, 30 destination and 45 place entries; 1,253 internal links and 125 static image references: PASS**.
- TypeScript compiler-parser syntax audit across **1,119 TS/TSX/JS modules: PASS (0 syntax errors)**.
- Homepage Open Graph image path and organization logo checked to exist under `public/`: PASS.
- Package lock reports `source-map-js` 1.2.2: PASS.
- No complete production build was possible in this environment: npm installation stalled due unavailable package registry, so **TypeScript semantic checking, ESLint, Next production build, and new PageSpeed measurements have NOT been verified**.

## Critical checks before deployment

Run these from the project folder on Windows with Node.js 22:

```powershell
npm ci
npm run typecheck
npm run check:deploy
npm run build
```

Only push to GitHub and deploy after those commands succeed. Re-test mobile using https://pagespeed.web.dev/ on the deployed homepage, then review the new Total Blocking Time, accessibility and Core Web Vitals. A single Lighthouse simulation score does not guarantee SEO ranking or real visitor experience. Google's ranking depends on content helpfulness, relevance, site quality, usability, and many other signals beyond performance.

## Action needed from site owner

The original floating contact widget used a placeholder WhatsApp destination `https://wa.me/212600000000`; the lightweight replacement intentionally retains that URL. **Replace it with the verified WhatsApp number before release** in `Compentents/FloatingContactButtons.tsx`. The email now links to `moorishtour@gmail.com`, matching homepage business metadata; confirm it is current.

## Why some warnings may remain

- Next.js/Tailwind's small critical CSS stylesheet may continue to be render-blocking (necessary to avoid incorrect first paint). The reported 80 ms improvement is modest.
- “Legacy JS” may come from the shared Next.js runtime/compatibility bundles; no unsupported build changes were made to remove transforms.
- A strict nonce-based CSP and enforced Trusted Types require testing all interactive features, Turnstile, production scripts, and dynamic Next.js routes. The new CSP is a compatibility-focused improvement, not a full XSS guarantee.
- DOM size and other third-party content need browser-based testing to assess accurately.
- The new contact menu looks simpler and no longer runs first-visit animations by design.

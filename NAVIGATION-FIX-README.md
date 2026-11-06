# Moorish Tour navigation update (October 2026)

## What changed

- `Compentents/headerAll.tsx`: one stable header component for all pages. Removed the dynamic swapping between the homepage header and inner-page header to avoid header remounting during client-side navigation.
- `Compentents/header.tsx`: retains the homepage transparent/white header and inner-page brown header with pathname-based styling, while keeping the same mounted instance; enables Next.js automatic prefetching for main navigation links.
- `content/bannerhome.tsx` and `content/card.tsx`: enable normal Next.js link prefetching for the most-used homepage links and popular tour cards. The long footer and blog lists still have prefetch disabled to limit background network work.
- `proxy.ts`: NOT removed. With `MOORISH_STRICT_CSP` unset or set to `0`, it returns NextResponse.next() with no response transformations. With `MOORISH_STRICT_CSP=1`, dynamic SSR and nonce CSP apply; deploy only if intentionally configured and tested.

## Why

On the old homepage, clicking an internal tour link remounted the whole header because HeaderAll dynamically swapped two different components. The new version retains the same header while transitioning, helping it feel like an app rather than a reload.

In Chrome DevTools > Network, filter **Doc**, then click an internal link. No new HTML document request means the App Router is performing client-side navigation. Next.js `?_rsc=` requests are normal. Full document reloads can still be caused by unexpected Cloudflare settings or third-party code.

## Deploy

1. Copy this project over the checked-out Git repo, leaving `.git` and local `.env` files alone.
2. Verify environment variable `MOORISH_STRICT_CSP` is not `1` unless you deliberately configured nonce CSP at build AND runtime.
3. Run `npm ci`, `npm run typecheck`, `npm run build` (when dependencies are available).
4. `git add -A && git commit -m "Improve Next.js client navigation" && git push origin main`.
5. Redeploy and only purge Cloudflare HTML cache if stale code is still being served. Leave `/_next/static/` immutable assets alone.

No proxy, SEO, metadata, tour routes, or booking forms were removed by this navigation-only fix.

# Moorish Tour – Cloudflare CSP compatibility patch

This project keeps the previous two real pages, SEO improvements, and the existing design.

## Changes

- `lib/securityPolicy.ts`: permits `https://static.cloudflareinsights.com` in script-src for Cloudflare's auto-injected analytics beacon. Existing connect-src already allows same-origin `/cdn-cgi/rum` and HTTPS reporting.
- `lib/securityPolicy.ts`: adds `MOORISH_REPORT_TRUSTED_TYPES=1` optional flag.
- `next.config.ts`: the Trusted Types **report-only** header is now opt-in; actual CSP remains enforced. Set `MOORISH_REPORT_TRUSTED_TYPES=1` if you want to audit browser Trusted Types warnings. **Do not set** `MOORISH_ENFORCE_TRUSTED_TYPES=1` until application compatibility has been tested.
- No route, layout, booking, breadcrumb, sitemap or SEO changes.

## Deploy & verify

1. Apply the changed files or deploy the full project through GitHub.
2. Rebuild and deploy your Next.js website.
3. In Cloudflare, clear cached HTML if old security headers persist (Caching -> Configuration -> Purge Cache).
4. In Chrome DevTools -> Network -> select the document -> Response Headers, inspect the actual Content-Security-Policy and Content-Security-Policy-Report-Only headers. Ensure no second rule at Cloudflare or upstream server is blocking the beacon.
5. Reload and verify the beacon script is no longer blocked; if Analytics is enabled, check for a request to `/cdn-cgi/rum`.
6. Confirm main pages and forms still work.

## Notes

- In optional strict CSP mode (`MOORISH_STRICT_CSP=1`), `strict-dynamic` can override domain allowlists and block Cloudflare's auto-injected script. This patch is designed for the project's default, static-friendly mode. If strict mode is enabled, keep script CSP strict and configure Cloudflare Web Analytics separately rather than adding insecure broad exceptions.
- Trusted Types warnings with `Report-Only` are diagnostics, not functional failures. Opting out quiets the console but does not repair every code path that would fail under enforcement.
- The `/blog/` warning about a preloaded `plan-your-morocco-tour-hero` image is a performance hint, not the Cloudflare issue. The blog's actual hero uses a different picture; we left its LCP priority unchanged to avoid degrading PageSpeed. If warning continues, inspect the image request's Initiator and the triggering page/navigation before modifying a `priority` flag.

## Files to edit for patch-only ZIP

Copy `lib/securityPolicy.ts` and `next.config.ts` into the same relative paths of your existing project.

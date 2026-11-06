# Moorish Tour — performance, CSP and email DNS deployment guide

## Included code changes

- Added 7-day browser caching (with one-day stale-while-revalidate) on public image folders: `/images/`, `/home/`, `/tours/`, `/blog/`, `/locations/`, `/plan/`. These have non-versioned URLs and should NOT be cached as immutable for 1 year.
- The hashed `/_next/static/` files retain **Next.js's own immutable caching**. Do not override those headers.
- `compress: true` was **already** enabled in `next.config.ts`; no extra compression library or fake compression middleware was added.
- Allowed `fonts.googleapis.com` and `fonts.gstatic.com` in the corresponding existing CSP directives. The four security scanner directives (`script-src`, `object-src`, `base-uri`, `frame-src`) were **already present** in the normal site policy.
- Removed five inline placeholder SVGs that attempted to reference a separate JPG inside the SVG, with no impact on the shown photos. The regular Next.js image optimizer remains in use.
- Added `npm run audit:delivery` to check public SPF TXT and live HTTP headers after deployment. The script **does not change any DNS records**.

## SPF — must be corrected in Cloudflare DNS, not Next.js

Open Cloudflare dashboard > moorishtour.com > DNS > Records. Filter TXT at the SAME hostname (`@` for root); find all TXT values beginning exactly with `v=spf1`. There must be **one** SPF TXT record for each hostname. Combine mechanisms from **all legitimate sending services** and retain only one final `~all` or `-all` at the end. Do not guess which services send domain email; deleting an include can break booking emails and delivery. Do not merge SPF from different subdomains. Also keep SPF's maximum of 10 DNS lookups in mind. Other unrelated TXT records can remain untouched.

Example format ONLY if both Google Workspace and another verified sender are used (not a copy/paste value):

    v=spf1 include:_spf.google.com include:SPF-FROM-YOUR-OTHER-VERIFIED-PROVIDER ~all

If using Hostinger Email, use Hostinger's current SPF mechanism from its email setup screen, not the placeholder above. If using Gmail personal accounts without sending as `@moorishtour.com`, that does not automatically require Google Workspace in the domain SPF. Ask for a Cloudflare DNS TXT screenshot (values, not passwords) for an exact safe combined value.

## CSP: why the scanner still mentions `unsafe-inline`

The existing default CSP enables `'unsafe-inline'` to retain Next.js prerendered inline scripts, HTML hydration, existing inline styles, schema and Cloudflare integrations. A nonce-based **script** CSP mode already exists (`MOORISH_STRICT_CSP=1` at BOTH build and runtime): it must be tested in staging because it forces request-specific dynamic rendering, impacts speed, and a Cloudflare-injected analytics beacon may fail with `strict-dynamic`. It is NOT enabled automatically by this update. The default stylesheet policy still allows inline style attributes, so this release does not claim to eliminate every unsafe-inline warning.

The scanner's missing-directives warning can originate from requests served by Cloudflare, including nonexistent `/404javascript.js` URLs, which may not receive Next.js `next.config.ts` headers. Use `npm run audit:delivery` and check actual response headers. If edge-generated error pages omit CSP, configure equivalent security headers at Cloudflare edge carefully, avoiding duplicate/conflicting CSP policies. Never add an edge-level CSP that blocks Next.js scripts without testing.

## Cloudflare actions after deploy

1. **Caching > Cache Rules**: cache only versioned `/_next/static/` assets using origin cache headers; do not force HTML cache (the site uses Next.js navigation with `?_rsc`). Browser TTL = Respect origin. Never cache form/API replies.
2. **Speed > Optimization**: keep Brotli enabled (where available) and test `Content-Encoding: br` or gzip for text assets. Cloudflare may choose Brotli, gzip or zstd based on client support. Next.js `compress:true` is already set.
3. Remove unnecessary extra analytics and unneeded third-party widgets instead of blindly disabling every Next.js script. Many framework requests are required.
4. Deploy complete Next.js output atomically: missing older chunk files such as `/_next/static/chunks/547....js` cannot be repaired with Cache-Control settings alone.
5. Run `npm run audit:delivery` on a machine with internet and DNS access and review the output for SPF, CSP and caching.

## Validation

Check `npm run check:routes`, `npm run check:seo`, `npm run check:security-ai`, and `npm run typecheck` after installing all dependencies. Use a clean production build in your Hostinger pipeline. This ZIP is source code, not compiled deployment output.

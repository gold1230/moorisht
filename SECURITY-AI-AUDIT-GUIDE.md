# Moorish Tour: CSP, Trusted Types, llms.txt, and source maps

## Lighthouse items that are not errors

- WebMCP form coverage, tools registered, and schema validity marked **Not applicable** are not failures. Do not add a WebMCP integration simply to turn those green.
- Lighthouse `localhost` source map errors for Turbopack, Next devtools, and React dev builds are **development-only**. Browser extensions (for example, DeepL) are not controlled by the site. For a useful local audit, run `npm ci && npm run build && npm start`, and test `http://localhost:3000` in a browser profile without extensions.
- Public production source maps expose source code and increase upload size. Do **not** enable them solely for an unscored Lighthouse diagnostic. Next.js production browser source maps are off by default.

## llms.txt

`public/llms.txt` is served at `https://moorishtour.com/llms.txt`. It has a Markdown H1, summary, useful actual site links, and contact. It is referenced in the site layout. The file is a proposed informational convention, **not** a crawler permission policy and not a Google ranking guarantee.

## CSP security tradeoff

**Default:** The site preserves fast static rendering. The existing enforced CSP remains compatible with Next.js inline hydration scripts and Cloudflare Turnstile. A stricter frame allowlist removes the broad `https:` iframe permission, and there is no production `unsafe-eval`. Trusted Types runs in `Content-Security-Policy-Report-Only` so we can find compatibility issues before enforcing it. **Lighthouse may still warn about `unsafe-inline` on default static pages.** This is deliberate, not proof the warning was fully fixed.

**Strict nonce mode (opt-in):** Set `MOORISH_STRICT_CSP=1` **during both `npm run build` and `npm start`** (same for hosting build and runtime). The Next.js 16 `proxy.ts` generates a unique secure nonce per page request; `app/layout.tsx` uses request-time rendering via `connection()` and attaches the nonce to organization JSON-LD. `script-src` uses a nonce and `'strict-dynamic'` and excludes `'unsafe-inline'`. This will likely satisfy the Lighthouse script CSP check after you verify that all interactive features and Cloudflare Turnstile work. However, **all page rendering becomes dynamic**, which removes static-page caching and may make LCP and TTFB worse. Test carefully before enabling production-wide.

**Trusted Types enforcement (separate opt-in):** `MOORISH_ENFORCE_TRUSTED_TYPES=1` adds `require-trusted-types-for 'script'` to the enforced CSP (default sends only Report-Only). **Do not enable in production without browser-console and end-to-end testing.** React, third-party scripts, and form challenges can break with an untested enforcement policy.

If using Windows PowerShell to test strict locally:

```powershell
$env:MOORISH_STRICT_CSP='1'
npm run build
npm start
```

For normal performance-friendly builds:

```powershell
Remove-Item Env:MOORISH_STRICT_CSP -ErrorAction SilentlyContinue
npm run build
npm start
```

**Check on the live URL** with Chrome DevTools > Network > document > Response Headers. If Cloudflare or your host rewrites CSP headers, fix those upstream rules too. Avoid having two conflicting enforced CSP headers.

## Validation

```powershell
npm ci
npm run check:security-ai
npm run check:deploy
npm run build
npm start
```

Use Lighthouse on production mode in an extension-free browser; then check homepage, search, tour navigation, booking forms, and Cloudflare Turnstile. Do not claim a complete security-audit pass based on source checks alone.

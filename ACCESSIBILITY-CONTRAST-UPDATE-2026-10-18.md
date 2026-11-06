# Moorish Tour — site-wide color contrast update (18 October 2026)

This update builds on the **tour Product + TouristTrip schema** project and retains the earlier navigation, SEO, and security changes.

## Updated across the website

- Darkened amber/orange labels and links displayed over white or cream backgrounds. The baseline `text-amber-700` (`#b45309`) is 5.02:1 over white and 4.84:1 over the warm cream `#fffaf4`.
- Darkened amber call-to-action backgrounds that have white labels. White text against `bg-amber-700` is 5.02:1.
- Improved muted gray labels, informative icons, placeholder text, breadcrumbs and text hover states on pale surfaces.
- Corrected custom light-surface gold/teal labels in the Activity landing pages and activity detail pages.
- Preserved bright gold and pale text on dark hero, banner, navigation and footer backgrounds; these should not be globally darkened.
- Kept heading content, tour details, booking behavior, URLs, SEO metadata and structured data intact.

## Verify

```bash
npm run check:contrast
npm run check:routes
npm run check:seo
npm run check:tour-products
npm run build
```

Static checks and a TypeScript TSX syntax parse completed in the preparation environment. A full Next.js build was **not** available because dependencies such as `@heroicons/react` were missing; run `npm ci && npm run build` in your normal environment before deployment.

For the final accessibility assessment, run Chrome Lighthouse (Accessibility) and/or axe on representative homepage, category, tour, blog, location, Contact, booking and activity pages, at desktop and mobile sizes. **No automatic source-level pass guarantees that image overlays, hover/focus/disabled/opacity states, custom content or every rendered element passes WCAG AA.** Standard text target: 4.5:1; large text: 3:1. Controls and meaningful graphics also need sufficient contrast.

## Deployment

Copy the project files into your existing Git checkout (never delete `.git` or your own `.env` files). Then:

```bash
git add -A
git commit -m "Improve color contrast across Moorish Tour pages"
git push origin main
```

Deploy the matching Git commit to Hostinger. If Cloudflare serves stale pages after a successful deployment, verify response headers and clear the affected cache.

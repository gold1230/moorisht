# Moorish Tour social profiles update

All five provided official social profiles now come from `lib/socialProfiles.ts`:

- Instagram: https://www.instagram.com/moorishtours/
- X: https://x.com/MoorishTours
- Threads: https://www.threads.com/@moorishtours
- Pinterest: https://www.pinterest.com/moorishtour/
- Facebook: https://www.facebook.com/profile.php?id=61561111442261

## Where they appear

- `app/layout.tsx`: sitewide TravelAgency JSON-LD structured data with `sameAs`, contact details and a consistent organization `@id`.
- `app/page.tsx`: the WebSite schema points to the organization `@id`; homepage X metadata uses `@MoorishTours`. The previous homepage-only TravelAgency script was removed to avoid duplication.
- `Compentents/footer.tsx`: social links display sitewide, after the WhatsApp contact link.
- `app/contact/page.tsx`: social links display below the contact details.
- `Compentents/SocialLinks.tsx`: accessible, server-rendered links that reuse the shared profile list.

Updating the URL in `lib/socialProfiles.ts` automatically updates the HTML links and JSON-LD. No new runtime dependencies were added.

## Checks

Run `npm ci`, `npm run check:social`, `npm run check:deploy`, and `npm run build` after extracting the project. These commands should be run before deployment. A full production build was not performed in this environment.

# Moorish Tour — Booking Popup and Place Hover Alignment

Updated: 2026-10-26

## Changes
- The 20 new tour pages use the **existing tour booking popup and form**, not a contact-page redirect.
- The original tour sidebar booking card, essential information, help panel and mobile reservation control are reused on the new tours.
- Hero, quote and bottom booking actions open the same original booking form.
- Every booking enquiry includes the chosen tour title (`tourName`) with the existing `/api/book-now` endpoint.
- Destination mentions in overview, day-by-day itineraries, and other shared itinerary text use the same `PlaceHoverCard` as older tours. Popup cards show destination photos, descriptions and links.
- The 20-tour listing uses the existing rounded hover-lift tour card design, and departure-city labels use `PlaceHoverCard`.
- Tour titles, pages, images, prices, schema, and itineraries are preserved. Suggested tour prices remain indicative; final availability and quote are confirmed by the operator.

## Updated files
- Compentents/contact/booking.tsx
- Compentents/contact/ContactFormBooking.tsx
- Compentents/tour/sidebar.tsx
- Compentents/tour/NewTourDetail.tsx
- Compentents/tour/InlinePlaceLinks.tsx
- Compentents/tour/PopularTourCollection.tsx

## Deployment
1. For the complete project ZIP, copy the **contents** of the `moorishtour/` folder into the local Git project. Keep your `.git` and local environment files.
2. For the update-only ZIP, extract its six changed source files to the same project-relative paths.
3. Run `npm ci`, `npm run typecheck`, and `npm run build` before pushing where possible.
4. Run `git add -A && git commit -m "Unify tour booking popups and place hover cards" && git push origin main`.
5. Test at least one of the 20 new tour URLs on mobile and desktop. Click each booking button, submit one genuine enquiry, and verify receipt; then hover/focus destination names.

## Validation and limitations
- TypeScript/TSX syntax parsing passed for all six modified modules.
- Existing route, SEO, Product/TouristTrip schema, review and contrast source checks passed.
- The full production Next.js build and email delivery were **not** completed here because project npm dependencies are unavailable. Verify Hostinger deployment logs.

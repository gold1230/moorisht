# Tour Product Structured Data Update — 18 October 2026

## Included

- Added one **Product** node connected to the existing **TouristTrip** node inside each of the 18 individual tour pages' JSON-LD `@graph`.
- Each Product has the actual page URL, title, description, image, Moorish Tour brand, and an **Offer** with the same advertised starting price in EUR as the tour page. No invented availability or shipping details are marked up.
- Existing Trip itineraries, FAQs, website/agency relationships and breadcrumb data remain in place.
- Corrected the 3-day Marrakech desert tour graph's inconsistent schema offer (EUR 120) to the displayed page price (EUR 195), and fixed the TravelAgency logo reference.
- Removed the same page's standalone, unverified `Product` review schema which reported 315 reviews, and avoided incomplete/relative review dates in schema.
- Added a utility `lib/tourProductSchema.ts` that supports verifiable reviews **only when supplied by you**, with genuine author, date, review text and rating (1–5). Reviews must be visible on their exact tour page to be eligible.

## Why there are no invented review stars

Google disallows fake reviews, invented aggregates and republishing aggregated ratings from other websites as if they were reviews for a specific product. The 315-review claim and mock review content were not supported by verifiable evidence, so this update does not publish those values in structured data. **It does not change visible testimonial sections**; please audit and replace any unverified review content on the site separately.

For authentic reviews for a particular tour, update that tour page to pass `verifiedReviews` into `attachProductToTourGraph`, using genuine `author`, `datePublished` (YYYY-MM-DD), `reviewBody` and `ratingValue` values that are also displayed on the page. The helper then computes the aggregate directly from those actual reviews; do not manually set a larger count.

## Verification & deployment

- Run `npm run check:tour-products` for a dependency-free check of all tour templates.
- Run `npm ci` and `npm run build` to complete production compilation (dependencies not available in the packaging environment).
- Deploy with Git, then test individual tour URLs using Google's Rich Results Test at https://search.google.com/test/rich-results and Schema Markup Validator at https://validator.schema.org/.
- Note: valid Schema.org `Product` markup on a tourism service does **not** guarantee Google Product/Review rich results or a Review snippets report in Search Console.

This project archive retains the previous performance, Cloudflare, breadcrumb and route fixes.

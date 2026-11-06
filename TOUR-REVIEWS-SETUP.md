# Genuine tour-specific Product review schema

All 18 tours now use ONE per-tour source for both visible customer reviews and Product JSON-LD.

## How it works

- `lib/verifiedTourReviewData.ts` has a separate entry for every individual tour.
- The `Product` schema's `review` and `aggregateRating` fields are added **only** when genuine tour-specific data exists.
- The tour header and reviews section display the exact same tour-specific rating and count. If none exist, no zero count, fake star badge, or review schema is emitted.
- Every tour may have a different rating and count, based on its own customers' feedback. There is no forced distinctness or generated numbers.
- Old demo/testimonial arrays are ignored for ratings and structured data: they are not evidence of genuine reviews.

## Adding your real customer reviews

1. Open `lib/verifiedTourReviewData.ts`.
2. Locate the exact tour slug (for example, `3-days-tour-from-fes-to-merzouga-desert`).
3. Replace its `{ reviews: [] }` with actual feedback about that exact itinerary.

Example FORMAT ONLY — do NOT copy the placeholder values to production:

```ts
"your-real-tour-slug": {
  reviews: [
    {
      author: "ACTUAL CUSTOMER NAME",
      datePublished: "YYYY-MM-DD",
      reviewBody: "ACTUAL CUSTOMER REVIEW TEXT",
      ratingValue: 5,
    },
  ],
},
```

The average rating and `reviewCount` are automatically calculated from the published reviews.

If you have a verifiable aggregate for a specific tour from a reliable review system and only display a selection of reviews, you can add a `summary` object. Both the count and average must be actual figures for the same tour and displayed on the page:

```ts
"your-real-tour-slug": {
  reviews: [],
  summary: {
    reviewCount: 1, // replace with the REAL tour-specific count
    ratingValue: 5, // replace with the REAL tour-specific average
    source: "Your own tour review system / exact tour review records",
  },
},
```

A summary without individual review texts adds `aggregateRating` but not `review` markup, which is correct.

## Why Google still shows optional warnings when you haven't entered reviews

Google accepts a Product with `offers` even when it has no `review` or `aggregateRating`. The two warnings are *optional*. Adding invented counts to hide warnings would misrepresent your tours and could violate Google's structured-data policies.

**Never copy Moorish Tour's company-level TripAdvisor/Google Business ratings to individual tour products unless those figures really refer to the exact bookable tour.**

## Validation

Run:

```
npm run check:tour-reviews
npm run check:tour-products
npm run build
```

After deploying, test an updated tour URL with https://search.google.com/test/rich-results and confirm the review count matches what's visible on the page.

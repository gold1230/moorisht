# Google-style tour price / review snippets

The homepage tour cards now use a compact display: `Starting from €200 · 4.7 ★★★★★ (9)` when a **genuine tour-specific** average and count is present. Without confirmed reviews the row shows `Starting from €200 · 3 Days / 2 Nights` instead of 0 reviews.

Your 18 tour pages already use linked Product + TouristTrip structured data. `offers.price` is present and review fields appear automatically when valid tour-specific review data exists. No fictional review figures are sent to Google.

## Preview

Open `RICH-SNIPPET-DESIGN-PREVIEW.html` on your computer to see **clearly marked sample values** in the style of your screenshot. This file is not a live web route and has no structured data.

## Add real rating totals across all 18 tours in one step

1. Fill `REAL-TOUR-RATINGS-IMPORT.csv` with the real average, count and source per tour. Leave unknown entries blank.
2. From your project folder run `npm run import:tour-ratings -- REAL-TOUR-RATINGS-IMPORT.csv`.
3. Check `data/tour-review-summaries.json` and run `npm run check:tour-products && npm run check:tour-reviews`.
4. Push changes to GitHub. The cards, detailed tour review headings and Product JSON-LD will all use the same values. You can still add individual full reviews to `lib/verifiedTourReviewData.ts` for the `review` property.

The sample preview cannot be used as real review data. Google does not guarantee star displays, even for valid markup.

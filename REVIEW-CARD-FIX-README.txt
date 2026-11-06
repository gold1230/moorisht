MOORISH TOUR - TOUR CARD REVIEW DISPLAY FIX

This update removes placeholder review figures (including repeated "4 reviews" and "0 reviews") from cards. Review badges display only when tour-specific verified customer reviews are present in lib/verifiedTourReviewData.ts. The same source is used for tour Product structured data. No unverified ratings are added.

Updated: data/tours.json, data/tourFilter.ts and 13 components with tour cards.

Deployment:
1. Copy the updated files into your existing Next.js repository, preserving folder paths.
2. Test: npm run check:tour-reviews; npm run check:routes; npm run build
3. Deploy: git add -A && git commit -m "Fix tour card review placeholders" && git push origin main

Google Product warnings for missing aggregateRating/review are OPTIONAL and will persist until authentic review data is available for each tour.

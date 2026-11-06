# Moorish Tour testimonial restoration

Restored the existing testimonial **text** from the earlier project into a single data source.

- Kept reviewer names and wording as found in the source pages.
- Removed relative dates like “two weeks ago” rather than inventing real publication dates.
- Did not copy the old arbitrary 10 / 315-review totals.
- Pages whose old testimonial content was explicitly marked **sample** or contained “This sample” text have been excluded.
- The visible tour-page review section, listing cards and Product JSON-LD use the same source of reviews.
- If you have more real reviews or date records, add them to `data/restored-tour-testimonials.json` or the primary review registry, and update `data/tours.json` for the cards.

The new blog post has **not** been added because no title, text or article attachment was supplied in the request.

Deploy and run the Google Rich Results Test for each updated tour; appearance of stars is Google's choice, and eligibility of tour-related Product markup is not guaranteed.

/**
 * Source of truth for verified reviews of individual Moorish Tour itineraries.
 * No fictional review counts or ratings are used.
 *
 * Add genuine reviews to tourReviewData below after checking they refer to the
 * specific tour and publishing them visibly on the same page.
 */
import type { VerifiedTourReview } from "@/lib/tourProductSchema";
import tourReviewSummaries from "@/data/tour-review-summaries.json";
import restoredTestimonials from "@/data/restored-tour-testimonials.json";

export type TourRatingSummary = {
  /** Actual number of reviews for this exact itinerary (not company-wide). */
  reviewCount: number;
  /** Actual average rating for the same set of reviews, on a 1–5 scale. */
  ratingValue: number;
  /** Internal documentation for the source, e.g. your tour-specific review system. */
  source: string;
};

export type TourReviewEntry = {
  reviews?: VerifiedTourReview[];
  /** Optional verified aggregate when you have more reviews than can be displayed. */
  summary?: TourRatingSummary;
};

// Use only actual tour-specific feedback. Never fill these with invented numbers.
// A page without verified reviews has NO aggregateRating, review, or 0-review badge.
export const tourReviewData: Record<string, TourReviewEntry> = {
  "2-days-zagora-desert-tour-from-marrakech": { reviews: [] },
  "3-days-luxury-desert-tour-from-marrakech-to-merzouga": { reviews: [] },
  "5-days-marrakech-to-fes-desert-tour": { reviews: [] },
  "5-days-fes-to-marrakech-desert-tour": { reviews: [] },
  "6-days-private-morocco-tour-from-marrakech-to-fes": { reviews: [] },
  "7-days-best-of-morocco-tour-from-casablanca": { reviews: [] },
  "9-days-morocco-tour-from-casablanca": { reviews: [] },
  "10-days-grand-morocco-tour-from-casablanca": { reviews: [] },
  "12-days-grand-morocco-tour-from-casablanca": { reviews: [] },
  "14-days-best-of-morocco-itinerary-from-casablanca": { reviews: [] },
  "5-days-north-morocco-tour-from-tangier-to-marrakech": { reviews: [] },
  "7-days-tangier-to-marrakech-morocco-tour": { reviews: [] },
  "9-days-tangier-to-marrakech-private-tour": { reviews: [] },
  "4-days-fes-to-merzouga-desert-tour": { reviews: [] },
  "5-days-errachidia-merzouga-dades-private-tour": { reviews: [] },
  "2-days-erfoud-to-merzouga-overnight-desert-tour": { reviews: [] },
  "ourika-valley-day-trip-from-marrakech": { reviews: [] },
  "essaouira-day-trip-from-marrakech": { reviews: [] },
  "ouzoud-waterfalls-day-trip-from-marrakech": { reviews: [] },
  "agafay-desert-sunset-dinner-from-marrakech": { reviews: [] },

  "10-days-in-morocco-tour-from-tangier": { reviews: [] },
  "12-days-morocco-tour-from-casablanca-to-marrakech": { reviews: [] },
  "3-day-tour-from-casablanca-rabat-to-the-sahara-desert": { reviews: [] },
  "3-days-desert-tour-from-marrakech-to-merzouga": { reviews: [] },
  "3-days-desert-tour-from-marrakech-to-fes": { reviews: [] },
  "3-days-from-errachidia-to-merzouga": { reviews: [] },
  "3-days-from-fes-to-merzouga-desert": { reviews: [] },
  "3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip": { reviews: [] },
  "3-days-tour-from-fes-to-merzouga": { reviews: [] },
  "3-days-tour-from-fes-to-merzouga-desert": { reviews: [] },
  "3-days-tour-from-marrakech-to-merzouga": { reviews: [] },
  "3-days-tour-from-marrakech-to-fes": { reviews: [] },
  "4-days-itinerary-tour-from-casablanca": { reviews: [] },
  "4-days-tour-from-casablanca-rabat-to-sahara-desert-via-meknes-and-midelt": { reviews: [] },
  "4-days-tour-from-marrakech-to-fes": { reviews: [] },
  "4-days-tour-from-marrakech-to-merzouga": { reviews: [] },
  "6-days-from-errachidia-morocco-tour": { reviews: [] },
  "8-days-tour-from-marrakech-to-merzouga": { reviews: [] },
  "8-days-desert-tour-in-morocco-from-casablanca": { reviews: [] },
  "morocco-itinerary-10-days-from-marrakech": { reviews: [] },
  "morocco-itinerary-7-days-from-marrakech": { reviews: [] },
};

function getSlug(url: string): string {
  const parsed = new URL(url);
  if (parsed.hostname !== "moorishtour.com" || parsed.protocol !== "https:") {
    throw new Error(`Unexpected review URL: ${url}`);
  }
  const match = parsed.pathname.match(/^\/tour\/([^/]+)\/?$/);
  if (!match) throw new Error(`Tour review URL must be a tour page: ${url}`);
  return match[1];
}

function validReview(review: VerifiedTourReview): boolean {
  return Boolean(
    review.author?.trim() && review.reviewBody?.trim() &&
    (review.datePublished === undefined || (
      /^\d{4}-\d{2}-\d{2}$/.test(review.datePublished) &&
      !Number.isNaN(Date.parse(`${review.datePublished}T00:00:00Z`))
    )) &&
    Number.isFinite(review.ratingValue) && review.ratingValue >= 1 && review.ratingValue <= 5
  );
}

/** The same per-tour review data is used for both the visible page and JSON-LD. */
export function getVerifiedTourReviewData(url: string): TourReviewEntry {
  const slug = getSlug(url);
  const baseEntry = tourReviewData[slug];
  if (!baseEntry) throw new Error(`Missing tour review registry entry for ${slug}`);
  // Optional verified summaries imported from the owner's real booking/review system.
  // These are shown visibly to customers and used in Product JSON-LD together.
  const externalSummary = (tourReviewSummaries as Record<string, TourRatingSummary>)[slug];
  // Reuse owner-confirmed testimonial text already included in the original tour pages.
  // Entries labelled as sample content in those pages are excluded from this file.
  const restored = (restoredTestimonials as Record<string, VerifiedTourReview[]>)[slug] ?? [];
  const withReviews: TourReviewEntry = {
    ...baseEntry,
    reviews: baseEntry.reviews?.length ? baseEntry.reviews : restored,
  };
  const entry: TourReviewEntry = externalSummary
    ? { ...withReviews, summary: externalSummary }
    : withReviews;
  const reviews = entry.reviews ?? [];
  for (const review of reviews) {
    if (!validReview(review)) throw new Error(`Invalid tour review data: ${slug}`);
  }
  if (entry.summary) {
    const s = entry.summary;
    if (!Number.isInteger(s.reviewCount) || s.reviewCount < 1 ||
        !Number.isFinite(s.ratingValue) || s.ratingValue < 1 || s.ratingValue > 5 ||
        !s.source?.trim() || s.reviewCount < reviews.length) {
      throw new Error(`Invalid verified review summary: ${slug}`);
    }
  }
  return entry;
}

export function getVerifiedTourReviewSummary(url: string): TourRatingSummary | undefined {
  const entry = getVerifiedTourReviewData(url);
  if (entry.summary) return entry.summary;
  const reviews = entry.reviews ?? [];
  if (!reviews.length) return undefined;
  return {
    reviewCount: reviews.length,
    ratingValue: Number((reviews.reduce((sum, r) => sum + r.ratingValue, 0) / reviews.length).toFixed(2)),
    source: "Verified reviews of this tour published on this page",
  };
}

export function getTourReviewSchemaFields(url: string) {
  const entry = getVerifiedTourReviewData(url);
  return {
    verifiedReviews: entry.reviews ?? [],
    verifiedAggregate: entry.summary,
  };
}

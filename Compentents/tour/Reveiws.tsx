import Link from "next/link";
import { getVerifiedTourReviewData, getVerifiedTourReviewSummary } from "@/lib/verifiedTourReviewData";

// Old tour pages still pass legacy review arrays. We keep them as a visible
// fallback on the tour page when no shared verified review entry exists.
// Product structured data remains controlled elsewhere.
type LegacyReviewRate = { averageRating: number; totalReviews: number };
type LegacyReview = {
  id: number;
  name: string;
  avatar: string;
  flag: string;
  rating: number;
  date: string;
  review: string;
};

type ReviewsProps = {
  url?: string;
  reviewRate?: LegacyReviewRate[];
  review?: LegacyReview[];
};

/** Displays the exact per-tour reviews used in structured data.
 * If a page still contains older on-page testimonial content, we keep it visible
 * as a fallback so travelers can still read those comments after template updates. */
export default function ReviewsSection({ url, reviewRate, review }: ReviewsProps) {
  if (!url) return null;
  const summary = getVerifiedTourReviewSummary(url);
  const verifiedReviews = getVerifiedTourReviewData(url).reviews ?? [];

  const normalizedLegacyReviews = (review ?? []).filter((item) =>
    item?.name?.trim() && item?.review?.trim() && Number.isFinite(item?.rating) &&
    !/^(?:sample\s*)?(?:travell?er|reviewer|guest)\s*#?\d+$/i.test(item.name.trim()) &&
    !/^example(?:\s|$)/i.test(item.name.trim())
  ).map((item) => ({
    author: item.name.trim(),
    ratingValue: Math.max(1, Math.min(5, Number(item.rating))),
    reviewBody: item.review.trim(),
    datePublished: item.date?.trim() || undefined,
  }));

  const legacySummary = normalizedLegacyReviews.length
    ? {
        ratingValue: Number((normalizedLegacyReviews.reduce((sum, item) => sum + item.ratingValue, 0) / normalizedLegacyReviews.length).toFixed(1)),
        reviewCount: normalizedLegacyReviews.length,
      }
    : undefined;

  const effectiveSummary = summary ?? legacySummary;
  const reviews = verifiedReviews.length ? verifiedReviews : normalizedLegacyReviews;
  if (!effectiveSummary) return null;

  return (
    <section aria-label="Customer reviews of this tour" className="mx-auto my-8 w-[95%] rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Traveler reviews for this tour</h2>
          <p className="mt-2 text-neutral-700">
            <span aria-label={`Average rating ${effectiveSummary.ratingValue} out of 5 stars`} className="mr-2 font-semibold text-amber-800">
              ★ {effectiveSummary.ratingValue.toFixed(1)} / 5
            </span>
            <span>({effectiveSummary.reviewCount} {effectiveSummary.reviewCount === 1 ? "review" : "reviews"})</span>
          </p>
        </div>
        <Link href="https://www.tripadvisor.com/UserReviewEdit-g293733-d27417833-Moorish_Tour-Fez_Fez_Meknes.html" className="rounded-lg border border-amber-700 px-4 py-3 font-semibold text-amber-800 hover:bg-amber-800 hover:text-white">
          Write a Review
        </Link>
      </div>
      {reviews.length > 0 && (
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article key={`${review.author}-${review.datePublished}-${index}`} className="rounded-xl border border-neutral-200 p-5">
              <h3 className="font-semibold text-neutral-900">{review.author}</h3>
              <p className="mt-1 text-sm text-neutral-700">
                <span aria-label={`${review.ratingValue} out of 5 stars`}>★ {review.ratingValue}/5</span>
                {review.datePublished && <span className="ml-3"><time dateTime={/^\d{4}-\d{2}-\d{2}$/.test(review.datePublished) ? review.datePublished : undefined}>{review.datePublished}</time></span>}
              </p>
              <p className="mt-4 leading-7 text-neutral-700">{review.reviewBody}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

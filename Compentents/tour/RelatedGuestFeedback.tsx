import Link from "next/link";
import feedback from "@/data/restored-tour-testimonials.json";
import type { NewTourConfig } from "@/lib/newTourPages";

/** Authentic legacy testimonials the owner asked to restore, displayed as
 * feedback for their actual ORIGINAL trips. Never attach these ratings to
 * a different tour's Product JSON-LD. */
const sources = {
  marrakech: { slug: "3-days-desert-tour-from-marrakech-to-merzouga", name: "3 Days Marrakech–Merzouga Sahara Tour" },
  fes: { slug: "3-days-from-fes-to-merzouga-desert", name: "3 Days Fes–Merzouga Desert Tour" },
  casablanca: { slug: "3-day-tour-from-casablanca-rabat-to-the-sahara-desert", name: "Casablanca to the Sahara Desert Tour" },
  errachidia: { slug: "3-days-from-errachidia-to-merzouga", name: "Errachidia to Merzouga Tour" },
  erfoud: { slug: "3-days-from-errachidia-to-merzouga", name: "Errachidia to Merzouga Tour" },
  tangier: { slug: "morocco-itinerary-10-days-from-marrakech", name: "10-Day Grand Morocco Tour" },
} as const;
export default function RelatedGuestFeedback({ tour }: { tour: NewTourConfig }) {
  const source = sources[tour.start.toLowerCase() as keyof typeof sources] || sources.marrakech;
  const reviews = feedback[source.slug as keyof typeof feedback].slice(0, 2);
  return <section aria-label="Guest reviews from related Moorish Tour trips" className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">What Travelers Say About Moorish Tour</h2>
      <p className="mt-2 max-w-3xl leading-7 text-slate-700">The following testimonials are from <Link href={`/tour/${source.slug}/`} className="font-semibold text-amber-800 underline underline-offset-4">{source.name}</Link>, a different Moorish Tour itinerary. They describe previous travelers' experiences with our team; they are not ratings of the tour on this page.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{reviews.map((review, i) => <article key={`${review.author}-${i}`} className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="font-semibold text-amber-800"><span aria-label={`${review.ratingValue} out of five stars`}>{'★'.repeat(review.ratingValue)}{'☆'.repeat(5-review.ratingValue)}</span></p>
        <h3 className="mt-2 font-bold text-slate-900">{review.author}</h3>
        <p className="mt-3 leading-7 text-slate-700">{review.reviewBody}</p>
      </article>)}</div>
      <Link href="/#traveler-reviews" className="mt-6 inline-flex font-semibold text-amber-800 underline underline-offset-4">More Moorish Tour traveler feedback →</Link>
    </div>
  </section>;
}

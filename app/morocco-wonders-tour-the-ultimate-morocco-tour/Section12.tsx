




const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in the Morocco Wonders Tour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Morocco Wonders Tour includes private transport, English speaking driver, riads or hotels, Sahara desert camp, camel trekking, daily breakfast and selected dinners depending on the itinerary."
      }
    },
    {
      "@type": "Question",
      "name": "How many days is the Morocco Wonders Tour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Morocco Wonders Tour can be customized from 7 days, 10 days, 12 days or 14 days depending on your travel plan and arrival city."
      }
    },
    {
      "@type": "Question",
      "name": "Is Morocco safe for tourists?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Morocco is considered a safe travel destination. Our professional drivers and guides ensure secure and comfortable travel across cities and desert areas."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Morocco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best time to visit Morocco is spring (March–May) and autumn (September–November) when temperatures are pleasant for desert tours and city visits."
      }
    }
  ]
} as const;

export default function Section12() {
  return (
<section className="space-y-10" aria-label="Frequently Asked Questions About Morocco Wonders Tour">
<div className="space-y-5">
<h2 id="frequently-asked-questions-about-morocco-wonders-tour" className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions About Morocco Wonders Tour</h2>
<div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
</div>
<blockquote className="my-8 rounded-r-2xl border-l-4 border-amber-500 bg-slate-50 px-6 py-5 text-[17px] italic leading-8 text-slate-800"><p>A great Morocco tour begins with a clear plan and ends with a collection of memories worth sharing.</p></blockquote>
</div>
<details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
<summary className="cursor-pointer list-none text-slate-900 marker:hidden"><h3 id="what-is-included-in-the-morocco-wonders-tour" className="inline scroll-mt-28 text-lg font-bold tracking-tight text-slate-900">What is included in the Morocco Wonders Tour?</h3><span aria-hidden="true" className="float-right font-bold text-amber-700">+</span></summary>
<div className="mt-4 space-y-5 text-[17px] leading-8 text-slate-700">
<p>Our Morocco Wonders Tour includes private transport, English speaking driver, riads or hotels, Sahara desert camp, camel trekking, daily breakfast and selected dinners depending on the itinerary.</p>
</div></details>
<details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
<summary className="cursor-pointer list-none text-slate-900 marker:hidden"><h3 id="how-many-days-is-the-morocco-wonders-tour" className="inline scroll-mt-28 text-lg font-bold tracking-tight text-slate-900">How many days is the Morocco Wonders Tour?</h3><span aria-hidden="true" className="float-right font-bold text-amber-700">+</span></summary>
<div className="mt-4 space-y-5 text-[17px] leading-8 text-slate-700">
<p>The Morocco Wonders Tour can be customized from 7 days, 10 days, 12 days or 14 days depending on your travel plan and arrival city.</p>
</div></details>
<details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
<summary className="cursor-pointer list-none text-slate-900 marker:hidden"><h3 id="is-morocco-safe-for-tourists" className="inline scroll-mt-28 text-lg font-bold tracking-tight text-slate-900">Is Morocco safe for tourists?</h3><span aria-hidden="true" className="float-right font-bold text-amber-700">+</span></summary>
<div className="mt-4 space-y-5 text-[17px] leading-8 text-slate-700">
<p>Yes, Morocco is considered a safe travel destination. Our professional drivers and guides ensure secure and comfortable travel across cities and desert areas.</p>
</div></details>
<details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
<summary className="cursor-pointer list-none text-slate-900 marker:hidden"><h3 id="what-is-the-best-time-to-visit-morocco" className="inline scroll-mt-28 text-lg font-bold tracking-tight text-slate-900">What is the best time to visit Morocco?</h3><span aria-hidden="true" className="float-right font-bold text-amber-700">+</span></summary>
<div className="mt-4 space-y-5 text-[17px] leading-8 text-slate-700">
<p>The best time to visit Morocco is spring (March–May) and autumn (September–November) when temperatures are pleasant for desert tours and city visits.</p>
</div></details>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\u003c") }} />
</section>
  );
}

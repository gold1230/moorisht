type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

export default function MoroccoDestinationsFAQ({ faqs }: Props) {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Plan Your Route
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Morocco Destinations FAQ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Quick answers to common questions about the best places to visit
            in Morocco and how to build a realistic itinerary.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-xl border border-gray-200 bg-white px-5 py-4"
            >
              <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-3 text-base leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

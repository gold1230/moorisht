type FAQ = {
  question: string;
  answer: string;
};

type PrivateToursFAQProps = {
  faqs: FAQ[];
};

export default function PrivateToursFAQ({
  faqs,
}: PrivateToursFAQProps) {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-7 lg:px-10">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Private Tour Information
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Private Morocco Tour FAQs
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Quick answers about private drivers, custom itineraries, starting
            cities and Sahara Desert tours in Morocco.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-gray-200 bg-white px-5 py-4"
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

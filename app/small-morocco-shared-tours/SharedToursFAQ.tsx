const faqs = [
  {
    question: "What is a shared Morocco tour?",
    answer:
      "A shared Morocco tour lets you join other travelers on the same route and share transport. It is usually more affordable than booking a private vehicle for only one or two people.",
  },
  {
    question: "How many people are normally in a shared tour?",
    answer:
      "Group size depends on the route and departure date. Shared tours are designed as small group experiences rather than large coach tours.",
  },
  {
    question: "Are shared desert tours suitable for solo travelers?",
    answer:
      "Yes. Shared tours are a popular option for solo travelers because they reduce the cost of transport and make it easy to meet other people.",
  },
  {
    question: "Can I choose my hotel or desert camp?",
    answer:
      "Accommodation options depend on the selected tour. Contact us before booking if you want an upgrade or have a specific accommodation request.",
  },
  {
    question: "Where do shared tours start?",
    answer:
      "Departure cities depend on the tour. Common starting points include Marrakech and Fes. The exact pickup details are confirmed before departure.",
  },
];

export default function SharedToursFAQ() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Helpful Information
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Shared Tour FAQs
          </h2>
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

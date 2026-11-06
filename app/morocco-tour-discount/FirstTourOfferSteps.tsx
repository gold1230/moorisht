import {
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    number: "01",
    title: "Choose a Tour",
    description:
      "Browse Morocco tours and choose the route that matches your dates and travel style.",
    icon: MapPinIcon,
  },
  {
    number: "02",
    title: "Send Your Inquiry",
    description:
      "Tell us your travel date, number of travelers and the tour you want to book.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    number: "03",
    title: "Request the 20% Offer",
    description:
      "Tell us this is your first tour with us and ask for the first-tour discount.",
    icon: SparklesIcon,
  },
  {
    number: "04",
    title: "Confirm & Travel",
    description:
      "Review the final itinerary, eligibility and price before confirming your Morocco trip.",
    icon: CheckBadgeIcon,
  },
];

export default function FirstTourOfferSteps() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Easy to Claim
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            How to Save 20% on Your First Morocco Tour
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-600">
            Choose your tour, contact us and ask for the first-time traveler
            offer before you confirm your booking.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-xl border border-gray-200 bg-white p-5"
              >
                <span className="absolute right-4 top-3 text-4xl font-black text-amber-100">
                  {step.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-gray-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

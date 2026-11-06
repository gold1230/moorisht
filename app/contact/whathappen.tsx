"use client";


import { DocumentTextIcon, ChatBubbleLeftRightIcon, MapIcon, CheckCircleIcon, LightBulbIcon, ClockIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const inquirySteps = [
  {
    number: "1",
    title: "Tell us about your trip",
    description:
      "Send us your dates, number of travelers, destinations and what you want to experience.",
    icon: DocumentTextIcon,
  },
  {
    number: "2",
    title: "We recommend the best route",
    description:
      "Our local team reviews your request and suggests an itinerary that fits your travel plans.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    number: "3",
    title: "We customize your trip",
    description:
      "We adjust the itinerary, accommodation, activities and travel pace to suit you.",
    icon: MapIcon,
  },
  {
    number: "4",
    title: "Confirm your Morocco tour",
    description:
      "Once you are happy with the itinerary, we help you confirm your trip.",
    icon: CheckCircleIcon,
  },
];

const localBenefits = [
  {
    title: "Local Knowledge",
    description:
      "Get advice from people who know Morocco's destinations, roads, culture and hidden gems.",
    icon: LightBulbIcon,
  },
  {
    title: "Personalized Itineraries",
    description:
      "Your trip is planned around your dates, interests, travel style and budget.",
    icon: MapIcon,
  },
  {
    title: "Direct Communication",
    description:
      "Speak directly with our Morocco travel team before and during your journey.",
    icon: UserGroupIcon,
  },
  {
    title: "Morocco Travel Experience",
    description:
      "Get practical advice about transportation, accommodation, activities and places to visit.",
    icon: ClockIcon,
  },
];

export default function MoroccoTripPlanningProcess() {
  return (
    <section
      id="trip-planning-process"
      className="w-full bg-white py-10"
      aria-labelledby="planning-process-title"
    >
      <div className="mx-auto  px-6 sm:px-8 lg:px-10">

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">

          {/* =====================================================
              LEFT: WHAT HAPPENS NEXT?
          ===================================================== */}
          <div className="rounded-xl border border-gray-200 bg-[#fffdf9] p-5 sm:p-6">

            <div>
              <h2
                id="planning-process-title"
                className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl"
              >
                What Happens After You Send Your Inquiry?
              </h2>

              {/* Decorative line */}
              <div className="mt-2 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-amber-700" />
                <span className="h-1.5 w-1.5 rotate-45 bg-amber-700" />
                <span className="h-[2px] w-7 bg-amber-700" />
              </div>
            </div>

            {/* Steps */}
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {inquirySteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="relative"
                  >
                    {/* Number + icon */}
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-700 text-sm font-bold text-white">
                        {step.number}
                      </span>

                      <Icon
                        className="h-8 w-8 text-amber-700"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <h3 className="mt-4 text-base font-bold leading-6 text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-base leading-6 text-gray-700">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              RIGHT: WHY PLAN WITH A LOCAL OPERATOR?
          ===================================================== */}
          <aside
            className="rounded-xl border border-gray-200 bg-[#fffdf9] p-5 sm:p-6"
            aria-labelledby="local-operator-title"
          >
            <h2
              id="local-operator-title"
              className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl"
            >
              Why Plan Your Morocco Trip With a Local Tour Operator?
              
            </h2>

            {/* Benefits */}
            <div className="mt-5 space-y-4">
              {localBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="flex gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                      <Icon
                        className="h-7 w-7 text-amber-700"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-bold leading-5 text-slate-900">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-base leading-6 text-gray-700">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
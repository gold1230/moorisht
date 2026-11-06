"use client";

import {
  MapPinIcon,
  PencilSquareIcon,
  SparklesIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    title: "Local Experts",
    description:
      "Our local team knows Morocco inside out.",
    icon: MapPinIcon,
  },
  {
    title: "Custom Itineraries",
    description:
      "100% personalized to your interests and budget.",
    icon: PencilSquareIcon,
  },
  {
    title: "Best Value",
    description:
      "Quality service at the best possible price.",
    icon: SparklesIcon,
  },
  {
    title: "24/7 Support",
    description:
      "We're here to help you before, during and after your trip.",
    icon: ClockIcon,
  },
];

export default function WhyPlanWithUs() {
  return (
    <aside
      className="rounded-2xl my-8 border border-amber-100 bg-[#fffaf4] p-6 sm:p-7"
      aria-labelledby="why-plan-with-us-title"
    >
      {/* Heading */}
      <h2
        id="why-plan-with-us-title"
        className="text-2xl font-bold leading-tight text-slate-900"
      >
        Why Plan With Us?
      </h2>

      {/* Benefits */}
      <div className="mt-7 space-y-7">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <div
              key={reason.title}
              className="flex items-start gap-4"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center">
                <Icon
                  className="h-8 w-8 text-amber-700"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-base font-bold leading-6 text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-1 text-base leading-7 text-gray-700">
                  {reason.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
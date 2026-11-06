import Link from "next/link";

import {
  ArrowRightIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  MapIcon,
  CheckCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

import type { ComponentType, SVGProps } from "react";

/* =========================================================
   TYPES
========================================================= */

type Feature = {
  title: string;
  desc: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/* =========================================================
   FEATURES
========================================================= */

const features: Feature[] = [
  {
    title: "Local Morocco Expertise",
    desc:
      "Travel with a local team that understands Morocco, its culture, routes, desert regions and hidden places.",
    icon: MegaphoneIcon,
  },
  {
    title: "Private & Custom Tours",
    desc:
      "We can adapt your Morocco itinerary to your dates, interests, travel style and preferred pace.",
    icon: Square3Stack3DIcon,
  },
  {
    title: "Comfort & Safety",
    desc:
      "Travel in comfortable vehicles with experienced drivers, trusted accommodations and support throughout your trip.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Authentic Experiences",
    desc:
      "Discover the Sahara Desert, local villages, traditional kasbahs, markets, mountains and Moroccan culture.",
    icon: MapIcon,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function WhySection() {
  return (
    <section
      id="why-moorish-tour"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="why-moorish-tour-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#faf9f7] p-6 sm:p-8 lg:p-12">

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            {/* =================================================
                LEFT SIDE
            ================================================= */}
            <div className="max-w-xl">

              {/* Small label */}
              <div className="flex items-center gap-2">
                <MapPinIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />

                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  Local Morocco Travel Experts
                </p>
              </div>

              {/* Main heading */}
              <h2
                id="why-moorish-tour-title"
                className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
              >
                Why Travel Morocco With{" "}
                <span className="text-amber-700">
                  Moorish Tour?
                </span>
              </h2>

              {/* Decorative line */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-0.5 w-8 bg-amber-700" />

                <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

                <span className="h-0.5 w-8 bg-amber-700" />
              </div>

              {/* Description */}
              <p className="mt-5 text-base leading-7 text-gray-700">
                Moorish Tour is a local Morocco tour operator offering
                private and small-group journeys across the country.
                From Marrakech desert tours and Sahara experiences to
                imperial cities, mountains and coastal destinations,
                our team helps travelers discover Morocco with local
                knowledge and flexible itineraries.
              </p>

              {/* Trust points */}
              <div className="mt-6 space-y-3">

                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-base text-gray-700">
                    Local knowledge and experienced Morocco travel team
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-base text-gray-700">
                    Private tours, small-group tours and custom itineraries
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-base text-gray-700">
                    Support before and during your Morocco trip
                  </p>
                </div>

              </div>

              {/* CTA buttons */}
              <div className="mt-7 flex flex-wrap gap-3">

                <Link prefetch={false}
                  href="/about"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800"
                >
                  Learn More About Us

                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link prefetch={false}
                  href="/plan-your-morocco-tour"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 text-base font-semibold text-slate-900 transition hover:border-amber-500 hover:text-amber-700"
                >
                  Plan Your Morocco Tour

                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}
            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 transition group-hover:bg-amber-800">
                      <Icon
                        className="h-6 w-6 text-amber-700 transition group-hover:text-white"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-xl font-bold leading-6 text-slate-900">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-base leading-7 text-gray-600">
                      {item.desc}
                    </p>
                  </article>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
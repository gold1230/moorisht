import Link from "next/link";

import {
  BanknotesIcon,
  CalendarDaysIcon,
  MapIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const topics = [
  {
    title: "Best Time to Visit",
    description:
      "Understand Morocco's seasons before choosing your cities, mountain routes or desert dates.",
    href: "/morocco-travel-tips",
    icon: CalendarDaysIcon,
  },
  {
    title: "What to Pack & Wear",
    description:
      "Plan clothing for cities, warm days, cool evenings, mountain areas and Sahara nights.",
    href: "/morocco-travel-tips#travel-tips",
    icon: ShoppingBagIcon,
  },
  {
    title: "Money & Payments",
    description:
      "Learn when cash is useful, where cards are common and why small dirham notes can help.",
    href: "/morocco-travel-tips#travel-tips",
    icon: BanknotesIcon,
  },
  {
    title: "Getting Around Morocco",
    description:
      "Compare private tours, trains, buses and longer road journeys between Morocco's regions.",
    href: "/morocco-travel-tips#travel-tips",
    icon: MapIcon,
  },
  {
    title: "Culture & Practical Advice",
    description:
      "Prepare for local customs, markets, respectful clothing and everyday travel situations.",
    href: "/morocco-travel-tips#travel-tips",
    icon: ShieldCheckIcon,
  },
  {
    title: "Sahara Desert Tips",
    description:
      "Plan Merzouga, camel trekking, desert camps, seasonal temperatures and longer travel days.",
    href: "/morocco-desert-tours",
    icon: SunIcon,
  },
];

export default function MoroccoTravelTipsTopics() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Plan by Topic
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Essential Morocco Travel Advice
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Start with the questions most travelers ask before visiting
            Morocco, then explore the detailed guides that match your trip.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.title}
                href={topic.href}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 transition group-hover:text-amber-700">
                  {topic.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-gray-600">
                  {topic.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import {
  SunIcon,
  MapIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  CameraIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const travelTips = [
  {
    title: "Best Time to Visit Morocco",
    description:
      "Find the best months for Marrakech, the Atlas Mountains and Sahara desert tours.",
    href: "/morocco-travel-tips",
    icon: SunIcon,
  },
  {
    title: "Morocco Travel Tips",
    description:
      "Useful advice about transport, local customs, accommodation and planning your trip.",
    href: "/morocco-travel-tips",
    icon: MapIcon,
  },
  {
    title: "What to Pack for Morocco",
    description:
      "Learn what clothes and travel essentials to bring for cities, mountains and the desert.",
    href: "/ultimate-guide-what-to-wear-in-marrakech-morocco",
    icon: BriefcaseIcon,
  },
  {
    title: "Morocco Travel Costs",
    description:
      "Understand common travel costs for hotels, food, transport and Morocco tours.",
    href: "/comprehensive-guide-to-morocco-tours-2024",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Morocco Photography Tips",
    description:
      "Discover beautiful places and simple tips for taking better travel photos in Morocco.",
    href: "/morocco-general-information-for-travelers",
    icon: CameraIcon,
  },
  {
    title: "Morocco Travel Guide",
    description:
      "Get practical information to help you plan your first trip around Morocco.",
    href: "/morocco-general-information-for-travelers",
    icon: GlobeAltIcon,
  },
];

const TravelTipsPlanning = () => {
  return (
    <section
      className="py-10"
      aria-labelledby="travel-tips-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-6 flex items-end justify-between gap-4">

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Plan Your Trip
            </span>

            <h2
              id="travel-tips-title"
              className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl"
            >
              Morocco Travel Tips & Planning
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Practical Morocco travel advice to help you plan your
              itinerary, choose the best time to visit and enjoy your trip.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-semibold text-amber-700 transition hover:text-amber-700 sm:inline-flex"
          >
            More Travel Tips
            <ArrowRightIcon className="h-4 w-4" />
          </Link>

        </div>

        {/* Compact cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {travelTips.map((tip) => {
            const Icon = tip.icon;

            return (
              <Link
                key={tip.href}
                href={tip.href}
                className="group"
              >
                <article className="flex h-full gap-4 rounded-xl border border-gray-200 bg-white p-4 transition duration-300 hover:border-amber-600 hover:shadow-sm">

                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700 transition group-hover:bg-amber-800 group-hover:text-white">
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">

                    <h3 className="text-sm font-semibold text-slate-900 transition group-hover:text-amber-700">
                      {tip.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                      {tip.description}
                    </p>

                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gray-500 transition group-hover:text-amber-700">
                      Read More
                      <ArrowRightIcon className="h-3 w-3" />
                    </span>

                  </div>

                </article>
              </Link>
            );
          })}

        </div>

        {/* Mobile link */}
        <div className="mt-5 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700"
          >
            More Travel Tips
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TravelTipsPlanning;
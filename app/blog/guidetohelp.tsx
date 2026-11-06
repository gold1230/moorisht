"use client";
 
import Link from "next/link";
import {
  BuildingOffice2Icon,
  HomeModernIcon,
  SunIcon,
  BuildingLibraryIcon,
  CakeIcon,
} from "@heroicons/react/24/outline";

const guides = [
  {
    title: "Morocco Itineraries",
    description:
      "Detailed day-by-day itineraries for every trip length.",
    href: "/morocco-itinerary",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Desert Tours",
    description:
      "Everything about Sahara desert tours, camps and camel treks.",
    href: "/morocco-desert-tours",
    icon: HomeModernIcon,
  },
  {
    title: "Travel Tips",
    description:
      "Practical tips to travel Morocco like a local.",
    href: "/morocco-travel-tips",
    icon: SunIcon,
  },
  {
    title: "Culture & People",
    description:
      "Discover Moroccan culture, traditions and hospitality.",
    href: "/imperial-cities",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Food in Morocco",
    description:
      "Explore Moroccan cuisine, dishes and food experiences.",
    href: "/moroccan-food-tour-the-tasty-heart-of-morocco",
    icon: CakeIcon,
  },
];

export default function GuidesToHelpYouPlan() {
  return (
    <section className="w-full py-6">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

        {/* Section title */}
        <div className="px-5 pt-4 sm:px-7 sm:pt-5">
          <h2 className=" text-xl font-bold text-slate-900 sm:text-[21px]">
            Guides to Help You Plan
          </h2>
        </div>

        {/* Guides */}
        <div className="grid grid-cols-1 px-4 pb-5 pt-4 sm:grid-cols-2 sm:px-5 md:grid-cols-3 lg:grid-cols-5 lg:px-2 lg:pb-6">

          {guides.map((guide, index) => {
            const Icon = guide.icon;

            return (
              <div
                key={guide.title}
                className={`
                  flex px-4 py-4
                  lg:min-h-[145px]
                  lg:items-center
                  lg:justify-center
                  lg:px-5
                  ${
                    index !== 0
                      ? "lg:border-l lg:border-gray-200"
                      : ""
                  }
                `}
              >
                <Link
                  href={guide.href}
                  className="group flex w-full flex-col items-center text-center"
                >
                  {/* Icon */}
                  <Icon
                    className="mb-3 h-8 w-8 text-amber-700 transition-transform duration-200 group-hover:scale-105"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  {/* Title */}
                  <h3 className="text-[14px] font-bold text-slate-800 transition-colors group-hover:text-amber-700">
                    {guide.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 max-w-[150px] text-[12px] leading-[1.65] text-gray-600">
                    {guide.description}
                  </p>
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
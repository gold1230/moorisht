"use client";

import Image from "next/image";
import Link from "next/link";
import { getDestinations } from "@/data/destinationFilter";


const destinations = getDestinations({
  limit: 6,
});

import {
  BuildingOffice2Icon,
  MapIcon,
  SunIcon,
  BuildingLibraryIcon,
  HomeIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";

/* =========================================================
   ICON MAP
========================================================= */

const iconMap = {
  sun: SunIcon,
  buildingOffice: BuildingOffice2Icon,
  map: MapIcon,
  buildingLibrary: BuildingLibraryIcon,
  home: HomeIcon,
  globe: GlobeAsiaAustraliaIcon,
};

type IconName = keyof typeof iconMap;

/* =========================================================
   COMPONENT
========================================================= */

export default function TopDestinations() {
  return (
    <section
      id="top-destinations"
      className="bg-white py-8 sm:py-10"
      aria-labelledby="top-destinations-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        {/* Heading */}
        <div className="mb-5">
          <h2
            id="top-destinations-title"
            className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
          >
            Top Destinations
          </h2>

          {/* Small decorative line */}
          <div className="mt-2 flex items-center gap-2">
            <span className="h-[2px] w-10 bg-amber-700" />

            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

            <span className="h-[2px] w-10 bg-amber-700" />
          </div>
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {destinations.map((destination) => {
            const Icon =
              iconMap[destination.icon as IconName];

            return (
              <Link
                key={destination.id}
                href={destination.href}
                className="group block min-w-0"
              >
                <article className="overflow-hidden rounded-xl bg-[#faf7f2] transition duration-300 hover:-translate-y-0.5 hover:shadow-md">

                  {/* Image */}
                  <div className="relative aspect-[1.2/1]">
                    <Image
                      src={destination.image}
                      alt={destination.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16.66vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Icon circle */}
                    {Icon && (
                      <div className="absolute bottom-[-1px] left-3 flex h-9 w-9 translate-y-1/2 items-center justify-center rounded-full border border-amber-100 bg-white shadow-sm">
                        <Icon
                          className="h-5 w-5 text-amber-700"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="px-3 pb-3 pt-6">
                    <h3 className="truncate text-base font-bold leading-5 text-slate-900 transition group-hover:text-amber-700">
                      {destination.name}
                    </h3>

                    <p className="mt-1 truncate text-base leading-5 text-gray-600">
                      {destination.subtitle}
                    </p>
                  </div>

                </article>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
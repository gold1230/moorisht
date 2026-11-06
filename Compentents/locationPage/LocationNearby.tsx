import Link from "next/link";
import { ArrowUpRightIcon, MapPinIcon } from "@heroicons/react/24/outline";

import type { LocationPageData } from "@/lib/locationPageTypes";

type Props = {
  location: LocationPageData;
};

export default function LocationNearby({ location }: Props) {
  if (!location.nearbyLocations.length) return null;

  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              Continue Your Route
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Places to Visit Near {location.name}
            </h2>
          </div>

          <Link
            href="/locations"
            className="text-sm font-bold text-amber-700 hover:text-amber-800"
          >
            Browse all Morocco locations
          </Link>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {location.nearbyLocations.map((place) => (
            <Link
              key={place.slug}
              href={`/locations/${place.slug}`}
              className="group rounded-2xl border border-stone-200 bg-[#fffaf3] p-5 transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
            >
              <span className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MapPinIcon className="h-5 w-5 text-amber-700" />
                </span>

                <ArrowUpRightIcon className="h-4 w-4 text-slate-600 transition group-hover:text-amber-700" />
              </span>

              <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-amber-700">
                {place.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {place.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

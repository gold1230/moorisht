import Link from "next/link";

import {
  ArrowRightIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export default function LocationsArchiveCTA() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-amber-700 p-7 sm:p-9 lg:p-10">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-[30px] border-white/15" />
          <div className="absolute -bottom-16 right-36 h-36 w-36 rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <MapIcon className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Found the Morocco Locations You Want to Visit?
                </h2>

                <p className="mt-2 max-w-2xl text-base leading-7 text-white">
                  Send us your favorite places and travel dates, and turn them
                  into a comfortable Morocco itinerary with realistic travel
                  times.
                </p>
              </div>
            </div>

            <Link
              href="/plan-your-morocco-tour"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Build My Morocco Route
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

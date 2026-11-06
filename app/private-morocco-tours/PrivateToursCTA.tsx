import Link from "next/link";

import {
  ArrowRightIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export default function PrivateToursCTA() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="flex flex-col gap-6 rounded-2xl border border-amber-100 bg-[#fffaf3] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-700 text-white">
              <MapIcon className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Want a Custom Private Morocco Tour?
              </h2>

              <p className="mt-2 max-w-2xl text-base leading-7 text-gray-700">
                Tell us your dates, starting city, number of travelers and
                places you want to visit. We can help you build a private
                Morocco itinerary around your trip.
              </p>
            </div>

          </div>

          <Link
            href="/plan-your-morocco-tour"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
          >
            Plan Your Private Tour
            <ArrowRightIcon className="h-4 w-4" />
          </Link>

        </div>

      </div>
    </section>
  );
}

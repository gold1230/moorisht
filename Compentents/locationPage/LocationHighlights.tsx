import {
  CameraIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import type { LocationPageData } from "@/lib/locationPageTypes";

type Props = {
  location: LocationPageData;
};

export default function LocationHighlights({ location }: Props) {
  return (
    <section className="bg-[#f7f5f1] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Tourism Highlights
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            What to See & Do in {location.name}
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            These experiences help visitors understand why {location.name} is
            an important stop on many Morocco itineraries.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {location.highlights.map((item, index) => {
            const Icon =
              index % 3 === 0
                ? MapIcon
                : index % 3 === 1
                  ? CameraIcon
                  : SparklesIcon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

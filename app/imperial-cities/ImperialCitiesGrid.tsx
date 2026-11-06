import Image from "next/image";
import Link from "next/link";

import { getDestinations } from "@/data/destinationFilter";

import {
  ArrowRightIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export default function ImperialCitiesGrid() {
  const cities = getDestinations({
    slugs: ["marrakech", "fes", "meknes", "rabat"],
  });

  return (
    <section
      id="imperial-cities"
      className="bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="imperial-cities-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Four Historic Capitals
          </p>

          <h2
            id="imperial-cities-title"
            className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Explore Morocco&apos;s Imperial Cities
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
            <span className="h-0.5 w-8 bg-amber-700" />
          </div>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Each Imperial City offers a different view of Morocco&apos;s history,
            architecture and culture. Visit one city or connect all four in a
            longer Morocco itinerary.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={city.href}
              className="group block"
            >
              <article className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={city.image}
                    alt={city.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1 text-xs font-bold text-amber-700 shadow-sm backdrop-blur">
                    <BuildingLibraryIcon className="h-3.5 w-3.5" />
                    Imperial City
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-amber-700">
                    {city.name}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {city.subtitle}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700">
                    Explore {city.name}
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

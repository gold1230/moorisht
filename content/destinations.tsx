import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

import { getDestinations } from "@/data/destinationFilter";

/* =========================================================
   TYPES
========================================================= */

const destinations = getDestinations({
  limit: 4,
  
});

/* =========================================================
   DESTINATION DATA
========================================================= */



export default function Destinations() {
  return (
    <section
      id="top-morocco-destinations"
      className="relative overflow-hidden bg-slate-900 py-14 sm:mx-6 sm:rounded-2xl sm:py-16 lg:mx-10"
      aria-labelledby="top-destinations-title"
    >
      {/* =====================================================
          LIGHTER BACKGROUND
      ===================================================== */}
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_28%)]" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="grid items-center gap-10 lg:grid-cols-[340px_minmax(0,1fr)]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            {/* Small GEO / category label */}
            <div className="flex items-center gap-2">
              <MapPinIcon
                className="h-5 w-5 text-amber-500"
                aria-hidden="true"
              />

              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-500">
                Top Destinations in Morocco
              </p>
            </div>

            {/* Main section heading */}
            <h2
              id="top-destinations-title"
              className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl"
            >
              Explore Morocco&apos;s
              <span className="block text-amber-500">
                Most Beautiful Places
              </span>
            </h2>

            {/* Decorative line */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-amber-500" />

              <span className="h-2 w-2 rotate-45 border border-amber-500" />

              <span className="h-0.5 w-8 bg-amber-500" />
            </div>

            {/* SEO / GEO description */}
            <p className="mt-5 text-base leading-7 text-white/85">
              Discover Marrakech, the Sahara Desert, Chefchaouen,
              Fes and other unforgettable Morocco destinations.
              Explore these places on private tours, desert trips
              and customized itineraries with local travel experts.
            </p>

            {/* CTA */}
            <Link prefetch={false}
              href="/destinations"
              className="group mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
            >
              Explore Morocco Destinations

              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* =================================================
              DESTINATION CARDS
          ================================================= */}

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            {destinations.map((place) => (
              <article
                key={place.id}
                className="group"
              >
                <Link prefetch={false}
                  href={place.href}
                  className="relative block h-65 overflow-hidden rounded-2xl border border-white/10 shadow-lg sm:h-72.5"
                  aria-label={`Explore ${place.name}, Morocco`}
                >
                  {/* Image */}
                  <Image
                    src={place.image}
                    alt={place.alt}
                    fill
                    quality={52}
                    sizes="
                      (max-width: 640px) calc(50vw - 30px),
                      (max-width: 1024px) 42vw,
                      240px
                    "
                  
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-4">

                    {/* Subtitle */}
                    <p className="mb-1 text-sm font-medium text-amber-300">
                      {place.subtitle}
                    </p>

                    <div className="flex items-end justify-between gap-3">

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white">
                        {place.name}
                      </h3>

                      {/* Arrow */}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700 text-white shadow-md transition duration-300 group-hover:translate-x-1 group-hover:bg-amber-700">
                        <ArrowRightIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </span>

                    </div>
                  </div>

                </Link>
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
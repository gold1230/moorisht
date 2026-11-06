import Image from "next/image";
import Link from "next/link";
import { getTours } from "@/data/tourFilter";

import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";


/* =========================================================
   TOUR DATA

   Tour data now comes from tours.json through getTours().
   The card design below is unchanged.
========================================================= */

const tours = getTours({
  featured: true,
  showOnHome: true,
  limit: 4,
});

function getTourImage(
  image: string,
  size: "thumb" | "card" | "hero"
) {
  return image.startsWith("/") ? image : `/blog/${size}/${image}`;
}

function getTourHref(slug: string): string {
  return slug.startsWith("/") ? slug : `/${slug}`;
}

function getTourLocation(
  startCity: string,
  endCity: string
): string {
  if (startCity === endCity) {
    return `From ${startCity}`;
  }

  return `${startCity} to ${endCity}`;
}

function getTourPrice(
  price: number,
  currency: string,
  priceFrom: boolean
): string {
  const symbol =
    currency === "EUR"
      ? "€"
      : currency === "USD"
        ? "$"
        : `${currency} `;

  return `${priceFrom ? "From " : ""}${symbol}${price}`;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function PopularTours() {
  return (
    <section
      id="popular-morocco-tours"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="popular-morocco-tours-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-3xl">

            {/* Small label */}
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              Popular Tours From Marrakech
            </p>

            {/* H2 */}
            <h2
              id="popular-morocco-tours-title"
              className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              Popular{" "}
              <span className="text-amber-700">
                Morocco Tours
              </span>
            </h2>

            {/* Decorative line */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-amber-700" />

              <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

              <span className="h-0.5 w-8 bg-amber-700" />
            </div>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
              Discover some of our most popular Morocco tours from
              Marrakech, including Sahara Desert trips, Marrakech to
              Merzouga tours, multi-day journeys and coastal day trips.
            </p>

          </div>

          {/* Desktop View All */}
          <Link 
            href="/tour"
            className="group hidden shrink-0 items-center gap-2 text-base font-semibold text-amber-700 transition hover:text-amber-700 md:inline-flex"
          >
            View All Morocco Tours

            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

        </div>

        {/* =====================================================
            TOUR GRID
        ===================================================== */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {tours.map((tour) => (
            <article
              key={tour.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
            >

              {/* =================================================
                  IMAGE
              ================================================= */}
              <Link 
                href={getTourHref(tour.slug)}
                className="relative block aspect-4/3 overflow-hidden"
                aria-label={`View ${tour.title}`}
              >
                <Image
                  src={getTourImage(tour.image, "card")}
                  alt={tour.alt}
                  fill
                  quality={52}
                  sizes="
                    (max-width: 640px) calc(100vw - 40px),
                    (max-width: 1280px) 42vw,
                    260px
                  "
                  
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Soft image gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/45 to-transparent" />

                {/* Badge */}
                {tour.badge && (
                  <span className="absolute left-3 top-3 rounded-md bg-amber-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                    {tour.badge}
                  </span>
                )}

                {/* Duration */}
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur">
                  <ClockIcon
                    className="h-4 w-4 text-amber-700"
                    aria-hidden="true"
                  />

                  {tour.duration}
                </span>
              </Link>

              {/* =================================================
                  CONTENT
              ================================================= */}
              <div className="flex flex-1 flex-col p-5">

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-amber-700">
                  <MapPinIcon
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />

                  <span>{getTourLocation(tour.startCity, tour.endCity)}</span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-xl font-bold leading-7 text-slate-900">
                  <Link 
                    href={getTourHref(tour.slug)}
                    className="transition hover:text-amber-700"
                  >
                    {tour.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-base leading-6 text-gray-600">
                  {tour.description}
                </p>

                {/* Spacer */}
                <div className="flex-1" />

                {/* A concise result-style summary. Ratings appear only when backed
                    by actual feedback recorded for this exact itinerary. */}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-700">
                    <span>{tour.priceFrom ? "Starting from" : "Price"}</span>
                    <span className="font-bold text-amber-800">
                      {getTourPrice(tour.price, tour.currency, false)}
                    </span>
                    {tour.reviewCount > 0 && tour.rating > 0 ? (
                      <span className="inline-flex items-center gap-1.5" aria-label={`${tour.rating} out of 5, ${tour.reviewCount} customer reviews`}>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-slate-900">{tour.rating.toFixed(1)}</span>
                        <span className="tracking-tight text-amber-700" aria-hidden="true">{"★".repeat(Math.round(tour.rating))}{"☆".repeat(5 - Math.round(tour.rating))}</span>
                        <span className="text-slate-600">({tour.reviewCount.toLocaleString()})</span>
                      </span>
                    ) : (
                      <span className="text-slate-600">· {tour.duration}</span>
                    )}
                  </div>

                  <Link 
                    href={getTourHref(tour.slug)}
                    aria-label={`View ${tour.title}`}
                    className="group/link inline-flex items-center gap-1.5 text-base font-semibold text-slate-900 transition hover:text-amber-700"
                  >
                    View Tour

                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                </div>

              </div>
            </article>
          ))}

        </div>

        {/* =====================================================
            MOBILE VIEW ALL
        ===================================================== */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link 
            href="/tour"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800"
          >
            View All Morocco Tours

            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
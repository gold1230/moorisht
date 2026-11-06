import Image from "next/image";
import Link from "next/link";

import { getTours } from "@/data/tourFilter";

import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function getTourHref(slug: string) {
  if (slug.startsWith("/")) return slug;
  if (slug.startsWith("tour/") || slug.startsWith("tours/")) return `/${slug}`;
  return `/${slug}`;
}

function getTourImage(image: string) {
  if (image.startsWith("/")) return image;
  return `/tours/card/${image}`;
}

function getLocation(startCity: string, endCity: string) {
  return startCity === endCity
    ? `From ${startCity}`
    : `${startCity} to ${endCity}`;
}

export default function FamilyToursGrid() {
  const tours = getTours({
    tourType: "Family Tours",
  });

  return (
    <section
      id="family-tours"
      className="bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="family-tours-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              Travel Together
            </p>

            <h2
              id="family-tours-title"
              className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              Popular Morocco Family Tours
            </h2>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-amber-700" />
              <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
              <span className="h-0.5 w-8 bg-amber-700" />
            </div>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Choose a Morocco family tour with flexible driving times,
              comfortable transport and routes that can include Marrakech,
              Fes, Chefchaouen, the Atlas Mountains, Merzouga and the Sahara
              Desert.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
            <UserGroupIcon className="h-5 w-5 text-amber-700" />
            {tours.length} family tours available
          </div>
        </div>

        {tours.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => {
              const href = getTourHref(tour.slug);

              return (
                <article
                  key={tour.id}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
                >
                  <Link
                    href={href}
                    className="relative block aspect-[16/10] overflow-hidden"
                  >
                    <Image
                      src={getTourImage(tour.image)}
                      alt={tour.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {tour.badge && (
                      <span className="absolute left-3 top-3 rounded-md bg-amber-700 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                        {tour.badge}
                      </span>
                    )}

                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur">
                      <ClockIcon className="h-4 w-4 text-amber-700" />
                      {tour.duration}
                    </span>
                  </Link>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-amber-700">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{getLocation(tour.startCity, tour.endCity)}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-7 text-slate-900">
                      <Link
                        href={href}
                        className="transition hover:text-amber-700"
                      >
                        {tour.title}
                      </Link>
                    </h3>

                    <p className="mt-2 line-clamp-3 text-base leading-6 text-gray-600">
                      {tour.description}
                    </p>

                    {tour.reviewCount > 0 && tour.rating > 0 && (
                  <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
                      <StarIcon className="h-4 w-4 fill-amber-500 text-amber-700" />

                      <span className="font-semibold text-slate-900">
                        {tour.rating}
                      </span>

                      <span className="text-sm text-gray-500">
                        ({tour.reviewCount.toLocaleString()} reviews)
                      </span>
                    </div>
                  )}

                    <div className="mt-4 flex items-end justify-between gap-4">
                      <div>
                        <span className="block text-sm text-gray-500">
                          {tour.priceFrom ? "From" : "Price"}
                        </span>

                        <span className="text-xl font-bold text-amber-700">
                          {tour.currency === "EUR" ? "€" : `${tour.currency} `}
                          {tour.price}
                        </span>

                        <span className="ml-1 text-sm text-gray-500">
                          / person
                        </span>
                      </div>

                      <Link
                        href={href}
                        className="inline-flex items-center gap-1.5 text-base font-semibold text-slate-900 transition hover:text-amber-700"
                      >
                        View Tour
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-[#fffaf3] px-6 py-10 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              Family tours are coming soon
            </h3>

            <p className="mt-2 text-base text-gray-600">
              Add tours with{" "}
              <strong>tourType: &quot;Family Tours&quot;</strong> in
              tours.json and they will appear here automatically.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

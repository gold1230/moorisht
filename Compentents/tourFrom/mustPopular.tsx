import Image from "next/image";
import Link from "next/link";
import { getTours } from "@/data/tourFilter";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

type PopularMoroccoToursProps = {
  collection?: string;
 
  title?: string;
  description?: string;
};

export default function PopularMoroccoTours({
  collection,

  title = "Popular Morocco Tours",
  description = "Handpicked adventures loved by our travelers",
}: PopularMoroccoToursProps) {
  const tours = getTours({
    collection,
 
  });

  return (
    <section
      id="popular-morocco-tours"
      className="bg-white py-10 sm:py-12"
      aria-labelledby="popular-morocco-tours-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="text-center">
          <h2
            id="popular-morocco-tours-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            {title}
          </h2>

          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
            <span className="h-[2px] w-8 bg-amber-700" />
          </div>

          <p className="mt-3 text-base text-gray-600">
            {description}
          </p>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <article
              key={tour.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Link
                href={`/${tour.slug.replace(/^\/+/, "")}`}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={tour.image.startsWith("/") ? tour.image : `/tours/card/${tour.image}`}
                  alt={tour.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {tour.badge && (
                  <span className="absolute left-3 top-3 rounded-md bg-amber-700 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {tour.badge}
                  </span>
                )}
              </Link>

              <div className="p-4">
                <h3 className="text-lg font-bold leading-6 text-slate-900">
                  <Link
                    href={`/${tour.slug.replace(/^\/+/, "")}`}
                    className="transition hover:text-amber-700"
                  >
                    {tour.title}
                  </Link>
                </h3>

                <p className="mt-1 text-base text-gray-600">
                  {tour.startCity === tour.endCity
                    ? `From ${tour.startCity}`
                    : `${tour.startCity} to ${tour.endCity}`}
                </p>

                {tour.reviewCount > 0 && tour.rating > 0 && (
                  <div className="mt-3 flex items-center gap-1.5">
                  <StarIcon className="h-4 w-4 fill-amber-500 text-amber-700" />

                  <span className="text-base font-semibold text-amber-700">
                    {tour.rating}
                  </span>

                  <span className="text-base text-gray-500">
                    ({tour.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                  )}

                <div className="mt-3 flex items-center gap-5">
                  <span className="flex items-center gap-1.5 text-base text-gray-600">
                    <ClockIcon className="h-4 w-4" />
                    {tour.duration.split("/")[0]}
                  </span>

                  <span className="flex items-center gap-1.5 text-base text-gray-600">
                    <MapPinIcon className="h-4 w-4" />
                    {tour.category}
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-base text-gray-700">
                    {tour.priceFrom && "From "}
                    <span className="text-xl font-bold text-amber-700">
                      €{tour.price}
                    </span>{" "}
                    / person
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            href="/tour"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-amber-700 px-7 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800"
          >
            View All Tours

            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

type Tour = {
  id: number;
  title: string;
  slug: string;
  image: string;
  alt: string;
  description: string;
  duration: string;
  price: number;
  currency: string;
  startCity: string;
  endCity: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
};

type Props = {
  tours: Tour[];
};

function getTourHref(slug: string) {
  if (slug.startsWith("/")) return slug;
  if (slug.startsWith("tour/") || slug.startsWith("tours/")) {
    return `/${slug}`;
  }
  return `/${slug}`;
}

function getTourImage(image: string) {
  if (image.startsWith("/")) return image;
  return `/tours/card/${image}`;
}

export default function LocationsFeaturedTours({
  tours,
}: Props) {
  return (
    <section className="bg-slate-950 py-12 text-white sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-600">
              Connect the Places
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Morocco Tours Across Multiple Locations
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              These tours connect several Morocco locations in one itinerary,
              making it easier to move between cities, mountains, valleys and
              desert areas.
            </p>
          </div>

          <Link
            href="/tour"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 transition hover:text-amber-500"
          >
            View all tours
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => {
            const href = getTourHref(tour.slug);

            return (
              <article
                key={tour.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-600/30 hover:bg-white/[0.08]"
              >
                <Link
                  href={href}
                  className="relative block aspect-[16/9] overflow-hidden"
                >
                  <Image
                    src={getTourImage(tour.image)}
                    alt={tour.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {tour.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-amber-700 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                      {tour.badge}
                    </span>
                  )}

                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/55 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                    <ClockIcon className="h-5 w-5 text-amber-600" />
                    {tour.duration}
                  </span>
                </Link>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-sm text-amber-600">
                    <MapPinIcon className="h-4 w-4" />
                    {tour.startCity === tour.endCity
                      ? `From ${tour.startCity}`
                      : `${tour.startCity} to ${tour.endCity}`}
                  </div>

                  <h3 className="mt-3 text-xl font-bold leading-7 text-white">
                    <Link href={href} className="transition hover:text-amber-600">
                      {tour.title}
                    </Link>
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">
                    {tour.description}
                  </p>

                  <div className="mt-4 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                    <div>
                      {tour.reviewCount > 0 && tour.rating > 0 && (
                  <div className="flex items-center gap-1.5 text-sm">
                        <StarIcon className="h-4 w-4 fill-amber-600 text-amber-600" />
                        <span className="font-bold text-white">
                          {tour.rating}
                        </span>
                        <span className="text-slate-400">
                          ({tour.reviewCount})
                        </span>
                      </div>
                  )}

                      <p className="mt-1 text-xs text-slate-400">
                        From{" "}
                        <span className="text-lg font-bold text-white">
                          {tour.currency === "EUR" ? "€" : tour.currency}
                          {tour.price}
                        </span>
                      </p>
                    </div>

                    <Link
                      href={href}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-amber-400"
                      aria-label={`View ${tour.title}`}
                    >
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

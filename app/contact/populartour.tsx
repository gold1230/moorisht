import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { getTours } from "@/data/tourFilter";

/* =========================================================
   TOUR DATA

   Tours now come from tours.json through getTours().
   The visual design below is unchanged.
========================================================= */

const popularTours = getTours({
  featured: true,
  showOnHome: true,
  limit: 4,
});

function getTourImage(
  image: string,
  size: "thumb" | "card" | "hero"
) {
  return image.startsWith("/") ? image : `/tours/${size}/${image}`;
}

function getTourHref(slug: string): string {
  if (slug.startsWith("/")) {
    return slug;
  }

  if (slug.startsWith("tour/")) {
    return `/${slug}`;
  }

  return `/${slug}`;
}

export default function PopularMoroccoTours() {
  return (
    <section
      id="popular-morocco-tours"
      className="w-full bg-white py-10"
      aria-labelledby="popular-tours-title"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center">
          <h2
            id="popular-tours-title"
            className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
          >
            Popular Morocco Tours You Can Ask Us About
          </h2>

          {/* Decorative divider */}
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 bg-amber-700" />

            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

            <span className="h-[2px] w-8 bg-amber-700" />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularTours.map((tour) => {
            const href = getTourHref(tour.slug);

            return (
              <article
                key={tour.id}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
              >
                {/* Image */}
                <Link
                  href={href}
                  className="relative block aspect-[16/8] overflow-hidden"
                  aria-label={tour.title}
                >
                  <Image
                    src={getTourImage(tour.image,"thumb")}
                    alt={tour.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Content */}
                <div className="p-4">

                  <h3 className="text-base font-bold leading-6 text-slate-900">
                    <Link
                      href={href}
                      className="transition-colors hover:text-amber-700"
                    >
                      {tour.title}
                    </Link>
                  </h3>

                  <p className="mt-2 line-clamp-3 text-base leading-6 text-gray-700">
                    {tour.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={href}
                    className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold text-amber-700 transition hover:text-amber-700"
                  >
                    View Tour

                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

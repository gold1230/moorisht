import Image from "next/image";
import Link from "next/link";
import { getDestinations } from "@/data/destinationFilter";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const destinations = getDestinations({
  limit: 8,
});

const ExploreDestinations = () => {
  return (
    <section
      className="py-7"
      aria-labelledby="destinations-title"
    >
      <div className="mx-auto px-4">

        {/* Heading */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Explore Morocco
            </span>

            <h2
              id="destinations-title"
              className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl"
            >
              Explore Morocco by Destination
            </h2>
          </div>

          <Link
            href="/destinations"
            className="hidden items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-700 sm:inline-flex"
          >
            View All
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Small destination cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">

          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/locations/${destination.slug}`}
              className="group block"
            >
              <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-md">

                {/* Small image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 12.5vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <div className="px-3 py-3">
                  <h3 className="line-clamp-1 text-sm font-semibold text-slate-900 transition group-hover:text-amber-700">
                    {destination.name}
                  </h3>

                  <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 group-hover:text-amber-700">
                    Explore
                    <ArrowRightIcon className="h-3 w-3" />
                  </span>
                </div>

              </article>
            </Link>
          ))}

        </div>

        {/* Mobile View All */}
        <div className="mt-5 text-center sm:hidden">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700"
          >
            View All Destinations
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExploreDestinations;

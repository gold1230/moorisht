import Image from "next/image";
import Link from "next/link";


import { getBlogs } from "@/data/blogFilter";

const popularGuides = getBlogs({
  
  random: true,
  limit: 6,
});



const PopularGuidesSidebar = () => {
  return (
    <aside
      className="rounded-xl border border-gray-200 bg-amber-50/30 p-6 my-8"
      aria-labelledby="popular-guides-title"
    >
      {/* Heading */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
          Traveler Favorites
        </span>

        <h2
          id="popular-guides-title"
          className="mt-2 text-xl font-bold text-slate-900"
        >
          Popular Morocco Travel Guides
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Helpful guides for planning your Morocco trip, desert tour,
          itinerary and travel experiences.
        </p>
      </div>

      {/* Guides */}
      <div className="mt-6">

        {popularGuides.map((guide, index) => (
          <article
            key={guide.id}
            className={`group py-4 ${
              index !== popularGuides.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            <Link
              href={`/${guide.slug}`}
              className="flex gap-3"
            >
              {/* Thumbnail */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={guide.image}
                  alt={guide.alt}
                  fill
                  sizes="80px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-700">
                    {"0"+ (index +1) }
                  </span>
                </div>

                <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-slate-900 transition group-hover:text-amber-700">
                  {guide.title}
                </h3>

                {/* <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-gray-500 transition group-hover:text-amber-600">
                  Read Guide

                  <ArrowRightIcon
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                </span> */}

              </div>
            </Link>
          </article>
        ))}

      </div>

      {/* View all */}
      {/* <Link
        href="/blog"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-amber-600 hover:text-amber-600"
      >
        View All Guides

        <ArrowRightIcon
          className="h-4 w-4"
          aria-hidden="true"
        />
      </Link> */}
    </aside>
  );
};

export default PopularGuidesSidebar;
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import { getBlogs } from "@/data/blogFilter";

const latestGuides = getBlogs({ sortBy: "newest" });

const LatestGuides = () => {
  return (
    <section
      className="py-7"
      aria-labelledby="latest-guides-title"
    >
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-8 max-w-3xl">

          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Travel Inspiration
          </span>

          <h2
            id="latest-guides-title"
            className="mt-2  text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Latest Morocco Travel Guides
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-600">
            Get practical Morocco travel advice, destination guides,
            desert tour ideas and useful tips to help you plan your
            Morocco vacation.
          </p>

        </div>

        {/* Articles grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {latestGuides.map((article) => (
            <article
              key={article.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >

              {/* Image */}
              <Link
                href={`/${article.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-amber-50"
                aria-label={`Read ${article.title}`}
              >
                <Image
                  src={article.image || "/blog/banner/morocco-sahara-desert-tour-travelers-1439x520.webp"}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 left-4 translate-y-2 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-amber-800 opacity-0 shadow-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Read travel guide →
                </span>
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">

                {/* Category */}
                <Link
                  href="/blog"
                  className="text-xs font-semibold uppercase tracking-wide text-amber-700 hover:text-amber-700"
                >
                  {article.category}
                </Link>

                {/* Title */}
                <h3 className="mt-2  text-xl font-bold leading-snug text-slate-900">
                  <Link
                    href={`/${article.slug}`}
                    className=" text-amber-700"
                  >
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {article.description}
                </p>

                {/* Meta */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-xs font-bold text-amber-700">

                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDaysIcon
                      className="h-4 w-4 "
                      aria-hidden="true"
                    />
                    {article.date}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <ClockIcon
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    {article.readTime}
                  </span>

                </div>

                {/* Read link */}
                {/* <Link
                  href={`/${article.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-amber-700"
                >
                  Read Travel Guide

                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link> */}

              </div>
            </article>
          ))}

        </div>

        {/* View all */}
        <div className="mt-10 text-center">

          {/* <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-amber-600 hover:text-amber-600"
          >
            View All Morocco Travel Guides

            <ArrowRightIcon
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link> */}

        </div>

      </div>
    </section>
  );
};

export default LatestGuides;
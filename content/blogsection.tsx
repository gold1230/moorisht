import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  CalendarDaysIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

import { getBlogs } from "@/data/blogFilter";

const blogs = getBlogs({
  sortBy: "newest",
  limit: 4,
});





/* =========================================================
   TYPES
========================================================= */



/* =========================================================
   BLOG DATA
========================================================= */



export default function BlogSection() {
  return (
    <section
      id="morocco-travel-guides"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="morocco-travel-guides-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">

            {/* Small label */}
            <div className="flex items-center gap-2">
              <BookOpenIcon
                className="h-5 w-5 text-amber-700"
                aria-hidden="true"
              />

              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                Morocco Travel Blog
              </p>
            </div>

            {/* H2 */}
            <h2
              id="morocco-travel-guides-title"
              className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              Morocco Travel{" "}
              <span className="text-amber-700">
                Guides &amp; Tips
              </span>
            </h2>

            {/* Decorative line */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-amber-700" />

              <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

              <span className="h-[2px] w-8 bg-amber-700" />
            </div>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
              Plan your Morocco trip with practical travel guides
              about Marrakech, Sahara Desert tours, destinations,
              weather, itineraries and local travel tips.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/blog"
            className="group hidden shrink-0 items-center gap-2 text-base font-semibold text-amber-700 transition hover:text-amber-700 md:inline-flex"
          >
            View All Travel Guides

            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

        </div>

        {/* =====================================================
            BLOG GRID
        ===================================================== */}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <Link
                href={`/${blog.slug}`}
                className="relative block aspect-[4/3] overflow-hidden"
                aria-label={`Read ${blog.title}`}
              >
                <Image
                  src={blog.image}
                  alt={blog.alt}
                  fill
                  quality={60}
                  sizes="
                    (max-width: 768px) calc(100vw - 40px),
                    (max-width: 1280px) 45vw,
                    300px
                  "
                 
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Category */}
                <span className="absolute left-3 top-3 rounded-md bg-amber-700 px-3 py-1.5 text-sm font-semibold text-white shadow-sm">
                  {blog.category}
                </span>
              </Link>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="flex flex-1 flex-col p-5">

                {/* Date + Read Time */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">

                  <div className="flex items-center gap-1.5">
                    <CalendarDaysIcon
                      className="h-4 w-4 text-amber-700"
                      aria-hidden="true"
                    />

                    <time dateTime={blog.dateISO}>
                      {blog.date}
                    </time>
                  </div>

                  <span aria-hidden="true">
                    •
                  </span>

                  <span>
                    {blog.readTime}
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold leading-7 text-slate-900">
                  <Link
                    href={`/${blog.slug}`}
                    className="transition hover:text-amber-700"
                  >
                    {blog.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-base leading-6 text-gray-600">
                  {blog.description}
                </p>

                <div className="flex-1" />

                {/* Read more */}
                <Link
                  href={`/${blog.slug}`}
                  aria-label={`Read ${blog.title}`}
                  className="group/read mt-5 inline-flex items-center gap-2 border-t border-gray-100 pt-4 text-base font-semibold text-amber-700 transition hover:text-amber-700"
                >
                  Read Travel Guide

                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-300 group-hover/read:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

              </div>
            </article>
          ))}

        </div>

        {/* =====================================================
            SEO / NAVIGATION LINKS
        ===================================================== */}

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-xl border border-gray-200 bg-[#faf9f7] px-5 py-4">

          <span className="text-base font-semibold text-slate-900">
            Explore more:
          </span>

          <Link
            href="/marrakech-desert-tours"
            className="text-base font-medium text-amber-700 hover:text-amber-800"
          >
            Marrakech Desert Guide
          </Link>

          <Link
            href="/morocco-travel-tips"
            className="text-base font-medium text-amber-700 hover:text-amber-800"
          >
            Best Time to Visit Morocco
          </Link>

          <Link
            href="/destinations"
            className="text-base font-medium text-amber-700 hover:text-amber-800"
          >
            Places to Visit in Morocco
          </Link>

          <Link
            href="/locations/chefchaouen"
            className="text-base font-medium text-amber-700 hover:text-amber-800"
          >
            Chefchaouen Guide
          </Link>

        </div>

        {/* =====================================================
            MOBILE CTA
        ===================================================== */}

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
          >
            View All Travel Guides

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
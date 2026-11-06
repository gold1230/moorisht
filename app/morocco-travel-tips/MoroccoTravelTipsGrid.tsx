import Image from "next/image";
import Link from "next/link";

import { getBlogs } from "@/data/blogFilter";

import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

function getBlogHref(slug: string) {
  if (slug.startsWith("/")) return slug;
  return `/${slug}`;
}

export default function MoroccoTravelTipsGrid() {
  const posts = getBlogs({
    category: "Travel Tips",
    sortBy: "newest",
  });

  return (
    <section
      id="travel-tips"
      className="bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="travel-tips-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              Latest Advice
            </p>

            <h2
              id="travel-tips-title"
              className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              Morocco Travel Tips & Planning Guides
            </h2>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-amber-700" />
              <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
              <span className="h-0.5 w-8 bg-amber-700" />
            </div>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Read practical Morocco travel advice written to help you plan
              routes, understand local conditions and feel more prepared
              before your trip.
            </p>
          </div>

          <span className="text-sm font-semibold text-slate-700">
            {posts.length} travel tips
          </span>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const href = getBlogHref(post.slug);

              return (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
                >
                  <Link
                    href={href}
                    className="relative block aspect-[16/10] overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-bold text-amber-700 shadow-sm backdrop-blur">
                      {post.category}
                    </span>
                  </Link>

                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDaysIcon className="h-4 w-4 text-amber-700" />
                        {post.date}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4 text-amber-700" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-7 text-slate-900">
                      <Link
                        href={href}
                        className="transition hover:text-amber-700"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-2 line-clamp-3 text-base leading-6 text-gray-600">
                      {post.description}
                    </p>

                    <Link
                      href={href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 transition hover:text-amber-800"
                    >
                      Read guide
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-[#fffaf3] px-6 py-10 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              Travel tips are coming soon
            </h3>

            <p className="mt-2 text-base text-gray-600">
              Add blog posts with{" "}
              <strong>category: &quot;Travel Tips&quot;</strong> in blogs.json
              and they will appear here automatically.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

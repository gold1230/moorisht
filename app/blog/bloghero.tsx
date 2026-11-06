

import Link from "next/link";
import Image from "next/image";

import BlogSearch from "./boxSearch"

import  image1 from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg"

import { getBlogs } from "@/data/blogFilter";

const popularGuides = getBlogs();




const BlogHero = () => {
  return (
    <section
      className="relative  "
      aria-labelledby="blog-hero-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src={image1}
          alt="Morocco travel landscape with traditional kasbah and mountains"
          fill
          priority
          fetchPriority="high" 
        
          sizes="100vw"
          className="object-cover"
        />

        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent md:from-white md:via-white/80 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-14 sm:px-10 md:min-h-[420px] md:px-14 md:py-20 lg:max-w-3xl">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-gray-500"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="font-medium text-amber-700"
              >
                Home
              </Link>
            </li>

            <li aria-hidden="true">›</li>

            <li className="font-medium text-gray-700">
              Blog
            </li>
          </ol>
        </nav>

        {/* Label */}
        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
          Morocco Travel Blog
        </span>

        {/* H1 */}
        <h1
          id="blog-hero-title"
          className="mt-5 max-w-2xl  text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          Morocco Travel Blog:
          <span className="block text-amber-700">
            Tours, Destinations & Travel Guides
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
          Discover practical Morocco travel guides, desert tours, destination
          tips, itineraries and local experiences to help you plan your trip
          to Morocco with confidence.
        </p>

        {/* Search */}
       
        <BlogSearch posts={popularGuides} />

      </div>
    </section>
  );
};

export default BlogHero;
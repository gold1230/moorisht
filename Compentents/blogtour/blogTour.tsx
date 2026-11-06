import Image from "next/image";
import Link from "next/link";

import {
  CalendarDaysIcon,
  ClockIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import heroImage from "@/public/blog/banner/morocco-sahara-desert-tour-travelers-1439x520.webp";


type BlogMetaInfo = {
  title: string;
  description: string;
};

type MarrakechMerzougaBlogHeroProps = {
  metainfo: BlogMetaInfo;
};

export default function MarrakechMerzougaBlogHero({
  metainfo,
}: MarrakechMerzougaBlogHeroProps) {
  return (
    <section
      className="bg-white pt-6 sm:pt-8"
      aria-labelledby="marrakech-merzouga-blog-title"
    >
      <div className="mx-auto  px-5 sm:px-7 lg:px-10">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-600"
        >
          <Link
            href="/"
            className="transition hover:text-amber-700"
          >
            Home
          </Link>

          <ChevronRightIcon
            className="h-4 w-4 text-gray-600"
            aria-hidden="true"
          />

          <Link
            href="/blog"
            className="transition hover:text-amber-700"
          >
            Blog
          </Link>

          <ChevronRightIcon
            className="h-4 w-4 text-gray-600"
            aria-hidden="true"
          />

          <span
            className="text-slate-700"
            aria-current="page"
          >
            {metainfo.title}
          </span>
        </nav>

        {/* Hero */}
        <div className="relative min-h-120 overflow-hidden rounded-2xl border border-amber-100 bg-[#fff8ee] sm:min-h-[500px] lg:min-h-[520px]">

          <Image
            src={heroImage}
            alt="Sahara Desert camp and Erg Chebbi dunes during a Marrakech to Merzouga desert tour"
            fill
            priority
            fetchPriority="high"
            placeholder="blur"
          
            sizes="100vw"
            className="object-cover object-center lg:object-[70%_center]"
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#fff8ee] via-[#fff8ee]/95 via-45% to-transparent" />

          <div className="relative z-10 flex min-h-120 items-center px-6 py-10 sm:min-h-[500px] sm:px-9 lg:min-h-[520px] lg:px-12">

            <div className="max-w-[700px]">

              <span className="inline-flex rounded-md bg-amber-700 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-sm">
                Travel Guide
              </span>

              <h1
                id="marrakech-merzouga-blog-title"
                className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[#102043] sm:text-5xl lg:text-[58px]"
              >
                {metainfo.title}
              </h1>


              <p className="mt-5 max-w-[620px] text-base leading-7 text-slate-700 sm:text-lg">
                {metainfo.description}
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">

                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-sm">
                    <Image
                      src="/images/morocco-desert-author.jpg"
                      alt={metainfo.title}
                      fill
                      fetchPriority="high"
                      priority
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      By Mohamed
                    </p>

                    <p className="mt-0.5 text-sm text-slate-600">
                      Morocco Travel Expert
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CalendarDaysIcon
                    className="h-5 w-5 text-amber-700"
                    aria-hidden="true"
                  />

                  <time dateTime="2026-08-22">
                    August 22, 2026
                  </time>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <ClockIcon
                    className="h-5 w-5 text-amber-700"
                    aria-hidden="true"
                  />

                  <span>25 min read</span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
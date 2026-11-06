import Image from "next/image";
import Link from "next/link";

import image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";

import {
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function SharedToursHero() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf3]">

      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <Image
          src={image1}
          alt="Travelers enjoying a shared Morocco tour through the Sahara Desert"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* White gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />

        {/* Small warm overlay */}
        <div className="absolute inset-0 bg-amber-50/10" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6"
        >
          <ol className="flex items-center gap-2 text-sm text-gray-600">

            <li>
              <Link
                href="/"
                className="font-semibold text-amber-700 transition hover:text-amber-700"
              >
                Home
              </Link>
            </li>

            <li aria-hidden="true">
              ›
            </li>

            <li className="font-medium text-slate-900">
              Shared Tours
            </li>

          </ol>
        </nav>

        {/* Main content */}
        <div className="max-w-4xl">

          {/* Label */}
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/95 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.12em] text-amber-700 shadow-sm backdrop-blur">

            <UserGroupIcon
              className="h-4 w-4"
              aria-hidden="true"
            />

            Travel Together, Pay Less

          </span>

          {/* H1 */}
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Shared Morocco Tours
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            Join other travelers on carefully planned shared Morocco
            tours. Explore the Sahara Desert, Atlas Mountains,
            traditional kasbahs and historic cities with a local
            driver and a small group, while keeping your Morocco
            adventure comfortable and affordable.
          </p>

          {/* Benefits */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">

            {[
              "Small groups",
              "Local drivers",
              "Sahara desert camps",
              "Great value",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-base font-medium text-slate-800"
              >
                <CheckCircleIcon
                  className="h-5 w-5 shrink-0 text-amber-700"
                  aria-hidden="true"
                />

                {item}
              </span>
            ))}

          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#shared-tours"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800"
            >
              Explore Shared Tours

              <ArrowRightIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>

            <Link
              href="/plan-your-morocco-tour"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white/95 px-6 text-base font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:border-amber-500 hover:text-amber-700"
            >
              Request a Private Tour
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
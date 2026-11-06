import Image , {StaticImageData} from "next/image";
import Link from "next/link";

import {
  CheckCircleIcon,
  TrophyIcon,
  UserGroupIcon,
  BriefcaseIcon,
  MegaphoneIcon
} from "@heroicons/react/24/outline";

type MoroccoToursHeroProps = {
  title: string;
  desc: string;
  image: StaticImageData;
};

export default function MoroccoToursHero({
  title,
  desc,
  image,
}: MoroccoToursHeroProps) {

  return (
    <section className="relative overflow-hidden bg-[#fff7e8]">
      <div className="relative min-h-[520px] lg:min-h-[560px]">

        {/* =====================================================
            BACKGROUND IMAGE
        ===================================================== */}
        <Image
          src={image}
          alt={title}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* =====================================================
            LEFT GRADIENT
        ===================================================== */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff7e8]/95 via-[#fff7e8]/80 to-transparent" />

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 pb-28 pt-14 sm:px-8 lg:min-h-[560px] lg:px-10">

          <div className="">

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-9"
            >
              <ol className="flex items-center gap-2 text-base text-slate-700">

                <li>
                  <Link
                    href="/"
                    className="font-bold text-amber-700"
                  >
                    Home
                  </Link>
                </li>

                <li
                  aria-hidden="true"
                  className="text-gray-700"
                >
                  ›
                </li>

                <li className="font-medium text-slate-900">
                  Tours
                </li>

              </ol>
            </nav>

            {/* Eyebrow */}
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
              Explore Morocco
            </p>

            {/* H1 */}
            <h1 className="mt-3 text-4xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[500px] text-base leading-7 text-slate-700 sm:text-lg">
              {desc}
            </p>

            {/* Benefits */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                <CheckCircleIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />
                Local Expert Guides
              </div>

              <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                <CheckCircleIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />
                Best Price Guarantee
              </div>

              <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                <CheckCircleIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />
                Customizable Tours
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-5">

              <Link
                href="/tour"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-amber-700 px-7 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800"
              >
                Explore All Morocco Tours
              </Link>

              <Link
                href="/activity/"
                className="group inline-flex items-center gap-3 text-base font-semibold text-slate-900 transition hover:text-amber-700"
              >
                Explore Activities
                <span aria-hidden="true" className="text-xl">→</span>
              </Link>

            </div>
          </div>
        </div>

        {/* =====================================================
            STATS CARD
        ===================================================== */}
        <div className="absolute bottom-5 left-1/2 z-20 w-[calc(100%-2rem)]  -translate-x-1/2 sm:bottom-6 sm:w-[calc(100%-3rem)] lg:right-10 lg:left-auto lg:w-[720px] lg:translate-x-0">

          <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur-sm sm:grid-cols-4">

            {/* Experience */}
            <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-4 sm:border-b-0 sm:border-r">

              <TrophyIcon
                className="h-9 w-9 shrink-0 text-amber-700"
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <div>
                <p className="text-xl font-bold text-slate-900">
                  10+
                </p>

                <p className="text-base text-[14px] text-gray-700">
                  Years Experience
                </p>
              </div>

            </div>

            {/* Travelers */}
            <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-4 sm:border-b-0 sm:border-r">

              <UserGroupIcon
                className="h-9 w-9 shrink-0 text-amber-700"
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <div>
                <p className="text-xl font-bold text-slate-900">
                  5000+
                </p>

                <p className="text-base text-[14px] text-gray-700">
                  Happy Travelers
                </p>
              </div>

            </div>

            {/* Tours */}
            <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-4 sm:border-b-0 sm:border-r">

              <BriefcaseIcon
                className="h-9 w-9 shrink-0 text-amber-700"
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <div>
                <p className="text-xl font-bold text-slate-900">
                  50+
                </p>

                <p className="text-base text-[14px] text-gray-700">
                  Tour Packages
                </p>
              </div>

            </div>

            {/* Support */}
            <div className="flex items-center gap-3 px-4 py-4">

              <MegaphoneIcon
                className="h-9 w-9 shrink-0 text-amber-700"
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <div>
                <p className="text-xl font-bold text-slate-900">
                  24/7
                </p>

                <p className="text-base text-[14px] text-gray-700">
                  Support
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
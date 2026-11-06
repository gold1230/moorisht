import Image from "next/image";
import Link from "next/link";

import image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";

import {
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function FirstTourOfferHero() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf3]">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image1}
          alt="Travelers discovering Morocco on a first Morocco tour"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/25" />
        <div className="absolute inset-0 bg-amber-50/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link
                href="/"
                className="font-semibold text-amber-700 transition hover:text-amber-700"
              >
                Home
              </Link>
            </li>

            <li aria-hidden="true">›</li>

            <li className="font-medium text-slate-900">
              First Morocco Tour Offer
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/95 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.12em] text-amber-700 shadow-sm backdrop-blur">
            <SparklesIcon className="h-4 w-4" />
            First-Time Traveler Offer
          </span>

          <div className="mt-5 inline-flex rounded-2xl bg-amber-700 mx-5 px-5 py-3 text-white shadow-lg">
            <span className="text-4xl font-black leading-none sm:text-5xl">
              20% OFF
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Save 20% on Your First Morocco Tour
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            Make your first Morocco journey even better. Explore Marrakech,
            Fes, Chefchaouen, the Atlas Mountains, Merzouga and the Sahara
            Desert, and request 20% off your first tour with us.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "First-time traveler offer",
              "Popular Morocco routes",
              "Local drivers",
              "Flexible tour options",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-base font-medium text-slate-800"
              >
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-amber-700" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#first-tour-deals"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800"
            >
              See Tour Deals
              <ArrowRightIcon className="h-4 w-4" />
            </a>

            <Link
              href="/plan-your-morocco-tour"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white/95 px-6 text-base font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:border-amber-500 hover:text-amber-700"
            >
              Claim Your 20% Offer
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

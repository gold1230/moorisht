import Link from "next/link";
import Image from "next/image";

import {
  CreditCardIcon,
  MegaphoneIcon,
  ChevronRightIcon,
  UserGroupIcon,
  LifebuoyIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import TripadvisorReview from "@/content/tripadvisorreview";

import image1 from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function BannerHome() {
  return (
    <section
      className="relative min-h-180 overflow-hidden"
      aria-labelledby="home-hero-title"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <Image
        fill
        src={image1}
        quality={60}
        sizes="100vw"
        alt="Travelers enjoying a Morocco Sahara Desert tour near the Merzouga dunes"
        priority
        placeholder="blur"
        className="object-cover object-center"
      />

      {/* =====================================================
          OVERLAYS
      ===================================================== */}

      {/* General dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Strong left gradient for readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 via-45% to-black/10" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto flex min-h-180 max-w-7xl flex-col px-5 pb-10 pt-28 sm:px-7 lg:px-10 lg:pt-32">

        {/* =================================================
            MAIN HERO MESSAGE
        ================================================= */}
        <div className="max-w-180">

          {/* Offer badge */}
          <div className="mb-5">
            <Link 
              href="/morocco-tour-discount"
              className="inline-flex items-center rounded-full border border-white/20 bg-amber-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-800"
            >
              Save 20% on Your First Morocco Tour
              <ChevronRightIcon
                className="ml-1.5 h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* GEO / trust signal */}
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-base font-medium text-white/90">
            <span className="flex items-center gap-2">
              <MapPinIcon
                className="h-5 w-5 text-amber-400"
                aria-hidden="true"
              />
              Local Morocco Tour Operator
            </span>

            <span className="hidden sm:inline text-white/40">
              •
            </span>

            <span>
              Based in Marrakech
            </span>
          </div>

          {/* Main H1 */}
          <h1
            id="home-hero-title"
            className="max-w-180 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Marrakech Desert Tours &amp; Private Morocco Tours
          </h1>

          {/* Supporting text */}
          <p className="mt-5 max-w-170 text-lg leading-8 text-white/90 sm:text-xl">
            Explore Morocco with local experts on private and
            small-group tours from Marrakech. Travel through the
            High Atlas Mountains, ancient kasbahs and the Sahara
            Desert, with camel trekking, desert camps and authentic
            Moroccan experiences.
          </p>

          {/* =================================================
              KEY BENEFITS ABOVE CTA
          ================================================= */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">

            <div className="flex items-center gap-2 text-base font-medium text-white">
              <CheckCircleIcon
                className="h-5 w-5 text-amber-400"
                aria-hidden="true"
              />
              Private &amp; Small Group Tours
            </div>

            <div className="flex items-center gap-2 text-base font-medium text-white">
              <CheckCircleIcon
                className="h-5 w-5 text-amber-400"
                aria-hidden="true"
              />
              Marrakech to Merzouga
            </div>

            <div className="flex items-center gap-2 text-base font-medium text-white">
              <CheckCircleIcon
                className="h-5 w-5 text-amber-400"
                aria-hidden="true"
              />
              Customizable Itineraries
            </div>

          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}
          <div className="mt-7 flex flex-wrap items-center gap-4">

            {/* Primary CTA */}
            <Link 
              href="/marrakech-desert-tours"
              className="group inline-flex h-12 items-center justify-center rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
            >
              Explore Marrakech Desert Tours

              <ChevronRightIcon
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            {/* Secondary CTA */}
            <Link 
              href="/plan-your-morocco-tour"
              className="group inline-flex h-12 items-center justify-center rounded-lg border border-white/60 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-slate-900"
            >
              Plan Your Morocco Tour

              <ChevronRightIcon
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Small intent links */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link 
              href="/private-morocco-tours"
              className="font-medium text-white/80 underline-offset-4 transition hover:text-amber-300 hover:underline"
            >
              Private Morocco Tours
            </Link>

            <Link 
              href="/small-morocco-shared-tours"
              className="font-medium text-white/80 underline-offset-4 transition hover:text-amber-300 hover:underline"
            >
              Small Group Tours
            </Link>

            <Link 
              href="/morocco-desert-tours"
              className="font-medium text-white/80 underline-offset-4 transition hover:text-amber-300 hover:underline"
            >
              Sahara Desert Tours
            </Link>
          </div>

        </div>

        {/* =====================================================
            LOWER HERO AREA
        ===================================================== */}
        <div className="mt-auto pt-4">

          {/* Tripadvisor */}
          <div className="max-w-6xl">
            <TripadvisorReview />
          </div>

          {/* =================================================
              TRUST BENEFITS
          ================================================= */}
          <div className="mt-2 grid overflow-hidden rounded-xl border border-white/10 bg-[#20262e]/95 shadow-xl backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">

            {/* Best Price */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 sm:border-r lg:border-b-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700">
                <CreditCardIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white">
                  Best Price Guarantee
                </h2>

                <p className="mt-0.5 text-sm text-gray-600">
                  Clear pricing with no hidden fees.
                </p>
              </div>
            </div>

            {/* Local Guides */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 lg:border-b-0 lg:border-r">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700">
                <MegaphoneIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white">
                  Local Morocco Experts
                </h2>

                <p className="mt-0.5 text-sm text-gray-600">
                  Local knowledge from experienced guides.
                </p>
              </div>
            </div>

            {/* Private / Small groups */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 sm:border-r sm:border-b-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700">
                <UserGroupIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white">
                  Private &amp; Small Groups
                </h2>

                <p className="mt-0.5 text-sm text-gray-600">
                  Flexible and comfortable travel.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700">
                <LifebuoyIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white">
                  24/7 Travel Support
                </h2>

                <p className="mt-0.5 text-sm text-gray-600">
                  Help before and during your Morocco trip.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
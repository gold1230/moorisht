import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import Abdou from "@/public/abdou-faiz-morocco-destinations.webp";

export default function CTABanner() {
  return (
    <section
      id="plan-your-morocco-trip"
      className="relative overflow-hidden bg-slate-950"
      aria-labelledby="morocco-cta-title"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <Image
        src={Abdou}
        alt=""
        fill
        sizes="100vw"
        quality={75}
        placeholder="blur"
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* General overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Strong gradient behind content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 via-50% to-black/20" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="max-w-2xl">

          {/* Small label */}
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-400">
            Your Morocco Journey Starts Here
          </p>

          {/* Heading */}
          <h2
            id="morocco-cta-title"
            className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
          >
            Ready to Explore{" "}
            <span className="text-amber-400">
              Morocco?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
            Tell us how you want to travel and our local team will
            help you plan a private or small-group Morocco tour,
            from Marrakech and the Sahara Desert to imperial cities,
            mountains and coastal destinations.
          </p>

          {/* =================================================
              TRUST POINTS
          ================================================= */}

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-base font-medium text-white">
              <CheckCircleIcon
                className="h-5 w-5 text-amber-400"
                aria-hidden="true"
              />
              Local Morocco Experts
            </div>

            <div className="flex items-center gap-2 text-base font-medium text-white">
              <CheckCircleIcon
                className="h-5 w-5 text-amber-400"
                aria-hidden="true"
              />
              Flexible Itineraries
            </div>

            <div className="flex items-center gap-2 text-base font-medium text-white">
              <CheckCircleIcon
                className="h-5 w-5 text-amber-400"
                aria-hidden="true"
              />
              Personal Travel Support
            </div>
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="mt-8 flex flex-wrap gap-4">

            {/* Main CTA */}
            <Link prefetch={false}
              href="/plan-your-morocco-tour"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
            >
              Plan Your Morocco Tour

              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212628812520"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/50 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-slate-900"
            >
              Chat on WhatsApp

              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Small reassurance */}
          <p className="mt-5 text-sm leading-6 text-white/65">
            Tell us your travel dates, group size and places you
            would like to visit. We&apos;ll help you create an itinerary
            that fits your trip.
          </p>

        </div>
      </div>
    </section>
  );
}
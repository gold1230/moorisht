import Link from "next/link";
import Image from "next/image";

import {
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import image1 from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#fffaf4]"
      aria-labelledby="contact-hero-title"
    >
      <div className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]">

        {/* =====================================================
            BACKGROUND IMAGE
        ===================================================== */}
        <Image
          src={image1}
          alt="Travelers exploring the Sahara Desert in Morocco with sand dunes near Merzouga"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          placeholder="blur"
          className="object-cover object-center"
        />

        {/* =====================================================
            OVERLAYS
        ===================================================== */}

        {/* General dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Light-to-dark content gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf4]/98 via-[#fffaf4]/90 via-45% to-black/15" />

        {/* Subtle bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fffaf4] to-transparent" />

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:min-h-[560px] sm:px-7 lg:min-h-[600px] lg:px-10">

          <div className="max-w-[650px]">

            {/* Small location / entity label */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">

              <div className="flex items-center gap-2">
                <MapPinIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />

                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  Local Morocco Tour Operator
                </p>
              </div>

              <span className="hidden text-gray-600 sm:inline">
                •
              </span>

              <span className="text-sm font-semibold text-slate-700">
                Based in Marrakech
              </span>

            </div>

            {/* =================================================
                H1
            ================================================= */}
            <h1
              id="contact-hero-title"
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Contact{" "}
              <span className="text-amber-700">
                Moorish Tour
              </span>
            </h1>

            {/* Supporting heading */}
            <p className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Start Planning Your Morocco Trip
            </p>

            {/* Description */}
            <p className="mt-5 max-w-[590px] text-lg leading-8 text-slate-700">
              Have questions about Marrakech desert tours,
              Sahara trips, private Morocco tours or a custom
              itinerary? Contact our local travel team and tell
              us where you want to go, your travel dates and
              how you would like to experience Morocco.
            </p>

            {/* =================================================
                TRUST POINTS
            ================================================= */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                <CheckCircleIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />

                Local Morocco Experts
              </div>

              <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                <CheckCircleIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />

                Flexible Itineraries
              </div>

              <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                <CheckCircleIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />

                Personal Travel Support
              </div>

            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              {/* Primary */}
              <Link
                href="#contact-form"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
              >
                <PaperAirplaneIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />

                Send a Tour Request
              </Link>

              {/* Secondary */}
              <Link
                href="#contact-options"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/90 px-6 text-base font-semibold text-slate-900 shadow-sm backdrop-blur-sm transition duration-300 hover:border-amber-400 hover:bg-amber-50"
              >
                <ChatBubbleLeftRightIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />

                Contact Our Team
              </Link>

            </div>

            {/* Small reassurance */}
            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600">
              Tell us about your travel dates, group size,
              destinations and interests. We&apos;ll use your details
              to help you plan the right Morocco itinerary.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
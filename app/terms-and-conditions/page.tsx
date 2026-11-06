import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";

import {
  CalendarDaysIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title: "Terms & Conditions | Moorish Tour",
  description:
    "Read the Moorish Tour Terms & Conditions covering bookings, payments, cancellations, itinerary changes, traveler responsibilities, liability, and governing law.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   TERMS SECTIONS
========================================================= */

const termsSections = [
  {
    id: "booking-payment",
    title: "1. Booking & Payment",
    description:
      "A booking is considered confirmed only after we have accepted your reservation and received any required deposit or full payment. The amount due, payment schedule, accepted payment method, and final balance date will be shown in your booking confirmation. Prices are normally quoted in the currency stated in your proposal and may be subject to change before confirmation if supplier costs, taxes, or exchange conditions change.",
    icon: CalendarDaysIcon,
  },
  {
    id: "cancellations-by-you",
    title: "2. Cancellations by You",
    description:
      "If you need to cancel your tour, please notify us in writing as soon as possible. Cancellation charges may apply because hotels, camps, transport providers, guides, and other suppliers may already have been reserved or paid. Any applicable cancellation terms will be explained at the time of booking. Non-refundable supplier costs may not be recoverable.",
    icon: XCircleIcon,
  },
  {
    id: "cancellations-by-us",
    title: "3. Cancellations by Us",
    description:
      "We may cancel or reschedule a tour when necessary because of safety concerns, severe weather, road closures, government restrictions, supplier failure, force majeure, or other circumstances outside our reasonable control. When possible, we will offer a suitable alternative, new travel date, credit, or refund for services we are able to recover from suppliers.",
    icon: ExclamationTriangleIcon,
  },
  {
    id: "changes-to-tours",
    title: "4. Changes to Tours",
    description:
      "Morocco itineraries may occasionally need to change because of weather, road conditions, local events, accommodation availability, transport issues, or other practical reasons. We may adjust the order of visits, accommodation, transport, or activities when necessary while doing our best to provide an experience of similar quality and value.",
    icon: PencilSquareIcon,
  },
  {
    id: "traveler-responsibilities",
    title: "5. Traveler Responsibilities",
    description:
      "Travelers are responsible for having valid passports, visas, travel permits, travel insurance, medication, and any other documents or requirements needed for their trip. You are also responsible for providing accurate booking information, following local laws and customs, respecting guides and suppliers, and arriving on time for scheduled departures and activities.",
    icon: UserIcon,
  },
  {
    id: "limitation-of-liability",
    title: "6. Limitation of Liability",
    description:
      "Moorish Tour organizes travel services using independent hotels, camps, transport companies, guides, activity providers, and other suppliers. To the extent permitted by applicable law, we are not responsible for loss, injury, delay, damage, missed services, or additional costs caused by events beyond our reasonable control, including weather, strikes, road closures, government action, illness, accidents, or third-party supplier failures.",
    icon: ShieldCheckIcon,
  },
  {
    id: "governing-law",
    title: "7. Governing Law",
    description:
      "These Terms & Conditions are governed by the applicable laws of Morocco. Any dispute that cannot be resolved directly between you and Moorish Tour will be handled by the competent courts or authorities in Morocco, subject to any mandatory consumer protection rights that may apply to you.",
    icon: ScaleIcon,
  },
  {
    id: "contact-us",
    title: "8. Contact Us",
    description:
      "If you have questions about these Terms & Conditions, your booking, payment, cancellation terms, or any part of your Morocco tour, please contact Moorish Tour before confirming your reservation.",
    icon: EnvelopeIcon,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden">
        <div className="relative h-[245px] sm:h-[285px] lg:h-[320px]">
          <Image
            src={heroImage}
            alt="Sahara Desert dunes in Morocco"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Warm dark overlay like the reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/55 via-orange-950/35 to-slate-950/25" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-7 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
                Terms &amp; Conditions
              </h1>

              <nav
                aria-label="Breadcrumb"
                className="mt-3"
              >
                <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/95">
                  <li>
                    <Link
                      href="/"
                      className="transition hover:text-amber-300"
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    aria-hidden="true"
                    className="text-white/70"
                  >
                    ›
                  </li>

                  <li aria-current="page">
                    Terms &amp; Conditions
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">

          {/* =================================================
              INTRO CARD
          ================================================= */}

          <div className="rounded-xl bg-[#fbf7f1] px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-amber-100">
                <DocumentTextIcon
                  className="h-8 w-8 text-amber-700"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-slate-900">
                  Please Read These Terms Carefully
                </h2>

                <p className="mt-1 max-w-4xl text-base leading-7 text-gray-700">
                  By booking a tour, activity, transfer, or other travel service
                  with Moorish Tour, you agree to these Terms &amp; Conditions.
                  Please read them before confirming your reservation.
                </p>

                <p className="mt-2 text-sm font-medium text-gray-600">
                  Last updated: September 2, 2026
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              TERMS ITEMS
          ================================================= */}

          <div className="mt-6 space-y-1">
            {termsSections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="grid gap-4 border-b border-gray-100 py-4 last:border-b-0 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-5"
                  aria-labelledby={`${section.id}-title`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#fbf7f1]">
                    <Icon
                      className="h-7 w-7 text-amber-700"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2
                      id={`${section.id}-title`}
                      className="font-serif text-xl font-semibold text-slate-900"
                    >
                      {section.title}
                    </h2>

                    <p className="mt-1 text-base leading-7 text-gray-700">
                      {section.description}
                    </p>

                    {section.id === "contact-us" && (
                      <Link
                        href="/contact"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 transition hover:text-amber-800"
                      >
                        Contact Moorish Tour
                      </Link>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          {/* =================================================
              BOOKING CTA
          ================================================= */}

          <div className="mt-7 rounded-xl bg-[#fbf7f1] px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-amber-100">
                  <SparklesIcon
                    className="h-7 w-7 text-amber-700"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                    Ready to Explore Morocco?
                  </h2>

                  <p className="mt-1 text-base text-gray-600">
                    Discover our Morocco tours or ask us to create a private
                    itinerary for your trip.
                  </p>
                </div>
              </div>

              <Link
                href="/tour"
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800"
              >
                View Tours
              </Link>
            </div>
          </div>

          {/* =================================================
              ADDITIONAL IMPORTANT TERMS
          ================================================= */}

          <div className="mt-7 space-y-5 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Travel Insurance
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We strongly recommend comprehensive travel insurance covering
                cancellation, medical expenses, personal belongings, travel
                delays, emergency assistance, and activities included in your
                itinerary.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">
                Force Majeure
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Moorish Tour is not responsible for failure or delay caused by
                circumstances beyond reasonable control, including natural
                disasters, extreme weather, epidemics, government restrictions,
                civil unrest, strikes, border closures, or transportation
                disruption.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">
                Website Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We try to keep tour descriptions, prices, images, and other
                website information accurate and current. However, details may
                change, and your final booking confirmation will take priority
                over general information shown on the website.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

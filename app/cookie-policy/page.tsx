"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import heroImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";

import {
  ArrowPathIcon,
  ChartBarIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

/* =========================================================
   COOKIE TYPES
========================================================= */

const cookieTypes = [
  {
    title: "Essential Cookies",
    description:
      "These cookies are necessary for core website functions such as page navigation, security, forms, and remembering your cookie choices. They cannot usually be disabled through our website.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Performance Cookies",
    description:
      "These cookies help us understand how visitors use our website, which pages are most useful, and where we can improve performance. We use this information in an aggregated way where possible.",
    icon: ChartBarIcon,
  },
  {
    title: "Functional Cookies",
    description:
      "These cookies can remember choices such as language, preferences, or other settings so we can provide a more convenient and personalized browsing experience.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Advertising Cookies",
    description:
      "If advertising or marketing tools are enabled, these cookies may be used to measure campaigns, limit repeated ads, and help show more relevant content. Non-essential advertising cookies should only be used where appropriate consent has been obtained.",
    icon: MegaphoneIcon,
  },
];

export default function CookiePolicyPage() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent =
      window.localStorage.getItem(
        "moorish-cookie-consent"
      );

    const timer = window.setTimeout(() => setAccepted(consent === "accepted"), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(
      "moorish-cookie-consent",
      "accepted"
    );

    document.cookie =
      "moorish_cookie_consent=accepted; path=/; max-age=31536000; SameSite=Lax";

    setAccepted(true);
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden">
        <div className="relative h-[245px] sm:h-[285px] lg:h-[320px]">
          <Image
            src={heroImage}
            alt="Morocco city landscape at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Warm dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-orange-950/35 to-slate-950/25" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-7 lg:px-10">
            <div className="max-w-3xl">

              <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
                Cookie Policy
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
                    Cookie Policy
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
                <GlobeAltIcon
                  className="h-8 w-8 text-amber-700"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-slate-900">
                  About Our Cookies
                </h2>

                <p className="mt-1 max-w-4xl text-base leading-7 text-gray-700">
                  This Cookie Policy explains how Moorish Tour
                  may use cookies and similar technologies on
                  our website, why they are used, and the
                  choices available to you.
                </p>

                <p className="mt-2 text-sm font-medium text-gray-600">
                  Last updated: September 2, 2026
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              1. WHAT ARE COOKIES
          ================================================= */}

          <section
            className="mt-8"
            aria-labelledby="what-are-cookies-title"
          >
            <h2
              id="what-are-cookies-title"
              className="font-serif text-xl font-semibold text-slate-900"
            >
              1. What Are Cookies?
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Cookies are small text files that a website can
              place on your browser or device when you visit.
              They can help a website work correctly, remember
              preferences, understand how visitors use the
              site, and improve the overall browsing
              experience.
            </p>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Some cookies are set directly by Moorish Tour
              and others may be set by third-party services
              used on our website, such as analytics, maps,
              embedded content, payment services, or marketing
              tools.
            </p>
          </section>

          {/* =================================================
              2. COOKIE TYPES
          ================================================= */}

          <section
            className="mt-8"
            aria-labelledby="cookie-types-title"
          >
            <h2
              id="cookie-types-title"
              className="font-serif text-xl font-semibold text-slate-900"
            >
              2. Types of Cookies We Use
            </h2>

            <div className="mt-4 space-y-2">
              {cookieTypes.map((cookie) => {
                const Icon = cookie.icon;

                return (
                  <div
                    key={cookie.title}
                    className="grid gap-4 rounded-md bg-[#fbf7f1] px-4 py-4 sm:grid-cols-[48px_minmax(0,1fr)] sm:items-center sm:gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center">
                      <Icon
                        className="h-6 w-6 text-amber-700"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {cookie.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-700">
                        {cookie.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =================================================
              3. MANAGING COOKIES
          ================================================= */}

          <section
            className="mt-8"
            aria-labelledby="managing-cookies-title"
          >
            <h2
              id="managing-cookies-title"
              className="font-serif text-xl font-semibold text-slate-900"
            >
              3. Managing Cookies
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-700">
              You can manage or delete cookies through your
              browser settings. Most browsers allow you to
              block cookies, remove existing cookies, or
              receive a warning before a cookie is stored.
              Please remember that disabling essential cookies
              may affect parts of the website and some
              features may not work correctly.
            </p>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Where our website provides a cookie consent or
              preference tool, you can use it to accept or
              manage non-essential cookies. Your browser and
              device settings may also provide additional
              privacy controls.
            </p>
          </section>

          {/* =================================================
              4. THIRD-PARTY SERVICES
          ================================================= */}

          <section
            className="mt-8"
            aria-labelledby="third-party-title"
          >
            <h2
              id="third-party-title"
              className="font-serif text-xl font-semibold text-slate-900"
            >
              4. Third-Party Cookies
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Our website may use third-party services that
              place their own cookies or similar technologies.
              These may include analytics providers, map
              services, social media features, embedded
              content, booking tools, or payment providers.
              Their use of information is governed by their
              own privacy and cookie policies.
            </p>
          </section>

          {/* =================================================
              5. CHANGES
          ================================================= */}

          <section
            className="mt-8"
            aria-labelledby="changes-title"
          >
            <h2
              id="changes-title"
              className="font-serif text-xl font-semibold text-slate-900"
            >
              5. Changes to This Policy
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-700">
              We may update this Cookie Policy when our
              website, services, technology, or legal
              requirements change. The latest version will be
              published on this page with the updated date.
            </p>
          </section>

          {/* =================================================
              6. CONTACT
          ================================================= */}

          <section
            className="mt-8"
            aria-labelledby="cookie-contact-title"
          >
            <h2
              id="cookie-contact-title"
              className="font-serif text-xl font-semibold text-slate-900"
            >
              6. Contact Us
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-700">
              If you have questions about this Cookie Policy,
              the cookies used on our website, or your privacy
              choices, please contact Moorish Tour.
            </p>

            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 transition hover:text-amber-800"
            >
              <EnvelopeIcon
                className="h-4 w-4"
                aria-hidden="true"
              />

              Contact Moorish Tour
            </Link>
          </section>

          {/* =================================================
              ACCEPT COOKIES CTA
          ================================================= */}

          <div className="mt-8 rounded-xl bg-[#fbf7f1] px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-amber-100">
                  {accepted ? (
                    <CheckCircleIcon
                      className="h-7 w-7 text-amber-700"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowPathIcon
                      className="h-7 w-7 text-amber-700"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                    {accepted
                      ? "Cookie Preference Saved"
                      : "Enjoy a Better Experience"}
                  </h2>

                  <p className="mt-1 text-base text-gray-600">
                    {accepted
                      ? "Your cookie preference has been saved on this device."
                      : "You can accept cookies to help us provide website features and improve your experience."}
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={acceptCookies}
                disabled={accepted}
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800 disabled:cursor-default disabled:bg-amber-600/70"
              >
                {accepted
                  ? "Accepted"
                  : "Accept Cookies"}
              </button>

            </div>
          </div>

          {/* =================================================
              RELATED POLICIES
          ================================================= */}

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link
              href="/privacy-policy"
              className="font-semibold text-amber-700 transition hover:text-amber-800"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="font-semibold text-amber-700 transition hover:text-amber-800"
            >
              Terms &amp; Conditions
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";

import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  IdentificationIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UserIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Privacy Policy | Moorish Tour",
  description:
    "Read the Moorish Tour Privacy Policy to understand what personal information we collect, how we use it, when it may be shared, and the choices available to you.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const privacySections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    description:
      "When you contact us, request a Morocco tour, make a booking, or use our website, we may collect information such as your name, email address, phone number, country, travel dates, group size, tour preferences, accommodation requests, and other details you choose to provide. If information such as passport details is needed for a specific travel service, we will only request it when necessary.",
    icon: UserIcon,
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    description:
      "We use your information to answer inquiries, prepare tour proposals, organize bookings, communicate about your trip, provide customer support, improve our tours and website, prevent misuse, and meet legal or administrative requirements connected with your reservation.",
    icon: DocumentTextIcon,
  },
  {
    id: "information-sharing",
    title: "3. Information Sharing",
    description:
      "We do not sell or rent your personal information. We may share only the information needed to provide your trip with trusted service providers such as hotels, camps, guides, drivers, transport companies, activity providers, payment processors, or other booking partners. We may also disclose information when required by law.",
    icon: UserGroupIcon,
  },
  {
    id: "data-security",
    title: "4. Data Security",
    description:
      "We use reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure. No website or online transmission can be guaranteed to be completely secure, so we cannot promise absolute security.",
    icon: LockClosedIcon,
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    description:
      "Depending on the laws that apply to you, you may have the right to ask what personal information we hold, request corrections, request deletion, object to certain uses, or ask us to limit how information is processed. You may contact us at any time to make a privacy request.",
    icon: IdentificationIcon,
  },
  {
    id: "cookies",
    title: "6. Cookies",
    description:
      "Our website may use cookies and similar technologies to remember preferences, understand website traffic, improve performance, and support useful website features. You can control cookies through your browser settings. For more information, please read our Cookie Policy.",
    icon: GlobeAltIcon,
    link: {
      href: "/cookie-policy",
      label: "Read our Cookie Policy",
    },
  },
  {
    id: "contact-us",
    title: "7. Contact Us",
    description:
      "If you have questions about this Privacy Policy, want to make a privacy request, or need help understanding how your information is used, please contact Moorish Tour through our contact page.",
    icon: EnvelopeIcon,
    link: {
      href: "/contact",
      label: "Contact Moorish Tour",
    },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="relative h-[245px] sm:h-[285px] lg:h-[320px]">
          <Image
            src={heroImage}
            alt="Morocco landscape and traditional kasbah"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/45" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-7 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
                Privacy Policy
              </h1>

              <nav aria-label="Breadcrumb" className="mt-3">
                <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/95">
                  <li>
                    <Link
                      href="/"
                      className="transition hover:text-amber-300"
                    >
                      Home
                    </Link>
                  </li>

                  <li aria-hidden="true" className="text-white/70">
                    ›
                  </li>

                  <li aria-current="page">
                    Privacy Policy
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
          <div className="rounded-xl bg-[#fbf7f1] px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-amber-100">
                <ShieldCheckIcon
                  className="h-8 w-8 text-amber-700"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-slate-900">
                  Your Privacy Matters
                </h2>

                <p className="mt-1 max-w-4xl text-base leading-7 text-gray-700">
                  Moorish Tour respects your privacy and is committed to handling
                  personal information responsibly. This policy explains what
                  information we may collect, why we use it, when it may be shared,
                  and the choices available to you.
                </p>

                <p className="mt-2 text-sm font-medium text-gray-600">
                  Last updated: September 2, 2026
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-1">
            {privacySections.map((section) => {
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

                    {section.link && (
                      <Link
                        href={section.link.href}
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 transition hover:text-amber-800"
                      >
                        {section.link.label}
                        <ArrowRightIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-7 rounded-xl bg-[#fbf7f1] px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-amber-100">
                  <ChatBubbleLeftRightIcon
                    className="h-7 w-7 text-amber-700"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                    Have Questions About Your Privacy?
                  </h2>

                  <p className="mt-1 text-base text-gray-600">
                    We&apos;re here to help. Contact us if you have any questions
                    about your personal information.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-7 rounded-lg border border-gray-200 bg-white p-5">
            <h2 className="text-base font-bold text-slate-900">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              We may update this Privacy Policy when our services, website,
              technology, or legal obligations change. The latest version will
              always be published on this page with its updated date.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

import MoorishLogo from "@/public/moorishtours3white.png";
import SocialLinks from "@/Compentents/SocialLinks";


const tourLinks = [
  {
    label: "Morocco Desert Tours",
    href: "/morocco-desert-tours",
  },
  {
    label: "Marrakech Desert Tours",
    href: "/marrakech-desert-tours",
  },
  {
    label: "Fes Desert Tours",
    href: "/morocco-fes-desert-tours",
  },
  {
    label: "Errachidia Desert Tours",
    href: "/errachidia-desert-tours",
  },
  {
    label: "Private Morocco Tours",
    href: "/private-morocco-tours",
  },
  {
    label: "Morocco Family Tours",
    href: "/morocco-family-tours",
  },
];

const destinationLinks = [
  {
    label: "Marrakech",
    href: "/locations/marrakech",
  },
  {
    label: "Merzouga",
    href: "/locations/merzouga",
  },
  {
    label: "Fes",
    href: "/locations/fes",
  },
  {
    label: "Chefchaouen",
    href: "/locations/chefchaouen",
  },
  {
    label: "Atlas Mountains",
    href: "/locations/high-atlas-mountains",
  },
];

const usefulLinks = [
  {
    label: "All Morocco Tours",
    href: "/tour",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Plan Your Morocco Tour",
    href: "/plan-your-morocco-tour",
  },
  {
    label: "Travel Blog",
    href: "/blog",
  },
  {
    label: "About Moorish Tour",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
   
    
    
    <footer className="bg-[#0e1014] text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-7 lg:px-10 lg:py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.15fr]">

          {/* =================================================
              COMPANY
          ================================================= */}
          <div>

            <Link prefetch={false}
              href="/"
              className="inline-flex"
              aria-label="Moorish Tour - Morocco Tour Operator"
            >
              <Image
                src={MoorishLogo}
                alt="Moorish Tour - Morocco tour operator"
                width={150}
                height={75}
                sizes="150px"
                className="h-auto w-36.25 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-base leading-7 text-gray-300">
              Moorish Tour is a local Morocco tour operator based
              in Marrakech, offering private and small-group
              Morocco tours, Sahara Desert trips, cultural
              experiences and customized itineraries.
            </p>

            {/* Quick CTA */}
            <Link prefetch={false}
              href="/plan-your-morocco-tour"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-amber-800"
            >
              Plan Your Morocco Tour

              <ArrowRightIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* =================================================
              MOROCCO TOURS
          ================================================= */}
          <nav
            aria-labelledby="footer-tours-title"
          >
            <h2
              id="footer-tours-title"
              className="text-lg font-bold text-white"
            >
              Morocco Tours
            </h2>

            <ul className="mt-5 space-y-3">

              {tourLinks.map((item) => (
                <li key={item.href}>
                  <Link prefetch={false}
                    href={item.href}
                    className="text-base text-gray-300 transition hover:text-amber-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>

          {/* =================================================
              DESTINATIONS
          ================================================= */}
          <nav
            aria-labelledby="footer-destinations-title"
          >
            <h2
              id="footer-destinations-title"
              className="text-lg font-bold text-white"
            >
              Popular Destinations
            </h2>

            <ul className="mt-5 space-y-3">

              {destinationLinks.map((item) => (
                <li key={item.href}>
                  <Link prefetch={false}
                    href={item.href}
                    className="text-base text-gray-300 transition hover:text-amber-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>

          {/* =================================================
              USEFUL LINKS
          ================================================= */}
          <nav
            aria-labelledby="footer-resources-title"
          >
            <h2
              id="footer-resources-title"
              className="text-lg font-bold text-white"
            >
              Travel &amp; Resources
            </h2>

            <ul className="mt-5 space-y-3">

              {usefulLinks.map((item) => (
                <li key={item.href}>
                  <Link prefetch={false}
                    href={item.href}
                    className="text-base text-gray-300 transition hover:text-amber-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>

          {/* =================================================
              CONTACT
          ================================================= */}
          <div>

            <h2 className="text-lg font-bold text-white">
              Contact Moorish Tour
            </h2>

            <address className="mt-5 not-italic">

              {/* Phone */}
              <a
                href="tel:+212628812520"
                className="flex items-start gap-3 text-base text-gray-300 transition hover:text-amber-400"
              >
                <PhoneIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                  aria-hidden="true"
                />

                <span>
                  +212628812520
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:moorishtour@gmail.com"
                className="mt-4 flex items-start gap-3 text-base text-gray-300 transition hover:text-amber-400"
              >
                <EnvelopeIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                  aria-hidden="true"
                />

                <span className="break-all">
                  moorishtour@gmail.com
                </span>
              </a>

              {/* Location */}
              <div className="mt-4 flex items-start gap-3 text-base text-gray-300">
                <MapPinIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                  aria-hidden="true"
                />

                <span>
                  Marrakech, Morocco
                </span>
              </div>

            </address>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212628812520"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-amber-800"
            >
              Chat on WhatsApp
            </a>

            <SocialLinks variant="footer" />

          </div>

        </div>

        {/* =====================================================
            MOROCCO TOPICS
        ===================================================== */}
        <div className="mt-12 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-base font-semibold text-white">
                Explore Morocco with Moorish Tour
              </h2>

              <p className="mt-1 max-w-3xl text-base leading-6 text-gray-300">
                Discover the Sahara Desert, Marrakech, Fes,
                Chefchaouen, Atlas Mountains, ancient kasbahs
                and unforgettable Morocco travel experiences.
              </p>
            </div>

            <Link prefetch={false}
              href="/tour"
              className="inline-flex shrink-0 items-center gap-2 text-base font-semibold text-amber-600 transition hover:text-amber-700"
            >
              View All Morocco Tours
              <ArrowRightIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>

          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div className="mt-10 border-t border-white/10 pt-7">

          <div className="flex flex-col gap-5 text-base text-gray-300 md:flex-row md:items-center md:justify-between">

            <p>
              © 2014 - {currentYear} Moorish Tour.
              All Rights Reserved.
            </p>

            <nav
              aria-label="Legal navigation"
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              <Link prefetch={false}
                href="/privacy-policy"
                className="transition hover:text-amber-400"
              >
                Privacy Policy
              </Link>

              <Link prefetch={false}
                href="/terms-and-conditions"
                className="transition hover:text-amber-400"
              >
                Terms &amp; Conditions
              </Link>

              <Link prefetch={false}
                href="/cookie-policy"
                className="transition hover:text-amber-400"
              >
                Cookie Policy
              </Link>
            </nav>

          </div>

        </div>

      </div>
      
    </footer>
   
  );
}
import Image from "next/image";
import Link from "next/link";

import {
  CalendarDaysIcon,
  UserGroupIcon,
  MapPinIcon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";

/* =========================================================
   DATA
========================================================= */

const statistics = [
  {
    value: "10+",
    label: "Years of Experience",
    icon: CalendarDaysIcon,
  },
  {
    value: "1000+",
    label: "Travelers Helped",
    icon: UserGroupIcon,
  },
  {
    value: "50+",
    label: "Morocco Destinations",
    icon: MapPinIcon,
  },
  {
    value: "4.9/5",
    label: "Traveler Rating",
    icon: StarIcon,
  },
];

const values = [
  {
    title: "Local Morocco Expertise",
    description:
      "Our local travel knowledge helps travelers understand Morocco's routes, culture, cities, desert regions and everyday life.",
    icon: UserGroupIcon,
  },
  {
    title: "Authentic Experiences",
    description:
      "We design Morocco journeys that connect travelers with local culture, traditions, food, landscapes and communities.",
    icon: HeartIcon,
  },
  {
    title: "Comfort & Reliability",
    description:
      "We work with experienced drivers, trusted accommodations and local partners to make travel around Morocco comfortable and well organized.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Responsible Tourism",
    description:
      "We encourage travel that respects Morocco's local communities, culture, landscapes and natural environment.",
    icon: SparklesIcon,
  },
];

const services = [
  {
    title: "Private Morocco Tours",
    description:
      "Flexible private journeys designed around your dates, destinations, interests and preferred travel pace.",
    href: "/private-morocco-tours",
  },
  {
    title: "Marrakech Desert Tours",
    description:
      "Travel from Marrakech across the High Atlas Mountains and traditional kasbahs toward the Sahara Desert.",
    href: "/marrakech-desert-tours",
  },
  {
    title: "Sahara Desert Tours",
    description:
      "Experience Merzouga, Erg Chebbi, camel trekking, desert camps and the landscapes of southern Morocco.",
    href: "/morocco-desert-tours",
  },
  {
    title: "Custom Morocco Itineraries",
    description:
      "Create a personalized Morocco trip based on your travel dates, group size and places you want to explore.",
    href: "/plan-your-morocco-tour",
  },
];

const benefits = [
  "Private & Small Group Morocco Tours",
  "Experienced Local Drivers & Guides",
  "Flexible & Customizable Itineraries",
  "Support Before and During Your Trip",
  "Clear Planning and Travel Information",
];

/* =========================================================
   COMPONENT
========================================================= */

export default function AboutHero() {
  return (
    <>
      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
      <section
        id="about-moorish-tour"
        className="bg-white py-8 sm:py-10 lg:py-12"
        aria-labelledby="about-moorish-tour-title"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          {/* Breadcrumb */}
          <nav
            className="mb-8 flex items-center gap-2 text-sm text-gray-600"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="font-medium text-amber-700 transition hover:text-amber-800"
            >
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <span
              className="font-medium text-gray-700"
              aria-current="page"
            >
              About Moorish Tour
            </span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* =================================================
                CONTENT
            ================================================= */}
            <div>
              <div className="flex items-center gap-2">
                <GlobeAltIcon
                  className="h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />

                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  About Moorish Tour
                </p>
              </div>

              <h1
                id="about-moorish-tour-title"
                className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl"
              >
                Local Morocco Tour Operator for Authentic Travel Experiences
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
                Moorish Tour is a Morocco-based tour operator
                specializing in private tours, small-group journeys,
                Sahara Desert trips and customized Morocco
                itineraries. We help travelers explore the country
                with local knowledge, flexible planning and personal
                travel support.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
                Our Morocco tours connect destinations such as
                Marrakech, Fes, Merzouga, the Atlas Mountains,
                historic kasbahs, traditional villages, valleys and
                coastal towns. Whether you want a desert journey,
                cultural trip or a complete Morocco itinerary, our
                goal is to make the experience simple, comfortable
                and memorable.
              </p>

              {/* Trust points */}
              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Local Morocco Team
                    </h2>

                    <p className="mt-1 text-base leading-6 text-gray-600">
                      Local knowledge and personal travel support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Tailor-Made Trips
                    </h2>

                    <p className="mt-1 text-base leading-6 text-gray-600">
                      Itineraries built around your travel plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Comfortable Travel
                    </h2>

                    <p className="mt-1 text-base leading-6 text-gray-600">
                      Reliable travel throughout Morocco.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Authentic Experiences
                    </h2>

                    <p className="mt-1 text-base leading-6 text-gray-600">
                      Discover Morocco beyond the main tourist route.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/tour"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
                >
                  Explore Morocco Tours

                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/plan-your-morocco-tour"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 text-base font-semibold text-slate-900 transition hover:border-amber-500 hover:text-amber-700"
                >
                  Plan Your Morocco Tour

                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                IMAGE
            ================================================= */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={image1}
                alt="Travelers exploring Morocco with Moorish Tour"
                width={900}
                height={700}
                priority
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-sm font-semibold text-amber-700">
                  Explore Morocco
                </p>

                <p className="mt-1 text-base font-bold text-slate-900">
                  Cities • Mountains • Sahara • Culture
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ===================================================== */}
      <section
        className="bg-[#faf9f7] py-8"
        aria-label="Moorish Tour travel experience"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-4">

            {statistics.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 border-b border-r border-gray-100 p-5 last:border-r-0 md:border-b-0"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50">
                    <Icon
                      className="h-6 w-6 text-amber-700"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>

                    <p className="mt-0.5 text-sm text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section
        id="what-we-do"
        className="bg-white py-14 sm:py-16"
        aria-labelledby="what-we-do-title"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              What We Do
            </p>

            <h2
              id="what-we-do-title"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Morocco Tours Designed Around How You Want to Travel
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-700">
              We organize different types of Morocco travel
              experiences, from short Marrakech desert tours to
              longer private journeys across the country.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-base leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="group mt-5 inline-flex items-center gap-2 text-base font-semibold text-amber-700 hover:text-amber-800"
                >
                  Learn More

                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section
        id="our-story"
        className="bg-[#faf9f7] py-14 sm:py-16"
        aria-labelledby="our-story-title"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={image1}
                alt="Travelers experiencing Morocco landscapes with Moorish Tour"
                width={900}
                height={650}
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Story */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                Our Story
              </p>

              <h2
                id="our-story-title"
                className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl"
              >
                Built Around Local Knowledge, Culture and Travel
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-700">
                Moorish Tour was created from a passion for Morocco,
                its landscapes, traditions, cities and people. Our
                goal is to help travelers experience the country in a
                personal and meaningful way.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-700">
                We plan journeys through Morocco&apos;s imperial
                cities, Atlas Mountains, valleys, traditional
                villages, kasbahs and Sahara Desert. Each itinerary
                is designed to combine local knowledge with practical
                travel planning and comfortable transportation.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-700">
                We want travelers to see more than famous attractions.
                A Morocco journey can also include local communities,
                traditional food, everyday culture and landscapes that
                make each region different.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <section
        id="our-values"
        className="bg-white py-14 sm:py-16"
        aria-labelledby="our-values-title"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              Our Values
            </p>

            <h2
              id="our-values-title"
              className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              How We Approach Travel in Morocco
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
                    <Icon
                      className="h-6 w-6 text-amber-700"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {value.description}
                  </p>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY TRAVEL WITH US
      ===================================================== */}
      <section
        id="why-travel-with-us"
        className="bg-[#faf9f7] py-14 sm:py-16"
        aria-labelledby="why-travel-with-us-title"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                Why Travel With Moorish Tour?
              </p>

              <h2
                id="why-travel-with-us-title"
                className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                More Than Just a Morocco Tour
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-700">
                Good travel planning is not only about moving from
                one destination to another. We focus on helping you
                understand the route, travel comfortably and enjoy
                experiences that match your interests.
              </p>

              <ul className="mt-6 space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-base text-gray-700"
                  >
                    <CheckCircleIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                      aria-hidden="true"
                    />

                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">

                <Link
                  href="/plan-your-morocco-tour"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
                >
                  Plan Your Morocco Tour

                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-base font-semibold text-slate-900 transition hover:border-amber-500 hover:text-amber-700"
                >
                  Contact Our Team
                </Link>

              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={image1}
                alt="Travelers enjoying a private Morocco tour"
                width={1000}
                height={650}
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
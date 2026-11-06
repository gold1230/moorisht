import {
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import {
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";

import tripadvisor from "@/public/images/tripadvisor-desert-trips.png";

/* =========================================================
   TYPES
========================================================= */

type Review = {
  name: string;
  country: string;
  review: string;
  rating: number;
};

/* =========================================================
   REVIEW DATA
========================================================= */

const reviews: Review[] = [
  {
    name: "Sarah J.",
    country: "United States",
    rating: 5,
    review:
      "Amazing experience with Moorish Tour! Everything was perfect, our driver was very friendly and professional.",
  },
  {
    name: "Marco R.",
    country: "Italy",
    rating: 5,
    review:
      "Best trip of our life! The desert camp was incredible and the service was top level. Highly recommended.",
  },
  {
    name: "Lisa M.",
    country: "Canada",
    rating: 5,
    review:
      "We did a 3 days desert tour from Marrakech and it was unforgettable. Thank you Moorish Tour!",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="morocco-tour-reviews"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="traveler-reviews-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">

            {/* Small label */}
            <div className="flex items-center gap-2">
              <ChatBubbleLeftRightIcon
                className="h-5 w-5 text-amber-700"
                aria-hidden="true"
              />

              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                Traveler Reviews
              </p>
            </div>

            {/* Heading */}
            <h2
              id="traveler-reviews-title"
              className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              What Travelers Say About Our{" "}
              <span className="text-amber-700">
                Morocco Tours
              </span>
            </h2>

            {/* Decorative line */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-amber-700" />

              <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

              <span className="h-0.5 w-8 bg-amber-700" />
            </div>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
              Read experiences from travelers who explored Morocco
              with Moorish Tour, including Marrakech desert tours,
              Sahara experiences and private journeys around Morocco.
            </p>
          </div>

          {/* Desktop CTA */}
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g293733-d27417833-Reviews-Moorish_Tour-Fez_Fez_Meknes.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden shrink-0 items-center gap-2 text-base font-semibold text-amber-700 transition hover:text-amber-700 md:inline-flex"
          >
            View All Reviews

            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* =====================================================
            REVIEWS GRID
        ===================================================== */}
        <div className="grid gap-5 lg:grid-cols-3">

          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.country}`}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg sm:p-7"
            >

              {/* =============================================
                  TOP
              ============================================= */}
              <div className="flex items-center justify-between gap-4">

                {/* Stars */}
                <div
                  className="flex items-center gap-1"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({
                    length: review.rating,
                  }).map((_, index) => (
                    <StarIcon
                      key={index}
                      className="h-5 w-5 text-amber-700"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Source */}
                <span className="text-sm font-medium text-gray-500">
                  Traveler Review
                </span>
              </div>

              {/* =============================================
                  REVIEW
              ============================================= */}
              <blockquote className="mt-5 flex-1">
                <p className="text-base leading-7 text-gray-700">
                  “{review.review}”
                </p>
              </blockquote>

              {/* =============================================
                  REVIEWER
              ============================================= */}
              <div className="mt-6 border-t border-gray-100 pt-5">

                <div className="flex items-center gap-4">

                  {/* Tripadvisor image */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#00aa6c]/10">
                    <Image
                      src={tripadvisor}
                      alt="Tripadvisor"
                      width={48}
                      height={48}
                      placeholder="blur"
                      className="h-12 w-12 object-contain"
                    />
                  </div>

                  {/* Traveler details */}
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-slate-900">
                      {review.name}
                    </h3>

                    <p className="mt-0.5 text-sm text-gray-600">
                      Traveler from {review.country}
                    </p>
                  </div>

                  {/* Rating number */}
                  <div className="ml-auto text-right">
                    <p className="text-base font-bold text-slate-900">
                      {review.rating}.0
                    </p>

                    <p className="text-xs text-gray-500">
                      Excellent
                    </p>
                  </div>

                </div>
              </div>

            </article>
          ))}

        </div>

        {/* =====================================================
            TRUST / SOURCE ROW
        ===================================================== */}
        <div className="mt-7 flex flex-col gap-4 rounded-xl border border-gray-200 bg-[#faf9f7] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <Image
              src={tripadvisor}
              alt="Tripadvisor reviews"
              width={42}
              height={42}
              placeholder="blur"
              className="h-10 w-10 object-contain"
            />

            <div>
              <p className="text-base font-semibold text-slate-900">
                Read more traveler experiences
              </p>

              <p className="text-sm text-gray-600">
                See additional reviews of Moorish Tour on Tripadvisor.
              </p>
            </div>

          </div>

          <a
            href="https://www.tripadvisor.com/Attraction_Review-g293733-d27417833-Reviews-Moorish_Tour-Fez_Fez_Meknes.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-base font-semibold text-amber-700 transition hover:text-amber-700"
          >
            Visit Tripadvisor

            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

        </div>

        {/* Mobile CTA */}
        <div className="mt-7 flex justify-center md:hidden">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g293733-d27417833-Reviews-Moorish_Tour-Fez_Fez_Meknes.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
          >
            View All Reviews

            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
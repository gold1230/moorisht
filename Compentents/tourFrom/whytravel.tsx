"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  UserGroupIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

/* =========================================================
   TYPES
========================================================= */

export type TravelBenefit = {
  title: string;
  description: string;
  icon: string;
};

export type TravelerReview = {
  quote: string;
  name: string;
  country: string;
  avatar: string;
  avatarAlt: string;
  rating: number;
};

type WhyTravelWithUsProps = {
  title?: string;
  benefits: TravelBenefit[];
  reviews: TravelerReview[];
  image: string;
  imageAlt: string;
  reviewsTitle?: string;
};

/* =========================================================
   BENEFIT ICON
========================================================= */

function BenefitIconComponent({
  icon,
}: {
  icon: string;
}) {
  const iconClass = "h-7 w-7 text-white";

  switch (icon) {
    case "expertise":
      return (
        <UserGroupIcon
          className={iconClass}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      );

    case "value":
      return (
        <SparklesIcon
          className={iconClass}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      );

    case "flexible":
      return (
        <AdjustmentsHorizontalIcon
          className={iconClass}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      );

    case "safety":
      return (
        <ShieldCheckIcon
          className={iconClass}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      );

    case "support":
      return (
        <UserGroupIcon
          className={iconClass}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      );

    case "custom":
      return (
        <AdjustmentsHorizontalIcon
          className={iconClass}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      );

    default:
      return (
        <ShieldCheckIcon
          className={iconClass}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      );
  }
}

/* =========================================================
   COMPONENT
========================================================= */

export default function WhyTravelWithUs({
  title = "Why Travel With Us?",
  benefits,
  reviews,
  image,
  imageAlt,
  reviewsTitle = "What Our Travelers Say",
}: WhyTravelWithUsProps) {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = reviews.length;

  /* =======================================================
     NEXT / PREVIOUS
  ======================================================= */

  const nextReview = () => {
    setCurrentReview((current) =>
      current >= totalReviews - 1 ? 0 : current + 1
    );
  };

  const previousReview = () => {
    setCurrentReview((current) =>
      current <= 0 ? totalReviews - 1 : current - 1
    );
  };

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    if (totalReviews <= 1 || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentReview((current) =>
        current >= totalReviews - 1 ? 0 : current + 1
      );
    }, 2000);

    return () => {
      window.clearInterval(interval);
    };
  }, [totalReviews, isPaused]);

  /* =======================================================
     PROTECT AGAINST INVALID INDEX
  ======================================================= */


  if (!reviews.length) {
    return null;
  }

  const review = reviews[Math.min(currentReview, reviews.length - 1)];

  return (
    <section
      className="bg-white py-10 sm:py-12"
      aria-labelledby="why-travel-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =================================================
              LEFT — WHY TRAVEL WITH US
          ================================================= */}
          <div className="flex flex-col justify-center">

            <h2
              id="why-travel-title"
              className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              {title}
            </h2>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-amber-700" />

              <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

              <span className="h-[2px] w-8 bg-amber-700" />
            </div>

            <div className="mt-7 space-y-6">

              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-700">
                    <BenefitIconComponent
                      icon={benefit.icon}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-6 text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-base leading-6 text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* =================================================
              RIGHT — REVIEWS SLIDER
          ================================================= */}
          <div
            className="relative overflow-hidden rounded-xl bg-[#faf8f4]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div className="grid min-h-[340px] lg:grid-cols-[1.15fr_0.85fr]">

              {/* REVIEW CONTENT */}
              <div className="relative z-10 flex flex-col justify-center px-7 py-8 sm:px-10 sm:py-10">

                <h2 className="text-3xl font-bold leading-tight text-slate-900">
                  {reviewsTitle}
                </h2>

                {/* Decorative line */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-[2px] w-8 bg-amber-700" />

                  <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

                  <span className="h-[2px] w-8 bg-amber-700" />
                </div>

                {/* Quote */}
                <div
                  key={`review-${currentReview}`}
                  className="mt-6 animate-[fadeIn_0.5s_ease-in-out]"
                >
                  <span
                    className="block text-5xl font-bold leading-none text-amber-700"
                    aria-hidden="true"
                  >
                    “
                  </span>

                  <blockquote className="mt-1 max-w-xl text-lg leading-8 text-slate-700">
                    {review.quote}
                  </blockquote>
                </div>

                {/* Traveler */}
                <div
                  key={`traveler-${currentReview}`}
                  className="mt-7 flex items-center gap-4"
                >
                  <Image
                    src={review.avatar}
                    alt={review.avatarAlt}
                    width={58}
                    height={58}
                    className="h-[58px] w-[58px] rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-base text-gray-600">
                      {review.country}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="ml-auto flex items-center gap-1">
                    {Array.from({
                      length: review.rating,
                    }).map((_, index) => (
                      <StarIcon
                        key={index}
                        className="h-5 w-5 fill-amber-500 text-amber-700"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Controls */}
                {totalReviews > 1 && (
                  <div className="mt-7 flex items-center justify-between">

                    {/* Dots */}
                    <div
                      className="flex items-center gap-2"
                      aria-label="Review slides"
                    >
                      {reviews.map((item, index) => (
                        <button
                          key={`${item.name}-${index}`}
                          type="button"
                          onClick={() =>
                            setCurrentReview(index)
                          }
                          aria-label={`Show review ${
                            index + 1
                          }`}
                          aria-current={
                            currentReview === index
                              ? "true"
                              : undefined
                          }
                          className={`h-2 cursor-pointer  rounded-full transition-all ${
                            currentReview === index
                              ? "w-7 bg-amber-700"
                              : "w-2 bg-gray-300 hover:bg-amber-400"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex items-center gap-2">

                      <button
                        type="button"
                        onClick={previousReview}
                        aria-label="Previous review"
                        className="flex h-9 w-9 items-center cursor-pointer justify-center rounded-full border border-gray-300 bg-white text-slate-700 transition hover:border-amber-600 hover:text-amber-700"
                      >
                        <ChevronLeftIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={nextReview}
                        aria-label="Next review"
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-slate-700 transition hover:border-amber-600 hover:text-amber-700"
                      >
                        <ChevronRightIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </button>

                    </div>
                  </div>
                )}

              </div>

              {/* IMAGE */}
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-full [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
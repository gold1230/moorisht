"use client";

import Image from "next/image";
import {
  MapIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import image from "@/public/plan/map-moorish-tour-.webp"

type TripSummaryProps = {
  destinations?: string[];
  travelDates?: string;
  travelers?: number | string;
  interests?: string[];
  travelStyle?: string;
};

export default function TripSummary({
  destinations = [],
  travelDates = "",
  travelers = "",
  interests = [],
  travelStyle = "",
}: TripSummaryProps) {
  const hasDestinations = destinations.length > 0;
  const hasTravelDates = Boolean(travelDates);
  const hasTravelers = Boolean(travelers);
  const hasInterests = interests.length > 0;
  const hasTravelStyle = Boolean(travelStyle);

  const summaryItems = [
    {
      label: hasDestinations
        ? destinations.join(", ")
        : "Destinations",
      active: hasDestinations,
    },
    {
      label: hasTravelDates
        ? travelDates
        : "Travel Dates",
      active: hasTravelDates,
    },
    {
      label: hasTravelers
        ? `${travelers} Traveler${Number(travelers) === 1 ? "" : "s"}`
        : "Travelers",
      active: hasTravelers,
    },
    {
      label: hasInterests
        ? interests.join(", ")
        : "Interests & Activities",
      active: hasInterests,
    },
    {
      label: hasTravelStyle
        ? travelStyle
        : "Travel Style",
      active: hasTravelStyle,
    },
  ];

  return (
    <aside
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7"
      aria-labelledby="trip-summary-title"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <MapIcon
          className="h-8 w-8 shrink-0 text-amber-700"
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <h2
          id="trip-summary-title"
          className="text-2xl font-bold leading-tight text-slate-900"
        >
          Your Trip Summary
        </h2>
      </div>

      {/* Intro */}
      <p className="mx-auto  max-w-sm text-center text-base leading-7 text-gray-700">
        Once you fill the form, your trip summary
        will appear here.
      </p>

      {/* Illustration */}
      <div className="relative -my-4 mx-auto h-[150px] w-full max-w-[300px]">
        <Image
          src={image}
          alt="Morocco trip planning map with location pin, camel and palm tree"
          fill
          sizes="300px"
          className="object-contain"
        />
      </div>

      {/* Summary items */}
      <div className="space-y-1">
        {summaryItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3"
          >
            <CheckCircleIcon
              className={`h-5 w-5 shrink-0 ${
                item.active
                  ? "text-amber-700"
                  : "text-slate-900"
              }`}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span
              className={`text-base leading-6 ${
                item.active
                  ? "font-semibold text-slate-900"
                  : "font-medium text-slate-800"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
"use client";

import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  PencilSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import type {
  TourPlannerComponentProps,
} from "./types";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "France",
  "Germany",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Other",
];

export default function TripBasics({
  value,
  onChange,
}: TourPlannerComponentProps) {
  return (
    <section
      id="trip-basics"
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="trip-basics-title"
    >
      {/* Section heading */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700 text-lg font-bold text-white">
          1
        </span>

        <div className="flex items-center gap-2">
          <span
            className="text-base text-amber-700"
            aria-hidden="true"
          >
            ◆
          </span>

          <h2
            id="trip-basics-title"
            className="text-2xl font-bold leading-tight text-slate-900"
          >
            Trip Basics
          </h2>
        </div>
      </div>

      <div className="mt-7 grid gap-x-8 gap-y-6 lg:grid-cols-2">

        {/* =========================
            YOUR NAME
        ========================= */}
        <div>
          <label
            htmlFor="trip-name"
            className="mb-2 block text-base font-semibold text-slate-900"
          >
            Your Name <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <UserIcon
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />

            <input
              id="trip-name"
              name="name"
              type="text"
              value={value.name}
            onChange={(e) => onChange("name", e.target.value)}
            required
            autoComplete="name"
              placeholder="Enter your full name"
              className="h-14 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
            />
          </div>
        </div>

        {/* =========================
            EMAIL
        ========================= */}
        <div>
          <label
            htmlFor="trip-email"
            className="mb-2 block text-base font-semibold text-slate-900"
          >
            Email Address <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <EnvelopeIcon
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />

            <input
              id="trip-email"
              name="email"
              type="email"
              value={value.email}
              onChange={(e) => onChange("email", e.target.value)}
              required
              autoComplete="email"
              placeholder="Enter your email"
              className="h-14 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
            />
          </div>
        </div>

        {/* =========================
            WHATSAPP / PHONE
        ========================= */}
        <div>
          <label
            htmlFor="trip-phone"
            className="mb-2 block text-base font-semibold text-slate-900"
          >
            WhatsApp / Phone <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <PhoneIcon
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />

            <input
              id="trip-phone"
              name="phone"
              type="tel"
              value={value.phone}
                onChange={(e) => onChange("phone", e.target.value)}
              required
              autoComplete="tel"
              placeholder="e.g. +212 6 12 34 56 78"
              className="h-14 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
            />
          </div>
        </div>

        {/* =========================
            COUNTRY
        ========================= */}
        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-base font-semibold text-slate-900"
          >
            Country of Residence <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <GlobeAltIcon
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />

            <select
              id="country"
              name="country"
              value={value.country}
                onChange={(e) => onChange("country", e.target.value)}
              required
              
              className="h-14 w-full appearance-none rounded-lg border border-gray-200 bg-white pl-12 pr-12 text-base text-slate-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
            >
              <option value="" disabled>
                Select your country
              </option>

              {countries.map((country) => (
                <option
                  key={country}
                  value={country}
                >
                  {country}
                </option>
              ))}
            </select>

            <ChevronDownIcon
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* =========================
            TRAVEL DATES
        ========================= */}
        <div>
          <label
            htmlFor="travel-dates"
            className="mb-2 block text-base font-semibold text-slate-900"
          >
            Preferred Travel Dates <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <CalendarDaysIcon
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />

            <input
              id="travel-dates"
              name="travelDate"
              type="date"
              value={value.travelDate}
            onChange={(e) => onChange("travelDate", e.target.value)}
              required
              className="h-14 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
            />
          </div>
        </div>

        {/* =========================
            NUMBER OF TRAVELERS
        ========================= */}
        <div>
          <label
            htmlFor="travelers"
            className="mb-2 block text-base font-semibold text-slate-900"
          >
            Number of Travelers <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <UserGroupIcon
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />

            <input
              id="travelers"
              name="travelers"
              type="number"
              min="1"
              value={value.travelers}
  onChange={(e) => onChange("travelers", e.target.value)}
              required
              placeholder="e.g. 2"
              className="h-14 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
            />
          </div>
        </div>

        {/* =========================
            DREAM TRIP
        ========================= */}
        <div className="lg:col-span-2">
          <label
            htmlFor="dream-trip"
            className="mb-2 block text-base font-semibold text-slate-900"
          >
            Tell Us About Your Dream Trip{" "}
            <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <PencilSquareIcon
              className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />

            <textarea
              id="dream-trip"
              name="dreamTrip"
              value={value.dreamTrip}
  onChange={(e) => onChange("dreamTrip", e.target.value)}
              required
              rows={6}
              placeholder="Describe the kind of experience you are looking for, places you want to visit, activities, pace of travel, special requests..."
              className="w-full resize-y rounded-lg border border-gray-200 bg-white py-4 pl-12 pr-4 text-base leading-7 text-slate-900 outline-none transition placeholder:text-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
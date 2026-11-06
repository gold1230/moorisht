"use client";

import {TourPlannerComponentProps} from "./types";

const travelStyles = [
  "Private Tour",
  "Small Group Tour",
  "Family Tour",
  "Luxury Tour",
  "Budget Tour",
];

const accommodationOptions = [
  "Standard",
  "Comfort",
  "Luxury",
  "Mixed",
];

const tourPaces = [
  "Relaxed",
  "Balanced",
  "Active",
];

export default function TourPreferences({
  value,
  onChange,
}: TourPlannerComponentProps) {
  

  return (
    <section
      id="tour-preferences"
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="tour-preferences-title"
    >
      {/* =========================================
          HEADER
      ========================================= */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700 text-lg font-bold text-white">
          3
        </span>

        <div className="flex items-center gap-2">
          <span
            className="text-base text-amber-700"
            aria-hidden="true"
          >
            ◆
          </span>

          <h2
            id="tour-preferences-title"
            className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
          >
            Tour Preferences
          </h2>
        </div>
      </div>

      {/* =========================================
          TRAVEL STYLE
      ========================================= */}
      <div className="mt-7">
        <h3 className="text-base font-semibold text-slate-900">
          Travel Style
        </h3>

        <div className="mt-3 flex flex-wrap gap-3">
          {travelStyles.map((option) => {
                const selected = value.travelStyle === option;

                return (
                <button
                key={option}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange("travelStyle", option)}
                className={`flex h-11 min-w-[160px] items-center justify-center rounded-lg border px-5 text-base font-medium transition ${
                    selected
                    ? "border-amber-500 bg-amber-50 text-amber-700 ring-1 ring-amber-400"
                    : "border-gray-200 bg-white text-slate-700 hover:border-amber-300"
                }`}
                >
                {option}
                </button>
            );
            })}
        </div>
      </div>

      {/* =========================================
          ACCOMMODATION
      ========================================= */}
      <div className="mt-7">
        <h3 className="text-base font-semibold text-slate-900">
          Accommodation Preference
        </h3>

        <div className="mt-3 flex flex-wrap gap-3">
          {accommodationOptions.map((option) => {
            const selected = value.accommodation === option;

            return (
                <button
                key={option}
                type="button"
                aria-pressed={selected}
                onClick={() =>
                    onChange("accommodation", option)
                }
                className={`flex h-11 min-w-[145px] items-center justify-center rounded-lg border px-5 text-base font-medium transition ${
                    selected
                    ? "border-amber-500 bg-amber-50 text-amber-700 ring-1 ring-amber-400"
                    : "border-gray-200 bg-white text-slate-700 hover:border-amber-300"
                }`}
                 >
      {option}
    </button>
  );
})}
        </div>
      </div>

      {/* =========================================
          TOUR PACE
      ========================================= */}
      <div className="mt-7">
        <h3 className="text-base font-semibold text-slate-900">
          Tour Pace
        </h3>

        <div className="mt-3 flex flex-wrap gap-3">
          {tourPaces.map((option) => {
            const selected = value.tourPace === option;

            return (
                <button
                key={option}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange("tourPace", option)}
                className={`flex h-11 min-w-[145px] items-center justify-center rounded-lg border px-5 text-base font-medium transition ${
                    selected
                    ? "border-amber-500 bg-amber-50 text-amber-700 ring-1 ring-amber-400"
                    : "border-gray-200 bg-white text-slate-700 hover:border-amber-300"
                }`}
                >
                {option}
                </button>
            );
            })}
        </div>
      </div>

      {/* =========================================
          SPECIAL REQUESTS
      ========================================= */}
      <div className="mt-7">
        <label
          htmlFor="special-requests"
          className="block text-base font-semibold text-slate-900"
        >
          Any Special Requests?{" "}
          <span className="font-normal text-gray-500">
            (Optional)
          </span>
        </label>

                <textarea
                id="special-requests"
                name="specialRequests"
                value={value.specialRequests}
                onChange={(e) =>
                    onChange("specialRequests", e.target.value)
                }
                rows={4}
                placeholder="Dietary requirements, accessibility, celebrations, surprises..."
                className="mt-3 w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-4 text-base leading-7 text-slate-900 outline-none placeholder:text-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                />
      </div>

      {/* Hidden values for form submission */}
      <input
        type="hidden"
        name="travelStyle"
        value={value.travelStyle}
      />

      <input
        type="hidden"
        name="accommodation"
        value={value.accommodation}
      />

      <input
        type="hidden"
        name="tourPace"
        value={value.tourPace}
      />
    </section>
  );
}
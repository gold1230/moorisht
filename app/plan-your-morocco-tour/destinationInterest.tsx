"use client";

import {
  MapPinIcon,
  CameraIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  SparklesIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

import type {
  TourPlannerComponentProps,
} from "./types";

/*
|--------------------------------------------------------------------------
| Destinations
|--------------------------------------------------------------------------
*/

const destinations = [
  "Marrakech",
  "Merzouga",
  "Fes",
  "Chefchaouen",
  "Casablanca",
  "Tangier",
  "Ouarzazate",
  "Dades Valley",
  "Todra Gorge",
  "Essaouira",
  "Ait Ben Haddou",
  "Rabat",
];

/*
|--------------------------------------------------------------------------
| Activities
|--------------------------------------------------------------------------
*/

const activities = [
  {
    id: "desert",
    label: "Desert & Camel Trekking",
    icon: MapPinIcon,
  },
  {
    id: "culture",
    label: "Cultural & Historical Sites",
    icon: BuildingLibraryIcon,
  },
  {
    id: "mountains",
    label: "Mountains & Nature",
    icon: GlobeAltIcon,
  },
  {
    id: "photography",
    label: "Photography",
    icon: CameraIcon,
  },
  {
    id: "adventure",
    label: "Adventure Activities",
    icon: UserGroupIcon,
  },
  {
    id: "relaxation",
    label: "Relaxation & Beaches",
    icon: SparklesIcon,
  },
  {
    id: "food",
    label: "Food & Local Experiences",
    icon: BuildingOffice2Icon,
  },
  {
    id: "other",
    label: "Other (Please specify)",
    icon: EllipsisHorizontalIcon,
  },
];

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

export default function DestinationsInterests({
  value,
  onChange,
}: TourPlannerComponentProps) {
  return (
    <section
      id="destinations-interests"
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="destinations-interests-title"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-lg font-bold text-white">
          2
        </span>

        <h2
          id="destinations-interests-title"
          className="text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Destinations &amp; Interests
        </h2>
      </div>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}
      <div className="mt-7">
        <label className="mb-3 block text-base font-semibold text-slate-900">
          Destinations You Want to Visit
        </label>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {destinations.map((destination) => {
            const selected =
              value.destinations.includes(destination);

            return (
              <button
                key={destination}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  const nextDestinations = selected
                    ? value.destinations.filter(
                        (item) => item !== destination
                      )
                    : [
                        ...value.destinations,
                        destination,
                      ];

                  onChange(
                    "destinations",
                    nextDestinations
                  );
                }}
                className={`rounded-lg border px-4 py-3 text-base font-medium transition ${
                  selected
                    ? "border-amber-600 bg-amber-50 text-amber-700"
                    : "border-gray-200 bg-white text-slate-700 hover:border-amber-300 hover:bg-amber-50/40"
                }`}
              >
                {destination}
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          MUST SEE PLACES
      ===================================================== */}
      <div className="mt-7">
        <label
          htmlFor="must-see"
          className="mb-2 block text-base font-semibold text-slate-900"
        >
          Must See Places{" "}
          <span className="font-normal text-gray-500">
            (Optional)
          </span>
        </label>

        <input
          id="must-see"
          name="mustSee"
          type="text"
          value={value.mustSee}
          onChange={(event) =>
            onChange("mustSee", event.target.value)
          }
          placeholder="e.g. Merzouga Desert, Chefchaouen..."
          className="h-14 w-full rounded-lg border border-gray-200 bg-white px-4 text-base text-slate-900 outline-none placeholder:text-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
        />
      </div>

      {/* =====================================================
          INTERESTS
      ===================================================== */}
      <div className="mt-7">
        <h3 className="text-base font-semibold text-slate-900">
          Interests &amp; Activities
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const Icon = activity.icon;

            const selected =
              value.interests.includes(activity.id);

            return (
              <button
                key={activity.id}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  const nextInterests = selected
                    ? value.interests.filter(
                        (item) =>
                          item !== activity.id
                      )
                    : [
                        ...value.interests,
                        activity.id,
                      ];

                  onChange(
                    "interests",
                    nextInterests
                  );
                }}
                className={`flex min-h-[54px] items-center gap-4 rounded-lg border px-4 py-3 text-left transition ${
                  selected
                    ? "border-amber-600 bg-amber-50 text-amber-700"
                    : "border-gray-200 bg-white text-slate-800 hover:border-amber-300 hover:bg-amber-50/40"
                }`}
              >
                <Icon
                  className={`h-6 w-6 shrink-0 ${
                    selected
                      ? "text-amber-700"
                      : "text-gray-600"
                  }`}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span className="text-base font-medium">
                  {activity.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
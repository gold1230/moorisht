"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  ArrowUpRightIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

type Destination = {
  id: number;
  name: string;
  subtitle: string;
  slug: string;
  image: string;
  alt: string;
  href: string;
  icon: string;
};

type Props = {
  destinations: Destination[];
};

const filters = [
  "All",
  "Imperial Cities",
  "North & Atlantic",
  "Mountains & Valleys",
  "Desert & South",
  "Other Places",
] as const;

type FilterName = (typeof filters)[number];

const imperial = new Set([
  "marrakech",
  "fes",
  "meknes",
  "rabat",
]);

const northAtlantic = new Set([
  "tangier",
  "asilah",
  "tetouan",
  "chefchaouen",
  "casablanca",
  "essaouira",
  "agadir",
]);

const mountainsValleys = new Set([
  "atlas-mountains",
  "ourika-valley",
  "dades-valley",
  "todra-gorge",
  "draa-valley",
  "rose-valley",
  "skoura",
  "kelaat-mgouna",
  "midelt",
  "ifrane",
]);

const desertSouth = new Set([
  "merzouga",
  "erfoud",
  "rissani",
  "zagora",
  "khamlia",
  "ouarzazate",
  "ait-ben-haddou",
  "taroudant",
]);

function getGroup(slug: string): FilterName {
  if (imperial.has(slug)) return "Imperial Cities";
  if (northAtlantic.has(slug)) return "North & Atlantic";
  if (mountainsValleys.has(slug)) return "Mountains & Valleys";
  if (desertSouth.has(slug)) return "Desert & South";
  return "Other Places";
}

export default function LocationsExplorer({
  destinations,
}: Props) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<FilterName>("All");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesGroup =
        activeFilter === "All" ||
        getGroup(destination.slug) === activeFilter;

      const matchesSearch =
        !query ||
        destination.name.toLowerCase().includes(query) ||
        destination.subtitle.toLowerCase().includes(query) ||
        destination.slug.toLowerCase().includes(query);

      return matchesGroup && matchesSearch;
    });
  }, [destinations, activeFilter, search]);

  return (
    <section
      id="locations-explorer"
      className="bg-[#f7f5f1] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
                Location Finder
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Explore by region
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Search every Morocco location or narrow the archive by travel
                region.
              </p>

              <div className="relative mt-5">
                <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search a place..."
                  className="h-11 w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-600 focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div className="mt-5 space-y-1.5">
                {filters.map((filter) => {
                  const active = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                        active
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-amber-50 hover:text-amber-800"
                      }`}
                    >
                      {filter}

                      <span
                        className={`h-2 w-2 rounded-full ${
                          active ? "bg-amber-400" : "bg-stone-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  Morocco Location Archive
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">
                  All Places in Morocco
                </h2>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                {filtered.length}{" "}
                {filtered.length === 1 ? "location" : "locations"}
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((destination, index) => (
                  <Link
                    key={destination.id}
                    href={destination.href}
                    className={`group relative overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      index === 0 ? "sm:col-span-2 xl:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={`relative ${
                        index === 0
                          ? "aspect-[16/8]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={destination.image}
                        alt={destination.alt}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 640px) 100vw, (max-width: 1280px) 66vw, 50vw"
                            : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        }
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur">
                          <MapPinIcon className="h-3.5 w-3.5 text-amber-400" />
                          {getGroup(destination.slug)}
                        </span>

                        <div className="mt-3 flex items-end justify-between gap-3">
                          <div>
                            <h3 className="text-xl font-bold text-white sm:text-2xl">
                              {destination.name}
                            </h3>

                            <p className="mt-1 text-sm text-white/75">
                              {destination.subtitle}
                            </p>
                          </div>

                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:bg-amber-400">
                            <ArrowUpRightIcon className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-12 text-center">
                <h3 className="text-xl font-bold text-slate-900">
                  No locations found
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Try another place name or choose a different region.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("All");
                  }}
                  className="mt-5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-800"
                >
                  Show all locations
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import type { ComponentType } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

/**
 * Keep the full tour/blog search index out of the initial JS bundle.
 * The larger, unchanged results interface is loaded on first search interaction.
 * The initial form remains server-rendered, visible and keyboard-accessible.
 */
type SearchProps = { initialQuery?: string; focusOnMount?: boolean };

export default function HomeTravelSearch() {
  const [Interactive, setInteractive] = useState<ComponentType<SearchProps> | null>(null);
  const [query, setQuery] = useState("");
  const loading = useRef(false);

  const activate = (value: string) => {
    setQuery(value);
    if (loading.current) return;
    loading.current = true;
    import("./searchBoxInteractive")
      .then((module) => setInteractive(() => module.default))
      .catch(() => { loading.current = false; });
  };

  if (Interactive) {
    return <Interactive initialQuery={query} focusOnMount />;
  }

  return (
    <section
      className="relative mx-auto max-w-6xl px-5 sm:px-7 lg:px-10"
      aria-labelledby="home-tour-search-title"
    >
      <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:p-5">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">Explore Morocco</p>
            <h2 id="home-tour-search-title" className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">Find Your Morocco Tour</h2>
            <p className="mt-1 text-base leading-6 text-gray-600">
              Search Marrakech desert tours, Sahara trips, private Morocco tours and popular destinations.
            </p>
          </div>
          <p className="hidden text-sm font-semibold text-amber-700 sm:block">Local tours from Marrakech</p>
        </div>
        <form
          role="search"
          aria-label="Search Morocco tours and destinations"
          action="/tour"
          onSubmit={(event) => {
            event.preventDefault();
            activate(query);
          }}
        >
          <div className="flex min-h-[62px] items-center overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-gray-300 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/10">
            <MagnifyingGlassIcon className="ml-5 h-6 w-6 shrink-0 text-amber-700" aria-hidden="true" />
            <label htmlFor="home-tour-search" className="sr-only">Search Morocco tours and destinations</label>
            <input
              id="home-tour-search"
              name="search"
              type="search"
              value={query}
              onFocus={(event) => activate(event.currentTarget.value)}
              onChange={(event) => activate(event.currentTarget.value)}
              placeholder="Search Marrakech, Merzouga, desert tours..."
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent px-4 py-4 text-base text-slate-900 outline-none placeholder:text-gray-500"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

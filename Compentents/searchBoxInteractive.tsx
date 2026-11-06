"use client";

import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/data/blogFilter";
import { getTours } from "@/data/tourFilter";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  ArrowRightIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

/* =========================================================
   MIXED BLOG + TOUR DATA

   Searchable content now comes from:
   - blogs.json through getBlogs()
   - tours.json through getTours()

   The visual design below is unchanged.
========================================================= */

type BlogItem = ReturnType<typeof getBlogs>[number];
type TourItem = ReturnType<typeof getTours>[number];

type SearchItem =
  | (BlogItem & { sourceType: "Blog" })
  | (TourItem & { sourceType: "Tour" });

function getItemType(
  item: SearchItem
): "Blog" | "Tour" | "Destination" {
  if (
    item.sourceType === "Blog" &&
    item.category === "Destinations"
  ) {
    return "Destination";
  }

  return item.sourceType;
}

function getItemHref(slug: string): string {
  return slug.startsWith("/") ? slug : `/${slug}`;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function HomeTravelSearchInteractive({
  initialQuery = "",
  focusOnMount = false,
}: {
  initialQuery?: string;
  focusOnMount?: boolean;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [isOpen, setIsOpen] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focusOnMount) inputRef.current?.focus();
  }, [focusOnMount]);

  /* =======================================================
     DATA FROM blogs.json + tours.json
  ======================================================= */

  const allItems = useMemo<SearchItem[]>(() => {
    const blogs: SearchItem[] = getBlogs({
      sortBy: "newest",
    }).map((blog) => ({
      ...blog,
      sourceType: "Blog" as const,
    }));

    const tours: SearchItem[] = getTours().map((tour) => ({
      ...tour,
      sourceType: "Tour" as const,
    }));

    return [...tours, ...blogs];
  }, []);

  const popularSearches = useMemo(() => {
    const tours = getTours({
      featured: true,
      limit: 2,
    }).map((tour) => tour.title);

    const blogs = getBlogs({
      featured: true,
      sortBy: "newest",
      limit: 2,
    }).map((blog) => blog.title);

    return [...tours, ...blogs];
  }, []);

  const quickLinks = useMemo(() => {
    const tours = getTours({
      featured: true,
      limit: 2,
    }).map((tour) => ({
      label: tour.title,
      href: getItemHref(tour.slug),
    }));

    const blogs = getBlogs({
      featured: true,
      sortBy: "newest",
      limit: 2,
    }).map((blog) => ({
      label: blog.title,
      href: getItemHref(blog.slug),
    }));

    return [...tours, ...blogs];
  }, []);

  const popularDestinations = useMemo(
    () =>
      getBlogs({
        category: "Destinations",
        sortBy: "newest",
        limit: 4,
      }),
    []
  );

  const searchRef = useRef<HTMLDivElement>(null);

  /* =======================================================
     SEARCH FILTER
  ======================================================= */

  const suggestions = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return [];

    return allItems
      .filter((item) => {
        const searchableText = `
          ${item.title}
          ${item.category}
          ${item.description}
          ${item.tags.join(" ")}
          ${item.places.join(" ")}
          ${"keywords" in item ? item.keywords.join(" ") : ""}
          ${item.sourceType}
          ${
            item.sourceType === "Tour"
              ? `
                ${item.startCity}
                ${item.endCity}
                ${item.tourType}
                ${item.duration}
              `
              : ""
          }
        `.toLowerCase();

        return searchableText.includes(value);
      })
      .slice(0, 6);
  }, [query, allItems]);

  /* =======================================================
     POPULAR SEARCH
  ======================================================= */

  const handlePopularSearch = (search: string) => {
    setQuery(search);
    setIsOpen(true);
  };

  /* =======================================================
     CLOSE WHEN CLICKING OUTSIDE
  ======================================================= */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* =======================================================
     CLOSE WITH ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <section
      className="relative mx-auto max-w-6xl px-5 sm:px-7 lg:px-10"
      aria-labelledby="home-tour-search-title"
    >
      <div
        ref={searchRef}
        className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:p-5"
      >

        {/* =====================================================
            SEARCH HEADING
        ===================================================== */}

        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              Explore Morocco
            </p>

            <h2
              id="home-tour-search-title"
              className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl"
            >
              Find Your Morocco Tour
            </h2>

            <p className="mt-1 text-base leading-6 text-gray-600">
              Search Marrakech desert tours, Sahara trips,
              private Morocco tours and popular destinations.
            </p>

          </div>

          <p className="hidden text-sm font-semibold text-amber-700 sm:block">
            Local tours from Marrakech
          </p>

        </div>

        {/* =====================================================
            SEARCH FORM
        ===================================================== */}

        <form
          role="search"
          aria-label="Search Morocco tours and destinations"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="relative">

            {/* =================================================
                SEARCH INPUT
            ================================================= */}

            <div
              className={`flex min-h-[62px] items-center overflow-hidden rounded-xl border bg-white transition duration-200 ${
                isOpen
                  ? "border-amber-500 ring-2 ring-amber-500/10"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >

              {/* Icon */}
              <div className="flex items-center pl-5">
                <MagnifyingGlassIcon
                  className="h-6 w-6 text-amber-700"
                  aria-hidden="true"
                />
              </div>

              {/* Accessible label */}
              <label
                htmlFor="home-tour-search"
                className="sr-only"
              >
                Search Morocco tours and destinations
              </label>

              {/* Input */}
              <input
                id="home-tour-search"
                ref={inputRef}
                name="tour-search"
                type="search"
                value={query}
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={isOpen}
                aria-controls="home-search-results"
                aria-haspopup="listbox"
                onFocus={() => setIsOpen(true)}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setIsOpen(true);
                }}
                placeholder="Search Marrakech, Merzouga, desert tours..."
                autoComplete="off"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-4
                  py-4
                  text-base
                  text-slate-900
                  outline-none
                  placeholder:text-gray-600

                  [&::-webkit-search-cancel-button]:appearance-none
                  [&::-webkit-search-decoration]:appearance-none
                  [&::-webkit-search-results-button]:appearance-none
                  [&::-webkit-search-results-decoration]:appearance-none
                "
              />

              {/* Clear */}
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setIsOpen(false);
                  }}
                  className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-slate-900"
                  aria-label="Clear search"
                >
                  <XMarkIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              )}

            </div>

            {/* =================================================
                SEARCH DROPDOWN
            ================================================= */}

            {isOpen && (
              <div
                id="home-search-results"
                role="listbox"
                aria-label="Morocco tour search results"
                className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl"
              >

                {/* =================================================
                    QUERY ENTERED
                ================================================= */}

                {query.trim() ? (
                  suggestions.length > 0 ? (
                    <div className="max-h-[430px] overflow-y-auto py-2">

                      {/* Result heading */}
                      <div className="flex items-center justify-between px-5 py-3">

                        <p className="text-base font-semibold text-slate-900">
                          Search Results
                        </p>

                        <span className="text-sm text-gray-500">
                          {suggestions.length}{" "}
                          {suggestions.length === 1
                            ? "result"
                            : "results"}
                        </span>

                      </div>

                      {/* Results */}
                      {suggestions.map((item) => (
                        <Link
                          key={`${item.sourceType}-${item.id}`}
                          href={getItemHref(item.slug)}
                          role="option"
                          aria-selected="false"
                          onClick={() => setIsOpen(false)}
                          className="group flex items-start gap-4 border-t border-gray-100 px-5 py-4 transition hover:bg-amber-50"
                        >

                          {/* Image */}
                          <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            <Image
                              src={`/${item.image.replace(/^\/+/, "")}`}
                              alt={item.alt}
                              fill
                              sizes="80px"
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />

                            {/* Type icon */}
                            <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/95 text-amber-700 shadow-sm">
                              {getItemType(item) === "Destination" ? (
                                <MapPinIcon
                                  className="h-3.5 w-3.5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ClockIcon
                                  className="h-3.5 w-3.5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </div>

                          {/* Text */}
                          <div className="min-w-0 flex-1">

                            <div className="flex flex-wrap items-center gap-2">

                              <h3 className="text-base font-bold text-slate-900 transition group-hover:text-amber-700">
                                {item.title}
                              </h3>

                              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-600">
                                {getItemType(item)}
                              </span>

                            </div>

                            <p className="mt-1 line-clamp-2 text-base leading-6 text-gray-600">
                              {item.description}
                            </p>

                          </div>

                          {/* Arrow */}
                          <ArrowRightIcon
                            className="ml-auto mt-2 h-5 w-5 shrink-0 text-gray-600 transition duration-300 group-hover:translate-x-1 group-hover:text-amber-700"
                            aria-hidden="true"
                          />

                        </Link>
                      ))}

                    </div>
                  ) : (

                    /* =============================================
                       NO RESULTS
                    ============================================= */

                    <div className="px-5 py-9 text-center">

                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">

                        <MagnifyingGlassIcon
                          className="h-6 w-6 text-amber-700"
                          aria-hidden="true"
                        />

                      </div>

                      <p className="mt-4 text-base font-bold text-slate-900">
                        No tours or destinations found
                      </p>

                      <p className="mx-auto mt-1 max-w-md text-base leading-6 text-gray-600">
                        Try searching for Marrakech, Merzouga,
                        Sahara Desert, private tours, Chefchaouen
                        or Fes.
                      </p>

                      <Link
                        href="/tour"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-amber-700 hover:text-amber-700"
                      >
                        Explore All Morocco Tours

                        <ArrowRightIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </Link>

                    </div>
                  )
                ) : (

                  /* =============================================
                     NO QUERY / POPULAR SEARCHES
                  ============================================= */

                  <div className="p-5">

                    <div className="flex items-center gap-2">

                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-amber-700"
                        aria-hidden="true"
                      />

                      <p className="text-base font-semibold text-slate-900">
                        Popular Searches
                      </p>

                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {popularSearches.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            handlePopularSearch(item)
                          }
                          className="rounded-full border border-gray-200 bg-white px-4 py-2 text-base font-medium text-slate-700 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700"
                        >
                          {item}
                        </button>
                      ))}

                    </div>

                    {/* Destination suggestions */}
                    <div className="mt-5 border-t border-gray-100 pt-5">

                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Popular Destinations
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">

                        {popularDestinations.map((item) => (
                          <Link
                            key={`destination-${item.id}`}
                            href={getItemHref(item.slug)}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-slate-700 transition hover:text-amber-700"
                          >
                            {item.title}
                          </Link>
                        ))}

                      </div>
                    </div>

                  </div>
                )}

              </div>
            )}
          </div>
        </form>

        {/* =====================================================
            PERMANENT INTERNAL LINKS
            Important for navigation + SEO
        ===================================================== */}

        <nav
          className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-100 pt-4"
          aria-label="Popular Morocco tour pages"
        >

          <span className="text-base font-semibold text-slate-700">
            Popular:
          </span>

          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-amber-700 underline-offset-4 transition hover:text-amber-800 hover:underline"
            >
              {item.label}
            </Link>
          ))}

        </nav>

      </div>
    </section>
  );
}

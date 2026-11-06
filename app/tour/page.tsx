"use client";

import PopularTourCollection from "@/Compentents/tour/PopularTourCollection";

import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import { getTours } from "@/data/tourFilter";

import { useEffect, useMemo, useState } from "react";

import {
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  CameraIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  FunnelIcon,
  HeartIcon,
  MegaphoneIcon,
  MapIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

/* =========================================================
   TYPES + TOUR DATA
========================================================= */

type Tour = ReturnType<typeof getTours>[number];

const tours: Tour[] = getTours();

const destinations = [
  "Marrakech",
  "Sahara Desert",
  "Fes",
  "Chefchaouen",
  "Atlas Mountains",
  "Ouarzazate",
  "Dades Valley",
  "Essaouira",
  "Tangier",
  "Casablanca",
];

const destinationSlugs: Record<string, string> = {
  Marrakech: "marrakech",
  "Sahara Desert": "merzouga",
  Fes: "fes",
  Chefchaouen: "chefchaouen",
  "Atlas Mountains": "high-atlas-mountains",
  Ouarzazate: "ouarzazate",
  "Dades Valley": "dades-valley",
  Essaouira: "essaouira",
  Tangier: "tangier",
  Casablanca: "casablanca",
};

const tourTypes = [
  "Private Tours",
  "Small Group Tours",
  "Luxury Tours",
  "Family Tours",
  "Adventure Tours",
  "Cultural Tours",
];

const travelStyles = [
  "Relaxed",
  "Balanced",
  "Active",
];

function getTourHref(slug: string): string {
  if (slug.startsWith("/")) return slug;
  if (slug.startsWith("tours/")) return `/${slug}`;
  return `/${slug}`;
}

function getTourLocation(tour: Tour): string {
  if (tour.startCity === tour.endCity) {
    return `From ${tour.startCity}`;
  }

  return `${tour.startCity} to ${tour.endCity}`;
}

function getTravelStyle(
  tour: Tour
): "Relaxed" | "Balanced" | "Active" {
  if (
    tour.tourType === "Luxury Tours" ||
    tour.tourType === "Family Tours"
  ) {
    return "Relaxed";
  }

  if (
    tour.tourType === "Adventure Tours" ||
    tour.tourType === "Small Group Tours"
  ) {
    return "Active";
  }

  return "Balanced";
}

function getTourBadge(tour: Tour): string | undefined {
  if (
    "badge" in tour &&
    typeof tour.badge === "string"
  ) {
    return tour.badge;
  }

  return undefined;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function TourArchive() {
  const TOURS_PER_PAGE = 9;

  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("All Durations");
  const [selectedDestination, setSelectedDestination] =
    useState("All Destinations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStyle, setSelectedStyle] = useState("All Styles");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const filteredTours = useMemo(() => {
    let result = [...tours];

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((tour) => {
        const text = `
          ${tour.title}
          ${getTourLocation(tour)}
          ${tour.category}
          ${tour.tourType}
          ${getTravelStyle(tour)}
          ${tour.duration}
          ${tour.startCity}
          ${tour.endCity}
          ${tour.places.join(" ")}
          ${tour.tags.join(" ")}
          ${tour.keywords.join(" ")}
        `.toLowerCase();

        return text.includes(query);
      });
    }

    if (duration !== "All Durations") {
      result = result.filter((tour) => {
        switch (duration) {
          case "1 - 3 Days":
            return tour.days >= 1 && tour.days <= 3;
          case "4 - 6 Days":
            return tour.days >= 4 && tour.days <= 6;
          case "7 - 9 Days":
            return tour.days >= 7 && tour.days <= 9;
          case "10+ Days":
            return tour.days >= 10;
          default:
            return true;
        }
      });
    }

    if (selectedDestination !== "All Destinations") {
      const slug = destinationSlugs[selectedDestination];

      if (slug) {
        result = result.filter((tour) =>
          tour.places.includes(slug)
        );
      }
    }

    if (selectedType !== "All Types") {
      result = result.filter(
        (tour) => tour.tourType === selectedType
      );
    }

    if (selectedStyle !== "All Styles") {
      result = result.filter(
        (tour) => getTravelStyle(tour) === selectedStyle
      );
    }

    result = result.filter(
      (tour) => tour.price <= maxPrice
    );

    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;

      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "Highest Rated":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "Most Popular":
      default:
        result.sort(
          (a, b) => b.reviewCount - a.reviewCount
        );
        break;
    }

    return result;
  }, [
    search,
    duration,
    selectedDestination,
    selectedType,
    selectedStyle,
    maxPrice,
    sortBy,
  ]);

  const totalPages = Math.ceil(
    filteredTours.length / TOURS_PER_PAGE
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setCurrentPage(1), 0);
    return () => window.clearTimeout(timer);
  }, [
    search,
    duration,
    selectedDestination,
    selectedType,
    selectedStyle,
    maxPrice,
    sortBy,
  ]);

  useEffect(() => {
    const targetPage = totalPages === 0 ? 1 : Math.min(currentPage, totalPages);
    if (targetPage !== currentPage) {
      const timer = window.setTimeout(() => setCurrentPage(targetPage), 0);
      return () => window.clearTimeout(timer);
    }
  }, [totalPages, currentPage]);

  const paginatedTours = useMemo(() => {
    const start =
      (currentPage - 1) * TOURS_PER_PAGE;

    const end = start + TOURS_PER_PAGE;

    return filteredTours.slice(start, end);
  }, [filteredTours, currentPage]);

  const paginationItems = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    const items: (number | "...")[] = [];

    items.push(1);

    if (currentPage > 4) {
      items.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (let page = start; page <= end; page++) {
      items.push(page);
    }

    if (currentPage < totalPages - 3) {
      items.push("...");
    }

    items.push(totalPages);

    return items;
  }, [currentPage, totalPages]);

  const clearFilters = () => {
    setSearch("");
    setDuration("All Durations");
    setSelectedDestination("All Destinations");
    setSelectedType("All Types");
    setSelectedStyle("All Styles");
    setMaxPrice(2000);
    setCurrentPage(1);
  };

  const resultStart =
    filteredTours.length === 0
      ? 0
      : (currentPage - 1) *
          TOURS_PER_PAGE +
        1;

  const resultEnd = Math.min(
    currentPage * TOURS_PER_PAGE,
    filteredTours.length
  );

  return (
    <main className="min-h-screen bg-white">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden">
        <div className="relative h-[360px] sm:h-[390px] lg:h-[420px]">

          <Image
            src={image1}
            alt="Morocco tours through desert, mountains and traditional kasbahs"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 lg:px-10">

            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-6"
              >
                <ol className="flex items-center gap-2 text-base">
                  <li>
                    <Link
                      href="/"
                      className="text-amber-700 font-bold"
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    aria-hidden="true"
                    className="text-gray-700"
                  >
                    ›
                  </li>

                  <li className="font-medium text-slate-900">
                    Tours
                  </li>
                </ol>
              </nav>

              <span className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                Explore Morocco
              </span>

              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                All Morocco Tours
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
                Explore our handpicked tours across Morocco.
                Find the perfect Morocco tour for your journey.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">

                <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                  <CheckCircleIcon className="h-5 w-5 text-amber-700" />
                  Best Price Guarantee
                </div>

                <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                  <CheckCircleIcon className="h-5 w-5 text-amber-700" />
                  Local Expert Guides
                </div>

                <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                  <CheckCircleIcon className="h-5 w-5 text-amber-700" />
                  Customizable Tours
                </div>

                <div className="flex items-center gap-2 text-base font-medium text-slate-800">
                  <CheckCircleIcon className="h-5 w-5 text-amber-700" />
                  24/7 Support
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* New requested tours: visible, crawlable links without unverified prices. */}
      <section aria-labelledby="new-tours-heading" className="border-b border-amber-100 bg-[#fffaf3] py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-amber-800">Explore more of Morocco</p>
          <h2 id="new-tours-heading" className="mt-2 text-3xl font-bold text-slate-900">Featured Sahara &amp; Imperial City Tours</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">Connect Marrakech to Fes through Merzouga or plan an eight-day journey from Casablanca to Marrakech. Ask for a personalized quote for your dates.</p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {[
              { title: "3 Days Marrakech to Fes Desert Tour", href: "/tour/3-days-desert-tour-from-marrakech-to-fes/", image: "/tours/related/4-days-tour-from-marrakech-to-fes.jpg", duration: "3 days", desc: "Atlas Mountains, Ait Ben Haddou, Merzouga and Fes" },
              { title: "3 Days Marrakech to Fes Private Tour", href: "/tour/3-days-tour-from-marrakech-to-fes/", image: "/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg", duration: "3 days", desc: "Flexible private route through the Sahara" },
              { title: "8 Days Desert Tour from Casablanca", href: "/tour/8-days-desert-tour-in-morocco-from-casablanca/", image: "/tours/related/morocco-itinerary-10-days-from-marrakech.jpg", duration: "8 days", desc: "Rabat, Fes, Merzouga and Marrakech" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-amber-800">{item.duration} · Sahara Desert</span>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-amber-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center font-semibold text-amber-800">View Tour <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          ARCHIVE
      =================================================== */}

      <section className="py-10 sm:py-12">
        <div className="mx-auto px-5 sm:px-7 lg:px-10">

          <div className="grid items-start gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">

            {/* =================================================
                FILTER SIDEBAR
            ================================================= */}

            <aside className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <FunnelIcon className="h-5 w-5 text-slate-700" />

                  <h2 className="text-xl font-bold text-slate-900">
                    Filter Tours
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-base cursor-pointer font-medium text-amber-700 transition hover:text-amber-700"
                >
                  Clear All
                </button>
              </div>

              <div className="mt-6">

                <label
                  htmlFor="tour-search"
                  className="mb-2 block text-base font-semibold text-slate-900"
                >
                  Search
                </label>

                <div className="relative">
                  <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600" />

                  <input
                    id="tour-search"
                    type="search"
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search tours..."
                    className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-base text-slate-900 outline-none placeholder:text-gray-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                  />
                </div>
              </div>

              <div className="mt-7">

                <h3 className="text-base font-semibold text-slate-900">
                  Tour Duration
                </h3>

                <div className="mt-3 space-y-3">

                  {[
                    "All Durations",
                    "1 - 3 Days",
                    "4 - 6 Days",
                    "7 - 9 Days",
                    "10+ Days",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-base text-gray-700"
                    >
                      <input
                        type="radio"
                        name="duration"
                        checked={duration === item}
                        onChange={() =>
                          setDuration(item)
                        }
                        className="h-4 w-4 accent-amber-600"
                      />

                      <span>{item}</span>
                    </label>
                  ))}

                </div>
              </div>

              <div className="mt-7">

                <label
                  htmlFor="destination-filter"
                  className="mb-2 block text-base font-semibold text-slate-900"
                >
                  Destinations
                </label>

                <div className="relative">

                  <select
                    id="destination-filter"
                    value={selectedDestination}
                    onChange={(event) =>
                      setSelectedDestination(
                        event.target.value
                      )
                    }
                    className="h-11 w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 pr-9 text-base text-slate-800 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                  >
                    <option value="All Destinations">
                      All Destinations
                    </option>

                    {destinations.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                </div>
              </div>

              <div className="mt-7">

                <h3 className="text-base font-semibold text-slate-900">
                  Tour Type
                </h3>

                <div className="mt-3 space-y-3">

                  <label className="flex cursor-pointer items-center gap-3 text-base text-gray-700">
                    <input
                      type="radio"
                      name="tour-type"
                      checked={
                        selectedType ===
                        "All Types"
                      }
                      onChange={() =>
                        setSelectedType(
                          "All Types"
                        )
                      }
                      className="h-4 w-4 accent-amber-600"
                    />

                    <span>All Types</span>
                  </label>

                  {tourTypes.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-base text-gray-700"
                    >
                      <input
                        type="radio"
                        name="tour-type"
                        checked={
                          selectedType === item
                        }
                        onChange={() =>
                          setSelectedType(item)
                        }
                        className="h-4 w-4 accent-amber-600"
                      />

                      <span>{item}</span>
                    </label>
                  ))}

                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="price-range"
                  className="block text-base font-semibold text-slate-900"
                >
                  Price Range
                </label>

                <div className="mt-3 flex items-center justify-between text-base text-gray-600">
                  <span>€0</span>
                  <span>€2000+</span>
                </div>

                <input
                  id="price-range"
                  name="priceRange"
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={maxPrice}
                  onChange={(event) =>
                    setMaxPrice(Number(event.target.value))
                  }
                  aria-label="Maximum tour price"
                  className="mt-3 w-full accent-amber-600"
                />

                <div className="mt-2 text-center text-base text-gray-600">
                  €0 - €{maxPrice}
                </div>
              </div>

              <div className="mt-7">

                <h3 className="text-base font-semibold text-slate-900">
                  Travel Style
                </h3>

                <div className="mt-3 space-y-3">

                  <label className="flex cursor-pointer items-center gap-3 text-base text-gray-700">
                    <input
                      type="radio"
                      name="travel-style"
                      checked={
                        selectedStyle ===
                        "All Styles"
                      }
                      onChange={() =>
                        setSelectedStyle(
                          "All Styles"
                        )
                      }
                      className="h-4 w-4 accent-amber-600"
                    />

                    <span>All Styles</span>
                  </label>

                  {travelStyles.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-base text-gray-700"
                    >
                      <input
                        type="radio"
                        name="travel-style"
                        checked={
                          selectedStyle === item
                        }
                        onChange={() =>
                          setSelectedStyle(item)
                        }
                        className="h-4 w-4 accent-amber-600"
                      />

                      <span>{item}</span>
                    </label>
                  ))}

                </div>
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="mt-7 cursor-pointer flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-amber-700 text-base font-semibold text-white transition hover:bg-amber-800"
              >
                <AdjustmentsHorizontalIcon className="h-5 w-5" />

                Apply Filters
              </button>
            </aside>

            {/* =================================================
                RESULTS
            ================================================= */}

            <div className="min-w-0">

              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-base text-gray-700">
                  Showing{" "}
                  <span className="font-semibold text-slate-900">
                    {resultStart}
                  </span>{" "}
                  -{" "}
                  <span className="font-semibold text-slate-900">
                    {resultEnd}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-slate-900">
                    {filteredTours.length}
                  </span>{" "}
                  tours
                </p>

                <div className="flex items-center gap-3">

                  <label
                    htmlFor="sort-tours"
                    className="text-base text-gray-600"
                  >
                    Sort by:
                  </label>

                  <div className="relative">

                    <select
                      id="sort-tours"
                      value={sortBy}
                      onChange={(event) =>
                        setSortBy(event.target.value)
                      }
                      className="h-10 appearance-none rounded-lg border border-gray-200 bg-white px-4 pr-9 text-base text-slate-800 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                    >
                      <option value="Most Popular" className="cursor-pointer">
                        Most Popular
                      </option>

                      <option value="Highest Rated" className="cursor-pointer">
                        Highest Rated
                      </option>

                      <option value="Price: Low to High" className="cursor-pointer">
                        Price: Low to High
                      </option>

                      <option value="Price: High to Low" className="cursor-pointer">
                        Price: High to Low
                      </option>
                    </select>

                    <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                  </div>

                </div>
              </div>

              {paginatedTours.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                  {paginatedTours.map((tour) => {
                    const badge = getTourBadge(tour);

                    return (
                      <article
                        key={tour.id}
                        className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                      >

                        <div className="relative aspect-[16/10] overflow-hidden">

                          <Link href={getTourHref(tour.slug)}>
                            <Image
                              src={tour.image.startsWith("/") ? tour.image : `/tours/card/${tour.image}`}
                              alt={tour.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                          </Link>

                          {badge && (
                            <span className="absolute left-3 top-3 rounded-md bg-amber-700 px-2.5 py-1 text-xs font-bold uppercase text-white">
                              {badge}
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              toggleFavorite(tour.id)
                            }
                            aria-label={
                              favorites.includes(
                                tour.id
                              )
                                ? `Remove ${tour.title} from favorites`
                                : `Add ${tour.title} to favorites`
                            }
                            className="absolute right-3 cursor-pointer top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-sm transition hover:text-amber-700"
                          >
                            <HeartIcon
                              className={`h-5 w-5 ${
                                favorites.includes(
                                  tour.id
                                )
                                  ? "fill-amber-600 text-amber-700"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>

                        <div className="p-4">

                          <h2 className="text-lg font-bold leading-6 text-slate-900">
                            <Link
                              href={getTourHref(tour.slug)}
                              className="transition hover:text-amber-700"
                            >
                              {tour.title}
                            </Link>
                          </h2>

                          <p className="mt-1 text-base text-gray-600">
                            {getTourLocation(tour)}
                          </p>

                          {tour.reviewCount > 0 && tour.rating > 0 && (
                  <div className="mt-3 flex items-center gap-1.5">

                            <StarIcon className="h-4 w-4 fill-amber-500 text-amber-700" />

                            <span className="text-base font-semibold text-amber-700">
                              {tour.rating}
                            </span>

                            <span className="text-base text-gray-500">
                              (
                              {tour.reviewCount.toLocaleString()}
                              {" "}
                              reviews)
                            </span>
                          </div>
                  )}

                          <div className="mt-3 flex flex-wrap items-center gap-4">

                            <span className="flex items-center gap-1.5 text-base text-gray-600">
                              <ClockIcon className="h-4 w-4" />
                              {tour.duration}
                            </span>

                            <span className="flex items-center gap-1.5 text-base text-gray-600">
                              <MapPinIcon className="h-4 w-4" />
                              {tour.category}
                            </span>

                          </div>

                          <div className="mt-5">
                            <p className="text-base text-gray-600">
                              {tour.priceFrom ? "From " : ""}
                              <span className="text-xl font-bold text-amber-700">
                                {tour.currency === "EUR" ? "€" : `${tour.currency} `}
                                {tour.price}
                              </span>{" "}
                              / person
                            </p>
                          </div>

                        </div>
                      </article>
                    );
                  })}

                </div>
              ) : (
                <div className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">

                  <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-600" />

                  <h2 className="mt-4 text-xl font-bold text-slate-900">
                    No Morocco tours found
                  </h2>

                  <p className="mt-2 text-base text-gray-600">
                    Try changing your search or clearing some filters.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-5 rounded-lg bg-amber-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-amber-800"
                  >
                    Clear Filters
                  </button>

                </div>
              )}

              {totalPages > 1 && (
                <nav
                  aria-label="Tours pagination"
                  className="mt-8 flex flex-wrap items-center justify-center gap-2"
                >

                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.max(page - 1, 1)
                      )
                    }
                    aria-label="Previous page"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-lg text-gray-600 transition hover:border-amber-600 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    ‹
                  </button>

                  {paginationItems.map(
                    (item, index) =>
                      item === "..." ? (
                        <span
                          key={`ellipsis-${index}`}
                          className="flex h-9 cursor-pointer items-center px-1 text-base text-gray-500"
                        >
                          ...
                        </span>
                      ) : (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            setCurrentPage(item)
                          }
                          aria-current={
                            currentPage === item
                              ? "page"
                              : undefined
                          }
                          className={`flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-lg px-3 text-base font-medium transition ${
                            currentPage === item
                              ? "bg-amber-700 text-white"
                              : "border border-gray-200 text-slate-700 hover:border-amber-600 hover:text-amber-700"
                          }`}
                        >
                          {item}
                        </button>
                      )
                  )}

                  <button
                    type="button"
                    disabled={
                      currentPage === totalPages
                    }
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(
                          page + 1,
                          totalPages
                        )
                      )
                    }
                    aria-label="Next page"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-lg text-gray-600 transition hover:border-amber-600 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    ›
                  </button>

                </nav>
              )}

            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto px-5 sm:px-7 lg:px-10">

          <div className="flex flex-col gap-6 rounded-2xl border border-amber-100 bg-[#fffaf3] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-700 text-white">
                <MapIcon className="h-7 w-7" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Can&apos;t find what you&apos;re looking for?
                </h2>

                <p className="mt-1 text-base text-gray-700">
                  We can create a custom Morocco tour based on your preferences.
                </p>
              </div>

            </div>

            <Link
              href="/plan-your-morocco-tour"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-amber-800"
            >
              Plan Your Custom Tour

              <ArrowRightIcon className="h-5 w-5" />
            </Link>

          </div>

        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="flex items-start gap-4">
              <ShieldCheckIcon className="h-8 w-8 shrink-0 text-amber-700" />

              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Best Price Guarantee
                </h3>

                <p className="mt-1 text-base text-gray-600">
                  We offer the best prices with no hidden fees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <UserIcon className="h-8 w-8 shrink-0 text-amber-700" />

              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Local Expert Guides
                </h3>

                <p className="mt-1 text-base text-gray-600">
                  Travel with experienced local guides.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CameraIcon className="h-8 w-8 shrink-0 text-amber-700" />

              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Customizable Tours
                </h3>

                <p className="mt-1 text-base text-gray-600">
                  All tours can be customized to your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MegaphoneIcon className="h-8 w-8 shrink-0 text-amber-700" />

              <div>
                <h3 className="text-base font-bold text-slate-900">
                  24/7 Customer Support
                </h3>

                <p className="mt-1 text-base text-gray-600">
                  We are here to help you anytime.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    <PopularTourCollection />
      </main>
  );
}

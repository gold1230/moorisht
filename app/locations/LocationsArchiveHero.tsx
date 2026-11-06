import Image from "next/image";
import Link from "next/link";

import image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";

import {
  ArrowDownIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

type Props = {
  locationCount: number;
  tourCount: number;
};

export default function LocationsArchiveHero({
  locationCount,
  tourCount,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src={image1}
          alt="Morocco locations including cities, mountains and desert landscapes"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(245,158,11,0.18),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[1fr_420px] lg:items-end lg:px-10 lg:py-24">
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/65">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-amber-500 transition hover:text-amber-300"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li className="font-medium text-white">
                Locations
              </li>
            </ol>
          </nav>

          <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-amber-600 backdrop-blur">
            <MapPinIcon className="h-4 w-4" />
            Explore Morocco by place
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Morocco Locations
            <span className="block text-amber-600">
              Find Your Next Place
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Browse Morocco&apos;s cities, mountain valleys, Atlantic towns,
            desert gateways and historic places. Search all locations and
            connect the places you like with tours that visit them.
          </p>

          <Link
            href="#locations-explorer"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-700 px-5 text-base font-bold text-white transition hover:bg-amber-700"
          >
            Browse All Locations
            <ArrowDownIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
            <span className="text-3xl font-bold text-white">
              {locationCount}+
            </span>
            <span className="mt-1 block text-sm font-medium text-slate-300">
              Morocco locations
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
            <span className="text-3xl font-bold text-white">
              {tourCount}
            </span>
            <span className="mt-1 block text-sm font-medium text-slate-300">
              Featured tours
            </span>
          </div>

          <div className="col-span-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5 backdrop-blur-md">
            <SparklesIcon className="h-6 w-6 text-amber-400" />

            <p className="mt-3 text-sm leading-6 text-slate-200">
              Start with one place you really want to visit, then build a route
              around nearby destinations instead of trying to cross the whole
              country too quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

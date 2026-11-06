import Image from "next/image";
import Link from "next/link";

import {
  ArrowDownIcon,
  CheckCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import type { LocationPageData } from "@/lib/locationPageTypes";

type Props = {
  location: LocationPageData;
};

export default function LocationHero({ location }: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src={location.heroImage}
          alt={location.heroAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(245,158,11,0.18),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/65">
            <li>
              <Link href="/" className="font-semibold text-amber-600 hover:text-amber-500">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/locations" className="font-semibold text-amber-600 hover:text-amber-500">
                Locations
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-white">{location.name}</li>
          </ol>
        </nav>

        <div className="mt-8 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-amber-500 backdrop-blur">
            <MapPinIcon className="h-4 w-4" />
            {location.eyebrow}
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {location.h1}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            {location.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {location.bestFor.slice(0, 4).map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90"
              >
                <CheckCircleIcon className="h-4 w-4 text-amber-600" />
                {item}
              </span>
            ))}
          </div>

          <a
            href="#location-guide"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-700 px-5 text-sm font-bold text-white transition hover:bg-amber-800"
          >
            Explore {location.name}
            <ArrowDownIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

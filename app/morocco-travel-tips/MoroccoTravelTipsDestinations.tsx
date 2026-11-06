import Link from "next/link";

import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const destinations = [
  {
    name: "Marrakech",
    tip: "Plan time for the medina, gardens and day trips, and expect busy streets around the old city.",
    href: "/locations/marrakech",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Fes",
    tip: "The old medina is dense and fascinating, so comfortable shoes and a clear meeting point can help.",
    href: "/locations/fes",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Chefchaouen",
    tip: "A slower pace works well here; allow time to walk the blue streets and enjoy the mountain setting.",
    href: "/locations/chefchaouen",
    icon: MapPinIcon,
  },
  {
    name: "Merzouga",
    tip: "Expect hot days in warmer months and cooler nights; plan enough time for the long desert journey.",
    href: "/locations/merzouga",
    icon: SunIcon,
  },
  {
    name: "Atlas Mountains",
    tip: "Temperatures can be cooler than Marrakech, especially at elevation and in the evening.",
    href: "/locations/high-atlas-mountains",
    icon: MapPinIcon,
  },
  {
    name: "Essaouira",
    tip: "The Atlantic coast is often breezier and more relaxed, making it a useful change of pace after inland cities.",
    href: "/locations/essaouira",
    icon: MapPinIcon,
  },
];

export default function MoroccoTravelTipsDestinations() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Advice by Destination
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Morocco Travel Tips for Popular Places
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-600">
            Each region has a different rhythm, climate and travel style.
            These quick tips help you prepare for some of Morocco&apos;s most
            visited destinations.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => {
            const Icon = destination.icon;

            return (
              <Link
                key={destination.name}
                href={destination.href}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50">
                    <Icon className="h-5 w-5 text-amber-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-amber-700">
                      {destination.name}
                    </h3>

                    <p className="mt-1 text-base leading-6 text-gray-600">
                      {destination.tip}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700">
                      Explore {destination.name}
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

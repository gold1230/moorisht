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
    subtitle: "Markets, gardens and easy family activities",
    href: "/locations/marrakech",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Atlas Mountains",
    subtitle: "Fresh air, villages and beautiful scenery",
    href: "/locations/high-atlas-mountains",
    icon: MapPinIcon,
  },
  {
    name: "Merzouga",
    subtitle: "Sahara dunes, camel rides and desert camps",
    href: "/locations/merzouga",
    icon: SunIcon,
  },
  {
    name: "Chefchaouen",
    subtitle: "Relaxed blue streets and mountain atmosphere",
    href: "/locations/chefchaouen",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Fes",
    subtitle: "Historic medina, crafts and Moroccan culture",
    href: "/locations/fes",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Essaouira",
    subtitle: "Atlantic coast, beach walks and a relaxed medina",
    href: "/locations/essaouira",
    icon: MapPinIcon,
  },
];

export default function FamilyDestinations() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Family-Friendly Places
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Best Places to Visit in Morocco With Kids
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-600">
            Mix cities, nature and outdoor experiences to create a Morocco
            family itinerary that stays interesting without feeling too busy.
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

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-amber-700">
                      {destination.name}
                    </h3>

                    <p className="mt-1 text-base leading-6 text-gray-600">
                      {destination.subtitle}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700">
                      Explore destination
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

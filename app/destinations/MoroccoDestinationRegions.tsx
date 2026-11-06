import Link from "next/link";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  GlobeAsiaAustraliaIcon,
  MapIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const regions = [
  {
    title: "Imperial Cities",
    description:
      "Explore Marrakech, Fes, Meknes and Rabat for historic medinas, monuments, markets and Moroccan culture.",
    href: "imperial-cities",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Sahara & Desert Routes",
    description:
      "Discover Merzouga, Erfoud, Rissani, Zagora and the long southern roads leading toward Morocco's desert landscapes.",
    href: "/morocco-desert-tours",
    icon: SunIcon,
  },
  {
    title: "Atlas Mountains & Valleys",
    description:
      "Visit the Atlas Mountains, Ourika Valley, Dades Valley, Todra Gorge and scenic mountain routes.",
    href: "/atlas-mountains-valleys",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    title: "Atlantic & Northern Morocco",
    description:
      "Explore Essaouira, Agadir, Tangier, Asilah and other coastal destinations with a very different rhythm from inland Morocco.",
    href: "/atlantic-northern-morocco",
    icon: MapIcon,
  },
];

export default function MoroccoDestinationRegions() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Choose by Travel Style
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Discover Morocco by Region
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Morocco is easier to plan when you group destinations by region.
            Start with the landscapes and experiences you want most.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => {
            const Icon = region.icon;

            return (
              <Link
                key={region.title}
                href={region.href}
                className="group rounded-xl border border-gray-200 bg-[#faf7f2] p-5 transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 transition group-hover:text-amber-700">
                  {region.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-gray-600">
                  {region.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700">
                  Explore region
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

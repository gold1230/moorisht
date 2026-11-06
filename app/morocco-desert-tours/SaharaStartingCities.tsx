import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/outline";

const routes = [
  {
    city: "Marrakech",
    title: "Sahara Tours From Marrakech",
    description:
      "Cross the High Atlas Mountains and follow classic southern Morocco routes toward Merzouga.",
    href: "/marrakech-desert-tours",
  },
  {
    city: "Fes",
    title: "Sahara Tours From Fes",
    description:
      "Travel through the Middle Atlas, Midelt and Ziz Valley before reaching the Erg Chebbi dunes.",
    href: "/morocco-fes-desert-tours",
  },
  {
    city: "Casablanca",
    title: "Sahara Tours From Casablanca",
    description:
      "Combine Morocco's imperial cities with a longer journey south toward Merzouga and the Sahara.",
    href: "/morocco-desert-tours-from-casablanca",
  },
  {
    city: "Tangier",
    title: "Sahara Tours From Tangier",
    description:
      "Connect northern Morocco, Chefchaouen and Fes with a longer desert journey to Merzouga.",
    href: "/morocco-desert-tours-from-tangier",
  },
];

export default function SaharaStartingCities() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Choose Your Starting City
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Sahara Desert Tours From Morocco&apos;s Main Cities
          </h2>
          <p className="mt-3 text-base leading-7 text-gray-600">
            Compare desert routes from Marrakech, Fes, Casablanca and Tangier.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => (
            <article key={route.city} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
                <MapPinIcon className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{route.title}</h3>
              <p className="mt-2 text-base leading-6 text-gray-600">{route.description}</p>
              <Link href={route.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800">
                View tours
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

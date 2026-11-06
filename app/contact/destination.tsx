"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import  image1 from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg"


const travelDestinations = [
  {
    name: "Marrakech",
    slug: "marrakech",
    image: image1,
    alt: "Marrakech Morocco travel destination",
  },
  {
    name: "Fes",
    slug: "fes",
    image: image1,
    alt: "Fes Morocco historic medina",
  },
  {
    name: "Casablanca",
    slug: "casablanca",
    image: image1,
    alt: "Casablanca Morocco city",
  },
  {
    name: "Rabat",
    slug: "rabat",
    image: image1,
    alt: "Rabat Morocco city and landmark",
  },
  {
    name: "Tangier",
    slug: "tangier",
    image: image1,
    alt: "Tangier Morocco Mediterranean coast",
  },
  {
    name: "Chefchaouen",
    slug: "chefchaouen",
    image: image1,
    alt: "Chefchaouen blue streets Morocco",
  },
  {
    name: "Merzouga",
    slug: "merzouga",
    image: image1,
    alt: "Merzouga Sahara Desert dunes",
  },
  {
    name: "Ouarzazate",
    slug: "ouarzazate",
    image: image1,
    alt: "Ouarzazate Morocco kasbah and landscape",
  },
  {
    name: "Dades Valley",
    slug: "dades-valley",
    image: image1,
    alt: "Dades Valley Morocco mountains",
  },
  {
    name: "Essaouira",
    slug: "essaouira",
    image: image1,
    alt: "Essaouira Morocco coastal city",
  },
];

export default function MoroccoDestinations() {
  return (
    <section
      id="travel-destinations"
      className="w-full bg-white py-8"
      aria-labelledby="travel-destinations-title"
    >
      <div className="mx-auto px-5 sm:px-7 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2
            id="travel-destinations-title"
            className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl"
          >
            Where Can You Travel With Moorish Tour?
          </h2>

          {/* Small decorative line */}
          <div className="mt-2 flex items-center gap-2">
            <span className="h-[2px] w-7 bg-amber-700" />
            <span className="h-1.5 w-1.5 rotate-45 bg-amber-700" />
            <span className="h-[2px] w-7 bg-amber-700" />
          </div>

          <p className="mt-3 max-w-2xl text-base leading-6 text-gray-700">
            Moorish Tour helps travelers explore destinations throughout
            Morocco. Our tours can start or finish in major Moroccan cities
            and tourist destinations.
          </p>
        </div>

        {/* Destination cards */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
          {travelDestinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/locations/${destination.slug}`}
              className="group min-w-0"
            >
              <article className="overflow-hidden rounded-lg border border-gray-100 bg-white text-center transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-sm">

                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 20vw, 10vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Destination name */}
                <div className="px-2 py-2.5">
                  <h3 className="truncate text-base font-semibold text-slate-900 transition group-hover:text-amber-700">
                    {destination.name}
                  </h3>
                </div>

              </article>
            </Link>
          ))}
        </div>

        {/* Optional mobile / all destinations link */}
        <div className="mt-5">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-base font-semibold text-amber-700 transition hover:text-amber-700"
          >
            Explore All Morocco Destinations

            <ArrowRightIcon
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
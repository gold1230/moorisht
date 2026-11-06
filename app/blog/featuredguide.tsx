import Image from "next/image";
import Link from "next/link";
import {
  CalendarDaysIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import  image1 from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg"


const FeaturedGuide = () => {
  return (
    <section
      className="py-10"
      aria-labelledby="featured-guide-title"
    >
      <div className="rounded-xl border border-gray-200 bg-amber-50/30 p-4  sm:p-4">

        <div className="grid items-center gap-6 md:grid-cols-2">

          {/* Image */}
          <Link
            href="/3-days-desert-tour-from-marrakech-to-merzouga"
            className="group relative block aspect-[16/10] h-100 w-full overflow-hidden  rounded-xl"
            aria-label="Read 3 Days Marrakech to Merzouga Desert Tour guide"
          >
            <Image
              src={image1}
              alt="Camel trek at sunset in the Merzouga Sahara Desert"
              width={550}
              height={331}
              sizes="(max-width: 768px) 100vw, 50vw"

              className="object-cover h-full  transition duration-500 group-hover:scale-105"
            />

            <span className="absolute left-4 top-4 rounded-md bg-amber-700 px-3 text-xs font-semibold uppercase tracking-wide text-white">
              Featured Guide
            </span>
          </Link>

          {/* Content */}
          <div className="px-1 py-2">

            <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Morocco Desert Tours
            </span>

            <h2
              id="featured-guide-title"
              className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
            >
              3 Days Marrakech to Merzouga Desert Tour:
              The Ultimate Guide
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Discover everything you need to know about traveling from
              Marrakech to Merzouga in 3 days. Explore the High Atlas
              Mountains, Ait Ben Haddou, Ouarzazate, Dades Valley and
              Todra Gorge before experiencing camel trekking and a night
              in the Sahara Desert.
            </p>

            {/* Meta */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">

              <span className="inline-flex items-center gap-1.5">
                <CalendarDaysIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                May 12, 2024
              </span>

              <span className="inline-flex items-center gap-1.5">
                <ClockIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                15 min read
              </span>

            </div>

            {/* CTA */}
            <Link
              href="/3-days-desert-tour-from-marrakech-to-merzouga"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              Read Guide

              <ArrowRightIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedGuide;
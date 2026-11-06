"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface RelatedTour {
  title: string;
  href: string;
  image: string | StaticImageData;
  duration: string;
}

interface YouMayAlsoLikeProps {
  tours: RelatedTour[];
}

export default function YouMayAlsoLike({
  tours,
}: YouMayAlsoLikeProps) {
  return (
   <section className="w-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

  {/* HEADER */}

  <div className="mb-5 flex items-center justify-between">

    <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
      You May Also Like
    </h2>

    <Link
      href="/tour"
      className="
        group
        flex
        items-center
        gap-2
        text-sm
        font-semibold
        text-slate-600
        transition-colors
        hover:text-orange-700
      "
    >
      <span>
        View All Tours
      </span>

      <ArrowRightIcon
        className="
          h-4
          w-4
          transition-transform
          duration-200
          group-hover:translate-x-1
        "
      />
    </Link>

  </div>


  {/* TOUR GRID */}

  <div
    className="
      grid
      grid-cols-1
      gap-4
      sm:grid-cols-2
      lg:grid-cols-4
    "
  >

    {tours.map((tour) => (

      <Link
        key={tour.href}
        href={tour.href}
        className="
          group
          relative
          isolate
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-orange-200
          hover:shadow-lg
        "
      >

        {/* IMAGE */}

        <div
          className="
            relative
            z-0
            aspect-[1.65/1]
            overflow-hidden
          "
        >

          <Image
            src={tour.image}
            alt={tour.title}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              25vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />


          {/* IMAGE OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              bg-linear-to-t
              from-black/20
              via-transparent
              to-transparent
            "
          />


          {/* DURATION */}

          <div
            className="
              absolute
              bottom-3
              left-3
              z-20
              rounded-md
              border
              border-orange-200
              bg-white
              px-2.5
              py-1
              text-xs
              font-bold
              text-orange-700
              shadow-sm
            "
          >
            {tour.duration}
          </div>

        </div>


        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            flex
            min-h-18.5
            items-center
            justify-between
            gap-3
            bg-white
            px-4
            py-3
          "
        >

          <h3
            className="
              line-clamp-2
              text-sm
              font-semibold
              leading-5
              text-slate-800
              transition-colors
              group-hover:text-orange-700
            "
          >
            {tour.title}
          </h3>

          <ArrowRightIcon
            className="
              h-4
              w-4
              shrink-0
              text-slate-600
              transition-all
              duration-200
              group-hover:translate-x-1
              group-hover:text-orange-700
            "
          />

        </div>

      </Link>

    ))}

  </div>

</section>
  );
}
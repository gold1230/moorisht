import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import HoverCard from "@/Compentents/hovercard";

import MarrakechToMerzouga3Day from "@/public/blog/content/road-through-southern-morocco-during-marrakech-to-merzouga-desert-tour.jpg";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function MarrakechMerzougaHiddenBeauty() {
  return (
    <section
      id="marrakech-to-merzouga-3-days-desert-tours-journey-through-moroccos-hidden-beauty"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="marrakech-merzouga-hidden-beauty-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Marrakech to Merzouga Journey
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="marrakech-merzouga-hidden-beauty-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Marrakech to Merzouga 3 Days Desert Tours – Journey Through
        Morocco&apos;s Hidden Beauty
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        The{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>{" "}
        are one of the most popular travel experiences in Morocco,
        especially for visitors coming from the USA, UK, Canada, and
        Australia who want to see the real Sahara in a short time.
        This journey is not just a transfer from one city to another.
        It is a complete adventure through Morocco&apos;s hidden
        beauty, landscapes, culture, and history.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        In only three days, travelers move from the busy streets of{" "}
        <PlaceHoverCard
                  place="marrakech"
                >
          Marrakech
        </PlaceHoverCard>{" "}
        to the peaceful golden dunes of{" "}
        <PlaceHoverCard
                  place="merzouga"
                >
          Merzouga
        </PlaceHoverCard>
        , passing mountains, valleys, kasbahs, and traditional Amazigh
        villages along the way.
      </p>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <figure className="my-9">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <Image
            src={MarrakechToMerzouga3Day}
            alt="Road through southern Morocco during a Marrakech to Merzouga desert tour"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <figcaption className="mt-3 text-sm leading-6 text-gray-500">
          The road from Marrakech to Merzouga passes through mountain
          landscapes, valleys, kasbahs and desert scenery before
          reaching Erg Chebbi.
        </figcaption>
      </figure>

      {/* =====================================================
          TOUR PARAGRAPH
      ===================================================== */}

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Many guests who book the{" "}
        <HoverCard
          href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/"
          title="3 Days Desert Tour from Marrakech to Merzouga"
          description="This 3-day Marrakech to Merzouga desert tour crosses the High Atlas Mountains, Ait Ben Haddou, Dades Valley and Todra Gorge before reaching the Erg Chebbi dunes for camel trekking and a Sahara desert camp experience."
          image={MarrakechToMerzouga3Day}
        >
          3 days desert tour from Marrakech to Merzouga
        </HoverCard>{" "}
        tell us they did not expect to see so much diversity in such
        a short trip. The landscape changes constantly as the route
        moves through the{" "}
        
          <PlaceHoverCard
                    place="high-atlas-mountains"
                  >
          High Atlas Mountains</PlaceHoverCard>
       
        , valleys, rocky plateaus and eventually the Sahara.
      </p>

      {/* =====================================================
          TRAVELER QUOTE
      ===================================================== */}

      <blockquote className="my-8 rounded-r-2xl border-l-4 border-amber-600 bg-[#fffaf4] px-6 py-5 sm:px-7">
        <p className="text-lg font-medium italic leading-8 text-slate-800">
          “I thought it would be only desert, but every hour the
          landscape changed. Mountains, green valleys, red rocks,
          small villages, and then suddenly endless dunes.”
        </p>

        <footer className="mt-3 text-sm font-semibold text-amber-700">
          Traveler experience
        </footer>
      </blockquote>

      {/* =====================================================
          ERG CHEBBI
      ===================================================== */}

      <p className="mt-5 text-lg leading-8 text-gray-700">
        This variety is one of the things that makes the{" "}
        <strong className="font-semibold text-slate-900">
          3-day desert tour from Marrakech to Merzouga
        </strong>{" "}
        so memorable. The scenery can feel completely different from
        one part of the route to the next. In a single journey,
        travelers experience high mountains, traditional villages,
        green valleys, rocky desert landscapes and finally the large
        golden dunes of{" "}
       

          <PlaceHoverCard place="erg-chebbi">   Erg Chebbi</PlaceHoverCard>
       
        .
      </p>

      {/* =====================================================
          HIGHLIGHT BOX
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
        <h3 className="text-xl font-bold text-[#102043]">
          One Journey, Many Different Landscapes
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">

          {/* High Atlas */}

          <div className="flex items-start gap-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />

            <div>
              <p className="font-semibold text-slate-900">
                High Atlas Mountains
              </p>

              <p className="mt-1 text-base leading-7 text-gray-600">
                Winding mountain roads, panoramic views and
                traditional villages.
              </p>
            </div>
          </div>

          {/* Kasbah */}

          <div className="flex items-start gap-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />

            <div>
              <p className="font-semibold text-slate-900">
                Historic Kasbahs
              </p>

              <p className="mt-1 text-base leading-7 text-gray-600">
                Discover traditional architecture and historic
                settlements of southern Morocco.
              </p>
            </div>
          </div>

          {/* Valleys */}

          <div className="flex items-start gap-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />

            <div>
              <p className="font-semibold text-slate-900">
                Valleys &amp; Gorges
              </p>

              <p className="mt-1 text-base leading-7 text-gray-600">
                Travel through{" "}
                <PlaceHoverCard place="dades-valley">
                  Dades Valley
                </PlaceHoverCard>{" "}
                and the dramatic cliffs around{" "}
                <PlaceHoverCard place="todra-gorge">
                  Todra Gorge
                </PlaceHoverCard>
                  
                
                .
              </p>
            </div>
          </div>

          {/* Erg Chebbi */}

          <div className="flex items-start gap-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />

            <div>
              <p className="font-semibold text-slate-900">
                Erg Chebbi Sahara Dunes
              </p>

              <p className="mt-1 text-base leading-7 text-gray-600">
                Finish the journey beside the golden dunes near{" "}
                <PlaceHoverCard place="merzouga"/>

               
                  
              
                .
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* =====================================================
          FINAL PARAGRAPHS
      ===================================================== */}

      <p className="mt-8 text-lg leading-8 text-gray-700">
        This journey is especially useful for travelers who have
        limited time but still want to experience more than one side
        of Morocco. It combines culture, nature, adventure and time
        in the{" "}
        <HoverCard
          href="/morocco-desert-tours/"
          title="Morocco Sahara Desert"
          description="Morocco’s Sahara region is known for vast desert landscapes, golden sand dunes, traditional desert communities, camel trekking, desert camps, clear night skies, and unforgettable sunrise and sunset experiences."
          image={MarrakechToMerzouga3Day}
        >
          Sahara Desert
        </HoverCard>{" "}
        without requiring a very long itinerary.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        From crossing the{" "}
        <PlaceHoverCard place="high-atlas-mountains"></PlaceHoverCard>
        to spending the night near the Sahara dunes, the{" "}
       
        <HoverCard
          href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/"
          title="Marrakech to Merzouga 3 Days Desert Tour"
          description="The Marrakech to Merzouga 3-day desert tour is a short Sahara journey through the High Atlas Mountains, Ait Ben Haddou, Dades Valley, Todra Gorge, Merzouga, and the Erg Chebbi dunes."
          image={MarrakechToMerzouga3Day}
        >
          Marrakech to Merzouga 3 days desert tour
        </HoverCard>{" "}
        brings together some of the country&apos;s most memorable
        landscapes in one journey.
      </p>

      {/* =====================================================
          NEXT SECTION
          Normal Link is fine here because this is navigation,
          not an inline paragraph link.
      ===================================================== */}

      <div className="mt-10 border-t border-gray-200 pt-8">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
          Next: Day One
        </p>

        <Link
          href="#day-1-marrakech-to-dades-valley-start-of-the-marrakech-3-day-itinerary"
          className="group mt-2 inline-flex items-center gap-2 text-xl font-bold text-[#102043] transition hover:text-amber-700"
        >
          Day 1: Marrakech to Dades Valley

          <ArrowRightIcon
            className="h-5 w-5 text-amber-700 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
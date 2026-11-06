import type { Metadata } from "next";

import Link from "next/link";

import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";

import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";

import BlogTableOfContents, {
  TableOfContentItem,
} from "@/Compentents/blogtour/contentTable";

import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

/* =========================================================
   IMAGES
========================================================= */



import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import WhyTravelersChooseSection from "./section1";
import MarrakechMerzougaHiddenBeauty from "./section2";
import MarrakechToDadesDayOne from "./section3";
import DadesToMerzougaDayTwo from "./section4";
import MerzougaToMarrakechDayThree from "./section5";
import WhatMakesMerzougaTourSpecial from "./section6";
import MarrakechItinerarySaharaSection from "./section7";
import WhoIsThisMerzougaTourFor from "./section8";
import MarrakechMerzougaTravelStory from "./section9";
import ExperienceRealSaharaSection from "./section10";
import MarrakechMerzougaScenicHighlights from "./section11";
import MarrakechMerzougaAccommodationSection from "./section12";
import MarrakechMerzougaActivitiesSection from "./section13";
import MarrakechMerzougaTravelComfortSection from "./section14";
import WhoLovesMarrakechMerzougaTourSection from "./section15";
import BestTimeMarrakechMerzougaSection from "./section16";
import MarrakechMerzougaTravelTipsSection from "./section17";
import MarrakechCityVsDesertComparisonSection from "./section18";
import MarrakechMerzougaTravelerStoriesSection from "./section19";
import MarrakechMerzougaBookingSection from "./section20";


/* =========================================================
   HERO INFORMATION
========================================================= */

const metainfo = {
  title:
    "3-Day Marrakech to Merzouga Desert Tour Guide",

  description:
    "A complete guide to the 3-day desert journey from Marrakech to Merzouga, including the High Atlas Mountains, Ait Ben Haddou, Dades Valley, Todra Gorge and the Erg Chebbi dunes.",
};

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title:
    metainfo.title + " | Moorish Tour",

  description:
    metainfo.description,

  alternates: {
    canonical:
      "https://moorishtour.com/3-days-desert-tour-from-marrakech-to-merzouga/",
  },

  openGraph: {
    title:
      "3-Day Marrakech to Merzouga Desert Tour Guide",

    description:
      "Discover the complete Marrakech to Merzouga desert journey including the Atlas Mountains, kasbahs, Todra Gorge and Erg Chebbi dunes.",

    url:
      "https://moorishtour.com/3-days-desert-tour-from-marrakech-to-merzouga/",

    siteName: "Moorish Tour",

    type: "article",

    images: [
      {
        url:
          "https://moorishtour.com/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg",

        width: 1200,
        height: 630,

        alt:
          "3-day Marrakech to Merzouga Sahara Desert tour in Morocco",
      },
    ],
  },
};



/* =========================================================
   TABLE OF CONTENTS

   Change these for each blog article.
========================================================= */

const tableOfContents: TableOfContentItem[] = [
  {
    label:
      "Why Travelers Choose Our Marrakech to Merzouga 3 Days Desert Tours",
    href:
      "#why-travelers-choose-our-marrakech-to-merzouga-3-days-desert-tours",
  },

  {
    label:
      "Marrakech to Merzouga 3 Days Desert Tours – Journey Through Morocco’s Hidden Beauty",
    href:
      "#marrakech-to-merzouga-3-days-desert-tours-journey-through-moroccos-hidden-beauty",
  },

  {
    label:
      "Day 1: Marrakech to Dades Valley – Start of the Marrakech 3 Day Itinerary",
    href:
      "#day-1-marrakech-to-dades-valley-start-of-the-marrakech-3-day-itinerary",
  },

  {
    label:
      "Day 2: Dades Valley to Merzouga – The Magic of the Sahara Begins",
    href:
      "#day-2-dades-valley-to-merzouga-the-magic-of-the-sahara-begins",
  },

  {
    label:
      "Day 3: Merzouga to Marrakech – Sunrise & Return Journey",
    href:
      "#day-3-merzouga-to-marrakech-sunrise-return-journey",
  },

  {
    label:
      "What Makes This 3-Day Desert Tour from Marrakech to Merzouga Special?",
    href:
      "#what-makes-this-3-day-desert-tour-from-marrakech-to-merzouga-special",
  },

  {
    label:
      "Marrakech Itinerary 3 Days – Why Adding the Sahara Makes It Complete",
    href:
      "#marrakech-itinerary-3-days-why-adding-the-sahara-makes-it-complete",
  },

  {
    label:
      "Who Is This 3 Days Tour from Marrakech to Merzouga Desert For?",
    href:
      "#who-is-this-3-days-tour-from-marrakech-to-merzouga-desert-for",
  },

  {
    label:
      "3 Days Desert Tour from Marrakech to Merzouga – Travel Story Experience",
    href:
      "#3-days-desert-tour-from-marrakech-to-merzouga-travel-story-experience",
  },

  {
    label:
      "Experience the Real Sahara on This 3-Day Desert Tour from Marrakech to Merzouga",
    href:
      "#experience-the-real-sahara-on-this-3-day-desert-tour-from-marrakech-to-merzouga",
  },

  {
    label:
      "Scenic Highlights of the Marrakech to Merzouga 3 Days Desert Tours",
    href:
      "#scenic-highlights-of-the-marrakech-to-merzouga-3-days-desert-tours",
  },

  {
    label:
      "Why This 3 Days Tour from Marrakech to Merzouga Desert Is the Best Short Sahara Trip",
    href:
      "#why-this-3-days-tour-from-marrakech-to-merzouga-desert-is-the-best-short-sahara-trip",
  },

  {
    label:
      "Accommodation During Your 3-Day Desert Tour from Marrakech to Merzouga",
    href:
      "#accommodation-during-your-3-day-desert-tour-from-marrakech-to-merzouga",
  },

  {
    label:
      "Activities Included in the 3-Day Desert Tour from Marrakech to Merzouga",
    href:
      "#activities-included-in-the-3-day-desert-tour-from-marrakech-to-merzouga",
  },

  {
    label:
      "Travel Comfort on the Marrakech to Merzouga 3 Days Desert Tour",
    href:
      "#travel-comfort-on-the-marrakech-to-merzouga-3-days-desert-tour",
  },

  {
    label:
      "Who Loves This Marrakech to Merzouga 3 Days Desert Tours?",
    href:
      "#who-loves-this-marrakech-to-merzouga-3-days-desert-tours",
  },

  {
    label:
      "Best Time to Book the 3 Days Desert Tour from Marrakech to Merzouga",
    href:
      "#best-time-to-book-the-3-days-desert-tour-from-marrakech-to-merzouga",
  },

  {
    label:
      "Travel Tips for Your 3-Day Desert Tour from Marrakech to Merzouga",
    href:
      "#travel-tips-for-your-3-day-desert-tour-from-marrakech-to-merzouga",
  },

  {
    label:
      "Compare: Marrakech 3 Day Itinerary in the City vs 3-Day Desert Tour from Marrakech to Merzouga",
    href:
      "#compare-marrakech-3-day-itinerary-in-the-city-vs-3-day-desert-tour-from-marrakech-to-merzouga",
  },

  {
    label:
      "Real Traveler Stories from the 3 Days Desert Tour from Marrakech to Merzouga",
    href:
      "#real-traveler-stories-from-the-3-days-desert-tour-from-marrakech-to-merzouga",
  },

  {
    label:
      "How to Book Your 3 Days Tour from Marrakech to Merzouga Desert",
    href:
      "#how-to-book-your-3-days-tour-from-marrakech-to-merzouga-desert",
  },

  {
    label:
      "Easy Online Reservation",
    href:
      "#easy-online-reservation",
  },
];






/* =========================================================
   PAGE
========================================================= */

export default function Day() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <MarrakechMerzougaBlogHero
        metainfo={metainfo}
      />

      {/* =====================================================
          ARTICLE + SIDEBAR
      ===================================================== */}

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          px-5
          py-10
          sm:px-7
          lg:grid-cols-[minmax(0,1fr)_320px]
          lg:px-10
          lg:py-12
        "
      >

        {/* ===================================================
            MAIN ARTICLE
        =================================================== */}

        <article className="min-w-0">

          {/* =================================================
              TABLE OF CONTENTS
              FIRST THING INSIDE ARTICLE
          ================================================= */}

          <BlogTableOfContents
            title="Table of Contents"
            description="Jump directly to the part of this Marrakech to Merzouga guide you want to read."
            items={tableOfContents}
          />

          {/* =================================================
              ARTICLE INTRODUCTION
          ================================================= */}

          <WhyTravelersChooseSection/>
          <MarrakechMerzougaHiddenBeauty/>
          <MarrakechToDadesDayOne />
          <DadesToMerzougaDayTwo />
          <MerzougaToMarrakechDayThree/>
          <WhatMakesMerzougaTourSpecial/>
          <MarrakechItinerarySaharaSection/>
          <WhoIsThisMerzougaTourFor/>
          <MarrakechMerzougaTravelStory/>
          <ExperienceRealSaharaSection/>
          <MarrakechMerzougaScenicHighlights/>
          <MarrakechMerzougaAccommodationSection/>
          <MarrakechMerzougaActivitiesSection/>
          <MarrakechMerzougaTravelComfortSection/>
          <WhoLovesMarrakechMerzougaTourSection/>
          <BestTimeMarrakechMerzougaSection/>
          <MarrakechMerzougaTravelTipsSection/>
          <MarrakechCityVsDesertComparisonSection/>
          <MarrakechMerzougaTravelerStoriesSection/>
          <MarrakechMerzougaBookingSection/>

          {/* =================================================
              FINAL CTA
          ================================================= */}

          <section className="mt-10 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">

            <h2 className="text-3xl font-bold text-[#102043]">
              Ready to Experience the Sahara?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-700">
              Tell our local Morocco travel team your dates,
              number of travelers and preferred tour style.
              We can help you plan your Marrakech to Merzouga
              journey.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">

              <Link
                href="/plan-your-morocco-tour"
                className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
              >
                Plan Your Morocco Tour

                <ArrowRightIcon
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 text-base font-semibold text-slate-900 transition hover:bg-amber-50"
              >
                Contact Us
              </Link>

            </div>
          </section>

        </article>

        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <BlogSidebar
         
          ctaImage={ctaImage}
          ctaImageAlt="Travelers planning a customized Morocco tour"
          ctaHref="/plan-your-morocco-tour"
        />

      </div>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  CheckCircleIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Section7() {
  return (
    <section
      id="final-thoughts-where-should-you-stay-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Final Morocco Accommodation Advice
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Final Thoughts: Where Should You Stay in Morocco?
        </h2>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-0.5 w-8 bg-amber-700" />
          <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
          <span className="h-0.5 w-8 bg-amber-700" />
        </div>
      </div>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <div className="mt-6 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
        <p>
          The best place to stay in Morocco depends on your route, travel
          style, comfort needs and how many days you have. There is no single
          city that is right for every traveler because Morocco offers very
          different experiences from one region to another.
        </p>

        <p>
          For first-time visitors,{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="chefchaouen">
            Chefchaouen
          </PlaceHoverCard>
          ,{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="dades-valley">
            Dades Valley
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> are
          among the most useful places to consider when building a balanced
          Morocco itinerary.
        </p>

        <p>
          The important thing is not to visit every place. It is better to
          choose the destinations that match the experience you want and leave
          enough time to enjoy them properly.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Best places to stay in Morocco for a first-time trip"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          SIMPLE DECISION GUIDE
      ===================================================== */}

      <div
        id="where-to-stay-in-morocco-based-on-what-you-want"
        className="scroll-mt-32 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Simple Decision Guide
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
          Where to Stay in Morocco Based on What You Want
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-5">
            <GlobeEuropeAfricaIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              For Culture
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Stay in{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              and <PlaceHoverCard place="fes">Fes</PlaceHoverCard> for medinas,
              historic architecture, souks, traditional crafts and local food.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5">
            <SparklesIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              For Peace & Photography
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Stay in{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              for blue streets, mountain views and a slower atmosphere.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5">
            <SparklesIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              For the Sahara
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Stay in{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> near
              the{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi dunes
              </PlaceHoverCard>{" "}
              for desert camps, sunset, sunrise and Sahara landscapes.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5">
            <MapPinIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              For Road Trip Scenery
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Stay in{" "}
              <PlaceHoverCard place="dades-valley">
                Dades Valley
              </PlaceHoverCard>{" "}
              or <PlaceHoverCard place="skoura">Skoura</PlaceHoverCard> for
              valleys, kasbah-style stays, palm groves and scenic driving.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5">
            <GlobeEuropeAfricaIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              For Ocean Air
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Stay in{" "}
              <PlaceHoverCard place="essaouira">
                Essaouira
              </PlaceHoverCard>{" "}
              for relaxed evenings, seafood, ocean views and a slower coastal
              atmosphere.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5">
            <CheckCircleIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              For an Easy First Trip
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Combine a few different stays instead of choosing the same type of
              accommodation throughout the whole trip.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL RECOMMENDATION
      ===================================================== */}

      <div
        id="best-morocco-accommodation-plan-for-first-time-visitors"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Recommended Approach
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Best Morocco Accommodation Plan for First-Time Visitors
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A good first Morocco trip often works best when you mix several
            accommodation styles rather than staying only in standard hotels.
            For example, you might stay in a traditional riad in{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, a
            guesthouse in{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>
            , a desert camp in{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and a
            coastal hotel in{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>.
          </p>

          <p>
            This gives you a better sense of Morocco&apos;s different travel
            environments: old medinas, mountain and valley landscapes, the
            Sahara and the Atlantic coast.
          </p>

          <p>
            Your final choices should still be based on practical details such
            as room comfort, vehicle access, luggage, heating or air
            conditioning, walking distance and how each overnight stop fits the
            next day of your itinerary.
          </p>
        </div>
      </div>

      {/* =====================================================
          PRIVATE TOUR
      ===================================================== */}

      <div
        id="plan-a-private-morocco-tour-with-selected-accommodation"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8 lg:p-10"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
            Make Your Morocco Trip Easier
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Plan a Private Morocco Tour with Selected Accommodation
          </h3>

          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-200">
            <p>
              For travelers who prefer a smoother trip, a private Morocco tour
              can combine selected accommodation, comfortable transportation,
              local guides where needed and an itinerary designed around your
              travel dates and interests.
            </p>

            <p>
              This can be especially useful for first-time visitors because the
              route, overnight stops and transfer times can be planned together
              instead of booking each part separately.
            </p>

            <p>
              You can choose the level of accommodation that fits your budget,
              from comfortable riads and guesthouses to higher-end hotels and
              premium desert camps.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Hotels and riads selected for your route",
              "Desert camp options based on your comfort level",
              "Private driver and transportation planning",
              "Custom itinerary based on your travel dates",
              "Balanced overnight stops",
              "Local guides where appropriate",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-amber-300" />

                <p className="text-sm leading-7 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact/"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-amber-700
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition
                hover:bg-amber-800
              "
            >
              Contact Us to Plan Your Morocco Trip
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Final Advice
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Choose Places That Match Your Route, Not Only the Photos
        </h3>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          Morocco has many beautiful places to stay, but the best accommodation
          is the one that fits your itinerary and makes each travel day easier.
          Choose fewer well-planned overnight stops, mix different
          accommodation styles and leave enough time to enjoy the destinations
          that matter most to you.
        </p>
      </div>
    </section>
  );
}
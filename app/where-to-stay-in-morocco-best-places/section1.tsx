import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  BuildingLibraryIcon,
  CameraIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function Section1() {
  return (
    <section
      id="best-places-to-stay-in-morocco-for-first-time-visitors"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Morocco Accommodation Guide
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Best Places to Stay in Morocco for First-Time Visitors
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
          Choosing <strong>where to stay in Morocco</strong> is one of the most
          important decisions for a first trip. Morocco offers very different
          travel experiences, from historic medinas and traditional riads to
          Atlantic coast towns, mountain valleys, road-trip stops and Sahara
          desert camps.
        </p>

        <p>
          The best place to stay depends on your route, budget, preferred level
          of comfort and the type of Morocco experience you want. Travelers who
          love culture and busy old-city streets may prefer{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> or{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, while travelers
          looking for a peaceful desert experience may want to stay in{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> beside the{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi dunes</PlaceHoverCard>.
        </p>

        <p>
          Other first-time visitors may prefer the relaxed Atlantic atmosphere
          of{" "}
          <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, the blue
          streets of{" "}
          <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>, or
          overnight stops around{" "}
          <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard> and{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
          while traveling between Marrakech and the Sahara.
        </p>
      </div>

      {/* =====================================================
          IMAGE PLACEHOLDER
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Best places to stay in Morocco for first-time visitors"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK ANSWER
      ===================================================== */}

      <div className="rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Quick Answer
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
          Where Should a First-Time Visitor Stay in Morocco?
        </h3>

        <p className="mt-4 max-w-4xl text-[16px] leading-7 text-slate-700">
          For a first Morocco trip,{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> is a
          strong choice for culture, food, souks and day trips.{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard> is better for deep
          history and traditional medina life.{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is the
          choice for a Sahara stay, while{" "}
          <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> works
          well when you want a slower coastal break.
        </p>
      </div>

      {/* =====================================================
          DESTINATION CARDS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <BuildingLibraryIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Culture & Medinas
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Marrakech and Fes are excellent choices for historic streets,
            souks, architecture and traditional riads.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Sahara Experience
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Merzouga is ideal for travelers who want dunes, desert camps and a
            quieter overnight experience.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <CameraIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Relaxation & Photos
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Chefchaouen is popular for blue streets, mountain scenery and a
            slower travel pace.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SunIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Coast & Relaxation
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Essaouira gives travelers ocean air, seafood, walking and a calmer
            atmosphere than Morocco&apos;s busiest cities.
          </p>
        </div>
      </div>

      {/* =====================================================
          MARRAKECH
      ===================================================== */}

      <div
        id="marrakech-best-place-to-stay-for-culture-souks-and-day-trips"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Best for First-Time Visitors
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Marrakech – Best Place to Stay for Culture, Souks, and Day Trips
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> is one
            of the easiest places to recommend to travelers visiting Morocco
            for the first time. It combines traditional culture with modern
            hotels, restaurants, gardens, rooftop terraces, hammams and easy
            access to many excursions.
          </p>

          <p>
            Staying in Marrakech gives travelers the chance to experience the
            old medina and souks while still having access to modern areas,
            wider streets and luxury hotels outside the historic center.
          </p>

          <p>
            Marrakech is also useful as a starting point for the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="ourika-valley">
              Ourika Valley
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="ouzoud-waterfalls">
              Ouzoud Waterfalls
            </PlaceHoverCard>{" "}
            and longer routes toward southern Morocco and the Sahara.
          </p>
        </div>

        <div
          id="best-areas-to-stay-in-marrakech"
          className="scroll-mt-32 mt-8"
        >
          <h4 className="text-xl font-bold text-slate-900">
            Best Areas to Stay in Marrakech
          </h4>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h5 className="font-bold text-slate-900">Medina</h5>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Best for traditional riads, souks, historic streets and
                travelers who want to stay inside the old city.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h5 className="font-bold text-slate-900">Gueliz</h5>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Better for modern cafés, shops, easier car access and travelers
                who prefer wider streets.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h5 className="font-bold text-slate-900">Hivernage</h5>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                A good choice for upscale hotels and a quieter stay close to the
                main city attractions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h5 className="font-bold text-slate-900">Palmeraie</h5>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Best for resorts, pools, gardens and travelers who want more
                space away from the busy medina.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="text-sm leading-7 text-slate-700">
              <strong>First-time visitor tip:</strong> If you choose a riad in
              the Medina, check how close vehicles can get to the entrance.
              Some traditional riads are inside narrow pedestrian alleys, which
              can matter when arriving with heavy luggage.
            </p>
          </div>

          <Link
            href="/marrakech-desert-tours/"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition hover:text-amber-700"
          >
            Explore Marrakech Desert Tours
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          FES
      ===================================================== */}

      <div
        id="fes-best-place-to-stay-for-history-and-traditional-morocco"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Best for History
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Fes – Best Place to Stay for History and Traditional Morocco
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> is one of the best
            cities to stay in Morocco for travelers who want history,
            traditional craftsmanship and a strong old-medina atmosphere.
          </p>

          <p>
            The historic city is known for narrow streets, traditional
            workshops, leather craftsmanship, historic religious schools and a
            medina where walking is a major part of the experience.
          </p>

          <p>
            Compared with Marrakech, Fes can feel more focused on traditional
            city life and historic discovery. It is also useful for travelers
            following routes toward southeastern Morocco and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
          </p>
        </div>

        <div
          id="best-areas-to-stay-in-fes"
          className="scroll-mt-32 mt-8"
        >
          <h4 className="text-xl font-bold text-slate-900">
            Best Areas to Stay in Fes
          </h4>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-5">
              <h5 className="font-bold text-slate-900">
                Fes El Bali
              </h5>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Best for riads, walking, traditional food and staying inside the
                historic medina.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <h5 className="font-bold text-slate-900">
                Batha
              </h5>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Practical for travelers who want to stay close to the medina
                with easier pickup and drop-off.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <h5 className="font-bold text-slate-900">
                Fes Jdid
              </h5>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Useful for travelers wanting quieter streets while remaining
                close to important historic areas.
              </p>
            </div>
          </div>

          <Link
            href="/morocco-fes-desert-tours/"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition hover:text-amber-700"
          >
            Explore Fes Desert Tours
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          CHEFCHAOUEN
      ===================================================== */}

      <div
        id="chefchaouen-best-place-to-stay-for-relaxation-and-photography"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Best for a Slower Stay
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Chefchaouen – Best Place to Stay for Relaxation and Photography
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard> is
            one of Morocco&apos;s most visually distinctive destinations. Its
            blue-painted streets, mountain setting and slower atmosphere make
            it a good stop between busier parts of a Morocco itinerary.
          </p>

          <p>
            It can work especially well for couples, photographers, solo
            travelers and visitors who prefer walking slowly, enjoying cafés
            and spending more time taking photographs rather than following a
            packed sightseeing schedule.
          </p>
        </div>

        <div
          id="where-to-stay-in-chefchaouen"
          className="scroll-mt-32 mt-8 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h4 className="font-bold text-slate-900">Medina</h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Best if you want restaurants, shops, blue streets and viewpoints
              within easy walking distance.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h4 className="font-bold text-slate-900">Outskirts</h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Better for travelers who want easier parking and simpler luggage
              access.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h4 className="font-bold text-slate-900">
              Mountain View Guesthouses
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Best for quieter evenings, fresh air and scenic views outside the
              busiest streets.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          MERZOUGA
      ===================================================== */}

      <div
        id="merzouga-desert-best-place-to-stay-for-sahara-experience"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Best for the Sahara
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Merzouga Desert – Best Place to Stay for a Sahara Desert
              Experience
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is one
            of the strongest choices for travelers whose Morocco itinerary
            includes the Sahara. The village sits beside the{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>
            , where travelers can experience sunset, sunrise, camel activities
            and an overnight desert stay.
          </p>

          <p>
            Staying in Merzouga feels very different from staying in Marrakech
            or Fes. The area is quieter, more open and centered around the
            desert landscape.
          </p>
        </div>

        <div
          id="best-places-to-stay-in-merzouga"
          className="scroll-mt-32 mt-8 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-xl bg-white/10 p-5">
            <h4 className="font-bold text-white">
              Desert Camps
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Best for travelers who want to sleep near the dunes and make the
              Sahara the main experience of the stay.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-5">
            <h4 className="font-bold text-white">
              Kasbah Hotels
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Better for travelers who prefer a solid hotel building, easier
              access and facilities such as pools.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-5">
            <h4 className="font-bold text-white">
              Guesthouses Near the Dunes
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              A simpler option for travelers who want local hospitality while
              staying close to the desert.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/tour/3-days-from-errachidia-to-merzouga/"
            className="rounded-xl bg-amber-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-amber-800"
          >
            Errachidia Desert Tours
          </Link>

          <Link
            href="/erfoud-sahara-tours-4x4-desert-vehicles/"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/15"
          >
            Erfoud Desert Tours
          </Link>
        </div>
      </div>

      {/* =====================================================
          OUARZAZATE + DADES
      ===================================================== */}

      <div
        id="ouarzazate-and-dades-valley-best-place-to-stay-for-road-trips"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Best for Morocco Road Trips
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Ouarzazate and Dades Valley – Best Places to Stay for Road Trips
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="skoura">Skoura</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="todra-gorge">
              Todra Gorge
            </PlaceHoverCard>{" "}
            are useful overnight stops for travelers following the road between{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and
            southeastern Morocco.
          </p>

          <p>
            These areas help break a long journey into more comfortable stages
            while giving travelers time to enjoy kasbahs, palm groves, valleys,
            mountain roads and local settlements.
          </p>
        </div>

        <div
          id="where-to-stay-between-marrakech-and-the-sahara"
          className="scroll-mt-32 mt-8 grid gap-4 sm:grid-cols-2"
        >
          {[
            {
              title: "Ouarzazate",
              description:
                "Good for comfortable road-trip stops, kasbah architecture and travelers interested in the area's film connections.",
            },
            {
              title: "Skoura",
              description:
                "A quieter choice known for palm landscapes and traditional kasbah-style accommodation.",
            },
            {
              title: "Dades Valley",
              description:
                "A strong choice for mountain scenery, dramatic roads and a peaceful overnight stop.",
            },
            {
              title: "Todra Gorge",
              description:
                "Best for travelers who enjoy canyon scenery, walking and natural landscapes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h4 className="font-bold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition hover:text-amber-700"
        >
          Explore the 3 Days Marrakech to Merzouga Tour
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* =====================================================
          ESSAOUIRA
      ===================================================== */}

      <div
        id="essaouira-best-place-to-stay-for-beach-seafood-and-relaxed-vibes"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Best for a Coastal Break
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Essaouira – Best Place to Stay for Beach, Seafood, and Relaxed Vibes
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> is a
            good choice for travelers who want ocean air, seafood, art, walking
            and a slower atmosphere after visiting busier cities.
          </p>

          <p>
            It works well for couples, families, solo travelers and visitors
            who want to spend one or two nights relaxing beside the Atlantic.
          </p>
        </div>

        <div
          id="best-areas-to-stay-in-essaouira"
          className="scroll-mt-32 mt-8 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="font-bold text-slate-900">Medina</h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Best for charm, restaurants, shopping and walking through the
              historic center.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="font-bold text-slate-900">
              Beach Area
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Better for quick access to the sand, sea views and a more open
              atmosphere.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="font-bold text-slate-900">
              Seafront Hotels
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              A comfortable choice for travelers who prioritize ocean views and
              easy beach access.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CASABLANCA + RABAT
      ===================================================== */}

      <div
        id="casablanca-and-rabat-best-places-to-stay-for-short-city-stops"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Best for Arrival, Departure & Short Stops
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Casablanca and Rabat – Best Places to Stay for Short City Stops
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard> is a
            practical place to stay for arrivals, departures, business travel
            and travelers beginning a longer Morocco route from the city.
          </p>

          <p>
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>, Morocco&apos;s
            capital, offers a calmer city experience with historic sites,
            coastal views and useful rail connections to other major
            destinations.
          </p>
        </div>

        <div
          id="where-to-stay-in-casablanca-and-rabat"
          className="scroll-mt-32 mt-8 grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <MapPinIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Where to Stay in Casablanca
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              The city center, ocean-facing areas and neighborhoods with easy
              taxi access can be practical for short stays. If you are arriving
              or departing soon, prioritize easy transportation over choosing a
              hotel deep inside a complicated neighborhood.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <GlobeEuropeAfricaIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Where to Stay in Rabat
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              The city center, Hassan area and locations around the old medina
              can work well. Staying near useful transport connections can also
              make continuing toward Fes, Marrakech or Tangier easier.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FIRST-TIME VISITOR SUMMARY
      ===================================================== */}

      <div
        id="which-place-in-morocco-is-best-for-your-first-stay"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Choose by Travel Style
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Which Place in Morocco Is Best for Your First Stay?
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Destination
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Best For
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Stay Style
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Marrakech
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    First trip, culture, food & excursions
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Riad, modern hotel or resort
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Fes
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    History & traditional culture
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Medina riad or nearby hotel
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Chefchaouen
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Photography & relaxation
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Guesthouse or medina stay
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Merzouga
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Sahara experience
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Desert camp, kasbah hotel or guesthouse
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Ouarzazate / Dades
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Road trips & landscapes
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Kasbah hotel or valley guesthouse
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Essaouira
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Coast & slower travel
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Medina riad or seafront hotel
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Casablanca / Rabat
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Short city stops & transport
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Modern city hotel
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL TIP
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          First-Time Morocco Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Do Not Choose Accommodation Only by the Hotel
        </h3>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          Check the neighborhood, walking distance, luggage access, parking or
          pickup point and how the accommodation fits into your next travel
          day. A beautiful riad can be perfect for one traveler, while another
          may be happier in a modern hotel with easier vehicle access.
        </p>
      </div>
    </section>
  );
}
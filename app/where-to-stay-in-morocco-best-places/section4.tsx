import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  CameraIcon,
  CheckCircleIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Section4() {
  return (
    <section
      id="where-to-stay-in-morocco-by-travel-style"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Find the Right Stay for Your Trip
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Where to Stay in Morocco by Travel Style
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
          The best place to stay in Morocco can be very different from one
          traveler to another. A couple looking for a romantic trip may prefer
          a quiet riad in{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> or a
          desert camp near{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, while a
          family may care more about larger rooms, easier car access and a
          convenient location.
        </p>

        <p>
          Adventure travelers may want to stay closer to the{" "}
          <PlaceHoverCard place="high-atlas-mountains">
            High Atlas Mountains
          </PlaceHoverCard>
          ,{" "}
          <PlaceHoverCard place="dades-valley">
            Dades Valley
          </PlaceHoverCard>{" "}
          or{" "}
          <PlaceHoverCard place="todra-gorge">
            Todra Gorge
          </PlaceHoverCard>
          . Culture lovers may prefer historic cities such as{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, Marrakech and{" "}
          <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>.
        </p>

        <p>
          Choosing accommodation by travel style helps you spend more time
          enjoying Morocco and less time traveling between places that do not
          match what you actually want from your trip.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Travelers enjoying a Sahara Desert experience in Morocco"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK TRAVEL STYLE GUIDE
      ===================================================== */}

      <div className="rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Quick Guide
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
          Which Morocco Destination Fits Your Travel Style?
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-xl bg-white p-4">
            <SparklesIcon className="h-6 w-6 text-amber-700" />

            <p className="mt-3 font-bold text-slate-900">
              Couples
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Marrakech, Merzouga, Dades and Essaouira
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <UsersIcon className="h-6 w-6 text-amber-700" />

            <p className="mt-3 font-bold text-slate-900">
              Families
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Marrakech, Fes, Dades, Merzouga and Essaouira
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <SunIcon className="h-6 w-6 text-amber-700" />

            <p className="mt-3 font-bold text-slate-900">
              Luxury
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Marrakech, Palmeraie, Fes and Merzouga
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <MapPinIcon className="h-6 w-6 text-amber-700" />

            <p className="mt-3 font-bold text-slate-900">
              Adventure
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Atlas Mountains, Dades, Todra and Sahara
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <GlobeEuropeAfricaIcon className="h-6 w-6 text-amber-700" />

            <p className="mt-3 font-bold text-slate-900">
              Culture
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Fes, Marrakech, Chefchaouen, Rabat and Essaouira
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          COUPLES
      ===================================================== */}

      <div
        id="best-places-to-stay-in-morocco-for-couples"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Romantic Morocco
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Best Places to Stay in Morocco for Couples
            </h3>
          </div>
        </div>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Couples have many good accommodation choices in Morocco, especially
            if they want atmosphere, privacy and memorable surroundings.
            Traditional riads in{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> can be
            particularly appealing because many have peaceful courtyards,
            rooftop terraces and only a small number of rooms.
          </p>

          <p>
            For a completely different experience, couples can spend a night
            near the{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>{" "}
            around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>. A
            comfortable desert camp can make sunset, dinner and the quiet desert
            atmosphere part of the overnight experience.
          </p>

          <p>
            Travelers who prefer mountains and scenic road trips may enjoy a
            guesthouse in{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>
            , while{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> is a
            good option for couples who prefer ocean walks, cafés, seafood and
            slower days.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              place: "Marrakech",
              stay: "Traditional or boutique riad",
              reason: "Atmosphere, rooftops and historic surroundings",
            },
            {
              place: "Merzouga",
              stay: "Comfortable desert camp",
              reason: "Sunset, dunes and peaceful evenings",
            },
            {
              place: "Dades Valley",
              stay: "Scenic guesthouse",
              reason: "Mountain views and quieter stays",
            },
            {
              place: "Essaouira",
              stay: "Medina riad or coastal hotel",
              reason: "Ocean atmosphere and relaxed walking",
            },
          ].map((item) => (
            <div
              key={item.place}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-bold text-slate-900">
                {item.place}
              </p>

              <p className="mt-2 text-sm font-bold text-amber-700">
                {item.stay}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          FAMILIES
      ===================================================== */}

      <div
        id="best-places-to-stay-in-morocco-for-families"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <UsersIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Easier Family Travel
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Best Places to Stay in Morocco for Families
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Families should normally prioritize comfort, location and easy
            movement when choosing accommodation in Morocco. A beautiful riad
            can work very well, but families traveling with younger children,
            strollers or several suitcases may prefer accommodation that is
            closer to a vehicle-accessible street.
          </p>

          <p>
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> offer many
            accommodation choices, while{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>{" "}
            can provide a quieter overnight break during a road trip.
          </p>

          <p>
            Families can also include{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> when the
            desert experience is planned around the age and comfort of the
            children.{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> can be
            a useful slower stop after several days of city sightseeing or
            driving.
          </p>
        </div>

        <div className="mt-7">
          <h4 className="text-lg font-bold text-slate-900">
            What Families Should Check
          </h4>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Family or connecting rooms",
              "Easy luggage access",
              "Distance from vehicle pickup",
              "Air conditioning or heating",
              "Stairs and elevator access",
              "Quiet sleeping environment",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
              >
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

                <p className="text-sm font-bold leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          LUXURY TRAVELERS
      ===================================================== */}

      <div
        id="best-places-to-stay-in-morocco-for-luxury-travelers"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Premium Morocco Stays
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Best Places to Stay in Morocco for Luxury Travelers
            </h3>
          </div>
        </div>

        <div className="mt-6 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            Morocco offers a wide range of upscale accommodation, from
            beautifully restored riads and large resorts to premium desert
            camps and high-end coastal hotels.
          </p>

          <p>
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> has
            one of the widest selections, particularly around the historic
            medina, Hivernage and the Palmeraie. The Palmeraie is especially
            suitable for travelers who want larger resorts, gardens, pools and
            more space outside the busy old city.
          </p>

          <p>
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> also offers
            upscale riads and hotels with traditional design, while{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> gives
            luxury travelers the opportunity to combine comfortable tents and
            private facilities with the Sahara landscape.
          </p>

          <p>
            On the Atlantic coast, high-end hotels around{" "}
            <PlaceHoverCard place="agadir">Agadir</PlaceHoverCard> and selected
            stays in{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> can
            add a relaxing end to a longer Morocco itinerary.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Beautiful architecture and interiors",
            "Pools, gardens and spa facilities",
            "Private transport arrangements",
            "Premium desert camp options",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/10 p-5"
            >
              <CheckCircleIcon className="h-5 w-5 text-amber-300" />

              <p className="mt-3 text-sm font-bold leading-6 text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          ADVENTURE TRAVELERS
      ===================================================== */}

      <div
        id="best-places-to-stay-in-morocco-for-adventure-travelers"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <MapPinIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Mountains, Valleys & Sahara
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Best Places to Stay in Morocco for Adventure Travelers
            </h3>
          </div>
        </div>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Travelers who want outdoor experiences should choose accommodation
            close to the landscapes they plan to explore. This can reduce
            driving and make it easier to start activities earlier in the day.
          </p>

          <p>
            The{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>{" "}
            are a strong choice for hiking and mountain scenery. Areas around{" "}
            <PlaceHoverCard place="imlil">Imlil</PlaceHoverCard> are often used
            as a base for mountain walks and longer trekking routes.
          </p>

          <p>
            Farther southeast,{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="todra-gorge">
              Todra Gorge
            </PlaceHoverCard>{" "}
            offer dramatic landscapes, walking opportunities, photography and
            scenic roads.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, the{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>{" "}
            create a very different adventure setting for camel experiences,
            desert walks and 4×4 excursions where locally available and
            appropriately organized.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <CameraIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Stay Close to the Landscape
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              A guesthouse near a valley, mountain or desert can save travel
              time and make sunrise, sunset or early walking plans easier.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <MapPinIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Check Activity Logistics
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Ask where activities begin, whether transport is required and
              what footwear, clothing or equipment is suitable for your chosen
              activity.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CULTURE LOVERS
      ===================================================== */}

      <div
        id="best-places-to-stay-in-morocco-for-culture-lovers"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <GlobeEuropeAfricaIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Medina, History & Local Life
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Best Places to Stay in Morocco for Culture Lovers
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Travelers interested in history, architecture, traditional crafts
            and local food should spend at least part of their itinerary in
            Morocco&apos;s historic cities.
          </p>

          <p>
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> is one of the
            strongest choices for visitors interested in traditional crafts,
            historic architecture and medina life. Staying in or near Fes El
            Bali can place many cultural sights within walking distance.
          </p>

          <p>
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
            combines historic monuments, souks, gardens, food and a large choice
            of traditional riads.{" "}
            <PlaceHoverCard place="chefchaouen">
              Chefchaouen
            </PlaceHoverCard>{" "}
            offers a smaller medina experience with its distinctive blue
            streets and mountain setting.
          </p>

          <p>
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard> combines the
            role of a modern capital with historic landmarks, while{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> offers
            an Atlantic medina, port atmosphere, crafts and a slower pace.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              city: "Fes",
              best: "Historic medina & crafts",
            },
            {
              city: "Marrakech",
              best: "Souks, monuments & riads",
            },
            {
              city: "Chefchaouen",
              best: "Blue medina & mountain setting",
            },
            {
              city: "Rabat",
              best: "History & modern capital life",
            },
            {
              city: "Essaouira",
              best: "Coastal medina & relaxed culture",
            },
          ].map((item) => (
            <div
              key={item.city}
              className="rounded-xl bg-slate-50 p-5"
            >
              <p className="font-bold text-slate-900">
                {item.city}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.best}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          COMPARISON TABLE
      ===================================================== */}

      <div
        id="morocco-where-to-stay-by-travel-style-comparison"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Compare Your Options
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Morocco Where-to-Stay Guide by Travel Style
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Travel Style
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Good Destinations
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Accommodation Style
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Couples
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Marrakech, Merzouga, Dades, Essaouira
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Riad, boutique hotel, desert camp
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Families
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Marrakech, Fes, Merzouga, Dades, Essaouira
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Family hotel or easy-access riad
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Luxury
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Marrakech, Fes, Merzouga, Agadir
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Luxury riad, resort or premium camp
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Adventure
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Atlas Mountains, Dades, Todra, Merzouga
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Mountain lodge, guesthouse or camp
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Culture
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Fes, Marrakech, Chefchaouen, Rabat, Essaouira
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Medina riad or historic-city hotel
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
          First-Time Visitor Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          You Can Combine More Than One Travel Style
        </h3>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          Your Morocco trip does not need to fit only one category. You could
          enjoy a cultural riad stay in{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, spend a
          scenic night in{" "}
          <PlaceHoverCard place="dades-valley">
            Dades Valley
          </PlaceHoverCard>
          , experience the Sahara in{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and finish
          with a relaxing coastal stay in{" "}
          <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>. Mixing
          accommodation styles is often one of the best ways to experience
          Morocco&apos;s different landscapes and cities.
        </p>
      </div>
    </section>
  );
}
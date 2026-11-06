import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  CalendarDaysIcon,
  CheckCircleIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Section5() {
  return (
    <section
      id="suggested-morocco-itinerary-with-best-overnight-stops"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Morocco Route Planning
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Suggested Morocco Itinerary with Best Overnight Stops
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
          Choosing the right overnight stops is just as important as choosing
          the right accommodation. Morocco has long distances between some of
          its major destinations, so a well-planned itinerary can make the trip
          more comfortable and give you more time to enjoy each place.
        </p>

        <p>
          For first-time visitors, a good route normally combines historic
          cities, mountain scenery, the Sahara Desert and, when time allows, the
          Atlantic coast. Popular overnight stops include{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="chefchaouen">
            Chefchaouen
          </PlaceHoverCard>
          ,{" "}
          <PlaceHoverCard place="dades-valley">
            Dades Valley
          </PlaceHoverCard>
          ,{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and{" "}
          <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>.
        </p>

        <p>
          The number of days you have should determine how many places you try
          to include. Seven days requires a more focused route, while ten or
          twelve days gives you more freedom to slow down and spend additional
          nights in important destinations.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Morocco road trip itinerary with mountain valleys desert and historic cities"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK ROUTE GUIDE
      ===================================================== */}

      <div className="rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Quick Guide
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
          How Many Places Should You Stay in During a Morocco Trip?
        </h3>

        <p className="mt-4 max-w-4xl text-[16px] leading-7 text-slate-700">
          For around 7 days, keep the route focused and avoid changing hotels
          every night when possible. With 10 days, you can comfortably combine
          northern cities, the Sahara and Marrakech. With around 12 days, you
          have more time to add the Atlantic coast and enjoy slower overnight
          stops.
        </p>
      </div>

      {/* =====================================================
          7 DAYS
      ===================================================== */}

      <div
        id="7-days-in-morocco-best-overnight-stops"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <CalendarDaysIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Short Morocco Itinerary
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              7 Days in Morocco
            </h3>
          </div>
        </div>

        <div
          id="7-day-morocco-route-marrakech-dades-merzouga-fes-chefchaouen"
          className="scroll-mt-32 mt-6"
        >
          <div className="rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Suggested Route
            </p>

            <h4 className="mt-2 text-xl font-bold leading-8 text-white sm:text-2xl">
              Marrakech → Dades Valley → Merzouga Desert → Fes → Chefchaouen
            </h4>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Marrakech",
                "Dades Valley",
                "Merzouga",
                "Fes",
                "Chefchaouen",
              ].map((place, index) => (
                <div key={place} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-white">
                    {place}
                  </span>

                  {index < 4 && (
                    <span className="text-sm text-amber-300">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              A{" "}
              <Link
                href="/tour/morocco-itinerary-7-days-from-marrakech/"
                className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-700"
              >
                7-day Morocco itinerary
              </Link>{" "}
              can begin in{" "}
              <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
              before crossing the{" "}
              <PlaceHoverCard place="high-atlas-mountains">
                High Atlas Mountains
              </PlaceHoverCard>{" "}
              toward southern Morocco.
            </p>

            <p>
              A night in{" "}
              <PlaceHoverCard place="dades-valley">
                Dades Valley
              </PlaceHoverCard>{" "}
              helps break the journey toward the Sahara and gives travelers time
              to enjoy mountain scenery and the valley landscape before
              continuing to{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            </p>

            <p>
              In Merzouga, travelers can include an overnight stay near the{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi dunes
              </PlaceHoverCard>{" "}
              before continuing north toward{" "}
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard>. If the route and
              departure plan allow it,{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              can be added as a final northern stop.
            </p>

            <p>
              Because seven days is relatively short for covering several
              regions of Morocco, travelers should keep the number of overnight
              changes under control and accept that some days will include
              significant driving.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                place: "Marrakech",
                stay: "Riad or city hotel",
              },
              {
                place: "Dades Valley",
                stay: "Kasbah or guesthouse",
              },
              {
                place: "Merzouga",
                stay: "Desert camp or dune-side hotel",
              },
              {
                place: "Fes",
                stay: "Medina riad or hotel",
              },
              {
                place: "Chefchaouen",
                stay: "Medina guesthouse",
              },
            ].map((item) => (
              <div
                key={item.place}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <MapPinIcon className="h-5 w-5 text-amber-700" />

                <h5 className="mt-3 font-bold text-slate-900">
                  {item.place}
                </h5>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.stay}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          10 DAYS
      ===================================================== */}

      <div
        id="10-days-in-morocco-best-overnight-stops"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Balanced First-Time Route
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          10 Days in Morocco
        </h3>

        <div
          id="10-day-morocco-route-casablanca-rabat-chefchaouen-fes-merzouga-dades-marrakech-essaouira"
          className="scroll-mt-32"
        >
          <div className="mt-6 rounded-2xl bg-[#fffaf3] p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Suggested Route
            </p>

            <h4 className="mt-2 text-lg font-bold leading-8 text-slate-900 sm:text-xl">
              Casablanca → Rabat → Chefchaouen → Fes → Merzouga → Dades →
              Marrakech → Essaouira
            </h4>
          </div>

          <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              A{" "}
              <Link
                href="/tour/morocco-itinerary-10-days-from-marrakech/"
                className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-700"
              >
                10-day Morocco itinerary
              </Link>{" "}
              gives first-time visitors more time to experience different
              regions without compressing everything into a very short trip.
            </p>

            <p>
              The journey can begin in{" "}
              <PlaceHoverCard place="casablanca">
                Casablanca
              </PlaceHoverCard>{" "}
              and continue to{" "}
              <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard> before
              heading north toward{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>.
            </p>

            <p>
              From Chefchaouen, the route can continue toward{" "}
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard> and then south
              through the Middle Atlas toward{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>. The
              Sahara night is followed by a road trip through{" "}
              <PlaceHoverCard place="dades-valley">
                Dades Valley
              </PlaceHoverCard>{" "}
              before reaching{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>.
            </p>

            <p>
              If the schedule allows, finishing with{" "}
              <PlaceHoverCard place="essaouira">
                Essaouira
              </PlaceHoverCard>{" "}
              adds a very different Atlantic coast experience after the cities,
              mountains and desert.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-5">
              <CheckCircleIcon className="h-5 w-5 text-amber-700" />

              <h4 className="mt-3 font-bold text-slate-900">
                Why This Route Works
              </h4>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                It combines historic cities, northern Morocco, the Sahara,
                mountain valleys, Marrakech and the Atlantic coast in one
                itinerary.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <CheckCircleIcon className="h-5 w-5 text-amber-700" />

              <h4 className="mt-3 font-bold text-slate-900">
                Accommodation Strategy
              </h4>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Mix riads in historic cities, a desert camp in Merzouga, a
                guesthouse in Dades and a coastal stay in Essaouira.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          12 DAYS
      ===================================================== */}

      <div
        id="12-days-in-morocco-best-overnight-stops"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              More Comfortable Morocco Journey
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              12 Days in Morocco
            </h3>
          </div>
        </div>

        <div
          id="12-day-morocco-route-casablanca-rabat-chefchaouen-fes-sahara-dades-marrakech-essaouira"
          className="scroll-mt-32"
        >
          <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Suggested Route
            </p>

            <h4 className="mt-2 text-xl font-bold leading-8 text-white sm:text-2xl">
              Casablanca → Rabat → Chefchaouen → Fes → Sahara Desert → Dades →
              Marrakech → Essaouira
            </h4>
          </div>

          <div className="mt-6 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              A 12-day Morocco itinerary gives travelers more flexibility than
              a shorter route. The main advantage is not necessarily adding
              many more destinations, but having more time to enjoy important
              places without moving accommodation every day.
            </p>

            <p>
              Starting in{" "}
              <PlaceHoverCard place="casablanca">
                Casablanca
              </PlaceHoverCard>{" "}
              allows travelers to continue through{" "}
              <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard> before beginning
              the longer journey toward southeastern Morocco.
            </p>

            <p>
              The Sahara portion can include{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>{" "}
              and the{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi dunes
              </PlaceHoverCard>
              , followed by an overnight stop around{" "}
              <PlaceHoverCard place="dades-valley">
                Dades Valley
              </PlaceHoverCard>.
            </p>

            <p>
              Additional time in{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="essaouira">
                Essaouira
              </PlaceHoverCard>{" "}
              can make the final part of the trip feel more relaxed after the
              longer road journey from the Sahara.
            </p>

            <p>
              This type of route works particularly well as a{" "}
              <Link
                href="/"
                className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-700"
              >
                Morocco private tour
              </Link>{" "}
              because travelers can choose accommodation levels, adjust the
              pace and organize overnight stops around their preferred travel
              style.
            </p>
          </div>
        </div>

        {/* =================================================
            WHY 12 DAYS
        ================================================= */}

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <CalendarDaysIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              More Time
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Spend longer in important cities rather than treating every
              destination as a quick overnight stop.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <MapPinIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Better Route Balance
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Combine northern Morocco, imperial cities, the Sahara and the
              coast with a more comfortable travel rhythm.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <SparklesIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              More Stay Options
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Include riads, hotels, guesthouses and a Sahara camp instead of
              using the same accommodation style throughout the trip.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          OVERNIGHT STOP COMPARISON
      ===================================================== */}

      <div
        id="best-overnight-stops-for-a-morocco-itinerary"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Accommodation by Destination
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Best Overnight Stops for a Morocco Itinerary
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Destination
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Why Stay Overnight
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Good Accommodation Style
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Marrakech
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Medina, food, culture and day trips
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Riad or modern hotel
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Chefchaouen
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Blue medina and slower northern stop
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Guesthouse or medina stay
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Fes
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    History, medina and traditional crafts
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Riad or city hotel
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Merzouga
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Sahara sunset, sunrise and dunes
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Desert camp or dune-side hotel
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Dades Valley
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Breaks the Sahara road journey
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Kasbah or valley guesthouse
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Essaouira
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Coast, seafood and relaxation
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Medina riad or coastal hotel
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
          Do Not Try to Sleep in a New City Every Night
        </h3>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          Morocco rewards travelers who leave enough time to enjoy each place.
          When possible, spend two nights in important destinations such as{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> or{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, and use places such
          as{" "}
          <PlaceHoverCard place="dades-valley">
            Dades Valley
          </PlaceHoverCard>{" "}
          as useful overnight stops on longer road journeys. Your itinerary
          should feel like a trip through Morocco, not only a sequence of hotel
          check-ins.
        </p>
      </div>
    </section>
  );
}
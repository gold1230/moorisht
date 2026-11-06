import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  CalendarDaysIcon,
  CheckCircleIcon,
  MapPinIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Section3() {
  return (
    <section
      id="how-to-choose-the-best-place-to-stay-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Morocco Accommodation Planning
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          How to Choose the Best Place to Stay in Morocco
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
          Choosing the <strong>best place to stay in Morocco</strong> is not
          only about finding a beautiful hotel or riad. Your accommodation
          should also make your Morocco itinerary easier, reduce unnecessary
          driving and give you the level of comfort you expect during your
          trip.
        </p>

        <p>
          A traveler spending most of the trip around{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> will
          have very different accommodation needs from someone following a
          route through{" "}
          <PlaceHoverCard place="dades-valley">
            Dades Valley
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>. The same
          is true for travelers visiting{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="chefchaouen">
            Chefchaouen
          </PlaceHoverCard>{" "}
          or the Atlantic coast.
        </p>

        <p>
          Before booking, think about five important things: your itinerary,
          budget, comfort level, travel style and transportation. Looking at all
          five together usually makes it much easier to choose accommodation
          that fits the whole journey.
        </p>
      </div>

      {/* =====================================================
          SECTION IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Traveler riding a camel across Sahara desert dunes in Morocco"
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
          What Should You Check Before Booking Accommodation in Morocco?
        </h3>

        <p className="mt-4 max-w-4xl text-[16px] leading-7 text-slate-700">
          First-time visitors should check how the accommodation fits their
          route, how easy it is to reach, whether it matches their budget and
          whether important features such as air conditioning, heating,
          elevators, parking or luggage assistance are available when needed.
        </p>
      </div>

      {/* =====================================================
          FIVE MAIN FACTORS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          {
            number: "01",
            title: "Itinerary",
            text: "Choose accommodation that follows your route naturally.",
          },
          {
            number: "02",
            title: "Budget",
            text: "Decide how much comfort you want to pay for each night.",
          },
          {
            number: "03",
            title: "Comfort",
            text: "Think about stairs, luggage, heating and car access.",
          },
          {
            number: "04",
            title: "Travel Style",
            text: "Couples, families and adventure travelers need different stays.",
          },
          {
            number: "05",
            title: "Location",
            text: "Check distance from attractions and transport pickup points.",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <span className="text-xs font-bold text-amber-700">
              {item.number}
            </span>

            <h3 className="mt-2 font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* =====================================================
          CHOOSE BASED ON ITINERARY
      ===================================================== */}

      <div
        id="choose-accommodation-based-on-your-morocco-itinerary"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <CalendarDaysIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Plan Around Your Route
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Choose Based on Your Morocco Itinerary
            </h3>
          </div>
        </div>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Your itinerary should be one of the first things you consider when
            choosing where to stay. Morocco is a large country, and trying to
            include too many overnight stops can turn a relaxing vacation into
            a trip dominated by driving.
          </p>

          <p>
            If you have around{" "}
            <a
              href="https://7daymoroccoitinerary.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-700"
            >
              7 days in Morocco
            </a>
            , it is usually better to focus on fewer destinations and spend
            enough time in each place. For example, combining{" "}
            <PlaceHoverCard place="marrakech">
              Marrakech
            </PlaceHoverCard>{" "}
            with a southern route toward{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> may make
            more sense than trying to include every major city.
          </p>

          <p>
            With 10 or 12 days, travelers have more flexibility to combine{" "}
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
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>{" "}
            without moving accommodation every few hours.
          </p>
        </div>

        {/* ITINERARY COMPARISON */}

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <span className="text-sm font-bold text-amber-700">
              Shorter Trip
            </span>

            <h4 className="mt-2 text-lg font-bold text-slate-900">
              Around 7 Days
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Choose fewer accommodation changes and prioritize the
              destinations that matter most to you. Spending two nights in a
              city can often be more enjoyable than changing hotels every day.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <span className="text-sm font-bold text-amber-700">
              Longer Trip
            </span>

            <h4 className="mt-2 text-lg font-bold text-slate-900">
              Around 10–12 Days
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              A longer itinerary gives you more freedom to combine imperial
              cities, the Sahara, mountain valleys and the Atlantic coast
              without making every day a long transfer.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CHOOSE BASED ON BUDGET
      ===================================================== */}

      <div
        id="choose-accommodation-based-on-your-budget"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Match the Stay to Your Spending Plan
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Choose Based on Your Budget
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco offers accommodation for many different budgets. You do not
            need to stay in luxury hotels every night to have a comfortable
            trip, and you can also mix different accommodation levels during
            the same itinerary.
          </p>

          <p>
            Budget travelers can choose simple hotels, hostels and smaller
            guesthouses. Mid-range travelers often have many comfortable riads,
            boutique stays and superior hotels available. Travelers looking for
            more luxury can choose upscale riads, five-star hotels, resorts and
            premium Sahara camps.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
              Budget
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Simple Hotels & Guesthouses
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Best when price and basic comfort are more important than extra
              facilities.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
              Mid-Range
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Riads & Superior Hotels
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              A useful balance between comfort, atmosphere and overall trip
              cost.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
              Luxury
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Luxury Riads, Resorts & Desert Camps
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Best for travelers who prioritize spacious rooms, premium
              facilities and higher service levels.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-[#fffaf3] p-5">
          <p className="text-sm leading-7 text-slate-700">
            <strong>Money-saving tip:</strong> You can spend more on special
            nights, such as a Sahara camp, while choosing simpler accommodation
            during shorter city or road-trip stops.
          </p>
        </div>
      </div>

      {/* =====================================================
          CHOOSE BASED ON COMFORT
      ===================================================== */}

      <div
        id="choose-accommodation-based-on-comfort-level"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Think About Daily Comfort
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Choose Based on Your Comfort Level
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Travelers do not all define comfort in the same way. Some visitors
            love the atmosphere of a traditional riad hidden inside the medina,
            even if reaching it requires several minutes of walking through
            narrow streets.
          </p>

          <p>
            Other travelers prefer modern hotels with direct vehicle access,
            elevators, larger rooms, parking and more predictable facilities.
            Neither option is better for everyone, so choose according to your
            personal needs rather than only by photographs.
          </p>

          <p>
            Before booking accommodation in Morocco, check important details
            such as stairs, elevators, walking distance, luggage access, air
            conditioning, heating and possible street noise.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Is there air conditioning?",
            "Is heating available in colder months?",
            "Are there many stairs?",
            "Is an elevator available?",
            "How close can a car or taxi reach?",
            "Is the area quiet at night?",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

              <p className="text-sm font-bold leading-6 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          CHOOSE BASED ON TRAVEL STYLE
      ===================================================== */}

      <div
        id="choose-accommodation-based-on-travel-style"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <UsersIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Match Your Accommodation to Your Trip
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Choose Based on Your Travel Style
            </h3>
          </div>
        </div>

        <div className="mt-6 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            Your travel style can completely change what makes a good place to
            stay. A romantic riad may be perfect for a couple, while a family
            traveling with several suitcases may value larger rooms and direct
            car access more.
          </p>

          <p>
            Adventure travelers often enjoy smaller guesthouses in valleys and
            an overnight stay near the Sahara. Culture-focused travelers may
            prefer accommodation inside or close to the historic areas of{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="chefchaouen">
              Chefchaouen
            </PlaceHoverCard>.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/10 p-5">
            <SparklesIcon className="h-6 w-6 text-amber-300" />

            <h4 className="mt-4 font-bold text-white">
              Couples
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Romantic riads, boutique hotels and comfortable desert camps can
              create a more private atmosphere.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/10 p-5">
            <UsersIcon className="h-6 w-6 text-amber-300" />

            <h4 className="mt-4 font-bold text-white">
              Families
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Look for larger rooms, convenient pickup access, family-friendly
              facilities and less complicated luggage movement.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/10 p-5">
            <MapPinIcon className="h-6 w-6 text-amber-300" />

            <h4 className="mt-4 font-bold text-white">
              Adventure Travelers
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Valley guesthouses, mountain stays and desert camps can make the
              landscape a larger part of the trip.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/10 p-5">
            <CalendarDaysIcon className="h-6 w-6 text-amber-300" />

            <h4 className="mt-4 font-bold text-white">
              Culture Lovers
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Stay near historic medinas, traditional architecture, markets and
              major cultural attractions.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          TRANSPORTATION & LOCATION
      ===================================================== */}

      <div
        id="choose-accommodation-based-on-transportation-and-location"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <MapPinIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Avoid Arrival-Day Stress
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Choose Based on Transportation and Location
            </h3>
          </div>
        </div>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Location is especially important when booking accommodation inside
            Morocco&apos;s historic medinas. A beautiful riad can be an
            excellent choice, but reaching it may involve walking from the
            nearest vehicle-accessible street.
          </p>

          <p>
            This is common in old areas of{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, where some lanes
            were not designed for modern vehicles. It is better to know this
            before arrival rather than discovering it while carrying luggage.
          </p>

          <p>
            If you are traveling with a private driver, joining a desert tour
            or arranging an airport transfer, ask whether the driver can reach
            the accommodation entrance or where the closest pickup and drop-off
            point is located.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
            Before You Book
          </p>

          <h4 className="mt-2 text-xl font-bold text-slate-900">
            Ask These Transportation Questions
          </h4>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Can a taxi or private driver reach the entrance?",
              "Where is the closest vehicle drop-off point?",
              "Is luggage assistance available?",
              "How long is the walk from the road?",
              "Is parking available nearby?",
              "Can a tour driver easily find the pickup point?",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-amber-700" />

                <p className="text-sm leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          DECISION TABLE
      ===================================================== */}

      <div
        id="morocco-accommodation-choice-guide"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Simple Decision Guide
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Morocco Accommodation Choice Guide
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    If You Want...
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Consider
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Check Before Booking
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Traditional atmosphere
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Medina riad
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Walking and luggage access
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Easy transport
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Modern city hotel
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Parking and pickup access
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Sahara experience
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Merzouga desert camp
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Bathroom, bedding and transfers
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Scenic road trip
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Kasbah or guesthouse
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Road location and meal options
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Maximum comfort
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Superior or luxury hotel
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Facilities and room category
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
          The Best Accommodation Is the One That Makes Your Trip Easier
        </h3>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          Do not choose a stay only because the photos look beautiful. Check
          whether the location works with your itinerary, transportation,
          luggage and comfort needs. A simple well-located hotel can sometimes
          make a travel day much easier than a more luxurious property far from
          where you need to be.
        </p>
      </div>
    </section>
  );
}
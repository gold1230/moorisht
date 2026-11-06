import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  HomeIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function Section6() {
  return (
    <section
      id="useful-tips-before-booking-accommodation-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Before You Reserve
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Useful Tips Before Booking Accommodation in Morocco
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
          Booking accommodation in Morocco is usually simple, but first-time
          visitors should check a few important details before confirming a
          stay. The most beautiful riad, hotel or desert camp is not always the
          most practical option for your itinerary.
        </p>

        <p>
          Location, vehicle access, luggage assistance, air conditioning,
          heating, meals and transfer arrangements can all make a big
          difference. This is especially important when staying inside the old
          medinas of{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, or when booking a
          desert camp near{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and the{" "}
          <PlaceHoverCard place="erg-chebbi">
            Erg Chebbi dunes
          </PlaceHoverCard>
          .
        </p>

        <p>
          Spending a few extra minutes checking these details before booking
          can make your arrival easier and help avoid unexpected problems
          during your Morocco trip.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Travelers enjoying a four day Morocco desert journey near Merzouga"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK CHECKLIST
      ===================================================== */}

      <div className="rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Quick Booking Checklist
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
          What Should You Check Before Booking a Stay in Morocco?
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Exact location and vehicle access",
            "Luggage assistance if needed",
            "Air conditioning or heating",
            "Breakfast and meals included",
            "Bathroom type and room facilities",
            "Pickup and transfer arrangements",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-white p-4"
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
          MEDINA ACCESS
      ===================================================== */}

      <div
        id="check-medina-access-before-booking-a-riad"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <MapPinIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Riad Location Matters
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Check Medina Access Before Booking a Riad
            </h3>
          </div>
        </div>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Traditional riads are one of the most memorable places to stay in
            Morocco, but many are located inside historic medinas where cars
            cannot reach the front door.
          </p>

          <p>
            In places such as{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, some
            accommodation may require a short walk from the nearest
            vehicle-accessible street.
          </p>

          <p>
            This is part of the character of the old medina, but it is useful
            to know before arrival. Ask how far the property is from the
            drop-off point and whether staff can help with luggage.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="font-bold text-slate-900">
            Ask the Property
          </h4>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Can a taxi reach the entrance?",
              "Where is the nearest drop-off point?",
              "How many minutes do I need to walk?",
              "Can someone help with luggage?",
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
          DESERT CAMP CHECKLIST
      ===================================================== */}

      <div
        id="what-to-check-before-booking-a-morocco-desert-camp"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Sahara Accommodation
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              What to Check Before Booking a Morocco Desert Camp
            </h3>
          </div>
        </div>

        <div className="mt-6 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            Desert camps around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> can be
            very different from one another. Some offer simple tents, while
            others provide private bathrooms, larger beds and more comfortable
            facilities.
          </p>

          <p>
            Do not rely only on labels such as &quot;standard&quot; or
            &quot;luxury.&quot; Ask exactly what is included and what the tent
            facilities are.
          </p>

          <p>
            You should also understand how you will reach the camp. Depending
            on the property and package, access may involve a 4×4 transfer,
            camel experience or another arranged transfer.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Private or shared bathroom",
            "Heating for colder nights",
            "Ventilation or cooling arrangements",
            "Bed and bedding quality",
            "Dinner and breakfast",
            "Camel or 4×4 transfer details",
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

        <div className="mt-6 rounded-xl border border-amber-300/20 bg-amber-300/10 p-5">
          <p className="text-sm leading-7 text-slate-200">
            <strong className="text-white">Important:</strong> Desert
            temperatures can change significantly between daytime and night.
            Ask the camp directly what heating, cooling or ventilation is
            available during your travel dates instead of assuming every camp
            has the same facilities.
          </p>
        </div>
      </div>

      {/* =====================================================
          BOOK EARLY
      ===================================================== */}

      <div
        id="book-morocco-accommodation-early-during-busy-seasons"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <CalendarDaysIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Plan Ahead
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Book Morocco Accommodation Early During Busy Seasons
            </h3>
          </div>
        </div>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Popular riads, well-located hotels and comfortable desert camps can
            become limited during busy travel periods.
          </p>

          <p>
            Spring and autumn are popular times for many Morocco itineraries
            because travelers often combine cities, mountains and the Sahara.
            Christmas and New Year can also create strong demand in popular
            destinations.
          </p>

          <p>
            Booking earlier gives you more choice of location, room type and
            accommodation style, especially in high-demand places such as{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <CalendarDaysIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Popular Travel Periods
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Spring, autumn and end-of-year holiday dates can bring stronger
              demand for popular accommodation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <HomeIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Book Special Stays First
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              If a particular riad or desert camp is important to your trip,
              reserve it before filling the less important overnight stops.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BREAKFAST
      ===================================================== */}

      <div
        id="check-if-breakfast-is-included-in-morocco"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Check the Room Rate
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Check if Breakfast Is Included
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Many riads and guesthouses in Morocco offer breakfast, but you
            should not assume that every booking includes it.
          </p>

          <p>
            Check the room conditions before paying, especially when comparing
            two properties with similar prices. A slightly higher rate that
            includes breakfast may sometimes be more convenient than a cheaper
            room without meals.
          </p>

          <p>
            This can be particularly useful on travel days when you need to
            leave early for a transfer, road trip or excursion.
          </p>
        </div>

        <div className="mt-6 rounded-xl bg-[#fffaf3] p-5">
          <p className="text-sm leading-7 text-slate-700">
            <strong>Also ask:</strong> If you have an early departure, check
            whether breakfast can be served earlier or whether the property can
            provide another arrangement.
          </p>
        </div>
      </div>

      {/* =====================================================
          PRIVATE TRANSFERS
      ===================================================== */}

      <div
        id="consider-private-transfers-for-easier-morocco-travel"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Easier Arrival and Departure
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Consider Private Transfers for Easier Morocco Travel
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Private transfers can be useful for first-time visitors who want a
            simpler arrival, especially when traveling with luggage or staying
            somewhere that is difficult to find.
          </p>

          <p>
            A driver can normally take you to the closest practical access
            point, which can reduce the stress of finding a hotel or riad after
            a long flight or train journey.
          </p>

          <p>
            Transfers can be particularly useful when arriving in busy cities
            such as{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> or{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, and during longer
            road journeys between cities.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
          <h4 className="font-bold text-slate-900">
            When a Private Transfer Can Be Helpful
          </h4>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Airport arrival with several bags",
              "Late arrival in an unfamiliar city",
              "Medina accommodation with a specific pickup point",
              "Family travel with children",
              "Long road transfers between destinations",
              "Travelers who prefer door-to-door planning",
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
          AIR CONDITIONING AND HEATING
      ===================================================== */}

      <div
        id="check-air-conditioning-and-heating-before-booking"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <SunIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Seasonal Comfort
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Check Air Conditioning and Heating Before Booking
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Seasonal comfort can vary greatly depending on where you stay in
            Morocco. In warmer periods, air conditioning can be important in
            cities such as{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, as well as in
            southeastern Morocco.
          </p>

          <p>
            During colder periods, heating can be important in the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            , desert regions and some traditional medina properties.
          </p>

          <p>
            Older buildings can have very different heating and cooling
            systems, so check the exact room facilities rather than assuming
            that all rooms have the same equipment.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-[#fffaf3] p-5">
            <SunIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Summer Travel
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Check air conditioning or suitable cooling arrangements,
              especially for stays in inland cities and desert regions.
            </p>
          </div>

          <div className="rounded-xl bg-[#fffaf3] p-5">
            <HomeIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Winter Travel
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Ask about heating and bedding when staying in mountain areas,
              desert regions or older traditional buildings.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          READ LOCATION REVIEWS
      ===================================================== */}

      <div
        id="read-accommodation-location-reviews-carefully"
        className="scroll-mt-32 mt-12"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 sm:flex">
            <MapPinIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Do Not Look Only at Room Photos
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Read Accommodation Location Reviews Carefully
            </h3>
          </div>
        </div>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Beautiful photographs can tell you what a room looks like, but they
            do not always tell you how convenient the location will be.
          </p>

          <p>
            Reviews that discuss walking distance, noise, taxi access,
            neighborhood surroundings and pickup arrangements can be
            particularly useful for first-time visitors.
          </p>

          <p>
            A well-located property may save time every day, while a cheaper
            hotel far from the places you want to visit can create additional
            transport costs and longer travel times.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Walking",
              text: "How far are the main attractions and restaurants?",
            },
            {
              title: "Transport",
              text: "Can taxis, drivers and tour vehicles reach the area?",
            },
            {
              title: "Noise",
              text: "Do guests mention street or late-night noise?",
            },
            {
              title: "Pickup",
              text: "Is there a clear meeting point for transfers and tours?",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-bold text-slate-900">
                {item.title}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          FINAL BOOKING CHECKLIST
      ===================================================== */}

      <div
        id="final-morocco-accommodation-booking-checklist"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Before Clicking Book
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Final Morocco Accommodation Booking Checklist
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Check
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Why It Matters
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Exact location
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Affects walking, transfers and sightseeing time
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Vehicle access
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Important for luggage and arrival
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Heating / cooling
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Important for seasonal comfort
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Meals
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Check breakfast and any included dinners
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Transfers
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Especially important for desert camps and medina stays
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Recent location reviews
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    Helps understand access, noise and surrounding area
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
          Good Accommodation Is About Location as Much as the Room
        </h3>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          A beautiful room is only one part of a comfortable stay. Before
          booking in Morocco, check where the property is located, how you will
          reach it, how your luggage will be handled and whether its facilities
          match the season. These small details can make your first Morocco
          trip much easier.
        </p>
      </div>
    </section>
  );
}
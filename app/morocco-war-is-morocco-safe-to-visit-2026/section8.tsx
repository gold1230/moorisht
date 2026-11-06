import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section8() {
  return (
    <section className="space-y-10 mt-10 sm:mt-12">
      {/* =====================================================
          TRAVEL TIPS FOR TOURISTS VISITING MOROCCO
      ===================================================== */}

      <div>
        <h2
          id="travel-tips-for-tourists-visiting-morocco"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Travel Tips for Tourists Visiting Morocco
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              Good preparation makes traveling in Morocco much easier.
            </strong>{" "}
            Plan your transportation, keep your belongings secure, understand
            basic local customs, choose reliable accommodation and tour
            providers, and allow enough time when traveling between cities and
            the Sahara Desert.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco offers travelers a very wide range of experiences within
            one country. You can explore the historic medinas of{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, walk through the
            blue streets of{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,
            cross the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            , spend time beside the Atlantic Ocean in{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, and
            experience the dunes around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
          </p>

          <p>
            For a first-time visitor, preparing a few details before arrival
            can make the journey much smoother. Know how you will travel from
            the airport to your accommodation, save the address of your riad
            or hotel, understand how you will move between cities, and check
            the approximate driving time for any long road journey.
          </p>

          <p>
            Travelers staying inside old medinas should remember that some
            accommodations cannot be reached directly by car. A riad deep
            inside the medina may require a short walk from the closest taxi
            point or gate. Asking the property for arrival instructions before
            traveling can save time and confusion.
          </p>

          <p>
            It is also useful to keep some Moroccan dirhams for smaller
            purchases, taxis, cafes, markets, and tips. Cards are accepted in
            many hotels, restaurants, and larger businesses, but cash can
            still be useful in smaller shops and rural areas.
          </p>

          <p>
            Travelers should take the same basic precautions they would use in
            other popular international destinations. Keep valuables secure in
            busy streets, watch bags and phones in crowded markets, avoid
            isolated areas when possible after dark, and be careful when
            accepting unsolicited guiding or transportation services.
          </p>

          <p>
            Visitors who prefer to have transportation and accommodation
            arranged in advance can also use a{" "}
            <Link
              href="/plan-your-morocco-tour"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              planned Morocco tour
            </Link>{" "}
            instead of organizing every transfer separately.
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="Travelers exploring Morocco with practical travel planning and local guidance"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          HOW TO TRAVEL SAFELY IN MOROCCO
      ===================================================== */}

      <div>
        <h3
          id="how-to-travel-safely-in-morocco"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          How to Travel Safely in Morocco
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Traveling safely in Morocco mainly comes down to good planning,
            awareness, and choosing reliable services. Different parts of a
            Morocco trip also require different types of preparation.
          </p>

          <p>
            In busy cities such as{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>, visitors
            should pay particular attention to their belongings in markets,
            public transportation, stations, and crowded tourist attractions.
          </p>

          <p>
            Petty crime such as pickpocketing and bag theft can occur in busy
            tourist areas. Keep your phone somewhere secure when you are not
            using it, avoid carrying more cash than necessary, and consider
            keeping your passport and backup payment method somewhere separate
            from your everyday wallet.
          </p>

          <p>
            Transportation also deserves some planning. Morocco has rail
            connections between several major cities, while buses, taxis,
            private transfers, and rental vehicles connect many other
            destinations.
          </p>

          <p>
            Routes toward southern Morocco are often much longer than new
            visitors expect. Traveling from Marrakech toward{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>,
            and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is best
            treated as a journey rather than simply a transfer from one hotel
            to another.
          </p>

          <p>
            A driver who knows the route can make these journeys easier, but
            travelers should still ask about driving times, vehicle type,
            stops, accommodation, and what is included before confirming a
            booking.
          </p>

          <p>
            If you are walking through a historic medina with a guide, use an
            authorized guide. In cities such as Marrakech and Fes, visitors may
            occasionally be approached by people presenting themselves as
            guides even though they are not officially authorized.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Protect Valuables
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Keep your phone, money, passport, and bags secure in crowded
              markets and stations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Plan Transportation
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Know how you will travel between your hotel, stations, airports,
              and next destination.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Avoid Quiet Areas
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Prefer busy and familiar streets, especially when walking after
              dark.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Use Authorized Guides
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              For formal medina tours, choose a guide with official
              authorization.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Avoid Demonstrations
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Do not join political gatherings or demonstrations and follow
              local instructions if one affects your route.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Keep Emergency Details
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Save accommodation, tour operator, insurer, and emergency contact
              information on your phone.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BEST SAFETY TIPS FOR FIRST-TIME VISITORS
      ===================================================== */}

      <div>
        <h3
          id="best-safety-tips-for-first-time-visitors"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Best Safety Tips for First-Time Visitors
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A first visit to Morocco can feel very different from traveling in
            Europe or North America. Medina streets can be busy, bargaining is
            common in traditional markets, languages may change throughout the
            day, and travel distances between regions can be surprisingly
            long.
          </p>

          <p>
            None of these things needs to make the trip difficult. Learning a
            few simple habits before you arrive can make the experience much
            more comfortable.
          </p>
        </div>

        <div className="mt-7 space-y-5">
          {/* TIP 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                1
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Save Your Accommodation Location
                </h4>

                <p className="mt-2 leading-7 text-slate-700">
                  Medina streets in Marrakech and Fes can be confusing. Save
                  your riad on your phone, take a screenshot of the location,
                  and ask the property which gate or landmark is closest.
                </p>
              </div>
            </div>
          </div>

          {/* TIP 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                2
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Download Offline Maps
                </h4>

                <p className="mt-2 leading-7 text-slate-700">
                  Offline maps can help when mobile service is weak or when you
                  do not yet have a Moroccan SIM card or eSIM. They are useful
                  in cities as well as on longer road journeys.
                </p>
              </div>
            </div>
          </div>

          {/* TIP 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                3
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Dress With Local Culture in Mind
                </h4>

                <p className="mt-2 leading-7 text-slate-700">
                  Morocco receives travelers with many different clothing
                  styles, but modest and comfortable clothing can be useful
                  when visiting traditional neighborhoods, rural communities,
                  and religious or cultural places.
                </p>
              </div>
            </div>
          </div>

          {/* TIP 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                4
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Drink Enough Water
                </h4>

                <p className="mt-2 leading-7 text-slate-700">
                  Heat can become intense during warmer months, particularly
                  around southern Morocco and the desert. Carry water and avoid
                  planning every outdoor activity during the hottest part of
                  the afternoon.
                </p>
              </div>
            </div>
          </div>

          {/* TIP 5 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                5
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Do Not Rush Long Desert Journeys
                </h4>

                <p className="mt-2 leading-7 text-slate-700">
                  Marrakech to Merzouga is a long road journey. A multi-day
                  route with stops around{" "}
                  <PlaceHoverCard place="ouarzazate">
                    Ouarzazate
                  </PlaceHoverCard>
                  ,{" "}
                  <PlaceHoverCard place="dades-valley">
                    Dades Valley
                  </PlaceHoverCard>
                  , or{" "}
                  <PlaceHoverCard place="todra-gorge">
                    Todra Gorge
                  </PlaceHoverCard>{" "}
                  is usually more comfortable than trying to rush directly to
                  the dunes.
                </p>
              </div>
            </div>
          </div>

          {/* TIP 6 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                6
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Use Reliable Transportation
                </h4>

                <p className="mt-2 leading-7 text-slate-700">
                  Ask your hotel, riad, or tour company about trusted transfers
                  when you are unsure about transportation, particularly for
                  airport arrivals or longer regional journeys.
                </p>
              </div>
            </div>
          </div>

          {/* TIP 7 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                7
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Get Suitable Travel Insurance
                </h4>

                <p className="mt-2 leading-7 text-slate-700">
                  Choose insurance that fits your itinerary and the activities
                  you plan to do, particularly hiking, desert excursions, road
                  travel, or other outdoor activities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Morocco emergency numbers
          </h4>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-4">
              <p className="font-bold text-slate-900">Police</p>
              <p className="mt-1 text-lg font-bold text-amber-700">190</p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <p className="font-bold text-slate-900">
                Ambulance / Fire
              </p>
              <p className="mt-1 text-lg font-bold text-amber-700">150</p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <p className="font-bold text-slate-900">Gendarmerie</p>
              <p className="mt-1 text-lg font-bold text-amber-700">177</p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          IMPORTANT THINGS TOURISTS SHOULD KNOW
      ===================================================== */}

      <div>
        <h3
          id="important-things-tourists-should-know-before-visiting-morocco"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Important Things Tourists Should Know Before Visiting Morocco
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco combines modern tourism with long-standing cultural and
            social traditions. Understanding a few things before arriving can
            help travelers avoid misunderstandings and enjoy a more respectful
            experience.
          </p>

          <p>
            Morocco&apos;s culture includes strong Amazigh, Arab, African,
            Andalusian, Mediterranean, and Islamic influences. These can be
            seen in architecture, languages, music, food, clothing, crafts,
            celebrations, and everyday life.
          </p>

          <p>
            A simple greeting can make interactions warmer. Arabic and Amazigh
            languages are widely spoken, while French is also commonly used in
            many tourism and business settings. English and Spanish can also
            be heard in different tourist regions.
          </p>

          <p>
            Traditional souks are another part of the travel experience.
            Prices in some artisan shops and markets may be negotiable.
            Bargaining is usually easier when it remains friendly and
            respectful. If you are not interested in buying something, a
            polite refusal is enough.
          </p>

          <p>
            Travelers should also remember that Moroccan laws and customs may
            differ from those in their home country. Respect signs and
            instructions around religious, government, political, and military
            sites.
          </p>

          <p>
            Photography also deserves attention. Ask before taking close-up
            photographs of people, and avoid photographing sensitive military
            or political sites.
          </p>

          <p>
            Anyone planning to bring a drone should research the rules before
            traveling. Flying a drone in Morocco requires prior authorization,
            and bringing or using one without the necessary permission can
            result in problems or confiscation.
          </p>

          <p>
            Finally, do not underestimate distances. A trip from Marrakech to{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is very
            different from a short transfer between neighboring cities.
            Multi-day routes allow travelers to visit places such as{" "}
            <PlaceHoverCard place="ait-ben-haddou">
              Ait Ben Haddou
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,
            and{" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
            without spending every day rushing through the country.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">
                    Before Visiting Morocco
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    What to Do
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-sm leading-6 text-slate-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Passport &amp; entry
                  </td>

                  <td className="px-5 py-4">
                    Check the requirements for your nationality before
                    departure.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Travel insurance
                  </td>

                  <td className="px-5 py-4">
                    Make sure your policy covers your route and planned
                    activities.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Accommodation
                  </td>

                  <td className="px-5 py-4">
                    Save the address and ask for medina arrival instructions if
                    staying in a riad.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Transportation
                  </td>

                  <td className="px-5 py-4">
                    Check travel times instead of estimating distance from the
                    map alone.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Clothing
                  </td>

                  <td className="px-5 py-4">
                    Pack comfortable clothing suitable for the weather and the
                    places you intend to visit.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Cash &amp; cards
                  </td>

                  <td className="px-5 py-4">
                    Keep more than one payment option and avoid carrying all
                    your money together.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Photography
                  </td>

                  <td className="px-5 py-4">
                    Ask people before photographing them and respect restricted
                    areas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          CHOOSING TRUSTED MOROCCO TOUR COMPANIES
      ===================================================== */}

      <div>
        <h3
          id="choosing-trusted-morocco-tour-companies"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Choosing Trusted Morocco Tour Companies
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Choosing a reliable tour company can make a major difference when
            your itinerary includes long road journeys, several hotels, guided
            visits, airport transfers, or a Sahara Desert experience.
          </p>

          <p>
            A trustworthy operator should explain the itinerary clearly before
            you book. You should know how many days the journey lasts, which
            destinations are included, the approximate driving time, the type
            of transportation, accommodation arrangements, meals, activities,
            and anything you will need to pay for separately.
          </p>

          <p>
            For example, a desert journey from{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> to{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> should
            make it clear where you will sleep, whether the camel experience is
            included, how you reach the desert camp, and where the trip ends.
          </p>

          <p>
            Communication before booking is also important. A professional
            operator should be able to answer practical questions about
            pickup, luggage, dietary requirements, accommodation, children,
            mobility needs, and itinerary changes.
          </p>

          <p>
            Reviews from previous travelers can provide useful information,
            but do not look only at the overall score. Read recent reviews and
            look for details about drivers, guides, communication,
            accommodation, vehicles, punctuality, and whether the actual trip
            matched what was promised.
          </p>

          <p>
            Price should also be clear. If one tour is much cheaper than
            another, compare what is actually included rather than assuming
            both companies provide the same service.
          </p>

          <p>
            A good tour company should also avoid rushing travelers through
            unrealistic itineraries. Morocco is a large country, and a route
            that looks short on a map can still involve many hours on mountain
            or regional roads.
          </p>

          <p>
            You can read our guide about{" "}
            <Link
              href="/exploring-trusted-casablanca-travel-agency/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              choosing a trusted Morocco travel agency
            </Link>{" "}
            if you want more details about what to check before booking.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Before paying for a Morocco tour, check these details
          </h4>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Complete itinerary and daily route",
              "Pickup and drop-off location",
              "Type of vehicle and transportation",
              "Accommodation type or hotel category",
              "Meals included in the price",
              "Camel or 4x4 desert activities",
              "Guide services included",
              "Entrance fees included or excluded",
              "Cancellation and change conditions",
              "Emergency contact during the trip",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-amber-100 bg-white p-4"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />

                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/plan-your-morocco-tour"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Plan Your Morocco Tour
          </Link>

          <Link
            href="/marrakech-desert-tours/"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
          >
            Explore Marrakech Desert Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
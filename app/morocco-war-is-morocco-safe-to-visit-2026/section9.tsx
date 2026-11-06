import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section9() {
  return (
    <section className="space-y-10 mt-10 sm:mt-12">
      {/* =====================================================
          WHY TRAVELERS FROM THE USA, UK, AND EUROPE
          CONTINUE VISITING MOROCCO
      ===================================================== */}

      <div>
        <h2
          id="why-travelers-from-the-usa-uk-and-europe-continue-visiting-morocco"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Why Travelers From the USA, UK, and Europe Continue Visiting Morocco
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              Morocco continues attracting international travelers because it
              combines culture, history, desert landscapes, mountains, beaches,
              food, and adventure in a single trip.
            </strong>{" "}
            Visitors can experience several very different parts of the
            country without needing to travel between multiple countries.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Travelers from the United States, the United Kingdom, Canada, and
            many European countries continue choosing Morocco for city breaks,
            cultural journeys, private tours, road trips, and Sahara Desert
            experiences.
          </p>

          <p>
            European markets remain especially important for Moroccan tourism.
            Official 2025 tourism figures showed strong growth from several
            major European markets, including the United Kingdom, France,
            Spain, Belgium, and Italy.
          </p>

          <p>
            One reason Morocco appeals to so many different travelers is the
            variety found within a relatively compact travel itinerary. A trip
            can begin among the souks and palaces of{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,
            continue through the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            , pass historic kasbahs and valleys, and finish among the dunes of{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>.
          </p>

          <p>
            Another itinerary might connect{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="meknes">Meknes</PlaceHoverCard> for a
            journey focused more strongly on cities, history, architecture, and
            traditional culture.
          </p>

          <p>
            Morocco also offers a wide range of accommodation. Travelers can
            stay in traditional riads inside historic medinas, modern hotels,
            family-run guesthouses, mountain properties, coastal resorts, and
            desert camps near Merzouga.
          </p>

          <p>
            Food is another major part of the travel experience. Tagines,
            couscous, bread, pastries, mint tea, local markets, street food,
            regional dishes, and family-style meals allow visitors to
            experience Moroccan culture beyond monuments and sightseeing.
          </p>

          <p>
            Travelers who prefer to have transportation, accommodation, and
            activities arranged before arrival can also choose a{" "}
            <Link
              href="/plan-your-morocco-tour"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              private Morocco tour
            </Link>{" "}
            built around their available days and preferred destinations.
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="International travelers exploring Morocco during a cultural and desert journey"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          MOROCCO TOURISM STATISTICS
      ===================================================== */}

      <div>
        <h3
          id="morocco-tourism-statistics"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Morocco Tourism Statistics
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Recent tourism numbers show the scale of international travel to
            Morocco. In 2025, the country recorded{" "}
            <strong className="font-bold">
              19.8 million tourist arrivals
            </strong>
            , representing growth of{" "}
            <strong className="font-bold">14% compared with 2024</strong>.
          </p>

          <p>
            This meant approximately 2.4 million more arrivals than the
            previous year and placed Morocco at a new annual tourism record.
          </p>

          <p>
            Morocco&apos;s Tourism Ministry also reported that, according to
            UN Tourism data, the country reached{" "}
            <strong className="font-bold">
              22nd place worldwide for international tourist arrivals in 2025
            </strong>
            .
          </p>

          <p>
            The growth was visible across several important European markets.
            Official figures for 2025 showed arrivals increasing from France,
            Spain, the United Kingdom, Belgium, and Italy.
          </p>

          <p>
            Accommodation activity also increased. Classified tourist
            accommodation establishments recorded{" "}
            <strong className="font-bold">
              43.4 million overnight stays in 2025
            </strong>
            , an increase of 9% compared with 2024.
          </p>

          <p>
            These numbers are useful because they give travelers more context
            than vague statements about Morocco being popular. The country has
            a large tourism industry serving millions of visitors through
            accommodation, transportation, attractions, restaurants, guides,
            and tour companies.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-3xl font-bold text-amber-700">
              19.8M
            </p>

            <p className="mt-2 font-bold text-slate-900">
              Tourist Arrivals
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recorded in Morocco during 2025.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-3xl font-bold text-amber-700">
              +14%
            </p>

            <p className="mt-2 font-bold text-slate-900">
              Annual Growth
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Increase in tourist arrivals compared with 2024.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-3xl font-bold text-amber-700">
              43.4M
            </p>

            <p className="mt-2 font-bold text-slate-900">
              Overnight Stays
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recorded in classified accommodation during 2025.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-3xl font-bold text-amber-700">
              22nd
            </p>

            <p className="mt-2 font-bold text-slate-900">
              Worldwide
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Morocco&apos;s 2025 ranking for international tourist arrivals.
            </p>
          </div>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">
                    European Market
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    2025 Growth
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-sm leading-6 text-slate-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    United Kingdom
                  </td>
                  <td className="px-5 py-4">+18%</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    France
                  </td>
                  <td className="px-5 py-4">+11%</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Spain
                  </td>
                  <td className="px-5 py-4">+12%</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Belgium
                  </td>
                  <td className="px-5 py-4">+10%</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Italy
                  </td>
                  <td className="px-5 py-4">+21%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          HOW MANY TOURISTS VISIT MOROCCO EACH YEAR?
      ===================================================== */}

      <div>
        <h3
          id="how-many-tourists-visit-morocco-each-year"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          How Many Tourists Visit Morocco Each Year?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The latest complete annual figure is{" "}
            <strong className="font-bold">
              19.8 million tourist arrivals in 2025
            </strong>
            . This was substantially higher than Morocco&apos;s pre-pandemic
            tourism levels and represented a new record for the country.
          </p>

          <p>
            Tourism growth has also continued into 2026. Morocco&apos;s
            Tourism Ministry reported that tourist arrivals increased by close
            to 7% during the first quarter of 2026 compared with the same
            period a year earlier.
          </p>

          <p>
            Travelers are not concentrated in one destination.{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> is one
            of the country&apos;s major tourism centers, but visitors also
            travel to{" "}
            <PlaceHoverCard place="agadir">Agadir</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="tangier">Tangier</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, and
            other regions.
          </p>

          <p>
            Some travelers come mainly for city tourism, while others build a
            longer itinerary connecting cultural destinations with mountains,
            valleys, beaches, and desert areas.
          </p>

          <p>
            This is why tourism numbers alone do not describe the whole
            experience. Morocco appeals to very different types of visitors,
            including couples, families, solo travelers, photographers,
            hikers, cultural travelers, luxury travelers, and people planning
            private road trips.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            2025 was a record tourism year
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Morocco welcomed 19.8 million tourists in 2025, around 2.4 million
            more than in 2024. The first-quarter figures for 2026 also showed
            continued growth in international arrivals.
          </p>
        </div>
      </div>

      {/* =====================================================
          WHY MOROCCO IS POPULAR FOR DESERT TOURS
      ===================================================== */}

      <div>
        <h3
          id="why-morocco-is-popular-for-desert-tours"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Why Morocco Is Popular for Desert Tours
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            One of Morocco&apos;s most recognizable travel experiences is a
            journey toward the Sahara landscapes around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            Merzouga sits beside{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>, a
            large field of sand dunes that attracts travelers interested in
            desert scenery, photography, camel rides, and overnight camps.
          </p>

          <p>
            The experience is popular partly because reaching the desert is
            itself a journey through several different landscapes. Travelers
            starting in{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> can
            cross the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            , pass through{" "}
            <PlaceHoverCard place="ait-ben-haddou">
              Ait Ben Haddou
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>,
            and continue toward{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>.
          </p>

          <p>
            Travelers starting in{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> follow a different
            route, commonly passing through the Middle Atlas,{" "}
            <PlaceHoverCard place="midelt">Midelt</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="ziz-valley">Ziz Valley</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> before
            arriving near the dunes.
          </p>

          <p>
            Once in Merzouga, experiences vary depending on the itinerary.
            Visitors may take a camel ride, travel across desert tracks by 4x4,
            watch sunset or sunrise, visit nearby communities, listen to local
            music, or stay overnight in a desert camp.
          </p>

          <p>
            Desert camps also range from simple accommodation to more
            comfortable tents with beds and private bathrooms. Travelers
            should check the exact facilities because the word
            &quot;luxury&quot; does not mean the same thing at every camp.
          </p>

          <p>
            If the Sahara is an important part of your trip, explore{" "}
            <Link
              href="/marrakech-desert-tours/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              Marrakech desert tours
            </Link>{" "}
            or{" "}
            <Link
              href="/morocco-fes-desert-tours/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              Fes desert tours
            </Link>{" "}
            to compare routes and overnight stops.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Sand Dunes
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Erg Chebbi gives visitors access to one of Morocco&apos;s
              best-known dune landscapes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Camel Experiences
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Many itineraries include a camel ride toward the dunes or desert
              camp.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Desert Camps
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Travelers can spend the night close to the dunes and experience
              the desert after sunset.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Scenic Road Trip
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              The journey connects mountains, valleys, kasbahs, villages, and
              desert landscapes.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          WHY MOROCCO IS A TOP DESTINATION FOR CULTURAL TRAVEL
      ===================================================== */}

      <div>
        <h3
          id="why-morocco-is-a-top-destination-for-cultural-travel"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Why Morocco Is a Top Destination for Cultural Travel
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco attracts cultural travelers because its heritage can be
            experienced not only inside museums and monuments but also through
            everyday life, architecture, food, crafts, music, markets, and
            traditional neighborhoods.
          </p>

          <p>
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> is especially
            important for travelers interested in historic urban culture. Its
            old medina contains traditional workshops, markets, religious and
            educational buildings, historic houses, fountains, and narrow
            streets that reflect centuries of city life.
          </p>

          <p>
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> offers
            a different cultural atmosphere, combining its historic medina,
            souks, gardens, palaces, food, public squares, and traditional
            riads with a large modern tourism industry.
          </p>

          <p>
            Imperial history can also be explored in{" "}
            <PlaceHoverCard place="meknes">Meknes</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>, while nearby{" "}
            <PlaceHoverCard place="volubilis">Volubilis</PlaceHoverCard> gives
            travelers a very different look at the region&apos;s ancient past.
          </p>

          <p>
            Southern Morocco offers another side of cultural travel.
            <PlaceHoverCard place="ait-ben-haddou">
              Ait Ben Haddou
            </PlaceHoverCard>{" "}
            is known for its earthen architecture and fortified settlement,
            while towns and villages along desert routes introduce travelers
            to local traditions, music, markets, agriculture, and ways of life
            shaped by the environment.
          </p>

          <p>
            Music also forms an important part of Morocco&apos;s cultural
            identity. Around{" "}
            <PlaceHoverCard place="khamlia">Khamlia</PlaceHoverCard> near
            Merzouga, travelers can encounter Gnawa musical traditions, while
            other regions have their own local styles and celebrations.
          </p>

          <p>
            Food provides another way to understand regional culture. A meal
            in Fes may feel very different from food served in a desert
            guesthouse, a mountain village, or beside the Atlantic coast.
            Tagines, couscous, breads, sweets, spices, olives, mint tea, fish,
            and regional dishes all become part of the journey.
          </p>

          <p>
            This combination of living traditions and historical places is one
            reason many visitors choose a longer itinerary rather than staying
            in only one city.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">
                    Destination
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Cultural Experience
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-sm leading-6 text-slate-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Fes
                  </td>

                  <td className="px-5 py-4">
                    Historic medina, traditional crafts, architecture, markets,
                    and religious heritage
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Marrakech
                  </td>

                  <td className="px-5 py-4">
                    Souks, riads, palaces, gardens, food, and public-square
                    culture
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Meknes &amp; Volubilis
                  </td>

                  <td className="px-5 py-4">
                    Imperial Moroccan history and ancient archaeological
                    heritage
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Ait Ben Haddou
                  </td>

                  <td className="px-5 py-4">
                    Earthen architecture and fortified settlement traditions
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Merzouga &amp; Khamlia
                  </td>

                  <td className="px-5 py-4">
                    Desert communities, music, local food, and Sahara
                    traditions
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Essaouira
                  </td>

                  <td className="px-5 py-4">
                    Atlantic history, medina culture, music, fishing, crafts,
                    and coastal food
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Morocco offers more than one type of travel experience
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            A well-planned itinerary can combine historic medinas, food,
            architecture, mountains, small communities, desert landscapes, and
            the Atlantic coast. This variety is one of the main reasons
            travelers from different countries continue adding Morocco to
            their travel plans.
          </p>

          <div className="mt-5">
            <Link
              href="/plan-your-morocco-tour"
              className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Plan Your Morocco Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section7() {
  return (
    <section className="space-y-10 mt-10 sm:mt-12">
      {/* =====================================================
          WHY MOROCCO REMAINS A MAJOR TOURISM DESTINATION
      ===================================================== */}

      <div>
        <h2
          id="why-morocco-remains-one-of-the-safest-destinations-in-africa"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Why Morocco Remains a Major Tourism Destination in Africa
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              Morocco continues to attract travelers in very large numbers.
            </strong>{" "}
            The country recorded{" "}
            <strong className="font-bold">19.8 million tourist arrivals in 2025</strong>,
            and tourism continued growing during the first part of 2026.
            This does not mean that Morocco has no travel risks, but it shows
            that the country has a large and active tourism sector used by
            millions of international visitors.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Travelers searching for phrases such as{" "}
            <strong className="font-bold">“Morocco war”</strong>,{" "}
            <strong className="font-bold">“Morocco travel safety”</strong>, or{" "}
            <strong className="font-bold">
              “Is Morocco safe for tourists?”
            </strong>{" "}
            sometimes find very different descriptions of the country online.
            Looking at actual tourism activity gives useful context.
          </p>

          <p>
            Morocco&apos;s Ministry of Tourism reported{" "}
            <strong className="font-bold">
              19.8 million tourist arrivals during 2025
            </strong>
            , an increase of 14% compared with 2024. Tourism growth also
            continued into 2026, showing that international travel to Morocco
            remains highly active.
          </p>

          <p>
            Visitors travel between very different destinations within the
            same country. Some explore the medinas and monuments of{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, while others
            visit{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,
            the Atlantic coast, the Atlas Mountains, or the desert landscapes
            around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
          </p>

          <p>
            Morocco also has an established tourism network that includes
            international airports, trains between major cities, highways,
            hotels, traditional riads, restaurants, guides, private drivers,
            tour companies, and organized excursions.
          </p>

          <p>
            At the same time, a strong tourism industry should not be
            interpreted as a guarantee that every trip is free of risk.
            Travelers should still protect their belongings in crowded areas,
            avoid demonstrations, use reliable services, and take additional
            care when traveling to remote regions.
          </p>

          <p>
            For most visitors, this combination of established tourism
            services, cultural attractions, varied landscapes, and easy access
            between major destinations is one reason Morocco remains an
            important international travel destination.
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="International travelers exploring Morocco during a cultural journey"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          MOROCCO POLITICAL STABILITY AND TOURISM
      ===================================================== */}

      <div>
        <h3
          id="morocco-political-stability-and-tourism"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Morocco Political Stability and Tourism
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco is a constitutional monarchy, and tourism development has
            been an important part of government economic planning. For
            travelers, the practical result can be seen in the large tourism
            network that connects the country&apos;s main destinations.
          </p>

          <p>
            Cities such as{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> receive
            international visitors throughout the year and have extensive
            accommodation, transportation, dining, and sightseeing services.
          </p>

          <p>
            The government&apos;s tourism roadmap for 2023–2026 has focused on
            areas including air connectivity, accommodation capacity,
            investment, the visitor experience, and the development of
            tourism products around the country.
          </p>

          <p>
            Travelers should still understand that political stability and
            personal travel safety are not exactly the same question.
            Demonstrations can occur, particularly in major cities, and
            official travel advice recommends avoiding political gatherings
            because they can sometimes become unpredictable.
          </p>

          <p>
            This means travelers do not need to treat everyday sightseeing in
            Marrakech or Fes as if they were entering a conflict zone, but
            they should still follow local developments and normal travel
            precautions.
          </p>

          <p>
            A well-planned itinerary also helps. Visitors who know where they
            are staying, how they will travel between destinations, and who
            provides each tour or transfer are usually better prepared than
            travelers arranging everything at the last minute.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Stability does not mean zero travel risk
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Morocco&apos;s tourism services continue operating across the
            country, but travelers should still consider personal security,
            demonstrations, road safety, weather, health, transportation, and
            the specific regions included in their itinerary.
          </p>
        </div>
      </div>

      {/* =====================================================
          MOROCCO'S STRONG TOURISM INDUSTRY
      ===================================================== */}

      <div>
        <h3
          id="moroccos-strong-tourism-industry"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Morocco&apos;s Strong Tourism Industry
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Tourism is a major economic activity in Morocco, and the country
            has developed experiences for many different types of travelers.
            Visitors can combine imperial cities, mountains, Atlantic beaches,
            small towns, traditional villages, and desert landscapes in the
            same journey.
          </p>

          <p>
            Cultural travelers often build their itinerary around{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="meknes">Meknes</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>. These cities
            offer historic medinas, architecture, markets, museums, religious
            monuments, food, and traditional crafts.
          </p>

          <p>
            Nature-focused itineraries can include the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="imlil">Imlil</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,
            {" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>,
            and Morocco&apos;s Atlantic coastline.
          </p>

          <p>
            Desert travel is another major part of the tourism offer.
            Travelers heading toward{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> can
            combine the{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
            dunes with overnight camps, camel experiences, 4x4 excursions, and
            road trips through southern Morocco.
          </p>

          <p>
            Accommodation also ranges widely. Travelers can sleep in modern
            hotels, traditional riads, guesthouses, kasbah-style properties,
            mountain lodges, resorts, or desert camps depending on their route
            and preferred level of comfort.
          </p>

          <p>
            Morocco&apos;s tourism industry also supports guides, drivers,
            restaurant workers, accommodation staff, craftspeople, transport
            providers, and many other businesses connected directly or
            indirectly with visitors.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-amber-700">19.8M</p>

            <p className="mt-2 font-bold text-slate-900">
              Tourist Arrivals
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Morocco recorded 19.8 million tourist arrivals in 2025.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-amber-700">+14%</p>

            <p className="mt-2 font-bold text-slate-900">
              Growth in 2025
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tourist arrivals increased by 14% compared with 2024.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-amber-700">22nd</p>

            <p className="mt-2 font-bold text-slate-900">
              International Arrivals
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Morocco ranked 22nd worldwide for international tourist arrivals
              in 2025 according to figures cited by the tourism ministry from
              UN Tourism.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-amber-700">+7%</p>

            <p className="mt-2 font-bold text-slate-900">
              Early 2026 Growth
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              International arrivals grew by nearly 7% in the first quarter of
              2026.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          SECURITY MEASURES FOR INTERNATIONAL VISITORS
      ===================================================== */}

      <div>
        <h3
          id="security-measures-for-international-visitors"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Security Measures for International Visitors
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Travelers may notice security personnel around airports, transport
            hubs, large hotels, major attractions, government buildings, and
            busy public areas. Some hotels and tourist sites also use private
            guards or controlled entrances.
          </p>

          <p>
            These measures are one part of the travel environment, but they
            should not lead visitors to ignore personal precautions. Crowded
            areas can still attract pickpockets and scams, while unfamiliar
            neighborhoods may require more care after dark.
          </p>

          <p>
            Transportation planning also matters. Morocco has train services
            connecting several major northern and central cities, while road
            transport is commonly used for destinations farther south and
            east.
          </p>

          <p>
            Travelers heading between{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> have
            several transportation options. Journeys toward places such as{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
            or{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> are
            more commonly completed by road.
          </p>

          <p>
            For remote journeys, a professional driver or established tour
            company can simplify navigation, overnight stops, luggage,
            accommodation, and activity arrangements. Travelers should still
            check exactly what the service includes before booking.
          </p>

          <p>
            Security measures are therefore most useful when combined with
            good personal planning rather than viewed as a guarantee that
            problems cannot occur.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">
                    Travel Situation
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Useful Approach
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-sm leading-6 text-slate-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Airports
                  </td>

                  <td className="px-5 py-4">
                    Keep travel documents secure and confirm transportation
                    before arrival.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Train stations
                  </td>

                  <td className="px-5 py-4">
                    Watch luggage and valuables in busy waiting areas.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Medinas
                  </td>

                  <td className="px-5 py-4">
                    Protect valuables and use authorized guides when needed.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Long road trips
                  </td>

                  <td className="px-5 py-4">
                    Allow realistic driving time and use a reliable vehicle and
                    driver.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Remote desert areas
                  </td>

                  <td className="px-5 py-4">
                    Use established accommodation and properly organized
                    excursions.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOROCCO'S HISTORY OF WELCOMING TRAVELERS
      ===================================================== */}

      <div>
        <h3
          id="moroccos-long-history-of-welcoming-travelers"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Morocco&apos;s Long History of Welcoming Travelers
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco has long been connected with movement between Africa,
            Europe, the Mediterranean, and trans-Saharan trade routes. Over
            centuries, merchants, scholars, craftspeople, pilgrims, and
            travelers contributed to the development of its cities and
            cultural traditions.
          </p>

          <p>
            That history can still be seen when walking through places such as{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="meknes">Meknes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="tangier">Tangier</PlaceHoverCard>.
            Architecture, food, music, languages, crafts, and local traditions
            reflect influences developed over many generations.
          </p>

          <p>
            Hospitality is also an important part of many Moroccan social
            traditions. Visitors may encounter mint tea, shared meals, local
            conversations, music, and family-run accommodation as part of
            their journey.
          </p>

          <p>
            Travelers should still remember that hospitality can vary from one
            person or business to another. It is better to appreciate friendly
            encounters naturally rather than expect every interaction to follow
            the same pattern.
          </p>

          <p>
            For many visitors, the combination of cultural heritage and direct
            interaction with local communities becomes as memorable as the
            monuments and landscapes themselves.
          </p>

          <p>
            A journey might begin in the busy streets of Marrakech, continue
            through the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            , stop in the valleys and kasbahs of southern Morocco, and finish
            among the dunes of{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>.
            Each region offers a different view of Moroccan life.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Why travelers continue choosing Morocco
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Morocco combines historic cities, mountain landscapes, Atlantic
            coastline, desert journeys, varied accommodation, food, crafts,
            and cultural experiences within one destination. Its large tourism
            sector makes these experiences accessible to travelers with very
            different interests and budgets.
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
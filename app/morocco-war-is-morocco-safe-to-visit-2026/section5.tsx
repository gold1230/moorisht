import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section5() {
  return (
    <section className="space-y-10 mt-10 sm:mt-12">
      {/* =====================================================
          IS IT SAFE TO TRAVEL TO MARRAKECH, FES,
          AND THE SAHARA DESERT?
      ===================================================== */}

      <div>
        <h2
          id="is-it-safe-to-travel-to-marrakech-fes-and-the-sahara-desert"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Is It Safe to Travel to Marrakech, Fes, and the Sahara Desert?
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              For most visitors:
            </strong>{" "}
            Marrakech, Fes, Casablanca, Rabat, and the popular desert area
            around Merzouga remain active tourism destinations. Travelers
            continue visiting these places in 2026, but normal precautions are
            still important, especially in crowded medinas, busy city centers,
            transportation areas, and remote landscapes.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Many travelers preparing for Morocco search questions such as{" "}
            <strong className="font-bold">
              “Is Morocco safe to visit?”
            </strong>
            ,{" "}
            <strong className="font-bold">
              “Is Marrakech safe for tourists?”
            </strong>{" "}
            or{" "}
            <strong className="font-bold">
              “Is it safe to travel to the Sahara Desert?”
            </strong>
            . These are sensible questions, especially for someone visiting
            North Africa for the first time.
          </p>

          <p>
            Morocco&apos;s most popular travel routes continue connecting
            destinations such as{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            Visitors use hotels, riads, trains, taxis, private transfers, local
            guides, restaurants, and organized tours throughout these areas.
          </p>

          <p>
            The risks a traveler is more likely to think about in these
            destinations are often practical travel issues rather than war.
            In large cities and busy medinas, this can include pickpocketing,
            tourist scams, unwanted approaches, becoming lost in complicated
            streets, traffic, or choosing unreliable transportation and
            services.
          </p>

          <p>
            In more remote areas, including mountain and desert journeys,
            travelers should think about longer driving distances, weather,
            road conditions, access to services, and the experience of the
            company or driver organizing the trip.
          </p>

          <p>
            Many first-time visitors therefore prefer a planned itinerary or
            private driver, particularly when combining several regions. This
            can make transportation easier and reduce the stress of arranging
            every transfer independently.
          </p>

          <p>
            Travelers heading toward the desert can also book organized{" "}
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
            that connect the imperial cities with the desert landscapes around
            Merzouga.
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="Photographer taking pictures in the sunny Merzouga desert during a journey through Morocco"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          SAFETY IN MOROCCO'S MAJOR TOURIST CITIES
      ===================================================== */}

      <div>
        <h3
          id="safety-in-moroccos-major-tourist-cities"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Safety in Morocco&apos;s Major Tourist Cities
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco&apos;s major cities have been receiving international
            visitors for decades.{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard> all have
            established accommodation, transportation, restaurants, guides,
            museums, and attractions serving travelers.
          </p>

          <p>
            The experience can be very different from one city to another.
            Marrakech is busy and tourism-focused, Fes has one of the most
            complicated historic medinas in the country, Casablanca feels like
            a large modern metropolitan city, while Rabat often has a quieter
            atmosphere around many of its main attractions.
          </p>

          <p>
            In heavily visited areas, travelers may see police or other
            security personnel around transport hubs, major monuments, public
            squares, hotels, or large events. However, visitors should not rely
            only on security presence and forget normal personal precautions.
          </p>

          <p>
            Crowded medinas and markets require particular attention. Keep
            phones, wallets, passports, and bags secure, especially when moving
            through narrow streets where many people are walking close
            together.
          </p>

          <p>
            Travelers should also be cautious when someone unexpectedly offers
            directions, guiding services, transportation, or help with an
            attraction. If you want a guide, using a properly authorized guide
            arranged through your accommodation or a trusted travel company
            can make the experience easier.
          </p>

          <p>
            At night, use extra care in quiet or unfamiliar streets. Ask your
            riad or hotel which route is easiest to use, especially if your
            accommodation is deep inside a medina.
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
                    Main Traveler Consideration
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Useful Precaution
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-sm leading-6 text-slate-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Marrakech
                  </td>

                  <td className="px-5 py-4">
                    Crowded souks, Jemaa el-Fnaa, busy tourist streets
                  </td>

                  <td className="px-5 py-4">
                    Keep valuables secure and be careful with unsolicited
                    offers
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Fes
                  </td>

                  <td className="px-5 py-4">
                    Large maze-like historic medina
                  </td>

                  <td className="px-5 py-4">
                    Save your accommodation location and consider an official
                    guide
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Casablanca
                  </td>

                  <td className="px-5 py-4">
                    Traffic and normal large-city travel concerns
                  </td>

                  <td className="px-5 py-4">
                    Use reliable transportation and stay aware in busy areas
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Rabat
                  </td>

                  <td className="px-5 py-4">
                    City sightseeing and transportation
                  </td>

                  <td className="px-5 py-4">
                    Use normal city precautions and secure valuables
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          SAFETY IN MARRAKECH FOR TOURISTS
      ===================================================== */}

      <div>
        <h3
          id="safety-in-marrakech-for-tourists"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Safety in Marrakech for Tourists
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> is one
            of Morocco&apos;s main tourism destinations. Travelers come for
            Jemaa el-Fnaa, the old medina, colorful souks, gardens, museums,
            historic buildings, restaurants, traditional riads, and easy
            access to day trips outside the city.
          </p>

          <p>
            The city can feel intense during a first visit because the medina
            is busy and full of movement. Motorbikes, pedestrians, market
            stalls, restaurants, guides, vendors, and visitors often share the
            same narrow streets.
          </p>

          <p>
            This atmosphere is part of Marrakech&apos;s character, but it also
            means travelers should pay attention to their surroundings. Keep
            your phone and wallet somewhere secure and avoid displaying large
            amounts of cash in crowded areas.
          </p>

          <p>
            Visitors may also encounter people offering directions or services.
            Some offers are genuine, while others may lead to requests for
            money. If you become lost, it can be easier to ask your riad,
            hotel, restaurant, shop staff, police, or an official guide for
            help.
          </p>

          <p>
            When staying inside the medina, ask your accommodation for a clear
            arrival point before you travel. Many riads are inside pedestrian
            streets where a taxi cannot stop directly at the entrance.
          </p>

          <p>
            At night, popular areas may remain lively, but travelers should
            still avoid unfamiliar quiet alleys when an easier and busier route
            is available.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Simple Marrakech safety tips
          </h4>

          <ul className="mt-4 space-y-3 text-[16px] leading-7 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Keep your phone, wallet, and passport secure in crowded souks.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Ask your accommodation for the easiest route back to your riad.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Agree on prices when a service does not have a clearly displayed
              fixed price.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Use an authorized guide when you want a guided medina tour.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Prefer busy, familiar routes when returning late in the evening.
            </li>
          </ul>
        </div>
      </div>

      {/* =====================================================
          SAFETY IN FES MEDINA
      ===================================================== */}

      <div>
        <h3
          id="safety-in-fes-medina"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Safety in Fes Medina
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> offers one of the
            most memorable cultural experiences in Morocco. Fes el-Bali, the
            historic medina, is recognized as a UNESCO World Heritage Site and
            contains narrow streets, traditional markets, workshops, religious
            buildings, fountains, historic houses, and centuries of Moroccan
            architecture.
          </p>

          <p>
            For many travelers, the biggest challenge in Fes is not conflict
            but navigation. The medina contains a complicated network of
            streets and alleys, and first-time visitors can easily become
            disoriented.
          </p>

          <p>
            A licensed local guide can be useful on your first full visit,
            especially if you want to understand the history behind the
            tanneries, madrasas, traditional crafts, old neighborhoods, and
            important monuments instead of simply walking through the streets.
          </p>

          <p>
            When exploring independently, save the name and location of your
            riad on your phone and ask the accommodation to explain nearby
            landmarks. Offline maps can also be useful, although some small
            medina streets may still be difficult to follow digitally.
          </p>

          <p>
            During busy periods, protect your personal belongings just as you
            would in other crowded historic districts. Be cautious with
            unofficial guides who approach you in the street and claim that
            roads, monuments, or attractions are closed.
          </p>

          <p>
            Many riads are hidden behind simple doors inside quiet alleys.
            Before arriving late at night, ask your accommodation whether they
            can arrange a pickup from the nearest accessible gate or taxi
            point.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            First time in Fes Medina?
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Ask your riad for the nearest medina gate, save its location, and
            arrange arrival assistance when necessary. This small step can make
            the first experience much easier, particularly when carrying
            luggage.
          </p>
        </div>
      </div>

      {/* =====================================================
          SAFETY IN CASABLANCA AND RABAT
      ===================================================== */}

      <div>
        <h3
          id="safety-in-casablanca-and-rabat"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Safety in Casablanca and Rabat
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard> offer a very
            different experience from Marrakech and Fes. Both are large urban
            destinations with modern neighborhoods, public transportation,
            hotels, restaurants, offices, historic areas, and Atlantic
            coastline.
          </p>

          <p>
            Casablanca is Morocco&apos;s largest city and an important business
            and transportation center. Many travelers begin or end their
            Morocco journey here because Mohammed V International Airport is
            nearby.
          </p>

          <p>
            One of the city&apos;s best-known attractions is the Hassan II
            Mosque, located beside the Atlantic Ocean. Visitors may also spend
            time along the Corniche, in central neighborhoods, restaurants,
            shopping areas, or use Casablanca as a starting point for travel
            elsewhere in Morocco.
          </p>

          <p>
            Because Casablanca is a large metropolitan city, travelers should
            use normal big-city precautions. Keep valuables secure, pay
            attention when crossing roads, use reliable transportation, and be
            more careful in unfamiliar quiet areas after dark.
          </p>

          <p>
            Rabat, Morocco&apos;s capital, has a different atmosphere. Popular
            attractions include the{" "}
            <PlaceHoverCard place="rabat">Kasbah of the Udayas</PlaceHoverCard>,
            Hassan Tower, the medina, gardens, museums, and coastal areas.
          </p>

          <p>
            Rabat and Casablanca are connected by frequent rail and road
            transport, making it possible to include both cities in the same
            itinerary. Travelers should still watch their belongings in
            stations and busy public areas, particularly when handling luggage.
          </p>

          <p>
            Neither city requires unusual travel behavior for most visitors.
            Good planning, reliable transportation, awareness of your
            surroundings, and normal precautions can make exploring both cities
            much easier.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Morocco city safety in simple words
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            The main tourism cities continue receiving visitors, but
            &quot;tourist destination&quot; does not mean &quot;zero
            risk.&quot; Protect your valuables, use reliable services, be
            careful in crowded places, avoid isolated streets when possible,
            and ask your hotel or riad for local advice when you are unsure.
          </p>
        </div>
      </div>
    </section>
  );
}
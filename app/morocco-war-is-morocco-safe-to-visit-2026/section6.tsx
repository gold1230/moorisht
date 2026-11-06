import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section6() {
  return (
    <section className="space-y-10 mt-10 sm:mt-12">
      {/* =====================================================
          IS THE SAHARA DESERT SAFE FOR TRAVELERS?
      ===================================================== */}

      <div>
        <h2
          id="is-the-sahara-desert-safe-for-travelers"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Is the Sahara Desert Safe for Travelers?
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              For most visitors:
            </strong>{" "}
            the desert experience around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard> is
            an established part of Morocco&apos;s tourism industry. Travelers
            regularly visit the dunes on organized tours, but the Sahara is
            still a remote environment where good transportation, weather
            awareness, reliable accommodation, and an experienced operator are
            important.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The Sahara Desert is one of the experiences many travelers remember
            most from a journey through Morocco. Large sand dunes, open
            landscapes, quiet evenings, sunset views, and clear night skies
            create an atmosphere that feels completely different from the busy
            streets of Marrakech or Fes.
          </p>

          <p>
            For international visitors, the best-known desert destination in
            this part of Morocco is{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, a
            village beside the{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
            dunes. Tourism services around the village include hotels,
            guesthouses, desert camps, camel experiences, 4x4 excursions, and
            guided visits to nearby communities.
          </p>

          <p>
            Many visitors reach Merzouga as part of an organized journey from{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> or{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>. These journeys
            often take several days because the distances are long and there
            are many interesting stops along the way.
          </p>

          <p>
            From Marrakech, the route can cross the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            , pass{" "}
            <PlaceHoverCard place="ait-ben-haddou">
              Ait Ben Haddou
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>,
            and continue through{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>.
            From Fes, travelers commonly pass through the Middle Atlas,{" "}
            <PlaceHoverCard place="midelt">Midelt</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="ziz-valley">Ziz Valley</PlaceHoverCard>{" "}
            before reaching the desert.
          </p>

          <p>
            The main safety considerations are therefore practical ones:
            choosing a reliable driver, allowing enough time for the journey,
            staying hydrated, protecting yourself from strong sun, preparing
            for temperature changes, and using established accommodation or
            camps rather than traveling into isolated desert areas without
            preparation.
          </p>

          <p>
            Current U.S. travel guidance specifically advises travelers to
            remain aware in remote areas and, when camping, to use guarded
            campgrounds instead of isolated locations. This is especially
            relevant for independent travelers considering camping away from
            established desert tourism areas.
          </p>

          <p>
            Travelers who want the experience organized in advance can explore{" "}
            <Link
              href="/marrakech-desert-tours/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              desert tours from Marrakech
            </Link>{" "}
            or{" "}
            <Link
              href="/morocco-fes-desert-tours/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              desert tours from Fes
            </Link>
            .
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="Photographer taking pictures in the sunny Merzouga desert during a journey in Morocco"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          SAFETY OF MERZOUGA DESERT TOURS
      ===================================================== */}

      <div>
        <h3
          id="safety-of-merzouga-desert-tours"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Safety of Merzouga Desert Tours
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is one
            of Morocco&apos;s main gateways to a classic Sahara experience.
            The village sits close to the Erg Chebbi dune field and has a
            tourism economy built around desert accommodation, excursions,
            transportation, and cultural activities.
          </p>

          <p>
            A typical Merzouga experience may include a camel ride toward the
            dunes, sunset or sunrise viewing, a 4x4 excursion, an overnight
            desert camp, local music, and stops in surrounding villages.
            Travelers can choose anything from a short desert visit to a
            multi-day journey connecting Merzouga with other parts of Morocco.
          </p>

          <p>
            Road travel is one of the most important things to consider.
            Marrakech to Merzouga is a long journey, which is why many tours
            divide the route across several days instead of trying to reach the
            dunes in a single rushed drive.
          </p>

          <p>
            Stops around{" "}
            <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,
            {" "}
            <PlaceHoverCard place="tinghir">Tinghir</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
            can make the journey more comfortable while also allowing
            travelers to see more of southern Morocco.
          </p>

          <p>
            Travelers coming from Fes may stop in{" "}
            <PlaceHoverCard place="ifrane">Ifrane</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="midelt">Midelt</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="ziz-valley">Ziz Valley</PlaceHoverCard>, or{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> before
            reaching Merzouga.
          </p>

          <p>
            A private driver or organized tour can make these long routes
            simpler, but travelers should still ask practical questions before
            booking. Find out what type of vehicle will be used, how long the
            driving days are, what accommodation is included, whether the
            camel or 4x4 activity is included, and who to contact if plans
            change.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">
                    Before Your Desert Tour
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    What to Check
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-sm leading-6 text-slate-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Transportation
                  </td>

                  <td className="px-5 py-4">
                    Vehicle type, driver, daily driving time, and pickup point
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Desert transfer
                  </td>

                  <td className="px-5 py-4">
                    Whether the camp is reached by camel, 4x4, or both
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Accommodation
                  </td>

                  <td className="px-5 py-4">
                    Camp type, room or tent arrangement, bathroom, bedding, and
                    meals
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Weather
                  </td>

                  <td className="px-5 py-4">
                    Expected daytime heat, nighttime temperature, wind, and
                    seasonal conditions
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Communication
                  </td>

                  <td className="px-5 py-4">
                    Operator contact number and arrangements if the itinerary
                    changes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Do not rush the road to Merzouga
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            The desert is part of the experience, but so is the journey. A
            route with realistic driving times and overnight stops is usually
            more comfortable than trying to cover very long distances as
            quickly as possible.
          </p>
        </div>
      </div>

      {/* =====================================================
          SECURITY IN DESERT CAMPS
      ===================================================== */}

      <div>
        <h3
          id="security-in-desert-camps"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Security in Desert Camps
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Spending a night in a desert camp is one of the best-known
            experiences around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            Travelers leave the village or hotel area and continue toward the
            dunes, often by camel, 4x4 vehicle, or a combination of the two.
          </p>

          <p>
            Established camps normally have staff on site to prepare meals,
            organize activities, manage tents, and help guests during the
            evening and morning. Depending on the camp, accommodation can range
            from simple shared facilities to private tents with beds and
            private bathrooms.
          </p>

          <p>
            The word <strong className="font-bold">“luxury”</strong> can mean
            different things from one camp to another, so travelers should
            check the exact facilities rather than relying only on the name.
            Ask whether bathrooms are private or shared, whether hot water is
            available, how tents are heated or ventilated, and what bedding is
            provided.
          </p>

          <p>
            Temperatures also deserve attention. Desert days can be very warm,
            while nights can become much cooler, particularly during the
            colder months. Camps do not all have the same heating, cooling, or
            electricity arrangements.
          </p>

          <p>
            Families, older travelers, or visitors with mobility concerns
            should also ask how far the camp is from the vehicle drop-off
            point, how long the camel ride lasts, and whether a 4x4 transfer
            can be arranged instead.
          </p>

          <p>
            If you are traveling independently, an established camp is
            generally a more sensible choice than setting up alone in an
            isolated part of the desert. Organized camps provide staff,
            transportation arrangements, known access routes, and a point of
            contact if assistance is required.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Bathroom
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Ask whether it is private, shared, and located inside or outside
              your tent.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Temperature
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Confirm bedding, heating, ventilation, or cooling arrangements
              for your travel season.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Transportation
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Confirm whether the transfer is by camel, 4x4, or another
              vehicle.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Meals
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Check whether dinner and breakfast are included and tell the camp
              about dietary needs in advance.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Staff
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Choose an established camp with staff present during your stay.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">
              Communication
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Keep the operator&apos;s contact information available before
              leaving for the camp.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          TRAVELING WITH LOCAL GUIDES IN MOROCCO
      ===================================================== */}

      <div>
        <h3
          id="traveling-with-local-guides-in-morocco"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Traveling With Local Guides in Morocco
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A knowledgeable local guide can add much more than directions to a
            Morocco trip. Guides can explain history, architecture, traditions,
            crafts, food, and local customs while helping visitors understand
            places that may otherwise be difficult to explore independently.
          </p>

          <p>
            In the historic medinas of{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, a licensed guide
            can be especially useful. The streets can be complicated, and a
            guide can introduce important monuments, artisan workshops, local
            neighborhoods, and historical details while helping visitors
            follow a logical route.
          </p>

          <p>
            If you hire a guide in a medina, use an authorized guide rather
            than someone who simply approaches you in the street. Current UK
            travel guidance specifically recommends checking that guides in
            historic districts have an official badge and local permission.
          </p>

          <p>
            For a desert journey, the role can be different. An experienced
            driver or desert guide understands long-distance routes, fuel and
            rest stops, weather conditions, camp access, and the practical
            details of traveling through remote parts of southern Morocco.
          </p>

          <p>
            Drivers traveling toward Merzouga may pass places such as{" "}
            <PlaceHoverCard place="skoura">Skoura</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rose-valley">Rose Valley</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="tinghir">Tinghir</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>.
            Experienced operators can organize these stops without making the
            route feel rushed.
          </p>

          <p>
            Around Merzouga, local experiences can also include visits toward{" "}
            <PlaceHoverCard place="khamlia">Khamlia</PlaceHoverCard>, dune
            excursions, local markets, and surrounding desert landscapes.
            These activities are more meaningful when travelers understand the
            people and communities connected to the region rather than viewing
            the desert only as a place for photographs.
          </p>

          <p>
            Choosing a guide or tour company does not guarantee that nothing
            can go wrong, but good organization can make transportation,
            navigation, accommodation, and communication much easier,
            especially for first-time visitors.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            What to check before choosing a guide or desert operator
          </h4>

          <ul className="mt-4 space-y-3 text-[16px] leading-7 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Ask exactly what transportation and activities are included.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Confirm the names or types of accommodations before paying.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Check the expected driving time for each day.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Ask how the company handles itinerary changes or emergencies.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Use an authorized guide when booking a formal guided medina
              visit.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Keep the operator&apos;s phone number available during the trip.
            </li>
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/erfoud-sahara-tours-4x4-desert-vehicles/"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Explore Sahara 4x4 Tours
          </Link>

          <Link
            href="/tour/3-days-from-errachidia-to-merzouga/"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
          >
            Desert Tours From Errachidia
          </Link>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section4() {
  return (
    <section className="space-y-10 mt-10 sm:mt-12">
      {/* =====================================================
          UNDERSTANDING THE WESTERN SAHARA CONFLICT
      ===================================================== */}

      <div>
        <h2
          id="understanding-the-western-sahara-conflict-and-morocco"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Understanding the Western Sahara Conflict and Morocco
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              Important for travelers:
            </strong>{" "}
            Western Sahara has a different political and security situation
            from Morocco&apos;s main tourism circuit. There have been
            low-intensity hostilities in parts of the territory since the
            1991 ceasefire broke down in 2020, and travelers should check
            specific official warnings before considering travel there.
            These conditions should not automatically be applied to popular
            destinations such as Marrakech, Fes, Chefchaouen, Essaouira, or
            Merzouga.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            When travelers search for{" "}
            <strong className="font-bold">“Morocco war”</strong> or ask{" "}
            <strong className="font-bold">
              “Is Morocco safe to visit?”
            </strong>
            , they often discover articles about Western Sahara. Without
            understanding the geography and political background, it can be
            easy to assume that the same security situation applies throughout
            Morocco.
          </p>

          <p>
            Western Sahara is a disputed territory on the Atlantic side of
            northwest Africa. The United Nations continues to list Western
            Sahara as a{" "}
            <strong className="font-bold">Non-Self-Governing Territory</strong>,
            and its final political status remains unresolved.
          </p>

          <p>
            Most of Western Sahara is administered by Morocco, while territory
            east of the Berm is controlled by the Polisario Front. The Berm is
            a long militarized boundary separating the two sides.
          </p>

          <p>
            This situation is geographically different from the routes followed
            by many first-time visitors to Morocco. A typical itinerary may
            include{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            These destinations should not be confused with the sensitive areas
            around the Western Sahara Berm.
          </p>

          <p>
            One particularly common misunderstanding involves the word{" "}
            <strong className="font-bold">“Sahara.”</strong> The Sahara Desert
            is enormous and stretches across several countries and regions.
            The famous dunes at{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
            beside{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> are not
            located in Western Sahara.
          </p>

          <p>
            This means a traveler booking a{" "}
            <Link
              href="/marrakech-desert-tours/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              desert tour from Marrakech
            </Link>{" "}
            to Merzouga should not assume that warnings concerning the Western
            Sahara Berm describe the destination they are visiting.
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="Morocco travel route through popular destinations away from sensitive Western Sahara border areas"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          WHAT IS THE WESTERN SAHARA CONFLICT?
      ===================================================== */}

      <div>
        <h3
          id="what-is-the-western-sahara-conflict"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          What Is the Western Sahara Conflict?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The Western Sahara conflict is a long-running dispute over the
            political status of Western Sahara, a territory that was formerly
            administered by Spain.
          </p>

          <p>
            Spain ended its colonial administration in the 1970s. Morocco
            asserts sovereignty over Western Sahara, while the Polisario Front
            seeks independence for the territory. The dispute has remained the
            subject of United Nations involvement and international diplomacy
            for decades.
          </p>

          <p>
            In 1991, the United Nations established the{" "}
            <strong className="font-bold">
              United Nations Mission for the Referendum in Western Sahara
              (MINURSO)
            </strong>{" "}
            following settlement proposals and a ceasefire between Morocco and
            the Polisario Front.
          </p>

          <p>
            That ceasefire did not continue indefinitely. According to the
            United Nations and current UK travel advice, the ceasefire{" "}
            <strong className="font-bold">broke down in 2020</strong>. Since
            then, low-intensity hostilities and irregular skirmishes have
            continued in parts of the territory.
          </p>

          <p>
            MINURSO remains present in Western Sahara. The United Nations says
            its mission continues monitoring and reporting on developments,
            working to reduce tensions and calling for an end to hostilities.
          </p>

          <p>
            For travelers, the most important point is that the dispute is not
            accurately explained as either a nationwide Moroccan war or as a
            completely inactive historical issue. It is a continuing political
            dispute with security implications in specific areas of Western
            Sahara.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">
                    Topic
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    What Travelers Should Understand
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-sm leading-6 text-slate-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Western Sahara
                  </td>

                  <td className="px-5 py-4">
                    A disputed territory whose final political status remains
                    unresolved.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Morocco
                  </td>

                  <td className="px-5 py-4">
                    Administers most of Western Sahara and claims sovereignty
                    over the territory.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Polisario Front
                  </td>

                  <td className="px-5 py-4">
                    Seeks independence for Western Sahara and controls
                    territory east of the Berm.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    The Berm
                  </td>

                  <td className="px-5 py-4">
                    A militarized boundary separating Moroccan-administered
                    territory from areas controlled by the Polisario Front.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    1991 ceasefire
                  </td>

                  <td className="px-5 py-4">
                    Established in connection with the UN settlement process
                    but broke down in 2020.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Current situation
                  </td>

                  <td className="px-5 py-4">
                    Low-intensity hostilities continue, and official travel
                    warnings apply to particular areas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          IS WESTERN SAHARA A WAR ZONE?
      ===================================================== */}

      <div>
        <h3
          id="is-western-sahara-a-war-zone"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Is Western Sahara a War Zone?
        </h3>

        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              The situation is more complicated than a simple yes or no.
            </strong>{" "}
            Western Sahara is not experiencing the same level of fighting in
            every part of the territory, but armed hostilities have occurred
            since the 2020 breakdown of the ceasefire, and governments warn
            travelers against entering particular areas.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Current UK travel advice states that irregular skirmishes continue
            between Morocco and the Polisario Front and that these incidents
            have sometimes resulted in civilian casualties.
          </p>

          <p>
            The UK Foreign, Commonwealth &amp; Development Office currently
            advises against{" "}
            <strong className="font-bold">all travel</strong> to areas in
            Western Sahara within 40 kilometers north and west of the Berm,
            including Es Semara, as well as territory south and east of the
            Berm.
          </p>

          <p>
            The advisory also notes that cross-border rocket fire has occurred
            and cannot be ruled out in the future.
          </p>

          <p>
            Another concern in parts of the territory is unexploded ordnance
            and landmines. This is one reason travelers should not treat remote
            desert areas as suitable for spontaneous off-road exploration.
          </p>

          <p>
            At the same time, it would be misleading to suggest that the whole
            territory experiences continuous large-scale fighting. Conditions
            vary considerably by location.
          </p>

          <p>
            The safest approach is therefore to avoid broad descriptions and
            check the exact location against current government travel advice
            before planning any journey into Western Sahara.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Do not confuse Western Sahara with Merzouga
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Travelers searching for a &quot;Sahara desert tour&quot; are often
            planning to visit{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>.
            These destinations are geographically separate from Western
            Sahara and should not be treated as the same area when reading
            travel warnings.
          </p>
        </div>
      </div>

      {/* =====================================================
          DOES WESTERN SAHARA AFFECT MOROCCO TOURISM?
      ===================================================== */}

      <div>
        <h3
          id="does-the-western-sahara-conflict-affect-morocco-tourism"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Does the Western Sahara Conflict Affect Morocco Tourism?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            For travelers following Morocco&apos;s most common tourist routes,
            the Western Sahara dispute usually does not place them close to the
            locations covered by the strongest Western Sahara travel warnings.
          </p>

          <p>
            Popular itineraries frequently connect{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
          </p>

          <p>
            Desert itineraries between Marrakech and Merzouga also commonly
            include{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="ait-ben-haddou">
              Ait Ben Haddou
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,
            and{" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>.
          </p>

          <p>
            Those routes are different from travel through sensitive areas
            around the Western Sahara Berm. Therefore, a warning about the
            Berm should not automatically be interpreted as a warning against
            every Morocco desert itinerary.
          </p>

          <p>
            Tourism elsewhere in Morocco remains active. The country recorded
            millions of international arrivals in recent years, and its
            tourism infrastructure includes airports, train services, hotels,
            riads, guides, transport companies, museums, restaurants, and
            organized excursions.
          </p>

          <p>
            However, high tourism numbers are not evidence that every area is
            free of risk. Visitors should still check current travel guidance,
            especially if planning to travel far beyond established tourist
            routes.
          </p>

          <p>
            Travelers interested in the classic Sahara experience can explore
            organized{" "}
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
            </Link>{" "}
            that travel toward Merzouga rather than assuming Western Sahara is
            required for a Sahara experience.
          </p>
        </div>
      </div>

      {/* =====================================================
          CAN TOURISTS TRAVEL SAFELY AROUND MOROCCO?
      ===================================================== */}

      <div>
        <h3
          id="can-tourists-travel-safely-around-morocco"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Can Tourists Travel Safely Around Morocco?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Tourists continue to travel throughout Morocco, but safe travel
            depends on using normal precautions and understanding that risks
            can vary by destination.
          </p>

          <p>
            The U.S. State Department currently places Morocco at{" "}
            <strong className="font-bold">
              Level 2: Exercise Increased Caution
            </strong>{" "}
            because of terrorism risk. It advises travelers to remain alert in
            tourist locations and aware of their surroundings.
          </p>

          <p>
            It also notes that Morocco&apos;s tourism industry is generally
            regulated in major tourist areas such as Marrakech, Tangier, Fes,
            Casablanca, Rabat, Essaouira, and Agadir. In more remote locations,
            tourism services and safety inspections may be less developed.
          </p>

          <p>
            This makes planning especially important for travelers heading
            into mountains, isolated desert areas, or locations far from major
            cities. A reliable driver or experienced local guide can simplify
            transportation and help travelers avoid unsuitable routes, but
            using a guide does not remove every travel risk.
          </p>

          <p>
            Visitors traveling through the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,
            {" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>,
            or the desert around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> should
            also think about road conditions, weather, driving distances,
            access to medical care, and communication in remote places.
          </p>

          <p>
            In cities and medinas, different precautions are more relevant.
            Keep valuables secure, pay attention in crowded souks, avoid
            demonstrations, use legitimate transportation, and be cautious
            with unsolicited offers.
          </p>

          <p>
            Travelers who prefer additional support can book through an
            established local operator. Our guide to{" "}
            <Link
              href="/exploring-trusted-casablanca-travel-agency/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              choosing a trusted Morocco tour company
            </Link>{" "}
            explains some of the things to check before booking.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">
              Main Morocco Tourism Routes
            </h4>

            <p className="mt-3 leading-7 text-slate-700">
              Follow normal travel precautions, protect belongings, avoid
              demonstrations, and stay informed about current conditions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">
              Western Sahara &amp; Remote Border Areas
            </h4>

            <p className="mt-3 leading-7 text-slate-700">
              Check location-specific government advice before traveling.
              Some areas are subject to explicit warnings against all travel.
            </p>
          </div>
        </div>

        {/* =====================================================
            OFFICIAL TRAVEL INFORMATION
        ===================================================== */}

        <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-xl font-bold text-slate-900">
            Check Official Advice Before Traveling
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Security conditions can change. This is particularly important if
            your itinerary goes beyond Morocco&apos;s main tourist routes or
            enters Western Sahara. Check current government advice shortly
            before departure rather than relying on an old article or social
            media post.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://peacekeeping.un.org/en/mission/minurso"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              UN MINURSO Information
            </a>

            <a
              href="https://www.gov.uk/foreign-travel-advice/western-sahara"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100"
            >
              UK Western Sahara Advice
            </a>

            <a
              href="https://travel.state.gov/en/international-travel/travel-advisories/morocco.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100"
            >
              U.S. Morocco Advisory
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section3() {
  return (
    <section className="space-y-10 mt-10 sm:mt-12">
      {/* =====================================================
          DOES THE MOROCCO WAR AFFECT TOURISM?
      ===================================================== */}

      <div>
        <h2
          id="does-the-morocco-war-affect-tourism-in-morocco"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Does the Morocco War Affect Tourism in Morocco?
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              The short answer:
            </strong>{" "}
            Morocco&apos;s main tourist destinations are not experiencing an
            active war, and tourism continues across the country. However,
            travelers should distinguish normal Morocco tourism routes from
            the separate political and security situation in parts of Western
            Sahara.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Many travelers search online for{" "}
            <strong className="font-bold">“Morocco war”</strong>,{" "}
            <strong className="font-bold">“war in Morocco”</strong>, or{" "}
            <strong className="font-bold">
              “Is Morocco safe to visit?”
            </strong>{" "}
            before booking flights, hotels, and tours. This is understandable.
            Travelers naturally want to know whether political or regional
            conflicts could affect their holiday.
          </p>

          <p>
            For most visitors following the common tourism circuit, daily
            travel continues in destinations such as{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            Hotels, riads, attractions, restaurants, transportation services,
            and tour companies continue serving international visitors.
          </p>

          <p>
            Confusion often comes from news about{" "}
            <strong className="font-bold">Western Sahara</strong>. Western
            Sahara is a disputed territory with a separate political and
            security situation. UK travel advice currently warns against
            travel to particular areas close to and east of the Berm, the
            militarized boundary in Western Sahara.
          </p>

          <p>
            This is important because travelers sometimes hear the words
            &quot;Sahara&quot; and &quot;Western Sahara&quot; and assume they
            refer to the same tourism area. They do not. The famous{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
            dunes beside{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, where
            many Morocco desert tours operate, are geographically separate
            from Western Sahara.
          </p>

          <p>
            Regional tensions therefore should not automatically be interpreted
            as meaning that Marrakech, Fes, Merzouga, or Morocco&apos;s other
            major tourism destinations are experiencing war. Travelers should
            look at the exact location mentioned in any warning rather than
            applying it to the entire country.
          </p>

          <p>
            At the same time, Morocco should not be described as completely
            risk-free. The current U.S. travel advisory recommends{" "}
            <strong className="font-bold">increased caution</strong> because of
            terrorism risk. Travelers should also take precautions against
            petty crime, avoid demonstrations, and keep informed about local
            developments.
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="Travelers exploring Morocco on an organized journey between popular tourist destinations"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          IS TOURISM IN MOROCCO STILL OPEN?
      ===================================================== */}

      <div>
        <h3
          id="is-tourism-in-morocco-still-open"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Is Tourism in Morocco Still Open?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <strong className="font-bold">
              Yes, Morocco remains open to international tourism in 2026.
            </strong>{" "}
            Travelers continue entering the country for holidays, cultural
            journeys, city breaks, mountain adventures, coastal trips, and
            Sahara desert experiences.
          </p>

          <p>
            Current UK entry guidance, for example, continues to provide
            normal tourism entry requirements for eligible British travelers,
            including visa-free visits of up to 90 days. Entry rules depend on
            nationality, so every visitor should check the requirements that
            apply to their own passport before traveling.
          </p>

          <p>
            Morocco has a large tourism infrastructure connecting its major
            destinations. Travelers can begin in{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard> or{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,
            travel north toward{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,
            or travel south and east through the Atlas Mountains toward the
            desert.
          </p>

          <p>
            Cultural tourism also remains an important part of a Morocco trip.
            Visitors can explore medinas, historic monuments, artisan
            workshops, markets, museums, restaurants, and traditional riads.
            Travelers interested in nature can combine these cities with the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,
            and the Sahara landscapes around Merzouga.
          </p>

          <p>
            Being &quot;open for tourism&quot; does not mean travelers should
            stop checking current information. Entry requirements, airline
            schedules, weather conditions, demonstrations, or local events can
            change. It is always sensible to check your airline, accommodation,
            tour provider, and government travel advice shortly before
            departure.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">Hotels &amp; Riads</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Accommodation continues operating across Morocco&apos;s main
              tourist destinations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">City Tourism</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Marrakech, Fes, Rabat, Casablanca, Chefchaouen, and other cities
              continue receiving visitors.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">Desert Trips</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tours to Merzouga and Erg Chebbi remain a major part of
              Morocco&apos;s tourism offering.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">Air Travel</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Morocco remains connected with domestic and international air
              routes.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          ARE FLIGHTS TO MOROCCO OPERATING NORMALLY?
      ===================================================== */}

      <div>
        <h3
          id="are-flights-to-morocco-operating-normally"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Are Flights to Morocco Operating Normally?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            International air travel to Morocco remains active in 2026.
            Morocco&apos;s airports continue handling domestic and
            international passengers, and the national airport authority,
            ONDA, continues publishing monthly air traffic statistics.
          </p>

          <p>
            Royal Air Maroc also currently lists a large international network
            connecting Morocco with destinations across Europe, Africa, North
            America, South America, the Middle East, and Asia. Its domestic
            network connects many Moroccan cities as well.
          </p>

          <p>
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard> is
            an important international gateway through Mohammed V
            International Airport, while{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="tangier">Tangier</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="agadir">Agadir</PlaceHoverCard>, and other
            destinations also receive international services.
          </p>

          <p>
            Travelers from the United States, Canada, the United Kingdom, and
            European countries have several possible ways to reach Morocco,
            depending on their departure city and airline. Some journeys are
            direct, while others connect through another airport.
          </p>

          <p>
            However, saying that air travel is operating does not mean every
            individual flight is guaranteed to depart as scheduled. Airlines
            can change routes, frequencies, departure times, or cancel flights
            for operational, weather, security, or commercial reasons.
          </p>

          <p>
            Before leaving for the airport, check your specific flight directly
            with the airline rather than relying on general information about
            Morocco&apos;s aviation network.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Before flying to Morocco
          </h4>

          <ul className="mt-4 space-y-3 text-[16px] leading-7 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Check your airline&apos;s latest flight status.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Confirm passport and visa requirements for your nationality.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Check airport transfer arrangements before arrival.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              Review current government travel advice close to your departure
              date.
            </li>
          </ul>
        </div>
      </div>

      {/* =====================================================
          ARE MOROCCO DESERT TOURS STILL RUNNING?
      ===================================================== */}

      <div>
        <h3
          id="are-morocco-desert-tours-still-running"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Are Morocco Desert Tours Still Running?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <strong className="font-bold">
              Yes, desert tourism remains an important part of travel in
              Morocco.
            </strong>{" "}
            Tour companies continue offering journeys to{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and the{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
            dunes from cities including Marrakech and Fes.
          </p>

          <p>
            A typical{" "}
            <Link
              href="/marrakech-desert-tours/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              Marrakech desert tour
            </Link>{" "}
            may cross the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            , pass through{" "}
            <PlaceHoverCard place="ait-ben-haddou">
              Ait Ben Haddou
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>,
            continue through{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
            or{" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>,
            and finally reach Merzouga.
          </p>

          <p>
            Travelers starting in northern Morocco can also take{" "}
            <Link
              href="/morocco-fes-desert-tours/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              Fes desert tours
            </Link>{" "}
            that travel through the Middle Atlas and the Ziz Valley before
            reaching the desert.
          </p>

          <p>
            Around Merzouga, common experiences include camel rides, 4x4
            excursions, visits to nearby communities, sunset and sunrise
            viewpoints, and overnight stays at desert camps.
          </p>

          <p>
            Travelers should still choose operators carefully. Long desert
            journeys involve many hours of driving, remote roads, changing
            weather conditions, and activities that may require experienced
            local drivers or guides.
          </p>

          <p>
            Official U.S. travel advice specifically recommends staying aware
            in remote areas and using guarded campgrounds rather than camping
            alone in isolated locations. This is useful advice for independent
            travelers planning remote desert travel.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Merzouga is not Western Sahara
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            This distinction is especially important in an article about the
            &quot;Morocco war.&quot; Merzouga and the Erg Chebbi dunes are not
            located in Western Sahara. Specific Western Sahara travel warnings
            should not automatically be applied to desert tours around
            Merzouga.
          </p>
        </div>
      </div>

      {/* =====================================================
          SAFETY IN MARRAKECH, FES, CASABLANCA
      ===================================================== */}

      <div>
        <h3
          id="are-marrakech-fes-and-casablanca-safe-for-visitors"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Are Cities Like Marrakech, Fes, and Casablanca Safe for Visitors?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard> are
            major destinations on Morocco tourism itineraries. They continue
            receiving international visitors, but travelers should use the
            same sensible precautions they would use in other busy cities.
          </p>

          <p>
            In crowded tourist areas, one of the most practical concerns is
            petty crime. The current U.S. advisory says pickpocketing is common
            in crowded tourist areas, souks, and public transportation.
            Visitors should therefore keep phones, wallets, passports, and
            bags secure.
          </p>

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {/* Marrakech */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900">
                Marrakech
              </h4>

              <p className="mt-3 leading-7 text-slate-700">
                Marrakech is one of Morocco&apos;s busiest tourism centers.
                Areas around Jemaa el-Fnaa, the medina, souks, gardens, and
                major monuments can become very crowded.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Keep belongings secure, be careful with unsolicited offers,
                agree on prices where appropriate, and use extra awareness in
                crowded areas.
              </p>
            </div>

            {/* Fes */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900">
                Fes
              </h4>

              <p className="mt-3 leading-7 text-slate-700">
                The historic medina of Fes is one of Morocco&apos;s most
                interesting cultural areas, but its network of narrow streets
                can be confusing for first-time visitors.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Save the location of your accommodation, ask your riad about
                arrival directions, and consider a licensed local guide when
                you want a structured introduction to the medina.
              </p>
            </div>

            {/* Casablanca */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900">
                Casablanca
              </h4>

              <p className="mt-3 leading-7 text-slate-700">
                Casablanca is Morocco&apos;s largest city and has a very
                different atmosphere from the historic medinas of Marrakech
                and Fes.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Travelers should pay attention to traffic, protect valuables
                in busy places, use reliable transportation, and take normal
                big-city precautions, particularly after dark.
              </p>
            </div>
          </div>

          <p className="mt-6">
            Demonstrations can also take place in Moroccan cities, particularly
            during periods of political or regional tension. Current official
            guidance recommends avoiding protests and political gatherings
            because they can become unpredictable.
          </p>

          <p>
            This is why it is better to describe Marrakech, Fes, and
            Casablanca as{" "}
            <strong className="font-bold">
              active tourist destinations where normal travel precautions are
              still necessary
            </strong>{" "}
            rather than promising that nothing can ever happen.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Check the situation before your trip
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Travel conditions can change. Before departure, check your
            government&apos;s current Morocco travel advice, your airline, and
            any important local updates affecting the destinations on your
            itinerary.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://travel.state.gov/en/international-travel/travel-advisories/morocco.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              U.S. Morocco Travel Advisory
            </a>

            <a
              href="https://www.gov.uk/foreign-travel-advice/morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100"
            >
              UK Morocco Travel Advice
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
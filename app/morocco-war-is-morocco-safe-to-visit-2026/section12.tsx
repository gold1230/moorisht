import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section12() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there a war in Morocco right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Morocco's main cities and normal tourist routes are not active war zones. However, Western Sahara is a disputed territory where low-intensity hostilities have continued since the 1991 ceasefire broke down in 2020. Travelers should distinguish those specific areas from destinations such as Marrakech, Fes, Casablanca, Rabat, Chefchaouen, Essaouira, and Merzouga.",
        },
      },
      {
        "@type": "Question",
        name: "Is Morocco safe for tourists in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Morocco continues receiving international tourists in 2026. The U.S. State Department currently lists Morocco at Level 2: Exercise Increased Caution because of terrorism risk. Travelers should also take normal precautions regarding petty crime, demonstrations, transportation, and remote travel.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Western Sahara conflict affect tourists?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most travelers following Morocco's common tourism routes do not visit the areas of Western Sahara covered by the strongest travel warnings. Western Sahara should be considered separately, especially areas around and east of the Berm where specific government warnings apply.",
        },
      },
      {
        "@type": "Question",
        name: "Is Marrakech safe for travelers?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Marrakech remains one of Morocco's main international tourism destinations. Visitors should protect valuables in crowded souks and public areas, be cautious with unsolicited services, avoid demonstrations, and use normal city travel precautions.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Sahara Desert safe to visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The established desert tourism area around Merzouga and Erg Chebbi continues receiving travelers. Desert travel still requires planning because of long road journeys, heat, cold nights, remote locations, and limited services outside established tourism areas.",
        },
      },
      {
        "@type": "Question",
        name: "Are Morocco tours still running?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tourism and organized tours continue operating in Morocco in 2026, including city tours, cultural itineraries, Atlas Mountain trips, and Merzouga desert tours. Travelers should confirm their specific itinerary with their operator because individual services can change.",
        },
      },
      {
        "@type": "Question",
        name: "Should I cancel my Morocco trip because of war?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A general search result about war is not enough by itself to decide whether to cancel a Morocco trip. Travelers should check the exact location involved, current government travel advice, airline status, tour arrangements, accommodation, and insurance conditions before making a decision.",
        },
      },
      {
        "@type": "Question",
        name: "Is Morocco safer than other African countries?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "There is no single safety ranking that can accurately determine whether Morocco is safer than every other African country. Different destinations have different risks. Travelers should compare current advisories, crime concerns, transportation, planned activities, and the exact places they intend to visit.",
        },
      },
      {
        "@type": "Question",
        name: "Can Americans and Europeans travel safely to Morocco?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Travelers from the United States, United Kingdom, Canada, Europe, Australia, and many other regions continue visiting Morocco. Entry requirements depend on nationality, and travelers should follow current government advice and normal precautions.",
        },
      },
      {
        "@type": "Question",
        name: "Are Morocco desert camps safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Established desert camps around Merzouga regularly host international travelers. Conditions and facilities vary, so travelers should choose a reputable operator and confirm camp location, transportation, staff presence, bathrooms, bedding, heating or ventilation, meals, and emergency contact arrangements.",
        },
      },
    ],
  };

  return (
    <section className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =====================================================
          FAQ INTRODUCTION
      ===================================================== */}

      <div>
        <h2
          id="frequently-asked-questions-about-the-morocco-war-and-tourism"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Frequently Asked Questions About the Morocco War and Tourism
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            Travelers searching for{" "}
            <strong className="font-bold text-slate-950">
              “Morocco war”
            </strong>{" "}
            often want a simple answer about whether they can continue with
            their holiday. Morocco&apos;s main tourist destinations continue
            receiving visitors in 2026, but travelers should distinguish them
            from specific sensitive areas and continue using normal travel
            precautions.
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="Travelers exploring Morocco while learning about Morocco tourism and travel safety"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          FAQ ACCORDION
      ===================================================== */}

      <div className="space-y-4">
        {/* FAQ 1 */}
        <details
          id="faq-is-there-a-war-in-morocco-right-now"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Is There a War in Morocco Right Now?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              Morocco&apos;s main cities and normal tourist routes are{" "}
              <strong className="font-bold">not active war zones</strong>.
              Travelers continue visiting places such as{" "}
              <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>
              , and{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            </p>

            <p className="mt-4">
              There is, however, an important distinction involving Western
              Sahara. The 1991 ceasefire between Morocco and the Polisario
              Front broke down in 2020, and low-intensity hostilities continue
              in parts of that disputed territory.
            </p>

            <p className="mt-4">
              That does not mean fighting is taking place throughout Morocco.
              Travelers should always check exactly which geographic area a
              report or headline is discussing.
            </p>
          </div>
        </details>

        {/* FAQ 2 */}
        <details
          id="is-morocco-safe-for-tourists-in-2026"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Is Morocco Safe for Tourists in 2026?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              Morocco continues receiving millions of international visitors,
              and its tourism industry remains active in 2026. However,
              describing any destination as completely safe would be
              misleading.
            </p>

            <p className="mt-4">
              As of September 2026, the U.S. State Department lists Morocco at{" "}
              <strong className="font-bold">
                Level 2: Exercise Increased Caution
              </strong>{" "}
              because of terrorism risk.
            </p>

            <p className="mt-4">
              Travelers should also be aware of petty crime in crowded tourist
              areas, avoid demonstrations, use reliable transportation, and
              take extra care when traveling into remote mountain or desert
              regions.
            </p>
          </div>
        </details>

        {/* FAQ 3 */}
        <details
          id="does-the-western-sahara-conflict-affect-tourists"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Does the Western Sahara Conflict Affect Tourists?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              Most first-time visitors following common Morocco itineraries do
              not travel through the areas of Western Sahara covered by the
              strongest government warnings.
            </p>

            <p className="mt-4">
              UK travel guidance currently advises against all travel to
              certain areas within 40 kilometers north and west of the Berm,
              including Es Semara, and to territory south and east of the
              Berm.
            </p>

            <p className="mt-4">
              These warnings should not be confused with destinations such as{" "}
              <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, or{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            </p>

            <p className="mt-4">
              In particular, the{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi
              </PlaceHoverCard>{" "}
              dunes near Merzouga are not located in Western Sahara.
            </p>
          </div>
        </details>

        {/* FAQ 4 */}
        <details
          id="is-marrakech-safe-for-travelers"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Is Marrakech Safe for Travelers?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
              remains one of Morocco&apos;s busiest international tourism
              destinations. Visitors continue exploring Jemaa el-Fnaa, the
              medina, souks, palaces, gardens, restaurants, and traditional
              riads.
            </p>

            <p className="mt-4">
              The most useful precautions are similar to those used in other
              busy tourism cities: protect your phone and wallet in crowded
              places, be cautious with unsolicited services, use authorized
              guides, and avoid unfamiliar quiet streets when a busier route
              is available.
            </p>

            <p className="mt-4">
              Travelers staying deep inside the medina should also ask their
              accommodation for arrival directions because many riads cannot
              be reached directly by car.
            </p>
          </div>
        </details>

        {/* FAQ 5 */}
        <details
          id="is-the-sahara-desert-safe-to-visit"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Is the Sahara Desert Safe to Visit?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              The established Sahara tourism area around{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and{" "}
              <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
              continues receiving visitors for camel experiences, 4x4
              excursions, photography, and overnight desert camps.
            </p>

            <p className="mt-4">
              Desert travel still deserves preparation. The environment is
              remote, road distances are long, daytime temperatures can become
              hot, nights can become cold, and services are more limited than
              in major cities.
            </p>

            <p className="mt-4">
              Use established accommodation or camps, choose a reliable driver
              or operator, carry enough water, and understand how transportation
              to and from the camp is organized.
            </p>
          </div>
        </details>

        {/* FAQ 6 */}
        <details
          id="are-morocco-tours-still-running"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Are Morocco Tours Still Running?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              Yes. Organized tourism continues across Morocco in 2026.
              Travelers can still book cultural tours, city excursions,
              mountain trips, private itineraries, and Sahara journeys.
            </p>

            <p className="mt-4">
              Popular routes continue connecting destinations such as{" "}
              <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>
              ,{" "}
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, and{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            </p>

            <p className="mt-4">
              Individual flights, hotels, tours, and schedules can still change,
              so confirm your specific booking with the provider before
              departure.
            </p>

            <p className="mt-4">
              You can also explore{" "}
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
              to compare common Sahara routes.
            </p>
          </div>
        </details>

        {/* FAQ 7 */}
        <details
          id="should-i-cancel-my-morocco-trip-because-of-war"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Should I Cancel My Morocco Trip Because of War?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              Do not make a cancellation decision based only on a headline,
              social-media post, or generic search for{" "}
              <strong className="font-bold">“Morocco war.”</strong>
            </p>

            <p className="mt-4">
              First check exactly where the event is happening and whether it
              affects any destination on your itinerary. Then check your
              government&apos;s current advice, airline status, accommodation,
              tour arrangements, and travel-insurance conditions.
            </p>

            <p className="mt-4">
              Someone planning Marrakech, Fes, Chefchaouen, and Merzouga may
              have a very different itinerary from someone planning travel
              through a sensitive border or Western Sahara area.
            </p>
          </div>
        </details>

        {/* FAQ 8 */}
        <details
          id="is-morocco-safer-than-other-african-countries"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Is Morocco Safer Than Other African Countries?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              There is no single international ranking that can accurately
              answer this question for every traveler. Africa contains more
              than 50 countries with very different political situations,
              crime levels, transportation systems, tourism industries, and
              regional risks.
            </p>

            <p className="mt-4">
              Morocco has a large and established tourism industry, but that
              does not mean it should automatically be described as safer than
              every other African destination.
            </p>

            <p className="mt-4">
              A better comparison considers the specific destinations,
              activities, transport, government travel advice, health
              conditions, and personal circumstances involved in each trip.
            </p>
          </div>
        </details>

        {/* FAQ 9 */}
        <details
          id="can-americans-and-europeans-travel-safely-to-morocco"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Can Americans and Europeans Travel Safely to Morocco?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              Travelers from the United States, United Kingdom, Canada,
              European countries, Australia, and many other parts of the world
              continue visiting Morocco.
            </p>

            <p className="mt-4">
              Nationality does not remove normal travel risks, so visitors
              should still check passport and entry requirements, obtain
              suitable insurance, protect personal belongings, and understand
              the destinations included in their itinerary.
            </p>

            <p className="mt-4">
              Travelers who prefer organized transportation and accommodation
              can use a{" "}
              <Link
                href="/plan-your-morocco-tour"
                className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
              >
                private Morocco tour
              </Link>{" "}
              based on their dates and preferred route.
            </p>
          </div>
        </details>

        {/* FAQ 10 */}
        <details
          id="are-morocco-desert-camps-safe"
          className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="cursor-pointer list-none px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Are Morocco Desert Camps Safe?
              </h3>

              <span className="text-2xl text-amber-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </div>
          </summary>

          <div className="border-t border-slate-100 px-5 py-5 text-[17px] leading-8 text-slate-700 sm:px-6">
            <p>
              Established desert camps around{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and{" "}
              <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
              regularly accommodate international visitors.
            </p>

            <p className="mt-4">
              However, camps are not all identical. Before booking, check
              whether staff remain on site overnight, how guests reach the
              camp, whether bathrooms are private or shared, what bedding is
              supplied, how heating or ventilation works, and whether dinner
              and breakfast are included.
            </p>

            <p className="mt-4">
              Travelers should also keep the camp or operator&apos;s contact
              information available and use established camps instead of
              camping independently in isolated desert locations without proper
              preparation.
            </p>

            <p className="mt-4">
              You can learn more about{" "}
              <Link
                href="/city-of-merzouga-easy-travel-guide/"
                className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
              >
                visiting Merzouga
              </Link>{" "}
              before planning your overnight desert experience.
            </p>
          </div>
        </details>
      </div>

      {/* =====================================================
          FINAL ANSWER
      ===================================================== */}

      <div className="rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Morocco War and Tourism: The Final Answer
        </h2>

        <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
          <p>
            If you found this page after searching for{" "}
            <strong className="font-bold">
              “Morocco war” or “Is Morocco safe to visit in 2026?”
            </strong>
            , the most important thing is to separate Morocco&apos;s main
            tourism destinations from specific regional security issues.
          </p>

          <p>
            Marrakech, Fes, Casablanca, Rabat, Chefchaouen, Essaouira,
            Merzouga, and the main Morocco tourism routes are not active war
            zones. Tourism continues, flights operate, hotels receive guests,
            and organized tours continue serving international visitors.
          </p>

          <p>
            Western Sahara requires separate consideration because its
            political dispute remains unresolved and low-intensity hostilities
            continue in parts of the territory. Specific areas are covered by
            government warnings.
          </p>

          <p>
            Morocco itself should also not be presented as completely
            risk-free. Travelers should remain aware of terrorism risk, petty
            crime, demonstrations, road conditions, weather, and the additional
            challenges of remote travel.
          </p>

          <p>
            The best approach is simple: understand your exact itinerary,
            check current information close to departure, use reliable travel
            services, and prepare appropriately for the places and activities
            you plan to experience.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
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
            Explore Morocco Desert Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
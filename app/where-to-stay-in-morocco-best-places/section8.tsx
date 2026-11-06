import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import { CheckCircleIcon, MapPinIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function Section8() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best area to stay in Morocco for first-time visitors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Marrakech is one of the easiest places for first-time visitors because it combines culture, souks, restaurants, riads and many excursion options. Fes, Chefchaouen, Merzouga, Dades Valley and Essaouira can also be excellent choices depending on the itinerary.",
        },
      },
      {
        "@type": "Question",
        name: "Is it better to stay in a riad or hotel in Morocco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose a riad for a traditional Moroccan atmosphere, especially in historic medinas. Choose a hotel if easier vehicle access, elevators, larger rooms or modern facilities are more important.",
        },
      },
      {
        "@type": "Question",
        name: "Where should I stay in Marrakech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Medina is suitable for traditional riads and walking to historic attractions. Gueliz is better for modern restaurants and transport, Hivernage for upscale hotels, and Palmeraie for resorts and quieter stays.",
        },
      },
      {
        "@type": "Question",
        name: "Where should I stay for the Sahara Desert in Morocco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Merzouga is one of the main places to stay for visiting the Erg Chebbi dunes. Travelers can choose a desert camp, kasbah-style hotel or guesthouse near the dunes.",
        },
      },
      {
        "@type": "Question",
        name: "How many nights should I stay in Marrakech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Two or three nights is a useful starting point for many first-time itineraries because it allows time for the medina, souks, gardens and other sights. More time may be useful if you also want day trips.",
        },
      },
      {
        "@type": "Question",
        name: "Is Chefchaouen worth staying overnight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Staying overnight gives travelers more time to enjoy Chefchaouen in the quieter evening and morning hours and makes a slower visit possible.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best city to stay in Morocco for culture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fes is one of Morocco's strongest destinations for traditional crafts, historic architecture and medina life. Marrakech is also excellent for culture, food, markets, gardens and historic attractions.",
        },
      },
      {
        "@type": "Question",
        name: "Are Morocco desert camps comfortable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many desert camps offer comfortable accommodation, but facilities vary greatly. Travelers should check bathroom type, bedding, heating or ventilation and transfer arrangements before booking.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best places to stay during a Morocco desert tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common overnight stops include Dades Valley, Merzouga, Ouarzazate, Skoura and sometimes Todra Gorge, depending on the route and the number of days available.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book a Morocco tour with accommodation included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many private Morocco tours can include accommodation and transportation. Exact inclusions such as hotels, riads, desert camps, meals, guides and transfers depend on the itinerary and tour package.",
        },
      },
    ],
  };

  return (
    <section
      id="faq-about-where-to-stay-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          FAQ SCHEMA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Morocco Accommodation Questions
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          FAQ About Where to Stay in Morocco
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
          First-time visitors often have many questions about{" "}
          <strong>where to stay in Morocco</strong>, including whether to choose
          a riad or hotel, how many nights to spend in{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, and
          where to sleep when visiting the Sahara.
        </p>

        <p>
          The answers depend on your route, budget, comfort level and travel
          style. These frequently asked questions cover the most important
          accommodation decisions for planning a first Morocco trip.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Where to stay in Morocco accommodation guide for first-time visitors"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK ANSWER
      ===================================================== */}

      <div className="rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <QuestionMarkCircleIcon className="hidden h-8 w-8 shrink-0 text-amber-700 sm:block" />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
              Quick Answer
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              What Are the Best Places to Stay in Morocco?
            </h3>

            <p className="mt-3 max-w-4xl text-[16px] leading-7 text-slate-700">
              For many first-time itineraries,{" "}
              <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard> work well for
              culture,{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              for a slower mountain-city stay,{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> for the
              Sahara,{" "}
              <PlaceHoverCard place="dades-valley">
                Dades Valley
              </PlaceHoverCard>{" "}
              for road-trip scenery, and{" "}
              <PlaceHoverCard place="essaouira">
                Essaouira
              </PlaceHoverCard>{" "}
              for the Atlantic coast.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FAQ LIST
      ===================================================== */}

      <div className="mt-10 space-y-4">
        {/* FAQ 1 */}

        <details
          id="best-area-to-stay-in-morocco-for-first-time-visitors"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              What is the best area to stay in Morocco for first-time visitors?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              is one of the easiest places to start because it combines
              historic attractions, souks, restaurants, riads, gardens and many
              excursion options.
            </p>

            <p className="mt-3">
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
              <PlaceHoverCard place="essaouira">
                Essaouira
              </PlaceHoverCard>{" "}
              are also good choices depending on your route.
            </p>
          </div>
        </details>

        {/* FAQ 2 */}

        <details
          id="is-it-better-to-stay-in-a-riad-or-hotel-in-morocco"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              Is it better to stay in a riad or hotel in Morocco?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              Choose a riad if you want a traditional Moroccan atmosphere,
              especially in{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>
              , <PlaceHoverCard place="fes">Fes</PlaceHoverCard> or{" "}
              <PlaceHoverCard place="essaouira">
                Essaouira
              </PlaceHoverCard>.
            </p>

            <p className="mt-3">
              A hotel may be better if you want easier car access, elevators,
              larger rooms, parking, pools or more familiar modern facilities.
            </p>
          </div>
        </details>

        {/* FAQ 3 */}

        <details
          id="where-should-i-stay-in-marrakech"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              Where should I stay in Marrakech?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              In{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>
              , choose the Medina if you want traditional riads, souks and
              historic streets. Gueliz is better for modern restaurants, cafés,
              shopping and easier vehicle access.
            </p>

            <p className="mt-3">
              Hivernage is a strong option for upscale city hotels, while
              Palmeraie is better suited to resorts, pools, gardens and quieter
              stays outside the busiest central areas.
            </p>
          </div>
        </details>

        {/* FAQ 4 */}

        <details
          id="where-to-stay-for-the-sahara-desert-in-morocco"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              Where should I stay for the Sahara Desert in Morocco?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is one
              of the main places to stay for travelers visiting the{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi dunes
              </PlaceHoverCard>
              .
            </p>

            <p className="mt-3">
              You can choose between desert camps, dune-side guesthouses and
              kasbah-style hotels depending on whether you prioritize the camp
              experience, easy access or hotel-style facilities.
            </p>
          </div>
        </details>

        {/* FAQ 5 */}

        <details
          id="how-many-nights-should-i-stay-in-marrakech"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              How many nights should I stay in Marrakech?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              Two or three nights is a useful starting point for many
              first-time itineraries in{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>
              . This gives you time for the medina, souks, gardens, historic
              attractions and restaurants without rushing everything into one
              day.
            </p>

            <p className="mt-3">
              Add more time if you want excursions to places such as the{" "}
              <PlaceHoverCard place="high-atlas-mountains">
                High Atlas Mountains
              </PlaceHoverCard>
              ,{" "}
              <PlaceHoverCard place="ourika-valley">
                Ourika Valley
              </PlaceHoverCard>{" "}
              or{" "}
              <PlaceHoverCard place="ouzoud-waterfalls">
                Ouzoud Waterfalls
              </PlaceHoverCard>
              .
            </p>
          </div>
        </details>

        {/* FAQ 6 */}

        <details
          id="is-chefchaouen-worth-staying-overnight"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              Is Chefchaouen worth staying overnight?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              Yes. Staying overnight in{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              gives you more time to enjoy the blue medina at a slower pace.
            </p>

            <p className="mt-3">
              Early morning and evening can also be useful for walking and
              photography before or after the busiest daytime hours.
            </p>
          </div>
        </details>

        {/* FAQ 7 */}

        <details
          id="best-city-to-stay-in-morocco-for-culture"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              What is the best city to stay in Morocco for culture?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard> is one of the
              strongest choices for travelers interested in traditional
              craftsmanship, historic architecture and medina life.
            </p>

            <p className="mt-3">
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              is also an excellent cultural base if you want historic sites,
              food, souks, gardens and easy access to additional excursions.
            </p>
          </div>
        </details>

        {/* FAQ 8 */}

        <details
          id="are-morocco-desert-camps-comfortable"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              Are Morocco desert camps comfortable?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              Many desert camps near{" "}
              <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> offer
              comfortable facilities, but the level of comfort varies between
              properties and room categories.
            </p>

            <p className="mt-3">
              Before booking, check whether your tent has a private bathroom,
              the type of bedding provided, heating for colder nights, suitable
              ventilation or cooling arrangements, and clear information about
              transfers.
            </p>
          </div>
        </details>

        {/* FAQ 9 */}

        <details
          id="best-places-to-stay-during-a-morocco-desert-tour"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              What are the best places to stay during a Morocco desert tour?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              Common overnight stops include{" "}
              <PlaceHoverCard place="dades-valley">
                Dades Valley
              </PlaceHoverCard>
              , <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="ouarzazate">
                Ouarzazate
              </PlaceHoverCard>
              , <PlaceHoverCard place="skoura">Skoura</PlaceHoverCard> and, on
              some routes,{" "}
              <PlaceHoverCard place="todra-gorge">
                Todra Gorge
              </PlaceHoverCard>
              .
            </p>

            <p className="mt-3">
              The best combination depends on where the tour begins, where it
              ends and how many days you have available.
            </p>
          </div>
        </details>

        {/* FAQ 10 */}

        <details
          id="can-i-book-a-morocco-tour-with-accommodation-included"
          className="group scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-amber-200 open:bg-[#fffaf3] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg font-bold leading-7 text-slate-900">
              Can I book a Morocco tour with accommodation included?
            </h3>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-700 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="mt-4 border-t border-slate-200 pt-4 text-[16px] leading-7 text-slate-700">
            <p>
              Yes. Many private Morocco tours can be organized with
              accommodation and transportation included.
            </p>

            <p className="mt-3">
              Depending on the itinerary, a tour may include selected hotels or
              riads, a Sahara camp, private transportation, breakfast and some
              dinners. Always check the exact inclusions before confirming the
              booking.
            </p>
          </div>
        </details>
      </div>

      {/* =====================================================
          FINAL SUMMARY
      ===================================================== */}

      <div
        id="where-to-stay-in-morocco-final-answer"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8 lg:p-10"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
            Final Answer
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Where Should a First-Time Visitor Stay in Morocco?
          </h3>

          <p className="mt-5 text-[17px] leading-8 text-slate-200">
            A balanced first trip can combine a riad stay in{" "}
            <PlaceHoverCard place="marrakech">
              Marrakech
            </PlaceHoverCard>{" "}
            or <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, a scenic
            guesthouse around{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>
            , a Sahara night in{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>{" "}
            and a relaxed coastal stay in{" "}
            <PlaceHoverCard place="essaouira">
              Essaouira
            </PlaceHoverCard>
            . The exact combination should depend on your available days,
            transportation and preferred travel pace.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Choose locations that follow your route",
              "Check medina and vehicle access",
              "Compare room facilities, not only photos",
              "Confirm desert camp services before booking",
              "Leave enough time between overnight stops",
              "Mix riads, hotels, guesthouses and camps",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-amber-300" />

                <p className="text-sm leading-7 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-amber-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-amber-800"
            >
              Contact Us to Plan Your Morocco Trip
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/plan-your-morocco-tour"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Plan Your Morocco Tour
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          LAST TIP
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <MapPinIcon className="h-6 w-6 text-amber-700" />

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Last Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Choose the Location First, Then Choose the Property
        </h3>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          The right neighborhood and overnight stop can have a bigger effect on
          your trip than an expensive room. Choose where you need to stay
          first, then compare riads, hotels, guesthouses and desert camps inside
          that area.
        </p>
      </div>
    </section>
  );
}
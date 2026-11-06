import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function IndoorFamilyDayTripsMoroccoSection() {
  return (
    <section
      id="indoor-day-trips-near-me-for-families"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Comfortable Family Experiences
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Indoor Day Trips Near Me for Families
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
          Morocco is famous for desert adventures, mountain landscapes and
          colorful outdoor markets, but families can also enjoy many{" "}
          <strong>indoor day trips near me</strong> when they want a slower and
          more comfortable experience. Indoor activities can be especially
          useful during very hot summer afternoons, on quieter travel days or
          when younger children need a break from long periods outside.
        </p>

        <p>
          Museums, cultural centers and traditional workshops can help families
          discover Moroccan history, art, architecture and everyday traditions
          while spending more time indoors. These experiences are not simply
          places to escape the weather. They can also add an educational side
          to a family holiday and help children understand the destinations
          they are visiting.
        </p>

        <p>
          Families traveling through cities such as{" "}
          <PlaceHoverCard place="marrakech">
            Marrakech
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="fes">
            Fes
          </PlaceHoverCard>{" "}
          can include museums and cultural attractions within a city day, while
          travelers staying around{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          can combine indoor cultural or fossil-related experiences with nearby
          outdoor attractions.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Family enjoying an indoor cultural experience during a Morocco day trip"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK FAMILY OPTIONS
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <BuildingLibraryIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Museums
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Discover history, traditional objects, art and Moroccan cultural
            heritage in a comfortable setting.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Craft Experiences
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            See how traditional Moroccan objects are made and learn more about
            local craftsmanship.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <AcademicCapIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Learning for Kids
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Turn a family outing into an easy history, art or culture lesson
            without making it feel like school.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <UsersIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Relaxed Family Time
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Indoor stops give children and parents time to slow down between
            outdoor activities.
          </p>
        </div>
      </div>

      {/* =====================================================
          MUSEUMS
      ===================================================== */}

      <div
        id="museums-and-cultural-centers-in-morocco"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          History, Art & Culture
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Museums and Cultural Centers in Morocco
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Museums and cultural centers can be excellent choices for a{" "}
            <strong>day out with the family near me</strong> because they give
            adults and children a chance to discover Morocco at a slower pace.
            Depending on the museum, families may see traditional clothing,
            historic objects, art, architecture, old photographs or displays
            connected with regional culture.
          </p>

          <p>
            Another interesting part of visiting museums in Morocco is that
            some cultural spaces are located inside traditional or historic
            buildings. This means the building itself can become part of the
            experience, helping children notice details such as courtyards,
            carved decoration, tiles and traditional architecture.
          </p>

          <p>
            In{" "}
            <PlaceHoverCard place="fes">
              Fes
            </PlaceHoverCard>
            , cultural attractions can help families understand the history of
            the old medina and its traditional crafts. In{" "}
            <PlaceHoverCard place="marrakech">
              Marrakech
            </PlaceHoverCard>
            , museums can provide a quieter contrast to the busy atmosphere of
            the souks and historic center.
          </p>

          <p>
            Travelers staying around{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            can also look for indoor attractions connected with the history,
            fossils and culture of southeastern Morocco. These stops can be
            combined with outdoor experiences to create a more balanced family
            itinerary.
          </p>
        </div>
      </div>

      {/* =====================================================
          MUSEUM TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Museum Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Choose a Few Things for Children to Discover
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Instead of asking children to read every display, encourage them to
          find a traditional object, an old photograph, a piece of clothing or
          an architectural detail that interests them. This keeps the visit
          active and easier to enjoy.
        </p>
      </div>

      {/* =====================================================
          WORKSHOPS
      ===================================================== */}

      <div
        id="family-friendly-workshops-and-craft-experiences"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Creative Family Experiences
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Family-Friendly Workshops and Craft Experiences
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Traditional craft experiences can be among the most memorable{" "}
            <strong>family day out places near me</strong> because they allow
            children to see how handmade Moroccan products are created instead
            of simply seeing them for sale.
          </p>

          <p>
            Depending on the destination and the workshop available, families
            may learn about pottery, carpets, decorative design, leather work or
            other local crafts. Children can watch the different stages of the
            process and ask questions about the materials and tools being used.
          </p>

          <p>
            These experiences can be especially valuable in destinations with a
            strong craft tradition.{" "}
            <PlaceHoverCard place="fes">
              Fes
            </PlaceHoverCard>{" "}
            is well known for traditional craftsmanship, while{" "}
            <PlaceHoverCard place="marrakech">
              Marrakech
            </PlaceHoverCard>{" "}
            also offers many opportunities to discover Moroccan decorative arts
            and handmade products.
          </p>

          <p>
            Parents often enjoy these visits as well because they provide a
            chance to understand the amount of skill and time involved in
            traditional craftsmanship. When organized respectfully, they can
            also help families connect with the people behind the products they
            see in Moroccan markets.
          </p>
        </div>
      </div>

      {/* =====================================================
          QUICK CRAFT BOX
      ===================================================== */}

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Watch
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Children can watch craftspeople work with traditional materials and
            tools.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <BookOpenIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Learn
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Learn where craft traditions come from and why they remain
            important today.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <UsersIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Connect
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Meet local craftspeople in a respectful setting and discover the
            human side of Moroccan craftsmanship.
          </p>
        </div>
      </div>

      {/* =====================================================
          HOT SUMMER DAYS
      ===================================================== */}

      <div
        id="indoor-activities-for-hot-summer-days"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Cooler Family Activities
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Indoor Activities for Hot Summer Days
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco can become very hot during parts of the summer, especially
            in inland and southern areas. Families traveling with young
            children may therefore want to balance outdoor sightseeing with
            comfortable indoor stops during the hottest part of the day.
          </p>

          <p>
            Indoor experiences can include museums, cultural visits, craft
            workshops or traditional cooking experiences when suitable options
            are available. These activities allow the family to continue
            exploring Morocco without remaining outside for many hours.
          </p>

          <p>
            This can be particularly useful in places such as{" "}
            <PlaceHoverCard place="marrakech">
              Marrakech
            </PlaceHoverCard>{" "}
            or southeastern destinations around{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>
            , where summer afternoons can feel much warmer than mornings or
            evenings.
          </p>

          <p>
            Parents do not need to completely remove outdoor activities from
            the day. A better approach can be to visit outdoor attractions in
            the morning, enjoy an indoor experience around midday and return
            outside later when conditions are more comfortable.
          </p>
        </div>
      </div>

      {/* =====================================================
          HOT WEATHER TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Summer Family Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Use Indoor Stops During the Hottest Part of the Day
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          During hot weather, schedule longer outdoor walks earlier in the
          morning or later in the day when possible. A museum, workshop or
          relaxed indoor meal can make the middle of the day much easier for
          children.
        </p>
      </div>

      {/* =====================================================
          HISTORY THROUGH MUSEUMS
      ===================================================== */}

      <div
        id="discovering-moroccos-history-through-museums"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <BuildingLibraryIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Learning Through Travel
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Discovering Morocco&apos;s History Through Museums
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            Museums can help families understand the places they see outside.
            A historic street, old building or traditional craft often becomes
            more meaningful when children understand a little about the people
            and events connected with it.
          </p>

          <p>
            For younger travelers, visual displays can make history much easier
            to understand. Old objects, traditional clothing, tools,
            photographs and decorative arts give children something real to
            look at instead of only listening to dates and names.
          </p>

          <p>
            In historic cities such as{" "}
            <PlaceHoverCard place="fes">
              Fes
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="marrakech">
              Marrakech
            </PlaceHoverCard>
            , combining a museum or cultural attraction with a short city walk
            can help connect indoor learning with the streets and architecture
            outside.
          </p>

          <p>
            This creates a more complete{" "}
            <strong className="font-bold text-white">
              one day trip near me with family
            </strong>{" "}
            because children are not only seeing Morocco. They are also
            beginning to understand why its cities, traditions and crafts look
            the way they do today.
          </p>
        </div>
      </div>

      {/* =====================================================
          FINAL SUMMARY
      ===================================================== */}

      <div
        id="why-indoor-family-activities-are-worth-adding"
        className="scroll-mt-32 mt-12 max-w-4xl"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Balance Your Family Itinerary
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Why Indoor Family Activities Are Worth Adding
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Indoor activities give families another way to experience Morocco.
            A museum can add meaning to a historic city visit, a craft
            experience can help children understand traditional skills, and an
            indoor cultural stop can provide a welcome break during a hot day.
          </p>

          <p>
            Families do not need to choose between outdoor adventure and indoor
            culture. Combining both usually creates a more varied itinerary,
            especially when traveling with children who may need a different
            pace from adults.
          </p>

          <p>
            Whether your family is exploring{" "}
            <PlaceHoverCard place="fes">
              Fes
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="marrakech">
              Marrakech
            </PlaceHoverCard>{" "}
            or{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>
            , a well-planned indoor experience can turn a simple break from the
            weather into one of the educational highlights of the trip.
          </p>
        </div>
      </div>
    </section>
  );
}
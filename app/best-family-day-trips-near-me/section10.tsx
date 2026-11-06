import Image from "next/image";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
import PlaceHoverCard from "@/Compentents/placeCard";

import {
  CameraIcon,
  ClockIcon,
  ListBulletIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function FamilyDayOutPlanningTipsSection() {
  return (
    <section
      id="day-out-with-the-family-near-me-planning-tips"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Practical Morocco Family Travel Advice
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Day Out With the Family Near Me: Planning Tips
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
          Planning a{" "}
          <strong>day out with the family near me in Morocco</strong> becomes
          much easier when the itinerary is built around comfort, realistic
          driving times and activities that match the children&apos;s ages.
          Morocco offers many exciting family experiences, but trying to fit too
          many places into one day can quickly make the journey tiring.
        </p>

        <p>
          A good family day trip should include comfortable transportation,
          enough time for meals and breaks, useful stops along the route and one
          or two main experiences that everyone can enjoy. Younger children may
          need shorter activities, while teenagers may prefer more adventurous
          experiences such as desert exploration, walking or photography.
        </p>

        <p>
          Morocco is a large country, so your starting point is also important.
          A family staying around{" "}
          <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>{" "}
          can easily focus on southeastern destinations such as{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>, while
          travelers based in{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
          or{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>{" "}
          should choose attractions that make sense from those cities.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Family planning a Morocco day trip and desert adventure from Marrakech to Merzouga"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK PLANNING CARDS
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <ClockIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Realistic Timing
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Leave enough time for driving, meals, sightseeing and unexpected
            family stops.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <UsersIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Child-Friendly Pace
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Adapt the number of activities to the children&apos;s ages and
            energy levels.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <SunIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Weather Planning
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Choose outdoor activities according to the season and current
            temperatures.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <MapPinIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Smart Destination Choice
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Choose places that are reasonably close to where your family is
            staying.
          </p>
        </div>
      </div>

      {/* =====================================================
          BEST TIME TO VISIT
      ===================================================== */}

      <div
        id="best-time-to-visit-morocco-with-children"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Weather & Seasons
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Best Time to Visit Morocco With Children
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The best time to visit Morocco with children depends on the region
            and the activities your family wants to enjoy. Morocco has coastal,
            mountain, inland and desert climates, which means conditions can be
            very different across the country at the same time.
          </p>

          <p>
            Spring and autumn are often comfortable periods for family
            sightseeing because many destinations have more moderate
            temperatures than during the hottest summer months. These seasons
            can work particularly well for outdoor activities, scenic driving
            and walking through historic towns.
          </p>

          <p>
            Families planning a Sahara experience around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
            should pay close attention to temperature. Milder periods generally
            make camel experiences, dune walks and outdoor sightseeing easier
            for children.
          </p>

          <p>
            Winter can also be enjoyable in southern Morocco. Days may be
            pleasant for exploring, but families should remember that mornings,
            evenings and desert nights can become cold.
          </p>

          <p>
            Summer requires more careful planning, especially around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            Outdoor desert activities are usually better planned for the
            cooler parts of the day rather than during strong midday heat.
          </p>
        </div>
      </div>

      {/* =====================================================
          SEASON TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Weather Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Check the Weather for the Destination, Not Only the City You Start In
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Conditions can change considerably between cities, mountains and the
          Sahara. Check the forecast for the actual destination before leaving,
          especially when traveling with young children.
        </p>
      </div>

      {/* =====================================================
          WHAT TO PACK
      ===================================================== */}

      <div
        id="what-to-pack-for-a-family-day-trip"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Family Day Bag Essentials
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          What to Pack for a Family Day Trip
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Packing a few useful items can make a family day much easier.
            Parents do not need to carry too much, but having water, comfortable
            clothing, sun protection and a few child-friendly essentials can
            prevent small problems from interrupting the day.
          </p>

          <p>
            For outdoor excursions, comfortable shoes are especially important.
            Children may walk through medinas, over uneven village paths, across
            rocky viewpoints or on sand depending on the destination.
          </p>

          <p>
            Desert trips around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
            require a little extra preparation. Sunglasses, a hat and sun
            protection are useful during bright conditions, while an extra
            layer can help when temperatures change later in the day.
          </p>

          <p>
            Snacks can also be useful when traveling with younger children,
            particularly on routes where meal times may not match their normal
            routine.
          </p>

          <p>
            For longer drives, parents can bring a book, small game or another
            quiet activity. This can make the road between attractions much
            easier for children.
          </p>
        </div>

        {/* PACKING GRID */}

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {[
            "Drinking water",
            "Comfortable walking shoes",
            "Sun hat and sunglasses",
            "Sun protection",
            "Light extra layer",
            "Simple snacks for children",
            "Small game or book",
            "Phone or camera for family photos",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                ✓
              </span>

              <span className="text-sm leading-6 text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          PHOTO TIP
      ===================================================== */}

      <div className="mt-7 flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <CameraIcon className="mt-1 hidden h-6 w-6 shrink-0 text-amber-700 sm:block" />

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
            Family Photo Tip
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            Keep Your Camera Easy to Reach
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Morocco has many unexpected viewpoints and family photo
            opportunities. Keeping your phone or camera accessible is easier
            than unpacking luggage every time you stop.
          </p>
        </div>
      </div>

      {/* =====================================================
          SAHARA TIPS
      ===================================================== */}

      <div
        id="travel-tips-for-families-visiting-the-sahara-desert"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Sahara Family Advice
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Travel Tips for Families Visiting the Sahara Desert
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            A Sahara family trip can become one of the most memorable parts of
            a Morocco holiday when the day is planned around the family rather
            than around a long checklist of attractions.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi
            </PlaceHoverCard>
            , children often enjoy simple experiences such as walking on the
            dunes, taking photographs, watching camels and seeing the open
            desert landscape.
          </p>

          <p>
            Families should allow enough time for water breaks, meals and rest.
            Shorter activities are often easier for younger children than
            spending many continuous hours outside.
          </p>

          <p>
            A private excursion can provide useful flexibility because stops
            and timing can be adapted to the family&apos;s needs. However, the
            most important part is choosing a realistic itinerary rather than
            trying to visit every attraction around the desert in a single day.
          </p>

          <p>
            The Sahara experience can also introduce children to communities
            and traditions in southeastern Morocco. Families should approach
            village and community visits respectfully, remembering that these
            are living places rather than staged attractions.
          </p>
        </div>
      </div>

      {/* =====================================================
          SAHARA QUICK TIPS
      ===================================================== */}

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <SunIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Watch the Heat
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Avoid long outdoor desert activities during extreme midday heat.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <ClockIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Add Breaks
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Give children enough time to drink, eat and rest between
            activities.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Keep It Simple
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            A few enjoyable Sahara experiences are usually better than a rushed
            itinerary.
          </p>
        </div>
      </div>

      {/* =====================================================
          CHILD COMFORT
      ===================================================== */}

      <div
        id="keeping-children-comfortable-during-excursions"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Comfortable Family Travel
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Keeping Children Comfortable During Excursions
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            When planning a{" "}
            <strong>day out with the family near me</strong>, comfort should be
            considered from the beginning of the itinerary. Children usually
            enjoy travel more when they have enough rest, regular meals and
            opportunities to move around instead of spending the entire day in
            a vehicle.
          </p>

          <p>
            Comfortable transportation can make a major difference on longer
            routes. Families should also avoid filling every hour with
            sightseeing. Leaving some free time makes it easier to deal with
            tired children, unexpected delays or an attraction that the family
            wants to enjoy for longer.
          </p>

          <p>
            Activities should include opportunities for children to
            participate. A craft experience, short walk, camel ride, fossil
            visit or time exploring a market may hold their attention better
            than long periods of passive sightseeing.
          </p>

          <p>
            Parents can also involve older children in planning by allowing
            them to choose one activity or destination. This can make them feel
            more connected to the family trip.
          </p>
        </div>
      </div>

      {/* =====================================================
          SIMPLE FAMILY FORMULA
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <ListBulletIcon className="mt-1 hidden h-6 w-6 shrink-0 text-amber-700 sm:block" />

          <div className="w-full">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
              Simple Family Day Formula
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              One Main Attraction + Two Small Experiences
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
              Instead of planning six or seven stops, choose one main
              destination and add one or two smaller experiences around it.
              This leaves more time for meals, photographs, rest and
              spontaneous family moments.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                  Step 1
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  Main Destination
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                  Step 2
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  One Fun Activity
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                  Step 3
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  Time to Relax
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          STARTING POINT
      ===================================================== */}

      <div
        id="choose-family-day-trip-based-on-starting-point"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Build a Realistic Route
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Choose Your Family Day Trip Based on Your Starting Point
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            One of the most important parts of planning a family day in Morocco
            is choosing a destination that is realistically reachable from your
            accommodation.
          </p>

          <p>
            Families based around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>{" "}
            can focus on{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
            and nearby fossil or oasis experiences.
          </p>

          <p>
            Families staying in{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
            should choose attractions around Marrakech and the surrounding
            region instead of trying to turn distant southern destinations into
            rushed day trips.
          </p>

          <p>
            The same rule applies to{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>. Choosing closer
            attractions usually means children spend less time sitting in the
            vehicle and more time enjoying Morocco.
          </p>
        </div>
      </div>

      {/* =====================================================
          FINAL SUMMARY
      ===================================================== */}

      <div className="mt-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Make the Day Enjoyable for Everyone
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Good Family Planning Makes a Better Morocco Experience
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The best family day trip is not necessarily the one with the most
            attractions. A comfortable route, suitable weather, enough breaks
            and a few meaningful experiences can create a much better day than
            a packed itinerary.
          </p>

          <p>
            Whether your family is exploring the Sahara around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
            discovering{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>, walking
            through{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
            or learning about the history of{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, giving children
            enough time to enjoy each experience makes the journey more
            memorable.
          </p>

          <p>
            Good planning does not mean controlling every minute. It means
            creating enough structure to keep the family comfortable while
            leaving space for unexpected discoveries along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
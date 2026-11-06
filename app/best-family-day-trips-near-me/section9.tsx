import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  CameraIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function FamilyDaysOutEverySeasonSection() {
  return (
    <section
      id="fun-days-out-for-families-near-me-during-every-season"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Travel Throughout the Year
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Fun Days Out for Families Near Me During Every Season
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
          Morocco is a wonderful destination for families because every season
          creates different possibilities for{" "}
          <strong>fun days out for families near me</strong>. A family trip can
          include colorful city streets, green valleys, mountain scenery,
          Atlantic beaches or the peaceful Sahara, depending on the time of
          year and the part of Morocco you are visiting.
        </p>

        <p>
          Families traveling with young children, teenagers or grandparents can
          choose activities that match both the season and the energy level of
          the group. In{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, a family
          day may focus on gardens, culture and city attractions. Around{" "}
          <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> and{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, the
          experience can include palm landscapes, fossils, traditional towns
          and the Sahara.
        </p>

        <p>
          One of the advantages of family travel in Morocco is that the same
          destination can feel very different throughout the year. Spring can
          bring greener landscapes and pleasant outdoor conditions, summer
          requires more careful planning around the heat, autumn can be
          comfortable for road trips and walking, while winter can be an
          excellent time for exploring southern Morocco if families are
          prepared for cooler mornings and evenings.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Family enjoying a scenic Morocco day trip during a family holiday"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          SEASON CARDS
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Spring
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Good for valleys, outdoor sightseeing, scenic drives and family
            nature experiences.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <SunIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Summer
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Plan activities early or late in the day and consider mountains,
            beaches and indoor stops.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <CameraIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Autumn
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            A useful season for valleys, Sahara routes, family walks and scenic
            photography.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <MapPinIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Winter
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Southern Morocco and the Sahara can be enjoyable, but families
            should prepare for cold mornings and evenings.
          </p>
        </div>
      </div>

      {/* =====================================================
          SPRING
      ===================================================== */}

      <div
        id="family-activities-in-spring"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Green Landscapes & Outdoor Adventures
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Family Activities in Spring
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Spring is often one of the easiest seasons for family sightseeing
            in Morocco because temperatures in many regions can be more
            comfortable for walking and outdoor activities than during the
            hottest part of summer. Families searching for a{" "}
            <strong>day out with the family near me</strong> can use the season
            to combine nature, culture and scenic driving.
          </p>

          <p>
            A particularly attractive family option in southeastern Morocco is
            the{" "}
            <PlaceHoverCard place="ziz-valley">
              Ziz Valley
            </PlaceHoverCard>
            . The valley stretches through a dramatic dry landscape filled with
            a long ribbon of date palms, settlements and agricultural areas.
            Families traveling toward{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> can stop at
            viewpoints and let children see the contrast between the green oasis
            and the surrounding mountains.
          </p>

          <p>
            Spring can also be a good time to continue toward{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and the{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>
            . Families can spend time in the desert, enjoy a short camel
            experience, walk on smaller dunes and learn about life in the
            Sahara region.
          </p>

          <p>
            Elsewhere in Morocco, spring can work well for valley excursions,
            waterfalls, historical places and countryside experiences. The
            exact conditions vary by region and date, so families should still
            check the local forecast before planning a full outdoor day.
          </p>

          <p>
            For parents searching for a{" "}
            <strong>one day family trip near me</strong>, spring often gives
            enough flexibility to combine several outdoor experiences without
            having to organize the entire itinerary around extreme heat.
          </p>
        </div>
      </div>

      {/* =====================================================
          SPRING TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Spring Family Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Use Spring for Longer Outdoor Stops
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          When the weather is comfortable, families can spend more time at
          viewpoints, palm groves and outdoor historical sites instead of
          rushing between air-conditioned stops.
        </p>
      </div>

      {/* =====================================================
          SUMMER
      ===================================================== */}

      <div
        id="summer-family-adventures-in-morocco"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Plan Around the Heat
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Summer Family Adventures in Morocco
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Summer in Morocco can be very hot, especially in inland and desert
            regions, but families can still enjoy{" "}
            <strong>fun family day trips near me</strong> when the schedule is
            planned carefully. Early morning activities, indoor midday breaks
            and later afternoon experiences can make a big difference when
            traveling with children.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, summer
            desert activities should be planned around the temperature rather
            than treated like a normal full-day outdoor excursion. Families may
            enjoy an early visit near the dunes, a short sunrise experience or
            a later outing when conditions are more comfortable.
          </p>

          <p>
            During the hottest hours, children should have access to shade,
            drinking water and a comfortable indoor place. Long walks or
            extended outdoor activities around{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard> are
            generally better avoided during extreme heat.
          </p>

          <p>
            Families looking for cooler environments can consider the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            , depending on their starting point. Higher elevations can offer a
            different atmosphere from Morocco&apos;s hotter plains and desert
            regions.
          </p>

          <p>
            Coastal destinations are another popular summer option.{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> offers
            an Atlantic setting with a historic medina and beach atmosphere,
            while{" "}
            <PlaceHoverCard place="agadir">Agadir</PlaceHoverCard> is known for
            its long coastline and resort areas.
          </p>
        </div>
      </div>

      {/* =====================================================
          SUMMER QUICK CHOICES
      ===================================================== */}

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <SunIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Desert
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Choose early morning or later activities and avoid long exposure
            during the strongest heat.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <MapPinIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Mountains
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Mountain areas can provide a useful change from the hotter inland
            landscapes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Coast
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Essaouira and Agadir can give families beaches, food and a different
            summer atmosphere.
          </p>
        </div>
      </div>

      {/* =====================================================
          SUMMER SAFETY TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Important Summer Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Do Not Build a Family Desert Day Around Midday
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Summer temperatures in southeastern Morocco can become intense.
          Families should check current conditions, carry enough water, use sun
          protection and organize outdoor Sahara experiences during the more
          comfortable parts of the day.
        </p>
      </div>

      {/* =====================================================
          AUTUMN
      ===================================================== */}

      <div
        id="autumn-day-trips-for-families"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Scenic Roads & Comfortable Exploration
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Autumn Day Trips for Families
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Autumn can be an excellent season for{" "}
            <strong>family day outings near me</strong> because temperatures in
            many areas begin to become more comfortable after the hottest
            summer period. This can make road trips, short walks and outdoor
            sightseeing easier for families with children.
          </p>

          <p>
            Travelers exploring southeastern Morocco can plan family days around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and the
            surrounding desert region. Children can experience the Sahara,
            spend time around the dunes and learn about local communities
            without necessarily turning the day into a long expedition.
          </p>

          <p>
            Autumn can also be useful for exploring{" "}
            <PlaceHoverCard place="todra-gorge">
              Todra Gorge
            </PlaceHoverCard>
            . Families can enjoy the dramatic canyon scenery and take a short
            walk between the rock walls before continuing through the wider{" "}
            <PlaceHoverCard place="tinghir">Tinghir</PlaceHoverCard> region.
          </p>

          <p>
            Another scenic choice is{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>
            , where winding roads, viewpoints, traditional settlements and
            mountain landscapes provide a relaxed family road-trip experience.
          </p>

          <p>
            These destinations are useful for parents looking for{" "}
            <strong>family friendly day trips near me</strong> that combine
            outdoor adventure with opportunities to stop, learn and enjoy the
            scenery together.
          </p>
        </div>
      </div>

      {/* =====================================================
          AUTUMN GEO BOX
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Autumn Route Idea
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Combine a Scenic Valley With One Main Activity
        </h3>

        <p className="mt-3 max-w-3xl text-[16px] leading-7 text-slate-700">
          Instead of adding many distant attractions to the same day, choose one
          main area such as{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard> or{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,
          then add short viewpoints, village stops or a family lunch along the
          route.
        </p>
      </div>

      {/* =====================================================
          WINTER
      ===================================================== */}

      <div
        id="winter-family-experiences-near-the-sahara-desert"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Cooler Sahara Adventure
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Winter Family Experiences Near the Sahara Desert
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            Winter can be a very appealing season for visiting the Sahara
            because daytime conditions can be more comfortable than during the
            hottest months. However, desert temperatures can change
            considerably between day and night, so families should prepare for
            cool or cold mornings and evenings.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, families
            can enjoy the wide desert scenery, explore the edge of{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard> and
            spend time discovering communities in the surrounding area.
          </p>

          <p>
            A winter day trip from{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> to{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> can work
            well for families because the two places are part of the same
            southeastern Morocco travel region. Parents can organize a
            relatively simple day around the dunes rather than committing to a
            long multi-day Sahara route.
          </p>

          <p>
            Children may enjoy walking on the dunes, a short camel experience,
            family photography or simply seeing the enormous open landscape for
            the first time.
          </p>

          <p>
            If the family stays into the evening, warm clothing becomes
            important. Desert evenings in winter can feel much colder than the
            sunny daytime landscape might suggest.
          </p>
        </div>
      </div>

      {/* =====================================================
          WINTER TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Winter Sahara Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Bring Layers Even When the Day Looks Sunny
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Winter sunshine in the Sahara can feel pleasant during the day, but
          temperatures may fall quickly later. Pack layers for children and
          adults, especially if your family will stay for sunset or continue
          into the evening.
        </p>
      </div>

      {/* =====================================================
          SEASON COMPARISON
      ===================================================== */}

      <div
        id="best-season-for-family-day-trips-in-morocco"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Choose the Right Time
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Which Season Is Best for Family Day Trips in Morocco?
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Season
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Good For
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Family Planning
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Spring
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Valleys, nature and outdoor sightseeing
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Often comfortable for longer outdoor stops
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Summer
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Coast, mountains and carefully timed activities
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Avoid strong midday heat, especially in the desert
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Autumn
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Desert, valleys and scenic road trips
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Often a comfortable period for mixed activities
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Winter
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Southern Morocco and Sahara sightseeing
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Bring layers for cold mornings and evenings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL SUMMARY
      ===================================================== */}

      <div className="mt-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Morocco in Every Season
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Every Season Can Create a Different Family Adventure
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            There is no single season that works perfectly for every family.
            The best time depends on where you want to travel and what your
            children enjoy doing.
          </p>

          <p>
            Spring can be excellent for valleys and outdoor sightseeing, summer
            can work well for coastal and mountain destinations when hot-weather
            planning is taken seriously, autumn is attractive for scenic
            southern routes, and winter can give families a memorable Sahara
            experience around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
          </p>

          <p>
            The key to finding the best{" "}
            <strong>fun days out for families near me</strong> is to match the
            activity with the season, the starting location and the ages of the
            children. A realistic itinerary usually creates a better family
            experience than trying to visit too many places in one day.
          </p>
        </div>
      </div>
    </section>
  );
}
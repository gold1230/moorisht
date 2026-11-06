

import PlaceHoverCard from "@/Compentents/placeCard";

import {
  EyeIcon,
  CameraIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
  GlobeEuropeAfricaIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function FunFamilyNatureTripsSection() {
  return (
    <section
      id="fun-family-day-trips-near-me-for-nature-lovers"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Nature Adventures for Families
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Fun Family Day Trips Near Me for Nature Lovers
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
          Families searching for{" "}
          <strong>fun family day trips near me in Morocco</strong> will find
          some of the country&apos;s most beautiful natural landscapes in the
          southeast. Instead of spending the entire day inside busy cities,
          parents and children can explore green valleys, palm groves, desert
          oases and the golden dunes surrounding{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>
          .
        </p>

        <p>
          One of the biggest advantages of this region is the variety of
          landscapes found within a relatively compact area. A family can start
          the day around{" "}
          <PlaceHoverCard place="errachidia">
            Errachidia
          </PlaceHoverCard>
          , travel through the beautiful{" "}
          <PlaceHoverCard place="ziz-valley">
            Ziz Valley
          </PlaceHoverCard>
          , continue toward{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          and finish near the Sahara dunes of{" "}
          <PlaceHoverCard place="erg-chebbi">
            Erg Chebbi
          </PlaceHoverCard>
          .
        </p>

        <p>
          This combination of greenery, mountains, palm groves and desert
          scenery makes southern Morocco a strong choice for families who enjoy
          nature. Whether you want a quiet{" "}
          <strong>day out with family near me</strong> or a more active family
          adventure, the region gives children room to explore while parents
          can enjoy beautiful views and a slower pace.
        </p>
      </div>

      {/* =====================================================
          NATURE HIGHLIGHTS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <GlobeEuropeAfricaIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Palm Groves
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Walk through green oasis landscapes and see how date palms grow in
            Morocco&apos;s dry southeast.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <MapPinIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Scenic Valleys
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Stop at viewpoints overlooking green valleys surrounded by dry
            mountains and desert terrain.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <EyeIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Nature Watching
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Look for birds, desert plants and seasonal wildlife while exploring
            the quieter areas around the Sahara.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <CameraIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Family Photography
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Valleys, palm trees and Sahara dunes create beautiful places for
            family photos.
          </p>
        </div>
      </div>

      {/* =====================================================
          ZIZ VALLEY
      ===================================================== */}

      <div
        id="discover-the-beautiful-ziz-valley-with-your-family"
        className="scroll-mt-32 mt-12"
      >
        <div className="grid gap-7 lg:grid-cols-[70px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <GlobeEuropeAfricaIcon className="h-6 w-6" />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Green Oasis Landscape
            </p>

            <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Discover the Beautiful Ziz Valley With Your Family
            </h3>

            <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
              <p>
                The{" "}
                <PlaceHoverCard place="ziz-valley">
                  Ziz Valley
                </PlaceHoverCard>{" "}
                is one of the most attractive natural stops for families
                traveling through southeastern Morocco. The valley lies along
                the route connecting{" "}
                <PlaceHoverCard place="errachidia">
                  Errachidia
                </PlaceHoverCard>{" "}
                with{" "}
                <PlaceHoverCard place="erfoud">
                  Erfoud
                </PlaceHoverCard>{" "}
                and is known for its long palm oasis, traditional settlements
                and dramatic surrounding landscapes.
              </p>

              <p>
                Families can stop at panoramic viewpoints where the green palm
                groves stretch through the dry valley below. The contrast
                between the oasis and the surrounding mountains can be
                especially interesting for children because it clearly shows
                how water changes the landscape in this part of Morocco.
              </p>

              <p>
                The area is also useful for introducing children to traditional
                agriculture. Date palms have played an important role in the
                region for generations, and families can see how local
                communities continue to live around the fertile parts of the
                valley.
              </p>

              <p>
                For parents who prefer a peaceful experience rather than a day
                filled with constant activities, the{" "}
                <PlaceHoverCard place="ziz-valley">
                  Ziz Valley
                </PlaceHoverCard>{" "}
                can be one of the best stops on a{" "}
                <strong>family-friendly day trip in Morocco</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          GEO / QUICK ANSWER
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Good to Know
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Where Is the Ziz Valley?
        </h3>

        <p className="mt-3 max-w-3xl text-[16px] leading-7 text-slate-700">
          The{" "}
          <PlaceHoverCard place="ziz-valley">
            Ziz Valley
          </PlaceHoverCard>{" "}
          runs through southeastern Morocco and is commonly seen on the road
          between{" "}
          <PlaceHoverCard place="errachidia">
            Errachidia
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>
          . Travelers continuing south can then reach{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          and the{" "}
          <PlaceHoverCard place="erg-chebbi">
            Erg Chebbi dunes
          </PlaceHoverCard>
          .
        </p>
      </div>

      {/* =====================================================
          FAMILY PICNIC
      ===================================================== */}

      <div
        id="family-picnic-spots-near-erfoud-and-merzouga"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff7ed] text-amber-700 sm:flex">
            <UsersIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Slow Family Time
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Family Picnic Spots Near Erfoud and Merzouga
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A family day out does not always need to be filled with organized
            activities. Around{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            , families can also slow down and enjoy the landscape together.
          </p>

          <p>
            Palm groves, quieter roadside viewpoints and open areas around the
            desert can provide peaceful places to stop during a family
            excursion. A simple lunch or picnic break gives children time to
            rest and allows parents to enjoy the scenery without following a
            strict timetable.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            , families can combine a relaxed meal with views toward{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi
            </PlaceHoverCard>
            . Later in the day, the changing desert light can make the area
            especially beautiful for photographs.
          </p>

          <p>
            This type of experience is ideal for travelers searching for a{" "}
            <strong>day out with the family near me</strong> that feels relaxed,
            flexible and connected to nature.
          </p>
        </div>
      </div>

      {/* =====================================================
          PICNIC TIP
      ===================================================== */}

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
        <p className="text-sm font-bold text-slate-900">
          Family picnic tip
        </p>

        <p className="mt-2 text-sm leading-7 text-slate-700">
          Carry enough drinking water, especially during warmer months, and
          choose a shaded or sheltered place where possible. The desert can
          feel comfortable in the morning but become much hotter later in the
          day.
        </p>
      </div>

      {/* =====================================================
          PALM GROVES & OASES
      ===================================================== */}

      <div
        id="exploring-palm-groves-and-desert-oases"
        className="scroll-mt-32 mt-12"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
            Nature Meets Local Life
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
            Exploring Palm Groves and Desert Oases
          </h3>

          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              One of the most interesting parts of a{" "}
              <strong>family one day trip near me</strong> in southern Morocco
              is seeing how green oases appear in an otherwise dry landscape.
              Palm groves around the{" "}
              <PlaceHoverCard place="ziz-valley">
                Ziz Valley
              </PlaceHoverCard>
              ,{" "}
              <PlaceHoverCard place="erfoud">
                Erfoud
              </PlaceHoverCard>{" "}
              and other nearby settlements show how closely local communities
              are connected to water and agriculture.
            </p>

            <p>
              Walking through a palm grove can also provide a welcome change
              from the open sun. Families may find narrow paths, date palms,
              small agricultural plots and traditional irrigation channels
              depending on where they stop.
            </p>

            <p>
              For children, this can become a simple outdoor lesson about how
              people grow food and manage water in a dry environment. Instead
              of only looking at monuments, children can see how geography,
              climate and everyday life are connected.
            </p>

            <p>
              This makes oasis walks useful for families who want their Morocco
              trip to combine adventure with learning.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          COMPARISON CARDS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-amber-100 bg-emerald-50/40 p-6">
          <GlobeEuropeAfricaIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Oasis Experience
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Palm trees, shaded paths, traditional farming and greener scenery
            create a calm family experience.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6">
          <SunIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Desert Experience
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Wide landscapes, sand dunes and open horizons around Merzouga
            create a more adventurous side of the day.
          </p>
        </div>
      </div>

      {/* =====================================================
          WILDLIFE
      ===================================================== */}

      <div
        id="wildlife-and-nature-experiences-for-families"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <EyeIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Observe & Learn
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Wildlife and Nature Experiences for Families
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            Southern Morocco may look empty at first, but the desert
            environment supports plants, birds and animals that are adapted to
            dry conditions. Families who take time to observe their
            surroundings can discover another side of the Sahara beyond the
            sand dunes.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            , seasonal wet areas can sometimes attract birdlife when conditions
            are suitable. Bird sightings vary by season and weather, so nature
            viewing is best treated as an opportunity rather than a guaranteed
            attraction.
          </p>

          <p>
            Children can also learn to notice desert plants, animal tracks and
            the differences between oasis vegetation and the open desert.
            Guided nature walks can make these details easier to understand,
            especially when a knowledgeable local guide explains how plants
            and animals survive in the region.
          </p>

          <p>
            For families interested in photography, wildlife or outdoor
            learning, these simple nature experiences can turn a normal day
            trip into something children remember because they were actively
            looking, discovering and asking questions.
          </p>
        </div>
      </div>

      {/* =====================================================
          WHY NATURE LOVING FAMILIES LIKE THIS REGION
      ===================================================== */}

      <div className="mt-10">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
            Why Families Love It
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
            Why Southern Morocco Works Well for Nature-Loving Families
          </h3>

          <p className="mt-5 text-[17px] leading-8 text-slate-700">
            The route through{" "}
            <PlaceHoverCard place="errachidia">
              Errachidia
            </PlaceHoverCard>
            , the{" "}
            <PlaceHoverCard place="ziz-valley">
              Ziz Valley
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>{" "}
            gives families several different landscapes without needing to
            cross the whole country. Children can see mountains, palm groves,
            agricultural land, rocky desert and the sand dunes of{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi
            </PlaceHoverCard>{" "}
            during the same wider journey.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5">
            <SparklesIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Different Landscapes
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Families can see an oasis, valley and Sahara landscape in the
              same region.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <UsersIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Easy to Adapt
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Stops can be shorter or longer depending on children&apos;s ages,
              weather and family energy.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <CameraIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Beautiful Memories
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Green palm groves and golden dunes provide very different family
              photo opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL READER TIP
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Planning Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Combine Nature Stops Instead of Rushing Between Attractions
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Families usually enjoy the region more when the day includes a few
          meaningful stops rather than a long list of attractions. A viewpoint
          in the{" "}
          <PlaceHoverCard place="ziz-valley">
            Ziz Valley
          </PlaceHoverCard>
          , time around{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          and a relaxed visit to{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          can already create a varied and memorable family nature day.
        </p>
      </div>
    </section>
  );
}
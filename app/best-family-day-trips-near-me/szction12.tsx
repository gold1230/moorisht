import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  CameraIcon,
  EyeIcon,
  MapPinIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function FamilyHiddenGemsMoroccoSection() {
  return (
    <section
      id="family-day-outings-near-me-hidden-gems-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Quieter Places for Family Adventures
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Family Day Outings Near Me: Hidden Gems in Morocco
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
          <strong>family day outings near me in Morocco</strong> often begin
          with the country&apos;s most famous attractions. However, some of the
          most enjoyable family memories can come from quieter places where
          there is more time to slow down, explore and experience everyday
          Moroccan life.
        </p>

        <p>
          Morocco has many peaceful landscapes, small communities, palm areas,
          scenic roads and less crowded stops that can be added to a family
          itinerary. These places may not always appear at the top of a typical
          tourist list, but they can give children and parents a more relaxed
          way to discover the country.
        </p>

        <p>
          This is especially true in southeastern Morocco. Around{" "}
          <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard> and{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
          families can move between desert scenery, traditional communities,
          palm landscapes and quiet viewpoints without needing to follow only
          the busiest tourist routes.
        </p>
      </div>

      {/* =====================================================
          IMAGE PLACEHOLDER
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Family exploring hidden gems and quiet landscapes during a Morocco day trip"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK HIDDEN GEM CARDS
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <MapPinIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Quiet Desert Stops
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Explore peaceful dune edges and scenic desert viewpoints away from
            the busiest stopping points.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <UsersIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Local Communities
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Learn about daily life and regional traditions through respectful
            visits to local communities.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <CameraIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Peaceful Photo Stops
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Find quieter landscapes where families can enjoy the scenery
            without feeling rushed.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Authentic Experiences
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Combine food, crafts, landscapes and local culture in a slower
            family day.
          </p>
        </div>
      </div>

      {/* =====================================================
          SECRET DESERT LOCATIONS
      ===================================================== */}

      <div
        id="secret-desert-locations-near-merzouga"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Beyond the Main Desert Stops
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Secret Desert Locations Near Merzouga
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
            families do not need to remain only at the busiest access points to
            enjoy the Sahara. The wider area around{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
            includes quieter dune edges, open desert landscapes and scenic
            viewpoints that can feel much calmer than the main activity areas.
          </p>

          <p>
            These quieter stops can work especially well for families because
            children have more time to look around, walk on the sand and enjoy
            the landscape without moving immediately to another attraction.
            Parents can also take family photographs and enjoy the silence of
            the Sahara.
          </p>

          <p>
            Depending on the route, local guide and current conditions, a
            family desert outing may include less crowded viewpoints, small
            settlements or palm areas around the wider Merzouga region. The
            exact stops should be chosen according to accessibility, weather
            and the age of the children.
          </p>

          <p>
            Families can also visit{" "}
            <PlaceHoverCard place="khamlia">Khamlia</PlaceHoverCard>,
            a community near Merzouga associated with regional musical
            traditions. A respectful visit can add a cultural experience to a
            day that would otherwise focus mainly on desert scenery.
          </p>
        </div>
      </div>

      {/* =====================================================
          DESERT TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Hidden Gem Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Quieter Does Not Mean Completely Unknown
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          The best family hidden gems are often places that are simply quieter
          than the main tourist stops. Choosing less busy viewpoints and
          spending more time in one area can create a better experience than
          trying to search for places that are difficult or unsafe to reach.
        </p>
      </div>

      {/* =====================================================
          QUIET VILLAGES
      ===================================================== */}

      <div
        id="quiet-family-friendly-villages"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Local Life & Slower Travel
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Quiet Family-Friendly Villages
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Small communities around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
            can show families a side of southeastern Morocco that is very
            different from major tourist attractions.
          </p>

          <p>
            Children may notice traditional building styles, palm agriculture,
            small shops, local food and the slower rhythm of daily life. These
            simple observations can become useful learning experiences because
            they help children understand that Morocco is not only a collection
            of famous monuments.
          </p>

          <p>
            A village visit should always be approached respectfully. These are
            living communities, not displays created for travelers. Families
            should ask before photographing people and follow local guidance
            when entering homes, workshops or private spaces.
          </p>

          <p>
            When visits happen naturally and respectfully, they can become some
            of the most meaningful parts of a family holiday because children
            have an opportunity to see everyday life instead of only tourist
            attractions.
          </p>
        </div>
      </div>

      {/* =====================================================
          RESPECTFUL TRAVEL BOX
      ===================================================== */}

      <div className="mt-7 flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <UsersIcon className="mt-1 hidden h-6 w-6 shrink-0 text-amber-700 sm:block" />

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
            Respect Local Communities
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            Treat Village Visits as Real Human Encounters
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Ask before taking close photographs of people, respect private
            spaces and avoid treating homes or villages as staged attractions.
            This creates a better experience for both local residents and your
            family.
          </p>
        </div>
      </div>

      {/* =====================================================
          LESS CROWDED ATTRACTIONS
      ===================================================== */}

      <div
        id="less-crowded-attractions-for-families"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Slow Down & Explore
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Less Crowded Attractions for Families
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Some of the best{" "}
            <strong>family friendly day trips near me</strong> can be built
            around places where the family has enough space and time to explore.
            Natural landscapes, valleys, smaller towns and scenic viewpoints
            can sometimes be more relaxing for children than extremely busy
            attractions.
          </p>

          <p>
            The{" "}
            <PlaceHoverCard place="ziz-valley">Ziz Valley</PlaceHoverCard>{" "}
            is a good example of a destination where families can focus on the
            scenery rather than a long list of attractions. Palm groves,
            viewpoints and the contrast between the green valley and dry
            mountains create an easy family nature experience.
          </p>

          <p>
            Families traveling farther west through southern Morocco may also
            enjoy quieter stops around{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>{" "}
            or the wider landscape around{" "}
            <PlaceHoverCard place="tinghir">Tinghir</PlaceHoverCard>.
            These areas allow parents to combine scenic roads with short walks
            and village stops.
          </p>

          <p>
            Choosing less crowded places also makes it easier to adapt the day.
            If children are tired, families can stop for a longer lunch. If
            everyone is enjoying a viewpoint, there is no need to rush to the
            next attraction.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAMILY HIDDEN GEM IDEAS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6">
          <EyeIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Look Beyond Famous Attractions
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            A palm grove, valley viewpoint or quiet desert stop may be more
            enjoyable for children than another crowded attraction.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6">
          <CameraIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Allow Time for Unplanned Stops
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Some of the best family photographs and memories happen at simple
            scenic stops that were not the main destination of the day.
          </p>
        </div>
      </div>

      {/* =====================================================
          AUTHENTIC EXPERIENCES
      ===================================================== */}

      <div
        id="authentic-experiences-away-from-tourist-crowds"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Meaningful Family Travel
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Authentic Experiences Away From Tourist Crowds
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            A memorable family holiday does not always depend on famous
            landmarks. Sometimes eating a local meal, watching a craftsperson
            work, talking with a guide about everyday life or spending quiet
            time in a beautiful landscape can become the experience children
            remember most.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>,
            families can learn about the region&apos;s fossil heritage and palm
            agriculture. Around{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>,
            local markets can introduce children to traditional trade and
            everyday products.
          </p>

          <p>
            Near{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
            families can experience Sahara landscapes while also learning that
            the region is home to real communities with their own histories,
            music and traditions.
          </p>

          <p>
            The goal should not be to search for an artificial version of
            &quot;authentic Morocco.&quot; A better approach is to travel
            slowly, remain respectful and take an interest in the places and
            people you naturally encounter along the route.
          </p>

          <p>
            That is what can make{" "}
            <strong className="font-bold text-white">
              family day out places near me
            </strong>{" "}
            more meaningful. The family is not simply collecting attractions;
            everyone is learning and experiencing Morocco together.
          </p>
        </div>
      </div>

      {/* =====================================================
          WHAT MAKES A HIDDEN GEM
      ===================================================== */}

      <div
        id="what-makes-a-good-family-hidden-gem"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          More Than a Secret Place
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          What Makes a Good Family Hidden Gem?
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    What to Look For
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Why It Helps Families
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Fewer Crowds
                  </td>

                  <td className="px-5 py-4 text-sm leading-6 text-slate-600">
                    Children have more room and families can move at their own
                    pace.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Local Character
                  </td>

                  <td className="px-5 py-4 text-sm leading-6 text-slate-600">
                    Families can learn about regional culture and everyday life.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Natural Scenery
                  </td>

                  <td className="px-5 py-4 text-sm leading-6 text-slate-600">
                    Valleys, dunes and palm landscapes provide easy family
                    experiences.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Easy Access
                  </td>

                  <td className="px-5 py-4 text-sm leading-6 text-slate-600">
                    A hidden gem is more useful when reaching it does not require
                    an exhausting journey with children.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Flexible Timing
                  </td>

                  <td className="px-5 py-4 text-sm leading-6 text-slate-600">
                    Families can stay longer when children are enjoying the
                    experience.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL TIP
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Planning Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Ask About Quieter Stops Along Your Existing Route
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          You do not always need to drive far away to find a hidden gem. Ask
          about peaceful viewpoints, palm areas, villages or scenic stops close
          to the route you are already traveling. This keeps the day easier for
          children while helping your family discover more of Morocco.
        </p>
      </div>

      {/* =====================================================
          FINAL SUMMARY
      ===================================================== */}

      <div className="mt-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Discover Morocco More Slowly
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Hidden Gems Can Create the Best Family Memories
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Famous attractions are an important part of many Morocco
            itineraries, but families should also leave space for smaller
            discoveries.
          </p>

          <p>
            A quiet desert stop near{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, a
            traditional market around{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>, a fossil
            experience in{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> or a scenic
            viewpoint over the{" "}
            <PlaceHoverCard place="ziz-valley">Ziz Valley</PlaceHoverCard>{" "}
            can become just as memorable as a famous monument.
          </p>

          <p>
            The best{" "}
            <strong>family day outings near me</strong> are often the ones that
            give parents and children enough time to look around, ask
            questions, meet people respectfully and enjoy being together
            without rushing to the next attraction.
          </p>
        </div>
      </div>
    </section>
  );
}
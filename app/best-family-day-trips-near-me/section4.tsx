import Link from "next/link";
import Image from "next/image";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import PlaceHoverCard from "@/Compentents/placeCard";

import {
  ArrowRightIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  CameraIcon,
  MapPinIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function FamilyCulturalExperiencesMoroccoSection() {
  return (
    <section
      id="day-out-with-family-near-me-cultural-experiences-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Culture, History & Local Life
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Day Out With Family Near Me: Cultural Experiences in Morocco
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
          A <strong>day out with family near me in Morocco</strong> can be much
          more than a visit to a beautiful landscape. Morocco is also a country
          of old trading towns, traditional markets, historic neighborhoods,
          local food, handmade crafts and strong family traditions. These
          cultural experiences can help children understand the places they are
          visiting instead of simply seeing them from a car window.
        </p>

        <p>
          Families traveling through southern Morocco can discover traditional
          markets in{" "}
          <PlaceHoverCard place="rissani">
            Rissani
          </PlaceHoverCard>
          , desert communities around{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>
          , while travelers visiting the larger imperial cities can experience
          the historic medinas of{" "}
          <PlaceHoverCard place="marrakech">
            Marrakech
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="fes">
            Fes
          </PlaceHoverCard>
          .
        </p>
                <Image
        src={MarrakechToFes4DayHero}
        alt="Family cultural day trip in Morocco exploring traditional places and local life"
        loading="lazy"
        width={700}
        height={400}

        className="my-7 w-full rounded-2xl object-cover"
        />

        <p>
          These destinations show different sides of Moroccan culture. A family
          can learn how markets work, see traditional architecture, observe
          artisans, taste local food and hear stories connected with the
          country&apos;s history. This makes cultural experiences especially
          useful for parents searching for{" "}
          <strong>family day trips near me in Morocco</strong> that combine fun
          with learning.
        </p>
      </div>

      {/* =====================================================
          QUICK CULTURAL HIGHLIGHTS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <MapPinIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Traditional Souks
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Discover spices, crafts, food and everyday local trade in Morocco&apos;s
            traditional markets.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <UsersIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Local Communities
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Learn about everyday life, family traditions and regional culture
            through respectful local encounters.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <BuildingLibraryIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Historic Places
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Explore old towns, kasbahs and places linked with Morocco&apos;s
            historic trade routes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Hands-On Experiences
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Food, crafts and music can make Moroccan culture easier and more
            enjoyable for children to understand.
          </p>
        </div>
      </div>

      {/* =====================================================
          SOUKS
      ===================================================== */}

      <div
        id="explore-ancient-markets-and-local-souks"
        className="scroll-mt-32 mt-12"
      >
        <div className="grid gap-7 lg:grid-cols-[70px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <MapPinIcon className="h-6 w-6" />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Markets & Everyday Life
            </p>

            <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Explore Ancient Markets and Local Souks
            </h3>

            <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
              <p>
                Visiting a traditional Moroccan souk can be one of the most
                interesting <strong>family day outings near me</strong> because
                markets bring food, crafts, history and daily life together in
                one place.
              </p>

              <p>
                In southern Morocco,{" "}
                <PlaceHoverCard place="rissani">
                  Rissani
                </PlaceHoverCard>{" "}
                is especially interesting because of its long connection with
                regional trade and the wider Tafilalet area. Families walking
                through the market can see food stalls, spices, household
                products, clothing and locally traded goods.
              </p>

              <p>
                Nearby{" "}
                <PlaceHoverCard place="erfoud">
                  Erfoud
                </PlaceHoverCard>{" "}
                also gives families a chance to experience the culture of
                southeastern Morocco before continuing toward the desert around{" "}
                <PlaceHoverCard place="merzouga">
                  Merzouga
                </PlaceHoverCard>
                .
              </p>

              <p>
                Families visiting{" "}
                <PlaceHoverCard place="marrakech">
                  Marrakech
                </PlaceHoverCard>{" "}
                or{" "}
                <PlaceHoverCard place="fes">
                  Fes
                </PlaceHoverCard>{" "}
                will find a different type of market experience. Their historic
                medinas contain narrow streets, workshops, food sellers and
                many traditional crafts.
              </p>

              <p>
                For children, a souk can become a sensory experience filled
                with colors, smells and sounds. Parents can make the visit more
                educational by explaining what is being sold, how products are
                made and how markets continue to play an important role in
                Moroccan daily life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MARKET TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Souk Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Give Children Something Specific to Look For
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Traditional markets can feel busy for younger travelers. Turning the
          visit into a small discovery activity can make it more enjoyable. Ask
          children to look for different spices, pottery, dates, fabrics or
          handmade objects while staying close to the family.
        </p>
      </div>

      {/* =====================================================
          TRADITIONAL VILLAGES
      ===================================================== */}

      <div
        id="visit-traditional-moroccan-villages"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff7ed] text-amber-700 sm:flex">
            <UsersIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Villages & Local Traditions
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Visit Traditional Moroccan Villages
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Traditional villages around{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>{" "}
            can help families understand that southeastern Morocco is much more
            than a desert destination.
          </p>

          <p>
            Communities in this region have developed ways of living that are
            closely connected with the climate, agriculture, oasis systems and
            local building materials. Walking through a village can help
            children notice how homes, streets and farming areas differ from
            those in larger Moroccan cities.
          </p>

          <p>
            These visits are especially valuable when they are approached with
            respect. Local villages are living communities rather than
            attractions created for visitors, so families should follow the
            guidance of local hosts, ask before taking close photographs of
            people and avoid interrupting private daily life.
          </p>

          <p>
            For families searching for authentic{" "}
            <strong>family day out places near me</strong>, a thoughtful village
            visit can add cultural meaning to a Sahara itinerary and create
            conversations that continue long after the trip.
          </p>
        </div>
      </div>

      {/* =====================================================
          GEO EXPLANATION BOX
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <div className="flex gap-4">
          <BookOpenIcon className="mt-1 hidden h-6 w-6 shrink-0 text-amber-700 sm:block" />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
              Understanding the Region
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Erfoud, Rissani and Merzouga Offer Different Cultural Experiences
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-slate-700">
              <PlaceHoverCard place="erfoud">
                Erfoud
              </PlaceHoverCard>{" "}
              is an important gateway town in southeastern Morocco,{" "}
              <PlaceHoverCard place="rissani">
                Rissani
              </PlaceHoverCard>{" "}
              is known for its regional market and historic importance, and{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>{" "}
              is closely connected with the Sahara and{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi
              </PlaceHoverCard>
              . Visiting more than one of these places can help families see
              how town life, trade and desert culture are connected.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          HISTORICAL SITES
      ===================================================== */}

      <div
        id="family-friendly-historical-sites-worth-visiting"
        className="scroll-mt-32 mt-12"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
            History Made Interesting
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
            Family-Friendly Historical Sites Worth Visiting
          </h3>

          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              Morocco&apos;s history becomes easier for children to understand
              when they can walk through real places instead of only reading
              dates and names. Historic towns, fortified buildings, kasbahs and
              old trading centers can help families imagine how people traveled
              and lived in earlier periods.
            </p>

            <p>
              The wider area around{" "}
              <PlaceHoverCard place="rissani">
                Rissani
              </PlaceHoverCard>{" "}
              has long been associated with the Tafilalet region and historic
              routes connecting settlements around the Sahara. This makes it a
              useful cultural stop for families traveling between{" "}
              <PlaceHoverCard place="erfoud">
                Erfoud
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>
              .
            </p>

            <p>
              Elsewhere in Morocco, families can explore places such as{" "}
              <PlaceHoverCard place="ait-ben-haddou">
                Ait Ben Haddou
              </PlaceHoverCard>
              , the historic medina of{" "}
              <PlaceHoverCard place="fes">
                Fes
              </PlaceHoverCard>{" "}
              or the traditional neighborhoods of{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>
              .
            </p>

            <p>
              These places help turn history into something visual. Children
              can see walls, gates, streets and traditional architecture while
              parents add simple explanations about trade, travel and life in
              earlier generations.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FAMILY HISTORY CARDS
      ===================================================== */}

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-5">
          <BuildingLibraryIcon className="h-6 w-6 text-amber-700" />

          <h4 className="mt-4 font-bold text-slate-900">
            Architecture
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Children can see how local materials and climate influenced
            traditional Moroccan buildings.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <MapPinIcon className="h-6 w-6 text-amber-700" />

          <h4 className="mt-4 font-bold text-slate-900">
            Trade Routes
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Southern towns help families understand the connection between
            desert travel, markets and regional trade.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <BookOpenIcon className="h-6 w-6 text-amber-700" />

          <h4 className="mt-4 font-bold text-slate-900">
            Learning Through Travel
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Historical places make stories about Morocco easier for younger
            travelers to imagine and remember.
          </p>
        </div>
      </div>

      {/* =====================================================
          LOCAL EXPERIENCES
      ===================================================== */}

      <div
        id="learn-about-moroccan-culture-through-local-experiences"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Interactive Family Experiences
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Learn About Moroccan Culture Through Local Experiences
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            One of the easiest ways to make a{" "}
            <strong>family day out with family near me</strong> more memorable
            is to include an activity that children can participate in rather
            than simply watch.
          </p>

          <p>
            Depending on the destination and what is genuinely available,
            families may be able to learn about Moroccan cooking, see artisans
            working with traditional materials, listen to regional music or
            discover how everyday foods such as bread are prepared.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            , cultural experiences may also introduce families to the musical
            traditions associated with nearby{" "}
            <PlaceHoverCard place="khamlia">
              Khamlia
            </PlaceHoverCard>
            . These experiences can add another layer to a Sahara visit beyond
            dunes and camel rides.
          </p>

          <p>
            The goal is not to collect as many activities as possible. A single
            meaningful interaction where children can ask questions, taste
            something new or watch a craft being made can be more memorable
            than several rushed sightseeing stops.
          </p>
        </div>
      </div>

      {/* =====================================================
          CULTURAL EXPERIENCE GRID
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-6">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Food & Family Learning
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Learning about bread, dates, tea or regional dishes can help
            children connect food with Moroccan family life and local
            traditions.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-6">
          <CameraIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Crafts & Creative Traditions
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Watching skilled artisans can show children how handmade Moroccan
            products are created and why traditional skills remain important.
          </p>
        </div>
      </div>

      {/* =====================================================
          WHY CULTURE WORKS WELL FOR FAMILIES
      ===================================================== */}

      <div className="mt-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          More Than Sightseeing
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Why Cultural Day Trips Can Be Great for Children
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Children often remember a destination better when they can connect
            it with something they saw, tasted, heard or tried themselves.
            Morocco&apos;s markets, villages, historic streets and local
            traditions create many opportunities for this type of learning.
          </p>

          <p>
            A cultural family day can also balance more active experiences. For
            example, a family staying near{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>{" "}
            can combine time around{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi
            </PlaceHoverCard>{" "}
            with a market visit in{" "}
            <PlaceHoverCard place="rissani">
              Rissani
            </PlaceHoverCard>
            , allowing children to experience both the natural and cultural
            sides of southeastern Morocco.
          </p>
        </div>
      </div>

      {/* =====================================================
          FINAL FAMILY TIP
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Culture Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Let Children Ask Questions
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Cultural visits are often more interesting for children when they
          have time to ask simple questions about food, clothing, crafts,
          buildings and daily life. A slower visit with a knowledgeable local
          guide can be more useful than rushing through several places.
        </p>
      </div>

      {/* =====================================================
          SOFT CTA
      ===================================================== */}

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link
          href="/plan-your-morocco-tour"
          className="group inline-flex items-center gap-2 rounded-xl bg-amber-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-800"
        >
          Plan a Family Morocco Trip

          <ArrowRightIcon
            className="h-4 w-4 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        <Link
          href="/morocco-travel-tips/"
          className="group inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition hover:text-amber-700"
        >
          Read More Morocco Travel Tips

          <ArrowRightIcon
            className="h-4 w-4 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
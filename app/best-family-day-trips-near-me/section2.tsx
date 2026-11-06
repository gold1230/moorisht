import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import {
  ArrowRightIcon,
  CameraIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function BestFamilyDayTripsMoroccoSection() {
  return (
    <section
      id="best-family-day-trips-near-me-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Adventures in Morocco
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Best Family Day Trips Near Me in Morocco
        </h2>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-0.5 w-8 bg-amber-700" />
          <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
          <span className="h-0.5 w-8 bg-amber-700" />
        </div>

        <p className="mt-6 text-[17px] leading-8 text-slate-700">
          Morocco offers many choices for families looking for{" "}
          <strong>family day trips near me in Morocco</strong>. Some families
          want an easy day surrounded by nature, while others prefer culture,
          adventure or an experience that children will remember after the
          holiday. In southeastern Morocco, the Sahara region brings all of
          these experiences together in one area.
        </p>

        <p className="mt-4 text-[17px] leading-8 text-slate-700">
          Travelers staying around{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          can reach{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          and the{" "}
          <PlaceHoverCard place="erg-chebbi">
            Erg Chebbi dunes
          </PlaceHoverCard>{" "}
          without turning the day into a long road journey. This makes the
          region especially useful for parents who want a mix of desert
          scenery, family activities and local culture in a single day.
        </p>
      </div>

      {/* =====================================================
          QUICK ANSWER BOX
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <div className="flex gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm sm:flex">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
              Quick Answer
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Where Can Families Spend an Amazing Day Near Erfoud?
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-slate-700">
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi
              </PlaceHoverCard>{" "}
              are among the most practical choices. Families can combine desert
              views, camel riding, time on the dunes, photography and local
              experiences without needing a multi-day itinerary.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          1. ERFOUD TO MERZOUGA
      ===================================================== */}

      <div
        id="family-day-trip-to-merzouga-desert-from-erfoud"
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
              Easy Sahara Escape
            </p>

            <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
              Family Day Trip to Merzouga Desert from Erfoud
            </h3>

            <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
              <p>
                A family{" "}
                <Link
                  href="/erfoud-sahara-tours-4x4-desert-vehicles/"
                  className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-700"
                >
                  day trip from Erfoud to Merzouga
                </Link>{" "}
                is a practical way to experience the Sahara without spending
                most of the day traveling.{" "}
                <PlaceHoverCard place="erfoud">
                  Erfoud
                </PlaceHoverCard>{" "}
                acts as an important gateway toward the desert, while{" "}
                <PlaceHoverCard place="merzouga">
                  Merzouga
                </PlaceHoverCard>{" "}
                sits beside the famous{" "}
                <PlaceHoverCard place="erg-chebbi">
                  Erg Chebbi dunes
                </PlaceHoverCard>
                .
              </p>

              <p>
                The journey gives families a gradual change of scenery as the
                towns and open landscapes give way to the Sahara environment.
                This change can be exciting for children because the desert
                feels very different from the cities and valleys they may have
                already seen during a Morocco trip.
              </p>

              <p>
                When families reach{" "}
                <PlaceHoverCard place="merzouga">
                  Merzouga
                </PlaceHoverCard>
                , they can spend time near the dunes, walk on the sand, enjoy
                the views and take family photographs. Parents can keep the day
                simple or add activities depending on the age and energy level
                of the children.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          2. FAMILY DAY OUT SAHARA
      ===================================================== */}

      <div
        id="family-day-out-in-the-sahara-desert"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff7ed] text-amber-700 sm:flex">
            <SunIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
              Nature & Open Space
            </p>

            <h3 className="mt-1 text-2xl font-bold text-[#102043]">
              Family Day Out in the Sahara Desert
            </h3>
          </div>
        </div>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A family day in the Sahara gives children and adults a chance to
            experience a landscape that feels completely different from busy
            towns. Around{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            , the open desert and the large{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>{" "}
            create space for walking, photography and quiet family time.
          </p>

          <p>
            Children often enjoy the freedom of being outdoors and discovering
            the shapes, colors and textures of the desert. Parents can enjoy
            the slower atmosphere while still giving the family a day that
            feels adventurous.
          </p>

          <p>
            For travelers searching for a{" "}
            <strong>day out with the family near me</strong>, the Sahara can be
            more than a sightseeing stop. It can combine nature, learning,
            movement and time together in one experience.
          </p>
        </div>
      </div>

      {/* =====================================================
          3. CAMEL TREKKING
      ===================================================== */}

      <div
        id="family-friendly-camel-trekking-experiences"
        className="scroll-mt-32 mt-12"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
            Classic Desert Experience
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
            Family-Friendly Camel Trekking Experiences
          </h3>

          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              Camel trekking is one of the most recognizable{" "}
              <Link
                href="/activity/camel-trekking-in-the-desert/"
                className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-700"
              >
                activities in Morocco
              </Link>{" "}
              and can be an enjoyable addition to a family visit to{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>
              . Moving slowly across the sand gives families time to enjoy the
              surroundings rather than rushing from one attraction to another.
            </p>

            <p>
              Short camel experiences can work well for families because they
              allow parents and children to try something different without
              committing to a long desert journey. A local guide can explain
              how to sit comfortably, how the ride works and what to expect
              before entering the dunes.
            </p>

            <p>
              The views across{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi
              </PlaceHoverCard>{" "}
              are also part of the experience. Families can stop for photos and
              enjoy the changing light across the sand, especially later in the
              day.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
          <p className="text-sm font-bold text-slate-900">
            Tip for parents
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-700">
            For younger children, ask about the length of the camel ride before
            booking. A shorter experience can often be more comfortable and
            enjoyable than a long trek.
          </p>
        </div>
      </div>

      {/* =====================================================
          4. AMAZIGH VILLAGES
      ===================================================== */}

      <div
        id="visiting-traditional-amazigh-villages-with-your-family"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <UsersIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Culture & Local Life
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Visiting Traditional Amazigh Villages With Your Family
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            A visit to an Amazigh village can add a cultural side to a family
            desert excursion. Instead of seeing only landscapes, children can
            learn that the Sahara region is also home to communities with their
            own traditions, architecture and ways of life.
          </p>

          <p>
            Families may see traditional homes, agricultural areas, local
            crafts or everyday village activity depending on the route and the
            places visited. These experiences can help children understand that
            Morocco is made up of many different regions and communities.
          </p>

          <p>
            Parents often appreciate this kind of stop because it turns a day
            trip into something more meaningful than simply taking photos. The
            most respectful experiences are those that treat local communities
            as real places to learn about rather than staged attractions.
          </p>
        </div>
      </div>

      {/* =====================================================
          5. ERG CHEBBI FAMILY ADVENTURE
      ===================================================== */}

      <div
        id="family-adventure-at-erg-chebbi-sand-dunes"
        className="scroll-mt-32 mt-12"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
            Best for Family Adventure
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
            Family Adventure at Erg Chebbi Sand Dunes
          </h3>

          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>
              The{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi dunes
              </PlaceHoverCard>{" "}
              are the main natural attraction around{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>{" "}
              and one of the easiest places in the region to create a memorable
              family desert experience.
            </p>

            <p>
              Families can climb smaller dunes, enjoy wide desert views, try
              activities such as sandboarding where available, and watch the
              colors of the sand change as the light moves across the
              landscape.
            </p>

            <p>
              Children often enjoy the dunes because the experience feels
              active rather than formal. They can move, explore and discover
              the desert at their own pace, while parents can enjoy the scenery
              and take photos of the family together.
            </p>

            <p>
              For travelers searching for{" "}
              <strong>fun family day trips near me</strong>,{" "}
              <strong>family day out places near me</strong>, or a{" "}
              <strong>one day trip near me with family</strong>, Erg Chebbi can
              be especially appealing when staying around Erfoud or Merzouga
              because many different activities can be combined in the same
              area.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          EXPERIENCE SUMMARY
      ===================================================== */}

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <CameraIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Best for Family Memories
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Desert landscapes, camel rides and dune views give families many
            opportunities for memorable photos and shared experiences.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <UsersIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Best for Different Ages
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Families can adapt the day by choosing shorter walks, camel rides,
            scenic stops or more active desert experiences depending on the
            children&apos;s ages.
          </p>
        </div>
      </div>

      {/* =====================================================
          INTERNAL CTA
      ===================================================== */}

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link
          href="/erfoud-sahara-tours-4x4-desert-vehicles/"
          className="group inline-flex items-center gap-2 rounded-xl bg-amber-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-800"
        >
          Explore Erfoud Sahara Trips

          <ArrowRightIcon
            className="h-4 w-4 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        <Link
          href="/locations/merzouga/"
          className="group inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition hover:text-amber-700"
        >
          Discover Merzouga

          <ArrowRightIcon
            className="h-4 w-4 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
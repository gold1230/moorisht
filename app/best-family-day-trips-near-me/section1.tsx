import PlaceHoverCard from "@/Compentents/placeCard";

import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FamilyDayTripsNearMeSection() {
  return (
    <section
      id="family-day-trips-near-me-in-morocco"
      className="scroll-mt-32 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Travel in Morocco
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Family Day Trips Near Me in Morocco: Best Places for an Amazing
          Family Adventure
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
          Looking for{" "}
          <strong>family day trips near me in Morocco</strong>{" "}
          does not always mean spending many hours on the road. Morocco has many
          places where families can enjoy a complete day of nature, culture and
          adventure without needing a long multi-day journey. One very good
          example is the route between{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>
          , two important destinations in southeastern Morocco.
        </p>

        <p>
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          is located on the edge of the famous{" "}
          <PlaceHoverCard place="erg-chebbi">
            Erg Chebbi dunes
          </PlaceHoverCard>
          , while{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          is one of the main gateway towns for travelers heading toward the
          Sahara. The drive between them is usually short enough to make a
          one-day desert experience possible for families staying in Erfoud or
          the surrounding area.
        </p>

        <p>
          A family can leave in the morning, travel toward{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>
          , spend time exploring the desert landscape and return later in the
          day. Depending on the excursion you choose, the day may include a
          camel ride, time among the dunes, lunch near the desert, short walks,
          family photos and time to enjoy the peaceful Sahara scenery.
        </p>
      </div>

      {/* =====================================================
          QUICK FAMILY EXPERIENCE CARDS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm">
            <ClockIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Easy Day Trip
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            A practical option for families who want to see the Sahara without
            planning several days away.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm">
            <UsersIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Family Friendly
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Parents and children can enjoy the scenery together at a relaxed
            pace with plenty of stops.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm">
            <MapPinIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Sahara Landscape
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            See the golden dunes of Erg Chebbi and experience a very different
            side of Morocco.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-bold text-slate-900">
            Memorable Experience
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Camel rides, desert views and family photos can make the day feel
            special without a complicated itinerary.
          </p>
        </div>
      </div>

      {/* =====================================================
          READER-FOCUSED CONTENT
      ===================================================== */}

      <div className="mt-8 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
        <h3 className="text-2xl font-bold text-[#102043]">
          Why Merzouga Works Well for a Family Day Trip
        </h3>

        <p>
          For families, one of the biggest advantages of visiting{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          from{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          is that you can experience a real desert environment without spending
          the whole day inside a vehicle. Once you reach the dunes, the
          experience becomes more relaxed and children have space to see the
          sand, walk around and enjoy the open landscape.
        </p>

        <p>
          The area around{" "}
          <PlaceHoverCard place="erg-chebbi">
            Erg Chebbi
          </PlaceHoverCard>{" "}
          is also visually very different from Morocco&apos;s cities. For
          children, this can make the trip feel like a real adventure rather
          than another sightseeing stop. For parents, it offers a simple way to
          combine nature, family time and a memorable Sahara experience in one
          day.
        </p>
      </div>

      {/* =====================================================
          TRAVEL TIP
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Travel Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Keep the Day Flexible When Traveling With Children
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          If you are traveling with younger children, avoid planning too many
          activities in one day. A simple combination of desert scenery, a
          short camel experience, lunch and free time around the dunes is often
          more enjoyable than trying to fit many stops into a tight schedule.
        </p>
      </div>

      {/* =====================================================
          SOFT INTERNAL CTA
      ===================================================== */}

      <div className="mt-7">
        <Link
          href="/locations/merzouga/"
          className="group inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition hover:text-amber-700"
        >
          Discover more about Merzouga

          <ArrowRightIcon
            className="h-4 w-4 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
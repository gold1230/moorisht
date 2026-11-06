import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  AcademicCapIcon,
  CameraIcon,
  MapIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function FamilyFriendlyDayTripsFromErfoudSection() {
  return (
    <section
      id="family-friendly-day-trips-near-me-from-erfoud"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION TITLE
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Easy Family Excursions From Erfoud
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Family Friendly Day Trips Near Me From Erfoud
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
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          is one of the most practical starting points for travelers searching
          for <strong>family friendly day trips near me in Morocco</strong>.
          Its location in southeastern Morocco gives families access to desert
          landscapes, traditional towns, palm-filled valleys, fossil sites and
          the Sahara without needing to spend the entire day on the road.
        </p>

        <p>
          Families can choose between adventure, culture, nature and educational
          experiences depending on the age of the children and the type of day
          they want. A family that enjoys outdoor activities can travel toward{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          and the{" "}
          <PlaceHoverCard place="erg-chebbi">
            Erg Chebbi dunes
          </PlaceHoverCard>
          , while families interested in local life can spend time in{" "}
          <PlaceHoverCard place="rissani">
            Rissani
          </PlaceHoverCard>
          .
        </p>

        <p>
          Another advantage of staying in{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          is that families can return to their accommodation after a full day
          of exploration. This makes the town a useful base for parents who
          want to experience the Sahara region while keeping the trip simple
          and comfortable for children.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Family friendly day trip from Erfoud through the desert landscapes of southeastern Morocco"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK OVERVIEW
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <MapPinIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Merzouga
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            A family Sahara experience with dunes, camel rides and wide desert
            scenery.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Rissani
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Discover a traditional market town with strong links to regional
            history and trade.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <AcademicCapIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Fossil Discovery
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Turn a family outing into an easy geology and natural-history
            experience.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <CameraIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Scenic Roads
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enjoy palm groves, open desert and changing landscapes with easy
            photo stops.
          </p>
        </div>
      </div>

      {/* =====================================================
          MERZOUGA DAY TRIP
      ===================================================== */}

      <div
        id="easy-day-trips-to-merzouga"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Sahara Family Adventure
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Easy Day Trips to Merzouga
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A day trip from{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            to{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>{" "}
            is one of the easiest ways for families to experience the Sahara
            during a short stay in southeastern Morocco. Merzouga sits beside
            the impressive{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>
            , one of the best-known dune areas in Morocco.
          </p>

          <p>
            The journey between the two destinations is manageable for a family
            day out and gives children a chance to watch the scenery gradually
            change as the road approaches the desert. Depending on the route,
            families can stop for photographs, see small settlements and learn
            more about daily life in the region.
          </p>

          <p>
            Once in{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            , families can keep the experience simple. Children may enjoy
            walking on smaller dunes, spending time in the sand or trying a
            short camel experience. Parents can enjoy the open landscape and
            the slower atmosphere of the Sahara.
          </p>

          <p>
            For travelers searching for a{" "}
            <strong>one day trip near me with family</strong>, the route from
            Erfoud to Merzouga works particularly well because it offers a real
            change of scenery without requiring a multi-day desert itinerary.
          </p>
        </div>
      </div>

      {/* =====================================================
          MERZOUGA TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Desert Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Keep the Merzouga Day Simple
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          With younger children, a short camel experience, free time on the
          dunes and a relaxed meal can be enough for a memorable day. You do
          not need to fill every hour with activities.
        </p>
      </div>

      {/* =====================================================
          RISSANI
      ===================================================== */}

      <div
        id="family-excursions-to-rissani"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Culture & Local Life
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Family Excursions to Rissani
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="rissani">
              Rissani
            </PlaceHoverCard>{" "}
            is another interesting destination for families looking for a
            cultural <strong>day out with family near me</strong> from Erfoud.
            The town has long been important within the Tafilalet region and is
            known today for its traditional market and local atmosphere.
          </p>

          <p>
            Families can walk through the market and see a very different side
            of Morocco from the nearby desert. Children may notice spices,
            dates, clothing, household goods, food stalls and local products
            being bought and sold.
          </p>

          <p>
            A visit to{" "}
            <PlaceHoverCard place="rissani">
              Rissani
            </PlaceHoverCard>{" "}
            also gives parents an opportunity to explain how markets have long
            connected towns, villages and travelers across southeastern
            Morocco.
          </p>

          <p>
            The wider area is connected with the history of the Alaouite
            dynasty and the historic trade routes that linked communities
            around the Sahara. This gives families a chance to combine everyday
            local life with a simple introduction to Moroccan history.
          </p>
        </div>
      </div>

      {/* =====================================================
          QUICK CULTURAL ANSWER
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Good to Know
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Why Combine Erfoud and Rissani?
        </h3>

        <p className="mt-3 max-w-3xl text-[16px] leading-7 text-slate-700">
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          is a useful base for exploring southeastern Morocco, while nearby{" "}
          <PlaceHoverCard place="rissani">
            Rissani
          </PlaceHoverCard>{" "}
          offers a more traditional market-town experience. Combining the two
          helps families see both the modern travel gateway and the cultural
          life of the wider Tafilalet region.
        </p>
      </div>

      {/* =====================================================
          FOSSIL SITES
      ===================================================== */}

      <div
        id="exploring-fossil-sites-with-children"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Learn Through Discovery
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Exploring Fossil Sites With Children
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Exploring fossil-related sites around{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            can be one of the most unusual{" "}
            <strong>family day outings near me</strong> in Morocco. The wider
            region is known for fossil-bearing rocks, and local workshops often
            display fossils preserved inside stone.
          </p>

          <p>
            Children can see shapes from ancient marine life and begin to
            understand that the landscape around Erfoud looked very different
            millions of years ago. Seeing a fossil directly can make geology
            much easier for children to understand than simply reading about it
            in a book.
          </p>

          <p>
            Families may also see how fossil stone is prepared and used in
            decorative objects. Parents can encourage children to look closely
            at the patterns and compare the fossils with living animals they
            already recognize.
          </p>

          <p>
            A fossil visit can easily be combined with other nearby attractions,
            helping families create a day that includes both education and
            adventure.
          </p>
        </div>
      </div>

      {/* =====================================================
          FOSSIL TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <AcademicCapIcon className="h-6 w-6 text-amber-700" />

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          Turn Fossil Hunting Into a Small Learning Game
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Ask children to identify different shapes, count visible fossils or
          guess whether an object came from the sea. Simple questions can make
          the visit more interactive without making it feel like a lesson.
        </p>
      </div>

      {/* =====================================================
          SCENIC DRIVES
      ===================================================== */}

      <div
        id="scenic-drives-through-southern-morocco"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <MapIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Relaxed Family Exploration
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Scenic Drives Through Southern Morocco
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            Not every family day needs a long list of activities. A scenic
            drive from{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            can be an easy way to enjoy southeastern Morocco while keeping the
            day comfortable for children and parents.
          </p>

          <p>
            The wider region contains rocky desert, palm groves, traditional
            settlements and long open roads. Families can stop at viewpoints,
            take photographs and let children observe how quickly the
            landscapes change.
          </p>

          <p>
            One possible route can include the green scenery around the{" "}
            <PlaceHoverCard place="ziz-valley">
              Ziz Valley
            </PlaceHoverCard>
            , the surroundings of{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            and the increasingly dry landscapes leading toward{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            .
          </p>

          <p>
            For travelers searching for{" "}
            <strong className="font-bold text-white">
              family day outings near me
            </strong>
            , a scenic drive can work especially well with younger children
            because stops can be added whenever the family needs a break.
          </p>
        </div>
      </div>

      {/* =====================================================
          SCENIC DRIVE CARDS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <CameraIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Easy Photo Stops
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Stop when the scenery changes and create family photos without
            following a strict sightseeing schedule.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <MapPinIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Different Landscapes
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            See oasis vegetation, rocky terrain and Sahara scenery during the
            same wider journey.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Flexible for Families
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            A private route can be adjusted around meal times, rest stops and
            the energy level of younger travelers.
          </p>
        </div>
      </div>

      {/* =====================================================
          FINAL SUMMARY
      ===================================================== */}

      <div className="mt-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          One Base, Many Family Experiences
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Why Erfoud Is a Good Base for Family Day Trips
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Staying in{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            gives families several different day-trip possibilities without
            needing to change accommodation every night. The Sahara around{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            , the traditional atmosphere of{" "}
            <PlaceHoverCard place="rissani">
              Rissani
            </PlaceHoverCard>
            , nearby fossil experiences and the landscapes of the{" "}
            <PlaceHoverCard place="ziz-valley">
              Ziz Valley
            </PlaceHoverCard>{" "}
            can all form part of a wider family itinerary.
          </p>

          <p>
            This variety is useful because every family is different. Some
            children enjoy outdoor adventure, others prefer markets and local
            culture, while curious young travelers may be most interested in
            fossils and natural history.
          </p>

          <p>
            Rather than trying to see everything at once, families can choose
            the experience that best matches their interests and enjoy a more
            relaxed day together.
          </p>
        </div>
      </div>

      {/* =====================================================
          FINAL FAMILY TIP
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Planning Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Choose One Main Experience and Add Small Stops
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          For example, make{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          the main destination and add one or two short stops along the way.
          This usually gives children more time to enjoy the experience and
          keeps the family day relaxed.
        </p>
      </div>
    </section>
  );
}
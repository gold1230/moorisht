import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";


import {
  AcademicCapIcon,
  CameraIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function FamilyDayOutPlacesForKidsSection() {
  return (
    <section
      id="family-day-out-places-near-me-for-kids"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION TITLE
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Adventures for Children
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Family Day Out Places Near Me for Kids
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
          Finding the best{" "}
          <strong>family day out places near me for kids</strong>{" "}
          is an important part of planning a family holiday in Morocco. Parents
          usually want more than a beautiful place. They also want experiences
          that are comfortable, interesting and enjoyable for children while
          giving the whole family something meaningful to remember.
        </p>

        <p>
          Morocco works especially well for family travel because children can
          experience many different environments during the same holiday. A
          family can explore lively traditional towns, walk through palm
          groves, discover local markets, learn about fossils and finish the day
          beside the golden dunes of the Sahara.
        </p>

        <p>
          Southeastern Morocco is particularly interesting for families.
          Places such as{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>
          ,{" "}
          <PlaceHoverCard place="rissani">
            Rissani
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          are close enough to combine nature, culture and desert activities
          without spending the entire day driving.
        </p>
      </div>

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="relative my-8 h-[400px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
        <Image
          src={MarrakechToFes4DayHero}
          alt="Family with children enjoying a Sahara desert day trip among sand dunes in Morocco"
          width={950}
            height={400}
          
          sizes="(max-width: 1024px) 100vw, 850px"
          className="object-cover"
        />
      </div>
    

      {/* =====================================================
          INTRODUCTION CONTINUED
      ===================================================== */}

      <div className="max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
        <p>
          A <strong>day out with the family near me</strong> can be a short
          experience close to your accommodation or a complete private day trip
          through the region. Families staying around{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>{" "}
          have several possibilities nearby, including the Sahara around{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>
          , the traditional market atmosphere of{" "}
          <PlaceHoverCard place="rissani">
            Rissani
          </PlaceHoverCard>
          , palm groves and areas connected with the region&apos;s fossil
          heritage.
        </p>

        <p>
          This variety is what makes southeastern Morocco useful for travelers
          searching for{" "}
          <strong>Family Day Trips Near Me in Morocco</strong>. Parents can
          choose active experiences for energetic children, educational stops
          for curious young travelers or a slower day with scenic views and
          plenty of breaks.
        </p>
      </div>

      {/* =====================================================
          FAMILY HIGHLIGHTS
      ===================================================== */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Interactive Fun
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Children can walk on dunes, discover local traditions and take part
            in simple family activities.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <MapPinIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Nearby Attractions
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Erfoud, Rissani and Merzouga provide several family attractions
            within the same region.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <AcademicCapIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Learn While Traveling
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Fossils, markets, villages and desert landscapes can turn travel
            into an enjoyable learning experience.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <CameraIcon className="h-5 w-5" />
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900">
            Family Memories
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Desert views and cultural experiences give families many memorable
            moments to photograph together.
          </p>
        </div>
      </div>

      {/* =====================================================
          INTERACTIVE ACTIVITIES
      ===================================================== */}

      <div
        id="interactive-activities-children-will-love"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Hands-On Family Fun
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Interactive Activities Children Will Love
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Children usually enjoy holidays more when they can participate
            instead of only watching. This is one reason Morocco works well for{" "}
            <strong>fun family day trips near me</strong>. A child can touch the
            sand, explore a market, watch a craft being made or ask questions
            about a completely different way of life.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>
            , families can spend time near the{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>
            . Children can walk on smaller dunes, play in the sand and enjoy
            the enormous open landscape.
          </p>

          <p>
            A short camel ride can also become a memorable part of the day for
            families who choose an experience suitable for their
            children&apos;s ages. Moving slowly through the desert gives
            children time to look around and enjoy the scenery without making
            the activity feel rushed.
          </p>

          <p>
            Local cultural activities can add even more variety. Depending on
            the itinerary, families may see traditional bread preparation,
            learn about local crafts or discover how people live in
            southeastern Morocco.
          </p>

          <p>
            For families looking for a{" "}
            <strong>one day family trip near me</strong>, activities like these
            help children remain interested because they are doing something
            rather than simply moving from one sightseeing stop to another.
          </p>
        </div>
      </div>

      {/* =====================================================
          PARENT TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Tip for Parents
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Choose Experiences Children Can Join
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Younger travelers often remember activities more clearly than long
          explanations. Give them time to walk, ask questions, take photos and
          explore safely rather than trying to fit too many stops into one day.
        </p>
      </div>

      {/* =====================================================
          DESERT EXPERIENCES
      ===================================================== */}

      <div
        id="fun-desert-experiences-for-young-travelers"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Sahara Adventure
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Fun Desert Experiences for Young Travelers
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The Sahara is one of the most memorable choices for a{" "}
            <strong>family friendly day trip near me</strong> because children
            get to see a landscape that feels completely different from home.
            The desert is not only about sand. It is also a place connected with
            local communities, traditions and unique natural conditions.
          </p>

          <p>
            Families can travel from{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            toward{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>{" "}
            and experience the dramatic{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>
            . Once there, children can enjoy a short camel experience, walk in
            the sand, take photographs and simply enjoy being surrounded by the
            Sahara landscape.
          </p>

          <p>
            Families can also combine the desert with quieter activities such
            as a relaxed meal, a visit to an oasis or time in one of the
            surrounding settlements. Keeping the schedule flexible can make the
            experience much easier for families with younger children.
          </p>

          <p>
            A <strong>family one day trip near me</strong> in this area can be
            organized with private transportation and regular breaks, giving
            parents more control over the pace of the journey.
          </p>
        </div>
      </div>

      {/* =====================================================
          ERFOUD FAMILY ATTRACTIONS
      ===================================================== */}

      <div
        id="family-friendly-attractions-near-erfoud"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Easy Family Base
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Family-Friendly Attractions Near Erfoud
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            is a useful base for travelers searching for{" "}
            <strong>family day trips near me</strong> because several
            interesting experiences are located in the surrounding region. The
            town is known for dates, desert landscapes and its connection with
            an area famous for fossils.
          </p>

          <p>
            Fossil workshops can be especially interesting for children. They
            may see ancient marine fossils preserved in stone and learn how the
            geology of southeastern Morocco tells a story about environments
            that existed millions of years ago.
          </p>

          <p>
            Parents can turn the stop into a simple educational experience by
            asking children to notice the different fossil shapes and compare
            them with animals they know today.
          </p>

          <p>
            Families can also combine time around{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>{" "}
            with a visit to{" "}
            <PlaceHoverCard place="rissani">
              Rissani
            </PlaceHoverCard>
            , where the market and traditional town atmosphere show another
            side of local life.
          </p>
        </div>
      </div>

      {/* =====================================================
          QUICK ANSWER
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Good to Know
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          What Can Families Visit Near Erfoud?
        </h3>

        <p className="mt-3 max-w-3xl text-[16px] leading-7 text-slate-700">
          From{" "}
          <PlaceHoverCard place="erfoud">
            Erfoud
          </PlaceHoverCard>
          , families can explore nearby fossil-related attractions, travel to
          the traditional market town of{" "}
          <PlaceHoverCard place="rissani">
            Rissani
          </PlaceHoverCard>{" "}
          or continue toward{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="erg-chebbi">
            Erg Chebbi
          </PlaceHoverCard>{" "}
          for a Sahara experience.
        </p>
      </div>

      {/* =====================================================
          EDUCATIONAL PLACES
      ===================================================== */}

      <div
        id="educational-places-to-visit-with-children"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <AcademicCapIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Learning Through Travel
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Educational Places to Visit With Children
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            A good family trip does not need to separate learning from fun.
            Morocco gives children many opportunities to understand history,
            geology, nature and culture through the places they visit.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>
            , fossils and geology can introduce children to the natural history
            of the region. This type of experience is often easier to
            understand than reading the same information from a book because
            children can see the objects directly.
          </p>

          <p>
            Traditional markets and towns also provide another type of
            education. A visit to{" "}
            <PlaceHoverCard place="rissani">
              Rissani
            </PlaceHoverCard>{" "}
            can help children learn how local markets work, while a journey to{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>{" "}
            introduces them to the relationship between communities and the
            Sahara environment.
          </p>

          <p>
            These experiences make southern Morocco particularly interesting
            for parents searching for{" "}
            <strong className="font-bold text-white">
              fun days out for families near me
            </strong>{" "}
            that combine adventure with real learning opportunities.
          </p>
        </div>
      </div>

      {/* =====================================================
          FINAL SUMMARY
      ===================================================== */}

      <div className="mt-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          A Day Children Can Remember
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Why Southeastern Morocco Works Well for Family Days Out
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The combination of{" "}
            <PlaceHoverCard place="erfoud">
              Erfoud
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="rissani">
              Rissani
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="merzouga">
              Merzouga
            </PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi
            </PlaceHoverCard>{" "}
            gives families several very different experiences within the same
            wider region.
          </p>

          <p>
            Children can learn about fossils in the morning, discover a
            traditional market and later experience the open Sahara dunes. This
            variety helps keep a family day interesting while allowing parents
            to adapt the schedule to their children&apos;s interests and energy
            levels.
          </p>
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
          Do Not Try to Fit Everything Into One Day
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Choose two or three experiences that match your children&apos;s ages.
          A fossil visit, time in{" "}
          <PlaceHoverCard place="rissani">
            Rissani
          </PlaceHoverCard>{" "}
          and a relaxed Sahara experience around{" "}
          <PlaceHoverCard place="merzouga">
            Merzouga
          </PlaceHoverCard>{" "}
          can already make a full and memorable family day.
        </p>
      </div>
    </section>
  );
}
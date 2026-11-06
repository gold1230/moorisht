import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function FamilyDayTripsFAQConclusionSection() {
  return (
    <section
      id="frequently-asked-questions-about-family-day-trips-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Travel Questions Answered
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Frequently Asked Questions About Family Day Trips in Morocco
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
          Planning a <strong>family day trip in Morocco</strong> is a simple
          way to discover the country&apos;s culture, landscapes, history and
          local life without needing to change hotels every day. Families can
          choose between desert adventures, traditional cities, mountain
          scenery, valleys, coastal destinations and quieter cultural
          experiences.
        </p>

        <p>
          Travelers searching for{" "}
          <strong>family day trips near me</strong>,{" "}
          <strong>fun family day trips near me</strong> or{" "}
          <strong>family friendly day trips near me</strong> should always
          begin with their location. A good day trip from{" "}
          <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> will look very
          different from a family excursion starting in{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> or{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>.
        </p>

        <p>
          The questions below answer some of the most common things families
          want to know before organizing a Morocco day trip, especially around{" "}
          <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and the
          Sahara.
        </p>
      </div>

      {/* =====================================================
          IMAGE PLACEHOLDER
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Family enjoying a Morocco day trip with desert landscapes and cultural experiences"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK ANSWER CARDS
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <MapPinIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Choose Nearby Places
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            A closer destination usually gives children more time to explore
            and less time sitting in a vehicle.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <UsersIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Keep It Flexible
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Leave enough time for meals, rest, photographs and unexpected
            family stops.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Mix Fun With Learning
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Desert landscapes, fossils, markets and crafts can keep children
            interested while they learn.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <CheckCircleIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Plan for Comfort
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Weather, transportation, water, meals and the children&apos;s ages
            should shape the itinerary.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 1
      ===================================================== */}

      <div
        id="what-are-the-best-family-day-trips-near-me-in-morocco"
        className="scroll-mt-32 mt-12"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          What Are the Best Family Day Trips Near Me in Morocco?
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The best <strong>family day trips near me in Morocco</strong>{" "}
            depend on where your family is staying and what everyone enjoys.
            Morocco offers desert trips, cultural visits, nature experiences,
            historical attractions and relaxing excursions.
          </p>

          <p>
            For families staying in southeastern Morocco, a day trip from{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> to{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is one
            of the most practical options. Families can experience the{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>
            , desert scenery and nearby cultural experiences without committing
            to a long multi-day route.
          </p>

          <p>
            Other nearby possibilities include{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>, fossil
            experiences around Erfoud and the{" "}
            <PlaceHoverCard place="ziz-valley">Ziz Valley</PlaceHoverCard>.
          </p>

          <p>
            Families staying around{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> can
            focus on the city, the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="ourika-valley">
              Ourika Valley
            </PlaceHoverCard>{" "}
            or other nearby destinations. From{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, families can
            choose cultural and countryside experiences within a comfortable
            driving distance.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 2
      ===================================================== */}

      <div
        id="is-merzouga-good-for-families-with-children"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Is Merzouga a Good Destination for Families With Children?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Yes.{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> can be
            an excellent family destination because children get to experience
            a landscape that is very different from a normal city holiday.
          </p>

          <p>
            Families can spend time around the{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>
            , enjoy family photographs, try a short camel experience, learn
            about the surrounding communities and enjoy the peaceful desert
            environment.
          </p>

          <p>
            Parents should choose activities according to the children&apos;s
            ages, the season and current weather. A simple desert day with a few
            well-chosen activities is often more enjoyable than trying to fill
            every hour.
          </p>

          <p>
            Merzouga also combines naturally with{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>, making the
            two destinations useful for a short Sahara experience.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 3
      ===================================================== */}

      <div
        id="how-far-is-merzouga-from-erfoud"
        className="scroll-mt-32 mt-12"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          How Far Is Merzouga From Erfoud?
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is
            roughly 55 to 60 kilometers from{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>. Driving
            time is commonly around 45 minutes to one hour, although the exact
            time can change depending on the route, traffic, stops and road
            conditions.
          </p>

          <p>
            This relatively short distance is one reason Erfoud works well as a
            base for families wanting to experience the Sahara without spending
            many hours on the road.
          </p>

          <p>
            Families can leave Erfoud, enjoy time around Merzouga and{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>,
            and return later in the day. Families wanting more desert time can
            instead choose an overnight experience.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 4
      ===================================================== */}

      <div
        id="family-friendly-activities-in-the-sahara-desert"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
          Sahara Family Activities
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
          What Family-Friendly Activities Can We Do in the Sahara Desert?
        </h3>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            A Sahara family day can include much more than camel riding.
            Families can explore the edge of{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>,
            walk on the dunes, take photographs and enjoy the wide desert
            landscape.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
            families may also include local cultural experiences, a traditional
            meal or a visit to communities such as{" "}
            <PlaceHoverCard place="khamlia">Khamlia</PlaceHoverCard>, depending
            on what is available and appropriate during the trip.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>, fossil
            experiences can add an educational part to the itinerary, while{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard> gives
            families an opportunity to experience a traditional market town.
          </p>

          <p>
            These combinations make a Sahara excursion useful for travelers
            searching for{" "}
            <strong className="font-bold text-white">
              fun days out for families near me
            </strong>{" "}
            because children can experience adventure, nature and culture
            during the same wider trip.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 5
      ===================================================== */}

      <div
        id="are-camel-rides-safe-for-children"
        className="scroll-mt-32 mt-12"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Are Camel Rides Safe for Children?
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Camel riding can be suitable for some children when the activity is
            organized by an experienced local operator and the child is
            comfortable taking part. However, suitability depends on age,
            mobility, confidence and the individual activity.
          </p>

          <p>
            Parents should ask the operator about age requirements, riding
            arrangements and safety procedures before booking. Short camel
            experiences are often easier for younger travelers than a long
            trek.
          </p>

          <p>
            Families who prefer not to ride camels can still enjoy{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> through
            dune viewpoints, walking, photography and other desert
            experiences.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 6
      ===================================================== */}

      <div
        id="what-should-families-pack-for-a-desert-day-trip"
        className="scroll-mt-32 mt-12 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          What Should Families Pack for a Desert Day Trip?
        </h3>

        <p className="mt-5 max-w-4xl text-[17px] leading-8 text-slate-700">
          For a comfortable{" "}
          <strong>one day trip near me with family</strong> in the Sahara, pack
          simple items that protect everyone from the weather and make travel
          easier.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Drinking water",
            "Comfortable walking shoes",
            "Hat or other sun protection",
            "Sunglasses",
            "Sunscreen",
            "Simple snacks for children",
            "Light extra clothing layer",
            "Phone or camera",
            "Any medicine your family normally needs",
            "Extra supplies for babies or younger children",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-white p-4"
            >
              <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

              <span className="text-sm leading-6 text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600">
          Weather in the desert can change considerably between daytime and
          evening, especially during cooler months, so check the forecast
          before leaving.
        </p>
      </div>

      {/* =====================================================
          FAQ 7
      ===================================================== */}

      <div
        id="best-morocco-destinations-for-young-children"
        className="scroll-mt-32 mt-12"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Which Morocco Destinations Are Best for Young Children?
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            The best destination depends on what your children enjoy and how
            much travel they are comfortable with.
          </p>

          <p>
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> can
            work well for families wanting gardens, food and cultural
            attractions.{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> offers
            a more relaxed Atlantic atmosphere, while{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> is particularly
            interesting for history and traditional crafts.
          </p>

          <p>
            Families interested in nature can consider areas of the{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>{" "}
            when the route and activity level are suitable.
          </p>

          <p>
            Around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
            younger travelers can discover fossils, palm landscapes and the
            Sahara while parents keep the itinerary relatively simple.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 8
      ===================================================== */}

      <div
        id="can-families-visit-merzouga-and-return-to-erfoud-same-day"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Can Families Visit Merzouga and Return to Erfoud on the Same Day?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Yes. A same-day trip between{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is a
            practical option for many families.
          </p>

          <p>
            A relaxed itinerary can include time around the{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi dunes</PlaceHoverCard>,
            photographs, a short desert activity and a meal before returning to
            Erfoud.
          </p>

          <p>
            An overnight desert stay is another option for families who want
            more time around the Sahara, but it is not necessary simply to see
            the dunes.
          </p>

          <p>
            The best choice depends on the children&apos;s ages, your overall
            Morocco itinerary and how much time your family wants to spend in
            the desert.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 9
      ===================================================== */}

      <div
        id="best-time-of-year-for-family-day-trips-in-morocco"
        className="scroll-mt-32 mt-12"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          What Is the Best Time of Year for Family Day Trips in Morocco?
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Spring and autumn are often comfortable periods for outdoor family
            travel in many parts of Morocco because temperatures can be milder
            than during the hottest summer months.
          </p>

          <p>
            Winter can also work well for southern destinations such as{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
            although mornings, evenings and desert nights can become cold.
          </p>

          <p>
            Summer travel is possible, but inland and Sahara destinations can
            become extremely hot. Families should organize outdoor activities
            around cooler times of day, stay hydrated and include indoor or
            shaded breaks.
          </p>

          <p>
            Because Morocco has several different climate zones, always check
            the weather for the specific destination rather than relying on a
            general country-wide forecast.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 10
      ===================================================== */}

      <div
        id="is-morocco-suitable-for-family-vacation-with-kids"
        className="scroll-mt-32 mt-12"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Is Morocco Suitable for a Family Vacation With Kids?
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco can be a very rewarding destination for families because
            the country combines cities, beaches, mountains, valleys, desert
            landscapes, traditional crafts and different regional cultures.
          </p>

          <p>
            Parents can build the itinerary around their children&apos;s ages.
            Younger travelers may enjoy shorter experiences with plenty of
            breaks, while older children and teenagers may be interested in
            longer walks, photography, cultural activities or desert
            adventures.
          </p>

          <p>
            The important part is keeping travel times realistic and not trying
            to visit too much of the country too quickly.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 11
      ===================================================== */}

      <div
        id="are-private-family-tours-available-in-morocco"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
          Flexible Family Travel
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
          Are Private Family Tours Available in Morocco?
        </h3>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            Yes. Private family tours are available throughout Morocco and can
            be useful for parents who want more control over timing, stops and
            the pace of the itinerary.
          </p>

          <p>
            A private trip allows a family to stop when children need a break,
            spend longer at places everyone enjoys and avoid building the day
            around the schedule of a larger group.
          </p>

          <p>
            This flexibility can be particularly useful around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, where
            families may want to combine dunes, cultural experiences, fossils
            and scenic stops in one personalized route.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 12
      ===================================================== */}

      <div
        id="best-fun-family-day-trips-from-erfoud"
        className="scroll-mt-32 mt-12"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          What Are the Best Fun Family Day Trips Near Me From Erfoud?
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Some of the most useful family excursions from{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> include{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>, fossil
            experiences and the{" "}
            <PlaceHoverCard place="ziz-valley">Ziz Valley</PlaceHoverCard>.
          </p>

          <p>
            Merzouga works well for Sahara scenery and family adventure.
            Rissani adds traditional market culture. Fossil attractions can
            turn the day into a simple learning experience, while the Ziz
            Valley is useful for families who enjoy palm landscapes and scenic
            viewpoints.
          </p>

          <p>
            Families do not need to combine all of these places in the same
            day. Choosing one main destination with one or two smaller stops
            usually creates a more comfortable itinerary.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ 13
      ===================================================== */}

      <div
        id="how-much-does-family-day-trip-to-sahara-cost"
        className="scroll-mt-32 mt-12 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-8"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          How Much Does a Family Day Trip to the Sahara Desert Cost?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            There is no single price for a family Sahara day trip. The cost can
            change according to the number of travelers, starting point,
            transportation, whether the trip is private or shared, and which
            activities are included.
          </p>

          <p>
            A private family excursion may cost more than a shared option, but
            it can provide more flexibility with timing, rest stops and
            activities.
          </p>

          <p>
            Before comparing prices, families should check exactly what is
            included. Important details may include transportation, driver or
            guide services, camel activities, meals, entrance costs and any
            additional desert experiences.
          </p>

          <p>
            The lowest price is not always the best value for a family. A good
            itinerary should also consider comfortable transportation,
            reasonable driving times and activities appropriate for the
            children.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAQ SUMMARY
      ===================================================== */}

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <QuestionMarkCircleIcon className="hidden h-7 w-7 shrink-0 text-amber-700 sm:block" />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
              Quick Family Travel Answer
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              What Makes a Good Family Day Trip in Morocco?
            </h3>

            <p className="mt-3 max-w-3xl text-[16px] leading-7 text-slate-700">
              A good family day trip combines a realistic driving distance,
              one main destination, activities suitable for the children,
              regular breaks and enough free time to enjoy the experience.
              Choosing the closest famous attraction is not always necessary;
              a quieter place near your hotel can sometimes create a better
              family memory.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL BLOG CONCLUSION
      ===================================================== */}

      <div
        id="final-thoughts-family-day-trips-in-morocco"
        className="scroll-mt-32 mt-14"
      >
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Final Thoughts
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Make Your Family Day in Morocco About the Experience
        </h2>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco gives families many ways to spend a memorable day
            together. Your children may remember walking through the dunes near{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
            discovering fossils around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>, exploring a
            market in{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>, walking
            through the historic streets of{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> or simply stopping
            at a beautiful viewpoint during a road trip.
          </p>

          <p>
            The best <strong>family day trips near me in Morocco</strong> are
            not necessarily the trips with the longest itinerary. Children
            often enjoy travel more when they have time to explore, ask
            questions, eat, rest and experience a place without being rushed.
          </p>

          <p>
            Start with where your family is staying, choose one main experience
            and build the rest of the day around it. This simple approach makes
            it easier to create a trip that works for young children,
            teenagers, parents and grandparents.
          </p>

          <p>
            From the Sahara around{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard> to
            the valleys, mountains, cities and coast, Morocco gives families
            many different ways to explore together. What makes the day special
            is not how many attractions you visit, but the experiences your
            family shares along the way.
          </p>
        </div>
      </div>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <div className="mt-10 overflow-hidden rounded-2xl bg-slate-950 p-7 text-white sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
          Plan Your Family Adventure
        </p>

        <h3 className="mt-2 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
          Create a Morocco Family Day Trip That Fits Your Children and Travel
          Style
        </h3>

        <p className="mt-4 max-w-3xl text-[16px] leading-7 text-slate-300">
          Choose your starting point, tell us what your family enjoys and build
          a comfortable itinerary around the places you really want to
          experience.
        </p>

        <Link
          href="/plan-your-morocco-tour"
          className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-800"
        >
          Plan Your Family Morocco Trip
          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
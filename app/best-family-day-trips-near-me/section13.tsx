import Image from "next/image";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import { BuildingLibraryIcon, ClockIcon, GlobeEuropeAfricaIcon, MapPinIcon, SparklesIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function FamilyOneDayTripSampleItinerariesSection() {
  return (
    <section
      id="one-day-trip-near-me-with-family-sample-itineraries"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Easy Family Itinerary Ideas
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          One Day Trip Near Me With Family: Sample Itineraries
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
          Finding the right{" "}
          <strong>one day trip near me with family</strong> can be a simple way
          to add adventure to a Morocco holiday without spending several days
          moving between hotels. A good family day trip gives parents and
          children enough time to explore, eat, rest and enjoy one destination
          without turning the day into a long race between attractions.
        </p>

        <p>
          Morocco offers many different possibilities depending on where your
          family is staying. Around{" "}
          <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> and{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, families
          can combine desert landscapes, fossils, palm groves and local culture.
          In{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, a family day can
          focus on history, traditional crafts and food, while other regions
          offer valleys, mountains and scenic countryside.
        </p>

        <p>
          The best <strong>family day trips near me</strong> are usually the
          ones that match your starting point. Morocco is a large country, so
          keeping the route realistic means children spend less time sitting in
          a vehicle and more time enjoying the destination.
        </p>
      </div>

      {/* =====================================================
          IMAGE PLACEHOLDER
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Family enjoying a one day Morocco trip through scenic landscapes and cultural destinations"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK ITINERARY CHOICES
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <MapPinIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Relaxed Erfoud Day
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Fossils, palm landscapes, local life and nearby Rissani with less
            driving.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Merzouga Adventure
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Sahara dunes, camel experiences, local culture and desert scenery.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <BuildingLibraryIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Cultural Fes Day
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Medina streets, traditional crafts, history and Moroccan food.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <GlobeEuropeAfricaIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Nature + Desert
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Palm valleys and natural scenery followed by a Sahara experience.
          </p>
        </div>
      </div>

      {/* =====================================================
          RELAXING ERFOUD ITINERARY
      ===================================================== */}

      <div
        id="relaxing-family-day-trip-from-erfoud"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Easy Day With Less Driving
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Relaxing Family Day Trip From Erfoud
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A <strong>relaxing family day trip from Erfoud</strong> is a good
            choice for parents who want to explore southeastern Morocco without
            spending many hours on the road.{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> is a useful
            base for visiting fossil-related attractions, palm landscapes and
            the nearby town of{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>.
          </p>

          <p>
            The day can begin with a fossil experience around Erfoud. The wider
            region is known for fossil-bearing stone, and local workshops can
            help children understand how ancient marine life became preserved
            in rock millions of years ago.
          </p>

          <p>
            This works particularly well for younger travelers because fossils
            are visual and easy to observe. Children can look at different
            shapes, ask questions and compare what they see with animals they
            recognize today.
          </p>
        </div>

        {/* ITINERARY FLOW */}

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              Morning
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Fossil Discovery
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Learn about fossils and the natural history of the Erfoud region.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              Midday
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Palm Landscapes
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Slow down near palm groves and learn about oasis agriculture.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              Afternoon
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Visit Rissani
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore the traditional market town and experience local life.
            </p>
          </div>
        </div>

        <div className="mt-7 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            After the fossil stop, families can spend time around palm
            landscapes near Erfoud. These greener areas provide a strong
            contrast with the surrounding dry terrain and can help children
            understand how water and agriculture shape life in an oasis region.
          </p>

          <p>
            Later, families can continue to{" "}
            <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard>. Its
            traditional market and regional atmosphere give children a chance
            to see dates, food, clothing and everyday products being sold in a
            setting very different from a modern shopping center.
          </p>

          <p>
            This type of{" "}
            <strong>family friendly day trip near me</strong> works well for
            families with younger children because the focus is on a few nearby
            experiences rather than a long list of distant attractions.
          </p>
        </div>
      </div>

      {/* =====================================================
          ERFOUD TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
        <ClockIcon className="h-6 w-6 text-amber-700" />

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          Why This Itinerary Works for Younger Children
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          The day combines short educational and cultural experiences without
          requiring a long journey. Families can also shorten or extend each
          stop depending on the children&apos;s energy levels.
        </p>
      </div>

      {/* =====================================================
          MERZOUGA ITINERARY
      ===================================================== */}

      <div
        id="adventure-filled-family-day-in-merzouga"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Sahara Adventure
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Adventure-Filled Family Day in Merzouga
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Families searching for{" "}
            <strong>fun family day trips near me</strong> can find one of the
            most memorable options around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            Merzouga sits beside the{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi dunes</PlaceHoverCard>,
            making it an easy place to introduce children to the Sahara
            landscape.
          </p>

          <p>
            A family day can begin with time around the dunes. Children can
            walk on the sand, climb smaller dunes and enjoy the enormous open
            landscape before trying a short camel experience if it suits their
            age and comfort level.
          </p>

          <p>
            Camel experiences can make the Sahara feel more adventurous for
            children, but the activity does not need to be long. A shorter ride
            combined with free time on the dunes can often work better for
            younger travelers.
          </p>
        </div>

        {/* MERZOUGA ITINERARY FLOW */}

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-[#fffaf3] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              First Stop
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Erg Chebbi Dunes
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Walk, explore the sand and enjoy family photography.
            </p>
          </div>

          <div className="rounded-xl bg-[#fffaf3] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              Experience
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Camel Adventure
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Add a short camel experience suitable for the family.
            </p>
          </div>

          <div className="rounded-xl bg-[#fffaf3] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              Cultural Stop
            </p>

            <h4 className="mt-2 font-bold text-slate-900">
              Local Community
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Learn about the people, traditions and culture of the region.
            </p>
          </div>
        </div>

        <div className="mt-7 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A <strong>family day out in the Sahara Desert</strong> can also
            include a respectful cultural experience. Families may visit a
            nearby community such as{" "}
            <PlaceHoverCard place="khamlia">Khamlia</PlaceHoverCard>, which is
            associated with regional musical traditions, depending on the
            itinerary and what is genuinely available that day.
          </p>

          <p>
            Families interested in seeing more of the wider desert can also
            choose a 4×4 excursion around the Merzouga region. A well-planned
            route may include open desert landscapes, viewpoints and
            settlements away from the main dune access points.
          </p>

          <p>
            Visits involving local or nomadic communities should always be
            respectful and arranged in a way that does not treat people&apos;s
            homes or daily life as staged tourist attractions.
          </p>

          <p>
            What makes a Merzouga family day special is not the number of
            activities. It is the opportunity to spend time together in a
            landscape that feels completely different from a normal city
            holiday.
          </p>
        </div>
      </div>

      {/* =====================================================
          MERZOUGA FAMILY TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <SparklesIcon className="h-6 w-6 text-amber-700" />

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          Do Not Turn the Sahara Into a Checklist
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          A camel experience, time on the dunes and one cultural stop can
          already create a full family day. Leaving free time gives children
          more opportunity to enjoy the desert instead of constantly moving.
        </p>
      </div>

      {/* =====================================================
          FES ITINERARY
      ===================================================== */}

      <div
        id="cultural-family-day-tour-in-fes"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          History, Crafts & Food
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Cultural Family Day Tour in Fes
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A <strong>cultural family day tour in Fes</strong> is a very
            different experience from a desert excursion.{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> is one of
            Morocco&apos;s historic imperial cities and gives families an
            opportunity to explore traditional architecture, craftsmanship,
            markets and food in one day.
          </p>

          <p>
            The historic medina is the main focus for many visitors. Children
            can walk through narrow streets and see workshops where traditional
            crafts are still practiced. Depending on the route, families may
            see pottery, leather work, metal work, textiles and other handmade
            products.
          </p>

          <p>
            Seeing people make objects by hand can make cultural learning more
            interesting for children because they can connect the finished
            products in the shops with the skills needed to create them.
          </p>
        </div>

        {/* FES DAY FLOW */}

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <BuildingLibraryIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Historic Medina
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Discover architecture, streets and places connected with the
              history of Fes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <UsersIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Traditional Crafts
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Watch skilled craftspeople and introduce children to handmade
              Moroccan products.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <SparklesIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 font-bold text-slate-900">
              Moroccan Food
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Take a relaxed meal break and let children discover new flavors.
            </p>
          </div>
        </div>

        <div className="mt-7 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Families can also include selected historic or cultural attractions
            rather than trying to see the entire medina in one day. A
            knowledgeable local guide can help explain the history in simple
            language and make navigation easier for parents traveling with
            children.
          </p>

          <p>
            Food can become another part of the family experience. A relaxed
            lunch gives everyone a break while children have an opportunity to
            discover Moroccan dishes, breads, pastries and drinks.
          </p>

          <p>
            This kind of{" "}
            <strong>family day out places near me</strong> experience works
            particularly well for families who enjoy culture and want something
            different from beaches, mountains or desert activities.
          </p>
        </div>
      </div>

      {/* =====================================================
          FES TIP
      ===================================================== */}

      <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Fes Family Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Make the Medina About Discovery, Not Distance
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Children do not need to walk every street of the medina. Focus on a
          few interesting crafts, buildings and food experiences, then give the
          family time to rest.
        </p>
      </div>

      {/* =====================================================
          NATURE + DESERT ITINERARY
      ===================================================== */}

      <div
        id="nature-and-desert-combination-day-trip"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <GlobeEuropeAfricaIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Two Landscapes in One Family Day
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Nature and Desert Combination Day Trip
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            A <strong>nature and desert combination day trip</strong> can be a
            strong choice for families who want more variety without filling
            the day with many unrelated attractions.
          </p>

          <p>
            In southeastern Morocco, families can begin with greener landscapes
            such as palm groves or the{" "}
            <PlaceHoverCard place="ziz-valley">
              Ziz Valley
            </PlaceHoverCard>
            . The valley&apos;s ribbon of palm vegetation creates a dramatic
            contrast with the surrounding dry mountains.
          </p>

          <p>
            Children can stop at viewpoints, observe oasis agriculture and see
            how communities use greener valley areas before the family
            continues farther into the dry landscapes around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>.
          </p>

          <p>
            Later, the journey can continue toward{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi
            </PlaceHoverCard>
            . Within the same wider travel region, children can see the
            landscape change from palm-filled areas to large Sahara dunes.
          </p>

          <p>
            This geographic contrast is one of the most interesting parts of
            the itinerary. Instead of simply seeing several attractions,
            families can understand how different environments exist relatively
            close to each other in southeastern Morocco.
          </p>
        </div>

        {/* NATURE + DESERT FLOW */}

        <div className="mt-7 grid gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
              01
            </p>

            <p className="mt-2 text-sm font-bold text-white">
              Valley Viewpoint
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
              02
            </p>

            <p className="mt-2 text-sm font-bold text-white">
              Palm Landscapes
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
              03
            </p>

            <p className="mt-2 text-sm font-bold text-white">
              Erfoud Region
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
              04
            </p>

            <p className="mt-2 text-sm font-bold text-white">
              Merzouga Dunes
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          NATURE + DESERT CONTINUED
      ===================================================== */}

      <div className="mt-7 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
        <p>
          Families can add short stops for photographs, local food or
          traditional settlements without turning the day into a complicated
          itinerary. The key is to choose stops that sit naturally along the
          route.
        </p>

        <p>
          For travelers searching for the{" "}
          <strong>best family day out near me</strong>, this type of route can
          offer a good balance between relaxation and adventure because the
          scenery changes throughout the day while the family still follows one
          clear direction of travel.
        </p>
      </div>

      {/* =====================================================
          SAMPLE ITINERARY COMPARISON
      ===================================================== */}

      <div className="mt-12">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Choose the Right Family Day
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Which Sample Itinerary Fits Your Family?
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Itinerary
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Best For
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Main Experiences
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Erfoud
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Younger children & relaxed travel
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Fossils, palms and Rissani
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Merzouga
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Adventure-loving families
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Dunes, camel experience and desert culture
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Fes
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    History & culture
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Medina, crafts and Moroccan food
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Nature + Desert
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Families wanting variety
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Valleys, palm landscapes and Sahara dunes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL FAMILY TIP
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Family Itinerary Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Use These Itineraries as a Guide, Not a Strict Schedule
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          Every family travels differently. Adjust the number of stops,
          walking time and activities according to the children&apos;s ages,
          the weather and where you are staying. A relaxed day with three good
          experiences is usually better than a rushed day with eight stops.
        </p>
      </div>

      {/* =====================================================
          FINAL SUMMARY
      ===================================================== */}

      <div className="mt-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Build the Day Around Your Family
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          A Simple One Day Trip Can Become a Great Morocco Memory
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Families do not need a complicated itinerary to enjoy Morocco. A
            fossil and cultural day around{" "}
            <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>, a Sahara
            adventure in{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, a
            cultural day in{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard> or a nature and
            desert combination can all create very different experiences.
          </p>

          <p>
            The best choice depends on where your family is staying, how much
            driving everyone is comfortable with and what the children enjoy
            most.
          </p>

          <p>
            By keeping the route realistic and leaving time to enjoy each stop,
            a simple <strong>one day trip near me with family</strong> can
            become one of the most memorable parts of a Morocco holiday.
          </p>
        </div>
      </div>
    </section>
  );
}
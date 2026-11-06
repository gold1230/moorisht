import Image from "next/image";
import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToMerzouga3Day from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

import MarrakechRiadImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function MarrakechCityVsDesertComparisonSection() {
  return (
    <section
      id="compare-marrakech-3-day-itinerary-in-the-city-vs-3-day-desert-tour-from-marrakech-to-merzouga"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="marrakech-city-vs-desert-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Marrakech or Sahara?
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="marrakech-city-vs-desert-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Compare: Marrakech 3 Day Itinerary in the City vs 3-Day Desert Tour
        from Marrakech to Merzouga
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        When travelers begin planning a trip to Morocco, a{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech itinerary 3 days
        </strong>{" "}
        is a common starting point.{" "}
        <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
        offers markets, historic architecture, Moroccan food, gardens,
        museums and traditional riads, all within one city.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        A classic{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech 3 day itinerary
        </strong>{" "}
        can include places such as{" "}
        <PlaceHoverCard place="marrakech">Jemaa el-Fnaa</PlaceHoverCard>
        ,{" "}
        <PlaceHoverCard place="marrakech">Bahia Palace</PlaceHoverCard>
        , the souks, gardens and other historic areas of the medina.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Another option is to use three days for a{" "}
        <strong className="font-semibold text-slate-900">
          3 days desert tour from Marrakech to Merzouga
        </strong>
        . Instead of remaining in one city, this route crosses the{" "}
        <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
        , visits historic sites, continues through valleys and gorges and
        eventually reaches the Sahara dunes near Merzouga.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        These two itineraries offer very different experiences. Staying in
        Marrakech gives you more time for urban culture, food, shopping and
        historic sightseeing without long road journeys. Choosing the{" "}
        <strong className="font-semibold text-slate-900">
          3-day desert tour from Marrakech to Merzouga
        </strong>{" "}
        gives you a faster-paced journey with much greater landscape variety
        and a Sahara experience at the end.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Neither option is automatically better for every traveler. The right
        choice depends on how much time you have, whether you enjoy long
        scenic drives and whether seeing the Sahara is one of your priorities
        in Morocco.
      </p>

      {/* =====================================================
          QUICK COMPARISON
      ===================================================== */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            Marrakech Only
          </p>

          <h3 className="mt-2 text-xl font-bold text-[#102043]">
            Culture, Food &amp; City Exploration
          </h3>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Medina walks, souks, palaces, gardens, restaurants, hammams and
            relaxed evenings in a riad without long-distance travel.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            Marrakech to Merzouga
          </p>

          <h3 className="mt-2 text-xl font-bold text-[#102043]">
            Mountains, Kasbahs &amp; Sahara
          </h3>

          <p className="mt-3 text-base leading-7 text-gray-700">
            High Atlas scenery, Ait Ben Haddou, valleys, Todra Gorge,
            Merzouga, Erg Chebbi, camel trekking and an overnight desert
            experience.
          </p>
        </div>
      </div>

      {/* =====================================================
          STAYING ONLY IN MARRAKECH
      ===================================================== */}

      <div
        id="staying-only-in-marrakech"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Staying Only in Marrakech
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={MarrakechRiadImage}
              alt="Travelers relaxing inside a traditional riad during a Marrakech city stay"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            Staying in Marrakech gives travelers more time for riads,
            historic monuments, markets, restaurants and the atmosphere of
            the medina.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Spending all three days in Marrakech can be a very good choice for
          travelers who prefer a slower city break without long drives. A
          well-planned{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>{" "}
          gives enough time to explore different parts of the historic city
          while still leaving room for food, shopping and relaxation.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          You can begin the morning inside the{" "}
          <PlaceHoverCard place="marrakech">Marrakech medina</PlaceHoverCard>
          , walk through narrow streets filled with shops and crafts and
          continue toward historic attractions throughout the day.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Places such as{" "}
          <PlaceHoverCard place="marrakech">Bahia Palace</PlaceHoverCard>{" "}
          introduce visitors to traditional Moroccan design, while the souks
          provide opportunities to discover textiles, lanterns, leather,
          spices, ceramics and handmade products.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Staying in the city also makes it easier to enjoy Marrakech at a
          slower pace. Travelers can stop for mint tea, spend more time at a
          rooftop restaurant, experience a hammam or return to their riad
          during the hottest part of the afternoon.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Evenings around{" "}
          <PlaceHoverCard place="marrakech">Jemaa el-Fnaa</PlaceHoverCard>{" "}
          give visitors another side of the city as food stalls open and the
          atmosphere becomes increasingly lively.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The main limitation is geographical variety. A city-only itinerary
          does not include the landscapes around the{" "}
          <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
          , southern kasbah routes, Todra Gorge or the Sahara dunes around
          Merzouga.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          That does not make a Marrakech-only trip incomplete. It simply
          offers a deeper experience of one destination rather than a wider
          journey through several regions.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            Marrakech Is Better If...
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            You Prefer a Slower City Break
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Choose a city-focused itinerary if you want less driving, more
            time for restaurants and monuments, easier mornings and several
            nights in the same accommodation.
          </p>
        </div>
      </div>

      {/* =====================================================
          ADDING THE SAHARA
      ===================================================== */}

      <div
        id="adding-the-sahara-desert-experience"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Adding the Sahara Desert Experience
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={MarrakechToMerzouga3Day}
              alt="Travelers experiencing the Sahara dunes near Merzouga during a Morocco desert tour"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            The three-day desert route replaces a city-only stay with a
            journey through mountains, kasbahs, valleys and the Erg Chebbi
            dunes.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Adding the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          changes the style of the trip completely. Instead of exploring one
          city in depth, you travel through several regions and watch the
          landscape change as you move farther south and east.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tours
          </strong>{" "}
          first cross the{" "}
          <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>{" "}
          and{" "}
          <PlaceHoverCard place="tizi-ntichka">Tizi n&apos;Tichka Pass</PlaceHoverCard>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          From there, travelers continue toward{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>
          , followed by the landscapes of Ouarzazate and{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          On the second day, the route passes{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
          before continuing toward{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Arrival at{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          is the biggest visual change of the journey. Mountain roads and
          rocky plains are replaced by large golden dunes and a much wider
          horizon.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Depending on the package, travelers can continue by camel toward a
          desert camp around sunset and spend the night close to the dunes.
          Camp facilities and evening activities vary according to the tour
          option booked.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The main advantage of the Sahara route is variety. Within three
          days, travelers experience historic architecture, mountain roads,
          rural landscapes, valleys, a canyon and the desert.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The trade-off is time on the road. A{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          is fast-paced and involves substantial driving, especially on the
          return day. Travelers who prefer slower journeys may be happier
          with a four- or five-day desert route.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            The Sahara Is Better If...
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Landscape Variety Matters More Than a Slow Pace
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Choose the desert route if seeing the High Atlas, southern
            Morocco and Erg Chebbi is a priority and you are comfortable
            spending several hours traveling each day.
          </p>
        </div>
      </div>

      {/* =====================================================
          WHY TRAVELERS ADD THE DESERT
      ===================================================== */}

      <div
        id="why-most-travelers-choose-the-desert-extension"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Why Most Travelers Choose the Desert Extension
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The desert extension appeals to travelers who want strong contrast
          within the same Morocco trip. Marrakech offers movement, markets,
          restaurants and historic architecture, while the route toward
          Merzouga introduces increasingly open and quiet landscapes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After time inside the busy{" "}
          <PlaceHoverCard place="marrakech">Marrakech medina</PlaceHoverCard>
          , some travelers enjoy moving into the quieter scenery of the
          mountains and Sahara.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Another reason to consider the desert extension is the number of
          landscapes included in a short time. The itinerary links the Atlas
          Mountains, Ait Ben Haddou, Dades, Todra and Merzouga instead of
          focusing on one destination.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The Sahara portion also offers experiences that cannot be recreated
          inside Marrakech. Watching sunset across{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
          , spending the evening near a desert camp and seeing sunrise across
          the dunes give the itinerary a very different atmosphere from a
          city break.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          However, it is better to choose the desert because those
          experiences matter to you, not because every Morocco visitor needs
          to follow the same route. Travelers interested mainly in food,
          architecture, museums, shopping or relaxation may enjoy three full
          days in Marrakech more.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          If you have enough total vacation time, one of the strongest
          options is to combine both experiences: spend time exploring
          Marrakech first and then continue with the{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>
          . This gives you more time to understand the city without giving up
          the mountains and Sahara.
        </p>

        {/* =====================================================
            DETAILED COMPARISON
        ===================================================== */}

        <div className="mt-9 overflow-hidden rounded-2xl border border-gray-200">
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#fffaf4]">
            <div className="border-r border-gray-200 p-4 font-bold text-[#102043]">
              Experience
            </div>

            <div className="border-r border-gray-200 p-4 font-bold text-[#102043]">
              Marrakech Only
            </div>

            <div className="p-4 font-bold text-[#102043]">
              Merzouga Desert Tour
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-gray-200">
            <div className="border-r border-gray-200 p-4 font-semibold text-slate-900">
              Travel Pace
            </div>

            <div className="border-r border-gray-200 p-4 text-gray-700">
              Slower
            </div>

            <div className="p-4 text-gray-700">
              Fast-paced
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-gray-200">
            <div className="border-r border-gray-200 p-4 font-semibold text-slate-900">
              Long Drives
            </div>

            <div className="border-r border-gray-200 p-4 text-gray-700">
              Minimal
            </div>

            <div className="p-4 text-gray-700">
              Significant
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-gray-200">
            <div className="border-r border-gray-200 p-4 font-semibold text-slate-900">
              Main Focus
            </div>

            <div className="border-r border-gray-200 p-4 text-gray-700">
              City culture
            </div>

            <div className="p-4 text-gray-700">
              Road journey &amp; Sahara
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-gray-200">
            <div className="border-r border-gray-200 p-4 font-semibold text-slate-900">
              Landscapes
            </div>

            <div className="border-r border-gray-200 p-4 text-gray-700">
              Urban &amp; gardens
            </div>

            <div className="p-4 text-gray-700">
              Mountains, valleys &amp; dunes
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-gray-200">
            <div className="border-r border-gray-200 p-4 font-semibold text-slate-900">
              Accommodation
            </div>

            <div className="border-r border-gray-200 p-4 text-gray-700">
              Same city / riad
            </div>

            <div className="p-4 text-gray-700">
              Valley stay + desert camp
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-gray-200">
            <div className="border-r border-gray-200 p-4 font-semibold text-slate-900">
              Best For
            </div>

            <div className="border-r border-gray-200 p-4 text-gray-700">
              Food, history &amp; relaxed sightseeing
            </div>

            <div className="p-4 text-gray-700">
              Scenery, adventure &amp; Sahara
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL DECISION BOX
        ===================================================== */}

        <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            Which One Should You Choose?
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Choose Based on Your Time and Travel Style
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Choose Marrakech only if you want a slower city break with
            historic sites, food, markets and more free time. Choose the
            Marrakech to Merzouga desert route if seeing the Atlas Mountains,
            southern Morocco and the Sahara is more important than avoiding
            long drives.
          </p>

          <p className="mt-3 text-base leading-7 text-gray-700">
            If your Morocco itinerary is long enough, combining several days
            in Marrakech with the three-day Merzouga journey gives you both
            experiences instead of forcing you to choose between them.
          </p>
        </div>
      </div>
    </section>
  );
}
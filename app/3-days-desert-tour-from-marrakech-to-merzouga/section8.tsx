import Image from "next/image";
import PlaceHoverCard from "@/Compentents/placeCard";


import FirstTimeMoroccoImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function WhoIsThisMerzougaTourFor() {
  return (
    <section
      id="who-is-this-3-days-tour-from-marrakech-to-merzouga-desert-for"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="who-is-this-tour-for-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Who This Desert Tour Is For
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="who-is-this-tour-for-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Who Is This 3 Days Tour from Marrakech to Merzouga Desert For?
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        The{" "}
        <strong className="font-semibold text-slate-900">
          3 days desert tour from Marrakech to Merzouga
        </strong>{" "}
        is designed for travelers who want to experience the Sahara without
        spending many days on the road. It can work especially well for
        visitors who have a short vacation in Morocco but still want to see
        the mountains, traditional villages, historic kasbahs and the golden
        dunes of Erg Chebbi.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        This journey is not only about moving from{" "}
        <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
        to{" "}
        <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
        . A large part of the experience comes from watching the landscapes
        and atmosphere change as the road leaves the city, crosses the
        mountains and continues toward the Sahara.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Travelers joining{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>{" "}
        experience several important parts of southern Morocco within one
        itinerary. The road crosses the{" "}
        <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
        , reaches{" "}
        <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>
        , continues through{" "}
        <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
        and eventually reaches{" "}
        <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        The{" "}
        <strong className="font-semibold text-slate-900">
          3-day desert tour from Marrakech to Merzouga
        </strong>{" "}
        can suit solo travelers, couples, families and small groups.
        Depending on the available package, travelers may be able to choose
        between private and shared departures and different accommodation
        levels.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Whether your goal is a romantic trip, a cultural journey, a
        photography adventure or simply the chance to see the Sahara for the
        first time, this route offers a combination of nature, culture,
        sightseeing and desert experiences within a short itinerary.
      </p>

      {/* =====================================================
          QUICK AUDIENCE BOX
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
        <h3 className="text-xl font-bold text-[#102043]">
          This Tour Can Be a Good Choice For
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="font-bold text-slate-900">
              First-Time Visitors
            </p>

            <p className="mt-1 text-base leading-7 text-gray-700">
              See Marrakech, mountains, kasbahs, valleys and the Sahara in
              one short journey.
            </p>
          </div>

          <div>
            <p className="font-bold text-slate-900">
              Couples
            </p>

            <p className="mt-1 text-base leading-7 text-gray-700">
              Enjoy desert sunsets, quiet landscapes and private-tour
              possibilities.
            </p>
          </div>

          <div>
            <p className="font-bold text-slate-900">
              Families &amp; Friends
            </p>

            <p className="mt-1 text-base leading-7 text-gray-700">
              Combine sightseeing, cultural stops and desert adventure.
            </p>
          </div>

          <div>
            <p className="font-bold text-slate-900">
              Photography &amp; Adventure Lovers
            </p>

            <p className="mt-1 text-base leading-7 text-gray-700">
              Photograph mountain roads, kasbahs, gorges and golden Sahara
              dunes.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FIRST-TIME VISITORS
      ===================================================== */}

      <div
        id="first-time-visitors-to-morocco"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          First-Time Visitors to Morocco
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={FirstTimeMoroccoImage}
              alt="Travelers exploring Morocco during their first journey through the country"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            A Marrakech to Merzouga journey introduces first-time visitors to
            several very different landscapes of Morocco.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          If you are visiting Morocco for the first time, the{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>{" "}
          can be a useful introduction to the country because it combines
          city culture, mountain landscapes, historic sites and the Sahara in
          one route.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Many first-time visitors begin their trip in{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>
          . The city introduces travelers to the colors, markets,
          architecture and energy of urban Morocco, but the desert journey
          shows how much the country changes outside the city.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          During the route, the red and earth-colored landscapes around
          Marrakech give way to the{" "}
          <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
          . Traditional villages, mountain roads and changing scenery help
          travelers understand how different Morocco can look from one
          region to another.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Historic stops such as{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>{" "}
          add cultural and architectural interest, while{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
          introduces travelers to another side of Morocco&apos;s natural
          landscapes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For many first-time travelers, reaching the Sahara becomes the
          strongest moment of the route. Camel trekking near{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
          , watching sunset over the dunes and spending a night near the
          desert can feel completely different from everything experienced
          earlier in the trip.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          If your vacation is short but you want to see more than Marrakech,
          the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          provides a compact introduction to some of southern Morocco&apos;s
          most recognizable landscapes.
        </p>
      </div>

      {/* =====================================================
          USA UK CANADA AUSTRALIA
      ===================================================== */}

      <div
        id="travelers-from-usa-uk-canada-australia"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Travelers from USA, UK, Canada &amp; Australia
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tours
          </strong>{" "}
          can also suit international travelers from the USA, UK, Canada,
          Australia and other countries who want an organized way to
          experience the Sahara while visiting Morocco.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For international visitors, clear planning is particularly useful
          because the route between Marrakech and Merzouga covers a long
          distance and passes several different regions. Having
          transportation, planned overnight stops and desert arrangements
          organized in advance can make the journey easier to understand and
          enjoy.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Travelers who prefer English communication should confirm the
          language spoken by their driver or guide when booking. Available
          vehicle type, group size, accommodation level and desert camp
          facilities should also be confirmed in advance because these can
          vary according to the selected package.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Visitors traveling from long distances often include the{" "}
          <PlaceHoverCard place="merzouga">Sahara Desert</PlaceHoverCard>{" "}
          high on their Morocco itinerary. Riding through the dunes, seeing
          the landscape around Erg Chebbi and spending time away from large
          cities offers a very different experience from a normal city
          break.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          is therefore useful for international travelers who want a
          structured short route that combines sightseeing with a Sahara
          experience.
        </p>
      </div>

      {/* =====================================================
          ADVENTURE + CULTURE
      ===================================================== */}

      <div
        id="adventure-seekers-cultural-explorers"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Adventure Seekers &amp; Cultural Explorers
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          If you enjoy changing landscapes, outdoor experiences and learning
          about different parts of a country, the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          offers a varied route rather than a single-destination holiday.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Adventure begins with the mountain road through the{" "}
          <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
          . Later, travelers can walk through{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
          before reaching the Sahara dunes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Camel trekking across{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          gives the journey another kind of adventure. Depending on the
          package, optional activities such as sandboarding or 4×4 desert
          exploration may also be available.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Cultural travelers can also enjoy historic architecture and rural
          landscapes along the route. Places such as{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>{" "}
          introduce travelers to traditional construction, historic caravan
          routes and the architectural character of southern Morocco.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Desert camps may also include traditional music in the evening,
          while optional excursions around Merzouga can sometimes include
          additional cultural stops. These details depend on the tour
          package and should be confirmed when booking.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For travelers who want more than photographs, the{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>{" "}
          creates opportunities to experience the landscapes, history and
          atmosphere of southern Morocco rather than simply viewing them from
          one location.
        </p>
      </div>

      {/* =====================================================
          HONEYMOON + PHOTOGRAPHY
      ===================================================== */}

      <div
        id="honeymoon-couples-photography-lovers"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Honeymoon Couples &amp; Photography Lovers
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          can also work well for honeymoon couples and travelers who enjoy
          landscape photography. The Sahara provides a quieter atmosphere
          and a visual setting that is completely different from Marrakech.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Couples can watch the sunset together over{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
          , enjoy the quieter evening atmosphere near the desert camp and
          wake early for sunrise over the dunes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Travelers wanting more privacy may prefer a private tour and a
          higher-comfort camp option. Private bathroom facilities, larger
          tents and other amenities depend on the specific camp, so couples
          should confirm exactly what is included before booking.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Photography lovers have opportunities throughout the entire route,
          not only in the Sahara. The{" "}
          <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>{" "}
          offer panoramic road scenes, while{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>{" "}
          provides historic architecture and earth-colored landscapes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The cliffs around{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
          offer another completely different photographic setting before
          travelers finally arrive at the dunes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Around{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
          , sunrise and sunset create rapidly changing colors across the
          sand. Golden light, camel caravans and the patterns made by wind
          across the dunes provide many different types of photographs.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Whether the purpose of your journey is a romantic celebration or
          capturing memorable Morocco landscapes, the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tour
          </strong>{" "}
          offers several visually and emotionally different experiences
          within one short itinerary.
        </p>

        {/* ===================================================
            SECTION SUMMARY
        =================================================== */}

        <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            A Tour for Different Travel Styles
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            First Visit, Adventure, Romance or Photography
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            The Marrakech to Merzouga route can suit first-time visitors,
            couples, families, solo travelers, small groups, photographers
            and travelers who want to combine cultural sightseeing with a
            Sahara experience.
          </p>
        </div>
      </div>
    </section>
  );
}
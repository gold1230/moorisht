import Image from "next/image";
import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToMerzouga3Day from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

import SaharaStoryImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";
import DesertCampStoryImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function MarrakechMerzougaTravelStory() {
  return (
    <section
      id="3-days-desert-tour-from-marrakech-to-merzouga-travel-story-experience"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="marrakech-merzouga-travel-story-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Traveler Story
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="marrakech-merzouga-travel-story-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        3 Days Desert Tour from Marrakech to Merzouga – Travel Story
        Experience
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          MAIN IMAGE
      ===================================================== */}

      <figure className="my-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <Image
            src={MarrakechToMerzouga3Day}
            alt="Travelers exploring the Sahara dunes near Merzouga during a Morocco desert journey"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <figcaption className="mt-3 text-sm leading-6 text-gray-500">
          A Marrakech to Merzouga journey combines mountain landscapes,
          historic stops and the Sahara dunes in one three-day route.
        </figcaption>
      </figure>

      {/* =====================================================
          INTRODUCTION STORY
      ===================================================== */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        When I booked the{" "}
        <strong className="font-semibold text-slate-900">
          3 days desert tour from Marrakech to Merzouga
        </strong>
        , I did not know it would become the highlight of my entire{" "}
        Morocco trip
        . Like many travelers searching for{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>
        , I wanted something authentic, comfortable and memorable while still
        fitting into a short stay in Morocco.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        I had limited time, so the route looked like a practical way to leave
        the busy streets of{" "}
        <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
        and experience the landscapes of southern Morocco and the Sahara
        Desert.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        The adventure started early in the morning from Marrakech. As we
        left the Red City behind, the landscape slowly changed. We crossed
        the{" "}
        <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
        , passed traditional Amazigh villages and stopped at{" "}
        <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Every stop felt like another chapter of the journey. This was not
        simply transportation from one destination to another. The road
        itself became part of the experience, combining landscapes, history
        and traditional architecture within a short{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech itinerary 3 days
        </strong>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        By the time we reached{" "}
        <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
        , I already felt that I had seen several completely different sides
        of Morocco. But the most anticipated part was still waiting in the
        golden dunes of Erg Chebbi.
      </p>

      {/* =====================================================
          RED CITY TO GOLDEN DUNES
      ===================================================== */}

      <div
        id="from-the-red-city-to-golden-dunes-my-personal-experience"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          “From the Red City to Golden Dunes: My Personal Experience”
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The first day of my{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          was full of contrasts. Marrakech was lively, colorful and full of
          movement. Its souks were busy and{" "}
          <PlaceHoverCard place="marrakech">Jemaa el-Fnaa</PlaceHoverCard>{" "}
          was full of activity.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Only a few hours later, the atmosphere had changed completely. I
          was surrounded by mountains, valleys and much quieter roads. That
          contrast between Marrakech and rural Morocco made the beginning of
          the journey feel especially powerful.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          As we drove through the{" "}
          <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
          , I started to understand why travelers choose a{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>{" "}
          instead of spending their entire stay inside the city.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The road through{" "}
          <PlaceHoverCard place="tizi-ntichka">Tizi n&apos;Tichka Pass</PlaceHoverCard>{" "}
          offered wide mountain views and opportunities to stop for
          photographs and enjoy the cooler air.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Visiting{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>{" "}
          felt like entering a different period of Moroccan history. Its
          earth-colored buildings and narrow paths gave the day a strong
          cultural element before the journey continued farther east.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Later, passing through{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
          and then{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
          added another completely different landscape to my{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech 3 day itinerary
          </strong>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          By the time we approached Merzouga, the colors changed again. The
          mountains and rocky plains slowly gave way to warmer earth tones,
          and eventually I could see the first large dunes appearing on the
          horizon.
        </p>

        <blockquote className="mt-8 rounded-r-2xl border-l-4 border-amber-600 bg-[#fffaf4] px-6 py-5 sm:px-7">
          <p className="text-lg font-medium italic leading-8 text-slate-800">
            “The moment the first golden dunes appeared in the distance, I
            knew the Sahara would become the part of Morocco I remembered
            most.”
          </p>
        </blockquote>
      </div>

      {/* =====================================================
          FIRST SAHARA VIEW
      ===================================================== */}

      <div
        id="the-moment-i-saw-the-sahara-for-the-first-time"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          The Moment I Saw the Sahara for the First Time
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={SaharaStoryImage}
              alt="Travelers experiencing the golden Sahara dunes near Merzouga Morocco"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            Seeing the Erg Chebbi dunes for the first time is one of the
            defining moments of the journey to Merzouga.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Nothing during the earlier part of the journey looked quite like
          the moment the Sahara appeared for the first time. After hours of
          changing mountain, valley and rocky landscapes, the dunes of{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          suddenly appeared on the horizon.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          During my{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tour
          </strong>
          , this was the moment that made the long journey feel completely
          worthwhile. The dunes looked soft and golden beneath the afternoon
          sun and seemed to continue far beyond the edge of Merzouga.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Stepping out near the dunes felt completely different from being
          in Marrakech. The atmosphere was quieter, the horizon was wider and
          the Sahara created a sense of space that was difficult to
          understand before seeing it in person.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The camel ride began before sunset. Moving slowly through the sand
          gave me time to enjoy the scenery instead of rushing through it.
          As the sun moved lower, the colors of the dunes became warmer,
          changing from gold to orange and deeper red tones.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Watching sunset over the Sahara was more than simply a good place
          for photographs. It was one of those moments when everything
          became quiet and the landscape itself became the experience.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          I began to understand why so many travelers describe Merzouga as
          the highlight of their Morocco journey. It gave my{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>{" "}
          a completely different feeling from a city-only trip.
        </p>
      </div>

      {/* =====================================================
          DESERT CAMP
      ===================================================== */}

      <div
        id="sleeping-in-a-desert-camp-under-the-stars"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Sleeping in a Desert Camp Under the Stars
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={DesertCampStoryImage}
              alt="Evening atmosphere around a Sahara desert camp near Merzouga"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            Spending the evening near the Erg Chebbi dunes adds a quieter,
            more personal side to the Sahara experience.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After the sunset camel trek, we reached the{" "}
          <PlaceHoverCard place="merzouga">desert camp</PlaceHoverCard>
          . Spending the night near the dunes is one of the experiences many
          people look forward to when booking the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          I had chosen a higher-comfort camp option, so the tent offered more
          space and additional facilities. Camp standards can vary, so I
          would recommend confirming the exact room, bathroom and shower
          arrangements before booking.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After dinner, the evening became much more relaxed. Around the
          campfire, traditional drums and songs created a warm atmosphere
          while travelers sat together beneath the open desert sky.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Later, I walked farther from the main camp area and looked up at
          the sky. Away from the stronger lights of cities, the stars were
          much easier to see. The combination of quiet dunes, cooler night
          air and open sky made the Sahara feel completely different after
          dark.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The next morning, waking early for sunrise created another
          memorable moment. The first light gradually changed the colors of
          the dunes and gave the landscape a peaceful atmosphere before the
          return journey began.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            Sahara Night Experience
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Sunset → Desert Camp → Evening Music → Stars → Sunrise
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            The overnight stay turns a visit to the dunes into a complete
            evening and morning Sahara experience rather than a short daytime
            stop.
          </p>
        </div>
      </div>

      {/* =====================================================
          RECOMMENDATION
      ===================================================== */}

      <div
        id="why-i-would-recommend-this-marrakech-to-merzouga-3-days-desert-tour-to-everyone"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Why I Would Recommend This Marrakech to Merzouga 3 Days Desert Tour
          to Everyone
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After completing the{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>
          , what stayed with me most was the amount of variety packed into a
          short journey. Mountains, valleys, historic settlements, canyons
          and the Sahara all appeared within only a few days.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For travelers with limited vacation time, the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tour
          </strong>{" "}
          can be an effective way to see much more than Marrakech alone. The
          long road sections are broken up by changing scenery, cultural
          stops and overnight stays.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Couples may enjoy the sunset and quieter camp atmosphere, while
          families and groups can appreciate the variety of sightseeing
          along the route. Solo travelers can also choose small-group or
          private departures depending on the options available.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          What made the journey memorable for me was not only one attraction.
          It was the complete progression from Marrakech to the mountains,
          from kasbahs and valleys to the dunes, and finally from a Sahara
          sunset to sunrise the following morning.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          If I were planning a{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>{" "}
          and wanted to see more than the city, I would strongly consider
          adding the desert. The route creates a broader experience of
          southern Morocco and gives the trip a very different ending from a
          normal city break.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          is short in duration, but the changing landscapes and Sahara
          experience can make it feel like a much larger journey.
        </p>

        {/* ===================================================
            STORY SUMMARY
        =================================================== */}

        <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            The Story in Three Days
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            From Marrakech Energy to Sahara Silence
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Marrakech → High Atlas Mountains → Ait Ben Haddou →
            Dades Valley → Todra Gorge → Merzouga → Erg Chebbi →
            Camel Trek → Desert Camp → Sahara Sunrise
          </p>
        </div>
      </div>
    </section>
  );
}
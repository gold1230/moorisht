import Image from "next/image";
import PlaceHoverCard from "@/Compentents/placeCard";


import TravelerStoriesImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function MarrakechMerzougaTravelerStoriesSection() {
  return (
    <section
      id="real-traveler-stories-from-the-3-days-desert-tour-from-marrakech-to-merzouga"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="marrakech-merzouga-traveler-stories-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Traveler Experiences
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="marrakech-merzouga-traveler-stories-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Real Traveler Stories from the 3 Days Desert Tour from Marrakech to
        Merzouga
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          MAIN IMAGE
      ===================================================== */}

      <figure className="my-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <Image
            src={TravelerStoriesImage}
            alt="Travelers enjoying a Morocco desert journey toward Merzouga"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <figcaption className="mt-3 text-sm leading-6 text-gray-500">
          Travelers experience very different landscapes between Marrakech
          and the Erg Chebbi dunes during this three-day Sahara journey.
        </figcaption>
      </figure>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        Travelers who join the{" "}
        <strong className="font-semibold text-slate-900">
          3 days desert tour from Marrakech to Merzouga
        </strong>{" "}
        often remember the contrast between the beginning and the end of the
        journey. It starts among the busy streets and lively atmosphere of{" "}
        <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
        and ends beside the much quieter golden dunes of the Sahara.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        During the{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>
        , the landscape changes repeatedly. Travelers cross the{" "}
        <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
        , visit historic settlements, pass valleys and rocky regions and
        eventually reach Merzouga.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        One traveler from the United States described how different the
        experience was from what she had imagined before arriving in Morocco.
        She expected the desert to be mainly about sand, but the route also
        included mountain landscapes, architecture, valleys and dramatic
        natural places such as{" "}
        <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Another couple traveling from the UK described the route as feeling
        much larger than three days because every part looked different.
        Mountain roads were followed by valleys, historic kasbahs, palm-filled
        areas and finally the Sahara around{" "}
        <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        These experiences help explain why the{" "}
        <strong className="font-semibold text-slate-900">
          3-day desert tour from Marrakech to Merzouga
        </strong>{" "}
        can feel very different from a normal city-focused itinerary. The
        memories come not only from the final dunes, but from the complete
        journey between Marrakech and the Sahara.
      </p>

      {/* =====================================================
          STORY 1
      ===================================================== */}

      <div
        id="i-didnt-expect-the-desert-to-be-this-beautiful"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          “I Didn&apos;t Expect the Desert to Be This Beautiful”
        </h3>

        <blockquote className="mt-7 rounded-r-2xl border-l-4 border-amber-600 bg-[#fffaf4] px-6 py-5 sm:px-7">
          <p className="text-xl font-semibold italic leading-8 text-[#102043]">
            “I didn&apos;t expect the desert to be this beautiful.”
          </p>

          <footer className="mt-3 text-sm font-medium text-gray-600">
            Traveler from Canada
          </footer>
        </blockquote>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          One of the strongest reactions travelers can have during the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tours
          </strong>{" "}
          is surprise at how much the desert changes with the light. Before
          arriving, this traveler imagined a much flatter and simpler
          landscape.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          When she reached{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          in the later afternoon, the dunes looked completely different from
          what she had expected. Their curved shapes, long shadows and warm
          colors changed as the sun moved lower.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          During the camel trek, bright golden sand gradually developed
          warmer orange and reddish tones. Wind had created small patterns
          across parts of the dunes, while camel tracks made another set of
          lines through the landscape.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          She described the camel ride as both peaceful and exciting. After
          spending the previous days around roads, towns and sightseeing
          stops, moving slowly through the dunes created a completely
          different rhythm.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          That evening, traditional drumming was part of the camp atmosphere.
          Later, away from stronger city lighting, she spent time looking at
          the night sky and enjoying the quiet surroundings.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For her, adding the Sahara to a{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>{" "}
          changed the character of the trip. The desert was not simply an
          empty landscape. The changing light, dunes and quiet atmosphere
          became some of the strongest memories of her visit.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            What Surprised Her Most
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            The Desert Keeps Changing
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Dune shapes, sunset colors, wind patterns, quiet surroundings and
            the night sky made Erg Chebbi feel very different from the simple
            image of &quot;just sand&quot; she had before the journey.
          </p>
        </div>
      </div>

      {/* =====================================================
          STORY 2
      ===================================================== */}

      <div
        id="the-camel-ride-was-the-highlight-of-my-morocco-trip"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          “The Camel Ride Was the Highlight of My Morocco Trip”
        </h3>

        <blockquote className="mt-7 rounded-r-2xl border-l-4 border-amber-600 bg-[#fffaf4] px-6 py-5 sm:px-7">
          <p className="text-xl font-semibold italic leading-8 text-[#102043]">
            “The camel ride was the highlight of my Morocco trip.”
          </p>

          <footer className="mt-3 text-sm font-medium text-gray-600">
            Traveler from Australia
          </footer>
        </blockquote>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          For another traveler, the camel trek became the most memorable part
          of the{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>
          . He had wanted to experience a camel journey through the Sahara
          long before arriving in Morocco.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Around{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
          , camel trekking is normally arranged later in the afternoon when
          travelers are preparing to continue toward their desert camp.
          Exact timing varies according to season and sunset time.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          As the caravan entered the dunes, the road and buildings gradually
          disappeared behind them. The pace became slower and the view
          opened across the sand.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          He remembered reaching a higher part of the dune landscape and
          looking across repeated ridges of sand. The absence of busy roads
          and city sounds was one of the things that made the experience feel
          so different from the rest of his Morocco journey.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For travelers planning a{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>
          , the camel trek can appear to be just one activity on the
          itinerary. Once experienced, however, it can become the moment that
          connects the entire journey with the Sahara landscape.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The ride also gives travelers a slower experience of{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
          . Instead of seeing the dunes only from the edge of Merzouga, they
          move through the landscape before arriving at camp.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            Why the Camel Trek Stands Out
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Slow Travel Through the Dunes
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Instead of rushing through the Sahara, camel trekking gives
            travelers time to watch the light change, experience the quiet
            surroundings and see the dunes from inside the landscape.
          </p>
        </div>
      </div>

      {/* =====================================================
          STORY 3
      ===================================================== */}

      <div
        id="three-days-felt-like-a-complete-moroccan-journey"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          “Three Days Felt Like a Complete Moroccan Journey”
        </h3>

        <blockquote className="mt-7 rounded-r-2xl border-l-4 border-amber-600 bg-[#fffaf4] px-6 py-5 sm:px-7">
          <p className="text-xl font-semibold italic leading-8 text-[#102043]">
            “Three days felt like a complete Moroccan journey.”
          </p>

          <footer className="mt-3 text-sm font-medium text-gray-600">
            Couple from the UK
          </footer>
        </blockquote>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          A couple traveling from the UK chose the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          because their time in Morocco was limited. What surprised them most
          was how different each day of the itinerary felt.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The first day began by leaving Marrakech and crossing the{" "}
          <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
          . They later visited{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>{" "}
          before continuing through southern Morocco toward their first
          overnight stop.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The second day brought another change as the journey moved through{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
          and then toward Merzouga for the Sahara portion of the itinerary.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          By sunset, they were traveling through the dunes instead of
          mountain roads and valleys. The following morning began with the
          early light over Erg Chebbi before the return journey to Marrakech.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Their comment did not mean that three days can show every part of
          Morocco. Instead, it reflected how much landscape variety they
          experienced within a short route: mountains, traditional
          architecture, valleys, canyon scenery and the Sahara.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          This is one reason the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tours
          </strong>{" "}
          can work well for travelers with limited vacation time who are
          comfortable with a fast-paced road journey.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          It is also important to remember that the three-day route involves
          significant driving. Travelers who have additional time and prefer
          a slower pace may enjoy extending the same journey over four or
          five days.
        </p>

        {/* =====================================================
            THREE-DAY STORY
        ===================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
              Day 1
            </p>

            <h4 className="mt-2 text-lg font-bold text-[#102043]">
              Mountains &amp; Kasbahs
            </h4>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Marrakech → High Atlas → Ait Ben Haddou → Southern valleys
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
              Day 2
            </p>

            <h4 className="mt-2 text-lg font-bold text-[#102043]">
              Gorge &amp; Sahara
            </h4>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Dades → Todra Gorge → Merzouga → Erg Chebbi → Desert Camp
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-[#fffaf4] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
              Day 3
            </p>

            <h4 className="mt-2 text-lg font-bold text-[#102043]">
              Sunrise &amp; Return
            </h4>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Sahara Sunrise → Merzouga → Scenic Road → Marrakech
            </p>
          </div>
        </div>

        {/* =====================================================
            FINAL SUMMARY
        ===================================================== */}

        <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            What Travelers Remember
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            The Journey Is More Than the Final Destination
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            High Atlas Mountains → Ait Ben Haddou → Dades Valley → Todra
            Gorge → Merzouga → Erg Chebbi → Camel Trek → Desert Night →
            Sahara Sunrise
          </p>

          <p className="mt-3 text-base leading-7 text-gray-700">
            For these travelers, the strongest memories came from the
            contrast between each part of the journey rather than from only
            one attraction.
          </p>
        </div>
      </div>
    </section>
  );
}
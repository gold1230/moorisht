import Image from "next/image";
import PlaceHoverCard from "@/Compentents/placeCard";


import ActivitiesImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";
import CamelTrekkingImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";
import DesertCampImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function MarrakechMerzougaActivitiesSection() {
  return (
    <section
      id="activities-included-in-the-3-day-desert-tour-from-marrakech-to-merzouga"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="marrakech-merzouga-activities-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Desert Activities &amp; Experiences
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="marrakech-merzouga-activities-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Activities Included in the 3-Day Desert Tour from Marrakech to
        Merzouga
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          MAIN IMAGE
      ===================================================== */}

      <figure className="my-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <Image
            src={ActivitiesImage}
            alt="Travelers enjoying activities during a Morocco Sahara desert tour"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <figcaption className="mt-3 text-sm leading-6 text-gray-500">
          The Marrakech to Merzouga journey combines scenic sightseeing with
          Sahara activities around the Erg Chebbi dunes.
        </figcaption>
      </figure>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        The{" "}
        <strong className="font-semibold text-slate-900">
          3 days desert tour from Marrakech to Merzouga
        </strong>{" "}
        is not only about driving from one destination to another. The
        journey combines sightseeing, nature, culture and Sahara experiences
        as you travel from{" "}
        <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
        toward the desert landscapes around{" "}
        <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        During the{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>
        , travelers cross the{" "}
        <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
        , visit historic places such as{" "}
        <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>
        , travel through valleys and stop around{" "}
        <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
        before reaching the Sahara.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        The desert activities begin around{" "}
        <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
        . Camel trekking is one of the classic experiences, while activities
        such as sandboarding, additional cultural visits and some musical
        experiences depend on the selected package and local arrangements.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        This variety is what makes the{" "}
        <strong className="font-semibold text-slate-900">
          3-day desert tour from Marrakech to Merzouga
        </strong>{" "}
        feel like more than a road journey. Travelers have opportunities to
        walk, explore, experience the dunes, enjoy the desert atmosphere and
        discover different landscapes along the way.
      </p>

      {/* =====================================================
          QUICK ACTIVITIES OVERVIEW
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
          Sahara Activities at a Glance
        </p>

        <h3 className="mt-2 text-xl font-bold text-[#102043]">
          Adventure, Culture &amp; Desert Nature
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-700">
          Camel trekking → Sunset in Erg Chebbi → Desert camp → Optional
          sandboarding → Traditional evening atmosphere → Stargazing →
          Sahara sunrise
        </p>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Exact activities vary by package, camp, season and local
          conditions. Confirm optional experiences when booking.
        </p>
      </div>

      {/* =====================================================
          CAMEL TREKKING
      ===================================================== */}

      <div
        id="camel-trekking-across-the-golden-dunes"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Camel Trekking Across the Golden Dunes
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={CamelTrekkingImage}
              alt="Travelers camel trekking across the Erg Chebbi dunes near Merzouga"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            Camel trekking through Erg Chebbi around sunset is one of the
            classic experiences of a Merzouga desert journey.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          One of the most memorable moments of the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          is camel trekking across the golden dunes of{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For many travelers, riding slowly across the sand while the sun
          moves lower over the Sahara is one of the images they imagined
          before visiting Morocco. The camel trek gives you time to leave the
          road behind and experience the dunes at a much slower pace.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After arriving near{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
          , the camel caravan normally begins in the later afternoon,
          depending on the season, weather and sunset time.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          As the caravan moves farther into the dunes, the colors of the sand
          gradually change. Bright golden tones can become warmer orange and
          red shades as the sun moves closer to the horizon.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The experience is not only about taking photographs. The slower
          movement through the dunes gives travelers time to enjoy the open
          landscape and the quieter atmosphere of the Sahara.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The exact duration of the camel trek varies by camp and itinerary,
          so travelers should confirm this before departure. Anyone with
          mobility, back or other physical concerns should also discuss the
          camel ride in advance so an appropriate alternative can be
          arranged when possible.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          At the end of the trek, travelers reach the desert camp and begin
          the evening portion of their{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tour
          </strong>
          .
        </p>
      </div>

      {/* =====================================================
          SANDBOARDING
      ===================================================== */}

      <div
        id="sandboarding-experience-in-erg-chebbi"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Sandboarding Experience in Erg Chebbi
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Travelers looking for an additional activity can sometimes try
          sandboarding during the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>
          . The soft dunes around Erg Chebbi create a natural setting for
          sliding down the sand.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Some{" "}
          <PlaceHoverCard place="merzouga">Merzouga desert camps</PlaceHoverCard>{" "}
          provide boards for guests, while other tours may offer
          sandboarding only as an optional activity. If this experience is
          important to you, confirm availability before booking.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Sandboarding is relatively simple to try. Travelers climb a dune,
          position themselves on the board and slide down the sandy slope.
          Beginners can usually start on smaller dunes before trying a
          steeper section.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The climb back to the top can actually be the hardest part because
          walking uphill through soft sand requires more effort than walking
          on a normal path.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Cooler periods of the day, such as late afternoon or early morning,
          are generally more comfortable for active experiences in the dunes,
          particularly during warmer seasons.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Sandboarding gives travelers another way to experience{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          instead of simply looking at the dunes from a distance.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            Optional Activity
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Want to Try Sandboarding?
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Ask whether boards are available at your selected camp. Equipment
            and availability can differ between tour packages.
          </p>
        </div>
      </div>

      {/* =====================================================
          NOMAD FAMILIES
      ===================================================== */}

      <div
        id="visiting-nomad-families-in-the-desert"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Visiting Nomad Families in the Desert
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Some itineraries around{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
          can include an optional visit with nomadic or semi-nomadic families
          living in the wider desert region.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          This type of experience is normally more suitable for an extended
          desert excursion or 4×4 exploration rather than being automatically
          included in every{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          When organized respectfully, a visit can give travelers an
          opportunity to learn more about life in the desert, family
          traditions, livestock and the practical challenges of living far
          from larger towns.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Hospitality may include sitting together for Moroccan tea and
          conversation. The purpose should be cultural exchange rather than
          treating people&apos;s homes or daily lives as tourist
          attractions.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Travelers should always follow the guidance of the local host or
          guide, ask before photographing people and respect privacy,
          especially when children are present.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          If you want this type of cultural experience as part of your{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tour
          </strong>
          , ask when booking whether it can be included and how the visit is
          organized.
        </p>
      </div>

      {/* =====================================================
          MUSIC
      ===================================================== */}

      <div
        id="gnawa-music-traditional-berber-drums"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Gnawa Music &amp; Traditional Berber Drums
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={DesertCampImage}
              alt="Traditional music around a Sahara desert campfire near Merzouga"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            Many camps offer an informal evening with traditional drumming,
            while specific Gnawa performances may require a separate cultural
            stop.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          When night arrives in the Sahara, many desert camps create a
          relaxed evening atmosphere after dinner. Depending on the camp,
          staff may play traditional Amazigh or Berber-style drums and songs
          around the fire.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Travelers can sit together, listen to the rhythms, clap along or
          simply enjoy the evening atmosphere after a full day traveling
          toward Merzouga.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Gnawa music is a distinct Moroccan musical tradition and should not
          automatically be treated as the same thing as ordinary desert-camp
          drumming. Travelers particularly interested in Gnawa culture may
          want to visit{" "}
          <PlaceHoverCard place="khamlia">Khamlia</PlaceHoverCard>
          , depending on the itinerary.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The informal camp music and a specific Gnawa performance are
          therefore two different experiences. The exact evening program
          depends on the camp and package selected for your{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Even without a formal performance, sitting outside after dinner
          while traditional rhythms echo through the quieter desert
          surroundings can become one of the memorable cultural moments of
          the Sahara night.
        </p>
      </div>

      {/* =====================================================
          STARGAZING
      ===================================================== */}

      <div
        id="stargazing-in-the-sahara-night-sky"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Stargazing in the Sahara Night Sky
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          One of the simplest but most memorable parts of spending the night
          near{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          is stepping outside the camp and looking at the Sahara night sky.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Away from the stronger artificial lighting found in large cities,
          the desert can provide excellent views of stars when the sky is
          clear. Visibility depends on cloud cover, dust, moonlight and other
          weather conditions.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After dinner and the evening activities, travelers can move to a
          quiet area near the camp and simply look upward. The combination of
          open sky, dunes and very little surrounding activity creates a
          peaceful atmosphere.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          On darker, clear nights, many more stars may be visible than in
          heavily illuminated urban areas. Travelers interested in
          photography can also try long-exposure night photographs when
          conditions are suitable.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Stargazing requires no special program or equipment for casual
          viewing. It is simply part of experiencing the quieter side of the{" "}
          <PlaceHoverCard place="merzouga">Sahara Desert</PlaceHoverCard>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The experience continues the following morning when the stars
          gradually disappear and the first sunlight reaches the dunes.
          Watching both the desert night and the sunrise gives travelers two
          completely different views of the same landscape.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          This combination of camel trekking, the desert camp, optional
          activities and quiet time beneath the sky gives the{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>{" "}
          much more depth than simply driving to the dunes and returning.
        </p>

        {/* ===================================================
            FINAL SUMMARY
        =================================================== */}

        <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            Activities to Expect
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            From Sunset Adventure to Sahara Night
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Camel Trekking → Erg Chebbi Sunset → Desert Camp → Optional
            Sandboarding → Traditional Drumming → Stargazing → Sahara
            Sunrise
          </p>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Nomad visits, Khamlia and Gnawa music, sandboarding, 4×4
            excursions and other additional experiences depend on the tour
            option you book and should be confirmed in advance.
          </p>
        </div>
      </div>
    </section>
  );
}
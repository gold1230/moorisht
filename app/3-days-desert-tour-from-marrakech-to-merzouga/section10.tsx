import Image from "next/image";
import PlaceHoverCard from "@/Compentents/placeCard";


import RealSaharaImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

import BerberVillagesImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function ExperienceRealSaharaSection() {
  return (
    <section
      id="experience-the-real-sahara-on-this-3-day-desert-tour-from-marrakech-to-merzouga"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="experience-real-sahara-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Experience the Moroccan Sahara
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="experience-real-sahara-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Experience the Real Sahara on This 3-Day Desert Tour from Marrakech
        to Merzouga
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          MAIN IMAGE
      ===================================================== */}

      <figure className="my-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <Image
            src={RealSaharaImage}
            alt="Golden Sahara dunes near Merzouga during a Marrakech desert tour"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <figcaption className="mt-3 text-sm leading-6 text-gray-500">
          The golden Erg Chebbi dunes near Merzouga are the main Sahara
          destination on this three-day journey from Marrakech.
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
        is one of the best-known short Sahara journeys from Marrakech.
        Travelers who have limited time in Morocco can leave the lively
        streets of the Red City and travel through mountains, valleys,
        historic settlements and desert landscapes before reaching the
        golden dunes near Merzouga.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        This journey is not simply a road trip between{" "}
        <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
        and{" "}
        <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
        . The route itself is part of the experience, showing travelers
        mountains, valleys, kasbahs, palm groves and eventually the open
        Sahara.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        During these{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>
        , travelers cross the{" "}
        <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
        , pass traditional Amazigh villages and visit important places such
        as{" "}
        <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>{" "}
        and{" "}
        <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
        before reaching the Sahara.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        One of the most memorable experiences comes after arriving beside{" "}
        <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
        . Camel trekking around sunset allows travelers to move slowly
        through the dunes while the light changes across the sand.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Later, depending on the tour package selected, travelers can spend
        the night at a desert camp, enjoy dinner and experience the quiet
        atmosphere of the Sahara away from the brighter lights of the city.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        The{" "}
        <strong className="font-semibold text-slate-900">
          3-day desert tour from Marrakech to Merzouga
        </strong>{" "}
        can work well for couples, families, solo travelers and small groups
        looking for a combination of culture, nature and desert adventure
        within a short itinerary.
      </p>

      {/* =====================================================
          MARRAKECH MEDINA TO MERZOUGA
      ===================================================== */}

      <div
        id="from-marrakech-medina-to-the-endless-dunes-of-merzouga"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          From Marrakech Medina to the Endless Dunes of Merzouga
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The journey begins around the lively{" "}
          <PlaceHoverCard place="marrakech">Marrakech medina</PlaceHoverCard>
          , where narrow streets are full of colors, spices, shops and local
          activity.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Many travelers spend time exploring Marrakech before beginning
          their{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>
          . Early in the morning, the city is left behind as the road begins
          climbing toward the High Atlas Mountains.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The route crosses{" "}
          <PlaceHoverCard place="tizi-ntichka">Tizi n&apos;Tichka Pass</PlaceHoverCard>
          , where the road winds through valleys, steep mountain landscapes
          and villages built from stone and earth.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          As part of the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech 3 day itinerary
          </strong>
          , travelers stop at{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>
          , one of southern Morocco&apos;s best-known historic sites.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          From there, the road continues toward{" "}
          <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>{" "}
          and then through the{" "}
          <PlaceHoverCard place="rose-valley">Rose Valley</PlaceHoverCard>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Green areas and cultivated valleys gradually alternate with drier
          rock formations before reaching{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>
          , where the first overnight stop is usually made.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            Day 1 Landscape Change
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Medina Streets to Mountain Valleys
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Marrakech → High Atlas Mountains → Tizi n&apos;Tichka →
            Ait Ben Haddou → Ouarzazate → Rose Valley → Dades Valley
          </p>
        </div>

        <p className="mt-8 text-lg leading-8 text-gray-700">
          On the second day, the scenery changes again. After leaving Dades,
          travelers continue toward{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>
          , where there is normally time for a short walk beneath the
          cliffs.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The road then moves through increasingly dry landscapes toward{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
          . Eventually, the enormous dunes appear on the horizon and the
          journey finally reaches the Sahara.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          This moment is memorable because the landscape looks almost
          completely opposite to the Marrakech medina where the journey
          started. Busy streets and narrow alleys have been replaced by
          open sky and wide golden dunes.
        </p>
      </div>

      {/* =====================================================
          VILLAGES + LANDSCAPES
      ===================================================== */}

      <div
        id="a-journey-through-berber-villages-and-desert-landscapes"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          A Journey Through Berber Villages and Desert Landscapes
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={BerberVillagesImage}
              alt="Travelers exploring southern Morocco on the road from Marrakech to Merzouga"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            The route to Merzouga crosses rural communities, valleys and
            increasingly dry desert landscapes.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          One of the most interesting parts of the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tours
          </strong>{" "}
          is seeing life outside Morocco&apos;s larger cities. The road
          crosses small Amazigh villages and rural areas where the pace of
          everyday life can feel very different from Marrakech.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Traditional houses made from local earth and stone often blend
          naturally into the surrounding mountain landscape. Along the road,
          travelers may see farms, grazing animals, palm groves and small
          communities spread through valleys and dry plains.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          is therefore not only about the final Sahara destination. Places
          seen between Marrakech and Merzouga help tell the wider story of
          southern Morocco.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Around{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>
          , the road passes striking rock formations and old settlements.
          Historic kasbah architecture can still be seen throughout this
          part of the journey.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          In{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>
          , tall cliffs rise on both sides of the valley, creating a
          dramatic natural stop before travelers continue toward the Sahara.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          As Merzouga gets closer, the landscape becomes wider and drier.
          Palm groves and small settlements appear between stretches of open
          terrain before the first golden dunes become visible.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Reaching{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          completes the landscape transformation. Mountains, valleys,
          villages and rocky plains are replaced by soft sand dunes and a
          much wider horizon.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          This combination of rural areas and natural landscapes gives the{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>{" "}
          much more depth than a simple visit to the dunes.
        </p>
      </div>

      {/* =====================================================
          FEELS LIKE A MOVIE
      ===================================================== */}

      <div
        id="why-this-marrakech-to-merzouga-3-days-desert-tour-feels-like-a-movie"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Why This Marrakech to Merzouga 3 Days Desert Tour Feels Like a Movie
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          One reason the{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          feels so cinematic is the speed at which the scenery changes. A
          single route moves through city streets, mountain passes, historic
          architecture, green valleys, rocky desert plains and finally huge
          golden dunes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The journey begins beside the red and earth-colored buildings of{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
          before moving toward the High Atlas Mountains. During winter,
          higher mountain peaks can sometimes carry snow, creating another
          strong visual contrast with the landscapes farther south.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Historic{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>{" "}
          adds to this cinematic feeling. Its fortified buildings and
          surrounding dry landscape have attracted international film and
          television productions for many years.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Walking through the ksar gives travelers the feeling of entering a
          historic setting, especially when looking across the surrounding
          valleys from higher parts of the settlement.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The scenery changes once again when travelers reach the dunes near{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
          . Around sunset, the sand can shift from bright gold to warm
          orange tones while long shadows move across the dunes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Camel trekking during this time adds another classic Sahara scene.
          The caravan moves slowly across the dunes while the sun lowers
          toward the horizon, creating a completely different atmosphere
          from the road journey earlier in the day.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After dark, the desert camp creates yet another setting. Depending
          on the camp and package, travelers may enjoy dinner and traditional
          music before spending time outside beneath the night sky.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Away from strong urban lighting and when weather conditions are
          clear, the desert sky can provide excellent views of the stars.
          The combination of open space, dunes and quiet surroundings creates
          a memorable final scene for the second day of the journey.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For travelers building a{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>
          , adding the Sahara changes the trip from a city-focused break into
          a journey through several visually different regions of Morocco.
        </p>

        {/* ===================================================
            SECTION SUMMARY
        =================================================== */}

        <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            The Sahara Journey
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            From the Red City to the Golden Dunes
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Marrakech Medina → High Atlas Mountains → Ait Ben Haddou →
            Ouarzazate → Dades Valley → Todra Gorge → Merzouga →
            Erg Chebbi → Sunset Camel Trek → Desert Camp
          </p>
        </div>
      </div>
    </section>
  );
}
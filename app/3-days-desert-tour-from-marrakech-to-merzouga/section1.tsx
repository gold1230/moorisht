import Image from "next/image";
import Link from "next/link";

import {
  CheckCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import storyImage from "@/public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";

import couplesImage from "@/public/blog/content/4x4-vehicle-exploring-desert-landscapes-around-merzouga-and-erg-chebbi.jpg";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function WhyTravelersChooseSection() {
  return (
    <section
      id="why-travelers-choose-our-marrakech-to-merzouga-3-days-desert-tours"
      className="scroll-mt-28"
      aria-labelledby="why-travelers-choose-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <div className="flex items-center gap-2">
        <MapPinIcon
          className="h-5 w-5 text-amber-700"
          aria-hidden="true"
        />

        <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
          Marrakech to Merzouga Desert Guide
        </p>
      </div>

      {/* =====================================================
          MAIN H2
      ===================================================== */}

      <h2
        id="why-travelers-choose-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Why Travelers Choose Our Marrakech to Merzouga 3 Days Desert Tours
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        Many visitors searching for{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>{" "}
        want something more than just transportation from one
        city to another. They are looking for a real experience,
        something that feels authentic, safe, and well organized.
        Our{" "}
        <Link
          href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/"
          className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
        >
          3 days desert tour from Marrakech to Merzouga
        </Link>{" "}
        is designed especially for travelers who want to see
        some of the best parts of Morocco in a short time without
        missing the magic of the Sahara.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        What makes this tour special is the balance between
        adventure and comfort. During these{" "}
        <strong className="font-semibold text-slate-900">
          3 days tour from Marrakech to Merzouga desert
        </strong>
        , you cross the High Atlas Mountains, visit the famous
        Ait Ben Haddou, explore{" "}
        <PlaceHoverCard
          place="todra-gorge"
          
        >
          Todra Gorges
        </PlaceHoverCard>
        , and finally arrive at the golden dunes of Erg Chebbi in{" "}
        <PlaceHoverCard
          place="merzouga"
        >
          Merzouga
        </PlaceHoverCard>
        . It is not simply a transfer from Marrakech to the
        desert. It is a complete journey across different
        landscapes and regions of Morocco.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Travelers from the USA, UK, Canada and Australia often
        appreciate how the journey is organized. The route
        includes scenic stops, comfortable transportation and
        time to enjoy the desert experience instead of only
        driving from one place to another.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Camel trekking around sunset is one of the most memorable
        moments of the{" "}
        <strong className="font-semibold text-slate-900">
          3-day desert tour from Marrakech to Merzouga
        </strong>
        . As the sunlight becomes warmer, the dunes change color
        and the landscape becomes one of the most beautiful
        scenes of the trip.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Another reason travelers choose this journey is
        flexibility. Visitors can choose between private and
        small-group options, different accommodation levels and
        different desert camp experiences. This flexibility can
        make a{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech 3 day itinerary
        </strong>{" "}
        feel more complete and more personal.
      </p>

      {/* =====================================================
          SMALL HIGHLIGHT BOX
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6">
        <h3 className="text-xl font-bold text-[#102043]">
          Why this route works so well
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <CheckCircleIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />

            <p className="text-base leading-7 text-gray-700">
              High Atlas Mountains and traditional villages
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircleIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />

            <p className="text-base leading-7 text-gray-700">
              Ait Ben Haddou and southern Morocco landscapes
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircleIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />

            <p className="text-base leading-7 text-gray-700">
              Todra Gorge and the road toward Merzouga
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircleIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />

            <p className="text-base leading-7 text-gray-700">
              Erg Chebbi dunes, camel trekking and desert camp
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          REAL STORY
      ===================================================== */}

      <div
        id="a-real-story-how-my-3-day-desert-tour-from-marrakech-to-merzouga-changed-my-trip-to-morocco"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          A Real Story: “How My 3-Day Desert Tour from Marrakech
          to Merzouga Changed My Trip to Morocco”
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          “I originally planned to stay only in Marrakech,” one
          traveler from London told us. “I had a simple{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>
          , visiting the souks and Jemaa el-Fnaa square. But
          adding the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          changed everything.”
        </p>

        {/* Story image */}
        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={storyImage}
              alt="Travelers exploring Morocco on a Marrakech to Merzouga desert journey"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            The journey from Marrakech to Merzouga crosses
            mountains, valleys and desert landscapes before
            reaching the Erg Chebbi dunes.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          On the first day, she crossed the Atlas Mountains and
          said she did not expect the landscapes to be so
          dramatic. The road through Tizi n&apos;Tichka Pass felt
          like entering another world. By the time she reached
          Dades Valley, she already felt far from the busy
          streets of{" "}
          <PlaceHoverCard
            place="marrakech"
          >
            Marrakech
          </PlaceHoverCard>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The second day was the most emotional. Arriving in
          Merzouga and seeing the dunes of Erg Chebbi for the
          first time was a moment she described as “pure silence
          and peace.” The camel ride at sunset during the{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          became her favorite memory of Morocco.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          She said the desert made her feel small but happy at
          the same time. The scale of the dunes, the quiet
          landscape and the changing colors around sunset were
          completely different from everything she had
          experienced in Marrakech.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          At night, sitting around the fire in the Sahara camp
          and listening to traditional drums under a sky full of
          stars, she realized that Morocco is not only cities
          and markets, but also deep nature and culture.
        </p>

        <blockquote className="mt-7 rounded-r-2xl border-l-4 border-amber-600 bg-[#fffaf4] px-6 py-5">
          <p className="text-lg font-medium leading-8 text-slate-800">
            “Without the desert, my trip would not have been the
            same.”
          </p>

          <footer className="mt-2 text-sm font-semibold text-amber-700">
            Traveler experience
          </footer>
        </blockquote>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          When she returned to Marrakech on day three, she felt
          her{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech 3 day itinerary
          </strong>{" "}
          was now complete.
        </p>
      </div>

      {/* =====================================================
          ESCAPE FROM MARRAKECH
      ===================================================== */}

      <div
        id="the-perfect-escape-from-busy-marrakech-to-the-sahara-desert"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          The Perfect Escape from Busy Marrakech to the Sahara Desert
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Marrakech is exciting, colorful, and full of life.
          But after one or two days exploring the medina, many
          travelers start looking for something calmer. This is
          why the{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>{" "}
          can be such an interesting escape. It takes you from
          crowded streets to wide open landscapes in a
          relatively short period of time.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          During this{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tour
          </strong>
          , you move from the Red City toward peaceful
          mountains, green valleys, rocky canyons and finally
          the golden Sahara dunes. Each part of the journey has
          its own character.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The High Atlas Mountains offer cooler air, mountain
          views and traditional communities. Historic kasbahs
          tell the story of old routes connecting different
          parts of southern Morocco. The desert at the end of
          the journey brings a completely different feeling of
          silence and space.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Many travelers say this contrast is what makes the
          journey memorable. One day you can be walking through
          the souks of Marrakech, and the next day you can be
          watching the sunset from the dunes of Erg Chebbi.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          If your{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>{" "}
          feels too focused on the city, adding a Sahara journey
          allows you to see a much wider side of Morocco.
        </p>
      </div>

      {/* =====================================================
          COUPLES / FAMILIES / GROUPS
      ===================================================== */}

      <div
        id="ideal-for-couples-families-small-groups"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Ideal for Couples, Families &amp; Small Groups
        </h3>

        {/* Image */}
        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={couplesImage}
              alt="Travelers enjoying a Morocco desert journey toward Merzouga"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            Private and small-group tours can suit couples,
            families, friends and independent travelers.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          is not only for backpackers or adventure seekers.
          The route can work for several different types of
          travelers.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Couples often choose this journey for the peaceful
          Sahara atmosphere, beautiful sunsets and evenings
          around the desert camp. Camel trekking during the{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          can become one of the most memorable shared moments
          of the trip.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Families can also enjoy the journey because it mixes
          sightseeing, nature and cultural discovery. Children
          may enjoy seeing traditional villages, walking in
          Todra Gorge and experiencing the desert for the first
          time.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Parents often value comfortable transportation,
          planned stops and organized accommodation. A private
          itinerary can also provide more flexibility for
          families that need extra breaks along the route.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Small groups of friends can enjoy the social side of
          the desert camp. Sharing music around the fire,
          watching sunrise together over the dunes and
          traveling across Morocco&apos;s changing landscapes can
          make the experience even more memorable.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Whether you choose a private or shared option, the{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>{" "}
          can offer useful flexibility. Depending on the tour
          package, travelers may be able to choose different
          accommodation levels, request dietary options or
          organize specific pickup arrangements.
        </p>
      </div>

      {/* =====================================================
          NEXT SECTION PREVIEW / INTERNAL LINK
      ===================================================== */}

      <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
          Continue the Guide
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#102043]">
          Marrakech to Merzouga 3 Days Desert Tours – Journey
          Through Morocco&apos;s Hidden Beauty
        </h3>

        <p className="mt-3 text-base leading-7 text-gray-600">
          Continue reading to discover the complete road from
          Marrakech through the High Atlas Mountains, Ait Ben
          Haddou, Dades Valley, Todra Gorge and finally the
          Sahara Desert at Merzouga.
        </p>

        <Link
          href="#marrakech-to-merzouga-3-days-desert-tours-journey-through-moroccos-hidden-beauty"
          className="mt-5 inline-flex items-center font-semibold text-amber-700 underline-offset-4 transition hover:text-amber-800 hover:underline"
        >
          Continue to the full journey
        </Link>
      </div>
    </section>
  );
}


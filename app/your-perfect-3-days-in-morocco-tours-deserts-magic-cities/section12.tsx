import Image from "next/image";
import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToMerzouga3Day from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

import DesertCampImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";
import LuxuryCampImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function MarrakechMerzougaAccommodationSection() {
  return (
    <section
      id="accommodation-during-your-3-day-desert-tour-from-marrakech-to-merzouga"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="marrakech-merzouga-accommodation-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Where You Stay
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="marrakech-merzouga-accommodation-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Accommodation During Your 3-Day Desert Tour from Marrakech to
        Merzouga
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        One of the most important parts of your{" "}
        <strong className="font-semibold text-slate-900">
          3 days desert tour from Marrakech to Merzouga
        </strong>{" "}
        is where you sleep and relax after the long scenic drives through
        southern Morocco. Comfortable accommodation gives you time to rest
        between the mountain journey, sightseeing stops and the Sahara
        experience.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        During the{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>
        , accommodation normally includes two very different overnight
        experiences. The first night is usually around{" "}
        <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>
        , while the second night takes place around the Sahara dunes near{" "}
        <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        On the first evening, travelers can enjoy the quieter atmosphere of
        the valley after crossing the{" "}
        <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>{" "}
        and visiting important places such as{" "}
        <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        The second overnight experience is completely different. After
        reaching the dunes of{" "}
        <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
        , travelers can stay at a desert camp and experience the quiet
        atmosphere of the Sahara after sunset.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Accommodation is therefore more than simply a place to sleep. It
        becomes part of the journey itself, combining Moroccan design,
        traditional food, desert atmosphere and time to relax before the
        next part of the itinerary.
      </p>

      {/* =====================================================
          ACCOMMODATION OVERVIEW
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
          Two Different Nights
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-[#102043]">
              Night 1: Dades Valley
            </h3>

            <p className="mt-2 text-base leading-7 text-gray-700">
              Traditional hotel, guesthouse or riad-style accommodation
              surrounded by southern Moroccan landscapes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#102043]">
              Night 2: Merzouga
            </h3>

            <p className="mt-2 text-base leading-7 text-gray-700">
              Sahara desert camp near Erg Chebbi, with standard or
              higher-comfort options depending on your booking.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          TRADITIONAL RIADS & HOTELS
      ===================================================== */}

      <div
        id="traditional-riads-boutique-hotels"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Traditional Riads &amp; Boutique Hotels
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={MarrakechToMerzouga3Day}
              alt="Traditional accommodation in southern Morocco during a Marrakech to Merzouga desert tour"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            The first overnight stay is normally in the Dades region before
            continuing toward Todra Gorge and Merzouga.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          During the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tours
          </strong>
          , the first overnight stay is commonly in a traditional
          guesthouse, hotel or riad-style property around{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
          or a nearby area.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          These smaller properties can offer a very different atmosphere
          from large international hotels. Moroccan decorative details such
          as patterned tiles, carpets, carved doors, warm colors and
          traditional furnishings often form part of the experience.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After a full day crossing the{" "}
          <PlaceHoverCard place="tizi-ntichka">Tizi n&apos;Tichka Pass</PlaceHoverCard>{" "}
          and exploring southern Morocco, arriving at a peaceful
          guesthouse gives travelers time to rest before the second day.
      </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Room facilities depend on the property selected, but private rooms
          and bathroom facilities are commonly available in many tour
          packages. Travelers who require specific room arrangements should
          confirm them before booking.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Dinner may also be included depending on the package, with dishes
          such as Moroccan tagine, couscous, salads and other regional meals
          often served at accommodation along the desert route.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          This first overnight stop helps balance the{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>
          . Travelers can enjoy a quieter evening in the valley before
          continuing through Todra Gorge and toward the Sahara the following
          morning.
        </p>
      </div>

      {/* =====================================================
          STANDARD DESERT CAMP
      ===================================================== */}

      <div
        id="standard-desert-camp-experience"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Standard Desert Camp Experience
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={DesertCampImage}
              alt="Standard Sahara desert camp near the Erg Chebbi dunes in Merzouga"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            Standard desert camps focus on a simpler Sahara atmosphere close
            to the Erg Chebbi dunes.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The standard desert camp is one of the classic accommodation
          options during the{" "}
          <strong className="font-semibold text-slate-900">
            3 days tour from Marrakech to Merzouga desert
          </strong>
          . After arriving near Merzouga and crossing part of the dunes,
          travelers continue toward their overnight camp.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The camp is located near the landscapes of{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>
          , giving travelers the opportunity to experience the Sahara after
          most daytime visitors have left.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Standard camps generally focus on a simpler desert atmosphere.
          Tents normally provide beds, bedding and blankets, while bathroom
          arrangements can vary between camps. Some use shared facilities,
          so travelers should confirm the exact setup before choosing this
          option.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Dinner is commonly part of the evening experience depending on
          the selected package. After the meal, some camps offer traditional
          drum music or a relaxed gathering around the campfire.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          The strongest part of the standard camp experience is often its
          simplicity. Away from the traffic and lights of{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>
          , the evening near the dunes feels much quieter.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For travelers looking for a more traditional desert atmosphere
          while keeping the tour budget lower, a standard camp can be a good
          option.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            Standard Camp
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Simple Sahara Experience
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Traditional-style tent accommodation, bedding, dinner and desert
            atmosphere, with exact bathroom facilities depending on the camp
            selected.
          </p>
        </div>
      </div>

      {/* =====================================================
          LUXURY DESERT CAMP
      ===================================================== */}

      <div
        id="luxury-sahara-desert-camp-option"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Luxury Sahara Desert Camp Option
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={LuxuryCampImage}
              alt="Luxury Sahara desert camp experience near Merzouga Morocco"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            Higher-comfort desert camps can provide larger tents and
            additional facilities depending on the package selected.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Travelers who want additional comfort during the{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          can choose a higher-comfort or luxury Sahara camp when that option
          is available.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          These camps still provide the desert atmosphere around{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
          , but generally offer more spacious accommodation and additional
          amenities compared with simpler camps.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Luxury tents are often decorated with Moroccan carpets, lighting,
          furniture and comfortable bedding. The exact design and facilities
          vary from one camp to another, so the word &quot;luxury&quot; can
          represent different standards depending on the operator.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Some camps provide larger beds, private bathrooms, showers and more
          space for luggage, while others may offer additional dining or
          lounge areas. It is always useful to check photographs and the
          exact list of facilities before confirming your booking.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After dinner, travelers can still enjoy the main Sahara
          atmosphere: the open desert, traditional music when provided by
          the camp, cooler night air and the wide sky above the dunes.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          This option can be especially attractive for couples, honeymoon
          travelers, families and visitors who want the adventure of an
          overnight Sahara experience without giving up as much comfort.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
              Standard
            </p>

            <h4 className="mt-2 text-xl font-bold text-[#102043]">
              Traditional &amp; Simple
            </h4>

            <p className="mt-3 text-base leading-7 text-gray-700">
              A more basic camp style focused on the Sahara atmosphere and
              keeping the experience affordable.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-[#fffaf4] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
              Luxury
            </p>

            <h4 className="mt-2 text-xl font-bold text-[#102043]">
              More Space &amp; Comfort
            </h4>

            <p className="mt-3 text-base leading-7 text-gray-700">
              Larger tents and extra facilities, with exact amenities
              depending on the desert camp booked.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRIVATE BATHROOM + HOT SHOWER
      ===================================================== */}

      <div
        id="private-tents-with-bathroom-hot-shower"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Private Tents with Bathroom &amp; Hot Shower
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          One of the most common questions travelers ask before booking a{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          is whether they can have a private bathroom and shower during the
          Sahara night.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Higher-comfort camps around{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          may offer private en-suite tents with their own toilet, sink and
          shower. Hot water availability and bathroom design depend on the
          specific camp.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Having a private bathroom can be particularly useful for couples,
          families and travelers who prefer more privacy after camel
          trekking and time outside in the desert.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Higher-comfort tents may also include larger beds, thicker
          blankets, additional floor space and room for luggage. During
          cooler desert nights, good bedding can make the overnight stay
          noticeably more comfortable.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Because facilities differ between camps, travelers should not
          assume that every &quot;luxury desert camp&quot; includes exactly
          the same amenities. If a private bathroom, hot shower or specific
          bed arrangement is important to you, confirm it before booking.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Choosing this type of accommodation allows travelers to enjoy the
          landscape and quiet atmosphere of the{" "}
          <PlaceHoverCard place="merzouga">Sahara Desert</PlaceHoverCard>{" "}
          while still having many of the facilities they would normally
          expect from comfortable accommodation.
        </p>

        {/* ===================================================
            FINAL ACCOMMODATION SUMMARY
        =================================================== */}

        <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            Accommodation at a Glance
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Valley Comfort + Sahara Experience
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Night 1: Dades Valley hotel, guesthouse or riad-style
            accommodation → Night 2: Standard or luxury desert camp near
            Merzouga and Erg Chebbi.
          </p>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Private bathrooms, hot showers, room type, dinner, camp
            activities and other facilities depend on the package selected,
            so confirm the exact inclusions before booking.
          </p>
        </div>
      </div>
    </section>
  );
}
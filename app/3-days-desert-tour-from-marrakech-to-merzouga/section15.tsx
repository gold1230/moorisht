import Image from "next/image";
import PlaceHoverCard from "@/Compentents/placeCard";


import TravelerTypesImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

export default function WhoLovesMarrakechMerzougaTourSection() {
  return (
    <section
      id="who-loves-this-marrakech-to-merzouga-3-days-desert-tours"
      className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12"
      aria-labelledby="who-loves-marrakech-merzouga-tour-title"
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
        Who This Tour Is Perfect For
      </p>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h2
        id="who-loves-marrakech-merzouga-tour-title"
        className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl"
      >
        Who Loves This Marrakech to Merzouga 3 Days Desert Tours?
      </h2>

      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />

      {/* =====================================================
          MAIN IMAGE
      ===================================================== */}

      <figure className="my-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <Image
            src={TravelerTypesImage}
            alt="Travelers enjoying a Morocco desert journey toward Merzouga"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <figcaption className="mt-3 text-sm leading-6 text-gray-500">
          The Marrakech to Merzouga journey can suit couples, families,
          solo travelers and groups of friends looking for a short Sahara
          adventure.
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
        can suit many different types of travelers. Whether you are planning
        a romantic escape, a family adventure, a solo journey or a trip with
        friends, this route combines culture, scenery and the Sahara within a
        relatively short itinerary.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        The{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech to Merzouga 3 days desert tours
        </strong>{" "}
        are about much more than driving from{" "}
        <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
        to the desert. Travelers cross the{" "}
        <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
        , visit historic places such as{" "}
        <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>
        , explore the landscapes around{" "}
        <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
        and finally reach the golden dunes beside{" "}
        <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>
        .
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Travelers who originally plan only a{" "}
        <strong className="font-semibold text-slate-900">
          Marrakech itinerary 3 days
        </strong>{" "}
        may decide that they also want to experience landscapes outside the
        city. The Sahara gives the trip a completely different atmosphere,
        replacing busy medina streets with open space, dunes and a much
        quieter environment.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-700">
        Depending on the package available, the{" "}
        <strong className="font-semibold text-slate-900">
          3-day desert tour from Marrakech to Merzouga
        </strong>{" "}
        can be arranged as a private or shared experience. This makes the
        route flexible enough for different budgets, travel styles and group
        sizes.
      </p>

      {/* =====================================================
          QUICK TRAVELER TYPES
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
          Who Usually Enjoys This Route?
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-[#102043]">
              Couples
            </h3>

            <p className="mt-2 text-base leading-7 text-gray-700">
              Sahara sunsets, quiet desert scenery and private-tour options.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#102043]">
              Families
            </h3>

            <p className="mt-2 text-base leading-7 text-gray-700">
              Changing landscapes, camel trekking and memorable shared
              experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#102043]">
              Solo Travelers
            </h3>

            <p className="mt-2 text-base leading-7 text-gray-700">
              Organized travel with opportunities to join other visitors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#102043]">
              Groups of Friends
            </h3>

            <p className="mt-2 text-base leading-7 text-gray-700">
              Road-trip atmosphere, scenic stops and shared Sahara
              adventures.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          COUPLES
      ===================================================== */}

      <div
        id="couples-looking-for-romantic-sahara-experience"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Couples Looking for Romantic Sahara Experience
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For couples, the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          offers several peaceful and visually beautiful moments that can
          make a Morocco trip feel more romantic.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After spending time in busy{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>
          , couples travel toward quieter mountain and desert landscapes.
          Scenic stops through the Atlas Mountains give plenty of
          opportunities to take photographs together and enjoy the changing
          views.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          One of the most memorable moments of the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tours
          </strong>{" "}
          is the camel trek around sunset. Riding through{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          while the light changes across the sand creates a peaceful setting
          far from the traffic and noise of the city.
      </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Couples who want additional privacy can consider a private tour,
          while higher-comfort desert camps may provide larger tents and
          private bathroom facilities. Exact camp amenities should always be
          confirmed before booking.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          After dinner, the quieter camp atmosphere and open desert sky give
          couples time to relax together. Traditional music may also be part
          of the evening depending on the selected camp.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Honeymooners, anniversary travelers and couples simply looking for
          something different from a normal city break can enjoy the balance
          between adventure and quiet time that the Sahara provides.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            For Couples
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Sunset, Privacy &amp; Desert Atmosphere
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Consider a private departure and higher-comfort desert camp if
            privacy and flexibility are important to your trip.
          </p>
        </div>
      </div>

      {/* =====================================================
          FAMILIES
      ===================================================== */}

      <div
        id="families-searching-for-a-unique-adventure"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Families Searching for a Unique Adventure
        </h3>

        <figure className="my-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <Image
              src={TravelerTypesImage}
              alt="Family travelers enjoying a Morocco desert journey"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <figcaption className="mt-3 text-sm leading-6 text-gray-500">
            A private desert journey can give families more flexibility for
            breaks, sightseeing and the pace of the trip.
          </figcaption>
        </figure>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Families can also enjoy the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          because the route offers many different things to see rather than
          one repeated landscape.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          During the journey, children and parents see mountain roads,
          villages, palm groves, traditional architecture and dramatic
          natural places such as{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>
          .
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Reaching{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
          adds the most unusual part of the journey. For many children,
          seeing large sand dunes and riding a camel can become one of the
          strongest memories of the trip.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Families should consider the age and comfort of children before
          booking because the route includes long driving periods. A private
          tour can be especially useful because it may allow more flexibility
          for rest stops, meals and the overall pace.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Sandboarding may also be available at some camps, depending on the
          package. Families interested in this activity should confirm that
          boards are provided before departure.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          At night, families can enjoy dinner together and experience the
          quiet desert atmosphere. Some camps offer traditional drumming or
          music after dinner, giving the evening a cultural element as well.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For families looking for something beyond a normal{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>
          , the desert journey adds nature, adventure and several different
          regions of Morocco to the holiday.
        </p>
      </div>

      {/* =====================================================
          SOLO TRAVELERS
      ===================================================== */}

      <div
        id="solo-travelers-exploring-morocco"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Solo Travelers Exploring Morocco
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Solo travelers often consider the{" "}
          <strong className="font-semibold text-slate-900">
            3-day desert tour from Marrakech to Merzouga
          </strong>{" "}
          because an organized route can simplify transportation and
          accommodation across a long section of southern Morocco.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          A shared small-group version of the{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech to Merzouga 3 days desert tour
          </strong>{" "}
          can also give solo visitors an opportunity to meet travelers from
          different countries while still enjoying time independently at
          scenic stops.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Instead of organizing separate transportation between Marrakech,{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>
          , Todra Gorge and Merzouga, a tour package can bring these parts
          of the journey together in one itinerary.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Solo travelers may especially enjoy the quieter moments in the
          Sahara. Sunset, the evening camp atmosphere and early morning views
          over the dunes provide time to slow down after several busy days of
          sightseeing.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          At the same time, the camp creates opportunities to meet other
          travelers during dinner or evening activities. This balance between
          shared experiences and personal time can work well for independent
          visitors.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Solo travelers should confirm whether the price includes a private
          room or tent, whether a single supplement applies and what group
          size to expect before booking.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-amber-700">
            Solo Travel Tip
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Check Room &amp; Group Arrangements
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            Before booking, ask about single-room supplements, tent
            arrangements, expected group size and pickup details.
          </p>
        </div>
      </div>

      {/* =====================================================
          FRIENDS
      ===================================================== */}

      <div
        id="friends-traveling-together-in-small-groups"
        className="scroll-mt-28"
      >
        <h3 className="mt-12 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Friends Traveling Together in Small Groups
        </h3>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Groups of friends can enjoy the{" "}
          <strong className="font-semibold text-slate-900">
            3 days desert tour from Marrakech to Merzouga
          </strong>{" "}
          because the road-trip atmosphere creates plenty of shared moments
          throughout the journey.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Crossing the{" "}
          <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>
          , stopping at panoramic viewpoints and exploring historic{" "}
          <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>{" "}
          give friends plenty of opportunities for sightseeing and
          photography before reaching the desert.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Later, walking through Todra Gorge and continuing toward Erg
          Chebbi creates another change in scenery. By the time the group
          reaches the Sahara, the journey has already passed through several
          very different regions.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Camel trekking near{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>{" "}
          is often one of the most enjoyable shared activities for groups.
          Friends can photograph each other, enjoy the sunset and experience
          the dunes together.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          At the desert camp, the atmosphere becomes more relaxed after
          dinner. Traditional drumming may be offered depending on the camp,
          and groups can spend time outside enjoying the cooler evening air
          and desert sky.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Friends may also prefer a private tour because it allows the whole
          group to travel together in one vehicle and gives more control over
          the pace and sightseeing stops.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          For travelers who only have a short time in Morocco, adding the
          desert to a{" "}
          <strong className="font-semibold text-slate-900">
            Marrakech itinerary 3 days
          </strong>{" "}
          can turn a city-focused holiday into a larger shared adventure
          across mountains, valleys and the Sahara.
        </p>

        {/* ===================================================
            FINAL SUMMARY
        =================================================== */}

        <div className="mt-9 rounded-2xl border border-amber-200 bg-[#fffaf4] p-6 sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">
            Different Travelers, One Sahara Journey
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#102043]">
            Couples + Families + Solo Travelers + Friends
          </h4>

          <p className="mt-3 text-base leading-7 text-gray-700">
            The Marrakech to Merzouga route can be adapted to different
            travel styles through shared or private departures, different
            accommodation levels and optional Sahara activities.
          </p>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import {
  BuildingLibraryIcon,
  GlobeEuropeAfricaIcon,
  HomeIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function Section2() {
  return (
    <section
      id="types-of-accommodation-in-morocco"
      className="scroll-mt-32 border-t border-slate-100 py-10 sm:py-12"
    >
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          Where to Sleep in Morocco
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#102043] sm:text-4xl">
          Types of Accommodation in Morocco
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
          Understanding the different{" "}
          <strong>types of accommodation in Morocco</strong> can make choosing
          where to stay much easier. First-time visitors will find everything
          from traditional riads inside historic medinas to modern hotels,
          Sahara desert camps, countryside guesthouses and large beach resorts.
        </p>

        <p>
          The right option depends on where you are traveling and what kind of
          experience you want. A riad may be perfect for exploring the medina of{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> or{" "}
          <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, while a desert camp
          makes more sense when staying near{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and the{" "}
          <PlaceHoverCard place="erg-chebbi">Erg Chebbi dunes</PlaceHoverCard>.
        </p>

        <p>
          Travelers following a road trip through southern Morocco may prefer a
          kasbah-style hotel or guesthouse in{" "}
          <PlaceHoverCard place="skoura">Skoura</PlaceHoverCard>,{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard> or{" "}
          <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>,
          while beach travelers can choose coastal hotels in{" "}
          <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> or
          resorts around{" "}
          <PlaceHoverCard place="agadir">Agadir</PlaceHoverCard>.
        </p>
      </div>

      {/* =====================================================
          IMAGE PLACEHOLDER
      ===================================================== */}

      <Image
        src={MarrakechToFes4DayHero}
        alt="Different types of accommodation in Morocco for first-time visitors"
        width={1200}
        height={400}
        className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
      />

      {/* =====================================================
          QUICK COMPARISON CARDS
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <HomeIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Riads
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Best for traditional medina stays and Moroccan architecture.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <BuildingLibraryIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Hotels
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Best for easy access, modern facilities and familiar hotel service.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SparklesIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Desert Camps
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Best for sleeping near the Sahara dunes and experiencing Merzouga.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <MapPinIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Guesthouses
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Best for valleys, mountain routes and quieter countryside stays.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <SunIcon className="h-6 w-6 text-amber-700" />

          <h3 className="mt-4 font-bold text-slate-900">
            Beach Resorts
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Best for pools, ocean views and relaxed coastal holidays.
          </p>
        </div>
      </div>

      {/* =====================================================
          RIADS
      ===================================================== */}

      <div
        id="traditional-riads-in-morocco"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Traditional Moroccan Stay
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Traditional Riads in Morocco
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            A riad is one of the most recognizable types of accommodation in
            Morocco. Traditionally, a riad is a Moroccan house designed around
            an interior courtyard or garden, creating a private and peaceful
            space away from the streets outside.
          </p>

          <p>
            Today, many traditional houses have been converted into
            guesthouses and boutique accommodation. Riads are especially common
            in historic cities such as{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>.
          </p>

          <p>
            Staying in a riad can give first-time visitors a more personal
            experience than a large hotel. Many have traditional tilework,
            carved decoration, rooftop terraces, small courtyards and only a
            limited number of rooms.
          </p>

          <p>
            The main thing to check is accessibility. Riads located deep inside
            a medina may not be reachable directly by car because the old
            streets can be narrow or pedestrian-only. This is normal, but
            travelers with heavy luggage should ask where the nearest vehicle
            drop-off point is and whether luggage assistance is available.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
            Best for
          </p>

          <h4 className="mt-2 text-xl font-bold text-slate-900">
            Travelers Who Want a Traditional Morocco Experience
          </h4>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Choose a riad if you value atmosphere, Moroccan design and staying
            close to historic medina attractions. Choose a modern hotel instead
            if easy car access, elevators and larger facilities are more
            important to you.
          </p>
        </div>
      </div>

      {/* =====================================================
          HOTELS
      ===================================================== */}

      <div
        id="hotels-in-morocco"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Familiar Comfort & Easy Access
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Hotels in Morocco
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Hotels in Morocco are available at many price and comfort levels.
            Travelers can find simple budget hotels, comfortable mid-range
            properties, upscale hotels and large luxury resorts.
          </p>

          <p>
            Standard hotels are usually a practical choice for travelers who
            want a clean room and basic services without spending too much.
            Higher-category hotels may offer larger rooms, restaurants, pools,
            spas, gardens, fitness facilities and more personalized service.
          </p>

          <p>
            Hotels can also be easier than medina riads for travelers arriving
            by private vehicle or taxi. This is particularly useful in modern
            areas such as Gueliz in{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> or
            central districts of{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="font-bold text-slate-900">
              Standard Hotels
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Good for travelers who prioritize price, simple rooms and
              practical overnight stays.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="font-bold text-slate-900">
              Superior Hotels
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Better for additional comfort, larger rooms and more hotel
              services.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-5">
            <h4 className="font-bold text-slate-900">
              Luxury Hotels
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Best for travelers wanting premium rooms, pools, spas, gardens
              and higher service levels.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESERT CAMPS
      ===================================================== */}

      <div
        id="morocco-desert-camps"
        className="scroll-mt-32 mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 sm:flex">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-300">
              Unique Sahara Accommodation
            </p>

            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Morocco Desert Camps
            </h3>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
          <p>
            <Link
              href="/luxury-travel-in-morocco/"
              className="font-bold text-amber-300 underline decoration-amber-300/40 underline-offset-4 transition hover:text-amber-200"
            >
              Morocco desert camps
            </Link>{" "}
            offer one of the most unusual accommodation experiences in the
            country. Around{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>,
            travelers can stay near the{" "}
            <PlaceHoverCard place="erg-chebbi">
              Erg Chebbi dunes
            </PlaceHoverCard>{" "}
            and experience the Sahara after most daytime visitors have left.
          </p>

          <p>
            Desert camps range from simple traditional tents to more comfortable
            luxury-style camps. The difference between camps can be significant,
            so travelers should compare facilities rather than choosing only by
            the word &quot;luxury.&quot;
          </p>

          <p>
            Before booking, check whether your tent has a private or shared
            bathroom, what bedding is provided, how the camp handles colder
            nights and how guests reach the camp.
          </p>

          <p>
            Transfers may involve a 4×4 vehicle, camel experience or a
            combination of both depending on the camp and package. Travelers
            should confirm these details before arrival so they know exactly
            what is included.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Private or shared bathroom",
            "Heating or cold-weather arrangements",
            "Bed and bedding quality",
            "Camel or 4×4 transfer details",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/10 p-4"
            >
              <p className="text-sm font-bold leading-6 text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          KASBAHS AND GUESTHOUSES
      ===================================================== */}

      <div
        id="kasbahs-and-guesthouses-in-morocco"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Best for Road Trips & Countryside
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Kasbahs and Guesthouses
        </h3>

        <div className="mt-5 max-w-4xl space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Kasbah-style hotels and family-run guesthouses are common along
            many of Morocco&apos;s mountain, valley and desert routes. They can
            be excellent choices for travelers who want a quieter stay outside
            the large cities.
          </p>

          <p>
            You will find this type of accommodation around{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="skoura">Skoura</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="dades-valley">
              Dades Valley
            </PlaceHoverCard>
            ,{" "}
            <PlaceHoverCard place="tinghir">Tinghir</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="todra-gorge">
              Todra Gorge
            </PlaceHoverCard>
            .
          </p>

          <p>
            Guesthouses often have fewer rooms than large hotels and may
            include home-style Moroccan meals, terraces or views over valleys,
            palms and mountains.
          </p>

          <p>
            A kasbah-style stay can work particularly well during a Morocco
            road trip because the accommodation becomes part of the landscape
            rather than simply a place to sleep.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <MapPinIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Best for Scenic Routes
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Choose this style when traveling through valleys, mountain roads
              and smaller towns where the surrounding scenery is part of the
              experience.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <HomeIcon className="h-6 w-6 text-amber-700" />

            <h4 className="mt-4 text-lg font-bold text-slate-900">
              Best for a Smaller Stay
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Guesthouses can feel more personal than large city hotels and may
              offer a quieter atmosphere after a long driving day.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BEACH RESORTS
      ===================================================== */}

      <div
        id="beach-resorts-and-coastal-hotels-in-morocco"
        className="scroll-mt-32 mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Morocco by the Atlantic
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Beach Resorts and Coastal Hotels
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco also offers a very different style of accommodation along
            the Atlantic coast. Coastal stays can be useful for travelers who
            want to slow down after visiting medinas, mountain roads or the
            Sahara.
          </p>

          <p>
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> is
            especially good for travelers who want a combination of medina
            culture, ocean views, seafood and a relaxed atmosphere.
          </p>

          <p>
            <PlaceHoverCard place="agadir">Agadir</PlaceHoverCard> offers more
            resort-style accommodation, making it attractive for travelers who
            prioritize beaches, pools, sunshine and a traditional holiday
            format.
          </p>

          <p>
            Other Atlantic areas may appeal to surfers or travelers interested
            in quieter coastal stays, but first-time visitors should choose the
            location according to transport, season and the rest of their
            Morocco itinerary.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-[#fffaf3] p-5">
            <h4 className="font-bold text-slate-900">
              Choose Essaouira If...
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              You want medina character, seafood, walking, ocean views and a
              relaxed cultural stay.
            </p>
          </div>

          <div className="rounded-xl bg-[#fffaf3] p-5">
            <h4 className="font-bold text-slate-900">
              Choose Agadir If...
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              You want a resort holiday, larger hotels, pools, easy beach
              access and a more modern coastal experience.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          ACCOMMODATION COMPARISON TABLE
      ===================================================== */}

      <div
        id="which-type-of-accommodation-should-you-choose-in-morocco"
        className="scroll-mt-32 mt-12"
      >
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-amber-700">
          Quick Comparison
        </p>

        <h3 className="mt-2 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">
          Which Type of Accommodation Should You Choose in Morocco?
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[#fffaf3]">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Accommodation
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Best For
                  </th>

                  <th className="px-5 py-4 text-sm font-bold text-slate-900">
                    Common Locations
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Riad
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Traditional atmosphere
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Marrakech, Fes, Essaouira, Chefchaouen
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Hotel
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Easy access & familiar comfort
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Cities throughout Morocco
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Desert Camp
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Sahara experience
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Merzouga / Erg Chebbi
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Kasbah / Guesthouse
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Road trips & countryside
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Skoura, Dades, Tinghir, Atlas regions
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    Beach Resort
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Relaxation & beach holidays
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    Agadir and Atlantic coast
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL TIP
      ===================================================== */}

      <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
        <GlobeEuropeAfricaIcon className="h-6 w-6 text-amber-700" />

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
          First-Time Visitor Tip
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Mix Different Accommodation Styles During Your Morocco Trip
        </h3>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
          You do not need to choose the same style every night. A first Morocco
          itinerary can include a riad in{" "}
          <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, a
          kasbah-style guesthouse in{" "}
          <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>,
          a desert camp in{" "}
          <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and a
          coastal hotel in{" "}
          <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>. This
          gives travelers several very different Morocco experiences during the
          same journey.
        </p>
      </div>
    </section>
  );
}
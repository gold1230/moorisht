import Image from "next/image";
import Link from "next/link";

import PlaceHoverCard from "@/Compentents/placeCard";

import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section2() {
  return (
    <section className="space-y-10 mt-10 sm:mt-12">
      {/* =====================================================
          MOROCCO SAFETY FOR TRAVELERS IN 2026
      ===================================================== */}

      <div>
        <h2
          id="morocco-safety-for-travelers-in-2026"
          className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Morocco Safety for Travelers in 2026
        </h2>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="text-lg leading-8 text-slate-800">
            <strong className="font-bold text-slate-950">
              What travelers should know in 2026:
            </strong>{" "}
            Morocco continues to receive millions of international visitors,
            and its major tourist destinations remain active. However, travel
            safety should be understood realistically: Morocco is not
            risk-free, and visitors should follow current official travel
            advice, stay aware of their surroundings, and take normal
            precautions throughout their trip.
          </p>
        </div>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Travelers researching Morocco in 2026 may find very different
            information online. Some websites describe the country as
            completely safe, while other pages focus heavily on terrorism,
            demonstrations, crime, or regional political issues. The most
            useful approach is to look at the complete picture instead of
            relying on either extreme.
          </p>

          <p>
            Morocco&apos;s main tourism network continues to function across
            destinations such as{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, and{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
            Travelers continue using airports, trains, hotels, riads,
            restaurants, museums, guides, and organized tours throughout
            these popular areas.
          </p>

          <p>
            The current U.S. travel advisory for Morocco is{" "}
            <strong className="font-bold">
              Level 2: Exercise Increased Caution
            </strong>{" "}
            because of terrorism risk. This does not mean tourists are being
            advised to avoid Morocco completely, but it does mean travelers
            should remain alert and follow security guidance.
          </p>

          <p>
            UK travel advice similarly tells visitors to remain aware of
            terrorism risk, petty crime, demonstrations, road safety, and
            other issues that can affect travelers. It also reminds visitors
            that no international trip can be guaranteed completely safe.
          </p>

          <p>
            For a first-time visitor, practical preparation matters more than
            worrying about every headline. Keep valuables secure, be more
            careful in crowded medinas, avoid demonstrations, use licensed or
            trusted tourism providers, and check official advice shortly
            before departure.
          </p>

          <p>
            Travelers planning a longer journey can also choose an organized{" "}
            <Link
              href="/"
              className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800"
            >
              Morocco tour
            </Link>{" "}
            that includes transportation, accommodation, and planned stops
            between the country&apos;s major destinations.
          </p>
        </div>

        <Image
          src={MarrakechToFes4DayHero}
          alt="Travelers exploring Morocco safely during a guided Morocco journey"
          width={1200}
          height={400}
          className="my-8 h-[400px] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* =====================================================
          IS MOROCCO SAFE COMPARED TO OTHER DESTINATIONS?
      ===================================================== */}

      <div>
        <h3
          id="is-morocco-a-safe-country-compared-to-other-destinations"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Is Morocco a Safe Country Compared to Other Destinations?
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Travelers often ask whether Morocco is safer than other countries,
            but there is no single worldwide safety comparison that gives a
            useful answer for every traveler. Different destinations have
            different risks, and government travel advisories may also use
            different systems when evaluating them.
          </p>

          <p>
            A better way to compare Morocco with another destination is to
            look at the specific issues that could affect your trip. In
            Morocco, official travel guidance highlights concerns including
            terrorism, petty crime in tourist areas, demonstrations, scams,
            road safety, and risks associated with some remote regions.
          </p>

          <p>
            This is very different from saying that ordinary tourists regularly
            experience serious security problems. Many visitors complete
            journeys between major destinations without serious incidents, but
            that does not remove the need for sensible precautions.
          </p>

          <p>
            In the busy medinas of{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, for example,
            travelers may be more likely to think about pickpocketing,
            unofficial guides, unwanted attention, or tourist scams than
            military conflict.
          </p>

          <p>
            In mountain and desert areas, the important questions may instead
            involve road conditions, weather, distance from services, the
            experience of your driver or guide, and whether your activity
            provider is reliable.
          </p>

          <p>
            For this reason, saying simply that one country is &quot;safer&quot;
            than another can hide useful details. Travelers should compare
            their exact destinations, activities, transportation plans, and
            current government advice.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">
                    Travel Situation
                  </th>
                  <th className="px-5 py-4 text-sm font-bold">
                    What Visitors Should Know
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-sm leading-6 text-slate-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Major tourist cities
                  </td>
                  <td className="px-5 py-4">
                    Tourism operates normally, but travelers should protect
                    valuables and stay alert in busy places.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Medinas and souks
                  </td>
                  <td className="px-5 py-4">
                    Watch for pickpocketing, scams, aggressive selling, and
                    unofficial guides.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Demonstrations
                  </td>
                  <td className="px-5 py-4">
                    Avoid protests and political gatherings and follow local
                    instructions.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Desert and remote travel
                  </td>
                  <td className="px-5 py-4">
                    Use reliable operators, plan transportation carefully, and
                    avoid isolated camping.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Western Sahara and borders
                  </td>
                  <td className="px-5 py-4">
                    Check specific regional advice because some areas have
                    different security considerations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================================
          GOVERNMENT STABILITY AND SECURITY
      ===================================================== */}

      <div>
        <h3
          id="government-stability-and-security-in-morocco"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Government Stability and Security in Morocco
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco is a constitutional monarchy with national institutions,
            police and security services operating throughout the country.
            From a traveler&apos;s perspective, the important point is that
            the main tourism destinations continue functioning and receiving
            international visitors.
          </p>

          <p>
            Security can be visible in airports, transportation hubs, major
            attractions, hotels, and busy public areas. UK travel guidance
            notes that some hotels and tourist sites may have protective
            security measures such as guards.
          </p>

          <p>
            The U.S. State Department also describes Morocco as having strong
            security services while warning that terrorist attacks remain a
            risk and can happen with little warning. Travelers are therefore
            encouraged to remain aware of their surroundings rather than
            assuming that visible security means all risk has disappeared.
          </p>

          <p>
            Political demonstrations can also happen, particularly in major
            cities. Most visitors will never become involved in these events,
            but official advice recommends avoiding demonstrations and large
            political gatherings because conditions can sometimes change
            quickly.
          </p>

          <p>
            For ordinary sightseeing in{" "}
            <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>,{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, or{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, travelers can
            reduce problems by following local rules, respecting cultural
            customs, keeping important belongings secure, and following
            instructions from authorities when necessary.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            Security does not mean zero risk
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Visible police, security staff, or hotel guards can help reduce
            some risks, but travelers should still pay attention to official
            advice, local developments, personal belongings, transportation,
            and their surroundings.
          </p>
        </div>
      </div>

      {/* =====================================================
          WHY MILLIONS VISIT MOROCCO
      ===================================================== */}

      <div>
        <h3
          id="why-millions-of-tourists-visit-morocco-every-year"
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Why Millions of Tourists Visit Morocco Every Year
        </h3>

        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>
            Morocco receives millions of visitors each year. According to
            Morocco&apos;s Ministry of Tourism, the country recorded{" "}
            <strong className="font-bold">
              19.8 million tourist arrivals in 2025
            </strong>
            , an increase of 14% compared with 2024. This was the highest
            annual total reported by the ministry at that time.
          </p>

          <p>
            Tourism is attractive because Morocco offers very different
            experiences within one country. A traveler can explore centuries
            of history in{" "}
            <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, experience the
            souks and monuments of{" "}
            <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, walk
            through the blue streets of{" "}
            <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>,
            spend time beside the Atlantic in{" "}
            <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, and
            then travel into very different desert landscapes near{" "}
            <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.
          </p>

          <p>
            The Sahara experience is one of the strongest reasons many
            international visitors add southern Morocco to their itinerary.
            Around{" "}
            <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>,
            visitors can see large sand dunes, take organized camel rides,
            travel by 4x4, experience local music, and spend a night at a
            desert camp.
          </p>

          <p>
            Morocco also attracts travelers because of its geographic
            variety. The{" "}
            <PlaceHoverCard place="high-atlas-mountains">
              High Atlas Mountains
            </PlaceHoverCard>{" "}
            offer hiking and mountain landscapes, while destinations such as{" "}
            <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
            and{" "}
            <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>{" "}
            are popular stops on road trips between Marrakech and the desert.
          </p>

          <p>
            Food, architecture, craftsmanship, music, history, and hospitality
            are equally important parts of the experience. Travelers can stay
            in traditional riads, visit historic medinas, try Moroccan dishes,
            explore local markets, and learn about Amazigh, Arab, African,
            Mediterranean, and other influences that form part of Morocco&apos;s
            cultural history.
          </p>

          <p>
            High visitor numbers should not be treated as proof that a
            destination has no safety risks. However, they do show that
            Morocco has a large, active tourism sector with accommodation,
            transportation, guides, attractions, and organized experiences
            serving international visitors.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-amber-700">19.8M</p>
            <p className="mt-2 font-bold text-slate-900">
              Tourist arrivals
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recorded by Morocco in 2025.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-amber-700">+14%</p>
            <p className="mt-2 font-bold text-slate-900">
              Annual growth
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Increase in arrivals compared with 2024.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-amber-700">43.4M</p>
            <p className="mt-2 font-bold text-slate-900">
              Overnight stays
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recorded in classified tourist accommodation in 2025.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-amber-700">2026</p>
            <p className="mt-2 font-bold text-slate-900">
              Check before traveling
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Always review the newest advisory before your departure.
            </p>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <h4 className="text-lg font-bold text-slate-900">
            What does this mean for a traveler?
          </h4>

          <p className="mt-3 leading-7 text-slate-700">
            Morocco has a large and established tourism sector, but your own
            travel decision should still be based on your itinerary, personal
            circumstances, planned activities, and the latest official
            information available when you travel.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://travel.state.gov/en/international-travel/travel-advisories/morocco.html"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            U.S. Morocco Travel Advisory
          </a>

          <a
            href="https://www.gov.uk/foreign-travel-advice/morocco"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100"
          >
            UK Morocco Travel Advice
          </a>
        </div>
      </div>
    </section>
  );
}
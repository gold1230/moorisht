import PlaceHoverCard from "@/Compentents/placeCard";

const facts = [
  {
    label: "Best northern gateway",
    value: "Tangier",
  },
  {
    label: "Best mountain atmosphere",
    value: "Chefchaouen",
  },
  {
    label: "Best relaxed Atlantic stop",
    value: "Essaouira",
  },
  {
    label: "Good combined route",
    value: "Tangier → Chefchaouen → Rabat → Casablanca",
  },
];

export default function AtlanticNorthernGuide() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">

        <article>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Atlantic & Northern Morocco Guide
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Where to Go in Atlantic & Northern Morocco
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-[#faf7f2]" />
            <span className="h-0.5 w-8 bg-amber-700" />
          </div>

          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">
            <p>
              <PlaceHoverCard place="tangier">
                Tangier
              </PlaceHoverCard>{" "}
              is one of the main gateways to Northern Morocco. Its location
              near the Strait of Gibraltar gives the city a different feeling
              from inland Morocco, and it connects easily with{" "}
              <PlaceHoverCard place="asilah">
                Asilah
              </PlaceHoverCard>
              ,{" "}
              <PlaceHoverCard place="tetouan">
                Tetouan
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>
              .
            </p>

            <p>
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              is known for its blue-painted streets and mountain setting, while{" "}
              <PlaceHoverCard place="asilah">
                Asilah
              </PlaceHoverCard>{" "}
              offers a smaller white-and-blue coastal medina. These northern
              stops work well for travelers who want a slower route with strong
              visual character and less driving than a Sahara itinerary.
            </p>

            <p>
              Moving south along Morocco&apos;s Atlantic side,{" "}
              <PlaceHoverCard place="rabat">
                Rabat
              </PlaceHoverCard>{" "}
              combines royal heritage, historic sites and ocean views.{" "}
              <PlaceHoverCard place="casablanca">
                Casablanca
              </PlaceHoverCard>{" "}
              is Morocco&apos;s largest city and a major transport hub, making it
              a practical stop for international arrivals and departures.
            </p>

            <p>
              Farther south,{" "}
              <PlaceHoverCard place="essaouira">
                Essaouira
              </PlaceHoverCard>{" "}
              is one of Morocco&apos;s most relaxed Atlantic destinations, while{" "}
              <PlaceHoverCard place="agadir">
                Agadir
              </PlaceHoverCard>{" "}
              is better known for beaches, resorts and a modern coastal
              atmosphere. Both can be combined with{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              on a wider Morocco itinerary.
            </p>
          </div>
        </article>

        <aside className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Atlantic & North Quick Guide
          </h3>

          <dl className="mt-5 divide-y divide-amber-100">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="py-4 first:pt-0 last:pb-0"
              >
                <dt className="text-sm font-semibold text-gray-500">
                  {fact.label}
                </dt>

                <dd className="mt-1 text-base font-bold text-slate-900">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>

      </div>
    </section>
  );
}

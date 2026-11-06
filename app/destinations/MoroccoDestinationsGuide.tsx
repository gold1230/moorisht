import PlaceHoverCard from "@/Compentents/placeCard";

const facts = [
  {
    label: "Best for first-time visitors",
    value: "Marrakech, Fes, Chefchaouen and Essaouira",
  },
  {
    label: "Best desert gateway",
    value: "Merzouga and the Erg Chebbi dunes",
  },
  {
    label: "Best scenic road trips",
    value: "Atlas Mountains, Dades Valley and Todra Gorge",
  },
  {
    label: "Best coastal atmosphere",
    value: "Essaouira, Agadir, Asilah and Tangier",
  },
];

export default function MoroccoDestinationsGuide() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <article>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Morocco Destination Guide
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Where Should You Go in Morocco?
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-[#faf7f2]" />
            <span className="h-0.5 w-8 bg-amber-700" />
          </div>

          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">
            <p>
              For a first trip, <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>{" "}
              is a popular starting point because it combines historic streets,
              gardens, markets and easy access to the{" "}
              <PlaceHoverCard place="high-atlas-mountains">Atlas Mountains</PlaceHoverCard>.
              Travelers who want a deeper historic atmosphere can continue to{" "}
              <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, while{" "}
              <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>{" "}
              offers a slower mountain setting and famous blue streets.
            </p>

            <p>
              For desert landscapes, <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>{" "}
              is one of Morocco&apos;s best-known Sahara gateways. It sits beside
              the <PlaceHoverCard place="erg-chebbi">Erg Chebbi dunes</PlaceHoverCard>,
              where many itineraries include camel trekking, sunset views and
              an overnight desert camp.
            </p>

            <p>
              Southern road trips can connect{" "}
              <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>,{" "}
              <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>{" "}
              and <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>.
              These destinations work especially well for travelers who enjoy
              mountain roads, kasbahs, valleys and changing scenery.
            </p>

            <p>
              If you prefer the coast, <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>{" "}
              offers a relaxed Atlantic atmosphere, while{" "}
              <PlaceHoverCard place="tangier">Tangier</PlaceHoverCard>{" "}
              connects northern Morocco with the Strait of Gibraltar and routes
              toward Chefchaouen and Fes.
            </p>
          </div>
        </article>

        <aside className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Morocco Destination Quick Guide
          </h3>

          <dl className="mt-5 divide-y divide-amber-100">
            {facts.map((fact) => (
              <div key={fact.label} className="py-4 first:pt-0 last:pb-0">
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

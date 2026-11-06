import PlaceHoverCard from "@/Compentents/placeCard";

const facts = [
  {
    label: "Good trip length",
    value: "7 to 12 days for a relaxed first family trip",
  },
  {
    label: "Popular family stops",
    value: "Marrakech, Fes, Chefchaouen, Atlas Mountains and Merzouga",
  },
  {
    label: "Best tour style",
    value: "Private vehicle with flexible stops",
  },
  {
    label: "Good balance",
    value: "Cities + culture + nature + desert experiences",
  },
];

export default function FamilyTravelGuide() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">

        <article>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Morocco With Kids
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            What Is a Morocco Family Tour Like?
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
            <span className="h-0.5 w-8 bg-amber-700" />
          </div>

          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">

            <p>
              A good <strong>Morocco family tour</strong> combines interesting
              places with enough time to rest. Families can explore the markets
              and gardens of{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>
              , discover the old medina of{" "}
              <PlaceHoverCard place="fes">
                Fes
              </PlaceHoverCard>
              , walk through the blue streets of{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              and enjoy the changing scenery of the{" "}
              <PlaceHoverCard place="high-atlas-mountains">
                Atlas Mountains
              </PlaceHoverCard>
              .
            </p>

            <p>
              Families who want a bigger adventure can continue to{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>{" "}
              and the{" "}
              <PlaceHoverCard place="erg-chebbi">
                Sahara Desert
              </PlaceHoverCard>
              . A desert experience can include the{" "}
              <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi dunes
              </PlaceHoverCard>
              , sunset views, a short camel ride and an overnight camp. The
              exact plan should be adapted to the children&apos;s ages and
              comfort.
            </p>

            <p>
              Private transport is especially useful for a{" "}
              <strong>family trip to Morocco</strong> because parents can ask
              for extra stops, adjust departure times and avoid making every
              day feel rushed.
            </p>

          </div>
        </article>

        <aside className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-6">
          <h3 className="text-xl font-bold text-slate-900">
            Family Tour Quick Guide
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

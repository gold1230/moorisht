import PlaceHoverCard from "@/Compentents/placeCard";

const facts = [
  {
    label: "Easy day trip from Marrakech",
    value: "Ourika Valley",
  },
  {
    label: "Classic scenic road trip",
    value: "High Atlas → Ait Ben Haddou → Dades Valley",
  },
  {
    label: "Famous canyon",
    value: "Todra Gorge",
  },
  {
    label: "Good for desert routes",
    value: "Dades Valley, Todra Gorge and Draa Valley",
  },
];

export default function AtlasMountainsGuide() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">

        <article>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Atlas Mountains Guide
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Exploring Morocco&apos;s Atlas Mountains and Valleys
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-[#faf7f2]" />
            <span className="h-0.5 w-8 bg-amber-700" />
          </div>

          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">
            <p>
              The{" "}
              <PlaceHoverCard place="high-atlas-mountains">
                High Atlas Mountains
              </PlaceHoverCard>{" "}
              create some of Morocco&apos;s most dramatic scenery and connect
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              with the south. Mountain roads rise through villages and high
              passes before descending toward historic kasbah regions and
              desert valleys.
            </p>

            <p>
              For an easy escape from Marrakech,{" "}
              <PlaceHoverCard place="ourika-valley">
                Ourika Valley
              </PlaceHoverCard>{" "}
              is one of the most popular choices. Travelers looking for a
              longer road trip can cross the Atlas toward{" "}
              <PlaceHoverCard place="ait-ben-haddou">
                Ait Ben Haddou
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="ouarzazate">
                Ouarzazate
              </PlaceHoverCard>{" "}
              before continuing deeper into southern Morocco.
            </p>

            <p>
              <PlaceHoverCard place="dades-valley">
                Dades Valley
              </PlaceHoverCard>{" "}
              is known for winding roads, unusual rock formations, kasbahs and
              broad mountain scenery. Nearby,{" "}
              <PlaceHoverCard place="todra-gorge">
                Todra Gorge
              </PlaceHoverCard>{" "}
              is famous for steep canyon walls and a narrow valley floor that
              makes it one of the most recognizable natural stops in southern
              Morocco.
            </p>

            <p>
              Farther south,{" "}
              <PlaceHoverCard place="draa-valley">
                Draa Valley
              </PlaceHoverCard>{" "}
              is known for palm oases and long desert-road scenery, while{" "}
              <PlaceHoverCard place="rose-valley">
                Rose Valley
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="skoura">
                Skoura
              </PlaceHoverCard>{" "}
              add gardens, kasbahs and quieter stops to routes between the
              mountains and the Sahara.
            </p>
          </div>
        </article>

        <aside className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Atlas & Valleys Quick Guide
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

import PlaceHoverCard from "@/Compentents/placeCard";

const quickFacts = [
  {
    label: "Currency",
    value: "Moroccan dirham (MAD)",
  },
  {
    label: "Useful languages",
    value: "Arabic, Amazigh and French are widely used",
  },
  {
    label: "Popular first-trip length",
    value: "About 7 to 12 days for a multi-region itinerary",
  },
  {
    label: "Classic route mix",
    value: "Cities + Atlas Mountains + Sahara Desert",
  },
];

export default function MoroccoTravelTipsGuide() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">

        {/* Main content */}
        <article>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            First-Time Visitor Guide
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Things to Know Before Visiting Morocco
          </h2>

          {/* Decorative line */}
          <div className="mt-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-700" />

            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />

            <span className="h-0.5 w-8 bg-amber-700" />
          </div>

          {/* Travel guide content */}
          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">

            <p>
              Morocco changes quickly from one region to another. A day in{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              can feel very different from a night in the{" "}
              <PlaceHoverCard place="high-atlas-mountains">
                Atlas Mountains
              </PlaceHoverCard>{" "}
              or the{" "}
              <PlaceHoverCard place="erg-chebbi">
                Sahara Desert
              </PlaceHoverCard>
              . Pack layers and check the weather for the actual places on
              your itinerary instead of relying on one temperature for the
              whole country.
            </p>

            <p>
              In medinas such as{" "}
              <PlaceHoverCard place="fes">
                Fes
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>
              , comfortable shoes are useful because many streets are narrow
              and explored on foot. Keep some cash for small purchases and
              local markets, even if you also plan to use a card at hotels
              and larger businesses.
            </p>

            <p>
              If your itinerary includes{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>
              , give the journey enough time. The Sahara is far from
              Morocco&apos;s major Atlantic and imperial cities, so a slower
              route usually creates a more enjoyable trip than trying to fit
              too much into a few days.
            </p>

          </div>
        </article>

        {/* Quick facts */}
        <aside className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-6">
          <h3 className="text-xl font-bold text-slate-900">
            Morocco Travel Quick Facts
          </h3>

          <dl className="mt-5 divide-y divide-amber-100">
            {quickFacts.map((fact) => (
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
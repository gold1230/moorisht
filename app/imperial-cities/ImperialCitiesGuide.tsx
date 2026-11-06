import PlaceHoverCard from "@/Compentents/placeCard";

const facts = [
  {
    label: "Four Imperial Cities",
    value: "Fes, Marrakech, Meknes and Rabat",
  },
  {
    label: "Good itinerary length",
    value: "Around 6 to 10 days",
  },
  {
    label: "Best for history",
    value: "Fes and Meknes",
  },
  {
    label: "Best for first-time visitors",
    value: "Marrakech and Fes",
  },
];

export default function ImperialCitiesGuide() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">

        <article>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Imperial Cities Guide
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Why Are They Called the Imperial Cities of Morocco?
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-[#faf7f2]" />
            <span className="h-0.5 w-8 bg-amber-700" />
          </div>

          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">
            <p>
              Morocco&apos;s Imperial Cities are{" "}
              <PlaceHoverCard place="fes">
                Fes
              </PlaceHoverCard>
              ,{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>
              ,{" "}
              <PlaceHoverCard place="meknes">
                Meknes
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="rabat">
                Rabat
              </PlaceHoverCard>
              . Each city served as a royal capital during an important period
              of Moroccan history, which is why they contain major palaces,
              gates, medinas and religious or administrative monuments.
            </p>

            <p>
              <PlaceHoverCard place="fes">
                Fes
              </PlaceHoverCard>{" "}
              is especially known for its historic medina, traditional crafts
              and long cultural history.{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              combines royal heritage with busy souks, gardens and some of
              Morocco&apos;s most famous landmarks.
            </p>

            <p>
              <PlaceHoverCard place="meknes">
                Meknes
              </PlaceHoverCard>{" "}
              is often quieter than Fes or Marrakech, making it a good stop for
              travelers who want monumental gates and imperial architecture
              without the same level of crowds.{" "}
              <PlaceHoverCard place="rabat">
                Rabat
              </PlaceHoverCard>
              , Morocco&apos;s modern capital, combines historic sites with broad
              avenues, Atlantic views and a more relaxed urban rhythm.
            </p>

            <p>
              An Imperial Cities itinerary can also connect naturally with{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              in the north or continue south toward the{" "}
              <PlaceHoverCard place="high-atlas-mountains">
                Atlas Mountains
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>{" "}
              for travelers who want to combine culture with the Sahara Desert.
            </p>
          </div>
        </article>

        <aside className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Imperial Cities Quick Guide
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

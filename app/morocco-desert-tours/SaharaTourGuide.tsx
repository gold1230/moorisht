import Link from "next/link";

const facts = [
  { label: "Main desert destination", value: "Merzouga and Erg Chebbi" },
  { label: "Common tour length", value: "3 days or more" },
  { label: "Popular starting cities", value: "Marrakech, Fes, Casablanca and Tangier" },
  { label: "Typical experiences", value: "Camel trekking, sunset, sunrise and desert camp" },
];

export default function SaharaTourGuide() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <article>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Sahara Desert Tour Guide
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Where Do Morocco Sahara Desert Tours Go?
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">
            <p>
              Many Morocco Sahara Desert tours travel to <strong>Merzouga</strong>,
              a small desert settlement beside the <strong>Erg Chebbi dunes</strong>.
              The area is a popular base for camel trekking, dune sunsets,
              sunrise views and overnight desert camps.
            </p>

            <p>
              From <strong>Marrakech</strong>, desert routes often cross the High
              Atlas Mountains and continue through Ait Ben Haddou, Ouarzazate,
              Dades Valley and Todra Gorge. From <strong>Fes</strong>, routes
              commonly pass through the Middle Atlas, Ifrane, Midelt and the
              Ziz Valley before reaching Merzouga.
            </p>

            <p>
              Longer itineraries can connect the Sahara with Casablanca,
              Rabat, Chefchaouen, Tangier and Marrakech, making the desert part
              of a wider Morocco tour.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/locations/merzouga" className="font-semibold text-amber-700 hover:text-amber-800">
              Explore Merzouga →
            </Link>
            <Link href="/locations/dades-valley" className="font-semibold text-amber-700 hover:text-amber-800">
              Explore Dades Valley →
            </Link>
            <Link href="/locations/ait-ben-haddou" className="font-semibold text-amber-700 hover:text-amber-800">
              Explore Ait Ben Haddou →
            </Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-6">
          <h3 className="text-xl font-bold text-slate-900">Sahara Tour Quick Facts</h3>
          <dl className="mt-5 divide-y divide-amber-100">
            {facts.map((fact) => (
              <div key={fact.label} className="py-4 first:pt-0 last:pb-0">
                <dt className="text-sm font-semibold text-gray-500">{fact.label}</dt>
                <dd className="mt-1 text-base font-bold text-slate-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

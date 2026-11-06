import type { LocationPageData } from "@/lib/locationPageTypes";
import RichLocationText from "./RichLocationText";

type Props = {
  location: LocationPageData;
};

export default function LocationOverview({ location }: Props) {
  return (
    <section id="location-guide" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <article>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              {location.name} Travel Guide
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {location.overviewTitle}
            </h2>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-amber-700" />
              <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
              <span className="h-0.5 w-8 bg-amber-700" />
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              {location.overviewParagraphs.map((paragraph, index) => (
                <p key={index}>
                  <RichLocationText text={paragraph} />
                </p>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-[24px] border border-amber-100 bg-[#fffaf3] p-6 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
              Quick Information
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {location.name} at a Glance
            </h3>

            <dl className="mt-5 divide-y divide-amber-100">
              {location.quickFacts.map((fact) => (
                <div key={fact.label} className="py-4 first:pt-0 last:pb-0">
                  <dt className="text-sm font-semibold text-slate-500">
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
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import places from "@/data/places.json";
import tours from "@/data/tours.json";
import { editorialConnections } from "./editorialConnections";

const travelTheme = {
  tint: "text-amber-800",
  focus: "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700",
};

export function EditorialDestinationCards({ slug }: { slug: string }) {
  const selection = editorialConnections[slug]?.destinations ?? [];
  const entries = selection
    .map((key) => {
      const item = places[key as keyof typeof places];
      return item ? { key, ...item } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 4);
  if (!entries.length) return null;

  return (
    <section id="places-in-this-guide" className="scroll-mt-32" aria-labelledby="places-in-guide-heading">
      <div className="mb-5">
        <p className={`text-xs font-extrabold uppercase tracking-[0.12em] ${travelTheme.tint}`}>Explore the places</p>
        <h2 id="places-in-guide-heading" className="mt-2 font-serif text-2xl font-bold text-[#13294b] sm:text-3xl">Places mentioned in this guide</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">Hover over a highlighted place name in the article to preview it, or select a destination card to read the full local guide.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {entries.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            aria-label={`Discover ${item.title} — destination guide`}
            className={`group relative isolate flex min-h-52 items-end overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${travelTheme.focus}`}
          >
            <Image
              src={item.image}
              alt={`Explore ${item.title}, Morocco`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 350px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/25 to-transparent" aria-hidden="true" />
            <div className="relative z-10 w-full p-5 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-200">Destination guide</span>
              <h3 className="mt-1 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-100">{item.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-amber-200 transition group-hover:translate-x-1">Explore this place <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function EditorialRelatedTours({ slug }: { slug: string }) {
  const tourSlugs = editorialConnections[slug]?.tours ?? [];
  const selection = tourSlugs
    .map((slug) => tours.find((entry) => entry.slug === slug))
    .filter((entry): entry is (typeof tours)[number] => Boolean(entry));
  if (!selection.length) return null;

  return (
    <section id="related-morocco-tours" className="scroll-mt-32" aria-labelledby="related-morocco-tours-heading">
      <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-amber-800">See Morocco for yourself</p>
      <h2 id="related-morocco-tours-heading" className="mt-2 font-serif text-2xl font-bold text-[#13294b] sm:text-3xl">Tours related to this guide</h2>
      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-700">Prefer a planned route? These existing Moorish Tour itineraries visit some of the places described above.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {selection.map((tour) => (
          <Link key={tour.slug} href={`/${tour.slug}/`} className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg ${travelTheme.focus}`}>
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image src={tour.image} alt={tour.alt || tour.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 260px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <span className="text-xs font-bold uppercase tracking-wide text-amber-800">{tour.duration}</span>
              <h3 className="mt-2 text-base font-bold leading-6 text-slate-900 group-hover:text-amber-800">{tour.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-700">{tour.description}</p>
              <span className="mt-auto pt-4 text-sm font-bold text-amber-800">View day-by-day itinerary <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Small, contextual next-read links keep visitors moving through related guides. */
export function EditorialRelatedReading({ slug }: { slug: string }) {
  const guides = editorialConnections[slug]?.guides ?? [];
  if (!guides.length) return null;
  return (
    <aside aria-label="Related travel advice" className="rounded-xl border-l-4 border-amber-700 bg-[#fff6e9] p-5 sm:p-6">
      <h3 className="font-serif text-lg font-bold text-[#13294b]">Useful guides for planning your next stop</h3>
      <p className="mt-1 text-sm leading-6 text-slate-700">These guides answer practical questions that often come up while exploring this topic.</p>
      <div className="mt-3 flex flex-col items-start gap-2">
        {guides.map((guide) => {
          const titles: Record<string, string> = {
            "morocco-with-kids-family-travel-guide": "Morocco with children: family travel tips",
            "moroccan-food-what-to-eat-travel-guide": "Moroccan food and local dining guide",
            "morocco-in-winter-weather-packing-guide": "What to pack for Morocco in winter",
            "marrakech-souks-shopping-guide": "Shopping in Marrakech souks",
            "getting-around-morocco-transport-guide": "Getting around Morocco by train, taxi or driver",
            "morocco-in-summer-where-to-go-guide": "Where to go in Morocco during summer",
          };
          return <Link key={guide} href={`/${guide}/`} className="text-sm font-semibold leading-6 text-amber-900 underline decoration-amber-700/60 underline-offset-4 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700">
            {titles[guide] || guide.replaceAll("-", " ")} <span aria-hidden="true">↗</span>
          </Link>;
        })}
      </div>
    </aside>
  );
}

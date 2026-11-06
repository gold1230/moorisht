import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";
import featured from "@/data/popular-tour-index.json";
import places from "@/data/places.json";
import type { PlaceName } from "@/Compentents/placeCard";
import PlaceHoverCard from "@/Compentents/placeCard";

const startCityPlace: Record<string, PlaceName> = {
  Marrakech: "marrakech", Casablanca: "casablanca", Fes: "fes",
  Fez: "fes", Tangier: "tangier", Erfoud: "erfoud", Errachidia: "errachidia",
};

/** Styled exactly like the original popular tour cards with the older destination hover previews. */
export default function PopularTourCollection() {
  return (
    <section id="new-morocco-tours" className="bg-white py-14 sm:py-16" aria-labelledby="new-morocco-tour-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">More places to discover</p>
        <h2 id="new-morocco-tour-title" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">20 More Morocco Tours &amp; Desert Experiences</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">Discover private Morocco itineraries, Sahara adventures and day trips from Marrakech, Casablanca, Fes, Tangier and Erfoud. Prices are estimates until confirmed with our team.</p>
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((tour) => {
            const city = startCityPlace[tour.start];
            return (
              <article key={tour.slug} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl">
                <Link href={`/tour/${tour.slug}/`} className="relative block aspect-4/3 overflow-hidden" aria-label={`Explore ${tour.title}`}>
                  <Image src={tour.image} alt={tour.imageAlt} fill loading="lazy" quality={55} sizes="(max-width:640px) calc(100vw - 40px), (max-width:1280px) 45vw, 300px" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/45 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-md bg-amber-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm">Morocco Tour</span>
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur"><ClockIcon aria-hidden="true" className="h-4 w-4 text-amber-700" />{tour.duration}</span>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-amber-700">
                    <MapPinIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
                    {city && places[city] ? <PlaceHoverCard place={city}>{tour.start}</PlaceHoverCard> : <span>{tour.start}</span>}
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-7 text-slate-900"><Link href={`/tour/${tour.slug}/`} className="transition hover:text-amber-700">{tour.title}</Link></h3>
                  <p className="mt-3 line-clamp-3 text-base leading-6 text-gray-600">{tour.subtitle}</p>
                  <div className="flex-1" />
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                    <p className="text-sm text-slate-700">Suggested from <span className="font-bold text-amber-800">€{tour.suggestedPriceEUR}</span> <span className="text-xs">/ person</span></p>
                    <Link href={`/tour/${tour.slug}/`} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700 text-white transition hover:bg-amber-800" aria-label={`View ${tour.title}`}><ArrowRightIcon aria-hidden="true" className="h-4 w-4" /></Link>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Final rate and availability are confirmed on enquiry.</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

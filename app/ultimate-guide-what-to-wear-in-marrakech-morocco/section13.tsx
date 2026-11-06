import { ArticleSection, TravelNote, GuideTable } from "./ArticleElements";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section13() {
 return (
  <ArticleSection id="what-to-wear-on-a-marrakech-to-merzouga-desert-tour" label="Moorish Tour Trip Planning" title="What to Wear on a Marrakech to Merzouga Desert Tour">
  <p className="mt-5 text-lg leading-8 text-gray-700">A multi-day Sahara tour from Marrakech is one of the best ways to see how varied Morocco really is. The route can pass the High Atlas Mountains, traditional villages, Ait Ben Haddou, valleys around Dades and Todra Gorge, and finally the dunes of Erg Chebbi near Merzouga. You may start your morning in a cool mountain area and finish the day in dry desert air. A small selection of layers is more useful than wearing the same thick outfit all the way through the journey.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">On the first driving day, choose relaxed trousers, a breathable top and comfortable shoes. A light jacket or overshirt will help at scenic mountain stops. On the second day, if you arrive at Merzouga near sunset, change into trousers that are comfortable for a camel ride and take sunglasses, a scarf and a secure bag. For the camp evening, add your fleece or sweater. On the return day, dress for a long road journey with a few breaks rather than wearing clothing that is only suitable for photos.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">Moorish Tour helps travelers plan routes from Marrakech, Fes, Erfoud and other Moroccan destinations. If you are choosing between a private driver, a shared departure or a desert camp option, discuss the season and activities before deciding what to pack. The ideal clothing for a December desert camp will be quite different from the clothing for a July city tour.</p>
  <GuideTable headings={["Tour day", "Main activity", "What to wear"]} rows={[["Day 1", "Atlas crossing and kasbah stops", "Layers + good walking shoes"], ["Day 2", "Todra / Merzouga, camel ride and camp", "Long trousers + sun protection + warm evening layer"], ["Day 3", "Sunrise and long transfer", "Comfortable travel clothes + jacket in cooler months"]]} />
  <h3 id="what-to-wear-on-a-marrakech-to-merzouga-desert-tour-a-simple-three-day-clothing-plan" className="mt-10 scroll-mt-28 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">A Simple Three-Day Clothing Plan</h3>
  <p className="mt-5 text-lg leading-8 text-gray-700">Day 1: breathable everyday outfit, walking shoes and light mountain layer. Day 2: comfortable long trousers, shirt, scarf and secure shoes for the dunes, followed by warm camp clothing. Day 3: practical road-trip clothes with an optional extra top and socks for the drive back.</p>
  <TravelNote title="A practical travel tip"><p>The three-day Marrakech–Merzouga–Marrakech route includes long drives. Pack comfortable road clothes and remember that the journey is part of the experience, not only the night in the dunes.</p></TravelNote>
  <p className="mt-6 text-base leading-8 text-slate-700">Explore the route from <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> through the <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard> to <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>.</p>
  <div className="mt-7 flex flex-wrap gap-3">
    <Link href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Marrakech to Merzouga three-day tour →</Link>
    <Link href="/all-morocco-tours-packages/" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Explore all Morocco tour packages →</Link>
    <Link href="/plan-your-morocco-tour" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Plan your trip with Moorish Tour →</Link>
  </div>
</ArticleSection>
 );
}

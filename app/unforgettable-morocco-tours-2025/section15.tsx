import { ArticleSection, ArticleNote, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section15(){
return <ArticleSection id="three-day-morocco-tour" label="SHORT HOLIDAYS" title="Three-Day Morocco Tours: What Can You Really See?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Three days can be wonderful if you plan around one main goal. A city-based itinerary is ideal for short flights and relaxed sightseeing. A desert-focused route can also work, but it usually includes long days on the road. Being clear about that trade-off will help you enjoy the tour rather than feel surprised by the schedule.</p>
<ArticleTable headings={tables.shortTours.headings} rows={tables.shortTours.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">One classic option is the <Link href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">3-day Marrakech to Merzouga tour</Link>. It crosses the High Atlas, includes southern valleys and reaches the dunes for an overnight camp stay. The return drive is long, so it suits travelers who are comfortable spending a good part of the trip in the vehicle.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Starting from Fes is another choice. The <Link href="/tour/3-days-from-fes-to-merzouga-desert/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">3-day Fes to Merzouga tour via Erfoud</Link> follows a different route through the Middle Atlas and desert-edge landscapes. If your goal is mainly the dunes rather than a country-wide drive, our <Link href="/tour/3-days-from-errachidia-to-merzouga/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Errachidia to Merzouga option</Link> can reduce travel time if you can arrive near the desert.</p>
<ArticleNote title="Short-tour reality check"><p>A three-day desert tour does not mean three full days beside the dunes. Road transfers are a major part of the experience. Ask for pickup times, likely arrival at camp and the return schedule before booking.</p></ArticleNote>
</ArticleSection>;
}

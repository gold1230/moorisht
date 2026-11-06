import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section15(){
return <ArticleSection id="three-day-casablanca-itinerary" label="SAMPLE CITY PLAN" title="Three Days in Casablanca: A Relaxed Sample Itinerary">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Three days in Casablanca give you time for the city&apos;s main sights and a nearby excursion. This plan suits travelers who want culture without rushing immediately to the Sahara. It is also practical if you are visiting friends or arranging a short stay before a longer tour.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><strong className="font-semibold text-slate-900">Day 1 – Arrival and the Atlantic coast.</strong> Settle into your hotel, enjoy a short stroll if your flight arrives early enough, and choose a relaxed dinner near your accommodation. Avoid booking a long guided visit on the day you land if you are arriving from far away.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><strong className="font-semibold text-slate-900">Day 2 – Casablanca highlights.</strong> Visit Hassan II Mosque when an appropriate guided session is available. Continue to the Habous Quarter and allow time for lunch. If you enjoy architecture, add an Art Deco neighborhood or old medina walk. Finish with the Corniche and ocean air rather than squeezing in another distant stop.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><strong className="font-semibold text-slate-900">Day 3 – Rabat or an easy city day.</strong> Take an organized trip to Rabat for Hassan Tower and the Kasbah of the Udayas, or stay in Casablanca for museums, café time and a slower schedule. Both choices are useful; what matters is whether you prefer a second city or a deeper look at the first.</p>
<ArticleTable headings={tables.threeDayCity.headings} rows={tables.threeDayCity.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">For other short travel ideas, see <Link href="/3-days-in-morocco-tours-ideas-and-travel-tips/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">3 Days in Morocco: Tours, Ideas and Travel Tips</Link>. The best three-day route depends on your airport, flight schedule and whether this trip is focused on a city or the desert.</p>
</ArticleSection>;
}

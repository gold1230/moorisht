import { ArticleSection, ArticleTable } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import { tables } from "./tables";
import Link from "next/link";

export default function Section16(){
return <ArticleSection id="seven-day-tour-from-casablanca" label="ONE-WEEK TOUR" title="Seven Days from Casablanca: A Balanced City and Sahara Route">
<p className="mt-5 text-[17px] leading-8 text-slate-700">A week offers more variety than a city break, but choosing the route still matters. If you want the Sahara, a point-to-point journey generally feels better than trying to circle through every major city and return to the same hotel each night. One useful outline moves from Casablanca to Rabat and Fes, then south toward the dunes and west toward Marrakech.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The first day can be an arrival and short city introduction. On the next day, visit Rabat and continue toward Fes. Give the old medina a full guided day if you can, then travel through the Middle Atlas to the Ziz Valley and Merzouga. After a Sahara evening and morning, head toward southern valleys and eventually cross the High Atlas to Marrakech.</p>
<ArticleTable headings={tables.sevenDayRoute.headings} rows={tables.sevenDayRoute.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">This schedule is active. The road days are real, and you may want to skip one sightseeing stop to rest. If you have children, need a gentler pace or want two nights at the dunes, consider eight or ten days instead. If your flight departs Casablanca, add the necessary return journey to the plan.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For more detailed timing and travel ideas, compare the <Link href="/one-week-in-morocco-itinerary/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">one-week Morocco itinerary</Link> and <Link href="/tour/morocco-itinerary-7-days-from-marrakech/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">7-day tour from Marrakech</Link> to see how departure cities change the route.</p>
<ArticlePhoto name="road" />
</ArticleSection>;
}

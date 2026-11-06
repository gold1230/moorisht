import { ArticleSection, ArticleTable } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import { tables } from "./tables";
import Link from "next/link";

export default function Section16(){
return <ArticleSection id="seven-day-morocco-itinerary" label="ONE-WEEK HOLIDAY" title="Seven Days in Morocco: A Balanced Itinerary You Can Enjoy">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Seven days give you enough time to start feeling the variety of the country, especially if you choose a route that moves in one direction. A Marrakech-to-Fes itinerary can work well for travelers who enjoy scenic drives, historic places and one memorable Sahara night. It avoids trying to return to every city along the same route.</p>
<ArticleTable headings={tables.sevenDays.headings} rows={tables.sevenDays.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">On the first day, settle in after your flight. Spend the second day exploring Marrakech with a guide. Then cross the High Atlas for an overnight in southern Morocco. Continue through Todra Gorge toward the dunes, and give yourself time for a relaxed desert morning before heading north through the Ziz Valley and Middle Atlas. Finish with the history and food of Fes.</p>
<ArticlePhoto name="road" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">This is a planning example, not a fixed promise that every attraction fits every departure time. The itinerary works best with an open-jaw flight—arrive in Marrakech and depart from Fes, or the reverse. If you need a round trip from Marrakech, choose a slightly different route with an extra night for the drive.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">See our <Link href="/one-week-in-morocco-itinerary/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">one-week Morocco travel guide</Link> and <Link href="/tour/morocco-itinerary-7-days-from-marrakech/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">7-day Morocco package</Link> to compare the possible combinations before deciding.</p>
</ArticleSection>;
}

import { ArticleSection, ArticleTable } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import { tables } from "./tables";
import Link from "next/link";

export default function Section17(){
return <ArticleSection id="ten-day-morocco-itinerary" label="A LITTLE MORE TIME" title="Ten Days in Morocco: Cities, Desert and Mountain Scenery">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ten days create room for a more relaxed trip. You can include Casablanca or Rabat, enjoy Fes, travel to the Sahara, and finish with Marrakech without filling each day with too many stops. Another popular idea is to add the blue city in the north, although that increases the driving and should be planned carefully.</p>
<ArticleTable headings={tables.tenDays.headings} rows={tables.tenDays.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">The most important improvement over a short itinerary is that you can stay two nights in some places. Two nights in Fes give you a full guided medina day without arriving and leaving immediately. Two nights around the Sahara give you time for the camp sunset and another easy outing the following day.</p>
<ArticlePhoto name="group" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you prefer a comfortable pace, skip one destination rather than forcing every famous city into ten days. For example, a southern route can include extra time in Marrakech, while a north-to-south route may need fewer coastal stops. Your flight city also changes what is practical.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Our <Link href="/morocco-wonders-tour-the-ultimate-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco Wonders Tour</Link> and <Link href="/all-morocco-tours-packages/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">all tour packages</Link> provide ideas for different trip lengths and travel styles. Ask for a route map before confirming your booking.</p>
</ArticleSection>;
}

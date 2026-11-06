import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section18(){
return <ArticleSection id="fourteen-day-morocco-itinerary" label="SLOWER & DEEPER" title="Fourteen Days in Morocco: A Relaxed Grand Tour">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Two weeks can feel like a real journey rather than a fast sightseeing trip. With fourteen days, you have more freedom to combine imperial cities, the Rif or Middle Atlas, the Sahara, southern valleys and perhaps a few days near the ocean. You can also slow down in places that interest you most instead of moving every morning.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A practical route might start in Casablanca, visit Rabat and Chefchaouen, spend two nights in Fes, head through the Middle Atlas toward Merzouga, then continue across southern Morocco toward Marrakech. If time allows, finish with a coastal break in Essaouira. The direction may be reversed to match your flights.</p>
<ArticleTable headings={tables.tripDurations.headings} rows={tables.tripDurations.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">There is no prize for visiting the greatest number of places. A slower afternoon, local cooking experience, garden walk or village lunch may add more to the holiday than another long transfer. If you enjoy photography, allow extra mornings in places where the light makes a difference.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Moorish Tour can help organize a <Link href="/plan-your-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">custom Morocco itinerary</Link> with the comfort level, interests and rest stops that suit your group. The more clearly you explain your priorities, the easier it is to create a route you will actually enjoy.</p>
</ArticleSection>;
}

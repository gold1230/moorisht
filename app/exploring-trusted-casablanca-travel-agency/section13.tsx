import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section13(){
return <ArticleSection id="private-vs-small-group-casablanca-tours" label="COMPARE STYLES" title="Private Casablanca Tours vs Small Group Tours">
<p className="mt-5 text-[17px] leading-8 text-slate-700">There is no single best tour style for everyone. Private travel works well when you want freedom to stop, need a flexible pace or are traveling with family. A small-group tour can be more social and may share some transport costs. The right choice is the one that fits your comfort and the way you like to spend a holiday.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">In a private tour, the route may be adapted to your interests within the practical limits of driving, opening hours and hotel bookings. You can ask for more time in museums, fewer shopping stops or a more relaxed lunch. For travelers with children or older relatives, these small changes can make a significant difference.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">With a shared tour, you should ask how many participants are expected, which seats and vehicles are used and whether the itinerary is fixed. Also check whether &apos;small group&apos; refers to the entire journey or only a specific excursion. People sometimes assume that a quoted group price includes private experiences, then discover that transport or activities are shared.</p>
<ArticleTable headings={tables.privateGroup.headings} rows={tables.privateGroup.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">At Moorish Tour, you can use the <Link href="/all-morocco-tours-packages/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">tour packages page</Link> to explore options, then <Link href="/contact/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">contact the team</Link> for a clear quote. Do not assume that every itinerary is offered as both private and shared; ask about the exact departure and your dates.</p>
</ArticleSection>;
}

import Link from "next/link";
import { SectionFrame, CompareTable } from "./ArticleElements";
export default function Section35(){
return <SectionFrame id="morocco-tour-cost" label="BUDGET AND VALUE" title="How Much Does a Morocco Tour Cost?" index={35}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Tour prices depend on the route, number of travelers, hotels, vehicle, season, activities and the services included. A private tour with two travelers usually has a different per-person cost from a group of six. A low advertised price may exclude city guides, entrance tickets, lunches or the desert camp experience you imagined.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Instead of comparing only the headline amount, compare the full itinerary and a written list of inclusions. Look for the name or category of hotels, meal plan, camp type, guided visits, transfers and cancellation terms. If one package is considerably cheaper, ask what has been left out.</p>
<CompareTable headings={["Item", "Questions to ask", "Why it matters"]} rows={[["Transport", "Private vehicle? Driver? Fuel and parking?", "Long routes can add hidden costs"], ["Accommodation", "Which hotels and room types?", "Comfort varies greatly by property"], ["Food", "Breakfast, dinners, lunches?", "Desert packages may include different meals"], ["Experiences", "Camel ride, guide, tickets, workshop?", "Activities may be optional or extra"], ["Booking rules", "Deposit, cancellation, changes?", "Protects your budget if plans shift"]]}/>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Use our <Link href="/tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco tour packages page</Link> to compare route descriptions, then request a clear final quote for your dates and group size. Avoid relying on old fixed prices found in general blogs.</p>
</SectionFrame>;
}

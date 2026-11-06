import Link from "next/link";
import { SectionFrame, Timeline } from "./ArticleElements";
export default function Section19(){
return <SectionFrame id="tour-from-casablanca" label="STARTING POINT" title="Best Morocco Tour Routes Starting in Casablanca" index={19}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Casablanca works well for a longer tour because it can connect several regions in a sensible order. One common route begins with Rabat, continues to Chefchaouen or Meknes, reaches Fes and then travels south through the Middle Atlas to Merzouga. From the desert, it crosses the valleys and High Atlas before ending in Marrakech.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">This kind of journey needs time. A full north-to-south circuit is most pleasant with ten to fourteen days, especially if you want guided sightseeing and more than one evening in the major cities. Fewer days may mean cutting a destination rather than extending every driving day.</p>
<Timeline items={[["Arrival and coast", "Land in Casablanca, settle in and explore at a comfortable pace"], ["Imperial cities", "Rabat, historic northern stops and a guided day in Fes"], ["Desert approach", "Cross the Middle Atlas with sensible breaks on the way to Merzouga"], ["Southern valleys", "Travel through Todra, Dades and kasbah landscapes"], ["Finish in Marrakech", "Enjoy the medina and arrange your final airport transfer"]]}/>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For an example of a complete itinerary, see the <Link href="/tour/12-days-morocco-tour-from-casablanca-to-marrakech/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">12-day tour from Casablanca to Marrakech</Link>.</p>
</SectionFrame>;
}

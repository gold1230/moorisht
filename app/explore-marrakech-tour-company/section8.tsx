import Link from "next/link";
import { SectionFrame, CompareTable } from "./ArticleElements";
import { tables } from "./tables";

export default function Section8(){return <SectionFrame id="ourika-and-ouzoud-waterfall-day-trips" index={8} label="WATER AND VALLEYS" title="Ourika Valley and Ouzoud Waterfalls: Two Different Day Trips">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Not every nature excursion from Marrakech is the same. Ourika Valley is known for river scenery, mountain communities and restaurants near the water. It can be a nice choice when you want fresh air and a change of atmosphere without planning a long multi-day holiday. Any walking route toward cascades should be chosen according to your abilities and current local conditions.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ouzoud Waterfalls offer a different landscape: a larger waterfall area, paths with viewpoints and places to stop for a meal. This excursion generally involves more time on the road than some nearby valley visits. It suits travelers who are happy to spend a full day away from Marrakech and have comfortable walking shoes for steps and uneven ground.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">When choosing between them, think about the reason for your outing. Do you want a relaxed valley lunch and short walks, or are dramatic waterfalls the main goal? A local organizer can explain the actual travel time, walking conditions and available alternatives, helping you choose what you will enjoy most. If you have longer to explore, see our <Link href="/one-week-in-morocco-itinerary/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">one-week Morocco route guide</Link>.</p>
<CompareTable headings={tables.nature.headings} rows={tables.nature.rows}/>
</SectionFrame>;}

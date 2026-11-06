import Link from "next/link";
import { SectionFrame, Timeline } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section23(){
return <SectionFrame id="seven-day-south-tour" label="ONE-WEEK ROUTES" title="A Seven-Day Morocco Tour: Marrakech, Atlas and the Sahara" index={23}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A week gives you enough time to see big changes in landscape without attempting the entire country. For guests especially interested in the Sahara, a southern loop from Marrakech can be a rewarding choice. This sample plan includes a short desert stay and returns through the southern valleys; exact routing should be adjusted to season and hotel availability.</p>
<Timeline items={[["Day 1 — Marrakech arrival", "Transfer to your riad, relax and enjoy the city atmosphere"], ["Day 2 — Marrakech discovery", "Visit the old town with a guide and enjoy a traditional meal"], ["Day 3 — High Atlas to Dades", "Cross mountain landscapes with a stop at Ait Ben Haddou"], ["Day 4 — Dades and Todra to Merzouga", "Explore gorge scenery, arrive at the dunes and settle into a camp"], ["Day 5 — Merzouga area", "Take time for nearby communities, a gentle desert outing or rest"], ["Day 6 — Journey west", "Travel toward Ouarzazate or another suitable overnight stop to divide the return"], ["Day 7 — Return to Marrakech", "Cross the mountains and plan departure carefully, ideally with an extra night if the flight is early"]]}/>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A week can also focus on the north instead. The important rule is to leave enough time for the places that matter most. Read our <Link href="/one-week-in-morocco-itinerary/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">one-week in Morocco guide</Link> for more ideas.</p>
<ArticlePhoto name="sahara"/>
</SectionFrame>;
}

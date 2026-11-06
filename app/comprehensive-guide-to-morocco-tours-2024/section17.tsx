import Link from "next/link";
import { SectionFrame, FeatureCards } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section17(){
return <SectionFrame id="morocco-tours-from-spain" label="FERRIES AND SHORT FLIGHTS" title="Morocco Tours from Spain: Ferry or Flight?" index={17}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Spain is close enough for both short city breaks and longer tours. From southern Spain, ferries provide a popular approach to northern Morocco, while flights from Spanish airports can bring travelers to Marrakech, Casablanca, Tangier and other destinations depending on schedules.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you plan to arrive through Tangier, look carefully at the exact port. Ferry routes and timetables change, and the transfer from Tangier Med is different from an arrival in central Tangier. A three- or four-day trip is usually better focused on the north or Marrakech than on trying to reach Merzouga and return immediately.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Spanish travelers should confirm current passport and visa rules for their nationality; <strong className="font-extrabold text-[#102043]">do not assume a national identity card replaces a passport</strong> for entry. Our full <Link href="/morocco-tours-from-spain/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco tours from Spain article</Link> compares travel options and realistic routes across the Strait of Gibraltar.</p>
<ArticlePhoto name="crossing"/>
<FeatureCards items={[["Ferry to northern Morocco", "Good for a north-first route and a verified onward port transfer"], ["Flight to Marrakech", "Useful for a focused city break or southern itinerary"], ["Flight to Casablanca", "Suitable for longer circuits starting along the Atlantic"], ["Extra planning time", "Allow room for schedule changes and border procedures"]]}/>
</SectionFrame>;
}

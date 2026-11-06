import Link from "next/link";
import { SectionFrame, Timeline } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section22(){
return <SectionFrame id="three-day-short-tour" label="SHORT ESCAPES" title="A Realistic Three-Day Morocco City Break" index={22}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Three days is enough for a memorable introduction when you choose one base. Marrakech works well for a mixture of medina sights, local food and one nearby experience. Tangier or Fes can be equally rewarding if they match your arrival city. Spending three days racing between distant places is a different kind of holiday.</p>
<Timeline items={[["Day 1 — Arrive and settle in", "Check into your riad, take a short neighborhood walk and enjoy an unhurried dinner"], ["Day 2 — Discover the city", "Visit a few major sites, explore the market with a guide and leave a free afternoon"], ["Day 3 — Choose one final experience", "Enjoy a cooking class, garden or easy nearby visit, then transfer to the airport"]]}/>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If your flight leaves early, treat the third day as a departure rather than pretending it is another full sightseeing day. Travelers with more time can add a fourth night for a short excursion. See our <Link href="/3-days-in-morocco-tours-ideas-and-travel-tips/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">three-day Morocco trip ideas</Link> for different ways to use a limited holiday.</p>
<ArticlePhoto name="courtyard"/>
</SectionFrame>;
}

import { SectionFrame, Timeline } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section13(){
  return <SectionFrame id={"morocco-short-trip-from-spain"} label={"TWO OR THREE DAYS"} title={"Best 2–3 Day Morocco Tour from Spain"} index={13}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A short trip from Spain should be simple. Arrive in Tangier, explore its old town and waterfront, and add one carefully chosen nearby experience. With two days, you may prefer one night in Tangier and a relaxed second day. With three days, the blue streets of Chefchaouen become a more comfortable option, depending on your transport and departure times.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Avoid an itinerary that promises Tangier, Chefchaouen, Fes, Marrakech and Merzouga in a weekend. Those places are spread over a large country. You would spend most of your time on the road and very little time actually enjoying them.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are traveling with children, older relatives or a lot of luggage, consider a private arrival transfer and a hotel near your sightseeing area. The easiest itinerary is often the one you remember with the most affection because there was time to notice the details.</p>
<Timeline items={[["Day 1 — Cross to Tangier", "Allow time for arrival formalities, your transfer and an unhurried kasbah or medina walk."], ["Day 2 — North or city", "Enjoy Tangier properly, or travel to Chefchaouen for a blue-city overnight."], ["Day 3 — Return thoughtfully", "Leave enough time to travel to the correct port and check in before sailing."]]}/>
<ArticlePhoto name="bluecity"/>
  </SectionFrame>;
}

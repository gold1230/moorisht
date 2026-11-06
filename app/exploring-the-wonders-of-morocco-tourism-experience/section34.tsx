import Link from "next/link";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section34(){
  return <SectionFrame id={"start-planning-morocco-tour"} label={"THE NEXT STEP"} title={"Plan a Morocco Tour That Feels Like Your Own Journey"} index={34}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The most unforgettable trips are not always the most expensive or the longest. They are the ones where the route matches your interests and you have time to feel each place. A first visit might focus on Marrakech, the High Atlas and the Sahara. Another journey could be built around the imperial cities and blue streets of the north. A return trip might trade long roads for quiet mountain villages and afternoons beside the Atlantic Ocean.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Start with three simple choices: your arrival city, the number of days you have, and the experiences that matter most to you. Then work out a sensible route with time for meals, visits and rest. A little careful planning at the beginning makes it easier to enjoy the surprises that come later.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">When you are ready, browse <Link href="/tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Moorish Tour itineraries</Link> or <Link href="/contact/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">ask for a personalized travel plan</Link>. Share your dates, party size, preferred accommodation style and the places you hope to see. The aim is not to travel everywhere. It is to come home feeling that you truly discovered somewhere.</p>
<ArticlePhoto name="coast"/>
  </SectionFrame>;
}

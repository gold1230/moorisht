import Link from "next/link";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section42(){
return <SectionFrame id="plan-morocco-tour" label="YOUR NEXT STEP" title="Create a Morocco Itinerary That Feels Like Your Own" index={42}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A comprehensive guide can show you many choices, but your best journey will still be personal. Some visitors want three relaxed days in a city, while others are happiest crossing the Atlas Mountains toward the desert. Families may prioritize comfort; friends may look for outdoor activities; couples may prefer a quiet riad and a few unforgettable experiences.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Start by writing down your arrival city, departure city, travel dates, group size, accommodation preferences and <strong className="font-extrabold text-[#102043]">three experiences you truly care about</strong>. Then build the route around these priorities. It is perfectly fine to leave some famous places for a second visit.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">You can browse <Link href="/tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Moorish Tour itineraries</Link>, read the <Link href="/morocco-wonders-tour-the-ultimate-morocco-tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco wonders tour guide</Link> or <Link href="/contact/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">contact Moorish Tour</Link> to discuss a route that makes sense. The most rewarding travel plans usually have one thing in common: enough time to be surprised.</p>
<ArticlePhoto name="marrakech"/>
</SectionFrame>;
}

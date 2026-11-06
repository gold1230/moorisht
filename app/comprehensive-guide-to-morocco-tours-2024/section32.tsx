import Link from "next/link";
import { SectionFrame, FeatureCards } from "./ArticleElements";
export default function Section32(){
return <SectionFrame id="morocco-food-cultural-tours" label="CULTURE AND FLAVORS" title="Moroccan Food: Turn a Meal Into Part of the Journey" index={32}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Food is one of the easiest ways to connect with a place. A warming tagine, a shared couscous lunch, freshly baked bread or a cup of mint tea can slow down the day and open a conversation. Look for small food experiences that tell a story rather than only counting the number of dishes served.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A cooking class can be a great way to learn how flavors are built. Market visits may introduce spices, seasonal produce and local shopping habits. Tell the organizer about allergies, dietary restrictions or strong dislikes before the day starts; not every small kitchen can accommodate every requirement.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Street food can be delicious, but choose carefully and use your own judgment about hygiene. Carry drinking water during long sightseeing days, and remember that meal times and opening hours may change during Ramadan. For more inspiration, explore our <Link href="/moroccan-food-tour-the-tasty-heart-of-morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Moroccan food tour guide</Link>.</p>
<FeatureCards items={[["Tagine", "Slow-cooked flavors, often served with bread"], ["Couscous", "A dish with strong family and regional traditions"], ["Mint tea", "A familiar sign of welcome in many homes and cafés"], ["Cooking experiences", "A way to learn recipes and cultural context together"]]}/>
</SectionFrame>;
}

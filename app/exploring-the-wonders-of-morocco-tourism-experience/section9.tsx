import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section9(){
  return <SectionFrame id={"atlas-mountain-landscapes"} label={"MOUNTAIN ROADS"} title={"The Atlas Mountains: Villages, Views and Fresh Air"} index={9}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The <PlaceHoverCard place="high-atlas-mountains">High Atlas</PlaceHoverCard> is more than a beautiful background for photographs. Roads wind past villages, hillsides and changing rock colors. Some valleys are green with farms and trees; others feel dry and wide open. Travelers who love landscapes often say that the mountain journey becomes one of the trip&apos;s best parts, even when it was originally described as a travel day.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A day trip from Marrakech can show you a little of this mountain life without needing to cross the whole country. Longer tours may travel over the Tizi n&apos;Tichka road toward Ouarzazate and the south. Weather matters here. In winter, snow or mountain conditions can change plans, and even in warm seasons a light jacket may be useful in higher areas.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">When visiting villages, remember that people are at home. Ask before photographing residents, respect private spaces, and choose local guides or cafés when possible. Mountain travel is especially enjoyable when you add time for a short walk, a simple meal and conversation instead of stopping only at roadside viewpoints.</p>
<ArticlePhoto name="atlas"/>
  </SectionFrame>;
}

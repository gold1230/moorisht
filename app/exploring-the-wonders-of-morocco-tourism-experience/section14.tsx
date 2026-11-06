import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section14(){
  return <SectionFrame id={"essaouira-atlantic-break"} label={"THE OCEAN"} title={"Essaouira: A Breezy, Relaxed Ending to a Tour"} index={14}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">After inland cities and warm desert scenery, <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> can feel like a refreshing change. This Atlantic town is known for its coastal walls, fishing harbor, whitewashed buildings and creative atmosphere. Wander past little galleries, enjoy seafood if you like it and listen to the wind moving along the waterfront.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Essaouira makes an attractive day trip from Marrakech, but an overnight stay offers a calmer experience. In the morning, you can stroll before the streets become busy, and in the evening there is no need to hurry back to your driver. The beach is often windy, so dress for the conditions rather than assuming every day will be warm enough for swimming.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">On a two-week tour, a coastal finish gives your journey a different mood. It is also a useful reminder that Morocco&apos;s beauty is not limited to medinas, mountain roads and the Sahara. If your holiday is shorter, it may be better to choose Essaouira instead of adding another distant city.</p>
<ArticlePhoto name="coast"/>
  </SectionFrame>;
}

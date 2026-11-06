import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section6(){
  return <SectionFrame id={"chefchaouen-blue-city"} label={"MOUNTAIN MAGIC"} title={"Chefchaouen: The Blue Town That Invites You to Slow Down"} index={6}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">High in the Rif Mountains, <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard> has a quieter feeling than Morocco&apos;s largest cities. Blue walls frame tiny stairways, cats sleep in the shade, and simple cafés look toward the hills. Visitors love its colors, but a good visit is not just a photography walk. This is a real mountain town with shops, families and daily routines going on behind the beautiful doors.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If possible, stay overnight. Morning light can be gentle, streets may feel calmer, and you have time to walk without watching a departure clock. A small local guesthouse is often part of the experience, although some are reached by steps rather than by car. Ask about luggage access before booking if you need an easy arrival.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Chefchaouen fits especially well into a northern route beginning in Tangier. It does not fit naturally into a short Marrakech desert journey, however, and adding it can mean a major detour. Travelers with a week or more can combine it with Fes or other northern stops when their arrival and departure locations make sense.</p>
<ArticlePhoto name="bluecity"/>
  </SectionFrame>;
}

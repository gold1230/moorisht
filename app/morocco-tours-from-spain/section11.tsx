import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section11(){
  return <SectionFrame id={"atlas-and-kasbahs"} label={"LANDSCAPES"} title={"Atlas Mountains, Ouarzazate and Ait Ben Haddou"} index={11}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The drive between the Sahara and Marrakech is often a highlight, not a part to skip. Roads cross palm valleys, dramatic gorges and villages with earth-coloured buildings. You may stop at Todra Gorge, admire the Dades Valley or take time in Ouarzazate, depending on your chosen route.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard> is known for its traditional earthen architecture and hilltop silhouette. It is a rewarding stop when the journey naturally passes through this area, especially if you have enough daylight to walk through the historic settlement. Remember that the word “kasbah” is used in different ways, so a guide can explain what you are actually visiting.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The High Atlas roads add stunning scenery, but they are also mountain roads. Winter weather and road conditions can affect driving times. Choosing a guide or driver familiar with the area can make the crossing more comfortable, and a planned lunch stop is often as enjoyable as any viewpoint.</p>
<ArticlePhoto name="kasbah"/>
<ArticlePhoto name="atlas"/>
  </SectionFrame>;
}

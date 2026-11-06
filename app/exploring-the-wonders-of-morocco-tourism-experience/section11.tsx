import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame, FeatureCards } from "./ArticleElements";
export default function Section11(){
  return <SectionFrame id={"todra-dades-valleys"} label={"BETWEEN ROCK AND PALMS"} title={"Todra Gorge, Dades Valley and the Southern Road"} index={11}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">There is a wonderful change in scenery between Ouarzazate and the great dunes of the southeast. Roads pass rose-growing areas, palm groves, deep-colored cliffs and villages near riverbeds. <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard> is known for towering rock walls that create a dramatic narrow setting, while <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard> offers unusual formations, winding roads and lovely views.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">These are not places where every visitor needs to hike for hours. A comfortable walk, a cup of tea and a few thoughtful viewpoints can be enough to enjoy them. Travelers who like photography may want extra time for changing light, while families may prefer shorter stops and more time at the guesthouse. The route can be adjusted to suit both styles.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A good guide will explain the day&apos;s drive before you leave. Distances on the map can look short, but mountain bends, lunch and sightseeing make the day longer. Ask whether Todra and Dades are full visits or simply stops on the way, so that your expectations match the actual plan.</p>
<FeatureCards items={[["Todra Gorge", "A dramatic rocky passage for short walks and photographs."], ["Dades Valley", "Winding roads, villages and changing rock formations."], ["Ziz Valley", "Green palm groves contrasting with the dry country around them."], ["High Atlas", "Passes, mountain scenery and villages along scenic drives."]]}/>
  </SectionFrame>;
}

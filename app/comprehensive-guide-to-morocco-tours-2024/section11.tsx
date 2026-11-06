import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section11(){
return <SectionFrame id="kasbahs-southern-road" label="SOUTHERN MOROCCO" title="Ait Ben Haddou, Ouarzazate and the Road of Kasbahs" index={11}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard> is a famous earthen ksar where walls and towers rise in warm shades against the surrounding landscape. A visit can be more interesting when you learn about the materials and the life of the settlement rather than focusing only on its appearance in films.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Nearby <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard> is an established overnight stop on routes between Marrakech and the Sahara. The drive through this region also introduces kasbahs, rocky valleys and changing desert-edge scenery. Expect a long, varied day rather than a short hop.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Allow sensible time to visit Ait Ben Haddou on foot. Paths and steps can be uneven, and the sun may be strong. On a three-day Sahara itinerary, the number of extra stops must be limited. On a four- or five-day journey, you have more freedom to linger and understand what makes this landscape special.</p>
<ArticlePhoto name="kasbah"/>
</SectionFrame>;
}

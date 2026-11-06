import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section10(){
  return <SectionFrame id={"ait-ben-haddou-ouarzazate"} label={"KASBAH COUNTRY"} title={"Ait Ben Haddou and Ouarzazate: Earth-Colored Architecture"} index={10}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard> rises from the landscape in layers of earthen walls and narrow paths. This historic ksar is famous for its architecture and film appearances, but the most interesting details are the building methods and the way homes, lanes and defensive spaces fit together. Take time to walk through and learn why the settlement developed here.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Nearby <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard> is a frequent stop on routes between Marrakech and the Sahara. The area is associated with film studios, kasbah architecture and the landscapes of southern Morocco. It can be a practical overnight stop, particularly for travelers who want a less tiring journey across the mountains.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The best way to enjoy this region is as part of a route that already passes through it. Adding Ait Ben Haddou as a quick excursion during a very short north Morocco trip would mean too much driving. On a Marrakech-to-desert journey, however, it is often a natural and rewarding cultural visit.</p>
<ArticlePhoto name="kasbah"/>
  </SectionFrame>;
}

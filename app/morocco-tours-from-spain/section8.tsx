import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame, FeatureCards } from "./ArticleElements";
export default function Section8(){
  return <SectionFrame id={"tetouan-and-northern-coast"} label={"CULTURE CLOSE TO SPAIN"} title={"Tetouan, Coastal Towns and the Northern Side of Morocco"} index={8}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="tetouan">Tetouan</PlaceHoverCard> is sometimes overlooked by travelers heading straight for Chefchaouen, yet its medina has a strong character of its own. The city&apos;s Andalusian influences are easy to notice in its buildings and everyday culture. This makes it an interesting place to visit if you want to understand the links between northern Morocco and southern Spain.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A gentle northern route can combine Tangier, Tetouan and Chefchaouen, with time for cafés, traditional markets and countryside views. You can also ask about coastal stops on the Mediterranean side, depending on the season. A beach visit is a different experience from a Sahara trip, and both deserve to be enjoyed on their own terms.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you have four days from Spain, choosing the north is often a better holiday than driving hundreds of extra kilometres for a hurried photograph of the desert. Save the longer crossing of the country for a visit when you can enjoy the changing scenery between regions.</p>
<FeatureCards items={[["History and craft", "Tetouan offers medina streets with strong Andalusian links."], ["Mountains and colour", "Chefchaouen feels especially lovely with time to explore slowly."], ["Coastal atmosphere", "The north has relaxed seaside stops as well as city visits."], ["Easy pacing", "You can enjoy several places without heading all the way south."]]}/>
  </SectionFrame>;
}

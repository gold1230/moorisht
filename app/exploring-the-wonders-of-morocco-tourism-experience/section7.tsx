import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section7(){
  return <SectionFrame id={"tangier-and-north"} label={"NORTHERN GATEWAY"} title={"Tangier, Tetouan and the Northern Coast"} index={7}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="tangier">Tangier</PlaceHoverCard> sits where the Atlantic Ocean and Mediterranean world meet. The city is a fascinating beginning for travelers arriving by ferry or flying into northern Morocco. Its old kasbah, lively medina, cafés and nearby coastal viewpoints offer a fine introduction before continuing into the countryside. It deserves more than a rushed transfer if your schedule permits.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The north can also include Tetouan, with its Andalusian influences, and quiet stretches of coast. Traveling here feels different from a southern Sahara circuit: there are sea views, green hills and historic urban areas rather than long desert roads. This variety is one reason repeat visitors enjoy planning regional tours instead of seeing the same places on every trip.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are coming from Spain, read our <Link href="/morocco-tours-from-spain/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco tours from Spain guide</Link> for arrival-port advice. For a longer route that goes from the north toward the Sahara, consider the <Link href="/tour/10-days-in-morocco-tour-from-tangier/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">10-day tour from Tangier</Link>. An itinerary should make clear which airport or ferry terminal you arrive at and where the journey ends.</p>
<ArticlePhoto name="port"/>
<ArticlePhoto name="crossing"/>
  </SectionFrame>;
}

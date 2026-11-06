import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section9(){
  return <SectionFrame id={"fes-city-tour"} label={"IMPERIAL HISTORY"} title={"Fes: Markets, Crafts and a Living Old Medina"} index={9}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A journey south from northern Morocco eventually reaches <PlaceHoverCard place="fes">Fes</PlaceHoverCard>, one of the country&apos;s most fascinating historic cities. The old medina is full of winding lanes, workshops, beautiful doors and the sounds of everyday life. It is a place where a local guide is genuinely helpful: you can learn why neighbourhoods developed around trades, schools, fountains and places of worship.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Give Fes at least a full sightseeing day if possible. A guided morning can introduce the medina&apos;s main areas, while a free afternoon leaves space for a long lunch or a craft shop you discover along the way. Leather goods, pottery, brasswork and woven textiles are part of the city&apos;s identity; shopping should feel optional rather than pressured.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Fes also connects nicely to the Middle Atlas and longer road journeys toward Merzouga. If you want to combine culture with dunes, you can compare <Link href="/tour/10-days-in-morocco-tour-from-tangier/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Moorish Tour&#x27;s ten-day Tangier route</Link> rather than trying to squeeze everything into a two-night break.</p>
<ArticlePhoto name="fes"/>
  </SectionFrame>;
}

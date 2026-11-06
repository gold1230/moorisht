import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section13(){
  return <SectionFrame id={"erfoud-fossils-and-rissani"} label={"LOCAL DISCOVERIES"} title={"Erfoud, Rissani and Life Around the Sahara"} index={13}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The southeast has more to offer than sand dunes. <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> is known for fossil workshops and decorative stone pieces, and a visit can introduce travelers to the ancient marine history recorded in local rocks. If you enjoy natural history, seeing the workshop process is interesting, from cutting and polishing to questions about repairs and authentic specimens.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Rissani is another memorable stop for people who enjoy markets and local traditions. Depending on the market day and the route, you may see busy trading areas and food stalls where people from surrounding communities gather. The experience feels different from shopping in the major tourist medinas. Your guide can help explain market etiquette, and you should ask before photographing people closely.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If buying fossils, ask what is original, what has been restored, and whether any necessary export documents can be supplied. Rules may apply, and a receipt alone does not guarantee a specimen can legally cross borders. Our <Link href="/erfoud-fossils-for-sale-in-morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Erfoud fossil buying guide</Link> covers practical questions for curious visitors and collectors.</p>
<ArticlePhoto name="fossils"/>
  </SectionFrame>;
}

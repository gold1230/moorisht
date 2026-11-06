import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section17(){
  return <SectionFrame id={"two-weeks-morocco-from-spain"} label={"TRAVEL SLOWER"} title={"12–14 Days: A More Comfortable Grand Morocco Tour"} index={17}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you can spare nearly two weeks, Morocco begins to feel less like a series of transfers and more like a place you are getting to know. You can stay an extra night in Chefchaouen or Fes, have time to enjoy the Sahara in the morning, and add a quieter afternoon around the Dades Valley or Marrakech.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A longer route could start in Tangier, continue through the north and the imperial cities, cross toward Merzouga, and finish in Marrakech or on the Atlantic coast. Some travelers include <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard>, known for its sea air, fishing port and calmer pace after the bustle of big cities. Others prefer a round trip that returns north for a ferry back to Spain, although that requires additional road time.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">It is useful to compare a <Link href="/tour/12-days-morocco-tour-from-casablanca-to-marrakech/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">12-day Casablanca-to-Marrakech journey</Link> as well as the <Link href="/tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">complete Morocco tour collection</Link>. The best route is the one with the right nights in the right places, not simply the most stops.</p>
<ArticlePhoto name="coast"/>
  </SectionFrame>;
}

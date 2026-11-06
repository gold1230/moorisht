import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section17(){
return <ArticleSection id="what-to-pack-for-merzouga" label="PACK SMART" title="What to Wear and Pack for a Merzouga Desert Trip">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Packing for the desert does not mean filling a large suitcase with special equipment. The goal is to feel comfortable while walking, sitting, traveling by vehicle and relaxing after sunset. Loose, breathable clothing works well during warm days. Long sleeves and trousers can also protect your skin from strong sun and windblown sand.</p>
<ArticleTable headings={tables.packing.headings} rows={tables.packing.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">A small day bag is especially helpful if your large suitcase stays at the hotel or vehicle while you travel to camp. Pack a water bottle, your medicine, a power bank, sunglasses and one warm layer. Keep valuables and important documents secure, and do not assume every camp will have convenient charging points beside the bed.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For footwear, choose secure trainers or sturdy sandals that are easy to walk in. Flip-flops may be comfortable around camp but are often awkward on uneven ground. If you are unsure what to wear during the wider Morocco journey, see our <Link href="/ultimate-guide-what-to-wear-in-marrakech-morocco/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech and Sahara clothing guide</Link> for more ideas.</p>
</ArticleSection>;
}

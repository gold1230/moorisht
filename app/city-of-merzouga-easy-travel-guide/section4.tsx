import { ArticleSection, ArticleQuote, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section4(){
return <ArticleSection id="best-things-to-do-in-merzouga" label="EXPERIENCES" title="Best Things to Do in Merzouga Without Rushing">
<p className="mt-5 text-[17px] leading-8 text-slate-700">There is no single best activity for everyone in Merzouga. Some travelers arrive dreaming of a camel ride. Others want a peaceful camp, an off-road outing or a chance to hear local music. A good plan starts by choosing one main experience and leaving room for the rest. Trying to book every possible activity in one afternoon usually leaves you tired rather than delighted.</p>
<ArticleTable headings={tables.activities.headings} rows={tables.activities.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you have only one evening, choose a sunset experience and a comfortable place to sleep. With a full extra day, add a village visit or a guided exploration of the stony desert beyond the dunes. Travelers interested in wildlife should know that birds are seasonal and sightings cannot be guaranteed. Our <Link href="/birds-of-morocco-tours/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco birdwatching article</Link> has ideas for exploring different habitats responsibly.</p>
<ArticleQuote>One of the nicest things you can do in Merzouga is leave a little time unplanned. The light, the silence and the wide horizon will do the rest.</ArticleQuote>
</ArticleSection>;
}

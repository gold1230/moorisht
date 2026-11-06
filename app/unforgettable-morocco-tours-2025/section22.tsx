import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section22(){
return <ArticleSection id="morocco-tour-prices-whats-included" label="COST & VALUE" title="How Much Does a Morocco Tour Cost and What Is Included?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Tour prices vary widely because two packages with the same length can offer very different services. Group size, transport type, hotel standard, camp category, season and guiding arrangements all affect cost. A low starting price may cover a shared seat rather than a fully private tour, so it is important to compare like with like.</p>
<ArticleTable headings={tables.inclusions.headings} rows={tables.inclusions.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Look closely at accommodation: is it a private room, an ensuite tent or something more basic? Are breakfast and dinner included every day or only in certain places? Does the tour include official local guides in Fes and Marrakech, or an English-speaking driver for the road journey? These are different services, and the distinction matters.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Some activities—quad bikes, special 4x4 trips, cooking classes or particular site admissions—may cost extra. Tips, lunches and drinks are also frequently excluded. A detailed written itinerary and inclusion list will help you plan a realistic budget and avoid last-minute confusion.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are considering an upgrade, decide what matters most. An extra night, a better-positioned riad or a less rushed route may improve the experience more than adding another attraction. Ask Moorish Tour for a <Link href="/contact/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">personalized tour quote</Link> based on your actual travel dates.</p>
</ArticleSection>;
}

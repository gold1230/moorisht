import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section14(){
return <ArticleSection id="casablanca-tour-prices-what-is-included" label="PRICE CLARITY" title="Casablanca Travel Agency Prices: What You Are Really Paying For">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Travel quotes vary because travelers ask for different services. One guest may need only a car and driver from the airport. Another may want hotels, guided visits, meals and a long-distance trip through the Sahara. Comparing those prices without checking the details gives a misleading picture.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Accommodation makes a difference: a comfortable standard riad and a high-end boutique hotel are not the same booking. Private transport for two people may have a different per-person cost from a small group. The season, number of nights, selected activities and airport arrangements also affect the final quote.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ask for a price breakdown with inclusions and exclusions. Are entrance tickets included? What about lunches, dinners, guide services and tips? Are desert camp transfers, camel rides and optional excursions part of the total? Is there an extra charge for arriving after midnight or changing the pickup city?</p>
<ArticleTable headings={tables.priceFactors.headings} rows={tables.priceFactors.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Avoid treating a figure from an old blog post as today&apos;s fixed selling price. Booking terms and availability change. Our <Link href="/all-morocco-tours-packages/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">all tour packages guide</Link> helps you understand trip styles, but a written offer for your dates is the safest basis for comparison.</p>
</ArticleSection>;
}

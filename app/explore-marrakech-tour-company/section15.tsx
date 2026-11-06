import Link from "next/link";
import { SectionFrame, InfoPanel, CompareTable } from "./ArticleElements";
import { tables } from "./tables";

export default function Section15(){return <SectionFrame id="marrakech-tour-price-guide" index={15} label="PLAN YOUR BUDGET" title="Marrakech Tour Prices: What Changes the Cost?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">The cost of a Marrakech tour depends on what you actually book. A guided morning walk and a multi-day private road journey are very different products. For desert holidays, the price may change according to the vehicle, number of travelers, hotel category, included meals, overnight camp type and activities. Dates also matter because popular seasons and holiday periods affect availability.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Avoid choosing only by the lowest number on a screen. A tour described as inexpensive may leave entrance fees, lunch, baggage transfer, city guiding or optional camel rides outside the quoted amount. Another tour may include them but cost more at the start. Ask for the same details from each offer so that you can compare fairly.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For accurate planning, contact <Link href="/contact/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">Moorish Tour</Link> with your dates and group size and request a written quotation. We avoid publishing a universal price here because routes and inclusions can change. The better question is not simply &apos;How much does it cost?&apos; but &apos;What exactly will we receive for this price?&apos;</p>
<CompareTable headings={tables.prices.headings} rows={tables.prices.rows}/>
<InfoPanel title="Price clarity"><p>Ask for a final quote that lists included hotels, rooms, meals, guides, entrances, activities and any possible extra charges.</p></InfoPanel>
</SectionFrame>;}

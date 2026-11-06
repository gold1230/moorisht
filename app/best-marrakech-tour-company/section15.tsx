import Link from "next/link";

import { SectionFrame, InfoPanel, CompareTable } from "./ArticleElements";

import {tables} from "./tables";

export default function Section15(){return <SectionFrame id="marrakech-tour-company-pricing" index={15} label="BUDGET CLEARLY" title="Marrakech Tour Prices: What Changes the Cost?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Tour prices are not fixed across every season or travel style. A private trip for two travelers uses transport differently from a group departure, while the number and standard of hotel rooms also change the quote. Desert camps vary in their facilities and location, and optional activities can add expenses. This is why comparing only the price printed at the top of a page can be misleading.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ask whether accommodation is in a standard hotel, traditional riad or desert camp and whether you can see examples before confirming. Also check meals. A package may include breakfast and one or two dinners while leaving lunches, drinks and entry tickets as separate costs. A city tour may charge guiding and monument tickets separately. These details should be shown plainly.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Transport makes a difference too. A private air-conditioned vehicle, a shared minibus and a separate 4×4 excursion are different services. Some roads to popular destinations are paved, while specific off-road desert visits benefit from suitable vehicles. Ask exactly what kind of journey is included and whether an upgrade is optional.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you need a firm price, share your travel dates, party size, room preferences and any special requirements with Moorish Tour through <Link href="/contact/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">contact</Link>. The most useful quote is the one that lists all services and exclusions clearly. It gives you an honest basis for deciding what fits your budget.</p>
<CompareTable headings={tables.costs.headings} rows={tables.costs.rows}/>
<InfoPanel title="Price tip"><p>Do not publish a permanent “from” price unless you know what is included and regularly update availability. A clear personalized quote is more useful for comparison.</p></InfoPanel>
</SectionFrame>;}

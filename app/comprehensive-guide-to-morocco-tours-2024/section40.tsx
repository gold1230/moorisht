import Link from "next/link";
import { SectionFrame, FeatureCards } from "./ArticleElements";
export default function Section40(){
return <SectionFrame id="choose-travel-agency" label="BOOKING SMART" title="How to Choose a Trustworthy Morocco Tour Company" index={40}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A reliable tour company should be able to explain a route clearly, answer practical questions and provide written terms before taking payment. Look for realistic driving days, specific accommodation descriptions, a clear inclusion list and straightforward cancellation rules. Genuine reviews can help, but they should not replace direct questions.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ask whether the driver is also your guide, which sightseeing visits include a licensed local guide, and what happens if your flight changes or mountain weather affects the road. If a package promises too much in too few days, request a revised schedule rather than hoping it will work out.</p>
<FeatureCards items={[["Clear written itinerary", "You know the route, overnight towns and planned activities"], ["Transparent price", "Inclusions, exclusions and optional extras are listed"], ["Sensible daily pace", "Major road days and breaks are explained"], ["Helpful communication", "The organizer answers your questions without pressure"]]}/>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Explore the <Link href="/tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Moorish Tour travel options</Link> or <Link href="/contact/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">ask for a customized plan</Link> with your dates, number of travelers and preferred hotel style. A good route should feel understandable before you arrive, not just attractive in a photograph.</p>
</SectionFrame>;
}

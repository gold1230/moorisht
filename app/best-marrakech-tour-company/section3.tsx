import Link from "next/link";

import { SectionFrame, InfoPanel, CompareTable } from "./ArticleElements";

import {tables} from "./tables";

export default function Section3(){return <SectionFrame id="how-to-find-trusted-marrakech-travel-company" index={3} label="BOOK WITH CONFIDENCE" title="How to Choose a Trusted Marrakech Travel Company">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Start with the written plan rather than the words “best” or “luxury” in an advertisement. Look for a day-by-day itinerary showing the departure point, overnight towns, key stops, and when you return. If a company promises a very long list of cities in only a few days, ask how much time will actually be spent driving. The answer may change which package you choose.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Look closely at what is included. Does the price cover the airport transfer, private driver, city guide, accommodation and entrance tickets? Are lunches, tips and optional desert activities extra? A room described as a luxury desert tent might have a private bathroom, but that should be confirmed for the specific booking. Make sure you also know how any deposit, remaining balance and cancellation rules work.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">It is reasonable to ask about vehicle comfort, driver experience, the language spoken by your guide and the emergency contact you can reach during a trip. A driver and an officially qualified city guide can have different roles. If your main interest is the history of Marrakech, ask for a proper guided walking visit rather than assuming your transfer driver will lead every monument tour.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Finally, read recent reviews with care. Look for useful details about punctuality, communication, cleanliness and how changes were handled, rather than trusting one enthusiastic sentence. Our <Link href="/about/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">Moorish Tour about page</Link> explains our local background; our <Link href="/contact/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">contact page</Link> gives you a direct way to ask the questions that matter to you.</p>
<CompareTable headings={tables.checks.headings} rows={tables.checks.rows}/>
<InfoPanel title="Before you pay"><p>Ask for a final itinerary and written explanation of deposits, inclusions, exclusions, accommodation standards and cancellation conditions. Avoid making decisions from a vague message alone.</p></InfoPanel>
</SectionFrame>;}

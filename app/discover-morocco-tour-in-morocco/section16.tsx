import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section16(){
return <ArticleSection id="morocco-tour-prices-and-what-is-included" label="PLANNING YOUR BUDGET" title="Discover Morocco Tour Prices: What Changes the Cost?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">The cost of a Discover Morocco tour depends on the number of days, number of travelers, travel season, accommodation level, vehicle, guiding arrangements and included experiences. A three-day shared desert trip and a fourteen-day private itinerary are different products, so there is no single fair price that fits everyone. The lowest advertised price may also exclude lunches, attraction tickets, activities or some transfers. Ask for a written breakdown so you can compare similar services.</p>
<ArticleTable headings={tables.inclusions.headings} rows={tables.inclusions.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Private tours may cost more per person when there are only two travelers, but the difference can become smaller with a larger family or group. Luxury riads and desert camps can raise the total price, particularly during popular dates. Shared departures may be more affordable but offer less control over hotels and daily timing. To avoid surprises, ask which nights are included, what the room type is and whether tourist taxes or tips are separate.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Flights, travel insurance, personal shopping and many meals may not be included in a land tour. It is a good idea to bring some local currency for markets, cafés and small services, even if your main expenses are paid in advance. Cards are used widely in larger hotels and cities, but smaller shops may prefer cash. Exchange rates change, so do not rely on an old euro or dollar estimate from a blog post.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A clear quotation from Moorish Tour should match your requested dates and group size. Use our <Link href="/plan-your-morocco-tour" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">custom tour planning page</Link> to share your preferences, and compare actual inclusions rather than choosing a package based only on a headline price.</p>
</ArticleSection>;
}

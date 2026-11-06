import { ArticleSection, ArticleNote } from "./ArticleElements";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section14(){
return <ArticleSection id="three-day-merzouga-itinerary" label="A SLOWER STAY" title="Three Days in Merzouga: An Easy Plan for Desert Lovers">
<p className="mt-5 text-[17px] leading-8 text-slate-700">A longer Merzouga stay is especially good for travelers who love photography, local culture or quiet landscapes. It also helps if you have come a long way by road and want the desert to feel like a destination, not just a short overnight stop. Three days gives you flexibility when wind or other weather affects outdoor plans.</p>
<h3 className="mt-10 text-2xl font-bold leading-snug text-[#102043] sm:text-3xl">Day 1: arrive and watch the sunset
Keep the first day simple: check in, enjoy a dune walk or camel transfer and settle into your camp. If the sky is clear, enjoy the stars after dinner. You do not need an evening schedule beyond that.</h3>
<h3 className="mt-10 text-2xl font-bold leading-snug text-[#102043] sm:text-3xl">Day 2: discover local life
With a local guide, visit Khamlia, explore an appropriate off-road route or stop at the market in Rissani if the timing works. Learn about the area, have a relaxed lunch and return before the hottest part of the afternoon. Use the evening for sunset photographs or an easy walk.</h3>
<h3 className="mt-10 text-2xl font-bold leading-snug text-[#102043] sm:text-3xl">Day 3: sunrise, breakfast and departure
Wake up early, watch the light change and enjoy a final breakfast by the dunes. When you leave, plan rest stops on your onward route. Depending on your trip, you may continue through the <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard> or return toward Errachidia or Fes.</h3>
<ArticleNote title="Choose the right number of nights"><p>A three-day visit to Merzouga is different from a three-day round-trip desert tour from Marrakech. The latter spends significant time driving. Ask your planner how many full days and nights you will actually spend near the dunes.</p></ArticleNote>
</ArticleSection>;
}

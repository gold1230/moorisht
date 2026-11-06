import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section17(){
return <ArticleSection id="ten-twelve-day-casablanca-morocco-itinerary" label="LONGER ADVENTURES" title="10–12 Days from Casablanca: A More Relaxed Grand Tour">
<p className="mt-5 text-[17px] leading-8 text-slate-700">With ten to twelve days, you can enjoy the journey rather than watching the clock constantly. Extra time lets you stay two nights in a city, explore a village at a slower pace or spend a second night close to the Sahara. That breathing room matters after an international flight and several days of travel.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A longer route may begin with Casablanca and Rabat, continue north toward <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>, then travel to Fes. From there, move through the Middle Atlas toward the dunes near Merzouga. On the return through southern valleys, enjoy Todra Gorge, Dades Valley, Ouarzazate and Ait Ben Haddou before continuing to Marrakech. Depending on your pace and endpoint, the Atlantic town of <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> may also fit.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Do not assume that every destination listed above belongs in every ten-day program. A twelve-day route has more room for the northern cities and the coast; a ten-day trip may be better if it focuses on a smaller number of highlights. The length of the drive is just as important as the number of overnight stops.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Moorish Tour publishes a <Link href="/tour/12-days-morocco-tour-from-casablanca-to-marrakech/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">12-day Casablanca-to-Marrakech package</Link> and longer <Link href="/morocco-expedition-the-ultimate-journey/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco expedition ideas</Link>. Use them to compare route styles, then ask for the exact nights and services that fit your holiday.</p>
<ArticlePhoto name="kasbah" />
</ArticleSection>;
}

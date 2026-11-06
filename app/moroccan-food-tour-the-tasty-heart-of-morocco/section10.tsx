import { ArticleSection, ArticleTable } from "./ArticleElements";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section10() {
 return (
<ArticleSection id="moroccan-food-by-region-coast-mountains-and-sahara" label="REGIONAL TASTES" title="Moroccan Food by Region: Coast, Mountains and Sahara">
<p className="mt-5 text-lg leading-8 text-gray-700">Moroccan cuisine changes noticeably between regions. In <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> and <PlaceHoverCard place="agadir">Agadir</PlaceHoverCard>, the Atlantic coast brings fresh seafood, grilled sardines and fish tagines into the conversation. In the mountains, you may taste hearty breads, olive oil, seasonal vegetables and simple home cooking. Southern oases are known for dates and ingredients adapted to drier landscapes.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Around the desert, food is often valued for the hospitality surrounding it as much as for a formal menu. A guesthouse meal near Merzouga may feature soup, salads, bread, tagine and tea after a day outside. In villages near <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard>, dates and local markets can add another layer to a desert itinerary. When ingredients or dishes differ from your expectations, treat that as part of the discovery.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">On a scenic route through <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard> and the southern valleys, allow time for local stops instead of eating only at highway restaurants. Travellers booking <Link href="/erfoud-sahara-tours-4x4-desert-vehicles/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Erfoud Sahara excursions</Link> or a <Link href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech-to-Merzouga tour</Link> can ask which meals are locally prepared and what options are available in the desert camp.</p>
<ArticleTable headings={["Region", "Flavours to explore", "Food-tour idea"]} rows={[["Marrakech", "Tanjia, street food, spice markets", "Half-day tasting plus cooking class"], ["Fes", "Pastilla, pastries, home-style dishes", "Guided medina food walk"], ["Atlantic coast", "Grilled fish, seafood tagines", "Market and harbour lunch"], ["Atlas villages", "Bread, olive oil, seasonal food", "Village lunch with local hosts"], ["Sahara southeast", "Dates, tea, slow-cooked meals", "Desert camp meal and regional market"]]} />
</ArticleSection>
 );
}

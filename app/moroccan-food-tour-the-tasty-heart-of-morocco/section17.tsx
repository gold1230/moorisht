import { ArticleSection, ArticleTable } from "./ArticleElements";
import Link from "next/link";

export default function Section17() {
 return (
<ArticleSection id="three-day-moroccan-culinary-journey-marrakech-and-the-atlas" label="3-DAY ITINERARY" title="Three-Day Moroccan Culinary Journey: Marrakech and the Atlas">
<p className="mt-5 text-lg leading-8 text-gray-700">With three days, you can enjoy the energy of Marrakech and still experience a quieter meal in the surrounding countryside. Day one can focus on the medina and a guided tasting walk. Spend time with local vendors, sample cooked salads and learn how the city’s food markets support daily kitchens. Finish with dinner at a traditional restaurant or riad.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">On day two, visit a nearby Atlas valley and enjoy a meal with local hosts where that is part of an arranged experience. The drive introduces a different landscape and a slower pace. Bread, olive oil, vegetables, tea and a seasonal main dish may feature, depending on the household. If you have little time or prefer to avoid longer drives, stay in Marrakech for a market-led cooking class instead.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Day three can be flexible: revisit the market for ingredients, try a pastry workshop or choose a final lunch before departure. If you want to combine food with much more time on the road, compare this plan with our <Link href="/3-days-in-morocco-tours-ideas-and-travel-tips/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">three-day Morocco tour ideas</Link>. A full <Link href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">three-day Merzouga desert tour</Link> is a different, drive-heavy trip and should not be sold as though it includes three relaxed days of cooking experiences.</p>
<ArticleTable headings={["Day", "Main experience", "Why it works"]} rows={[["1 — Marrakech", "Medina, market tastings and local dinner", "Get a broad introduction to flavours"], ["2 — Atlas foothills", "Village scenery and arranged home-style lunch", "Discover rural food traditions"], ["3 — Marrakech", "Cooking workshop or pastry stops", "Enjoy a flexible ending before departure"]]} />
</ArticleSection>
 );
}

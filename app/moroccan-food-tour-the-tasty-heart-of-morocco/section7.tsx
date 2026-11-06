import { ArticleSection, ArticleNote } from "./ArticleElements";
import Link from "next/link";

export default function Section7() {
 return (
<ArticleSection id="moroccan-street-food-what-to-eat-in-marrakech-souks" label="STREET FOOD" title="Moroccan Street Food: What to Eat in Marrakech Souks">
<p className="mt-5 text-lg leading-8 text-gray-700">Street food is part of the pleasure of exploring the old medina. Around Jemaa el-Fnaa and the surrounding lanes, visitors may find soups, grilled foods, bread, juice, pastries and small snacks. The square becomes especially lively in the evening, when food stalls and seating areas create a different atmosphere from the quieter morning markets.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">A good Marrakech food walk should move beyond simply choosing the busiest stall. It can introduce local bakeries, spice sellers, olive merchants and shops making fresh flatbreads. You may try msemen, savoury sandwiches, olives, roasted nuts or a small bowl of harira. Taste what looks appealing, but use common sense about hygiene and food temperature. Freshly cooked hot food is generally a more practical choice than food left sitting out.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">The souks are also an opportunity to understand ingredients. Ask why preserved lemons are important, how olives are cured or what goes into a spice blend. If you want to connect the food walk with the city’s famous attractions, use our <Link href="/locations/marrakech/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech travel page</Link> and <Link href="/3-days-in-morocco-tours-ideas-and-travel-tips/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">three-day Morocco travel ideas</Link> for practical route planning.</p>
<ArticleNote title="Food safety, simply explained"><p>Choose visibly clean vendors, check that food is properly cooked and served hot, and drink water from a source you trust. If you have a serious allergy, explain it before any tasting and do not rely on appearance alone.</p></ArticleNote>
</ArticleSection>
 );
}

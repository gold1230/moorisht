import { ArticleSection, ArticleQuote } from "./ArticleElements";
import Link from "next/link";

export default function Section2() {
 return (
<ArticleSection id="what-makes-moroccan-food-special-culture-spices-and-shared-meals" label="FOOD &amp; CULTURE" title="What Makes Moroccan Food Special? Culture, Spices and Shared Meals">
<p className="mt-5 text-lg leading-8 text-gray-700">Moroccan cooking has been shaped by Amazigh traditions, Arab-Andalusian influences, Jewish communities, Mediterranean ingredients and long-distance trade. These histories meet in everyday dishes: steamed grains, slow-cooked meat or vegetables, fresh herbs, preserved lemons, olives, dates and almonds. The result is food that often balances savoury, sweet, sour and aromatic notes without relying on intense chilli heat.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">A shared meal matters as much as the recipe. Guests may be welcomed with mint tea, bread or something sweet. Families often place a large dish in the middle of the table, although dining habits vary by household and setting. A good food guide explains these customs respectfully, without presenting one household as the only correct way to eat. When invited into someone’s home, follow the host’s lead and ask before taking photographs.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Food stories make a trip richer. Learning where spices come from or why bread is shared can connect you to the communities you meet later on a <Link href="/morocco-wonders-tour-the-ultimate-morocco-tour/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco Wonders cultural tour</Link>. The Moroccan National Tourist Office also describes tagine, couscous and pastilla as core examples of this varied culinary heritage.</p>
<ArticleQuote>The most memorable Moroccan meal is not always the most expensive one. Often it is the meal where somebody takes time to tell you what is in the pot.</ArticleQuote>
</ArticleSection>
 );
}

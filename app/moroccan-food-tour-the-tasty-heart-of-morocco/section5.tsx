import { ArticleSection, ArticleTable } from "./ArticleElements";
import Link from "next/link";

export default function Section5() {
 return (
<ArticleSection id="couscous-in-morocco-friday-tradition-and-regional-recipes" label="FRIDAY TRADITION" title="Couscous in Morocco: Friday Tradition and Regional Recipes">
<p className="mt-5 text-lg leading-8 text-gray-700">Couscous is made from small steamed grains of semolina, usually served with vegetables and a fragrant broth. It is deeply connected to Amazigh food traditions and has become one of Morocco’s best-known communal meals. Many households enjoy it on Fridays, but there is no rule that travellers can only eat it on that day. Restaurants and home kitchens prepare many different versions.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">A generous couscous platter may include carrots, turnips, pumpkin, zucchini, cabbage, chickpeas and meat. There are also vegetarian versions and sweeter preparations with raisins, cinnamon or other ingredients. The texture is important: carefully steamed couscous should feel light rather than clumped. A cooking class can show why the steaming method is different from simply adding boiling water.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">For an interesting contrast, enjoy couscous in a city riad and later try a simpler family-style meal during a village stop in the Atlas Mountains. Longer <Link href="/one-week-in-morocco-itinerary/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">one-week Morocco itineraries</Link> allow time for these small cultural experiences without rushing every meal.</p>
<ArticleTable headings={["Couscous style", "Typical characteristics", "Ask about"]} rows={[["Seven-vegetable couscous", "Steamed semolina and seasonal produce", "Broth and meat ingredients"], ["Meat couscous", "Lamb, beef or chicken with vegetables", "Portion size and preparation time"], ["Sweet couscous / seffa", "Cinnamon, raisins or nuts in some versions", "Nuts and dairy"], ["Vegetarian couscous", "Vegetables, legumes and broth", "Whether stock contains meat"]]} />
</ArticleSection>
 );
}

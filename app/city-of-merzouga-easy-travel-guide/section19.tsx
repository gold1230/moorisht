import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import Link from "next/link";

export default function Section19(){
return <ArticleSection id="merzouga-local-food-and-hospitality" label="FOOD & CULTURE" title="What to Eat in Merzouga: Simple Meals and Warm Hospitality">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Food often becomes part of the memory of a desert trip. After a day outdoors, a warm tagine or a bowl of soup can taste especially good. Local meals may include vegetables, bread, olives, dates and meat or vegetarian dishes cooked slowly with spices. Many camps serve dinner in a shared area, while hotels and restaurants in town offer a wider range of choices.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you have food allergies or need vegetarian or vegan meals, ask before booking rather than waiting until you arrive at a remote camp. Ingredients and kitchen arrangements vary, and advance notice makes it easier to plan a suitable meal. Drinking water should also be part of your day plan, especially during warm weather.</p>
<ArticlePhoto name="village" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">An offer of tea is often a kind moment, not a reason to rush. Taking time to talk with a local host can help you learn something that no photograph can explain. If you enjoy food as part of travel, our <Link href="/moroccan-food-tour-the-tasty-heart-of-morocco/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Moroccan food tour guide</Link> explores more dishes and traditions across the country.</p>
</ArticleSection>;
}

import { ArticleSection, ArticleNote } from "./ArticleElements";
import Link from "next/link";

export default function Section11() {
 return (
<ArticleSection id="moroccan-vegetarian-and-vegan-food-what-to-ask" label="DIETARY OPTIONS" title="Moroccan Vegetarian and Vegan Food: What to Ask">
<p className="mt-5 text-lg leading-8 text-gray-700">Vegetarian travellers can eat very well in Morocco, especially when they enjoy vegetables, beans, grains and bread. Dishes such as zaalouk, taktouka, lentil soup and vegetable tagine may be suitable. Couscous can also be prepared without meat, but a vegetable-only appearance does not guarantee that the broth is vegetarian. Butter, meat stock or hidden ingredients may be used in the kitchen.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">For vegan travellers, the safest approach is to explain your needs clearly before ordering or visiting a family kitchen. Ask if food contains meat, fish, chicken stock, eggs, butter, milk or honey. People with food allergies should be more specific still: nuts, wheat, sesame and dairy appear in many traditional foods and pastries. A guide can help translate your questions but cannot guarantee an allergy-free environment.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">A private trip makes dietary planning easier because restaurants and classes can be discussed beforehand. If food is an important part of your holiday, include your requirements when you request a <Link href="/plan-your-morocco-tour/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">custom Morocco tour plan</Link> or write through the <Link href="/contact/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Moorish Tour contact page</Link>.</p>
<ArticleNote title="Vegetarian is not always vegan"><p>Traditional dishes vary by cook. If a dish is described as “vegetable”, ask about the cooking fat and broth. For severe allergies, speak directly with the kitchen and carry your own emergency plan and medication as advised by your clinician.</p></ArticleNote>
</ArticleSection>
 );
}

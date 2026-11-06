import { ArticleSection, ArticleBullets } from "./ArticleElements";
import Link from "next/link";

export default function Section19() {
 return (
<ArticleSection id="dietary-needs-allergies-and-food-safety-in-morocco" label="PRACTICAL ADVICE" title="Dietary Needs, Allergies and Food Safety in Morocco">
<p className="mt-5 text-lg leading-8 text-gray-700">A little preparation makes eating in Morocco more comfortable. Drink water from a reliable source, choose places where food is prepared and stored sensibly, and wash hands before eating. In warm weather, take extra care with items that spoil quickly. Choose freshly cooked hot food when you can, and use your own judgment about raw produce, ice and drinks in unfamiliar locations.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">For allergies, explain exactly what you must avoid rather than only saying that you do not like an ingredient. Almonds, sesame, dairy, eggs, wheat and fish can appear in dishes that look simple. When a kitchen cannot confidently explain the ingredients or cross-contact risk, it may be safer to choose something else. Bring the emergency medicine and written instructions recommended for your medical needs.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Food tours can also be physically demanding if they include long walks under the sun. Take comfortable shoes, water and sun protection. Our <Link href="/ultimate-guide-what-to-wear-in-marrakech-morocco/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">what-to-wear-in-Marrakech guide</Link> offers helpful clothing advice for warm medina days and cooler evenings.</p>
<ArticleBullets items={["Tell the guide about allergies before confirming a tasting", "Ask whether ingredients and cooking surfaces are shared", "Carry water and plan a comfortable walking pace", "Choose fresh, properly cooked food", "Be respectful when photographing markets or family kitchens", "Confirm vegetarian, vegan or gluten-free needs in writing"]} />
</ArticleSection>
 );
}

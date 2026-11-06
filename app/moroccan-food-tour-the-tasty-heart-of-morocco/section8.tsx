import { ArticleSection, ArticleTable } from "./ArticleElements";
import Link from "next/link";

export default function Section8() {
 return (
<ArticleSection id="marrakech-food-tour-tanjia-markets-and-cooking-classes" label="MARRAKECH SPECIALITIES" title="Marrakech Food Tour: Tanjia, Markets and Cooking Classes">
<p className="mt-5 text-lg leading-8 text-gray-700">One dish closely associated with Marrakech is tanjia, a slow-cooked meat preparation made in a clay jar. It is different from tagine despite the similar sound of the names. Traditionally, the jar cooks for a long time in the heat of a communal oven, giving the meat a rich texture and concentrated flavour. Trying tanjia with someone who knows the tradition makes it easier to appreciate why it is so tied to the city.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Cooking classes in Marrakech often begin with a discussion of spices and fresh ingredients before participants prepare a tagine, salads or bread. Some take place in small riads, while others use a professional kitchen. Ask how many people will join, whether participants actually prepare the meal and if the class handles food allergies. A long market tour and a separate cooking class can fill a good part of a day, so avoid adding too many distant stops.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">If you are staying in the Red City, you can combine a food experience with a guided medina walk or an <Link href="/tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">easy three-day Marrakech plan</Link>. Couples may enjoy a private lesson, while families often prefer a hands-on class that offers several simple tasks for children and a shorter walking route.</p>
<ArticleTable headings={["Experience", "Typical focus", "Best for"]} rows={[["Medina tasting walk", "Bakeries, olives, sweets and savoury snacks", "Curious first-time visitors"], ["Hands-on cooking class", "Preparing a full dish with instructions", "Couples, families and food lovers"], ["Evening Jemaa el-Fnaa visit", "Local atmosphere and hot street food", "Visitors who enjoy busy markets"], ["Private culinary day", "Flexible shopping, lesson and sit-down meal", "Travellers with dietary or timing needs"]]} />
</ArticleSection>
 );
}

import { ArticleSection, ArticleTable } from "./ArticleElements";
import Link from "next/link";

export default function Section3() {
 return (
<ArticleSection id="what-do-moroccans-eat-everyday-meals-from-breakfast-to-dinner" label="EVERYDAY FOOD" title="What Do Moroccans Eat? Everyday Meals from Breakfast to Dinner">
<p className="mt-5 text-lg leading-8 text-gray-700">A typical Moroccan breakfast can include khobz bread, msemen folded flatbread, baghrir pancakes, eggs, olives, honey, jam, cheese and tea or coffee. The selection changes by family and region. For a first-time visitor, breakfast in a traditional riad is a gentle introduction to local flavours because you can try small portions and ask how each bread or spread is made.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Lunch is often an important family meal, sometimes built around tagine, grilled fish, vegetable dishes or couscous. In the afternoon, people may share tea and pastries. Dinner might be a light soup, leftovers or a full meal depending on daily routines. Restaurants serve dishes at their own hours, so travellers should not expect every speciality to be freshly prepared at any moment of the day.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">If you have only a short stop in Marrakech, combine a morning souk walk with a lunch tasting and a local bakery visit. Our <Link href="/tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">three-day Marrakech itinerary</Link> shows how to fit food around the medina, gardens and cultural sites without spending all your time in restaurants.</p>
<ArticleTable headings={["Time", "Food you may find", "Good visitor experience"]} rows={[["Breakfast", "Msemen, baghrir, eggs, bread, olive oil", "Try several breads at your riad"], ["Lunch", "Tagine, couscous, vegetables or fish", "Choose one regional speciality"], ["Afternoon", "Mint tea, nuts and pastries", "Visit a bakery or tea stop"], ["Evening", "Harira, grilled food, cooked salads or tagine", "Enjoy a relaxed meal after sightseeing"]]} />
</ArticleSection>
 );
}

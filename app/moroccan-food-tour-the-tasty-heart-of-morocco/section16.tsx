import { ArticleSection, ArticleBullets } from "./ArticleElements";
import Link from "next/link";

export default function Section16() {
 return (
<ArticleSection id="one-day-moroccan-food-itinerary-in-marrakech" label="1-DAY FOOD PLAN" title="One-Day Moroccan Food Itinerary in Marrakech">
<p className="mt-5 text-lg leading-8 text-gray-700">Begin with breakfast at your riad: bread, local pancakes, olive oil and mint tea or coffee. Afterward, meet a guide for a slow walk through the medina. Look at vegetables, olives, herbs, spices and the communal bakeries that still serve neighbourhoods. Keep the first part of the day focused on tasting and observation rather than buying large amounts of food.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">At midday, join a small cooking lesson or choose a restaurant known for fresh local meals. Preparing a vegetable or chicken tagine gives you a useful skill to take home. If a cooking lesson is not your style, order a regional dish such as tanjia and ask the guide to explain its story. Leave some free time after lunch to explore a palace, garden or shaded courtyard.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">In the evening, return toward Jemaa el-Fnaa to experience the different atmosphere of the square. Share a small bowl of harira or another freshly cooked snack if you have an appetite, then end the day with tea. For a city-focused trip rather than a desert transfer, the <Link href="/tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech short-stay guide</Link> has additional ideas.</p>
<ArticleBullets items={["Morning — Moroccan breakfast and souk tour", "Late morning — bakeries, spices and olive sellers", "Lunch — cooking class or regional speciality", "Afternoon — relaxed sightseeing and tea", "Evening — Jemaa el-Fnaa food atmosphere"]} />
</ArticleSection>
 );
}

import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import Link from "next/link";

export default function Section8(){
return <ArticleSection id="casablanca-rabat-day-trip" label="NEARBY EXCURSIONS" title="Casablanca to Rabat: An Easy Cultural Day Trip">
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you have an extra day in Casablanca, Rabat is a rewarding option. The capital offers a calmer atmosphere, interesting royal-era architecture, broad streets and views over the Atlantic. It is close enough to be considered as a day excursion, although traffic, transport and the number of stops still affect the schedule.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A relaxed visit can include the Hassan Tower area and the Mausoleum of Mohammed V, followed by time near the Kasbah of the Udayas. The kasbah&apos;s lanes and ocean viewpoints feel quite different from Casablanca&apos;s urban shoreline. With more time, your guide may suggest the Chellah site or another cultural stop, depending on access and your interests.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Travel by organized private transport or consider the railway if you prefer independent movement between central areas. Do not try to visit every monument in both cities in a single hurried day. A simple itinerary with lunch and one or two highlights often gives a better memory of the capital.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are planning a longer journey, Rabat may become your first overnight stop on the way to the north. This is worth considering for routes toward Chefchaouen and Fes. You can compare a <Link href="/tour/12-days-morocco-tour-from-casablanca-to-marrakech/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">12-day Casablanca-to-Marrakech journey</Link> with a shorter tour if you want to include several regions.</p>
<ArticlePhoto name="group" />
</ArticleSection>;
}

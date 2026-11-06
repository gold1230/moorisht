import { ArticleSection } from "./ArticleElements";
import Link from "next/link";

export default function Section4(){
return <ArticleSection id="marrakech-magic-and-medina" label="THE RED CITY" title="Marrakech: Markets, Riads and the Feeling of an Old City">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Marrakech makes a lively start to a holiday. Inside the medina, busy souks open into small squares and workshops where people make lanterns, leather bags and beautiful handwoven goods. It can feel noisy and exciting during the day. Later, a traditional riad courtyard offers a calm place to rest before dinner.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Jemaa el-Fnaa is one of the best-known gathering places in the city. Visit the square at different times and you will notice how the atmosphere changes. You can also enjoy the view of the Koutoubia Mosque from outside, visit Bahia Palace or plan an easy afternoon in the gardens. Some attractions require advance tickets or have changing opening arrangements, so make a practical schedule rather than a list of too many stops.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Two nights in Marrakech give most first-time visitors time for a guided walk and a more relaxed discovery day. If you only have three days in the country, a city stay with a nearby Atlas excursion may feel much less rushed than trying to drive all the way to the Sahara and back. Read our <Link href="/tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">three days in Marrakech itinerary</Link> for ideas.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Small cultural details are part of the experience: a bakery sending out warm bread, the scent of spices near a food stall, or a shopkeeper explaining how a carpet is made. Take breaks, respect people when photographing them and leave room to enjoy the atmosphere.</p>
</ArticleSection>;
}

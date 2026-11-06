import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame, InfoPanel } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section4(){
  return <SectionFrame id={"marrakech-colorful-old-city"} label={"THE RED CITY"} title={"Marrakech: Souks, Gardens and Streets Full of Life"} index={4}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> often gives travelers their first taste of the country&apos;s energy. The old medina is filled with covered lanes, workshop doors, baskets of spices and stalls selling everything from lamps to leather bags. Around Jemaa el-Fnaa, the atmosphere changes during the day: juice sellers and walkers in the afternoon, brighter lights and the sound of food stalls after sunset. It is a place to experience slowly, not just photograph.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Leave time for more than the most famous square. Bahia Palace offers beautiful details and quiet courtyards, while gardens can provide a peaceful break from the busy lanes. The area around the Koutoubia Mosque is a landmark you can recognize from different parts of town; rules for entering religious spaces should always be respected. A local guide can help you understand the history behind the buildings rather than simply moving from one entrance to the next.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For a good first day, mix an organized sightseeing walk with time on your own. Have a relaxed lunch, return to your riad in the afternoon, and head outside again when the light becomes softer. Discover more practical ideas in our <Link href="/best-marrakech-tour-company/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Marrakech tour company guide</Link> and <Link href="/ultimate-guide-what-to-wear-in-marrakech-morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Marrakech clothing guide</Link>.</p>
<ArticlePhoto name="marrakech"/>
<InfoPanel title={"Make Marrakech more enjoyable"}><p>Stay two nights if your schedule allows. You can see a great deal in one day, but a second evening helps you notice the city beyond its most photographed places.</p></InfoPanel>
  </SectionFrame>;
}

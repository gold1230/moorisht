import Link from "next/link";
import { SectionFrame, InfoPanel } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section4(){
return <SectionFrame id="marrakech-city-guide" label="CITY EXPERIENCES" title="Marrakech: The Best Beginning for a Colorful City Break" index={4}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Marrakech is full of movement. Step into the medina and the city becomes a mix of little workshops, busy lanes, old doorways and the smell of grilled food. Later, Jemaa el-Fnaa changes character as evening approaches. It is exciting, but it can also feel intense on the first afternoon.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Give yourself time to enjoy Bahia Palace, traditional courtyards, the Koutoubia area and a few streets of the souk without treating them like a race. Jardin Majorelle is popular and may require planning ahead. A calm rooftop lunch or time in your riad can provide a pleasant break from the bustle.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you arrive from a long flight, keep day one gentle. A guided introduction on the next morning can make the medina less confusing and more enjoyable. For practical clothing advice, read our <Link href="/ultimate-guide-what-to-wear-in-marrakech-morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">guide to what to wear in Marrakech</Link>; for tour planning, see <Link href="/best-marrakech-tour-company/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">how to choose a Marrakech tour company</Link>.</p>
<ArticlePhoto name="marrakech"/>
<InfoPanel title="A better first day">Arrange your transfer, check in, walk one familiar route near your riad and save the major sightseeing for after a good night&apos;s sleep.</InfoPanel>
</SectionFrame>;
}

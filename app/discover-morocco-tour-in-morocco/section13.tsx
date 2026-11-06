import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section13(){
return <ArticleSection id="twelve-to-fourteen-day-morocco-grand-tour" label="LONGER HOLIDAYS" title="12–14-Day Morocco Grand Tour: More Time for Culture, Coast and Desert">
<p className="mt-5 text-[17px] leading-8 text-slate-700">A twelve-to-fourteen-day Morocco tour gives you room to slow down. Instead of spending most nights in a new place, you can stay longer in cities you love and add day trips that fit your interests. It is a good choice for a first visit if you want the north, the imperial cities, the Sahara and some Atlantic coastline without turning every day into a long road transfer. It also suits photographers who want more mornings and evenings in particular landscapes.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">One sample fourteen-day plan starts in Casablanca, visits Rabat and Chefchaouen, continues to Fes and the Middle Atlas, then crosses the Ziz Valley to the dunes near Merzouga. After time in the Sahara, the route can explore Todra Gorge, Dades Valley, Ouarzazate and Ait Ben Haddou before reaching Marrakech. With extra days, Essaouira becomes a more realistic addition, and you can return to Marrakech for a convenient departure.</p>
<ArticleTable headings={tables.duration.headings} rows={tables.duration.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">A longer route also opens the door to hands-on experiences rather than only sightseeing. You might spend a morning learning to cook tagine, visit a weaving cooperative where visits are welcomed, stop at a traditional market or enjoy a guided countryside walk. These experiences are best when arranged with local hosts and appropriate permissions, not treated as a performance for tourists.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you want to compare several trip lengths, our <Link href="/morocco-wonders-tour-the-ultimate-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco Wonders Tour guide</Link> explains different options. Remember that 12 days is not automatically a better holiday than seven: it is useful only when you can balance the extra stops with free time, rest and the right activities for your group.</p>
</ArticleSection>;
}

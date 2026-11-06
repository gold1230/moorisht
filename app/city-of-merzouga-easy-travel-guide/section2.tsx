import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section2(){
return <ArticleSection id="where-is-merzouga" label="LOCATION" title="Where Is Merzouga and Why Do Travelers Go There?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Merzouga lies in southeastern Morocco, close to the dunes of Erg Chebbi and within the wider province of Errachidia. It is a small settlement, not a big city with shopping malls or busy nightlife. That is part of its charm. You come here for landscapes, hospitality and the chance to wake up somewhere very different from an imperial city.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are planning the journey, picture a road trip through changing regions. From Marrakech you may cross the <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard>, stop at a historic kasbah and travel through valleys before reaching the dunes. From Fes the common route heads through the Middle Atlas and the green palm groves of the Ziz Valley. Flying to Errachidia can reduce road time if the flight schedule suits your trip, followed by a transfer through <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> to Merzouga.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The town, nearby Hassilabied and the camps around the dune edge are separate places, so check the exact location of your accommodation. A camp described as &apos;Merzouga&apos; may still need a camel or 4x4 transfer from a village meeting point. Ask where the driver will meet you and what time you need to arrive to catch sunset.</p>
<ArticleTable headings={tables.travelTimes.headings} rows={tables.travelTimes.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">The distances and driving times are only broad planning guides. Rest stops, weather, mountain road conditions and your chosen route can change the journey significantly. Our <Link href="/tour/3-days-from-errachidia-to-merzouga/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Errachidia-to-Merzouga tour</Link> is useful if you prefer to start closer to the dunes.</p>
</ArticleSection>;
}

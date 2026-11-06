import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section23(){
return <ArticleSection id="what-to-pack-for-morocco-trip" label="PACK LIGHT, TRAVEL WELL" title="What to Pack for an Unforgettable Morocco Tour">
<p className="mt-5 text-[17px] leading-8 text-slate-700">You do not need a large suitcase of special clothing for a good trip. Comfortable walking shoes, breathable daytime outfits and a few useful layers are a sensible starting point. Pack for the activities you will actually do: medina walks, mountain roads, desert evenings and perhaps a beach day.</p>
<ArticleTable headings={tables.packing.headings} rows={tables.packing.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">A small day bag makes sightseeing easier. Keep your water bottle, medicine, phone, power bank and a warm layer close at hand while your larger luggage stays in the vehicle or hotel. If you sleep in a desert camp, ask whether large bags remain at a transfer point so you know what to take overnight.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Dress with consideration for local settings without assuming there is one universal rule for every town and activity. Light trousers, loose shirts and a scarf can be convenient options for comfort, sun protection and adapting to different environments. Comfortable shoes matter more than buying a whole new wardrobe.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For a fuller packing checklist, read our <Link href="/ultimate-guide-what-to-wear-in-marrakech-morocco/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">guide to what to wear in Marrakech and the Sahara</Link>.</p>
</ArticleSection>;
}

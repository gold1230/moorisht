import { ArticleSection, ArticleQuote, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section19(){
return <ArticleSection id="private-vs-group-morocco-tours" label="YOUR TRAVEL STYLE" title="Private Morocco Tours or Small Group Tours: Which Is Better?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Both private and small-group travel can be enjoyable. The important difference is how the day is organized. On a private tour, your group usually has its own vehicle and can discuss suitable stops with the driver or guide. On a shared departure, the schedule is set for everyone and may be less flexible, but the experience can be social and sometimes more affordable.</p>
<ArticleTable headings={tables.travelStyles.headings} rows={tables.travelStyles.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Private travel can work especially well for families, couples, photographers or people who need a slower pace. You may want longer meals, extra rest breaks or a different accommodation standard. A small-group tour can be a good choice if you enjoy meeting people and do not mind following an agreed schedule.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ask which services are actually private. A private vehicle does not always mean an exclusive desert camp or private guided city visit. Likewise, a group tour may include a private tent. Check every item in writing so you understand what you will share and what you will not.</p>
<ArticleQuote>A comfortable pace and clear expectations matter more than a fancy label on a tour package.</ArticleQuote>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are deciding between options, tell <Link href="/contact/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Moorish Tour</Link> your group size and travel dates. We can discuss a suitable itinerary and what each package includes.</p>
</ArticleSection>;
}

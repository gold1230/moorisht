import { ArticleSection, ArticleQuote } from "./ArticleElements";
import Link from "next/link";

export default function Section2(){
return <ArticleSection id="what-makes-a-tour-unforgettable" label="WHY TRAVEL MATTERS" title="What Makes a Morocco Tour Truly Unforgettable?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Great travel memories often begin with small details. It could be a cup of mint tea in a courtyard, a friendly conversation with a local craftsperson or the first time you see a landscape that looks completely different from home. Famous monuments are wonderful, but your journey should also give you time to notice ordinary life.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">One advantage of traveling with local planning is understanding how long the roads really take. A map may make two places look close, while a mountain crossing, market visit or lunch stop changes the day. A sensible route gives space for photographs and short walks, not just long hours in a vehicle. That is why we recommend looking at the full itinerary before choosing a tour by price alone.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">At Moorish Tour, the most useful planning questions are simple: What kind of experiences make you happy? Do you prefer history, scenery, food, or time outdoors? Are you comfortable with long drives? Would you like quiet evenings, cultural activities or a more active holiday? A <Link href="/plan-your-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">tailor-made Morocco tour</Link> can be shaped around those answers.</p>
<ArticleQuote>The little moments between destinations often become the stories you remember after the holiday ends.</ArticleQuote>
</ArticleSection>;
}

import { ArticleSection } from "./ArticleElements";
import Link from "next/link";

export default function Section23(){
return <ArticleSection id="final-casablanca-travel-advice" label="YOUR NEXT STEP" title="Start with Casablanca, Then Discover More at Your Own Pace">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Casablanca can be a wonderful first page in a bigger travel story. One morning you may be looking at the Atlantic beside Hassan II Mosque. A few days later you could be walking through the medina of Fes, exploring an old kasbah or watching sunset near the dunes. The journey makes sense when every stop has enough time to enjoy it.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you only have a day or two, give Casablanca your attention and perhaps add Rabat. If you have a full week, consider an organized journey with a clear start and finish. If you have ten days or more, you can enjoy several cities and the Sahara with less pressure.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Browse <Link href="/all-morocco-tours-packages/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Moorish Tour&apos;s travel packages</Link> or <Link href="/contact/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">ask for a personalized itinerary</Link>. Share what matters most to you, and ask for an honest explanation of road time, included services and accommodation. A thoughtful plan is the best start to a trip you will truly remember.</p>
</ArticleSection>;
}

import Link from "next/link";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section23(){
  return <SectionFrame id={"food-and-culture"} label={"LOCAL EXPERIENCES"} title={"Food, Tea, Markets and Cultural Moments Worth Making Time For"} index={23}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The most memorable parts of a tour are often the unscheduled ones. Fresh bread at breakfast, a gentle invitation to sit for tea, or the smell of spices from a small kitchen can stay with you long after a famous monument fades from memory. Give yourself time for these moments, and do not judge a trip only by the number of attractions checked off.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">You can try tagine, couscous, harira and pastries during your journey. Food changes between the north, Fes, the mountains and the south, so asking about a regional favourite is often a good way to begin a conversation. For more ideas, see our <Link href="/moroccan-food-tour-the-tasty-heart-of-morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Moroccan food experiences guide</Link>.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Be respectful when taking photographs, especially around families, artisans and religious places. Ask before photographing individuals, agree on any paid demonstration clearly, and remember that not every workshop or home is a tourist attraction. Good cultural experiences happen when both guests and hosts feel comfortable.</p>
<ArticlePhoto name="courtyard"/>
  </SectionFrame>;
}

import Link from "next/link";
import { SectionFrame, Timeline } from "./ArticleElements";
export default function Section19(){
  return <SectionFrame id={"3-day-marrakech-city-tour"} label={"SHORT CITY BREAK"} title={"Three Days in Marrakech: A Relaxed City and Nearby Nature Plan"} index={19}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you have only three days and want a gentle introduction, choose one base. Marrakech offers enough culture, food and nearby scenery without changing hotels every night. A simple route can give you time for the medina, a guided city visit and a day in the surrounding countryside.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The first day is for arrival and an easy walk. Spend the second on the major sites and a long lunch. On the third, choose a garden, cooking class or nearby mountain outing depending on your departure time. This plan is especially pleasant for first-time visitors, families or anyone arriving after a long flight.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For detailed options, explore our <Link href="/3-days-in-morocco-tours-ideas-and-travel-tips/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">three-day Morocco travel ideas</Link>. The most important thing is not to confuse a relaxing Marrakech city break with a Sahara trip; reaching Merzouga from Marrakech takes much longer than a normal afternoon drive.</p>
<Timeline items={[["Day 1 — Arrive in Marrakech", "Settle into your riad, explore nearby streets and enjoy a relaxed dinner."], ["Day 2 — Discover Marrakech", "Guided medina highlights, gardens, a long lunch and time at Jemaa el-Fnaa."], ["Day 3 — Slow morning or nearby nature", "Choose a garden, cooking experience or short outing before departure."]]}/>
  </SectionFrame>;
}

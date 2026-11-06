import Link from "next/link";
import { SectionFrame, Timeline } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section20(){
  return <SectionFrame id={"3-day-marrakech-to-desert"} label={"FOCUSED SAHARA TRIP"} title={"Three Days from Marrakech to Merzouga: Beautiful but Busy"} index={20}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">It is possible to organize a three-day desert tour from Marrakech, and the changing landscapes can be extraordinary. However, this is a <strong className="font-extrabold text-[#102043]">road-focused adventure with long driving days</strong>, not a holiday with several free afternoons. The usual shape is a first day crossing the High Atlas and staying around Dades, a second day reaching Merzouga and a third returning to Marrakech.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">This choice makes sense if the Sahara is your main priority and you are comfortable with early starts. The reward is a wide variety of scenery in very little time, but the amount of driving should be explained honestly. If you have an extra night, consider using it to make the route feel more comfortable.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Before booking, ask exactly where the first overnight stop is, how much time is spent at the dunes, whether camp transfers and meals are included, and whether the third-day return is direct. Browse available options on our <Link href="/tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco tours page</Link> and compare the written schedule, not only the headline photo.</p>
<Timeline items={[["Day 1 — Marrakech to Dades area", "Cross the High Atlas, visit southern scenery and sleep near the valleys."], ["Day 2 — Dades and Todra to Merzouga", "Travel through gorge landscapes, arrive at dunes and stay in a camp."], ["Day 3 — Merzouga back to Marrakech", "Very long return drive; expect an early start and limited sightseeing time."]]}/>
<ArticlePhoto name="kasbah"/>
  </SectionFrame>;
}

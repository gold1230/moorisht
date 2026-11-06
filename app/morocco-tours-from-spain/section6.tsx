import Link from "next/link";
import { SectionFrame, QuotePanel } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section6(){
  return <SectionFrame id={"tangier-first-stop"} label={"NORTHERN GATEWAY"} title={"Tangier: The Perfect First Stop After Spain"} index={6}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Tangier is an inviting place to begin. It has sea air, old streets, cafés, viewpoints and layers of history shaped by its position between two continents. You might start with a gentle walk through the kasbah, pause for a mint tea, and head toward the medina&apos;s little shops. There is enough to enjoy in one full day, but a night here gives you space to settle in after your crossing.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The city is not just a point on the way to somewhere else. You can explore Cap Spartel, where the Atlantic and Mediterranean regions meet, or visit the famous Hercules Caves if your schedule and interests allow. A guide can help make sense of the city&apos;s rich international past without rushing you through every stop.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For a short break, a <Link href="/morocco-desert-tours-from-tangier/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Tangier-based Morocco tour</Link> may be just right. If you arrive at Tangier Med, build in the road transfer before arranging a city visit. That small planning step makes the day feel much calmer.</p>
<ArticlePhoto name="port"/>
<QuotePanel>A memorable first day often needs no complicated plan: a short walk, a beautiful view, good food and time to look around.</QuotePanel>
  </SectionFrame>;
}

import { ArticleSection, ArticleNote } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import Link from "next/link";

export default function Section5(){
return <ArticleSection id="merzouga-camel-trekking" label="CLASSIC SAHARA EXPERIENCE" title="Camel Trekking in Merzouga: What the Ride Is Really Like">
<p className="mt-5 text-[17px] leading-8 text-slate-700">A camel trek often begins in the late afternoon, when the dunes are cooler and the light grows soft. Your guide helps you approach the animal, shows you how to sit and explains what happens when the camel stands up. That first movement can surprise new riders, but the pace usually becomes steady once you are moving across the sand.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Rides vary by operator. Some last less than an hour, while others are longer or include a sunset stop on a dune. Ask about the duration before you book, especially if you are traveling with children or have back, knee or mobility concerns. Wear comfortable trousers and closed or secure shoes, and keep your phone or camera in a safe bag while the camel stands or kneels.</p>
<ArticlePhoto name="camels" />
<p className="mt-5 text-[17px] leading-8 text-slate-700"><strong className="font-semibold text-slate-900">You do not have to ride a camel to enjoy Merzouga.</strong> Many camps can arrange an appropriate vehicle transfer instead, depending on their location. Choosing not to ride does not mean missing the desert. If you would like to include this activity, read our <Link href="/activity/camel-trekking-in-the-desert/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">camel trekking in the Sahara guide</Link> before reserving.</p>
<ArticleNote title="Choose thoughtfully"><p>Ask how the animals are cared for, how much weight they carry and whether the activity is suitable for your group. A responsible operator should answer calmly and provide an alternative when camel riding is not right for a guest.</p></ArticleNote>
</ArticleSection>;
}

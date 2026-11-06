import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import Link from "next/link";

export default function Section20(){
return <ArticleSection id="traveling-with-children-couples-solo" label="WHO YOU TRAVEL WITH" title="Morocco Tours for Couples, Families and Solo Travelers">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Different travelers remember different moments. Couples might love a peaceful desert sunset and a quiet riad courtyard. Families often enjoy a mix of short cultural visits, open landscapes and hands-on activities. Solo visitors may prefer a guided itinerary that makes transfers simple and gives them opportunities to meet people safely.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For families, avoid trying to spend all day sightseeing after a long drive. Plan comfortable breaks, make sure children have enough water and ask about appropriate activities and sleeping arrangements. Desert temperatures and camp access can matter just as much as the photographs of the tents.</p>
<ArticlePhoto name="local" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Couples should think about whether privacy matters most in the vehicle, at the hotel or at camp. Solo travelers may wish to confirm whether a single-room supplement applies and how arrival transfers are arranged. Good travel planning is not about assuming that one package suits everyone.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Our <Link href="/plan-your-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco trip-planning service</Link> can help organize the journey around the people traveling. If you want to add food activities, nature photography or a quieter route, mention that from the beginning.</p>
</ArticleSection>;
}

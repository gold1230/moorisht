import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import Link from "next/link";

export default function Section10(){
return <ArticleSection id="casablanca-to-marrakech-tours" label="TOWARD THE RED CITY" title="Casablanca to Marrakech: Two Cities, Two Different Travel Experiences">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Casablanca and Marrakech have very different personalities. Casablanca is active, coastal and modern in many neighborhoods. Marrakech is famous for its historic medina, souks, gardens and lively Jemaa el-Fnaa square. Combining them lets you experience both the contemporary rhythm and the traditional atmosphere of the country.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">You may choose a point-to-point transfer followed by one or two nights in Marrakech, or include the Red City on a longer circuit. If your flight leaves from Marrakech, continuing forward can save an unnecessary return transfer. If your flight is from Casablanca, set aside time to travel back instead of assuming it is a short city hop.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Spend the first Marrakech afternoon settling into your riad and exploring at a relaxed pace. A following day with a local guide can include historic sites and artisan markets. Keep extra time for food, rest and unexpected discoveries. Tourists sometimes underestimate how much walking a medina visit involves.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If the Sahara is part of your plan, remember that a desert tour from Marrakech is itself a multi-day road trip. Consider our <Link href="/marrakech-desert-tours/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech desert tours</Link> or the <Link href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech-to-Merzouga three-day tour</Link> separately rather than expecting the dunes to fit into an easy one-day excursion.</p>
<ArticlePhoto name="atlas" />
</ArticleSection>;
}

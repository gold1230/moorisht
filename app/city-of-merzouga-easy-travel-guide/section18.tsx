import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section18(){
return <ArticleSection id="merzouga-camp-types-budget" label="COMFORT & COST" title="Merzouga Accommodation: Hotels, Camps and Budget Choices">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Before you book, think about how you want the evening to feel. Some travelers love sleeping in a traditional camp where dinner and conversation are the main events. Others prefer a hotel close to the dunes with easy road access, a private room and the option to visit the sand without sleeping there. Neither choice is wrong.</p>
<ArticleTable headings={tables.stays.headings} rows={tables.stays.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Tour prices depend on travel dates, room standard, camp type, transport, meals and activities. Online starting prices can be misleading because they may refer to a shared departure, a different season or a room category that is no longer available. Rather than promising one fixed amount, we recommend requesting a written quote for your actual dates and number of travelers.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Before paying, confirm whether the desert stay includes camel trekking, a 4×4 transfer, dinner, breakfast, local taxes, private bathrooms and cancellation rules. Our <Link href="/top-5-best-merzouga-luxury-desert-camps/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">luxury camp comparison</Link> can help you prepare the right questions. You can also <Link href="/contact/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">contact Moorish Tour</Link> to discuss your preferred comfort level. If you are combining cities and desert, our <Link href="/morocco-wonders-tour-the-ultimate-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco Wonders Tour guide</Link> has longer route ideas.</p>
</ArticleSection>;
}

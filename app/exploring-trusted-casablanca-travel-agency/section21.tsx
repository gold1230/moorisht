import { ArticleSection, ArticleQuote, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section21(){
return <ArticleSection id="how-to-book-casablanca-tour" label="PLAN WITH MOORISH TOUR" title="How to Book a Casablanca Tour with Moorish Tour">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Start with a few details: your arrival date, airport, number of travelers, preferred room type and how many days you have. Then choose two or three priorities. Maybe it is the Hassan II Mosque, a full day in Fes, an overnight beside the Sahara dunes or an easier family-friendly road trip. A clear request helps an organizer design a useful plan.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Next, review the suggested route carefully. Look at each overnight destination and the order of stops. Ask which city guides are included, what meals are provided and whether the airport transfer is part of the package. When the quote arrives, check the payment schedule and cancellation conditions before making a decision.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Moorish Tour can be contacted through the <Link href="/contact/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">contact page</Link> or its <Link href="/plan-your-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">custom tour planning page</Link>. You can also browse the <Link href="/all-morocco-tours-packages/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">all Morocco tours packages</Link> page before writing if you want to compare ideas. This article is meant to help you ask better questions, not to replace a final personalized quotation.</p>
<ArticleTable headings={tables.bookingChecklist.headings} rows={tables.bookingChecklist.rows} />
<ArticleQuote>The most comfortable tour is not always the one that visits the most places. It is the one that matches the travelers and the time they have.</ArticleQuote>
</ArticleSection>;
}

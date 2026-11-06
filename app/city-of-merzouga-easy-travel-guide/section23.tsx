import { ArticleSection } from "./ArticleElements";
import Link from "next/link";
import { faqs } from "./faqData";

export default function Section23(){
return <ArticleSection id="merzouga-guide-faq" label="COMMON QUESTIONS" title="Merzouga FAQs: Clear Answers Before You Go">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Still deciding how many days to stay or what kind of camp to book? These short answers cover the questions travelers ask most when planning their first Merzouga visit. The details of any specific tour—especially meals, camp facilities and transfers—should always be confirmed before booking.</p>
<div className="mt-8 space-y-3">{faqs.map((faq,i) => <details key={faq.question} className="group rounded-2xl border border-slate-200 p-5"><summary className="cursor-pointer list-none font-bold text-[#102043]">{i+1}. {faq.question}<span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span></summary><p className="mt-4 text-base leading-8 text-slate-700">{faq.answer}</p></details>)}</div>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you need advice for your particular dates, tell us whether you are arriving from Marrakech, Fes or Errachidia and how many nights you can spend near the dunes. We can help you choose a practical <Link href="/tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Merzouga desert tour</Link> that fits your plans.</p>
</ArticleSection>;
}

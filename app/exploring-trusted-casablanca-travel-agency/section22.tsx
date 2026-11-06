import { ArticleSection } from "./ArticleElements";
import { faqs } from "./faqData";

export default function Section22(){
return <ArticleSection id="casablanca-travel-agency-faqs" label="FREQUENTLY ASKED" title="Frequently Asked Questions About Casablanca Travel Agencies">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Travelers often ask about transfers, guides, trip lengths and the best route to the desert. The answers below explain the main choices in simple language. Each tour still depends on your travel dates, accommodation needs and the services you confirm in writing.</p>
<div className="mt-8 space-y-3">{faqs.map((faq,i) => <details key={faq.question} className="group rounded-2xl border border-slate-200 p-5"><summary className="cursor-pointer list-none font-bold text-[#102043]">{i+1}. {faq.question}<span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span></summary><p className="mt-4 text-base leading-8 text-slate-700">{faq.answer}</p></details>)}</div>
</ArticleSection>;
}

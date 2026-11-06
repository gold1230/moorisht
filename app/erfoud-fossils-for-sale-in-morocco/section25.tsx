import {SectionFrame} from "./ArticleElements";
import {faqs} from "./faqData";
export default function Section25(){return <SectionFrame id="erfoud-fossils-for-sale-frequently-asked-questions" index={25} label="FREQUENTLY ASKED QUESTIONS" title="Erfoud Fossils for Sale: Frequently Asked Questions">
<p className="mt-5 text-[17px] leading-8 text-slate-700">These practical answers will help you visit the workshops with confidence and choose the right kind of fossil experience.</p><div className="mt-8 space-y-3">{faqs.map((item,i)=><details key={i} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-amber-300 open:bg-[#fffaf4]"><summary className="cursor-pointer font-bold text-[#102043] marker:text-amber-700">{item.question}</summary><p className="mt-4 text-base leading-8 text-slate-700">{item.answer}</p></details>)}</div>
</SectionFrame>;}

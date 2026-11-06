import {SectionFrame} from "./ArticleElements";
import {faqs} from "./faqData";
export default function Section28(){return <SectionFrame id="luxury-travel-morocco-faq" index={28} label="FREQUENTLY ASKED QUESTIONS" title="Luxury Travel in Morocco: Common Questions Answered">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Planning a luxury trip raises sensible questions about comfort, routes and value. The answers below explain what to expect in general. The final details always depend on your selected hotel, desert camp and confirmed booking.</p>
<div className="mt-7 space-y-3">{faqs.map(({question,answer})=><details key={question} className="group rounded-xl border border-slate-200 bg-white open:border-amber-300 open:bg-[#fffaf4]"><summary className="cursor-pointer list-none px-5 py-4 text-[16px] font-extrabold text-[#102043] marker:hidden">{question} <span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span></summary><p className="px-5 pb-5 text-[16px] leading-8 text-slate-700">{answer}</p></details>)}</div>
</SectionFrame>;}

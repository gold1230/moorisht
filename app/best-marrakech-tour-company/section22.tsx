

import { SectionFrame } from "./ArticleElements";


import {faqs} from "./faqData";
export default function Section22(){return <SectionFrame id="marrakech-tour-company-faq" index={22} label="FAST ANSWERS" title="Frequently Asked Questions About Marrakech Tour Companies">
<p className="mt-5 text-[17px] leading-8 text-slate-700">These are the practical questions travelers often ask before booking a tour from Marrakech. The answers explain general planning choices; the final details always depend on your travel dates and the services listed in your quotation.</p>
<div className="mt-7 space-y-3">{faqs.map(({question,answer})=><details key={question} className="group rounded-xl border border-slate-200 bg-white open:border-amber-300 open:bg-[#fffaf4]"><summary className="cursor-pointer list-none px-5 py-4 text-[16px] font-extrabold text-[#102043] marker:hidden">{question} <span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span></summary><p className="px-5 pb-5 text-[16px] leading-8 text-slate-700">{answer}</p></details>)}</div>
</SectionFrame>;}

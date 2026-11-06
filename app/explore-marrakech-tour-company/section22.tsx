import { SectionFrame } from "./ArticleElements";
import { faqs } from "./faqData";

export default function Section22(){return <SectionFrame id="marrakech-tour-company-frequently-asked-questions" index={22} label="QUICK ANSWERS" title="Frequently Asked Questions About Marrakech Tour Companies">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Here are clear answers to the questions visitors often ask when choosing a local guide, city experience or Sahara holiday. Exact services can vary, so confirm the details of the package before paying.</p>
<div className="mt-7 space-y-3">{faqs.map(({question,answer})=><details key={question} className="group rounded-xl border border-slate-200 bg-white open:border-amber-300 open:bg-[#fffaf4]"><summary className="cursor-pointer list-none px-5 py-4 text-[16px] font-extrabold text-[#102043] marker:hidden">{question} <span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span></summary><p className="px-5 pb-5 text-[16px] leading-8 text-slate-700">{answer}</p></details>)}</div>
</SectionFrame>;}

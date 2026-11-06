import { ArticleSection } from "./ArticleElements";
import { faqs } from "./faqData";

export default function Section22(){
return <ArticleSection id="discover-morocco-tour-frequently-asked-questions" label="TRAVEL QUESTIONS" title="Discover Morocco Tour FAQs: Clear Answers Before You Travel">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Whether you have three days or two weeks, a little research makes booking easier. These answers cover the questions travelers most often ask when deciding how to explore the imperial cities, the Atlas Mountains and the Sahara. Every tour is different, so treat the answers as general travel guidance and confirm exact inclusions with the operator before booking.</p>
<div className="mt-8 space-y-3">{faqs.map((faq,i) => <details key={faq.question} className="group rounded-2xl border border-slate-200 p-5"><summary className="cursor-pointer list-none font-bold text-[#102043]">{i+1}. {faq.question}<span className="float-right text-amber-700 group-open:rotate-45">+</span></summary><p className="mt-4 text-base leading-8 text-slate-700">{faq.answer}</p></details>)}</div>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If your question is not covered here, send it with your travel dates and preferred starting city. We can help you compare a short desert tour with a longer journey and discuss what is realistic for your group.</p>
</ArticleSection>;
}

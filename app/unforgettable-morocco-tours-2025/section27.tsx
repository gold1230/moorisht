import { ArticleSection } from "./ArticleElements";
import Link from "next/link";
import { faqs } from "./faqData";

export default function Section27(){
return <ArticleSection id="unforgettable-morocco-tour-faqs" label="YOUR QUESTIONS ANSWERED" title="Frequently Asked Questions About Morocco Tours">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Planning can feel overwhelming when you see so many tour routes online. The answers below cover the questions that often matter most: how long to stay, what a desert trip involves, when to travel and how to choose a package that matches your expectations.</p>
<div className="mt-8 space-y-3">{faqs.map((faq,i) => <details key={faq.question} className="group rounded-2xl border border-slate-200 p-5"><summary className="cursor-pointer list-none font-bold text-[#102043]">{i+1}. {faq.question}<span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span></summary><p className="mt-4 text-base leading-8 text-slate-700">{faq.answer}</p></details>)}</div>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are still unsure where to start, the simplest answer is to tell us your arrival city, travel dates and the experiences you care about most. We can use that information to help you explore <Link href="/all-morocco-tours-packages/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Moorish Tour packages</Link> that make practical sense for your holiday.</p>
</ArticleSection>;
}

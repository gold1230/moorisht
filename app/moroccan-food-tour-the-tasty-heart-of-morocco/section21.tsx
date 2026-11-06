import { ArticleSection } from "./ArticleElements";
import { faqs } from "./faqData";

export default function Section21() {
 return (
<ArticleSection id="moroccan-food-tour-faqs" label="FREQUENT QUESTIONS" title="Moroccan Food Tour FAQs">
<p className="mt-5 text-lg leading-8 text-gray-700">These are some of the questions visitors ask before choosing a food walk, a cooking class or a longer culinary holiday in Morocco. The exact details depend on the city and tour you select, so confirm inclusions and dietary arrangements with your operator.</p>
<div className="mt-7 space-y-3">{faqs.map(({question,answer},index)=><details key={question} className="group rounded-xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer list-none pr-6 text-lg font-bold text-[#102043]">{index+1}. {question}<span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span></summary><p className="mt-3 text-base leading-8 text-gray-700">{answer}</p></details>)}</div>
</ArticleSection>
 );
}

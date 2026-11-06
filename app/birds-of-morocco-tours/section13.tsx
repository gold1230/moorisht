import { faqs } from "./faqData";

/** Answer-first FAQ section, rendered on the server without client JavaScript. */
export default function Section13() {
  return (
    <section id="birds-of-morocco-tours-frequently-asked-questions" className="mt-14 scroll-mt-28 border-t border-gray-200 pt-12" aria-labelledby="birding-faq-heading">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">Practical birding answers</p>
      <h2 id="birding-faq-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl">Birds of Morocco Tours: Frequently Asked Questions</h2>
      <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />
      <p className="mt-6 text-[17px] leading-8 text-slate-700">These questions cover timing, habitats, local guiding, wildlife photography and the realistic limits of sightings in nature. They can help you prepare a better target list before you book a private birding holiday.</p>
      <div className="mt-8 space-y-3">
        {faqs.map((item) => (
          <details key={item.question} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-amber-300 open:bg-[#fffaf4]">
            <summary className="cursor-pointer pr-4 text-base font-bold leading-7 text-[#102043] marker:text-amber-700">{item.question}</summary>
            <p className="mt-3 text-[16px] leading-8 text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

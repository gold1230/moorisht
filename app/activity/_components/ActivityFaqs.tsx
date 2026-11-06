import { ActivityIcon } from "./ActivityIcon";

export type ActivityFaqItem = { question: string; answer: string };

export function ActivityFaqs({ items, heading = "Good to know before you go", subtitle = "Answers to the questions travelers ask most often." }: { items: ActivityFaqItem[]; heading?: string; subtitle?: string }) {
  return (
    <section id="questions" className="scroll-mt-28 bg-[#f8f5ef] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.82fr_1.18fr] md:px-10">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#795224]">
            <ActivityIcon name="help" className="h-4 w-4"/> Questions & answers
          </span>
          <h2 className="max-w-md font-serif text-4xl leading-[1.12] tracking-tight text-[#17283e] md:text-5xl">{heading}</h2>
          <p className="mt-5 max-w-sm text-[16px] leading-8 text-[#5b6471]">{subtitle}</p>
        </div>
        <div className="space-y-3">
          {items.map(({question, answer}, index) => (
            <details key={question} className="group overflow-hidden rounded-2xl border border-[#eae5da] bg-white open:border-[#ddc19b] open:shadow-[0_10px_30px_rgba(32,37,42,.05)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-[16px] font-semibold text-[#17283e] marker:hidden [&::-webkit-details-marker]:hidden">
                <span><span className="mr-3 text-xs font-bold text-[#815629]">{String(index + 1).padStart(2,"0")}</span>{question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f0e7] text-[#6b5b47] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="px-6 pb-6 pl-[61px] text-[15px] leading-7 text-[#606975]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

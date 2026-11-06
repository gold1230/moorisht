import Link from "next/link";
import { ActivityIcon } from "./ActivityIcon";

export function ActivityCta({ label = "MAKE IT YOUR MOROCCO", title = "Your next adventure starts here.", description = "Tell us your dates and where you are traveling. We can help you choose the experience that fits your plans.", primaryLabel = "Plan your adventure" }: { label?: string; title?: string; description?: string; primaryLabel?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#152940] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute -right-12 -top-48 h-[390px] w-[390px] rounded-full border border-white/10"/>
      <div className="pointer-events-none absolute -right-4 -top-36 h-[320px] w-[320px] rounded-full border border-white/10"/>
      <div className="pointer-events-none absolute -bottom-44 left-0 h-[330px] w-[330px] rounded-full bg-[#b98b57]/15 blur-3xl"/>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-10">
        <div>
          <p className="mb-5 text-[11px] font-extrabold tracking-[0.25em] text-[#f2c690]">{label}</p>
          <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#d5dde1]">{description}</p>
        </div>
        <Link href="/plan-your-morocco-tour/" className="inline-flex shrink-0 items-center gap-4 rounded-full bg-[#e9bd81] px-7 py-4 text-sm font-extrabold text-[#17283e] transition-all hover:-translate-y-1 hover:bg-[#f4d5a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          {primaryLabel} <ActivityIcon name="arrow-up-right" className="h-5 w-5"/>
        </Link>
      </div>
    </section>
  );
}

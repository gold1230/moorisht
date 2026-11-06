import type { ReactNode } from "react";

import {
  LightBulbIcon,
} from "@heroicons/react/24/outline";

type BlogOverviewProps = {
  title?: string;
  children: ReactNode;
  tip?: ReactNode;
  tipTitle?: string;
};

export default function BlogOverview({
  title = "Overview",
  children,
  tip,
  tipTitle = "Local Tip",
}: BlogOverviewProps) {
  return (
    <section
      id="overview"
      className="scroll-mt-32"
      aria-labelledby="blog-overview-title"
    >
      <h2
        id="blog-overview-title"
        className="font-serif text-3xl font-bold tracking-tight text-[#13294b] sm:text-4xl"
      >
        {title}
      </h2>

      <div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-700 [&_a]:font-semibold [&_a]:text-amber-700 [&_strong]:font-bold [&_strong]:text-slate-900">
        {children}
      </div>

      {tip ? (
        <aside className="mt-7 flex gap-4 rounded-xl border-l-4 border-amber-600 bg-[#fff8ed] p-5">
          <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-amber-700 shadow-sm">
            <LightBulbIcon className="h-5 w-5" />
          </span>

          <div>
            <p className="font-bold text-slate-900">{tipTitle}</p>
            <div className="mt-1 text-sm leading-6 text-slate-700">
              {tip}
            </div>
          </div>
        </aside>
      ) : null}
    </section>
  );
}

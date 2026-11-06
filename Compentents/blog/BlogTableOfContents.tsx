import {
  Bars3BottomLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import type { BlogTocItem } from "./types";

type BlogTableOfContentsProps = {
  items: BlogTocItem[];
  title?: string;
};

export default function BlogTableOfContents({
  items,
  title = "Table of Contents",
}: BlogTableOfContentsProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label={title}
      className="rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 shadow-sm sm:p-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-amber-700 shadow-sm ring-1 ring-amber-100">
          <Bars3BottomLeftIcon className="h-5 w-5" />
        </span>

        <h2 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
          {title}
        </h2>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-amber-700 hover:shadow-sm"
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-100 text-xs font-black text-amber-700">
              {index + 1}
            </span>

            <span className="line-clamp-2">{item.label}</span>

            <ChevronRightIcon className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-amber-700" />
          </a>
        ))}
      </div>
    </nav>
  );
}

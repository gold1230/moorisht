import type { BlogSectionData } from "./types";

type BlogContentSectionProps = BlogSectionData & {
  number?: number;
};

export default function BlogContentSection({
  id,
  title,
  eyebrow,
  content,
  callout,
  number,
}: BlogContentSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32"
      aria-labelledby={`${id}-title`}
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-amber-700">
          {eyebrow}
        </p>
      ) : null}

      <div className="flex items-start gap-3">
        {number ? (
          <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-700 text-sm font-black text-white shadow-sm">
            {number}
          </span>
        ) : null}

        <h2
          id={`${id}-title`}
          className="font-serif text-2xl font-bold tracking-tight text-[#13294b] sm:text-3xl"
        >
          {title}
        </h2>
      </div>

      <div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-700 [&_a]:font-semibold [&_a]:text-amber-700 [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:bg-[#fffaf3] [&_blockquote]:p-5 [&_blockquote]:italic [&_li]:mb-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:font-bold [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:pl-6">
        {content}
      </div>

      {callout ? (
        <aside className="mt-6 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <div className="flex gap-3">
            {callout.icon ? (
              <div className="shrink-0 text-amber-700">
                {callout.icon}
              </div>
            ) : null}

            <div>
              {callout.title ? (
                <h3 className="font-bold text-slate-900">
                  {callout.title}
                </h3>
              ) : null}

              <div className="mt-1 text-sm leading-6 text-slate-700">
                {callout.text}
              </div>
            </div>
          </div>
        </aside>
      ) : null}
    </section>
  );
}

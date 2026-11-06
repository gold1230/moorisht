import {
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import type { BlogFaqItem } from "./types";

type BlogFAQsProps = {
  items: BlogFaqItem[];
  title?: string;
  description?: string;
  includeSchema?: boolean;
};

export default function BlogFAQs({
  items,
  title = "Frequently Asked Questions",
  description,
  includeSchema = true,
}: BlogFAQsProps) {
  if (!items.length) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faqs"
      className="scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
      aria-labelledby="blog-faq-title"
    >
      {includeSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      ) : null}

      <div className="text-center">
        <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-amber-100 text-amber-700">
          <ChatBubbleLeftRightIcon className="h-5 w-5" />
        </span>

        <h2
          id="blog-faq-title"
          className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#13294b] sm:text-3xl"
        >
          {title}
        </h2>

        {description ? (
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        ) : null}
      </div>

      <div className="mt-7 divide-y divide-slate-200">
        {items.map((item, index) => (
          <details
            key={`${item.question}-${index}`}
            className="group py-4"
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 font-bold text-slate-900 marker:hidden">
              <span className="flex-1">{item.question}</span>

              <ChevronDownIcon className="h-5 w-5 shrink-0 text-slate-600 transition group-open:rotate-180 group-open:text-amber-700" />
            </summary>

            <p className="mt-3 pr-8 text-sm leading-7 text-slate-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

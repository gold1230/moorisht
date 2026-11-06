import type { BlogInfoCard } from "./types";

type BlogInfoGridProps = {
  title?: string;
  cards: BlogInfoCard[];
};

export default function BlogInfoGrid({
  title,
  cards,
}: BlogInfoGridProps) {
  if (!cards.length) return null;

  return (
    <section className="scroll-mt-32">
      {title ? (
        <h2 className="font-serif text-2xl font-bold tracking-tight text-[#13294b] sm:text-3xl">
          {title}
        </h2>
      ) : null}

      <div className="mt-5 grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <article
            key={`${card.title}-${index}`}
            className="relative p-5 sm:p-6 [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r border-slate-200"
          >
            {card.icon ? (
              <div className="mb-4 text-amber-700">
                {card.icon}
              </div>
            ) : null}

            <h3 className="text-base font-extrabold text-slate-900">
              {card.title}
            </h3>

            {card.subtitle ? (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {card.subtitle}
              </p>
            ) : null}

            {card.value ? (
              <p className="mt-3 text-sm font-extrabold text-amber-700">
                {card.value}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

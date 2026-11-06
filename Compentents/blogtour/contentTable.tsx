import Link from "next/link";

export type TableOfContentItem = {
  label: string;
  href: string;
};

type BlogTableOfContentsProps = {
  title?: string;
  description?: string;
  items: readonly TableOfContentItem[];
};

export default function BlogTableOfContents({
  title = "Table of Contents",
  description = "Jump directly to the part of this guide you want to read.",
  items,
}: BlogTableOfContentsProps) {
  return (
    <section
      className="rounded-[22px]  border border-[#eadfce] bg-[#fffaf4] mb-7 px-6 py-8 sm:px-9 sm:py-10"
      aria-labelledby="table-of-contents-title"
    >
      <h2
        id="table-of-contents-title"
        className="text-3xl font-bold tracking-tight text-[#102043]"
      >
        {title}
      </h2>

      <p className="mt-3 text-lg leading-7 text-slate-700">
        {description}
      </p>

      <nav
        aria-label="Article table of contents"
        className="mt-8 grid gap-x-14 gap-y-5 md:grid-cols-2"
      >
        {items.map((item , idex) => (
          
             
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-4"
          >
            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-amber-700
                text-base
                font-bold
                text-white
                transition
                group-hover:bg-amber-800
              "
            >
              {idex + 1}
            </span>

            <span
              className="
                text-lg
                font-semibold
                leading-6
                text-[#102043]
                transition
                group-hover:text-amber-700
              "
            >
              {item.label
            
              }
            </span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
import Link from "next/link";

interface Props {
  title: string;
}

export default function Breadcrumb({ title }: Props) {
  return (
    <section className="bg-[#151515] border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-5">
        <nav className="flex items-center text-sm">
          <Link
            href="/"
            className="text-gray-300 hover:text-orange-500"
          >
            Home
          </Link>

          <span className="mx-3 text-gray-500">/</span>

          <Link
            href="/tour"
            className="text-gray-300 hover:text-orange-500"
          >
            Tours
          </Link>

          <span className="mx-3 text-gray-500">/</span>

          <span className="font-semibold text-[#D89A2B]">
            {title}
          </span>
        </nav>
      </div>
    </section>
  );
}
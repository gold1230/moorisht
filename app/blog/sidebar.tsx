import Link from "next/link";
import { FolderIcon } from "@heroicons/react/24/outline";
import { getBlogTopics } from "@/data/blogTopics";

export default function BrowseByTopic() {
  const topics = getBlogTopics();

  return (
    <aside
      className="rounded-2xl border border-gray-200 bg-[#fffdf9] p-7 sm:p-8"
      aria-labelledby="browse-by-topic-title"
    >
      <h2
        id="browse-by-topic-title"
        className="text-2xl font-bold text-slate-950"
      >
        Browse by Topic
      </h2>

      <p className="mt-3 max-w-sm text-base leading-7 text-gray-600">
        Explore Morocco travel guides, destination information, desert tour tips
        and practical advice for planning your trip.
      </p>

      <nav className="mt-8" aria-label="Blog topics">
        <ul className="space-y-1">
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link
                href={topic.href}
                className="group flex items-center gap-4 rounded-xl px-2 py-3.5 transition hover:bg-amber-50"
              >
                <FolderIcon
                  className="h-4 w-4 shrink-0 text-amber-700"
                  aria-hidden="true"
                />

                <span className="min-w-0 flex-1 text-sm font-semibold text-[#102043] transition group-hover:text-amber-700">
                  {topic.label}
                </span>

                <span className="shrink-0 text-sm text-gray-600">
                  ({topic.count})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function getBlogImage(
  image: string,
  size: "thumb" | "card" | "hero"
) {
  return image.startsWith("/") ? image : `/blog/${size}/${image}`;
}

type Post = {
  id:number,
  title: string;
  image: string;
  slug: string;
  description?: string;
  category?: string;
  
};

type BlogSearchProps = {
  posts: Post[];
};

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [search, setSearch] = useState("");

  const suggestions = useMemo(() => {
   
    const query = search.trim().toLowerCase();

    if (!query) return [];

    return posts
      .filter((post) => {
        const searchableText = `
          ${post.title}
          ${post.description || ""}
          ${post.category || ""}
        `.toLowerCase();

        return searchableText.includes(query);
      })
      .slice(0, 5);
  }, [search, posts]);


  return (
    <div className="relative mx-auto w-full max-w-2xl my-6">
      {/* Search box */}
      <div className="flex h-12 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition focus-within:border-amber-600 focus-within:ring-2 focus-within:ring-amber-600/10">
        <div className="flex items-center pl-4">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-600"
            aria-hidden="true"
          />
        </div>

        <label htmlFor="blog-search" className="sr-only">
          Search Morocco travel guides
        </label>

        <input
          id="blog-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Morocco travel guides..."
          className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-800 outline-none placeholder:text-gray-600"
        />
        <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              aria-label="Search blog"
              className="flex h-12 w-12 shrink-0 items-center justify-center bg-amber-700 text-white transition hover:bg-amber-800"
            >
              <MagnifyingGlassIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
              </button>

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="px-4 text-xs font-medium text-gray-500 transition hover:text-amber-700"
          >
            Clear
          </button>
        )}
      </div>

      {/* Suggestions */}
      {search.trim() !== "" && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-1000 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
          {suggestions.length > 0 ? (
            <div className="py-2">
              <p className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                Suggested guides
              </p>

              {suggestions.map((post) => (
                <Link
                  key={post.id}
                  href={`/${post.slug}`}
                  onClick={() => setSearch("")}
                  className="block border-t border-gray-100 px-4 py-3 transition hover:bg-amber-50"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-slate-800 transition group-hover:text-amber-700">
                        {post.title}
                      </h3>

                      {post.description && (
                        <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                          {post.description}
                        </p>
                      )}

                      {post.category && (
                        <span className="mt-1.5 inline-block text-[12px] font-medium bg-amber-700/70 rounded-2xl text-white py-0.5 px-2">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="relative h-[64px] w-[82px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={getBlogImage(post.image,"thumb")}
                        alt={post.title}
                        fill
                        sizes="82px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <span className="shrink-0 text-sm text-amber-700">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm font-medium text-slate-700">
                No guides found
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Try searching for Marrakech, Sahara, Merzouga, desert tours,
                itineraries or travel tips.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
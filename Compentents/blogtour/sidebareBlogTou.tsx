"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Image, {
  StaticImageData,
} from "next/image";

import Link from "next/link";

import { getBlogs } from "@/data/blogFilter";

import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  HeartIcon,
  UsersIcon,
  ClockIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

/* =========================================================
   TYPES
========================================================= */

type BlogFilterOptions = Parameters<typeof getBlogs>[0];

export type BlogSidebarCategory = {
  name: string;
  href: string;
  filter: BlogFilterOptions;
};

type BlogSidebarProps = {
  categories?: BlogSidebarCategory[];

  ctaImage:
    | StaticImageData
    | string;

  ctaImageAlt?: string;

  ctaHref?: string;

  recentLimit?: number;

  searchLimit?: number;
};

/* =========================================================
   DEFAULT CATEGORIES

   Counts are generated from blogs.json using getBlogs().
========================================================= */
import { getBlogTopics } from "@/data/blogTopics";
 const topics = getBlogTopics();


/* =========================================================
   COMPONENT
========================================================= */

export default function BlogSidebar({

  ctaImage,

  ctaImageAlt =
    "Travelers planning a customized Morocco tour",

  ctaHref =
    "/plan-your-morocco-tour",

  recentLimit = 4,

  searchLimit = 6,
}: BlogSidebarProps) {

  /* =======================================================
     BLOG DATA

     All blog data now comes from blogs.json through getBlogs().
  ======================================================= */

  const allPosts = useMemo(
    () =>
      getBlogs({
        sortBy: "newest",
      }),
    []
  );

  const recentPosts = useMemo(
    () =>
      getBlogs({
        sortBy: "newest",
        limit: recentLimit,
      }),
    [recentLimit]
  );



  /* =======================================================
     SEARCH STATE
  ======================================================= */

  const [query, setQuery] =
    useState("");

  const [searchOpen, setSearchOpen] =
    useState(false);

  const searchRef =
    useRef<HTMLDivElement>(null);

  /* =======================================================
     LIVE SEARCH

     Runs immediately while typing
  ======================================================= */

  const searchResults =
    useMemo(() => {

      const value =
        query
          .trim()
          .toLowerCase();

      if (!value) {
        return [];
      }

      return allPosts
        .filter((post) => {

          const searchableText = `
            ${post.title}
            ${post.category ?? ""}
            ${post.description ?? ""}
            ${post.date}
          `.toLowerCase();

          return searchableText.includes(
            value
          );
        })
        .slice(0, searchLimit);

    }, [query, allPosts, searchLimit]);

  /* =======================================================
     CLOSE SEARCH WHEN CLICKING OUTSIDE
  ======================================================= */

  useEffect(() => {

    const handleOutsideClick = (
      event: MouseEvent
    ) => {

      if (
        searchRef.current &&
        !searchRef.current.contains(
          event.target as Node
        )
      ) {
        setSearchOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

    };

  }, []);

  /* =======================================================
     CLOSE SEARCH WITH ESCAPE
  ======================================================= */

  useEffect(() => {

    const handleEscape = (
      event: KeyboardEvent
    ) => {

      if (
        event.key === "Escape"
      ) {
        setSearchOpen(false);
      }

    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, []);

  return (
    <aside
      className="
        w-full
        self-start
        lg:sticky
        lg:top-10
      "
      aria-label="Blog sidebar"
    >

      {/* =====================================================
          MAIN SIDEBAR CARD
      ===================================================== */}

      <div
        className="
          rounded-2xl
          border
          border-[#eee8df]
          bg-white
          shadow-sm
        "
      >

        {/* ===================================================
            LIVE BLOG SEARCH
        =================================================== */}

        <div
          ref={searchRef}
          className="
            relative
            p-5
          "
        >

          <h2
            className="
              text-xl
              font-bold
              text-[#102043]
            "
          >
            Search the Blog
          </h2>

          <div
            className="
              relative
              mt-4
            "
          >

            {/* =============================================
                SEARCH FIELD
            ============================================= */}

            <div
              className={`
                flex
                min-h-[50px]
                items-center
                overflow-hidden
                rounded-lg
                border
                bg-white
                transition

                ${
                  searchOpen
                    ? "border-amber-500 ring-2 ring-amber-500/10"
                    : "border-gray-200"
                }
              `}
            >

              <label
                htmlFor="blog-sidebar-search"
                className="sr-only"
              >
                Search blog articles
              </label>

              <input
                id="blog-sidebar-search"
                name="blog-search"
                type="search"

                value={query}

                onFocus={() => {
                  setSearchOpen(true);
                }}

                onChange={(event) => {

                  setQuery(
                    event.target.value
                  );

                  setSearchOpen(true);

                }}

                placeholder="Search articles..."

                autoComplete="off"

                aria-label="Search blog articles"

                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-4
                  py-3
                  text-base
                  text-slate-900
                  outline-none
                  placeholder:text-gray-600

                  [&::-webkit-search-cancel-button]:appearance-none
                  [&::-webkit-search-decoration]:appearance-none
                  [&::-webkit-search-results-button]:appearance-none
                  [&::-webkit-search-results-decoration]:appearance-none
                "
              />

              {/* ===========================================
                  CLEAR
              =========================================== */}

              {query && (
                <button
                  type="button"

                  onClick={() => {
                    setQuery("");
                    setSearchOpen(false);
                  }}

                  className="
                    mr-1
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-gray-500
                    transition
                    hover:bg-gray-100
                    hover:text-slate-900
                  "

                  aria-label="Clear search"
                >
                  <XMarkIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              )}

              {/* ===========================================
                  SEARCH BUTTON
              =========================================== */}

              <button
                type="button"

                onClick={() => {
                  setSearchOpen(true);
                }}

                className="
                  flex
                  h-[50px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  bg-amber-700
                  text-white
                  transition
                  hover:bg-amber-800
                "

                aria-label="Search blog"
              >
                <MagnifyingGlassIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </button>

            </div>

            {/* =============================================
                LIVE SEARCH RESULTS

                Opens immediately on typing
            ============================================= */}

            {searchOpen &&
              query.trim() && (

              <div
                id="blog-search-results"

                className="
                  absolute
                  left-0
                  right-0
                  top-[calc(100%+8px)]
                  z-[80]
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  shadow-xl
                "
              >

                {/* =========================================
                    RESULTS FOUND
                ========================================= */}

                {searchResults.length >
                0 ? (

                  <>
                    {/* Search result heading */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-100
                        px-4
                        py-3
                      "
                    >

                      <p
                        className="
                          text-sm
                          font-bold
                          text-slate-900
                        "
                      >
                        Search Results
                      </p>

                      <span
                        className="
                          text-sm
                          text-gray-500
                        "
                      >
                        {
                          searchResults.length
                        }{" "}
                        {searchResults.length ===
                        1
                          ? "article"
                          : "articles"}
                      </span>

                    </div>

                    {/* Results */}

                    <div
                      className="
                        max-h-[360px]
                        overflow-y-auto
                      "
                    >

                      {searchResults.map(
                        (post) => (

                          <Link
                            key={
                              `/${post.slug}`
                            }

                            href={
                              `/${post.slug}`
                            }

                            onClick={() => {
                              setSearchOpen(
                                false
                              );
                            }}

                            className="
                              group
                              flex
                              items-start
                              gap-3
                              border-b
                              border-gray-100
                              px-4
                              py-3.5
                              transition
                              last:border-b-0
                              hover:bg-amber-50
                            "
                          >

                            {/* Image */}

                            <div
                              className="
                                relative
                                h-[58px]
                                w-[70px]
                                shrink-0
                                overflow-hidden
                                rounded-lg
                                bg-gray-100
                              "
                            >

                              <Image
                                src={
                                  post.image
                                }

                                alt={
                                  post.alt
                                }

                                fill

                                sizes="70px"

                                className="
                                  object-cover
                                  transition
                                  duration-500
                                  group-hover:scale-105
                                "
                              />

                            </div>

                            {/* Text */}

                            <div
                              className="
                                min-w-0
                                flex-1
                              "
                            >

                              {post.category && (
                                <p
                                  className="
                                    mb-1
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-amber-700
                                  "
                                >
                                  {
                                    post.category
                                  }
                                </p>
                              )}

                              <h3
                                className="
                                  line-clamp-2
                                  text-sm
                                  font-bold
                                  leading-5
                                  text-slate-900
                                  transition
                                  group-hover:text-amber-700
                                "
                              >
                                {
                                  post.title
                                }
                              </h3>

                              <time
                                dateTime={
                                  post.dateISO
                                }

                                className="
                                  mt-1
                                  block
                                  text-xs
                                  text-gray-500
                                "
                              >
                                {
                                  post.date
                                }
                              </time>

                            </div>

                            <ArrowRightIcon
                              className="
                                mt-4
                                h-4
                                w-4
                                shrink-0
                                text-gray-600
                                transition
                                group-hover:translate-x-1
                                group-hover:text-amber-700
                              "
                              aria-hidden="true"
                            />

                          </Link>

                        )
                      )}

                    </div>

                  </>

                ) : (

                  /* =======================================
                     NO RESULTS
                  ======================================= */

                  <div
                    className="
                      px-5
                      py-7
                      text-center
                    "
                  >

                    <div
                      className="
                        mx-auto
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-50
                      "
                    >
                      <MagnifyingGlassIcon
                        className="
                          h-5
                          w-5
                          text-amber-700
                        "
                        aria-hidden="true"
                      />
                    </div>

                    <p
                      className="
                        mt-3
                        text-base
                        font-bold
                        text-slate-900
                      "
                    >
                      No articles found
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-gray-600
                      "
                    >
                      Try Marrakech,
                      Merzouga, Sahara,
                      itinerary or desert.
                    </p>

                  </div>

                )}

              </div>

            )}

          </div>
        </div>

        {/* Divider */}

        <div
          className="
            mx-5
            border-t
            border-gray-100
          "
        />

        {/* ===================================================
            RECENT POSTS
        =================================================== */}

        <section
          className="p-5"
          aria-labelledby="sidebar-recent-posts"
        >

          <h2
            id="sidebar-recent-posts"
            className="
              text-xl
              font-bold
              text-[#102043]
            "
          >
            Recent Posts
          </h2>

          <div
            className="
              mt-5
              space-y-5
            "
          >

            {recentPosts
              .map((post) => (

                <article
                  key={post.id}
                  
                >

                  <Link
                    href={`/${post.slug}`}

                    className="
                      group
                      flex
                      items-start
                      gap-3
                    "
                  >

                    {/* Image */}

                    <div
                      className="
                        relative
                        h-[64px]
                        w-[76px]
                        shrink-0
                        overflow-hidden
                        rounded-lg
                        bg-gray-100
                      "
                    >

                      <Image
                        src={post.image}

                        alt={
                          post.alt
                        }

                        fill

                        sizes="76px"

                        className="
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-105
                        "
                      />

                    </div>

                    {/* Content */}

                    <div
                      className="
                        min-w-0
                        flex-1
                      "
                    >

                      <h3
                        className="
                          line-clamp-3
                          text-sm
                          font-bold
                          leading-5
                          text-slate-900
                          transition
                          group-hover:text-amber-700
                        "
                      >
                        {post.title}
                      </h3>

                      <time
                        dateTime={
                          post.dateISO
                        }

                        className="
                          mt-1.5
                          block
                          text-xs
                          text-gray-500
                        "
                      >
                        {post.date}
                      </time>

                    </div>

                  </Link>

                </article>

              ))}

          </div>
        </section>

        {/* Divider */}

        <div
          className="
            mx-5
            border-t
            border-gray-100
          "
        />

        {/* ===================================================
            CATEGORIES
        =================================================== */}

        <nav
          className="p-5"
          aria-labelledby="blog-sidebar-categories"
        >

          <h2
            id="blog-sidebar-categories"
            className="
              text-xl
              font-bold
              text-[#102043]
            "
          >
            Categories
          </h2>

          <ul
            className="
              mt-4
              space-y-3
            "
          >

            {topics.map(
              (category) => (

                <li
                  key={category.id}
                >

                  <Link
                    href={
                      category.href
                    }

                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      text-base
                      text-gray-700
                      transition
                      hover:text-amber-700
                    "
                  >

                    <span>
                      {category.label}
                    </span>

                    <span
                      className="
                        min-w-8
                        rounded-md
                        bg-gray-50
                        px-2
                        py-1
                        text-center
                        text-sm
                        font-semibold
                        text-gray-600
                        transition
                        group-hover:bg-amber-50
                        group-hover:text-amber-700
                      "
                    >
                      {category.count}
                    </span>

                  </Link>

                </li>

              )
            )}

          </ul>
        </nav>

      </div>

      {/* =====================================================
          WHY TRAVEL WITH US
      ===================================================== */}

      <section
        className="
          mt-5
          rounded-2xl
          border
          border-amber-200
          bg-[#fffaf4]
          p-5
          shadow-sm
        "
        aria-labelledby="sidebar-why-travel"
      >

        <h2
          id="sidebar-why-travel"
          className="
            text-xl
            font-bold
            text-amber-700
          "
        >
          Why Travel With Us?
        </h2>

        <div
          className="
            mt-5
            space-y-4
          "
        >

          {/* Local experts */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-amber-700
                text-white
              "
            >
              <UserGroupIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </span>

            <p
              className="
                text-base
                font-medium
                text-slate-700
              "
            >
              Local Experts &amp; Guides
            </p>

          </div>

          {/* Experiences */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-amber-700
                text-white
              "
            >
              <HeartIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </span>

            <p
              className="
                text-base
                font-medium
                text-slate-700
              "
            >
              Handpicked Experiences
            </p>

          </div>

          {/* Private groups */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-amber-700
                text-white
              "
            >
              <UsersIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </span>

            <p
              className="
                text-base
                font-medium
                text-slate-700
              "
            >
              Private &amp; Small Group Tours
            </p>

          </div>

          {/* Support */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-amber-700
                text-white
              "
            >
              <ClockIcon
                className="h-4 w-4"
                aria-hidden="true"
              />
            </span>

            <p
              className="
                text-base
                font-medium
                text-slate-700
              "
            >
              24/7 Support in Morocco
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          CUSTOM MOROCCO TOUR CTA
      ===================================================== */}

      <section
        className="
          relative
          mt-5
          min-h-[220px]
          overflow-hidden
          rounded-2xl
          border
          border-sky-200
          bg-sky-50
          shadow-sm
        "
        aria-labelledby="custom-morocco-trip"
      >

        <Image
          src={ctaImage}

          alt={ctaImageAlt}

          fill

          sizes="320px"

          className="
            object-cover
            object-center
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#eef9ff]
            via-[#eef9ff]/95
            via-55%
            to-transparent
          "
        />

        {/* Content */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[220px]
            items-center
            p-5
          "
        >

          <div
            className="
              max-w-[190px]
            "
          >

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.08em]
                text-amber-700
              "
            >
              Custom Morocco Tours
            </p>

            <h2
              id="custom-morocco-trip"
              className="
                mt-1
                text-2xl
                font-bold
                leading-[1.1]
                text-[#102043]
              "
            >
              Plan Your Custom
              <br />
              Morocco Trip
            </h2>

            <p
              className="
                mt-3
                text-sm
                leading-5
                text-slate-700
              "
            >
              Create a personalized itinerary
              based on your travel style and
              interests.
            </p>

            <Link
              href={ctaHref}

              className="
                group
                mt-4
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-amber-700
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-amber-800
              "
            >
              Plan My Trip

              <ArrowRightIcon
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>

      </section>

    </aside>
  );
}
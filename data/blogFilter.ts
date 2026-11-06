import blogs from "@/data/blogs.json";

/* =========================================================
   TYPES

   BlogPost is inferred directly from blogs.json, so the
   filter always stays in sync with your JSON structure.
========================================================= */

export type BlogPost = (typeof blogs)[number];

export type BlogFilterOptions = {
  /* Exact blog selection */
  slugs?: string[];

  /* Place filters */
  place?: string;
  places?: string[];

  /* Category filters */
  category?: string;
  categories?: string[];

  /* Tag filters */
  tag?: string;
  tags?: string[];

  /* Boolean filters */
  featured?: boolean;
  showOnHome?: boolean;

  /* Exclude specific blogs */
  excludeSlugs?: string[];

  /* Result controls */
  limit?: number;
  random?: boolean;

  /* Optional sorting */
  sortBy?: "newest" | "oldest";
};

/* =========================================================
   HELPERS
========================================================= */

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

/* =========================================================
   MAIN FILTER
========================================================= */

export function getBlogs(
  options: BlogFilterOptions = {}
): BlogPost[] {
  const {
    slugs,
    place,
    places,
    category,
    categories,
    tag,
    tags,
    featured,
    showOnHome,
    excludeSlugs,
    limit,
    random = false,
    sortBy,
  } = options;

  let result: BlogPost[] = [...blogs];

  /* ---------------------------------------------------------
     EXACT SLUG SELECTION

     Keeps the same order as the slugs array.
  --------------------------------------------------------- */
  if (slugs && slugs.length > 0) {
    result = result
      .filter((blog) => slugs.includes(blog.slug))
      .sort(
        (a, b) =>
          slugs.indexOf(a.slug) - slugs.indexOf(b.slug)
      );
  }

  /* ---------------------------------------------------------
     SINGLE PLACE
  --------------------------------------------------------- */
  if (place) {
    const wantedPlace = normalize(place);

    result = result.filter((blog) =>
      blog.places.some(
        (blogPlace) => normalize(blogPlace) === wantedPlace
      )
    );
  }

  /* ---------------------------------------------------------
     MULTIPLE PLACES
     Matches ANY selected place.
  --------------------------------------------------------- */
  if (places && places.length > 0) {
    const wantedPlaces = places.map(normalize);

    result = result.filter((blog) =>
      blog.places.some((blogPlace) =>
        wantedPlaces.includes(normalize(blogPlace))
      )
    );
  }

  /* ---------------------------------------------------------
     SINGLE CATEGORY

     blogs.json uses:
     category: string
  --------------------------------------------------------- */
  if (category) {
    const wantedCategory = normalize(category);

    result = result.filter(
      (blog) => normalize(blog.category) === wantedCategory
    );
  }

  /* ---------------------------------------------------------
     MULTIPLE CATEGORIES
     Matches ANY selected category.
  --------------------------------------------------------- */
  if (categories && categories.length > 0) {
    const wantedCategories = categories.map(normalize);

    result = result.filter((blog) =>
      wantedCategories.includes(normalize(blog.category))
    );
  }

  /* ---------------------------------------------------------
     SINGLE TAG
  --------------------------------------------------------- */
  if (tag) {
    const wantedTag = normalize(tag);

    result = result.filter((blog) =>
      blog.tags.some(
        (blogTag) => normalize(blogTag) === wantedTag
      )
    );
  }

  /* ---------------------------------------------------------
     MULTIPLE TAGS
     Matches ANY selected tag.
  --------------------------------------------------------- */
  if (tags && tags.length > 0) {
    const wantedTags = tags.map(normalize);

    result = result.filter((blog) =>
      blog.tags.some((blogTag) =>
        wantedTags.includes(normalize(blogTag))
      )
    );
  }

  /* ---------------------------------------------------------
     FEATURED
  --------------------------------------------------------- */
  if (featured !== undefined) {
    result = result.filter(
      (blog) => blog.featured === featured
    );
  }

  /* ---------------------------------------------------------
     SHOW ON HOME
  --------------------------------------------------------- */
  if (showOnHome !== undefined) {
    result = result.filter(
      (blog) => blog.showOnHome === showOnHome
    );
  }

  /* ---------------------------------------------------------
     EXCLUDE SLUGS
  --------------------------------------------------------- */
  if (excludeSlugs && excludeSlugs.length > 0) {
    result = result.filter(
      (blog) => !excludeSlugs.includes(blog.slug)
    );
  }

  /* ---------------------------------------------------------
     SORT BY DATE

     Uses dateISO from your blogs.json.
  --------------------------------------------------------- */
  if (sortBy === "newest") {
    result = [...result].sort(
      (a, b) =>
        new Date(b.dateISO).getTime() -
        new Date(a.dateISO).getTime()
    );
  }

  if (sortBy === "oldest") {
    result = [...result].sort(
      (a, b) =>
        new Date(a.dateISO).getTime() -
        new Date(b.dateISO).getTime()
    );
  }

  /* ---------------------------------------------------------
     RANDOM

     Randomize before limit so limit={2} gives two random
     matching blogs instead of randomizing an already-limited
     result.
  --------------------------------------------------------- */
  if (random) {
    result = shuffle(result);
  }

  /* ---------------------------------------------------------
     LIMIT
  --------------------------------------------------------- */
  if (typeof limit === "number" && limit >= 0) {
    result = result.slice(0, limit);
  }

  return result;
}

/* =========================================================
   JSON STRING
========================================================= */

export function getBlogsJSON(
  options: BlogFilterOptions = {},
  pretty = false
): string {
  return JSON.stringify(
    getBlogs(options),
    null,
    pretty ? 2 : undefined
  );
}

/* =========================================================
   SHORTCUTS
========================================================= */

export function getBlogsByPlace(
  place: string,
  limit?: number
): BlogPost[] {
  return getBlogs({
    place,
    limit,
  });
}

export function getRandomBlogs(
  count = 2,
  options: Omit<BlogFilterOptions, "limit" | "random"> = {}
): BlogPost[] {
  return getBlogs({
    ...options,
    random: true,
    limit: count,
  });
}

export function getRandomBlogsByPlace(
  place: string,
  count = 2,
  excludeSlugs: string[] = []
): BlogPost[] {
  return getBlogs({
    place,
    excludeSlugs,
    random: true,
    limit: count,
  });
}

export default getBlogs;

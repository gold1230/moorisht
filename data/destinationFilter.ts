import destinations from "@/data/destinations.json";

export type Destination = (typeof destinations)[number];

export type DestinationFilterOptions = {
  slugs?: string[];
  names?: string[];

  slug?: string;
  name?: string;

  icon?: string;
  icons?: string[];

  search?: string;

  excludeSlugs?: string[];

  limit?: number;
  random?: boolean;

  sortBy?: "name-asc" | "name-desc";
};

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

export function getDestinations(
  options: DestinationFilterOptions = {}
): Destination[] {
  const {
    slugs,
    names,
    slug,
    name,
    icon,
    icons,
    search,
    excludeSlugs,
    limit,
    random = false,
    sortBy,
  } = options;

  let result: Destination[] = [...destinations];

  /* =======================================================
     EXACT SLUG
  ======================================================= */

  if (slug) {
    const wanted = normalize(slug);

    result = result.filter(
      (destination) =>
        normalize(destination.slug) === wanted
    );
  }

  /* =======================================================
     MULTIPLE SLUGS

     Keeps the same order passed in slugs[].
  ======================================================= */

  if (slugs?.length) {
    const wanted = slugs.map(normalize);

    result = result
      .filter((destination) =>
        wanted.includes(normalize(destination.slug))
      )
      .sort(
        (a, b) =>
          wanted.indexOf(normalize(a.slug)) -
          wanted.indexOf(normalize(b.slug))
      );
  }

  /* =======================================================
     EXACT NAME
  ======================================================= */

  if (name) {
    const wanted = normalize(name);

    result = result.filter(
      (destination) =>
        normalize(destination.name) === wanted
    );
  }

  /* =======================================================
     MULTIPLE NAMES
  ======================================================= */

  if (names?.length) {
    const wanted = names.map(normalize);

    result = result.filter((destination) =>
      wanted.includes(normalize(destination.name))
    );
  }

  /* =======================================================
     ICON
  ======================================================= */

  if (icon) {
    const wanted = normalize(icon);

    result = result.filter(
      (destination) =>
        normalize(destination.icon) === wanted
    );
  }

  if (icons?.length) {
    const wanted = icons.map(normalize);

    result = result.filter((destination) =>
      wanted.includes(normalize(destination.icon))
    );
  }

  /* =======================================================
     SEARCH

     Searches:
     - name
     - subtitle
     - slug
     - alt
     - href
     - icon
  ======================================================= */

  if (search?.trim()) {
    const query = normalize(search);

    result = result.filter((destination) => {
      const searchableText = `
        ${destination.name}
        ${destination.subtitle}
        ${destination.slug}
        ${destination.alt}
        ${destination.href}
        ${destination.icon}
      `.toLowerCase();

      return searchableText.includes(query);
    });
  }

  /* =======================================================
     EXCLUDE
  ======================================================= */

  if (excludeSlugs?.length) {
    const excluded = excludeSlugs.map(normalize);

    result = result.filter(
      (destination) =>
        !excluded.includes(normalize(destination.slug))
    );
  }

  /* =======================================================
     SORT
  ======================================================= */

  if (sortBy === "name-asc") {
    result = [...result].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "name-desc") {
    result = [...result].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  /* =======================================================
     RANDOM
  ======================================================= */

  if (random) {
    result = shuffle(result);
  }

  /* =======================================================
     LIMIT
  ======================================================= */

  if (typeof limit === "number" && limit >= 0) {
    result = result.slice(0, limit);
  }

  return result;
}

/* =========================================================
   SHORTCUTS
========================================================= */

export function getDestinationBySlug(
  slug: string
): Destination | undefined {
  return getDestinations({
    slug,
    limit: 1,
  })[0];
}

export function getRandomDestinations(
  count = 6
): Destination[] {
  return getDestinations({
    random: true,
    limit: count,
  });
}

export default getDestinations;

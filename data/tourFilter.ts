import tours from "@/data/tours.json";
import { getVerifiedTourReviewSummary } from "@/lib/verifiedTourReviewData";

export type Tour = (typeof tours)[number];

export type TourFilterOptions = {
  slugs?: string[];

  place?: string;
  places?: string[];

  category?: string;
  categories?: string[];

  tag?: string;
  tags?: string[];

  collection?: string;
  collections?: string[];

  startCity?: string;
  endCity?: string;
  tourType?: string;

  minDays?: number;
  maxDays?: number;

  minPrice?: number;
  maxPrice?: number;

  minRating?: number;

  featured?: boolean;
  showOnHome?: boolean;

  excludeSlugs?: string[];

  limit?: number;
  random?: boolean;

  sortBy?:
    | "price-low"
    | "price-high"
    | "rating"
    | "days-low"
    | "days-high";
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

export function getTours(
  options: TourFilterOptions = {}
): Tour[] {
  const {
    slugs,
    place,
    places,
    category,
    categories,
    tag,
    tags,
    collection,
    collections,
    startCity,
    endCity,
    tourType,
    minDays,
    maxDays,
    minPrice,
    maxPrice,
    minRating,
    featured,
    showOnHome,
    excludeSlugs,
    limit,
    random = false,
    sortBy,
  } = options;

  // The catalog has no stand-alone rating claims. Cards, search results, and
  // structured data all derive ratings from the SAME tour-specific review source.
  let result: Tour[] = tours.map((tour) => {
    const slug = tour.slug.replace(/^\/+|\/+$/g, "");
    const summary = getVerifiedTourReviewSummary(`https://moorishtour.com/${slug}/`);
    return {
      ...tour,
      rating: summary?.ratingValue ?? 0,
      reviewCount: summary?.reviewCount ?? 0,
    };
  });

  if (slugs?.length) {
    result = result
      .filter((tour) => slugs.includes(tour.slug))
      .sort(
        (a, b) =>
          slugs.indexOf(a.slug) - slugs.indexOf(b.slug)
      );
  }

  if (place) {
    const wanted = normalize(place);

    result = result.filter((tour) =>
      tour.places.some(
        (tourPlace) => normalize(tourPlace) === wanted
      )
    );
  }

  if (places?.length) {
    const wanted = places.map(normalize);

    result = result.filter((tour) =>
      tour.places.some((tourPlace) =>
        wanted.includes(normalize(tourPlace))
      )
    );
  }

  if (category) {
    const wanted = normalize(category);

    result = result.filter(
      (tour) => normalize(tour.category) === wanted
    );
  }

  if (categories?.length) {
    const wanted = categories.map(normalize);

    result = result.filter((tour) =>
      wanted.includes(normalize(tour.category))
    );
  }

  if (tag) {
    const wanted = normalize(tag);

    result = result.filter((tour) =>
      tour.tags.some(
        (tourTag) => normalize(tourTag) === wanted
      )
    );
  }

  if (tags?.length) {
    const wanted = tags.map(normalize);

    result = result.filter((tour) =>
      tour.tags.some((tourTag) =>
        wanted.includes(normalize(tourTag))
      )
    );
  }


  if (collection) {
    const wanted = normalize(collection);

    result = result.filter((tour) =>
      tour.collections.some(
        (tourCollection) =>
          normalize(tourCollection) === wanted
      )
    );
  }

  if (collections?.length) {
    const wanted = collections.map(normalize);

    result = result.filter((tour) =>
      tour.collections.some((tourCollection) =>
        wanted.includes(normalize(tourCollection))
      )
    );
  }

  if (startCity) {
    const wanted = normalize(startCity);

    result = result.filter(
      (tour) => normalize(tour.startCity) === wanted
    );
  }

  if (endCity) {
    const wanted = normalize(endCity);

    result = result.filter(
      (tour) => normalize(tour.endCity) === wanted
    );
  }

  if (tourType) {
    const wanted = normalize(tourType);

    result = result.filter(
      (tour) => normalize(tour.tourType) === wanted
    );
  }

  if (typeof minDays === "number") {
    result = result.filter(
      (tour) => tour.days >= minDays
    );
  }

  if (typeof maxDays === "number") {
    result = result.filter(
      (tour) => tour.days <= maxDays
    );
  }

  if (typeof minPrice === "number") {
    result = result.filter(
      (tour) => tour.price >= minPrice
    );
  }

  if (typeof maxPrice === "number") {
    result = result.filter(
      (tour) => tour.price <= maxPrice
    );
  }

  if (typeof minRating === "number") {
    result = result.filter(
      (tour) => tour.rating >= minRating
    );
  }

  if (featured !== undefined) {
    result = result.filter(
      (tour) => tour.featured === featured
    );
  }

  if (showOnHome !== undefined) {
    result = result.filter(
      (tour) => tour.showOnHome === showOnHome
    );
  }

  if (excludeSlugs?.length) {
    result = result.filter(
      (tour) => !excludeSlugs.includes(tour.slug)
    );
  }

  if (sortBy === "price-low") {
    result = [...result].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "price-high") {
    result = [...result].sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortBy === "rating") {
    result = [...result].sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sortBy === "days-low") {
    result = [...result].sort(
      (a, b) => a.days - b.days
    );
  }

  if (sortBy === "days-high") {
    result = [...result].sort(
      (a, b) => b.days - a.days
    );
  }

  if (random) {
    result = shuffle(result);
  }

  if (typeof limit === "number" && limit >= 0) {
    result = result.slice(0, limit);
  }

  return result;
}

export function getRandomTours(
  count = 3,
  options: Omit<TourFilterOptions, "limit" | "random"> = {}
): Tour[] {
  return getTours({
    ...options,
    random: true,
    limit: count,
  });
}

export default getTours;

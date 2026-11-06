/**
 * Keeps a bookable tour and its Product offer in one connected JSON-LD @graph.
 * Real customer reviews may be added only after verification, and must also be
 * published visibly on that exact tour's page. Do not populate from mock data.
 */

type SchemaNode = Record<string, unknown>;
type SchemaGraph = { "@context"?: string; "@graph": SchemaNode[] };

export type VerifiedTourReview = {
  author: string;
  datePublished?: string; // Optional. Only use a documented real publication date
  reviewBody: string;
  ratingValue: number; // 1-5
};

export type TourProductDetails = {
  url: string;
  name: string;
  description: string;
  image: string;
  /** The price shown to visitors on this page. Omit if no real published price. */
  price?: number;
  priceCurrency?: string;
  /** Only real, tour-specific, visible reviews supplied by the site owner. */
  verifiedReviews?: VerifiedTourReview[];
  /** Genuine average and number for reviews of this exact tour, shown on the page. */
  verifiedAggregate?: { ratingValue: number; reviewCount: number; source: string };
};

const organizationId = "https://moorishtour.com/#organization";

function isValidVerifiedReview(review: VerifiedTourReview): boolean {
  return (
    typeof review.author === "string" && review.author.trim().length > 0 &&
    typeof review.reviewBody === "string" && review.reviewBody.trim().length > 0 &&
    typeof review.ratingValue === "number" && Number.isFinite(review.ratingValue) &&
    review.ratingValue >= 1 && review.ratingValue <= 5 &&
    (review.datePublished === undefined || (
      /^\d{4}-\d{2}-\d{2}$/.test(review.datePublished) &&
      !Number.isNaN(Date.parse(`${review.datePublished}T00:00:00Z`))
    ))
  );
}

/**
 * Attach one bookable Product node to the existing TouristTrip graph.
 * This does not manufacture customer ratings or prices, and retains the
 * itinerary, FAQs, organization, and breadcrumb structured data.
 */
export function attachProductToTourGraph(
  graph: SchemaGraph,
  details: TourProductDetails,
): SchemaGraph {
  const url = new URL(details.url);
  if (url.protocol !== "https:" || url.hostname !== "moorishtour.com") {
    throw new Error("Tour schema requires the canonical moorishtour.com HTTPS URL");
  }

  const nodes = graph["@graph"].filter((node) => {
    // Older page-specific Product blocks should not compete with this node.
    return node["@id"] !== `${details.url}#product`;
  });
  const trip = nodes.find((node) => {
    const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
    return types.includes("TouristTrip");
  });

  if (!trip) throw new Error(`No TouristTrip node for ${details.url}`);

  const priceValid =
    typeof details.price === "number" && Number.isFinite(details.price) && details.price > 0;
  const currencyValid = /^[A-Z]{3}$/.test(details.priceCurrency ?? "EUR");
  const offer = priceValid && currencyValid ? {
    "@type": "Offer",
    url: details.url,
    price: details.price,
    priceCurrency: details.priceCurrency ?? "EUR",
    seller: { "@id": organizationId },
  } : undefined;

  const verifiedReviews = (details.verifiedReviews ?? []).filter(isValidVerifiedReview);
  const verifiedAggregate = details.verifiedAggregate;
  if (verifiedAggregate && (
    !Number.isInteger(verifiedAggregate.reviewCount) || verifiedAggregate.reviewCount < 1 ||
    !Number.isFinite(verifiedAggregate.ratingValue) ||
    verifiedAggregate.ratingValue < 1 || verifiedAggregate.ratingValue > 5 ||
    !verifiedAggregate.source?.trim() || verifiedAggregate.reviewCount < verifiedReviews.length
  )) {
    throw new Error(`Invalid verified aggregate rating for ${details.url}`);
  }
  const reviewNodes = verifiedReviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    ...(review.datePublished ? { datePublished: review.datePublished } : {}),
    reviewBody: review.reviewBody,
    reviewRating: { "@type": "Rating", ratingValue: review.ratingValue, bestRating: 5, worstRating: 1 },
  }));

  const product: SchemaNode = {
    "@type": "Product",
    "@id": `${details.url}#product`,
    name: details.name,
    url: details.url,
    description: details.description,
    image: [details.image],
    category: "Guided tour and travel experience",
    brand: { "@type": "Brand", name: "Moorish Tour" },
    isRelatedTo: { "@id": trip["@id"] },
    mainEntityOfPage: { "@id": `${details.url}#webpage` },
    ...(offer ? { offers: offer } : {}),
    ...(Array.isArray(trip.additionalProperty) ? { additionalProperty: trip.additionalProperty } : {}),
    ...(reviewNodes.length ? { review: reviewNodes } : {}),
    ...(verifiedAggregate || verifiedReviews.length ? {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: verifiedAggregate?.ratingValue ?? Number((verifiedReviews.reduce((sum, r) => sum + r.ratingValue, 0) / verifiedReviews.length).toFixed(2)),
        reviewCount: verifiedAggregate?.reviewCount ?? verifiedReviews.length,
        bestRating: 5,
        worstRating: 1,
      },
    } : {}),
  };

  // Share the same sale offer with the trip, and correct old inconsistent values.
  const fixedNodes = nodes.map((node) => {
    if (node !== trip) return node;
    const {
      aggregateRating: _aggregateRating,
      review: _review,
      additionalProperty: _additionalProperty,
      ...rest
    } = node;
    void _aggregateRating;
    void _review;
    void _additionalProperty;
    return {
      ...rest,
      image: details.image,
      ...(offer ? { offers: offer } : { offers: undefined }),
    };
  });

  return { "@context": "https://schema.org", "@graph": [...fixedNodes, product] };
}

/** Prevent HTML closing tags in structured-data script elements. */
export function serializeStructuredData(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

import type { StaticImageData } from "next/image";

export type LocationHighlight = {
  title: string;
  description: string;
};

export type LocationQuickFact = {
  label: string;
  value: string;
};

export type LocationFAQ = {
  question: string;
  answer: string;
};

export type NearbyLocation = {
  name: string;
  slug: string;
  description: string;
};

export type LocationPageData = {
  name: string;
  slug: string;
  country: string;
  region?: string;

  eyebrow: string;
  h1: string;
  shortDescription: string;

  heroImage: string | StaticImageData;
  heroAlt: string;

  overviewTitle: string;

  /**
   * Use [[Visible Name|place-slug]] inside any paragraph
   * to automatically render your PlaceHoverCard.
   *
   * Example:
   * "Travel from [[Marrakech|marrakech]] to the [[Atlas Mountains|high-atlas-mountains]]."
   */
  overviewParagraphs: string[];

  quickFacts: LocationQuickFact[];
  highlights: LocationHighlight[];

  bestFor: string[];
  nearbyLocations: NearbyLocation[];

  tourPlaceSlug: string;
  tourLimit?: number;

  faq: LocationFAQ[];

  keywords: string[];

  seoTitle: string;
  seoDescription: string;

  canonicalPath: string;
};

import type { Metadata } from "next";
import type { LocationPageData } from "@/lib/locationPageTypes";

export function createLocationMetadata(
  location: LocationPageData
): Metadata {
  return {
    title: location.seoTitle,
    description: location.seoDescription,
    keywords: location.keywords,
    alternates: {
      canonical: location.canonicalPath,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      url: location.canonicalPath,
      type: "website",
    },
  };
}

import type { Metadata } from "next";
import NewTourDetail from "@/Compentents/tour/NewTourDetail";
import { newTourMetadata, newTours } from "@/lib/newTourPages";
import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";

const tour = newTours["8-days-desert-tour-in-morocco-from-casablanca"];
const url = absoluteSiteUrl(`/tour/${tour.slug}/`);
export const metadata: Metadata = newTourMetadata(tour);

// Structured data types on this route: "TouristTrip", "Product", "BreadcrumbList", "FAQPage".
// Every property uses the canonical tour URL. Pricing and ratings are only published when substantiated.
function buildNewTourSchema() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url,
        name: tour.title, description: tour.description,
        primaryImageOfPage: { "@type": "ImageObject", url: absoluteSiteUrl(tour.image) },
        isPartOf: { "@id": "https://moorishtour.com/#website" },
      },
      {
        "@type": "TouristTrip", "@id": `${url}#trip`, url,
        name: tour.title, description: tour.description, image: absoluteSiteUrl(tour.image),
        provider: { "@id": "https://moorishtour.com/#organization" },
        touristType: "Travelers exploring the cities, mountains and Sahara Desert of Morocco",
        itinerary: {
          "@type": "ItemList", itemListElement: tour.days.map((day, i) => ({
            "@type": "ListItem", position: i + 1, name: `Day ${i + 1}: ${tour.dayTitles[i]}`,
            description: day,
          })),
        },
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteSiteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Morocco Tours", item: absoluteSiteUrl("/tour/") },
          { "@type": "ListItem", position: 3, name: tour.title, item: url },
        ],
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: tour.faqs.map(([question, answer]) => ({
          "@type": "Question", name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
  return serializeStructuredData(attachProductToTourGraph(graph, {
    url, name: tour.title, description: tour.description,
    image: absoluteSiteUrl(tour.image), ...getTourReviewSchemaFields(url),
  }));
}

export default function Page() {
  return <NewTourDetail tour={tour} jsonLd={buildNewTourSchema()} />;
}

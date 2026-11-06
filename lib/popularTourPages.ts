import type { NewTourConfig } from "@/lib/newTourPages";
import type { PlaceName } from "@/Compentents/placeCard";
import knownPlaces from "@/data/places.json";
import catalog from "@/data/popular-tour-pages.json";
import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";

// JSON arrays infer broad (string | number)[] types. Validate their shapes,
// then turn them into the tuple types expected by the map and FAQ components.
// Avoid bypassing TypeScript with `as unknown as NewTourConfig`.
export const popularTours: Record<string, NewTourConfig> = Object.fromEntries(
  Object.entries(catalog).map(([slug, tour]) => {
    const stops: NewTourConfig["stops"] = tour.stops.map((stop, index) => {
      const [name, lat, lng, day] = stop;
      if (
        stop.length !== 4 ||
        typeof name !== "string" ||
        typeof lat !== "number" || !Number.isFinite(lat) ||
        typeof lng !== "number" || !Number.isFinite(lng) ||
        typeof day !== "number" || !Number.isInteger(day) || day < 1
      ) {
        throw new Error(`Invalid map stop ${index + 1} for tour ${slug}`);
      }
      return [name, lat, lng, day];
    });

    const faqs: NewTourConfig["faqs"] = tour.faqs.map((faq, index) => {
      const [question, answer] = faq;
      if (
        faq.length !== 2 ||
        typeof question !== "string" || !question.trim() ||
        typeof answer !== "string" || !answer.trim()
      ) {
        throw new Error(`Invalid FAQ ${index + 1} for tour ${slug}`);
      }
      return [question, answer];
    });

    const places: PlaceName[] = tour.places.map((place) => {
      if (!Object.prototype.hasOwnProperty.call(knownPlaces, place)) {
        throw new Error(`Unknown place ${place} for tour ${slug}`);
      }
      return place as PlaceName;
    });

    const config: NewTourConfig = { ...tour, stops, faqs, places };
    return [slug, config];
  }),
);
export function popularTourJsonLd(tour: NewTourConfig) {
  const url = absoluteSiteUrl(`/tour/${tour.slug}/`);
  const image = absoluteSiteUrl(tour.image);
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: tour.title, description: tour.description, primaryImageOfPage: { "@type":"ImageObject", url: image }, inLanguage: "en", isPartOf: { "@id": "https://moorishtour.com/#website" } },
    { "@type": "TouristTrip", "@id": `${url}#trip`, url, name: tour.title, description: tour.description, image,
      provider: { "@id": "https://moorishtour.com/#organization" },
      touristType: "Travelers looking for private tours and organized experiences in Morocco",
      itinerary: { "@type": "ItemList", itemListElement: tour.days.map((day, i) => ({ "@type": "ListItem", position: i + 1, name: `Day ${i+1}: ${tour.dayTitles[i]}`, description: day })) }
    },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
      { "@type":"ListItem", position:1, name:"Home", item:absoluteSiteUrl("/") },
      { "@type":"ListItem", position:2, name:"Morocco Tours", item:absoluteSiteUrl("/tour/") },
      { "@type":"ListItem", position:3, name:tour.title, item:url },
    ] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: tour.faqs.map(([name, answer]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };
  // Market-research planning prices are excluded from the Google Offer schema
  // until Moorish Tour confirms a bookable price. No invented ratings.
  return serializeStructuredData(attachProductToTourGraph(graph, { url, name: tour.title, description: tour.description, image }));
}

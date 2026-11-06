import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import type { LocationPageData } from "@/lib/locationPageTypes";

import LocationHero from "./LocationHero";
import LocationOverview from "./LocationOverview";
import LocationHighlights from "./LocationHighlights";
import LocationNearby from "./LocationNearby";
import LocationTours from "./LocationTours";
import LocationFAQ from "./LocationFAQ";
import LocationCTA from "./LocationCTA";

type Props = {
  location: LocationPageData;
};



export default function LocationPageTemplate({ location }: Props) {
  const pageUrl = absoluteSiteUrl(location.canonicalPath);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        name: location.name,
        description: location.seoDescription,
        ...(pageUrl ? { url: pageUrl } : {}),
        touristType: location.bestFor,
        address: {
          "@type": "PostalAddress",
          addressCountry: location.country,
          ...(location.region ? { addressRegion: location.region } : {}),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteSiteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: absoluteSiteUrl("/locations"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: location.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: location.faq.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <LocationHero location={location} />
      <LocationOverview location={location} />
      <LocationHighlights location={location} />
      <LocationNearby location={location} />
      <LocationTours location={location} />
      <LocationFAQ location={location} />
      <LocationCTA location={location} />
    </main>
  );
}

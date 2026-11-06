import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import type { Metadata } from "next";
import { getDestinations } from "@/data/destinationFilter";
import { getTours } from "@/data/tourFilter";

import LocationsArchiveHero from "./LocationsArchiveHero";
import LocationsExplorer from "./LocationsExplorer";
import LocationsArchiveGuide from "./LocationsArchiveGuide";
import LocationsFeaturedTours from "./LocationsFeaturedTours";
import LocationsArchiveCTA from "./LocationsArchiveCTA";

export const metadata: Metadata = {
  title: "Morocco Locations | Explore Cities, Desert, Mountains & Coast",
  description:
    "Explore Morocco locations in one place, from Marrakech, Fes and Chefchaouen to Merzouga, the Atlas Mountains, Atlantic coast, valleys and historic kasbahs. Find places and tours for your Morocco trip.",
  keywords: [
    "Morocco locations",
    "places in Morocco",
    "Morocco destinations",
    "best places to visit in Morocco",
    "Morocco cities",
    "Morocco tourist places",
    "Marrakech",
    "Fes",
    "Chefchaouen",
    "Merzouga",
    "Atlas Mountains",
    "Sahara Desert Morocco",
    "Essaouira",
    "Tangier",
    "Ouarzazate",
    "Dades Valley"
  ],
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Morocco Locations | Explore Cities, Desert, Mountains & Coast",
    description:
      "Browse Morocco locations by region and discover tours connecting the country's cities, coast, mountains, valleys and Sahara Desert.",
    url: "/locations",
    type: "website",
  },
};



export default function LocationsArchivePage() {
  const destinations = getDestinations({
    sortBy: "name-asc",
  });

  const tours = getTours({
    showOnHome: true,
    limit: 6,
  });

  const pageUrl = absoluteSiteUrl("/locations");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Morocco Locations",
        ...(pageUrl ? { url: pageUrl } : {}),
        description:
          "An archive of Morocco travel locations including cities, desert gateways, mountain regions, valleys, coastal towns and historic sites.",
        about: {
          "@type": "Country",
          name: "Morocco",
        },
      },
      {
        "@type": "ItemList",
        name: "Morocco Travel Locations",
        numberOfItems: destinations.length,
        itemListElement: destinations.map((destination, index) => {
          const url = absoluteSiteUrl(destination.href);

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "TouristDestination",
              name: destination.name,
              description: destination.subtitle,
              ...(url ? { url } : {}),
            },
          };
        }),
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
            item: pageUrl,
          },
        ],
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

      <LocationsArchiveHero
        locationCount={destinations.length}
        tourCount={tours.length}
      />

      <LocationsExplorer destinations={destinations} />

      <LocationsArchiveGuide />

      <LocationsFeaturedTours tours={tours} />

      <LocationsArchiveCTA />
    </main>
  );
}

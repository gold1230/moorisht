import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import type { Metadata } from "next";
import { getDestinations } from "@/data/destinationFilter";

import MoroccoDestinationsHero from "./MoroccoDestinationsHero";
import MoroccoDestinationsGrid from "./MoroccoDestinationsGrid";
import MoroccoDestinationsGuide from "./MoroccoDestinationsGuide";
import MoroccoDestinationRegions from "./MoroccoDestinationRegions";
import MoroccoDestinationsFAQ from "./MoroccoDestinationsFAQ";
import MoroccoDestinationsCTA from "./MoroccoDestinationsCTA";

export const metadata: Metadata = {
  title: "Morocco Destinations | Best Places to Visit in Morocco",
  description:
    "Explore the best Morocco destinations, from Marrakech, Fes and Chefchaouen to Merzouga, the Sahara Desert, Atlas Mountains, Essaouira and more. Plan where to go in Morocco.",
  keywords: [
    "Morocco destinations",
    "best places to visit in Morocco",
    "places to visit in Morocco",
    "Morocco tourist destinations",
    "Morocco travel destinations",
    "where to go in Morocco",
    "best cities in Morocco",
    "Marrakech",
    "Fes",
    "Chefchaouen",
    "Merzouga",
    "Sahara Desert Morocco",
    "Atlas Mountains Morocco",
    "Essaouira Morocco",
    "Ait Ben Haddou",
    "Ouarzazate",
    "Tangier Morocco",
  ],
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "Morocco Destinations | Best Places to Visit in Morocco",
    description:
      "Discover Morocco's best destinations, from imperial cities and Atlantic towns to Atlas Mountain valleys and the Sahara Desert.",
    url: "/destinations",
    type: "website",
  },
};

const destinationFaqs = [
  {
    question: "What are the best destinations to visit in Morocco?",
    answer:
      "Popular Morocco destinations include Marrakech, Fes, Chefchaouen, Essaouira, the Atlas Mountains, Ait Ben Haddou, Ouarzazate, Dades Valley, Todra Gorge, Merzouga and the Sahara Desert. The best places for you depend on your trip length, interests and starting city.",
  },
  {
    question: "Which Morocco destinations are best for a first trip?",
    answer:
      "For a first Morocco trip, many travelers combine one or two major cities such as Marrakech or Fes with a different landscape such as the Atlas Mountains, Essaouira or Merzouga. A longer trip can connect several regions.",
  },
  {
    question: "Where should I go in Morocco for the Sahara Desert?",
    answer:
      "Merzouga is one of the best-known gateways to the Erg Chebbi dunes. Sahara itineraries often combine Merzouga with the Atlas Mountains, Ait Ben Haddou, Ouarzazate, Dades Valley or Todra Gorge.",
  },
  {
    question: "Which Moroccan cities are best for culture and history?",
    answer:
      "Fes, Marrakech, Meknes and Rabat are important historic cities, while Chefchaouen, Tangier, Essaouira and Asilah offer very different architecture, atmosphere and regional character.",
  },
  {
    question: "How many Morocco destinations can I visit in one week?",
    answer:
      "In one week, it is usually better to focus on a smaller region or a simple route rather than trying to see the whole country. Around two to four main destinations can make the trip more comfortable, depending on driving distances.",
  },
  {
    question: "What is the best way to choose a Morocco itinerary?",
    answer:
      "Start with the places you most want to see, then check the travel time between them. Morocco is large and routes between the north, Atlantic coast, mountains and Sahara Desert can take many hours, so a balanced itinerary is usually more enjoyable.",
  },
];



export default function DestinationsPage() {
  const destinations = getDestinations({
    sortBy: "name-asc",
  });

  const pageUrl = absoluteSiteUrl("/destinations");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Morocco Destinations",
        ...(pageUrl ? { url: pageUrl } : {}),
        description:
          "A guide to Morocco destinations including cities, mountain regions, valleys, coastal towns, desert gateways and historic places.",
        about: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Place", name: "Marrakech" },
          { "@type": "Place", name: "Fes" },
          { "@type": "Place", name: "Chefchaouen" },
          { "@type": "Place", name: "Atlas Mountains" },
          { "@type": "Place", name: "Merzouga" },
          { "@type": "Place", name: "Sahara Desert" },
          { "@type": "Place", name: "Essaouira" },
        ],
      },
      {
        "@type": "ItemList",
        name: "Best Places to Visit in Morocco",
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
            name: "Morocco Destinations",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: destinationFaqs.map((faq) => ({
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

      <MoroccoDestinationsHero />
      <MoroccoDestinationsGrid />
      <MoroccoDestinationsGuide />
      <MoroccoDestinationRegions />
      <MoroccoDestinationsFAQ faqs={destinationFaqs} />
      <MoroccoDestinationsCTA />
    </main>
  );
}

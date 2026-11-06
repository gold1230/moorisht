import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import type { Metadata } from "next";
import { getDestinations } from "@/data/destinationFilter";

import AtlanticNorthernHero from "./AtlanticNorthernHero";
import AtlanticNorthernGrid from "./AtlanticNorthernGrid";
import AtlanticNorthernGuide from "./AtlanticNorthernGuide";
import AtlanticNorthernHighlights from "./AtlanticNorthernHighlights";
import AtlanticNorthernTours from "./AtlanticNorthernTours";
import AtlanticNorthernFAQ from "./AtlanticNorthernFAQ";
import AtlanticNorthernCTA from "./AtlanticNorthernCTA";

export const metadata: Metadata = {
  title: "Atlantic & Northern Morocco | Best Coastal & Northern Destinations",
  description:
    "Explore Atlantic and Northern Morocco, including Tangier, Asilah, Tetouan, Chefchaouen, Rabat, Casablanca, Essaouira and Agadir. Discover beaches, medinas, coastal towns and northern culture.",
  keywords: [
    "Atlantic Morocco",
    "Northern Morocco",
    "Atlantic coast Morocco",
    "North Morocco travel",
    "Tangier Morocco",
    "Chefchaouen Morocco",
    "Asilah Morocco",
    "Tetouan Morocco",
    "Rabat Morocco",
    "Casablanca Morocco",
    "Essaouira Morocco",
    "Agadir Morocco",
    "best coastal cities in Morocco",
    "best places in northern Morocco",
    "Morocco Atlantic coast road trip",
    "Morocco coastal destinations",
    "northern Morocco itinerary"
  ],
  alternates: {
    canonical: "/atlantic-northern-morocco",
  },
  openGraph: {
    title: "Atlantic & Northern Morocco | Coastal & Northern Travel Guide",
    description:
      "Discover Morocco's Atlantic coast and northern cities, from Tangier and Chefchaouen to Rabat, Casablanca, Essaouira and Agadir.",
    url: "/atlantic-northern-morocco",
    type: "website",
  },
};

const faqs = [
  {
    question: "What are the best places to visit in Northern Morocco?",
    answer:
      "Popular destinations in Northern Morocco include Tangier, Chefchaouen, Tetouan and Asilah. These places combine medinas, mountain scenery, coastal views and a different atmosphere from southern Morocco.",
  },
  {
    question: "What are the best Atlantic coast destinations in Morocco?",
    answer:
      "Popular Atlantic destinations include Rabat, Casablanca, Essaouira, Agadir and Asilah. Each offers a different mix of beaches, historic areas, modern city life and coastal culture.",
  },
  {
    question: "Can I combine Tangier and Chefchaouen on one trip?",
    answer:
      "Yes. Tangier and Chefchaouen are commonly combined on northern Morocco itineraries, often together with Tetouan, Asilah or Fes depending on the number of days available.",
  },
  {
    question: "Is Essaouira worth visiting on a Morocco itinerary?",
    answer:
      "Yes. Essaouira is popular for its Atlantic setting, relaxed medina, seafood, port and coastal atmosphere. It is often added to Marrakech itineraries as a slower-paced coastal stop.",
  },
  {
    question: "How many days do I need for Atlantic and Northern Morocco?",
    answer:
      "Around 5 to 10 days can work well for a focused northern or Atlantic itinerary. Longer trips can connect Tangier and Chefchaouen with Rabat, Casablanca, Essaouira or Marrakech.",
  },
  {
    question: "What is a good route for Northern and Atlantic Morocco?",
    answer:
      "A practical route can start in Tangier, continue to Asilah, Tetouan and Chefchaouen, then move south toward Rabat and Casablanca. A longer journey can continue along the Atlantic coast toward Essaouira and Agadir.",
  },
];



export default function AtlanticNorthernMoroccoPage() {
  const destinations = getDestinations({
    slugs: [
      "tangier",
      "asilah",
      "tetouan",
      "chefchaouen",
      "rabat",
      "casablanca",
      "essaouira",
      "agadir",
    ],
  });

  const pageUrl = absoluteSiteUrl("/atlantic-northern-morocco");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Atlantic & Northern Morocco",
        ...(pageUrl ? { url: pageUrl } : {}),
        description:
          "A travel guide to Morocco's Atlantic coast and northern destinations, including Tangier, Chefchaouen, Rabat, Casablanca, Essaouira and Agadir.",
        about: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Place", name: "Tangier" },
          { "@type": "Place", name: "Chefchaouen" },
          { "@type": "Place", name: "Asilah" },
          { "@type": "Place", name: "Tetouan" },
          { "@type": "Place", name: "Rabat" },
          { "@type": "Place", name: "Casablanca" },
          { "@type": "Place", name: "Essaouira" },
          { "@type": "Place", name: "Agadir" }
        ],
      },
      {
        "@type": "ItemList",
        name: "Atlantic and Northern Morocco Destinations",
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
            name: "Atlantic & Northern Morocco",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
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

      <AtlanticNorthernHero />
      <AtlanticNorthernGrid />
      <AtlanticNorthernGuide />
      <AtlanticNorthernHighlights />
      <AtlanticNorthernTours />
      <AtlanticNorthernFAQ faqs={faqs} />
      <AtlanticNorthernCTA />
    </main>
  );
}

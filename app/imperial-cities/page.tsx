import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import type { Metadata } from "next";
import { getDestinations } from "@/data/destinationFilter";

import ImperialCitiesHero from "./ImperialCitiesHero";
import ImperialCitiesGrid from "./ImperialCitiesGrid";
import ImperialCitiesGuide from "./ImperialCitiesGuide";
import ImperialCitiesWhyVisit from "./ImperialCitiesWhyVisit";
import ImperialCitiesTours from "./ImperialCitiesTours";
import ImperialCitiesFAQ from "./ImperialCitiesFAQ";
import ImperialCitiesCTA from "./ImperialCitiesCTA";

export const metadata: Metadata = {
  title: "Morocco Imperial Cities | Fes, Marrakech, Meknes & Rabat",
  description:
    "Discover the Imperial Cities of Morocco: Fes, Marrakech, Meknes and Rabat. Explore historic medinas, palaces, gates, souks and cultural highlights with practical travel ideas.",
  keywords: [
    "Morocco Imperial Cities",
    "Imperial Cities of Morocco",
    "Morocco imperial city tour",
    "Fes Marrakech Meknes Rabat",
    "Fes Morocco",
    "Marrakech Morocco",
    "Meknes Morocco",
    "Rabat Morocco",
    "Morocco cultural tours",
    "Morocco history tour",
    "best cities to visit in Morocco",
    "Morocco imperial cities itinerary",
    "Morocco imperial cities tour"
  ],
  alternates: {
    canonical: "/imperial-cities",
  },
  openGraph: {
    title: "Morocco Imperial Cities | Fes, Marrakech, Meknes & Rabat",
    description:
      "Explore Morocco's four Imperial Cities and discover historic medinas, royal heritage, architecture and cultural experiences.",
    url: "/imperial-cities",
    type: "website",
  },
};

const imperialCityFaqs = [
  {
    question: "What are the four Imperial Cities of Morocco?",
    answer:
      "The four Imperial Cities of Morocco are Fes, Marrakech, Meknes and Rabat. Each city served as a royal capital during an important period of Moroccan history and has its own medina, monuments, architecture and cultural character.",
  },
  {
    question: "Which Imperial City should I visit first in Morocco?",
    answer:
      "Marrakech is a popular first stop because of its markets, gardens and easy travel connections. Fes is ideal for travelers interested in historic medinas and traditional crafts, while Rabat and Meknes offer a quieter introduction to Morocco's royal and architectural heritage.",
  },
  {
    question: "How many days do I need for Morocco's Imperial Cities?",
    answer:
      "A trip of around 6 to 10 days can give travelers time to visit several Imperial Cities without rushing. The exact length depends on whether you also include Chefchaouen, Casablanca, the Atlas Mountains or the Sahara Desert.",
  },
  {
    question: "Can I visit all four Imperial Cities on one Morocco tour?",
    answer:
      "Yes. Many Morocco itineraries connect Marrakech, Rabat, Meknes and Fes. Longer tours can also include Casablanca, Chefchaouen or the Sahara Desert.",
  },
  {
    question: "Which Imperial City is best for history and traditional culture?",
    answer:
      "Fes is especially well known for its historic medina, traditional workshops and religious and educational heritage. Marrakech, Meknes and Rabat also have important monuments and royal history, so each city adds something different.",
  },
  {
    question: "What is the best route for an Imperial Cities itinerary?",
    answer:
      "A practical route can connect Marrakech with Rabat, Meknes and Fes. The best direction depends on your arrival airport, departure city and whether you want to add northern Morocco or the Sahara Desert.",
  },
];



export default function ImperialCitiesPage() {
  const cities = getDestinations({
    slugs: ["marrakech", "rabat", "meknes", "fes"],
  });

  const pageUrl = absoluteSiteUrl("/imperial-cities");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Morocco Imperial Cities",
        ...(pageUrl ? { url: pageUrl } : {}),
        description:
          "A travel guide to the four Imperial Cities of Morocco: Fes, Marrakech, Meknes and Rabat.",
        about: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Place", name: "Fes" },
          { "@type": "Place", name: "Marrakech" },
          { "@type": "Place", name: "Meknes" },
          { "@type": "Place", name: "Rabat" }
        ],
      },
      {
        "@type": "ItemList",
        name: "Imperial Cities of Morocco",
        numberOfItems: cities.length,
        itemListElement: cities.map((city, index) => {
          const url = absoluteSiteUrl(city.href);

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "TouristDestination",
              name: city.name,
              description: city.subtitle,
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
            name: "Imperial Cities",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: imperialCityFaqs.map((faq) => ({
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

      <ImperialCitiesHero />
      <ImperialCitiesGrid />
      <ImperialCitiesGuide />
      <ImperialCitiesWhyVisit />
      <ImperialCitiesTours />
      <ImperialCitiesFAQ faqs={imperialCityFaqs} />
      <ImperialCitiesCTA />
    </main>
  );
}

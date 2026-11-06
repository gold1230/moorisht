import type { Metadata } from "next";
import { getTours } from "@/data/tourFilter";

import SaharaDesertHero from "./SaharaDesertHero";
import SaharaToursGrid from "./SaharaToursGrid";
import SaharaTourHighlights from "./SaharaTourHighlights";
import SaharaTourGuide from "./SaharaTourGuide";
import SaharaStartingCities from "./SaharaStartingCities";
import SaharaToursFAQ from "./SaharaToursFAQ";
import SaharaToursCTA from "./SaharaToursCTA";

export const metadata: Metadata = {
  title: "Sahara Desert Tours Morocco | Merzouga Desert Tours & Camel Treks",
  description:
    "Explore Sahara Desert tours in Morocco to Merzouga and Erg Chebbi. Compare desert trips from Marrakech, Fes, Casablanca and Tangier with camel trekking, desert camps and local guides.",
  keywords: [
    "Sahara Desert tours Morocco",
    "Morocco Sahara Desert tours",
    "Merzouga desert tours",
    "Morocco desert tours",
    "Sahara tour Morocco",
    "Merzouga Sahara tour",
    "Morocco desert camp tour",
    "camel trekking Merzouga",
    "Marrakech to Merzouga desert tour",
    "Fes to Merzouga desert tour",
    "Casablanca to Merzouga tour",
    "Tangier to Merzouga tour",
    "Erg Chebbi desert tour",
    "Sahara Desert trip Morocco"
  ],
  alternates: {
    canonical: "/morocco-desert-tours",
  },
  openGraph: {
    title: "Sahara Desert Tours Morocco | Merzouga & Erg Chebbi",
    description:
      "Discover Morocco Sahara Desert tours with camel trekking, Merzouga desert camps, Atlas Mountain routes and local guides.",
    url: "/morocco-desert-tours",
    type: "website",
  },
};

const saharaFaqs = [
  {
    question: "Where are the best Sahara Desert tours in Morocco?",
    answer:
      "Many popular Morocco Sahara tours travel to Merzouga, beside the Erg Chebbi dunes in southeastern Morocco. Merzouga is known for camel trekking, desert camps, sunrise and sunset views, and routes connecting Marrakech, Fes and other Moroccan cities.",
  },
  {
    question: "How many days do I need for a Sahara Desert tour?",
    answer:
      "A 3-day desert tour is a common minimum from Marrakech, while 4 days or more gives you a slower pace and more time for valleys, kasbahs and desert experiences. Tours from farther cities can require additional days.",
  },
  {
    question: "Can I take a Sahara Desert tour from Marrakech?",
    answer:
      "Yes. Marrakech to Merzouga desert tours usually cross the High Atlas Mountains and continue through places such as Ait Ben Haddou, Ouarzazate, Dades Valley and Todra Gorge before reaching the Sahara.",
  },
  {
    question: "Can I take a Sahara Desert tour from Fes?",
    answer:
      "Yes. Fes to Merzouga desert tours commonly travel through the Middle Atlas, Ifrane, cedar forests, Midelt and the Ziz Valley before arriving near the Erg Chebbi dunes.",
  },
  {
    question: "What is normally included in a Merzouga desert experience?",
    answer:
      "A typical Merzouga desert experience may include a camel ride, sunset or sunrise in the dunes and an overnight desert camp. Exact inclusions depend on the selected tour, so travelers should check the individual itinerary before booking.",
  },
  {
    question: "When is the best time for a Sahara Desert tour in Morocco?",
    answer:
      "Spring and autumn are popular because daytime temperatures are generally more comfortable. Winter can be pleasant during the day but cold at night, while summer in the desert can be extremely hot.",
  },
];

function absoluteUrl(path: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return siteUrl ? `${siteUrl}${path}` : undefined;
}

export default function SaharaDesertToursPage() {
  const saharaTours = getTours({ place: "merzouga" });
  const collectionUrl = absoluteUrl("/morocco-desert-tours");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Sahara Desert Tours Morocco",
        ...(collectionUrl ? { url: collectionUrl } : {}),
        description:
          "Morocco Sahara Desert tours to Merzouga and Erg Chebbi with camel trekking, desert camps and routes from major Moroccan cities.",
        about: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Place", name: "Sahara Desert" },
          { "@type": "Place", name: "Merzouga" },
          { "@type": "Place", name: "Erg Chebbi" },
          { "@type": "Place", name: "Marrakech" },
          { "@type": "Place", name: "Fes" }
        ],
      },
      {
        "@type": "ItemList",
        name: "Sahara Desert Tours",
        numberOfItems: saharaTours.length,
        itemListElement: saharaTours.map((tour, index) => {
          const tourPath = tour.slug.startsWith("/") ? tour.slug : `/${tour.slug}`;
          const tourUrl = absoluteUrl(tourPath);

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "TouristTrip",
              name: tour.title,
              description: tour.description,
              ...(tourUrl ? { url: tourUrl } : {}),
              touristType: tour.tourType,
            },
          };
        }),
      },
      {
        "@type": "FAQPage",
        mainEntity: saharaFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SaharaDesertHero />
      <SaharaToursGrid />
      <SaharaTourHighlights />
      <SaharaTourGuide />
      <SaharaStartingCities />
      <SaharaToursFAQ faqs={saharaFaqs} />
      <SaharaToursCTA />
    </main>
  );
}

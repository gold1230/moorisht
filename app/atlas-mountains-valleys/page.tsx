import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import type { Metadata } from "next";
import { getDestinations } from "@/data/destinationFilter";

import AtlasMountainsHero from "./AtlasMountainsHero";
import AtlasValleysGrid from "./AtlasValleysGrid";
import AtlasMountainsGuide from "./AtlasMountainsGuide";
import AtlasExperiences from "./AtlasExperiences";
import AtlasToursGrid from "./AtlasToursGrid";
import AtlasMountainsFAQ from "./AtlasMountainsFAQ";
import AtlasMountainsCTA from "./AtlasMountainsCTA";

export const metadata: Metadata = {
  title: "Atlas Mountains & Valleys Morocco | Best Places, Tours & Travel Guide",
  description:
    "Explore the Atlas Mountains and valleys of Morocco, including Ourika Valley, Dades Valley, Todra Gorge, Draa Valley and more. Discover scenic routes, villages, kasbahs and Morocco mountain tours.",
  keywords: [
    "Atlas Mountains Morocco",
    "Morocco Atlas Mountains",
    "Atlas Mountains tours",
    "Atlas Mountains and valleys",
    "Ourika Valley Morocco",
    "Dades Valley Morocco",
    "Todra Gorge Morocco",
    "Draa Valley Morocco",
    "High Atlas Mountains Morocco",
    "Morocco mountain tours",
    "Morocco valleys",
    "Atlas Mountains from Marrakech",
    "best valleys in Morocco",
    "Morocco scenic road trip",
    "Morocco mountain villages"
  ],
  alternates: {
    canonical: "/atlas-mountains-valleys",
  },
  openGraph: {
    title: "Atlas Mountains & Valleys Morocco | Travel Guide & Tours",
    description:
      "Discover Morocco's Atlas Mountains, scenic valleys, gorges, villages and kasbah routes, with practical ideas for planning your trip.",
    url: "/atlas-mountains-valleys",
    type: "website",
  },
};

const atlasFaqs = [
  {
    question: "What are the best valleys to visit in the Atlas Mountains of Morocco?",
    answer:
      "Popular mountain and valley destinations include Ourika Valley near Marrakech, Dades Valley, Todra Gorge, Draa Valley, Rose Valley and the mountain routes around the High Atlas. The best choice depends on your starting city and how many days you have.",
  },
  {
    question: "Can I visit the Atlas Mountains from Marrakech?",
    answer:
      "Yes. Marrakech is one of the easiest starting points for Atlas Mountain trips. Day trips often visit Ourika Valley or nearby mountain areas, while longer tours cross the High Atlas toward Ait Ben Haddou, Ouarzazate, Dades Valley and the Sahara Desert.",
  },
  {
    question: "How many days do I need for the Atlas Mountains and valleys?",
    answer:
      "One day can be enough for a short trip from Marrakech, but two to four days gives you more time to explore mountain roads, valleys, villages and kasbahs. Longer desert tours also pass through several Atlas and valley destinations.",
  },
  {
    question: "What is the difference between Dades Valley and Todra Gorge?",
    answer:
      "Dades Valley is known for winding roads, rock formations, kasbahs and broad valley scenery. Todra Gorge is famous for its steep canyon walls and narrow river gorge. Many southern Morocco tours include both.",
  },
  {
    question: "When is the best time to visit the Atlas Mountains?",
    answer:
      "Spring and autumn are popular for comfortable temperatures and outdoor travel. Winter can bring cold conditions and snow at higher elevations, while summer is warmer, especially in lower valleys and southern areas.",
  },
  {
    question: "Can I combine the Atlas Mountains with the Sahara Desert?",
    answer:
      "Yes. Many Morocco desert tours cross the High Atlas Mountains and continue through Ait Ben Haddou, Ouarzazate, Dades Valley and Todra Gorge before reaching Merzouga and the Sahara Desert.",
  },
];



export default function AtlasMountainsValleysPage() {
  const destinations = getDestinations({
    slugs: [
      "atlas-mountains",
      "ourika-valley",
      "dades-valley",
      "todra-gorge",
      "draa-valley",
      "rose-valley",
      "skoura",
      "kelaat-mgouna",
    ],
  });

  const pageUrl = absoluteSiteUrl("/atlas-mountains-valleys");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Atlas Mountains & Valleys Morocco",
        ...(pageUrl ? { url: pageUrl } : {}),
        description:
          "A travel guide to Morocco's Atlas Mountains, scenic valleys, gorges, villages and road-trip destinations.",
        about: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Place", name: "Atlas Mountains" },
          { "@type": "Place", name: "High Atlas Mountains" },
          { "@type": "Place", name: "Ourika Valley" },
          { "@type": "Place", name: "Dades Valley" },
          { "@type": "Place", name: "Todra Gorge" },
          { "@type": "Place", name: "Draa Valley" },
          { "@type": "Place", name: "Rose Valley" }
        ],
      },
      {
        "@type": "ItemList",
        name: "Atlas Mountains and Valley Destinations",
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
            name: "Atlas Mountains & Valleys",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: atlasFaqs.map((faq) => ({
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

      <AtlasMountainsHero />
      <AtlasValleysGrid />
      <AtlasMountainsGuide />
      <AtlasExperiences />
      <AtlasToursGrid />
      <AtlasMountainsFAQ faqs={atlasFaqs} />
      <AtlasMountainsCTA />
    </main>
  );
}

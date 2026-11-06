import type { Metadata } from "next";
import { getBlogs } from "@/data/blogFilter";

import MoroccoTravelTipsHero from "./MoroccoTravelTipsHero";
import MoroccoTravelTipsGrid from "./MoroccoTravelTipsGrid";
import MoroccoTravelTipsTopics from "./MoroccoTravelTipsTopics";
import MoroccoTravelTipsGuide from "./MoroccoTravelTipsGuide";
import MoroccoTravelTipsDestinations from "./MoroccoTravelTipsDestinations";
import MoroccoTravelTipsFAQ from "./MoroccoTravelTipsFAQ";
import MoroccoTravelTipsCTA from "./MoroccoTravelTipsCTA";

export const metadata: Metadata = {
  title: "Morocco Travel Tips | Essential Guide for Visiting Morocco",
  description:
    "Read practical Morocco travel tips for planning your trip, including the best time to visit, what to wear, transport, money, culture, Sahara Desert travel and advice for Marrakech, Fes and Merzouga.",
  keywords: [
    "Morocco travel tips",
    "travel tips for Morocco",
    "Morocco travel guide",
    "Morocco travel advice",
    "things to know before visiting Morocco",
    "Morocco travel tips for first time visitors",
    "Morocco itinerary tips",
    "Morocco safety tips",
    "what to wear in Morocco",
    "best time to visit Morocco",
    "Morocco money tips",
    "Morocco transportation tips",
    "Marrakech travel tips",
    "Fes travel tips",
    "Sahara Desert travel tips"
  ],
  alternates: {
    canonical: "/morocco-travel-tips",
  },
  openGraph: {
    title: "Morocco Travel Tips | Essential Guide for Visiting Morocco",
    description:
      "Plan Morocco with practical advice about weather, clothing, transport, culture, money, cities and Sahara Desert travel.",
    url: "/morocco-travel-tips",
    type: "website",
  },
};

const travelTipsFaqs = [
  {
    question: "What should I know before traveling to Morocco?",
    answer:
      "Plan for different weather between cities, mountains and desert areas, carry comfortable walking shoes, keep some Moroccan dirhams for small purchases, dress respectfully, and allow extra travel time when moving between regions. Your exact plan should depend on the season and the places you visit.",
  },
  {
    question: "What is the best time to visit Morocco?",
    answer:
      "Spring and autumn are popular because temperatures are often comfortable in many parts of Morocco. Winter can be cooler in the mountains and at night in the desert, while summer can be very hot in inland cities and Sahara regions.",
  },
  {
    question: "What should tourists wear in Morocco?",
    answer:
      "Light, comfortable clothing works well in warm weather, but modest clothing is useful in towns, villages and religious or traditional areas. Layers are helpful because evenings can be cooler, especially in the Atlas Mountains and Sahara Desert.",
  },
  {
    question: "Do I need cash when traveling in Morocco?",
    answer:
      "Cards are accepted in many hotels, restaurants and larger shops, but cash in Moroccan dirhams is still useful for smaller purchases, local markets, tips and places where card payments may not be available.",
  },
  {
    question: "How should I plan a first trip to Morocco?",
    answer:
      "For a first visit, choose a route that balances cities and travel time. Popular combinations include Marrakech with the Atlas Mountains, Fes with Chefchaouen, or a longer itinerary connecting Marrakech or Fes with Merzouga and the Sahara Desert.",
  },
  {
    question: "Is the Sahara Desert worth adding to a Morocco itinerary?",
    answer:
      "For travelers who enjoy landscapes and longer road journeys, Merzouga and the Erg Chebbi dunes can be a memorable part of a Morocco trip. Allow enough time so the desert journey does not feel rushed.",
  },
];

function absoluteUrl(path: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return siteUrl ? `${siteUrl}${path}` : undefined;
}

function getBlogHref(slug: string) {
  if (slug.startsWith("/")) return slug;
  return `/${slug}`;
}

export default function MoroccoTravelTipsPage() {
  const posts = getBlogs({
    category: "Travel Tips",
    sortBy: "newest",
  });

  const pageUrl = absoluteUrl("/morocco-travel-tips");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Morocco Travel Tips",
        ...(pageUrl ? { url: pageUrl } : {}),
        description:
          "Practical Morocco travel tips covering trip planning, weather, clothing, money, transport, culture, cities and Sahara Desert travel.",
        about: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Place", name: "Marrakech" },
          { "@type": "Place", name: "Fes" },
          { "@type": "Place", name: "Chefchaouen" },
          { "@type": "Place", name: "Merzouga" },
          { "@type": "Place", name: "Sahara Desert" },
          { "@type": "Place", name: "Atlas Mountains" }
        ],
      },
      {
        "@type": "ItemList",
        name: "Morocco Travel Tips Articles",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => {
          const href = getBlogHref(post.slug);
          const url = absoluteUrl(href);

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              ...(url ? { url } : {}),
              datePublished: post.dateISO,
            },
          };
        }),
      },
      {
        "@type": "FAQPage",
        mainEntity: travelTipsFaqs.map((faq) => ({
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

      <MoroccoTravelTipsHero />
      <MoroccoTravelTipsGrid />
      <MoroccoTravelTipsTopics />
      <MoroccoTravelTipsGuide />
      <MoroccoTravelTipsDestinations />
      <MoroccoTravelTipsFAQ faqs={travelTipsFaqs} />
      <MoroccoTravelTipsCTA />
    </main>
  );
}

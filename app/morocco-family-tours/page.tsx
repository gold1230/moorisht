import type { Metadata } from "next";
import { getTours } from "@/data/tourFilter";

import FamilyToursHero from "./FamilyToursHero";
import FamilyToursGrid from "./FamilyToursGrid";
import FamilyTourBenefits from "./FamilyTourBenefits";
import FamilyTravelGuide from "./FamilyTravelGuide";
import FamilyDestinations from "./FamilyDestinations";
import FamilyToursFAQ from "./FamilyToursFAQ";
import FamilyToursCTA from "./FamilyToursCTA";

export const metadata: Metadata = {
  title: "Morocco Family Tours | Family Holidays & Tours With Kids",
  description:
    "Plan Morocco family tours with kid-friendly routes, private drivers and flexible itineraries. Explore Marrakech, Fes, Chefchaouen, the Atlas Mountains and the Sahara Desert as a family.",
  keywords: [
    "Morocco family tours",
    "family tours Morocco",
    "Morocco family vacation",
    "Morocco family holiday",
    "Morocco with kids",
    "family trip to Morocco",
    "private family tours Morocco",
    "Morocco tours with children",
    "family desert tour Morocco",
    "Sahara Desert family tour",
    "Marrakech family tour",
    "Morocco family itinerary",
    "family adventure Morocco",
    "kid friendly Morocco tours",
  ],
  alternates: {
    canonical: "/morocco-family-tours",
  },
  openGraph: {
    title: "Morocco Family Tours | Family Holidays & Tours With Kids",
    description:
      "Discover Morocco together with flexible family tours, private drivers, Sahara experiences and routes designed for parents and children.",
    url: "/morocco-family-tours",
    type: "website",
  },
};

const familyFaqs = [
  {
    question: "Is Morocco a good destination for a family holiday?",
    answer:
      "Yes. Morocco can work very well for families because it offers a mix of cities, mountains, beaches, desert scenery, short cultural activities and outdoor experiences. A private family tour can also make travel days easier by allowing more flexible stops and pacing.",
  },
  {
    question: "What are the best places to visit in Morocco with kids?",
    answer:
      "Popular family-friendly stops can include Marrakech, Fes, Chefchaouen, the Atlas Mountains, Ait Ben Haddou, Essaouira and Merzouga. The best route depends on the age of the children, trip length and how much driving your family is comfortable with.",
  },
  {
    question: "Can children join a Sahara Desert tour in Morocco?",
    answer:
      "Yes. Many families include Merzouga and the Sahara Desert in their Morocco itinerary. Families should choose a comfortable route, suitable accommodation and a pace that works for their children. Camel rides and desert camp options can be adjusted depending on age and comfort.",
  },
  {
    question: "How many days are best for a Morocco family tour?",
    answer:
      "Around 7 to 12 days gives many families enough time to combine major cities with the Atlas Mountains or Sahara Desert without making every day feel rushed. Shorter and longer routes are also possible.",
  },
  {
    question: "Are private Morocco family tours better for children?",
    answer:
      "Private tours are often convenient for families because the vehicle, departure times, rest stops and daily pace can be adapted to the group. Parents can also request family-friendly hotels and fewer long driving days.",
  },
  {
    question: "What should families pack for Morocco?",
    answer:
      "Useful items include comfortable walking shoes, sun protection, light layers, warmer clothing for mountain or desert nights, refillable water bottles and any child-specific travel items your family normally needs.",
  },
];

function absoluteUrl(path: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return siteUrl ? `${siteUrl}${path}` : undefined;
}

export default function MoroccoFamilyToursPage() {
  const familyTours = getTours({
    tourType: "Family Tours",
  });

  const pageUrl = absoluteUrl("/morocco-family-tours");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Morocco Family Tours",
        ...(pageUrl ? { url: pageUrl } : {}),
        description:
          "Family tours in Morocco with flexible itineraries, private drivers, family-friendly routes and experiences across cities, mountains and the Sahara Desert.",
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
        name: "Morocco Family Tours",
        numberOfItems: familyTours.length,
        itemListElement: familyTours.map((tour, index) => {
          const tourPath = tour.slug.startsWith("/")
            ? tour.slug
            : `/${tour.slug}`;

          const tourUrl = absoluteUrl(tourPath);

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "TouristTrip",
              name: tour.title,
              description: tour.description,
              ...(tourUrl ? { url: tourUrl } : {}),
              touristType: "Families",
            },
          };
        }),
      },
      {
        "@type": "FAQPage",
        mainEntity: familyFaqs.map((faq) => ({
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

      <FamilyToursHero />
      <FamilyToursGrid />
      <FamilyTourBenefits />
      <FamilyTravelGuide />
      <FamilyDestinations />
      <FamilyToursFAQ faqs={familyFaqs} />
      <FamilyToursCTA />
    </main>
  );
}

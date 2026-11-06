import type { Metadata } from "next";

import FirstTourOfferHero from "./FirstTourOfferHero";
import FirstTourOfferGrid from "./FirstTourOfferGrid";
import FirstTourOfferBenefits from "./FirstTourOfferBenefits";
import FirstTourOfferSteps from "./FirstTourOfferSteps";
import FirstTourOfferFAQ from "./FirstTourOfferFAQ";
import FirstTourOfferCTA from "./FirstTourOfferCTA";

export const metadata: Metadata = {
  title: "Save 20% on Your First Morocco Tour | First-Time Traveler Offer",
  description:
    "Save 20% on your first Morocco tour. Explore Marrakech, Fes, Chefchaouen, Merzouga and Sahara Desert tours with local drivers, flexible itineraries and an exclusive first-trip offer.",
  keywords: [
    "Morocco tour discount",
    "20% off Morocco tour",
    "Morocco travel deal",
    "Morocco tour offer",
    "first Morocco tour discount",
    "Morocco desert tour discount",
    "Morocco vacation deals",
    "Marrakech tour deal",
    "Sahara Desert tour deal",
    "Morocco private tour offer"
  ],
  alternates: {
    canonical: "/morocco-tour-discount",
  },
  openGraph: {
    title: "Save 20% on Your First Morocco Tour",
    description:
      "Discover Morocco and save 20% on your first tour. Browse popular Morocco trips and start planning your journey.",
    url: "/morocco-tour-discount",
    type: "website",
  },
};

const offerFaqs = [
  {
    question: "How do I get 20% off my first Morocco tour?",
    answer:
      "Choose the Morocco tour you like and contact us through the planning or inquiry form. Tell us that this is your first tour with us and ask for the 20% first-tour offer. Final eligibility and price are confirmed before booking.",
  },
  {
    question: "Can I use the offer on a Sahara Desert tour?",
    answer:
      "You can request the first-tour offer for eligible Morocco tours, including desert itineraries that visit Merzouga and the Sahara. Final availability and eligibility should be confirmed for the specific tour you choose.",
  },
  {
    question: "Can families and couples use the first-tour discount?",
    answer:
      "The offer is designed for first-time customers. Families, couples, friends and solo travelers can ask whether their selected tour qualifies.",
  },
  {
    question: "Does the 20% discount change the tour experience?",
    answer:
      "The discount changes the price, not the purpose of the trip. The itinerary, inclusions, accommodation options and travel style still depend on the selected tour.",
  },
];

export default function FirstMoroccoTourOfferPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Save 20% on Your First Morocco Tour",
        description:
          "A promotional page for first-time travelers looking for Morocco tours and a 20% first-tour offer.",
        about: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Place", name: "Marrakech" },
          { "@type": "Place", name: "Fes" },
          { "@type": "Place", name: "Chefchaouen" },
          { "@type": "Place", name: "Merzouga" },
          { "@type": "Place", name: "Sahara Desert" }
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: offerFaqs.map((faq) => ({
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

      <FirstTourOfferHero />
      <FirstTourOfferGrid />
      <FirstTourOfferBenefits />
      <FirstTourOfferSteps />
      <FirstTourOfferFAQ faqs={offerFaqs} />
      <FirstTourOfferCTA />
    </main>
  );
}

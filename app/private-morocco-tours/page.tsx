import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import type { Metadata } from "next";

import PrivateToursHero from "./PrivateToursHero"; 
import PrivateToursGrid from "./PrivateToursGrid";
import PrivateTourBenefits from "./PrivateTourBenefits";
import PrivateToursHowItWorks from "./PrivateToursHowItWorks";
import PrivateToursFAQ from "./PrivateToursFAQ";
import PrivateToursCTA from "./PrivateToursCTA";

export const metadata: Metadata = {
  title: "Private Morocco Tours | Custom Morocco Trips & Desert Tours",
  description:
    "Book private Morocco tours with local drivers and flexible itineraries. Explore Marrakech, Fes, Chefchaouen, Merzouga and the Sahara Desert with a custom Morocco trip designed around you.",
  keywords: [
    "private Morocco tours",
    "Morocco private tours",
    "custom Morocco tours",
    "private Morocco desert tours",
    "private tour Morocco",
    "Morocco private driver tour",
    "custom Morocco itinerary",
    "luxury private Morocco tours",
    "private Sahara Desert tour",
    "private tours from Marrakech",
    "private tours from Casablanca",
    "private tours from Fes",
    "private tours from Tangier",
  ],
  alternates: {
    canonical: "/private-morocco-tours",
  },
  openGraph: {
    title: "Private Morocco Tours | Custom Morocco Trips",
    description:
      "Explore Morocco your way with a private driver, flexible itinerary, handpicked stays and custom desert experiences.",
    url: absoluteSiteUrl("/private-morocco-tours"),
    type: "website",
  },
};

const privateToursFaq = [
  {
    question: "What is a private Morocco tour?",
    answer:
      "A private Morocco tour is a trip reserved for you and your travel companions. You travel with a private vehicle and local driver, with an itinerary that can be adjusted around your dates, interests and preferred destinations.",
  },
  {
    question: "Can I customize a private Morocco itinerary?",
    answer:
      "Yes. Private tours can be customized around your arrival city, departure city, number of days, accommodation style and places you want to visit, including Marrakech, Fes, Chefchaouen, Merzouga and the Sahara Desert.",
  },
  {
    question: "Where can private Morocco tours start?",
    answer:
      "Private Morocco tours can start from major cities such as Marrakech, Casablanca, Fes and Tangier. The starting point can be selected to match your flight, ferry or existing Morocco travel plan.",
  },
  {
    question: "Are private Morocco tours suitable for families?",
    answer:
      "Yes. Private tours work well for families because the driving schedule, hotel choices, activities and rest stops can be adapted to children and different travel needs.",
  },
  {
    question: "Can a private tour include the Sahara Desert?",
    answer:
      "Yes. Many private Morocco tours include Merzouga, Erg Chebbi, camel trekking and an overnight Sahara desert camp, together with valleys, kasbahs and mountain routes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Private Morocco Tours",
      url: absoluteSiteUrl("/private-morocco-tours"),
      description:
        "Private Morocco tours with local drivers, flexible itineraries and custom routes through Morocco's cities, mountains and Sahara Desert.",
      about: [
        { "@type": "Place", name: "Morocco" },
        { "@type": "Place", name: "Marrakech" },
        { "@type": "Place", name: "Fes" },
        { "@type": "Place", name: "Chefchaouen" },
        { "@type": "Place", name: "Merzouga" },
        { "@type": "Place", name: "Sahara Desert" },
      ],
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
          name: "Private Morocco Tours",
          item: absoluteSiteUrl("/private-morocco-tours"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: privateToursFaq.map((faq) => ({
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

export default function PrivateMoroccoToursPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <PrivateToursHero />
      <PrivateToursGrid />
      <PrivateTourBenefits />
      <PrivateToursHowItWorks />
      <PrivateToursFAQ faqs={privateToursFaq} />
      <PrivateToursCTA />
    </main>
  );
}

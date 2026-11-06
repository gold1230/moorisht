import type { Metadata } from "next";

import SharedToursHero from "./SharedToursHero";
import SharedToursGrid from "./SharedToursGrid";
import SharedTourBenefits from "./SharedTourBenefits";
import SharedToursHowItWorks from "./SharedToursHowItWorks";
import SharedToursFAQ from "./SharedToursFAQ";
import SharedToursCTA from "./SharedToursCTA";

export const metadata: Metadata = {
  title: "Shared Morocco Tours | Small Group Desert Tours",
  description:
    "Join shared Morocco tours and small group desert tours from Marrakech, Fes and other cities. Travel with other guests, enjoy local guides, Sahara camps and great value.",
  alternates: {
    canonical: "/shared-tours",
  },
  openGraph: {
    title: "Shared Morocco Tours | Small Group Desert Tours",
    description:
      "Explore affordable shared Morocco tours, Sahara desert trips and small group adventures with local guides.",
    url: "/shared-tours",
    type: "website",
  },
};

export default function SharedToursPage() {
  return (
    <main className="min-h-screen bg-white">
      <SharedToursHero />
      <SharedToursGrid />
      <SharedTourBenefits />
      <SharedToursHowItWorks />
      <SharedToursFAQ />
      <SharedToursCTA />
    </main>
  );
}

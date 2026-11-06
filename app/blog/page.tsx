
import BlogHero from "./bloghero";
import FeaturedGuide from "./featuredguide"
import PopularGuides from "./populartravel";
import BrowseByTopic from "./sidebar"
import LatestGuides from "./latestGuide"
import ExploreDestinations from "@/content/destinationlist"
import GuidesToHelpYouPlan from "./guidetohelp"
import MoroccoTripCTA from "./moroccotripcta"
import MoroccoNewsletter from "./bottomblog"
import BlogSchema from "./schemaBlog";

import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Morocco Travel Blog | Guides, Tours & Travel Tips",

  description:
    "Explore Morocco travel guides, itineraries, Sahara Desert tours, Marrakech trips, Merzouga adventures, travel tips, culture, food and places to visit with Moorish Tour.",

  keywords: [
    "Morocco travel blog",
    "Morocco travel guide",
    "Morocco travel tips",
    "Morocco itineraries",
    "Morocco tours",
    "Morocco desert tours",
    "Sahara Desert Morocco",
    "Marrakech travel guide",
    "Marrakech tours",
    "Merzouga desert",
    "Merzouga desert tours",
    "Morocco itinerary",
    "places to visit in Morocco",
    "things to do in Morocco",
    "Morocco culture",
    "Moroccan food",
    "Morocco vacation",
  ],

  alternates: {
    canonical: "https://moorishtour.com/blog/",
  },

  openGraph: {
    title: "Morocco Travel Blog | Guides, Tours & Travel Tips",

    description:
      "Discover Morocco with practical travel guides, itineraries, Sahara Desert experiences, Marrakech tips, Merzouga adventures, culture, food and places to visit.",

    url: "https://moorishtour.com/blog/",

    siteName: "Moorish Tour",

    type: "website",

    images: [
      {
        url: "https://moorishtour.com/blog/banner/morocco-sahara-desert-tour-travelers-1439x520.webp",
        width: 1200,
        height: 630,
        alt: "Morocco travel guides, Sahara Desert and Moroccan destinations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Morocco Travel Blog | Guides, Tours & Travel Tips",

    description:
      "Practical Morocco travel guides, itineraries, Sahara Desert tips, Marrakech, Merzouga, culture, food and places to visit.",

    images: [
      "https://moorishtour.com/blog/banner/morocco-sahara-desert-tour-travelers-1439x520.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (

    <>
    <BlogSchema />
   
    <main>
      <BlogHero />

      {/* Next sections will go here */}
<section className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* Main content */}
        <div>
          <FeaturedGuide />
          <LatestGuides />
          <ExploreDestinations />
          <GuidesToHelpYouPlan />
          
        </div>

        {/* Sidebar */}
        <div className="lg:pt-10">
          <BrowseByTopic />
          <PopularGuides />
          <MoroccoTripCTA />
        </div>
    
      </div>
    <MoroccoNewsletter />
    </section>

    </main>
     </>
  );
}

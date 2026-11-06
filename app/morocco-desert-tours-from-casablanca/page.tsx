import Link from "next/link";
import type { Metadata } from "next";

import MoroccoToursHero from "@/Compentents/tourFrom/tourFrom";
import PopularMoroccoTours from "@/Compentents/tourFrom/mustPopular";
import image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import TopDestinations from "@/Compentents/tourFrom/destinations";
import WhyTravelWithUs from "@/Compentents/tourFrom/whytravel";
import AchievementsCTA from "@/Compentents/tourFrom/ready";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title:
    "Morocco Desert Tours From Casablanca | Sahara & Merzouga Tours",

  description:
    "Discover Morocco desert tours from Casablanca to Merzouga and the Sahara Desert. Explore Fes, the Atlas Mountains, desert camps, camel trekking and private Morocco tours with local guides.",

  keywords: [
    "Morocco desert tours from Casablanca",
    "Casablanca desert tours",
    "Casablanca to Merzouga desert tour",
    "Casablanca to Sahara Desert tour",
    "Sahara tours from Casablanca",
    "Morocco tours from Casablanca",
    "private Morocco tour from Casablanca",
    "Casablanca to Merzouga",
    "Morocco Sahara tour",
    "Merzouga desert tour",
  ],

  alternates: {
    canonical: "/morocco-desert-tours-from-casablanca",
  },

  openGraph: {
    title:
      "Morocco Desert Tours From Casablanca | Sahara Adventures",
    description:
      "Travel from Casablanca across Morocco to Merzouga and the Sahara Desert with private and flexible Morocco desert tours.",
    url: "/morocco-desert-tours-from-casablanca",
    type: "website",
  },
};

/* =========================================================
   TRAVELER REVIEWS

   Replace these sample reviews with verified customer
   reviews before publishing them as real testimonials.
========================================================= */

const travelerReviews = [
  {
    quote:
      "Our Casablanca to Merzouga desert tour was an amazing way to discover Morocco. We visited beautiful cities, crossed changing landscapes and finished with an unforgettable night in the Sahara Desert.",
    name: "Sarah Johnson",
    country: "United States",
    avatar: image1.src,
    avatarAlt:
      "Traveler reviewing a Morocco desert tour from Casablanca",
    rating: 5,
  },
  {
    quote:
      "Starting our Morocco trip in Casablanca made everything very easy. The journey through Fes and toward Merzouga was well organized, and the camel ride at sunset was one of our favorite experiences.",
    name: "Michael Anderson",
    country: "Canada",
    avatar: image1.src,
    avatarAlt:
      "Traveler reviewing a Casablanca to Merzouga desert tour",
    rating: 5,
  },
  {
    quote:
      "We chose a private desert tour from Casablanca and loved the flexibility. Our driver gave us enough time at every stop and helped us discover places we would never have found by ourselves.",
    name: "Emily Carter",
    country: "United Kingdom",
    avatar: image1.src,
    avatarAlt:
      "Traveler on a private Morocco tour from Casablanca",
    rating: 5,
  },
  {
    quote:
      "The drive from Casablanca toward the Sahara showed us so many different sides of Morocco. Historic cities, mountains, valleys and finally the huge dunes of Merzouga made the trip unforgettable.",
    name: "Daniel Wilson",
    country: "Australia",
    avatar: image1.src,
    avatarAlt:
      "Traveler enjoying a Sahara Desert tour from Casablanca",
    rating: 5,
  },
  {
    quote:
      "Our Morocco desert tour from Casablanca was comfortable from beginning to end. The desert camp was beautiful, the local food was excellent and our guide made the whole journey enjoyable.",
    name: "Olivia Brown",
    country: "United States",
    avatar: image1.src,
    avatarAlt:
      "Traveler enjoying a Merzouga desert camp in Morocco",
    rating: 5,
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const travelBenefits = [
  {
    title: "Local Morocco Experts",
    description:
      "Travel with local experts who know the best routes from Casablanca to the Sahara Desert.",
    icon: "expertise",
  },
  {
    title: "Best Value",
    description:
      "Enjoy carefully planned Morocco desert tours with clear prices and no hidden fees.",
    icon: "value",
  },
  {
    title: "Flexible Private Tours",
    description:
      "Customize your Casablanca desert tour around your dates, interests and preferred destinations.",
    icon: "flexible",
  },
  {
    title: "Comfort & Safety",
    description:
      "Travel across Morocco in comfortable vehicles with experienced drivers and selected accommodations.",
    icon: "safety",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function CasablancaDesertTours() {
  return (
    <>
      <MoroccoToursHero
        title="Morocco Desert Tours From Casablanca"
        desc="Discover unforgettable Morocco desert tours from Casablanca to Merzouga and the Sahara Desert. Travel through Morocco's imperial cities, mountain landscapes, valleys and traditional villages before reaching the golden Erg Chebbi dunes. Enjoy camel trekking, Sahara sunsets, desert camps and flexible private tours from Casablanca."
        image={image1}
      />

      <PopularMoroccoTours
        collection="tours-from-casablanca"
        title="Popular Morocco Tours From Casablanca"
      />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-7 sm:p-9">
          <h2 className="text-2xl font-bold text-slate-900">8 Days Morocco Desert Tour from Casablanca</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">Explore Rabat, Fes and the Sahara before reaching Dades Valley, Ait Ben Haddou and Marrakech. See the detailed eight-day itinerary, accommodation ideas and route map.</p>
          <Link href="/tour/8-days-desert-tour-in-morocco-from-casablanca/" className="mt-5 inline-flex min-h-12 items-center rounded-lg bg-amber-700 px-6 font-semibold text-white hover:bg-amber-800">View the 8-Day Casablanca Desert Tour</Link>
        </div>
      </section>

      <TopDestinations />

      <WhyTravelWithUs
        title="Why Choose Our Morocco Desert Tours From Casablanca?"
        benefits={travelBenefits}
        reviews={travelerReviews}
        image={image1.src}
        imageAlt="Travelers enjoying a Morocco desert tour from Casablanca to Merzouga and the Sahara"
        reviewsTitle="What Travelers Say About Our Casablanca Tours"
      />

      <AchievementsCTA />
    </>
  );
}
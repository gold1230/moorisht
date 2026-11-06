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
    "Morocco Desert Tours From Tangier | Sahara & Merzouga Tours",

  description:
    "Discover Morocco desert tours from Tangier to Merzouga and the Sahara. Visit Chefchaouen, Fes, the Atlas Mountains, camel trek in Erg Chebbi and enjoy private Morocco tours.",

  keywords: [
    "Morocco desert tours from Tangier",
    "Tangier desert tours",
    "Tangier to Merzouga desert tour",
    "Tangier to Sahara Desert tour",
    "Sahara tours from Tangier",
    "Morocco tours from Tangier",
    "private Morocco tours from Tangier",
    "Tangier to Merzouga",
    "Tangier Sahara tour",
    "Merzouga desert tour from Tangier",
    "Tangier to Marrakech desert tour",
    "Tangier to Fes desert tour",
    "Morocco desert trip from Tangier",
    "Tangier Morocco itinerary",
    "Sahara Desert Morocco tour",
  ],

  alternates: {
    canonical: "/morocco-desert-tours-from-tangier",
  },

  openGraph: {
    title:
      "Morocco Desert Tours From Tangier | Sahara Desert Adventures",
    description:
      "Travel from Tangier through Chefchaouen, Fes and the Atlas Mountains to Merzouga and the Sahara Desert on a private Morocco tour.",
    url: "/morocco-desert-tours-from-tangier",
    type: "website",
  },
};

/* =========================================================
   TRAVELER REVIEWS
========================================================= */

const travelerReviews = [
  {
    quote:
      "Our Tangier to Merzouga desert tour was an incredible way to see Morocco. We loved Chefchaouen, Fes and the changing landscapes before finally reaching the Sahara dunes.",
    name: "Sarah Johnson",
    country: "United States",
    avatar: image1.src,
    avatarAlt:
      "Traveler reviewing a Morocco desert tour from Tangier",
    rating: 5,
  },
  {
    quote:
      "Starting our Morocco journey in Tangier was perfect. The route through northern Morocco and Fes was beautiful, and the camel ride in Merzouga was unforgettable.",
    name: "Michael Anderson",
    country: "Canada",
    avatar: image1.src,
    avatarAlt:
      "Traveler enjoying a Tangier to Merzouga desert tour",
    rating: 5,
  },
  {
    quote:
      "We booked a private Morocco tour from Tangier and loved the flexibility. Our driver was friendly, the hotels were comfortable and every stop felt well planned.",
    name: "Emily Carter",
    country: "United Kingdom",
    avatar: image1.src,
    avatarAlt:
      "Traveler on a private Morocco tour from Tangier",
    rating: 5,
  },
  {
    quote:
      "The journey from Tangier to the Sahara showed us so much of Morocco. Chefchaouen, Fes, mountain scenery and the Erg Chebbi dunes were all amazing.",
    name: "Daniel Wilson",
    country: "Australia",
    avatar: image1.src,
    avatarAlt:
      "Traveler enjoying a Sahara tour from Tangier",
    rating: 5,
  },
  {
    quote:
      "Our desert tour from Tangier was one of the best parts of our trip. The Sahara camp, camel trekking and sunset over the dunes made the experience very special.",
    name: "Olivia Brown",
    country: "United States",
    avatar: image1.src,
    avatarAlt:
      "Traveler enjoying a Merzouga Sahara desert camp",
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
      "Travel with local experts who know the best routes from Tangier to Fes, Merzouga and the Sahara Desert.",
    icon: "expertise",
  },
  {
    title: "Best Value",
    description:
      "Enjoy carefully planned Tangier desert tours with fair prices and no hidden fees.",
    icon: "value",
  },
  {
    title: "Flexible Private Tours",
    description:
      "Customize your Morocco tour from Tangier around your travel dates, interests and preferred destinations.",
    icon: "flexible",
  },
  {
    title: "Comfort & Safety",
    description:
      "Travel in comfortable vehicles with experienced drivers and carefully selected accommodations.",
    icon: "safety",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function TangierDesertTours() {
  return (
    <>
      <MoroccoToursHero
        title="Morocco Desert Tours From Tangier"
        desc="Discover unforgettable Morocco desert tours from Tangier to Merzouga and the Sahara Desert. Travel through Chefchaouen, Fes, the Middle Atlas Mountains, traditional villages and scenic valleys before reaching the golden Erg Chebbi dunes. Enjoy camel trekking, Sahara sunsets, desert camps and flexible private Morocco tours from Tangier."
        image={image1}
      />

      <PopularMoroccoTours
        collection="tours-from-tangier"
        title="Popular Morocco Tours From Tangier"
      />

      <TopDestinations />

      <WhyTravelWithUs
        title="Why Choose Our Morocco Desert Tours From Tangier?"
        benefits={travelBenefits}
        reviews={travelerReviews}
        image={image1.src}
        imageAlt="Travelers enjoying a Morocco desert tour from Tangier to Merzouga and the Sahara Desert"
        reviewsTitle="What Travelers Say About Our Tangier Tours"
      />

      <AchievementsCTA />
    </>
  );
}
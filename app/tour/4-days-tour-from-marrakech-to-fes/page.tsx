import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import MarrakechToMerzouga7Day from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";
import MarrakechToMerzouga10Day from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";
import MarrakechToMerzouga4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";
import MarrakechToFes4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import ReviewsSection from "@/Compentents/tour/Reveiws";
import TourFeatures from "@/Compentents/tour/whychose";
import TourNavigation from "@/Compentents/tour/contenttable";
import PlaceHoverCard from "@/Compentents/placeCard";
import Overview from "@/Compentents/tour/overview";
import TourSidebar from "@/Compentents/tour/sidebar";
import TourHighlights from "@/Compentents/tour/highlights";
import TourItinerary from "@/Compentents/tour/itinerary";
import TourInclusions from "@/Compentents/tour/include";
import TourFAQs from "@/Compentents/tour/faqs";
import WhatToBring from "@/Compentents/tour/bring";
import TourMap from "@/Compentents/tour/tourmapclient";
import YouMayAlsoLike from "@/Compentents/tour/youmaylike";

import type { Metadata } from "next";

import {
  SunIcon,
  CameraIcon,
  ShieldCheckIcon,
  BeakerIcon,
  BackwardIcon,
  MapIcon,
  BuildingLibraryIcon,
  FireIcon,
  BriefcaseIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

/* -------------------------------------------------------------------------- */
/*                               MAIN TOUR DATA                               */
/* -------------------------------------------------------------------------- */

const propsObj = {
  image: MarrakechToFes4DayHero,

  imagetitle:
    "4 Days Tour from Marrakech to Fes via Merzouga Sahara",

  imageurl:
    "https://moorishtour.com/tours/related/4-days-tour-from-marrakech-to-fes.jpg",

  imagerRobbicon: "Marrakech to Fes via Sahara",

  type: "Private Morocco Desert Tour",

  url:
    "https://moorishtour.com/tour/4-days-tour-from-marrakech-to-fes/",

  title:
    "4 Days Tour from Marrakech to Fes",

  description:
    "Travel from Marrakech to Fes in 4 days via Ait Ben Haddou, Dades Valley, Todra Gorge and Merzouga, with camel trekking and a Sahara desert camp.",

  overeview:
    "A 4-day Marrakech to Fes desert tour through the High Atlas, Ait Ben Haddou, Ouarzazate, Rose Valley, Dades Valley, Todra Gorge, Merzouga, Erg Chebbi, Ziz Valley, Midelt and the Middle Atlas.",

  duration: "4 Days / 3 Nights",

  route:
    "Marrakech → High Atlas → Ait Ben Haddou → Ouarzazate → Rose Valley → Dades Valley → Todra Gorge → Merzouga → Erg Chebbi → Ziz Valley → Midelt → Ifrane → Fes",

  reviews: "4",
  reviewsRate: "5",
  price: 450 ,
  maxPeople: "Private Tour",

  accommodation:
    "Hotel / Guesthouse / Sahara Desert Camp",

  activities:
    "Culture, Scenic Drives, Camel Trekking, Desert & Mountains",
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "4 Days Marrakech to Fes Desert Tour via Merzouga",

  description:
    "Travel Marrakech to Fes in 4 days via High Atlas, Ait Ben Haddou, Dades, Todra Gorge and Merzouga, with camel trekking and a Sahara camp.",

  keywords: [
    "4 days tour from Marrakech to Fes",
    "4 days Marrakech to Fes desert tour",
    "Marrakech to Fes desert tour",
    "Marrakech to Fes via Merzouga",
    "Marrakech Merzouga Fes tour",
    "Marrakech to Fes 4 days",
    "4 day Morocco desert tour",
    "4 day desert tour Marrakech to Fes",
    "private Marrakech to Fes desert tour",
    "Marrakech to Fes Sahara tour",
    "Marrakech to Merzouga to Fes",
    "High Atlas Ait Ben Haddou tour",
    "Ait Ben Haddou Ouarzazate Dades tour",
    "Ouarzazate to Dades Valley tour",
    "Rose Valley Dades Valley Morocco",
    "Dades Valley Todra Gorge tour",
    "Todra Gorge Merzouga tour",
    "Merzouga camel trekking",
    "Erg Chebbi camel trek",
    "Merzouga desert camp",
    "Sahara camp Morocco",
    "Merzouga to Fes tour",
    "Ziz Valley Midelt Fes route",
    "Middle Atlas Morocco road trip",
    "Ifrane to Fes tour",
    "Morocco desert tour ending in Fes",
    "Marrakech to Fes itinerary",
    "best Marrakech to Fes desert tour",
    "Marrakech Fes one way desert tour",
    "Morocco Sahara tour 4 days",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "4 Days Marrakech to Fes Desert Tour via Merzouga",

    description:
      "Cross the High Atlas, visit Ait Ben Haddou and Dades, walk Todra Gorge, camel trek in Merzouga and finish your 4-day desert tour in Fes.",

    url: propsObj.url,

    siteName: "Moorish Tour",

    type: "website",

    images: [
      {
        url: propsObj.imageurl,
        width: 1200,
        height: 630,
        alt:
          "4 Days Marrakech to Fes Desert Tour via Merzouga Sahara",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "4 Days Marrakech to Fes Desert Tour via Merzouga",
    description:
      "Travel from Marrakech to Fes through Ait Ben Haddou, Dades Valley, Todra Gorge and the Merzouga Sahara.",
    images: [propsObj.imageurl],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* -------------------------------------------------------------------------- */
/*                             OVERVIEW HIGHLIGHTS                            */
/* -------------------------------------------------------------------------- */

const highlightsOverview = [
  {
    icon: BuildingLibraryIcon,
    title: "Kasbah Route",
    subtitle:
      "Ait Ben Haddou, Ouarzazate & Rose Valley",
  },
  {
    icon: MapIcon,
    title: "Dades & Todra",
    subtitle:
      "Valleys, villages & dramatic canyon",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle:
      "Camel trek, sunset & desert camp",
  },
  {
    icon: SunIcon,
    title: "Marrakech to Fes",
    subtitle:
      "High Atlas to Middle Atlas",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ITINERARY                                  */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Marrakech – High Atlas Mountains – Ait Ben Haddou – Ouarzazate",

    description:
      "Your 4 days tour from Marrakech to Fes begins with morning pickup from your riad, hotel or agreed meeting point in Marrakech. Leave the busy streets of the Red City and begin the scenic drive across the High Atlas Mountains. The road climbs through changing mountain landscapes, traditional Amazigh villages and wide viewpoints where you can stop for photographs and short breaks. Continue toward Ait Ben Haddou, one of Morocco's best-known fortified ksars and an important example of traditional earthen architecture. Take time to walk through the old settlement, explore its narrow passages and climb to a higher viewpoint overlooking the surrounding valley. After the visit, continue to Ouarzazate, a southern Moroccan city known for kasbah landscapes and its long connection with international film productions. Depending on timing, enjoy a short city stop or visit the exterior of a kasbah before checking into your hotel or guesthouse. Dinner and overnight in Ouarzazate.",

    details: [
      "Morning pickup in Marrakech",
      "High Atlas Mountains",
      "Traditional Amazigh villages",
      "Scenic mountain viewpoints",
      "Ait Ben Haddou",
      "Historic fortified ksar",
      "Ouarzazate",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 2: Ouarzazate – Skoura Region – Rose Valley – Kelaat M'Gouna – Dades Valley",

    description:
      "After breakfast in Ouarzazate, continue east through one of southern Morocco's most scenic routes. The journey passes kasbah landscapes, palm groves and traditional villages as you move toward the Skoura region and the road often associated with Morocco's many old kasbahs. Continue through Rose Valley and Kelaat M'Gouna, an area known for rose cultivation, local cooperatives and rural valley scenery. During spring, the region becomes especially colorful, but the landscapes remain attractive throughout the year. From Kelaat M'Gouna, travel deeper into the Dades Valley, where the road follows dramatic rock formations, old mud-brick villages and mountain scenery. Stop at panoramic viewpoints and, when time allows, take short walks to enjoy the valley from different angles. Arrive at your hotel or guesthouse in the Dades region in the late afternoon. Dinner and overnight in Dades Valley.",

    details: [
      "Breakfast in Ouarzazate",
      "Kasbah road scenery",
      "Skoura region",
      "Rose Valley",
      "Kelaat M'Gouna",
      "Traditional villages",
      "Dades Valley",
      "Panoramic viewpoints",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 3: Dades Valley – Tinghir – Todra Gorge – Erfoud – Merzouga – Erg Chebbi Desert Camp",

    description:
      "Leave Dades Valley after breakfast and continue toward Tinghir, a beautiful oasis town surrounded by palm groves and rocky mountain scenery. From Tinghir, travel to Todra Gorge, where high limestone walls create one of the most impressive canyon landscapes in southern Morocco. Enjoy a walk inside the gorge and take time for photographs before continuing east toward the Sahara. The route crosses dry plateaus, oasis areas and small desert towns before passing the wider Erfoud and Tafilalet region. Later in the afternoon, arrive in Merzouga, the desert village beside the golden dunes of Erg Chebbi. Meet your camel guide and begin a camel trek across the Sahara while the evening light changes the colors of the dunes. Stop to enjoy sunset, then continue toward your desert camp. After arrival, enjoy dinner and local music before spending the night beneath the Sahara sky.",

    details: [
      "Breakfast in Dades Valley",
      "Tinghir oasis",
      "Todra Gorge",
      "Canyon walk",
      "Erfoud / Tafilalet region",
      "Arrival in Merzouga",
      "Erg Chebbi camel trek",
      "Sahara sunset",
      "Desert camp",
      "Dinner & local music",
    ],
  },

  {
    title:
      "Day 4: Merzouga – Ziz Valley – Midelt – Middle Atlas – Ifrane – Fes",

    description:
      "Wake early if you would like to watch sunrise over the Erg Chebbi dunes, one of the quietest and most beautiful moments of the Sahara experience. After breakfast at the camp, return toward Merzouga by camel or 4x4 according to your arrangement and meet your driver for the final journey to Fes. Leave the Sahara behind and travel through the Ziz region, stopping at a panoramic viewpoint over the long palm-filled Ziz Valley. Continue north through changing landscapes toward Midelt, where you can stop for lunch or a rest break. The road then climbs into the Middle Atlas, replacing dry desert scenery with cooler mountain landscapes, forests and high plateaus. Continue through Ifrane, known for its mountain setting and distinctive architecture, before driving toward Fes. Arrive in Fes in the evening for drop-off at your riad, hotel or another agreed location. Your 4-day Marrakech to Fes desert tour ends after crossing Morocco from the High Atlas to the Sahara and finally the Middle Atlas.",

    details: [
      "Optional Sahara sunrise",
      "Breakfast at desert camp",
      "Return to Merzouga",
      "Ziz Valley viewpoint",
      "Midelt",
      "Middle Atlas Mountains",
      "Ifrane",
      "Arrival in Fes",
      "Hotel or riad drop-off",
      "End of tour",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  REVIEWS                                   */
/* -------------------------------------------------------------------------- */

/*
  Named sample review drafts.
  Replace these sample identities and testimonials with genuine customer
  feedback before presenting them publicly as real reviews.
*/

const reviews = {
  reviewRate: [
    {
      averageRating:
        parseInt(propsObj.reviewsRate),

      totalReviews:
        parseInt(propsObj.reviews),
    },
  ],

  review: [
    {
      id: 1,

      name: "Olivia Miller",

      avatar:
        "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",

      flag: "🇺🇸",

      rating: 5,

      date: "Sample review",

      review:
        "This sample review is written for the 4-day Marrakech to Fes desert route. Crossing the High Atlas and visiting Ait Ben Haddou was a great start, while Dades Valley and Todra Gorge showed a completely different landscape. The camel trek into Erg Chebbi at sunset and the desert camp were unforgettable. The final drive through Ziz Valley, Midelt and the Middle Atlas to Fes made the journey feel like a real crossing of Morocco.",
    },

    {
      id: 2,

      name: "James Anderson",

      avatar:
        "/images/toursits-comes-to-morocco.jpeg",

      flag: "🇬🇧",

      rating: 5,

      date: "Sample review",

      review:
        "This sample testimonial reflects the variety of the route. We enjoyed the mountain drive from Marrakech, the old architecture of Ait Ben Haddou, Rose Valley and the views in Dades. Todra Gorge was impressive, but Merzouga was the highlight. The camel ride, Sahara sunset and night in the camp made the trip special before we continued north to Fes.",
    },

    {
      id: 3,

      name: "Sophie Martin",

      avatar:
        "/images/toursits-comes-to-morocco.jpeg",

      flag: "🇨🇦",

      rating: 5,

      date: "Sample review",

      review:
        "This sample review is tailored to the exact four-day itinerary. Every day felt different: High Atlas villages, kasbah landscapes, Dades Valley, Todra Gorge and then the Sahara. We also liked that the final day did not simply feel like a transfer because the Ziz Valley, Midelt, the Middle Atlas and Ifrane added more scenery before arriving in Fes.",
    },

    {
      id: 4,

      name: "Daniel Williams",

      avatar:
        "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",

      flag: "🇦🇺",

      rating: 5,

      date: "Sample review",

      review:
        "This sample testimonial focuses on the Marrakech to Fes one-way route. It was a very good way to connect the two cities while seeing southern Morocco and the Sahara in between. Ait Ben Haddou, Dades, Todra and Erg Chebbi were all memorable, and finishing in Fes meant we did not need to drive all the way back to Marrakech.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Pickup from your riad, hotel or agreed meeting point in Marrakech",
    "Final drop-off at your riad, hotel or agreed location in Fes",
    "Private air-conditioned vehicle during the tour",
    "English-speaking driver",
    "1 night accommodation in Ouarzazate",
    "1 night accommodation in the Dades Valley region",
    "1 night Sahara desert camp in Merzouga",
    "Breakfasts according to the confirmed accommodation package",
    "Selected dinners in Ouarzazate, Dades and the desert camp according to package",
    "Camel trek in the Erg Chebbi dunes",
    "4x4 transfer to or from the desert camp when arranged",
    "Scenic and photo stops along the confirmed route",
  ],

  notIncluded: [
    "Flights",
    "Lunches",
    "Drinks",
    "Entrance fees to monuments or attractions",
    "Local guides unless specifically listed in your booking",
    "Tips for driver, guides and accommodation staff",
    "Personal shopping and expenses",
    "Travel insurance",
    "Optional activities not confirmed as included",
  ],
};

/* -------------------------------------------------------------------------- */
/*                                 MAP DATA                                   */
/* -------------------------------------------------------------------------- */

const locations = [
  {
    id: "marrakech",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 1,
    description:
      "Starting city for the four-day one-way desert tour to Fes.",
  },

  {
    id: "high-atlas",
    name: "High Atlas Mountains",
    lat: 31.2,
    lng: -7.4,
    day: 1,
    description:
      "Scenic mountain crossing between Marrakech and southern Morocco.",
  },

  {
    id: "ait-ben-haddou",
    name: "Ait Ben Haddou",
    lat: 31.047,
    lng: -7.129,
    day: 1,
    description:
      "Historic fortified ksar visited on the first day.",
  },

  {
    id: "ouarzazate",
    name: "Ouarzazate",
    lat: 30.9335,
    lng: -6.937,
    day: 1,
    description:
      "Southern Moroccan city and first overnight stop.",
  },

  {
    id: "rose-valley",
    name: "Rose Valley",
    lat: 31.245,
    lng: -6.127,
    day: 2,
    description:
      "Rural valley region known for rose cultivation and traditional villages.",
  },

  {
    id: "dades-valley",
    name: "Dades Valley",
    lat: 31.471,
    lng: -5.974,
    day: 2,
    description:
      "Scenic valley known for kasbahs, villages and dramatic rock formations.",
  },

  {
    id: "tinghir",
    name: "Tinghir",
    lat: 31.5147,
    lng: -5.5328,
    day: 3,
    description:
      "Palm-filled oasis town and gateway to Todra Gorge.",
  },

  {
    id: "todra-gorge",
    name: "Todra Gorge",
    lat: 31.585,
    lng: -5.59,
    day: 3,
    description:
      "High limestone canyon with a popular walking section.",
  },

  {
    id: "erfoud",
    name: "Erfoud",
    lat: 31.4353,
    lng: -4.2326,
    day: 3,
    description:
      "Desert gateway town in the Tafilalet region before Merzouga.",
  },

  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 3,
    description:
      "Sahara village located beside the Erg Chebbi dunes.",
  },

  {
    id: "erg-chebbi",
    name: "Erg Chebbi",
    lat: 31.1477,
    lng: -3.9786,
    day: 3,
    description:
      "Golden Sahara dune field for camel trekking, sunset and desert camping.",
  },

  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.86,
    lng: -4.35,
    day: 4,
    description:
      "Long oasis valley with palm groves and panoramic viewpoints.",
  },

  {
    id: "midelt",
    name: "Midelt",
    lat: 32.6806,
    lng: -4.7369,
    day: 4,
    description:
      "Mountain-region stop between the Sahara and the Middle Atlas.",
  },

  {
    id: "ifrane",
    name: "Ifrane",
    lat: 33.5228,
    lng: -5.1109,
    day: 4,
    description:
      "Middle Atlas mountain town visited before the final drive to Fes.",
  },

  {
    id: "fes",
    name: "Fes",
    lat: 34.0331,
    lng: -5.0003,
    day: 4,
    description:
      "Final destination of the Marrakech to Fes desert tour.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 4 Days Marrakech to Fes Desert Tour",

      description:
        "Practical answers about the Marrakech to Fes route, High Atlas, Ait Ben Haddou, Dades Valley, Todra Gorge, Merzouga, camel trekking, desert camp, driving time, accommodation and the final transfer to Fes.",
    },
  ],

  faqs: [
    {
      question:
        "What is the route for the 4 days tour from Marrakech to Fes?",

      answer:
        "The route travels from Marrakech across the High Atlas to Ait Ben Haddou and Ouarzazate, continues through Rose Valley and Dades Valley, reaches Merzouga through Todra Gorge, then finishes in Fes via Ziz Valley, Midelt, the Middle Atlas and Ifrane.",
    },

    {
      question:
        "Is 4 days enough for a Marrakech to Fes desert tour?",

      answer:
        "Four days is a practical length for travelers who want to connect Marrakech and Fes through the Sahara. It still includes long road sections, but the additional day gives more time for southern Morocco than many three-day Marrakech to Fes routes.",
    },

    {
      question:
        "Why choose a 4-day Marrakech to Fes tour instead of a 3-day tour?",

      answer:
        "The four-day version can divide the southern route more comfortably, giving you more time around Ouarzazate, Rose Valley and Dades before reaching Merzouga.",
    },

    {
      question:
        "Does the tour visit Ait Ben Haddou?",

      answer:
        "Yes. Ait Ben Haddou is included on day one after crossing the High Atlas Mountains from Marrakech.",
    },

    {
      question:
        "Is Ouarzazate included in the itinerary?",

      answer:
        "Yes. Ouarzazate is the first overnight destination and is visited after Ait Ben Haddou.",
    },

    {
      question:
        "Does the tour pass through Rose Valley?",

      answer:
        "Yes. Day two continues from Ouarzazate through the Rose Valley and Kelaat M'Gouna region toward Dades Valley.",
    },

    {
      question:
        "Do we stay overnight in Dades Valley?",

      answer:
        "Yes. The second night is in the Dades region, giving you time to enjoy valley scenery before continuing to Todra Gorge and Merzouga.",
    },

    {
      question:
        "Is Todra Gorge included?",

      answer:
        "Yes. Day three includes a walking stop in Todra Gorge before continuing toward the Sahara.",
    },

    {
      question:
        "Does the tour include Merzouga and Erg Chebbi?",

      answer:
        "Yes. Merzouga and the Erg Chebbi dunes are the main Sahara destinations on day three.",
    },

    {
      question:
        "Is camel trekking included in Merzouga?",

      answer:
        "Yes. The standard itinerary includes a camel trek across Erg Chebbi around sunset before reaching the desert camp.",
    },

    {
      question:
        "Can I go to the desert camp by 4x4 instead of camel?",

      answer:
        "Yes. A 4x4 transfer can usually be arranged for travelers who prefer not to ride a camel or who have mobility concerns.",
    },

    {
      question:
        "Do we sleep in the Sahara Desert?",

      answer:
        "Yes. The third night is spent in a desert camp in the Merzouga / Erg Chebbi region according to the camp category selected in your booking.",
    },

    {
      question:
        "What happens on the final day from Merzouga to Fes?",

      answer:
        "The final day leaves Merzouga after breakfast and travels through Ziz Valley, Midelt, the Middle Atlas and Ifrane before reaching Fes.",
    },

    {
      question:
        "Is Ziz Valley included on the route to Fes?",

      answer:
        "Yes. The journey north from Merzouga includes the Ziz Valley, with a panoramic stop when timing allows.",
    },

    {
      question:
        "Does the tour cross both the High Atlas and Middle Atlas?",

      answer:
        "Yes. The journey starts by crossing the High Atlas from Marrakech and ends by crossing the Middle Atlas on the road toward Fes.",
    },

    {
      question:
        "Where does the 4-day Marrakech to Fes tour finish?",

      answer:
        "The tour finishes in Fes with drop-off at your riad, hotel or another agreed location in the city.",
    },

    {
      question:
        "Is this a private Marrakech to Fes desert tour?",

      answer:
        "This page is designed as a private tour, which allows more flexibility for photo stops, rest breaks, accommodation category and travel pace.",
    },

    {
      question:
        "What accommodation is used during the tour?",

      answer:
        "The itinerary normally uses a hotel or guesthouse in Ouarzazate, accommodation in the Dades region and a Sahara desert camp in Merzouga. Exact properties depend on your selected package and availability.",
    },

    {
      question:
        "Are meals included?",

      answer:
        "Breakfasts are generally included with accommodation, and selected dinners are commonly included in Ouarzazate, Dades and the desert camp according to the confirmed package. Lunches and drinks are usually separate.",
    },

    {
      question:
        "Is the Marrakech to Fes desert tour suitable for families?",

      answer:
        "Families can enjoy the route, especially as a private tour. Parents should consider that day four from Merzouga to Fes is a long driving day, although rest and photo stops can be arranged.",
    },

    {
      question:
        "What should I pack for the four-day desert tour?",

      answer:
        "Bring comfortable shoes, sun protection, light clothing, a warm layer for mountain mornings and desert nights, personal medication, a reusable water bottle and a small overnight bag for the Sahara camp.",
    },

    {
      question:
        "Can the 4-day Marrakech to Fes itinerary be customized?",

      answer:
        "Yes. A private itinerary can usually be adjusted for accommodation category, desert-camp level, pickup time, photo stops and other practical travel preferences.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the 4 Days Marrakech to Fes Desert Tour",

  highlights: [
    "Travel one way from Marrakech to Fes through the Sahara.",
    "Cross the scenic High Atlas Mountains.",
    "Pass traditional Amazigh mountain villages.",
    "Explore the historic ksar of Ait Ben Haddou.",
    "Spend the first night in Ouarzazate.",
    "Travel through southern Morocco's kasbah landscapes.",
    "Pass through the Rose Valley and Kelaat M'Gouna region.",
    "Enjoy panoramic views in Dades Valley.",
    "Visit the Tinghir oasis.",
    "Walk through the dramatic Todra Gorge.",
    "Cross desert-edge landscapes toward Merzouga.",
    "Reach the golden Erg Chebbi dunes.",
    "Ride camels across the Sahara around sunset.",
    "Spend the night in a Merzouga desert camp.",
    "Wake early for sunrise over Erg Chebbi.",
    "Travel through the palm-filled Ziz Valley.",
    "Stop around Midelt on the route north.",
    "Cross the Middle Atlas Mountains.",
    "Pass through Ifrane.",
    "Finish the four-day journey in Fes.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",

    route:
      "Marrakech → High Atlas → Ait Ben Haddou → Ouarzazate",

    target: "day-1",
  },

  {
    day: "Day 2",

    route:
      "Ouarzazate → Skoura Region → Rose Valley → Kelaat M'Gouna → Dades Valley",

    target: "day-2",
  },

  {
    day: "Day 3",

    route:
      "Dades Valley → Tinghir → Todra Gorge → Erfoud → Merzouga → Erg Chebbi Camp",

    target: "day-3",
  },

  {
    day: "Day 4",

    route:
      "Merzouga → Ziz Valley → Midelt → Middle Atlas → Ifrane → Fes",

    target: "day-4",
  },
];

/* -------------------------------------------------------------------------- */
/*                             STRUCTURED DATA                                */
/* -------------------------------------------------------------------------- */

const faqSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "FAQPage",

  mainEntity:
    faqs.faqs.map((faq) => ({
      "@type":
        "Question",

      name:
        faq.question,

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          faq.answer,
      },
    })),
};

const breadcrumbSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "BreadcrumbList",

  itemListElement: [
    {
      "@type":
        "ListItem",

      position: 1,

      name:
        "Home",

      item:
        "https://moorishtour.com/",
    },

    {
      "@type":
        "ListItem",

      position: 2,

      name:
        "Morocco Tours",

      item:
        "https://moorishtour.com/tour/",
    },

    {
      "@type":
        "ListItem",

      position: 3,

      name:
        propsObj.title,

      item:
        propsObj.url,
    },
  ],
};

const tourSchemaData = {
  "@context":
    "https://schema.org",

  "@graph": [
    {
      "@type":
        "WebSite",

      "@id":
        "https://moorishtour.com/#website",

      url:
        "https://moorishtour.com/",

      name:
        "Moorish Tour",
    },

    {
      "@type":
        "TravelAgency",

      "@id":
        "https://moorishtour.com/#organization",

      name:
        "Moorish Tour",

      url:
        "https://moorishtour.com/",

      telephone:
        "+212628812520",

      email:
        "moorishtour@gmail.com",

      address: {
        "@type":
          "PostalAddress",

        addressCountry:
          "MA",
      },

      areaServed: {
        "@type":
          "Country",

        name:
          "Morocco",
      },
    },

    {
      "@type":
        "WebPage",

      "@id":
        `${propsObj.url}#webpage`,

      url:
        propsObj.url,

      name:
        propsObj.title,

      description:
        propsObj.description,

      isPartOf: {
        "@id":
          "https://moorishtour.com/#website",
      },

      about: {
        "@id":
          `${propsObj.url}#tour`,
      },
    },

    {
      "@type":
        "TouristTrip",

      "@id":
        `${propsObj.url}#tour`,

      name:
        propsObj.title,

      url:
        propsObj.url,

      description:
        propsObj.overeview,

      provider: {
        "@id":
          "https://moorishtour.com/#organization",
      },

      touristType: [
        "Couples",
        "Families",
        "Private travelers",
        "Adventure travelers",
        "Cultural travelers",
        "Sahara desert travelers",
      ],

      tripOrigin: {
        "@type":
          "Place",

        name:
          "Marrakech",

        address: {
          "@type":
            "PostalAddress",

          addressLocality:
            "Marrakech",

          addressCountry:
            "MA",
        },
      },

      itinerary: {
        "@type":
          "ItemList",

        name:
          "4 Days Marrakech to Fes Desert Tour Itinerary",

        numberOfItems:
          4,

        itemListElement:
          itinerary.map(
            (day, index) => ({
              "@type":
                "ListItem",

              position:
                index + 1,

              name:
                day.title,

              description:
                day.description,
            })
          ),
      },

      additionalProperty: [
        {
          "@type":
            "PropertyValue",

          name:
            "Duration",

          value:
            "4 days / 3 nights",
        },

        {
          "@type":
            "PropertyValue",

          name:
            "Starting City",

          value:
            "Marrakech",
        },

        {
          "@type":
            "PropertyValue",

          name:
            "Ending City",

          value:
            "Fes",
        },

        {
          "@type":
            "PropertyValue",

          name:
            "Sahara Destination",

          value:
            "Merzouga / Erg Chebbi",
        },

        {
          "@type":
            "PropertyValue",

          name:
            "Camel Trekking",

          value:
            "Included",
        },

        {
          "@type":
            "PropertyValue",

          name:
            "Desert Camp",

          value:
            "Included according to selected package",
        },

        {
          "@type":
            "PropertyValue",

          name:
            "Mountain Crossings",

          value:
            "High Atlas and Middle Atlas",
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function PageTour() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            serializeStructuredData(attachProductToTourGraph(tourSchemaData, { url: propsObj.url, name: propsObj.title, description: propsObj.description, image: propsObj.imageurl, price: propsObj.price, priceCurrency: "EUR", ...getTourReviewSchemaFields(propsObj.url) })),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              faqSchema
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema
            ),
        }}
      />

      <div>
        <Hero url={propsObj.url}
          image={propsObj.image}
          imagetitle={
            propsObj.imagetitle
          }
          imagerRobbicon={
            propsObj.imagerRobbicon
          }
          price={propsObj.price}
          type={propsObj.type}
          title={propsObj.title}
          description={
            propsObj.description
          }
          duration={
            propsObj.duration
          }
          route={propsObj.route}
          reviews={propsObj.reviews}
          reviewsRate={
            propsObj.reviewsRate
          }
          maxPeople={
            propsObj.maxPeople
          }
          accommodation={
            propsObj.accommodation
          }
          activities={
            propsObj.activities
          }
        />

        <ReviewsSection url={propsObj.url}
          reviewRate={
            reviews.reviewRate
          }
          review={reviews.review}
        />

        <TourFeatures />

        <TourNavigation />

        <div className="mx-auto w-[98%] py-5">
          <div className="gap-4 md:grid lg:grid-cols-4">
            <div className="lg:col-span-3">

              {/* ---------------------------------------------------------- */}
              {/* OVERVIEW                                                   */}
              {/* ---------------------------------------------------------- */}

              <section
                className="my-10 scroll-mt-42 py-10"
                id="overview"
              >
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Marrakech to Fes via the Sahara
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    About the 4 Days Marrakech to Fes Desert Tour
                  </h2>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    This{" "}
                    <strong>
                      4 days tour from Marrakech to Fes
                    </strong>{" "}
                    turns the journey between two of Morocco&apos;s most famous cities into a complete desert adventure. Instead of taking a direct transfer, you travel across mountain passes, kasbah valleys, desert landscapes and the Sahara before finishing in Fes.
                  </p>

                  <p>
                    The route is especially useful for travelers who want to combine{" "}
                    <strong>
                      Marrakech, Merzouga and Fes
                    </strong>{" "}
                    in one itinerary without returning to Marrakech after the desert. Each day introduces a different landscape, from the High Atlas to Dades and Todra, then Erg Chebbi and finally the Middle Atlas.
                  </p>
                </div>

                <Overview
                  highlightsOverview={
                    highlightsOverview
                  }
                >
                  <>
                    Your{" "}
                    <strong>
                      4 days Marrakech to Fes desert tour
                    </strong>{" "}
                    begins in{" "}
                    <PlaceHoverCard place="marrakech">
                      Marrakech
                    </PlaceHoverCard>
                    , where your driver picks you up from your riad, hotel or agreed meeting point. From the city, the road quickly begins climbing into the{" "}
                    <PlaceHoverCard place="high-atlas-mountains">
                      High Atlas Mountains
                    </PlaceHoverCard>
                    . This first part of the journey is filled with mountain views, traditional Amazigh villages and changing scenery as you leave the Marrakech plains and enter southern Morocco.

                    <br />
                    <br />

                    Continue through the High Atlas toward{" "}
                    <PlaceHoverCard place="ait-ben-haddou">
                      Ait Ben Haddou
                    </PlaceHoverCard>
                    , one of the best-known fortified settlements in Morocco. The old ksar is an important cultural stop on the route, giving you time to see traditional earthen architecture before continuing to{" "}
                    <PlaceHoverCard place="ouarzazate">
                      Ouarzazate
                    </PlaceHoverCard>
                    . Ouarzazate is your first overnight area and is known for kasbah landscapes and its connection with Morocco&apos;s film industry.

                    <br />
                    <br />

                    On the second day, leave{" "}
                    <PlaceHoverCard place="ouarzazate">
                      Ouarzazate
                    </PlaceHoverCard>{" "}
                    and travel east through southern Morocco. The road passes oasis and kasbah scenery before reaching{" "}
                    <PlaceHoverCard place="rose-valley">
                      Rose Valley
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="kelaat-mgouna">
                      Kelaat M&apos;Gouna
                    </PlaceHoverCard>
                    . Continue into{" "}
                    <PlaceHoverCard place="dades-valley">
                      Dades Valley
                    </PlaceHoverCard>
                    , where traditional villages, dramatic rocks and winding roads create one of the most scenic parts of the Marrakech to Fes desert route.

                    <br />
                    <br />

                    The third day takes you from Dades toward the Sahara. Pass through{" "}
                    <PlaceHoverCard place="tinghir">
                      Tinghir
                    </PlaceHoverCard>{" "}
                    and stop at{" "}
                    <PlaceHoverCard place="todra-gorge">
                      Todra Gorge
                    </PlaceHoverCard>
                    , where high limestone walls form a dramatic canyon. After your walk, continue east through desert-edge landscapes toward{" "}
                    <PlaceHoverCard place="erfoud">
                      Erfoud
                    </PlaceHoverCard>{" "}
                    and finally{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    In{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    , the road journey changes into a Sahara experience. Meet your camel guide and ride across the golden dunes of{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>{" "}
                    around sunset. The dunes, quiet desert atmosphere and changing evening colors are some of the most memorable parts of this 4-day Morocco itinerary. Continue to your Sahara camp for dinner, local music and an overnight stay beneath the desert sky.

                    <br />
                    <br />

                    On the final morning, leave the Sahara and begin the journey north toward Fes. Travel through the palm-filled{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>{" "}
                    before continuing toward{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>
                    . After the dry landscapes of southeastern Morocco, the road gradually enters the{" "}
                    <PlaceHoverCard place="middle-atlas">
                      Middle Atlas Mountains
                    </PlaceHoverCard>
                    , where the scenery becomes cooler and greener.

                    <br />
                    <br />

                    Continue through{" "}
                    <PlaceHoverCard place="ifrane">
                      Ifrane
                    </PlaceHoverCard>{" "}
                    before reaching{" "}
                    <PlaceHoverCard place="fes">
                      Fes
                    </PlaceHoverCard>
                    . Your driver drops you at your riad, hotel or agreed location in the city. By choosing this one-way desert itinerary, you connect Marrakech and Fes while experiencing the{" "}
                    <PlaceHoverCard place="high-atlas-mountains">
                      High Atlas
                    </PlaceHoverCard>
                    , southern kasbah regions,{" "}
                    <PlaceHoverCard place="dades-valley">
                      Dades Valley
                    </PlaceHoverCard>
                    ,{" "}
                    <PlaceHoverCard place="todra-gorge">
                      Todra Gorge
                    </PlaceHoverCard>
                    , the{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi Sahara
                    </PlaceHoverCard>{" "}
                    and the{" "}
                    <PlaceHoverCard place="middle-atlas">
                      Middle Atlas
                    </PlaceHoverCard>{" "}
                    in only four days.
                  </>
                </Overview>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* ROUTE                                                      */}
              {/* ---------------------------------------------------------- */}

              <section
                id="tour-route"
                className="py-8"
                aria-labelledby="tour-route-title"
              >
                <div className="mx-auto px-4">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Route at a Glance
                  </p>

                  <h2
                    id="tour-route-title"
                    className="mt-2 text-3xl font-bold text-slate-900"
                  >
                    4 Days Marrakech to Fes Desert Tour Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    The itinerary crosses Morocco from west to northeast: Marrakech and the High Atlas first, southern kasbah valleys next, the Merzouga Sahara on day three, and the Ziz Valley and Middle Atlas before reaching Fes on day four.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>

                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Marrakech to Fes Route
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {itineraryRoute.map(
                          (item) => (
                            <tr
                              key={item.day}
                              className="border-b border-amber-200 last:border-b-0"
                            >
                              <td className="whitespace-nowrap px-4 py-4 font-semibold text-amber-700">
                                {item.day}
                              </td>

                              <td className="px-4 py-4 text-gray-700">
                                {item.route}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* HIGHLIGHTS                                                 */}
              {/* ---------------------------------------------------------- */}

              <section
                className="scroll-mt-42 py-10"
                id="highlights"
              >
                <TourHighlights
                  title={tour.title}
                  highlights={
                    tour.highlights
                  }
                />
              </section>

              {/* ---------------------------------------------------------- */}
              {/* ITINERARY                                                  */}
              {/* ---------------------------------------------------------- */}

              <section
                className="scroll-mt-42 py-16"
                id="itinerary"
              >
                <TourItinerary
                  title={propsObj.title}
                  days={itinerary}
                />
              </section>

              {/* ---------------------------------------------------------- */}
              {/* PRICE                                                      */}
              {/* ---------------------------------------------------------- */}

              <section
                id="tourPrice"
                className="scroll-mt-42 py-10"
                aria-labelledby="tour-price-title"
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Tour Price
                  </p>

                  <h2
                    id="tour-price-title"
                    className="mt-2 text-2xl font-bold tracking-tight text-slate-900"
                  >
                    How Much Does the 4-Day Marrakech to Fes Desert Tour Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The final price depends on your travel dates, number of travelers, private vehicle, hotel category in Ouarzazate and Dades, desert-camp level and any itinerary customization. Request the current price for your exact dates and preferred accommodation package.
                  </p>

                  <a
                    href="#reservation-form"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-800"
                  >
                    Check Current Price & Availability
                  </a>
                </div>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* INCLUDED                                                   */}
              {/* ---------------------------------------------------------- */}

              <section
                className="scroll-mt-42 py-10"
                id="included"
              >
                <TourInclusions
                  title={propsObj.title}
                  included={
                    tourinclude.included
                  }
                  notIncluded={
                    tourinclude.notIncluded
                  }
                />
              </section>

              {/* ---------------------------------------------------------- */}
              {/* WHAT TO BRING                                              */}
              {/* ---------------------------------------------------------- */}

              <section
                className="scroll-mt-42 py-10"
                id="info"
              >
                <WhatToBring
                  description="Pack for very different conditions during this Marrakech to Fes desert tour. The High Atlas and Middle Atlas can be cooler than Marrakech, the Sahara can be hot during the day and cold at night, and Todra Gorge includes walking. Bring comfortable shoes, sun protection, light layers, a warm jacket, personal medication and a small overnight bag for the desert camp."
                  items={[
                    {
                      text:
                        "Comfortable walking shoes",
                      icon:
                        BackwardIcon,
                    },

                    {
                      text:
                        "Light and comfortable clothing",
                      icon:
                        ShieldCheckIcon,
                    },

                    {
                      text:
                        "Warm jacket or sweater",
                      icon:
                        ShieldCheckIcon,
                    },

                    {
                      text:
                        "Sunscreen and sunglasses",
                      icon:
                        SunIcon,
                    },

                    {
                      text:
                        "Hat or cap",
                      icon:
                        SunIcon,
                    },

                    {
                      text:
                        "Camera or smartphone",
                      icon:
                        CameraIcon,
                    },

                    {
                      text:
                        "Reusable water bottle",
                      icon:
                        BeakerIcon,
                    },

                    {
                      text:
                        "Small overnight bag for the desert camp",
                      icon:
                        BriefcaseIcon,
                    },

                    {
                      text:
                        "Personal toiletries and medication",
                      icon:
                        ShieldCheckIcon,
                    },

                    {
                      text:
                        "Power bank",
                      icon:
                        BoltIcon,
                    },
                  ]}
                />
              </section>

              {/* ---------------------------------------------------------- */}
              {/* MAP                                                        */}
              {/* ---------------------------------------------------------- */}

              <section
                className="scroll-mt-42 py-10"
                id="map"
              >
                <h2 className="mb-3 text-2xl font-bold text-slate-900">
                  Map of the 4 Days Marrakech to Fes Desert Tour
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the one-way route from Marrakech across the High Atlas to Ait Ben Haddou and Ouarzazate, continue through Dades and Todra to Merzouga, then travel north through Ziz Valley, Midelt and the Middle Atlas to Fes.
                </p>

                <TourMap
                  locations={
                    locations
                  }
                />
              </section>

              {/* ---------------------------------------------------------- */}
              {/* FAQ                                                        */}
              {/* ---------------------------------------------------------- */}

              <section
                className="scroll-mt-42 py-14"
                id="faqs"
              >
                <TourFAQs
                  head={faqs.head}
                  faqs={faqs.faqs}
                />
              </section>
            </div>

            <div className="my-10 mx-7 py-10 lg:col-span-1 lg:mx-0">
              <TourSidebar price={propsObj.price} />
            </div>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* FINAL CTA                                                      */}
          {/* -------------------------------------------------------------- */}

          <section
            id="book-tour"
            className="py-12"
            aria-labelledby="final-tour-cta-title"
          >
            <div className="mx-auto max-w-6xl px-4">
              <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-8 text-center shadow-sm md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  Marrakech → Sahara → Fes
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your 4-Day Marrakech to Fes Desert Adventure?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Cross Morocco from Marrakech to Fes through the High Atlas, Ait Ben Haddou, Dades Valley, Todra Gorge and the Merzouga Sahara, with a camel trek and overnight desert camp along the way.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#reservation-form"
                    className="inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-800"
                  >
                    Check Availability & Book
                  </a>

                  <a
                    href="#itinerary"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-gray-50"
                  >
                    View Full Itinerary
                  </a>
                </div>

                <p className="mt-5 text-sm text-gray-500">
                  4 Days · 3 Nights · Marrakech to Fes · High Atlas · Sahara Desert · Camel Trek
                </p>
              </div>
            </div>
          </section>
        </div>

        <YouMayAlsoLike
          tours={[
            {
              title:
                "7 Days Morocco Itinerary from Marrakech",

              href:
                "/tour/morocco-itinerary-7-days-from-marrakech/",

              image:
                MarrakechToMerzouga7Day,

              duration:
                "7 DAYS",
            },

            {
              title:
                "10 Days Morocco Itinerary from Marrakech",

              href:
                "/tour/morocco-itinerary-10-days-from-marrakech/",

              image:
                MarrakechToMerzouga10Day,

              duration:
                "10 DAYS",
            },

            {
              title:
                "4 Days Marrakech to Merzouga Desert Tour",

              href:
                "/tour/4-days-tour-from-marrakech-to-merzouga/",

              image:
                MarrakechToMerzouga4Day,

              duration:
                "4 DAYS",
            },

            {
              title:
                "4 Days Marrakech to Fes Desert Tour",

              href:
                "/tour/4-days-tour-from-marrakech-to-fes/",

              image:
                MarrakechToFes4Day,

              duration:
                "4 DAYS",
            },
          ]}
        />
      </div>
    </>
  );
}

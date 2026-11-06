import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Replace with your dedicated Casablanca / Rabat → Merzouga hero image when available.
import CasablancaRabat4DayImage from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";

import MarrakechToMerzouga4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";
import MarrakechToFes4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
import MarrakechToMerzouga7Day from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";
import MarrakechToMerzouga10Day from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";

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
  HomeModernIcon,
  FireIcon,
  BriefcaseIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

/* -------------------------------------------------------------------------- */
/*                               MAIN TOUR DATA                               */
/* -------------------------------------------------------------------------- */

const propsObj = {
  image: CasablancaRabat4DayImage,
  imagetitle:
    "4 Days Tour from Casablanca & Rabat to Sahara Desert via Meknes and Midelt",
  imageurl:
    "https://moorishtour.com/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon: "Atlantic Cities to Sahara",
  type: "Private Morocco Desert Tour",

  url:
    "https://moorishtour.com/tour/4-days-tour-from-casablanca-rabat-to-sahara-desert-via-meknes-and-midelt/",

  title:
    "4 Days Tour from Casablanca & Rabat to Sahara Desert via Meknes and Midelt",

  description:
    "Travel from Casablanca or Rabat to Merzouga on a 4-day Sahara tour via Meknes, Midelt and Ziz Valley, then Todra Gorge and Imilchil.",

  overeview:
    "A 4-day Sahara desert tour from Casablanca or Rabat through Meknes, Midelt and Ziz Valley to Merzouga and Erg Chebbi, followed by Todra Gorge, Imilchil and Kasbah Tadla.",

  duration: "4 Days / 3 Nights",

  route:
    "Casablanca / Rabat → Meknes → Midelt → Ziz Valley → Merzouga → Todra Gorge → Imilchil → Kasbah Tadla → Casablanca / Rabat",

  reviews: "4",
  reviewsRate: "5",
  price:120,

  maxPeople: "Private / Small Group",
  accommodation: "Hotels / Guesthouse / Desert Camp",
  activities: "Culture, Camel Trekking, Desert & Mountains",
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "4 Days Casablanca & Rabat to Sahara Desert Tour | Merzouga",

  description:
    "Travel from Casablanca or Rabat to Merzouga on a 4-day Sahara tour via Meknes, Midelt and Ziz Valley, then Todra Gorge and Imilchil.",

  keywords: [
    "4 days tour from Casablanca to Sahara Desert",
    "4 days tour from Rabat to Sahara Desert",
    "4 days Casablanca to Merzouga desert tour",
    "4 days Rabat to Merzouga desert tour",
    "Casablanca to Merzouga 4 days",
    "Rabat to Merzouga 4 days",
    "Casablanca Sahara desert tour",
    "Rabat Sahara desert tour",
    "Casablanca to Sahara Desert",
    "Rabat to Sahara Desert",
    "Morocco desert tour from Casablanca",
    "Morocco desert tour from Rabat",
    "Casablanca to Merzouga via Meknes",
    "Rabat to Merzouga via Meknes",
    "Casablanca Meknes Midelt Merzouga tour",
    "Rabat Meknes Midelt Merzouga tour",
    "Midelt Ziz Valley Merzouga tour",
    "Ziz Valley Morocco tour",
    "Merzouga camel trekking",
    "Merzouga desert camp",
    "Erg Chebbi camel trek",
    "Merzouga Sahara camp",
    "Merzouga to Todra Gorge tour",
    "Todra Gorge Imilchil tour",
    "Imilchil Morocco tour",
    "Kasbah Tadla Morocco",
    "4 day Morocco itinerary from Casablanca",
    "4 day Morocco itinerary from Rabat",
    "private Morocco desert tour",
    "Morocco Sahara tour 4 days",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "4 Days Casablanca & Rabat to Sahara Desert Tour | Merzouga",
    description:
      "Cross Morocco from Casablanca or Rabat through Meknes, Midelt and Ziz Valley to Merzouga, then continue through Todra Gorge and Imilchil.",
    url: propsObj.url,
    siteName: "Moorish Tour",
    type: "website",
    images: [
      {
        url: propsObj.imageurl,
        width: 1200,
        height: 630,
        alt: propsObj.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: propsObj.title,
    description: propsObj.description,
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
    title: "Meknes",
    subtitle: "Historic imperial city",
  },
  {
    icon: MapIcon,
    title: "Ziz Valley",
    subtitle: "Palm groves & oasis views",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle: "Camel trek & desert camp",
  },
  {
    icon: HomeModernIcon,
    title: "Imilchil",
    subtitle: "High Atlas mountain region",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ITINERARY                                  */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Casablanca / Rabat – Meknes – Midelt",

    description:
      "Your 4-day Sahara desert tour from Casablanca or Rabat begins with morning pickup from your hotel, riad or agreed meeting point. Leave Morocco's Atlantic side and travel inland toward Meknes, one of the country's historic imperial cities. Depending on your starting city and departure time, enjoy a short stop in Meknes for sightseeing, coffee or lunch before continuing southeast. As the road moves farther from the coast, the scenery changes from urban and agricultural landscapes to rolling hills and mountain views. Continue toward Midelt, a town located between the Middle Atlas and High Atlas regions and a useful overnight point on the road to southeastern Morocco. Arrive in Midelt in the afternoon or evening, check into your hotel or guesthouse and relax before the next day's journey through the Ziz Valley toward the Sahara.",

    details: [
      "Pickup in Casablanca or Rabat",
      "Private or small-group transport",
      "Meknes",
      "Imperial-city atmosphere",
      "Scenic inland road",
      "Mountain landscapes",
      "Arrival in Midelt",
      "Hotel or guesthouse",
      "Dinner & breakfast according to package",
    ],
  },

  {
    title:
      "Day 2: Midelt – Ziz Valley – Erfoud – Merzouga – Erg Chebbi Desert Camp",

    description:
      "After breakfast in Midelt, continue south toward one of the most scenic sections of the Casablanca or Rabat to Sahara route. The landscapes become drier and more dramatic as the road approaches the Ziz Valley. Stop at panoramic viewpoints where long palm groves and oasis settlements stretch through the valley below. Continue toward Erfoud, a desert gateway town known for dates, fossils and its location close to the Tafilalet oasis region. From Erfoud, travel toward Merzouga and the golden Erg Chebbi dunes. In the late afternoon, meet your camel guide and begin a peaceful camel trek across the Sahara as the sun moves lower over the dunes. Stop to enjoy sunset before continuing to your desert camp. After arrival, settle into your tent, enjoy dinner and spend the evening with local music in the quiet desert atmosphere.",

    details: [
      "Breakfast in Midelt",
      "Ziz Valley",
      "Palm-grove viewpoints",
      "Erfoud",
      "Fossil and date region",
      "Arrival in Merzouga",
      "Erg Chebbi dunes",
      "Camel trekking",
      "Sahara sunset",
      "Desert camp",
      "Dinner & breakfast",
      "Local music",
    ],
  },

  {
    title:
      "Day 3: Merzouga – Rissani – Tinghir – Todra Gorge – Imilchil",

    description:
      "Wake early to watch sunrise over the Erg Chebbi dunes before breakfast at the desert camp. Return toward Merzouga by camel or 4x4 transfer and meet your driver for the journey west. Pass through the Tafilalet region and continue toward Tinghir, a palm-filled oasis town and the main gateway to Todra Gorge. At Todra Gorge, take time for a walk between the high limestone canyon walls and enjoy the cooler air beside the riverbed before continuing north. The route then climbs away from the desert-edge valleys toward the High Atlas region of Imilchil. The scenery changes noticeably as dry plateaus give way to mountain landscapes, traditional villages and higher elevations. Arrive in Imilchil in the late afternoon or evening for dinner and an overnight stay in a local hotel or guesthouse.",

    details: [
      "Sahara sunrise",
      "Breakfast at desert camp",
      "Camel or 4x4 transfer",
      "Departure from Merzouga",
      "Rissani region",
      "Tinghir",
      "Todra Gorge",
      "Canyon walk",
      "High Atlas mountain road",
      "Arrival in Imilchil",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 4: Imilchil – High Atlas – Kasbah Tadla – Casablanca / Rabat",

    description:
      "After breakfast, leave Imilchil and begin the final journey toward Morocco's Atlantic side. Travel through remote High Atlas landscapes where mountain valleys, traditional villages and open plateaus create a completely different atmosphere from the Sahara dunes of the previous days. Continue toward Kasbah Tadla in central Morocco, where you can stop for lunch, coffee or a short rest depending on timing. From there, continue west through the countryside toward Casablanca. Travelers ending the tour in Rabat can arrange the most suitable final drop-off according to the confirmed booking. Arrival is normally in the late afternoon or evening, depending on traffic, weather and road conditions. Your 4-day Casablanca or Rabat to Sahara Desert tour ends with drop-off at your hotel, riad or agreed location.",

    details: [
      "Breakfast in Imilchil",
      "High Atlas mountain scenery",
      "Traditional villages",
      "Kasbah Tadla",
      "Lunch or rest stop",
      "Central Morocco landscapes",
      "Return toward the Atlantic side",
      "Drop-off in Casablanca or Rabat",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  REVIEWS                                   */
/* -------------------------------------------------------------------------- */

/*
  These are clearly labeled SAMPLE review drafts so the ReviewsSection is never empty.
  Replace them with genuine customer names, dates, countries and feedback before
  presenting them publicly as real testimonials.
*/

const reviews = {

  reviewRate: [

    {

      averageRating: parseInt(propsObj.reviewsRate),

      totalReviews: parseInt(propsObj.reviews),

    },

  ],

  review: [

    {

      id: 1,

      name: "Sample Traveler 1",

      avatar:
        "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",

      flag: "🌍",

      rating: 5,

      date: "Sample review",

      review:
        "This sample review is written for the 4-day Casablanca or Rabat to Sahara Desert route. The journey through Meknes and Midelt was a great introduction to inland Morocco, and the Ziz Valley was one of the most scenic parts of the drive. Reaching Merzouga for the camel trek, sunset over Erg Chebbi and the overnight desert camp made the Sahara experience unforgettable. Todra Gorge and the mountain road toward Imilchil added a very different landscape before the return through Kasbah Tadla.",

    },

    {

      id: 2,

      name: "Sample Traveler 2",

      avatar: "/images/toursits-comes-to-morocco.jpeg",

      flag: "🌍",

      rating: 5,

      date: "Sample review",

      review:
        "This sample testimonial is tailored to the Casablanca and Rabat departure version of the tour. The route was varied, with Meknes, Midelt, the palm groves of the Ziz Valley, Erfoud and the Sahara all in four days. The camel ride across Erg Chebbi at sunset was the highlight, while the stop at Todra Gorge and the overnight stay in Imilchil made the return journey feel much more interesting than simply driving back the same way.",

    },

    {

      id: 3,

      name: "Sample Traveler 3",

      avatar: "/images/toursits-comes-to-morocco.jpeg",

      flag: "🌍",

      rating: 5,

      date: "Sample review",

      review:
        "This sample review reflects the main experiences of the tour: a scenic road trip from Casablanca or Rabat, an overnight stop in Midelt, panoramic views over the Ziz Valley, Erfoud, Merzouga and the Erg Chebbi dunes. The desert camp, camel trek and Sahara sunrise were memorable, and the drive through Tinghir, Todra Gorge and the High Atlas toward Imilchil gave the itinerary a strong mix of desert and mountain scenery.",

    },

    {

      id: 4,

      name: "Sample Traveler 4",

      avatar:
        "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",

      flag: "🌍",

      rating: 5,

      date: "Sample review",

      review:
        "This sample testimonial is designed for the exact 4-day itinerary. The changing landscapes were the best part, from the imperial-city atmosphere of Meknes to Midelt, the oasis scenery of the Ziz Valley, the Sahara dunes near Merzouga and the high mountain region around Imilchil. The camel trek at sunset and the desert camp were special, and the final route through Kasbah Tadla completed a very varied Morocco road trip.",

    },

  ],

};

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Pickup from your hotel or agreed meeting point in Casablanca or Rabat",
    "Drop-off in Casablanca or Rabat according to the confirmed booking",
    "Comfortable air-conditioned vehicle",
    "English-speaking driver",
    "1 night in a hotel or guesthouse in Midelt",
    "1 night in a Merzouga desert camp",
    "1 night in a hotel or guesthouse in Imilchil",
    "Breakfasts and dinners according to the confirmed package",
    "Camel trek in the Erg Chebbi dunes",
    "4x4 transfer to or from the desert camp when arranged",
  ],

  notIncluded: [
    "Lunches",
    "Drinks",
    "Entrance fees when required",
    "Local guides unless specifically listed",
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
    id: "casablanca",
    name: "Casablanca",
    lat: 33.5731,
    lng: -7.5898,
    day: 1,
    description:
      "One possible starting point for the four-day Morocco Sahara itinerary.",
  },
  {
    id: "rabat",
    name: "Rabat",
    lat: 34.0209,
    lng: -6.8416,
    day: 1,
    description:
      "Rabat can also be used as the departure point for this Sahara route.",
  },
  {
    id: "meknes",
    name: "Meknes",
    lat: 33.8935,
    lng: -5.5473,
    day: 1,
    description:
      "Historic imperial-city stop on the road toward Midelt.",
  },
  {
    id: "midelt",
    name: "Midelt",
    lat: 32.6806,
    lng: -4.7369,
    day: 1,
    description:
      "First overnight stop before continuing to the Ziz Valley and Sahara.",
  },
  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.86,
    lng: -4.35,
    day: 2,
    description:
      "Oasis valley known for long palm groves and panoramic viewpoints.",
  },
  {
    id: "erfoud",
    name: "Erfoud",
    lat: 31.4353,
    lng: -4.2326,
    day: 2,
    description:
      "Desert gateway town known for fossils and date production.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 2,
    description:
      "Sahara village beside the Erg Chebbi dunes and starting point for the camel trek.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi",
    lat: 31.1477,
    lng: -3.9786,
    day: 2,
    description:
      "Golden Sahara dune field for camel trekking, sunset, sunrise and camping.",
  },
  {
    id: "tinghir",
    name: "Tinghir",
    lat: 31.5147,
    lng: -5.5328,
    day: 3,
    description:
      "Oasis town and gateway to Todra Gorge.",
  },
  {
    id: "todra-gorge",
    name: "Todra Gorge",
    lat: 31.585,
    lng: -5.59,
    day: 3,
    description:
      "Dramatic limestone canyon and walking stop before the road climbs toward Imilchil.",
  },
  {
    id: "imilchil",
    name: "Imilchil",
    lat: 32.154,
    lng: -5.635,
    day: 3,
    description:
      "High Atlas mountain town and third-night stop after leaving the desert region.",
  },
  {
    id: "kasbah-tadla",
    name: "Kasbah Tadla",
    lat: 32.5977,
    lng: -6.2684,
    day: 4,
    description:
      "Central Moroccan town on the final road toward Casablanca or Rabat.",
  },
  {
    id: "casablanca-return",
    name: "Casablanca",
    lat: 33.5731,
    lng: -7.5898,
    day: 4,
    description:
      "Standard final destination for the four-day tour.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 4 Days Casablanca & Rabat to Sahara Desert Tour",

      description:
        "Find practical answers about this 4-day Morocco desert tour from Casablanca or Rabat, including Meknes, Midelt, Ziz Valley, Erfoud, Merzouga, Erg Chebbi, camel trekking, Sahara camp, Todra Gorge, Imilchil, Kasbah Tadla, driving time, accommodation and meals.",
    },
  ],

  faqs: [
    {
      question:
        "Can I start this 4-day Sahara tour from Casablanca or Rabat?",

      answer:
        "Yes. The tour can begin in Casablanca or Rabat. Your exact pickup point and departure time should be confirmed before the trip because the starting city affects the first day's driving schedule.",
    },
    {
      question:
        "Is 4 days enough to visit the Sahara from Casablanca or Rabat?",

      answer:
        "Four days is possible and gives you more flexibility than a three-day Sahara trip. The route still includes long road sections, but the overnight stops in Midelt, Merzouga and Imilchil divide the journey into more manageable stages.",
    },
    {
      question:
        "What route does the tour follow?",

      answer:
        "The route travels from Casablanca or Rabat through Meknes to Midelt, continues through the Ziz Valley and Erfoud to Merzouga, then travels through Todra Gorge and Imilchil before returning through Kasbah Tadla.",
    },
    {
      question:
        "Does the tour stop in Meknes?",

      answer:
        "Yes. Meknes is included on the first day's route. The amount of sightseeing time depends on your pickup city, departure time and overall driving schedule.",
    },
    {
      question:
        "Where do we stay on the first night?",

      answer:
        "The first night is spent in Midelt in a hotel or guesthouse. This breaks the journey between the Atlantic cities and southeastern Morocco.",
    },
    {
      question:
        "Does the tour visit Ziz Valley?",

      answer:
        "Yes. Ziz Valley is one of the main scenic stops on day two. The route offers views of palm groves and oasis landscapes before continuing toward Erfoud.",
    },
    {
      question:
        "What is Erfoud known for?",

      answer:
        "Erfoud is a desert gateway town in southeastern Morocco known for fossils, dates and its location close to the Tafilalet oasis region and Merzouga.",
    },
    {
      question:
        "Is camel trekking included in Merzouga?",

      answer:
        "Yes. The standard itinerary includes a camel trek across the Erg Chebbi dunes, normally timed around sunset before reaching the desert camp.",
    },
    {
      question:
        "Can I reach the Sahara camp without riding a camel?",

      answer:
        "Yes. A 4x4 transfer can usually be arranged for travelers who prefer not to ride a camel or who have mobility concerns.",
    },
    {
      question:
        "Can we watch sunset and sunrise in the Sahara?",

      answer:
        "Yes, weather permitting. Sunset is normally enjoyed during the camel trek on day two, and travelers can wake early on day three for sunrise over Erg Chebbi.",
    },
    {
      question:
        "Does the tour include Todra Gorge?",

      answer:
        "Yes. Day three includes Todra Gorge after leaving Merzouga. You can take a short walk through the canyon before continuing toward the High Atlas and Imilchil.",
    },
    {
      question:
        "Why is Imilchil included in the itinerary?",

      answer:
        "Imilchil adds a High Atlas mountain experience after the Sahara. The route offers traditional villages, higher elevations and cooler landscapes before the final return toward Casablanca or Rabat.",
    },
    {
      question:
        "Where do we sleep on the third night?",

      answer:
        "The third night is spent in Imilchil in a hotel or guesthouse, depending on the accommodation category selected for your booking.",
    },
    {
      question:
        "Does the final day pass through Kasbah Tadla?",

      answer:
        "Yes. Kasbah Tadla is included on the return route and can be used for a rest, coffee or lunch stop depending on timing.",
    },
    {
      question:
        "How much driving is involved?",

      answer:
        "This itinerary covers a large distance across Morocco, so each day includes road travel. The route is divided with overnight stops and sightseeing to make the journey more comfortable and interesting.",
    },
    {
      question:
        "Are breakfasts and dinners included?",

      answer:
        "Breakfasts and dinners are included according to the confirmed accommodation package. Lunches and drinks are normally not included.",
    },
    {
      question:
        "Is this tour suitable for families?",

      answer:
        "Families can take the tour, especially as a private trip, but parents should consider the long driving sections. Extra rest stops can usually be arranged.",
    },
    {
      question:
        "What should I pack for the tour?",

      answer:
        "Bring comfortable shoes, light clothing, sun protection, sunglasses, a hat, a reusable water bottle, a warm layer for Merzouga and Imilchil, personal medication, a small overnight bag and a power bank.",
    },
    {
      question:
        "Can this 4-day Morocco desert tour be customized?",

      answer:
        "Yes. Private tours can often be adjusted for pickup city, hotel category, desert-camp level, stops, travel pace and final drop-off.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the 4 Days Casablanca & Rabat to Sahara Desert Tour",

  highlights: [
    "Start your Morocco desert journey from Casablanca or Rabat.",
    "Visit Meknes, one of Morocco's imperial cities.",
    "Travel through central Morocco toward Midelt.",
    "Spend the first night in the mountain region.",
    "Enjoy panoramic views over the Ziz Valley.",
    "See palm groves and oasis landscapes.",
    "Visit Erfoud, a gateway to the Sahara.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Ride camels across the Sahara around sunset.",
    "Spend one night in a Merzouga desert camp.",
    "Wake early for sunrise over Erg Chebbi.",
    "Travel through the Tafilalet region.",
    "Stop in Tinghir.",
    "Walk through Todra Gorge.",
    "Continue into the High Atlas toward Imilchil.",
    "Spend the third night in the Imilchil mountain region.",
    "Cross remote mountain scenery on day four.",
    "Pass through Kasbah Tadla.",
    "Finish in Casablanca or Rabat.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route:
      "Casablanca / Rabat → Meknes → Midelt",
    target: "day-1",
  },
  {
    day: "Day 2",
    route:
      "Midelt → Ziz Valley → Erfoud → Merzouga → Erg Chebbi Desert Camp",
    target: "day-2",
  },
  {
    day: "Day 3",
    route:
      "Merzouga → Rissani → Tinghir → Todra Gorge → Imilchil",
    target: "day-3",
  },
  {
    day: "Day 4",
    route:
      "Imilchil → High Atlas → Kasbah Tadla → Casablanca / Rabat",
    target: "day-4",
  },
];

/* -------------------------------------------------------------------------- */
/*                             STRUCTURED DATA                                */
/* -------------------------------------------------------------------------- */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: faqs.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://moorishtour.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Morocco Tours",
      item: "https://moorishtour.com/tour/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: propsObj.title,
      item: propsObj.url,
    },
  ],
};

const tourSchemaData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://moorishtour.com/#website",
      url: "https://moorishtour.com/",
      name: "Moorish Tour",
    },

    {
      "@type": "TravelAgency",
      "@id": "https://moorishtour.com/#organization",
      name: "Moorish Tour",
      url: "https://moorishtour.com/",
      telephone: "+212628812520",
      email: "moorishtour@gmail.com",

      address: {
        "@type": "PostalAddress",
        addressCountry: "MA",
      },

      areaServed: {
        "@type": "Country",
        name: "Morocco",
      },
    },

    {
      "@type": "WebPage",
      "@id": `${propsObj.url}#webpage`,
      url: propsObj.url,
      name: propsObj.title,
      description: propsObj.description,

      isPartOf: {
        "@id": "https://moorishtour.com/#website",
      },

      about: {
        "@id": `${propsObj.url}#tour`,
      },
    },

    {
      "@type": "TouristTrip",
      "@id": `${propsObj.url}#tour`,

      name: propsObj.title,
      url: propsObj.url,

      description:
        "A four-day Morocco Sahara tour from Casablanca or Rabat through Meknes, Midelt and Ziz Valley to Erfoud, Merzouga and Erg Chebbi, followed by Todra Gorge, Imilchil and Kasbah Tadla.",

      provider: {
        "@id": "https://moorishtour.com/#organization",
      },

      touristType: [
        "Couples",
        "Families",
        "Private travelers",
        "Adventure travelers",
        "Sahara desert travelers",
        "Mountain travelers",
      ],

      tripOrigin: [
        {
          "@type": "Place",
          name: "Casablanca",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Casablanca",
            addressCountry: "MA",
          },
        },
        {
          "@type": "Place",
          name: "Rabat",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rabat",
            addressCountry: "MA",
          },
        },
      ],

      itinerary: {
        "@type": "ItemList",
        name:
          "4 Days Casablanca & Rabat to Sahara Desert Tour Itinerary",
        numberOfItems: 4,

        itemListElement: itinerary.map((day, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: day.title,
          description: day.description,
        })),
      },

      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Duration",
          value: "4 days / 3 nights",
        },
        {
          "@type": "PropertyValue",
          name: "Starting Cities",
          value: "Casablanca or Rabat",
        },
        {
          "@type": "PropertyValue",
          name: "Sahara Destination",
          value: "Merzouga / Erg Chebbi",
        },
        {
          "@type": "PropertyValue",
          name: "Camel Trekking",
          value: "Included",
        },
        {
          "@type": "PropertyValue",
          name: "Desert Camp",
          value: "Included",
        },
        {
          "@type": "PropertyValue",
          name: "Mountain Destination",
          value: "Imilchil / High Atlas",
        },
        {
          "@type": "PropertyValue",
          name: "Transportation",
          value: "Air-conditioned vehicle",
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
          __html: serializeStructuredData(attachProductToTourGraph(tourSchemaData, { url: propsObj.url, name: propsObj.title, description: propsObj.description, image: propsObj.imageurl, price: propsObj.price, priceCurrency: "EUR", ...getTourReviewSchemaFields(propsObj.url) })),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div>
        <Hero url={propsObj.url}
          image={propsObj.image}
          imagetitle={propsObj.imagetitle}
          imagerRobbicon={propsObj.imagerRobbicon}
          type={propsObj.type}
          title={propsObj.title}
          description={propsObj.description}
          duration={propsObj.duration}
          route={propsObj.route}
          reviews={propsObj.reviews}
          reviewsRate={propsObj.reviewsRate}
          price={propsObj.price}
          maxPeople={propsObj.maxPeople}
          accommodation={propsObj.accommodation}
          activities={propsObj.activities}
        />

        <ReviewsSection url={propsObj.url}  reviewRate={reviews.reviewRate} review={reviews.review}  />

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
                    Casablanca & Rabat Sahara Tour
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    What Is the 4 Days Casablanca & Rabat to Sahara Desert Tour?
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
                      4 days tour from Casablanca or Rabat to the Sahara Desert
                    </strong>{" "}
                    combines Morocco&apos;s imperial-city history, mountain
                    roads, oasis landscapes, the Merzouga Sahara and a quieter
                    High Atlas route through Imilchil.
                  </p>

                  <p>
                    The itinerary is designed for travelers who want to reach
                    Erg Chebbi from the Atlantic side of Morocco without
                    returning by exactly the same road. After the Sahara,
                    the journey continues through Todra Gorge and Imilchil,
                    creating a more varied four-day road trip.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Your journey can begin in{" "}
                    <PlaceHoverCard place="casablanca">
                      Casablanca
                    </PlaceHoverCard>{" "}
                    or{" "}
                    <PlaceHoverCard place="rabat">
                      Rabat
                    </PlaceHoverCard>
                    . Travel inland toward{" "}
                    <PlaceHoverCard place="meknes">
                      Meknes
                    </PlaceHoverCard>
                    , one of Morocco&apos;s historic imperial cities, before
                    continuing toward{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>
                    , where you spend the first night.

                    <br />
                    <br />

                    The second day continues through the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>
                    , where palm groves and oasis settlements create one of the
                    most recognizable landscapes on the road toward the Sahara.
                    Continue through{" "}
                    <PlaceHoverCard place="erfoud">
                      Erfoud
                    </PlaceHoverCard>{" "}
                    to{" "}
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
                    , leave the road behind and ride a camel across{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    . Watch the Sahara sunset and continue to the desert camp
                    for dinner, music and an overnight stay beside the dunes.

                    <br />
                    <br />

                    On day three, wake early for sunrise before traveling west
                    toward{" "}
                    <PlaceHoverCard place="tinghir">
                      Tinghir
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="todra-gorge">
                      Todra Gorge
                    </PlaceHoverCard>
                    . Walk through the canyon, then continue into the High Atlas
                    toward{" "}
                    <PlaceHoverCard place="imilchil">
                      Imilchil
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    The final day leaves{" "}
                    <PlaceHoverCard place="imilchil">
                      Imilchil
                    </PlaceHoverCard>{" "}
                    and travels through mountain and central Moroccan scenery
                    toward{" "}
                    <PlaceHoverCard place="kasbah-tadla">
                      Kasbah Tadla
                    </PlaceHoverCard>
                    . Continue west and finish in{" "}
                    <PlaceHoverCard place="casablanca">
                      Casablanca
                    </PlaceHoverCard>{" "}
                    or{" "}
                    <PlaceHoverCard place="rabat">
                      Rabat
                    </PlaceHoverCard>{" "}
                    according to your confirmed drop-off.
                  </>
                </Overview>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* ROUTE TABLE                                                */}
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
                    4 Days Casablanca / Rabat to Sahara Desert Tour Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    Travel from Casablanca or Rabat through Meknes and Midelt
                    to Merzouga, then continue via Todra Gorge and Imilchil
                    before returning through Kasbah Tadla.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>

                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Tour Route
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {itineraryRoute.map((item) => (
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
                        ))}
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
                  highlights={tour.highlights}
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
                    How Much Does the 4-Day Casablanca or Rabat Sahara Tour Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The final price depends on your pickup city, travel date,
                    number of travelers, vehicle, hotel category, desert-camp
                    level and accommodation in Imilchil. Request the current
                    rate for your exact dates and preferred tour type.
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
                  included={tourinclude.included}
                  notIncluded={tourinclude.notIncluded}
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
                  description="Pack for different climates during this 4-day Casablanca or Rabat to Sahara tour. The route crosses inland Morocco, the Merzouga desert and the High Atlas around Imilchil. Bring sun protection for the Sahara, comfortable shoes for Todra Gorge and warm layers for desert nights and higher mountain elevations."
                  items={[
                    {
                      text: "Comfortable walking shoes",
                      icon: BackwardIcon,
                    },
                    {
                      text: "Light and comfortable clothing",
                      icon: ShieldCheckIcon,
                    },
                    {
                      text: "Warm jacket or sweater",
                      icon: ShieldCheckIcon,
                    },
                    {
                      text: "Sunscreen and sunglasses",
                      icon: SunIcon,
                    },
                    {
                      text: "Hat or cap",
                      icon: SunIcon,
                    },
                    {
                      text: "Camera or smartphone",
                      icon: CameraIcon,
                    },
                    {
                      text: "Reusable water bottle",
                      icon: BeakerIcon,
                    },
                    {
                      text: "Small overnight bag for the desert camp",
                      icon: BriefcaseIcon,
                    },
                    {
                      text: "Personal toiletries and medication",
                      icon: ShieldCheckIcon,
                    },
                    {
                      text: "Power bank",
                      icon: BoltIcon,
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
                  Map of the 4 Days Casablanca & Rabat to Sahara Desert Tour
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the route from Casablanca or Rabat through Meknes,
                  Midelt and the Ziz Valley to Merzouga, then continue via
                  Todra Gorge and Imilchil before returning through Kasbah
                  Tadla.
                </p>

                <TourMap locations={locations} />
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
               <TourSidebar  price={propsObj.price}/>
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
                  Atlantic Cities → Sahara → High Atlas
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your 4-Day Sahara Tour from Casablanca or Rabat?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Travel through Meknes, Midelt and the Ziz Valley to Merzouga,
                  enjoy camel trekking and a Sahara camp, then continue through
                  Todra Gorge and Imilchil before returning to the Atlantic
                  side of Morocco.
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
                  4 Days · 3 Nights · Casablanca / Rabat · Merzouga · Todra Gorge · Imilchil
                </p>
              </div>
            </div>
          </section>
        </div>

        <YouMayAlsoLike
          tours={[
            {
              title:
                "4 Days Marrakech to Merzouga Desert Tour",
              href:
                "/tour/4-days-tour-from-marrakech-to-merzouga/",
              image: MarrakechToMerzouga4Day,
              duration: "4 DAYS",
            },
            {
              title:
                "4 Days Marrakech to Fes Desert Tour",
              href:
                "/tour/4-days-tour-from-marrakech-to-fes/",
              image: MarrakechToFes4Day,
              duration: "4 DAYS",
            },
            {
              title:
                "7 Days Morocco Itinerary from Marrakech",
              href:
                "/tour/morocco-itinerary-7-days-from-marrakech/",
              image: MarrakechToMerzouga7Day,
              duration: "7 DAYS",
            },
            {
              title:
                "10 Days Morocco Itinerary from Marrakech",
              href:
                "/tour/morocco-itinerary-10-days-from-marrakech/",
              image: MarrakechToMerzouga10Day,
              duration: "10 DAYS",
            },
          ]}
        />
      </div>
    </>
  );
}

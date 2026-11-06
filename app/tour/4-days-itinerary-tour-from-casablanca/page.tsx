import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Replace with your dedicated Casablanca → Merzouga → Imilchil tour image when available.
import Casablanca4DayImage from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";

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
  image: Casablanca4DayImage,
  imagetitle: "4 Days Casablanca to Merzouga Desert & Imilchil Tour",
  imageurl:
    "https://moorishtour.com/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon: "Sahara & Atlas Route",
  type: "Private Morocco Desert Tour",

  url:
    "https://moorishtour.com/tour/4-days-itinerary-tour-from-casablanca/",

  title: "4 Days Casablanca to Merzouga Desert & Imilchil Tour",

  description:
    "Travel from Casablanca to Merzouga in 4 days via Meknes, Midelt, Ziz Valley and Erfoud, then visit Todra Gorge and Imilchil before returning through Kasbah Tadla.",

  overeview:
    "A 4-day Morocco desert tour from Casablanca combining Meknes, Midelt, Ziz Valley, Erfoud, Merzouga and Erg Chebbi with camel trekking, a Sahara camp, Todra Gorge, Imilchil and Kasbah Tadla.",

  duration: "4 Days / 3 Nights",

  route:
    "Casablanca → Meknes → Midelt → Ziz Valley → Erfoud → Merzouga → Todra Gorge → Imilchil → Kasbah Tadla → Casablanca",

  reviews: "4",
  reviewsRate: "5",
  price: 200,
  maxPeople: "Private / Small Group",
  accommodation: "Hotels / Guesthouse / Desert Camp",
  activities: "Culture, Camel Trekking, Desert & Mountains",
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "4 Days Casablanca to Merzouga Desert & Imilchil Tour",

  description:
    "Take a 4-day Casablanca to Merzouga desert tour via Meknes, Midelt, Ziz Valley and Erfoud, with Erg Chebbi camel trek, Todra Gorge and Imilchil.",

  keywords: [
    "4 days itinerary tour from Casablanca",
    "4 days tour from Casablanca",
    "4 day Morocco tour from Casablanca",
    "4 days Casablanca to Merzouga desert tour",
    "Casablanca to Merzouga 4 days",
    "Casablanca to Merzouga desert tour",
    "Casablanca Sahara desert tour",
    "Casablanca to Sahara desert",
    "Morocco desert tour from Casablanca",
    "Casablanca desert tour 4 days",
    "Casablanca to Erg Chebbi",
    "Casablanca to Merzouga via Meknes",
    "Casablanca Meknes Midelt Merzouga tour",
    "Midelt Ziz Valley Erfoud Merzouga tour",
    "Ziz Valley Morocco tour",
    "Erfoud to Merzouga desert tour",
    "Merzouga camel trekking tour",
    "Merzouga desert camp",
    "Erg Chebbi Sahara camp",
    "Merzouga to Todra Gorge tour",
    "Todra Gorge to Imilchil",
    "Imilchil Morocco tour",
    "Casablanca to Imilchil tour",
    "Kasbah Tadla Casablanca route",
    "Morocco 4 day itinerary from Casablanca",
    "4 day Morocco road trip",
    "private Morocco tour from Casablanca",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "4 Days Casablanca to Merzouga Desert & Imilchil Tour",
    description:
      "Cross Morocco from Casablanca through Meknes, Midelt and the Ziz Valley to Merzouga, then continue through Todra Gorge and Imilchil before returning to Casablanca.",
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
    subtitle: "Imperial-city stop",
  },
  {
    icon: MapIcon,
    title: "Ziz Valley",
    subtitle: "Oasis & palm-grove scenery",
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
      "Day 1: Casablanca – Meknes – Midelt",

    description:
      "Your 4-day tour from Casablanca begins with morning pickup from your hotel, accommodation or agreed meeting point. Leave Morocco's Atlantic coast and travel inland toward Meknes, one of the country's historic imperial cities. Depending on your departure time and the pace of the day, stop for a short visit, coffee or lunch while enjoying the city's historic atmosphere. Continue southeast through changing countryside toward the Middle Atlas region. The scenery becomes greener and more mountainous as you approach Midelt, a town positioned between major mountain ranges and commonly used as a comfortable stop on the road toward southeastern Morocco. Arrive in Midelt in the afternoon or evening, check into your hotel or guesthouse and rest before continuing toward the Ziz Valley, Erfoud and the Sahara the next morning.",

    details: [
      "Pickup from Casablanca",
      "Private or small-group transport",
      "Meknes",
      "Imperial-city atmosphere",
      "Scenic inland road",
      "Middle Atlas landscapes",
      "Arrival in Midelt",
      "Hotel or guesthouse",
      "Dinner & breakfast according to package",
    ],
  },

  {
    title:
      "Day 2: Midelt – Ziz Valley – Erfoud – Merzouga – Erg Chebbi Desert Camp",

    description:
      "After breakfast in Midelt, continue south through increasingly dramatic scenery toward the Ziz Valley. The route passes dry plateaus, rocky landscapes and oasis areas before reaching viewpoints over the long palm groves of the valley. Stop for photos and enjoy the contrast between green date palms and the surrounding desert-colored terrain. Continue to Erfoud, a gateway town to the Sahara known for dates, fossils and the geology of southeastern Morocco. From Erfoud, travel toward Merzouga, where the golden dunes of Erg Chebbi rise beside the village. In the late afternoon, meet your camel guide and begin a camel trek across the dunes as the light becomes softer. Stop to watch sunset over the Sahara before continuing to your desert camp. After arrival, settle into your tent, enjoy dinner and spend the evening with local music in the quiet atmosphere of the desert.",

    details: [
      "Breakfast in Midelt",
      "Ziz Valley",
      "Panoramic oasis viewpoints",
      "Palm groves",
      "Erfoud",
      "Fossil and desert-gateway region",
      "Arrival in Merzouga",
      "Erg Chebbi dunes",
      "Camel trekking",
      "Sahara sunset",
      "Desert camp",
      "Dinner & breakfast",
    ],
  },

  {
    title:
      "Day 3: Merzouga – Rissani – Todra Gorge – Tinghir – Imilchil",

    description:
      "Wake early to watch sunrise over the Erg Chebbi dunes, then have breakfast at the desert camp and return toward Merzouga by camel or 4x4 transfer. Meet your driver and begin the journey west through the Tafilalet region. Depending on timing, pass through or stop near Rissani before continuing toward Tinghir and Todra Gorge. The gorge is one of southern Morocco's most impressive natural landscapes, with high limestone walls and a narrow canyon that can be explored on foot. After a short walk and time for photos, leave the desert-edge landscapes and continue north toward Imilchil. The road climbs into a quieter High Atlas region where mountain scenery, traditional villages and cooler temperatures replace the Sahara landscape. Arrive in Imilchil in the late afternoon or evening for dinner and an overnight stay in a local hotel or guesthouse.",

    details: [
      "Sahara sunrise",
      "Breakfast at the desert camp",
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
      "Day 4: Imilchil – High Atlas – Kasbah Tadla – Casablanca",

    description:
      "After breakfast, leave Imilchil and begin the final journey back toward Casablanca. The road crosses remote High Atlas scenery, where traditional villages, mountain valleys and open plateaus create a very different landscape from the Sahara you experienced two days earlier. Continue toward Kasbah Tadla in central Morocco, an important point on the route west toward the Atlantic side of the country. Stop for lunch or a short break depending on timing, then continue through central Moroccan countryside toward Casablanca. Arrival is normally in the late afternoon or evening, depending on traffic, weather and road conditions. Your 4-day Casablanca to Merzouga desert and Imilchil tour ends with drop-off at your hotel, accommodation or agreed location in Casablanca.",

    details: [
      "Breakfast in Imilchil",
      "High Atlas mountain scenery",
      "Traditional villages",
      "Kasbah Tadla",
      "Lunch or rest stop",
      "Central Morocco landscapes",
      "Return to Casablanca",
      "Hotel or agreed drop-off",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Pickup from your hotel or agreed meeting point in Casablanca",
    "Drop-off in Casablanca at the end of the tour",
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
      "Starting point for the four-day Morocco desert and mountain itinerary.",
  },
  {
    id: "meknes",
    name: "Meknes",
    lat: 33.8935,
    lng: -5.5473,
    day: 1,
    description:
      "Historic imperial-city stop on the road from Casablanca toward Midelt.",
  },
  {
    id: "midelt",
    name: "Midelt",
    lat: 32.6806,
    lng: -4.7369,
    day: 1,
    description:
      "First overnight stop between central Morocco and the Sahara route.",
  },
  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.86,
    lng: -4.35,
    day: 2,
    description:
      "Long oasis valley known for palm groves and panoramic viewpoints.",
  },
  {
    id: "erfoud",
    name: "Erfoud",
    lat: 31.4353,
    lng: -4.2326,
    day: 2,
    description:
      "Desert gateway town known for fossils, dates and its position near Merzouga.",
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
      "Golden Sahara dunes used for camel trekking, sunset, sunrise and desert camping.",
  },
  {
    id: "todra-gorge",
    name: "Todra Gorge",
    lat: 31.585,
    lng: -5.59,
    day: 3,
    description:
      "Dramatic limestone canyon and walking stop before the route climbs toward Imilchil.",
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
    id: "imilchil",
    name: "Imilchil",
    lat: 32.154,
    lng: -5.635,
    day: 3,
    description:
      "High Atlas mountain town and overnight stop after leaving the Sahara region.",
  },
  {
    id: "kasbah-tadla",
    name: "Kasbah Tadla",
    lat: 32.5977,
    lng: -6.2684,
    day: 4,
    description:
      "Central Moroccan town on the final road back toward Casablanca.",
  },
  {
    id: "casablanca-return",
    name: "Casablanca",
    lat: 33.5731,
    lng: -7.5898,
    day: 4,
    description:
      "Final destination and drop-off point for the four-day tour.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 4 Days Casablanca to Merzouga & Imilchil Tour",

      description:
        "Find practical answers about this 4-day Morocco tour from Casablanca, including Meknes, Midelt, Ziz Valley, Erfoud, Merzouga, Erg Chebbi, camel trekking, the Sahara camp, Todra Gorge, Imilchil, Kasbah Tadla, driving time, accommodation, meals and packing.",
    },
  ],

  faqs: [
    {
      question:
        "Is 4 days enough for a Casablanca to Merzouga desert tour?",

      answer:
        "Four days is possible and gives you more time than a three-day Casablanca Sahara tour. It still includes long road sections, but the itinerary divides the journey with nights in Midelt, the Merzouga desert and Imilchil.",
    },
    {
      question:
        "What route does this 4-day Casablanca tour follow?",

      answer:
        "The route travels from Casablanca through Meknes to Midelt, continues through the Ziz Valley and Erfoud to Merzouga, then crosses Todra Gorge toward Imilchil before returning through Kasbah Tadla to Casablanca.",
    },
    {
      question:
        "Does the tour stop in Meknes?",

      answer:
        "Yes. Meknes is included on day one as an imperial-city stop before continuing toward Midelt. The exact amount of sightseeing time depends on your departure time and the day's driving schedule.",
    },
    {
      question:
        "Where do we stay on the first night?",

      answer:
        "The first night is spent in Midelt in a hotel or guesthouse. This divides the long journey between Casablanca and the Sahara region.",
    },
    {
      question:
        "Does the itinerary include Ziz Valley?",

      answer:
        "Yes. Day two travels through the Ziz Valley, where panoramic viewpoints overlook palm groves and oasis landscapes before the route continues toward Erfoud.",
    },
    {
      question:
        "What is Erfoud known for?",

      answer:
        "Erfoud is a desert gateway town in southeastern Morocco known for dates, fossils and its location near the Tafilalet region and Merzouga.",
    },
    {
      question:
        "Is camel trekking included in Merzouga?",

      answer:
        "Yes. The standard itinerary includes a camel trek across the Erg Chebbi dunes, normally around sunset before reaching the desert camp.",
    },
    {
      question:
        "Can I reach the desert camp without riding a camel?",

      answer:
        "Yes. A 4x4 transfer can usually be arranged for travelers who prefer not to ride a camel or who have mobility concerns.",
    },
    {
      question:
        "Can we watch both sunset and sunrise in the Sahara?",

      answer:
        "Yes, weather permitting. Sunset is normally experienced during the camel trek on day two, and travelers can wake early on day three for sunrise over Erg Chebbi.",
    },
    {
      question:
        "Does the tour include Todra Gorge?",

      answer:
        "Yes. Todra Gorge is one of the main natural stops on day three after leaving Merzouga. You can take a short walk through the canyon before continuing toward Imilchil.",
    },
    {
      question:
        "Why does the tour go to Imilchil?",

      answer:
        "Imilchil adds a quieter High Atlas mountain experience to the itinerary. After the Sahara and Todra Gorge, the route climbs into a region of mountain villages, valleys and cooler landscapes before returning toward Casablanca.",
    },
    {
      question:
        "Where do we sleep on the third night?",

      answer:
        "The third night is spent in Imilchil in a hotel or guesthouse, depending on the accommodation category confirmed for your booking.",
    },
    {
      question:
        "Does the tour pass through Kasbah Tadla?",

      answer:
        "Yes. Kasbah Tadla is included on the final route between Imilchil and Casablanca and can be used as a rest or lunch stop depending on timing.",
    },
    {
      question:
        "How much driving is involved in the four-day tour?",

      answer:
        "This is a road-based itinerary covering a large part of Morocco, so each day includes driving. The journey is divided with overnight stops and sightseeing to make the route more interesting and manageable.",
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
        "Families can take the tour, especially as a private trip, but parents should consider the driving distances and the ages of their children. Extra rest stops can usually be arranged.",
    },
    {
      question:
        "What should I pack for this Casablanca desert tour?",

      answer:
        "Bring comfortable walking shoes, light clothing, sun protection, sunglasses, a hat, a reusable water bottle, a warm layer for the Sahara night and Imilchil, personal medication, a small overnight bag and a power bank.",
    },
    {
      question:
        "Can the 4-day Casablanca to Merzouga itinerary be customized?",

      answer:
        "Yes. Private tours can often be adjusted for accommodation category, desert-camp level, stops, travel pace and final drop-off. Travelers with more time can also extend the itinerary.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the 4 Days Casablanca to Merzouga Desert & Imilchil Tour",

  highlights: [
    "Start your four-day Morocco road trip in Casablanca.",
    "Travel inland to Meknes, one of Morocco's imperial cities.",
    "Continue through central Morocco toward Midelt.",
    "Spend the first night in the Middle Atlas region.",
    "Enjoy panoramic views over the Ziz Valley.",
    "See palm groves and oasis landscapes.",
    "Visit Erfoud, a gateway to the Sahara.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Ride camels across the golden Sahara around sunset.",
    "Spend one night in a Merzouga desert camp.",
    "Wake early for sunrise over Erg Chebbi.",
    "Travel through the Rissani and Tafilalet region.",
    "Walk through Todra Gorge.",
    "Pass through Tinghir and its oasis landscapes.",
    "Climb into the High Atlas toward Imilchil.",
    "Spend the third night in the Imilchil mountain region.",
    "Cross remote mountain and central Moroccan scenery.",
    "Pass through Kasbah Tadla.",
    "Return to Casablanca on day four.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route:
      "Casablanca → Meknes → Midelt",
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
      "Imilchil → High Atlas → Kasbah Tadla → Casablanca",
    target: "day-4",
  },
];


/* -------------------------------------------------------------------------- */
/*                                  REVIEWS                                   */
/* -------------------------------------------------------------------------- */

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

      name: "Olivia Miller",

      avatar:

        "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",

      flag: "🇺🇸",

      rating: 5,

      date: "2 weeks ago",

      review:

        "Our 4-day Casablanca to Merzouga and Imilchil tour was one of the most varied trips we experienced in Morocco. We enjoyed the stop in Meknes, the mountain scenery around Midelt and the beautiful views over the Ziz Valley before reaching Erfoud and Merzouga. The camel trek across Erg Chebbi at sunset and the night in the Sahara camp were unforgettable, and continuing through Todra Gorge to Imilchil gave the trip a completely different High Atlas atmosphere.",

    },

    {

      id: 2,

      name: "James Anderson",

      avatar: "/images/toursits-comes-to-morocco.jpeg",

      flag: "🇬🇧",

      rating: 5,

      date: "1 month ago",

      review:

        "A fantastic four-day Morocco road trip from Casablanca. The route through Meknes, Midelt, the Ziz Valley and Erfoud was very scenic, and reaching Merzouga for the camel ride and desert camp was the highlight. We also really liked the third day because Todra Gorge and the road toward Imilchil were very different from the Sahara. The changing landscapes made this tour feel much richer than a simple desert transfer.",

    },

    {

      id: 3,

      name: "Sophie Martin",

      avatar: "/images/toursits-comes-to-morocco.jpeg",

      flag: "🇨🇦",

      rating: 5,

      date: "1 month ago",

      review:

        "We highly recommend this 4-day Casablanca desert tour for travelers who want to see both the Sahara and the High Atlas. The palm groves of the Ziz Valley, Erfoud, Merzouga and Erg Chebbi were beautiful, and the sunset camel trek was a special experience. After the desert, walking through Todra Gorge and spending the night in Imilchil made the itinerary feel very complete and different from the usual Morocco desert route.",

    },

    {

      id: 4,

      name: "Daniel Williams",

      avatar:

        "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",

      flag: "🇦🇺",

      rating: 5,

      date: "2 months ago",

      review:

        "This was an excellent way to travel from Casablanca to the Sahara while also seeing a quieter part of the High Atlas. We loved the drive through Midelt and the Ziz Valley, the camel trek in Erg Chebbi, sunset over the dunes and the overnight desert camp. Todra Gorge and Imilchil were also highlights, and the final journey through Kasbah Tadla back to Casablanca showed us another side of central Morocco.",

    },

  ]

};

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
        "A four-day Morocco tour from Casablanca through Meknes and Midelt to the Ziz Valley, Erfoud and Merzouga, followed by camel trekking in Erg Chebbi, Todra Gorge, Imilchil and Kasbah Tadla.",

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

      tripOrigin: {
        "@type": "Place",
        name: "Casablanca",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "MA",
        },
      },

      itinerary: {
        "@type": "ItemList",
        name:
          "4 Days Casablanca to Merzouga Desert and Imilchil Itinerary",
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
          name: "Starting City",
          value: "Casablanca",
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
                    Casablanca Sahara & High Atlas Tour
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    What Is the 4 Days Tour from Casablanca to Merzouga & Imilchil?
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
                    <strong>4 days itinerary tour from Casablanca</strong>{" "}
                    is designed for travelers who want to combine the Sahara
                    Desert with a less common High Atlas route. Instead of
                    returning directly from Merzouga, the itinerary continues
                    through Todra Gorge to Imilchil, creating a journey with
                    imperial-city history, oasis scenery, desert dunes and
                    mountain landscapes.
                  </p>

                  <p>
                    The route is still road-intensive because Casablanca,
                    Merzouga and Imilchil are far apart, but four days gives
                    more variety than a short three-day Sahara trip. The
                    highlight is the contrast between the Erg Chebbi desert
                    and the quiet High Atlas scenery around Imilchil.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Your journey begins in{" "}
                    <PlaceHoverCard place="casablanca">
                      Casablanca
                    </PlaceHoverCard>
                    . Leave Morocco&apos;s Atlantic side and travel inland
                    toward{" "}
                    <PlaceHoverCard place="meknes">
                      Meknes
                    </PlaceHoverCard>
                    , one of the country&apos;s historic imperial cities.
                    Continue southeast toward{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>
                    , where you spend the first night before entering the
                    landscapes of southeastern Morocco.

                    <br />
                    <br />

                    On day two, leave{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>{" "}
                    and continue toward the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>
                    . Palm groves and oasis settlements appear between rocky
                    landscapes as the route descends toward{" "}
                    <PlaceHoverCard place="erfoud">
                      Erfoud
                    </PlaceHoverCard>
                    , a desert gateway known for fossils and dates.

                    <br />
                    <br />

                    Continue from{" "}
                    <PlaceHoverCard place="erfoud">
                      Erfoud
                    </PlaceHoverCard>{" "}
                    to{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    , the Sahara village beside the{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>{" "}
                    dunes. In the late afternoon, ride camels across the
                    golden sand, enjoy sunset over the Sahara and continue to
                    the desert camp for dinner and an overnight stay.

                    <br />
                    <br />

                    The third day begins with sunrise over{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    . After leaving{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    , travel toward{" "}
                    <PlaceHoverCard place="tinghir">
                      Tinghir
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="todra-gorge">
                      Todra Gorge
                    </PlaceHoverCard>
                    . Take time for a short walk between the high canyon walls
                    before continuing north into the High Atlas.

                    <br />
                    <br />

                    Arrive in{" "}
                    <PlaceHoverCard place="imilchil">
                      Imilchil
                    </PlaceHoverCard>
                    , where the atmosphere changes again from desert valleys
                    to mountain villages and cooler landscapes. Spend the
                    night in the Imilchil region before starting the final
                    journey west.

                    <br />
                    <br />

                    On day four, leave{" "}
                    <PlaceHoverCard place="imilchil">
                      Imilchil
                    </PlaceHoverCard>{" "}
                    and travel through High Atlas scenery toward{" "}
                    <PlaceHoverCard place="kasbah-tadla">
                      Kasbah Tadla
                    </PlaceHoverCard>
                    . Continue across central Morocco and finish the tour back
                    in{" "}
                    <PlaceHoverCard place="casablanca">
                      Casablanca
                    </PlaceHoverCard>
                    .
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
                    4 Days Casablanca to Merzouga & Imilchil Tour Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    Travel from Casablanca through Meknes and Midelt to the
                    Ziz Valley, Erfoud and Merzouga, then continue through
                    Todra Gorge and Imilchil before returning through Kasbah
                    Tadla.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>

                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Casablanca Tour Route
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
                    How Much Does the 4-Day Casablanca to Merzouga Tour Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The final price depends on your travel date, number of
                    travelers, vehicle, hotel category, desert-camp level and
                    accommodation in Imilchil. Request the current rate for
                    your dates and preferred tour type.
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
                  description="Pack for very different conditions on this 4-day Casablanca to Merzouga and Imilchil tour. You will travel from the Atlantic side of Morocco to the Sahara and then climb into the High Atlas. Bring sun protection for Merzouga, comfortable walking shoes for Todra Gorge and warm layers for desert nights and the higher mountain region around Imilchil. Temperatures can vary greatly between locations and seasons."
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
                  Map of the 4 Days Casablanca to Merzouga & Imilchil Tour
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the complete road trip from Casablanca through
                  Meknes, Midelt, Ziz Valley and Erfoud to Merzouga, then
                  continue via Todra Gorge and Imilchil before returning
                  through Kasbah Tadla.
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
                  Casablanca → Sahara → High Atlas
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your 4-Day Morocco Tour from Casablanca?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Travel from Casablanca through Meknes, Midelt and the Ziz
                  Valley to Merzouga, spend a night beside Erg Chebbi, then
                  continue through Todra Gorge and Imilchil before returning
                  through Kasbah Tadla.
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
                  4 Days · 3 Nights · Casablanca · Merzouga · Todra Gorge · Imilchil
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

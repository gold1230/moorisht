import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Replace with a dedicated Tangier → Marrakech 10-day Morocco itinerary image when available.
import Morocco10DaysImage from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";

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
  image: Morocco10DaysImage,
  imagetitle: "Best Morocco Itinerary 10 Days from Tangier to Marrakech",
  imageurl:
    "https://moorishtour.com/tours/related/morocco-itinerary-10-days-from-marrakech.jpg",
  imagerRobbicon: "Morocco Grand Tour",
  type: "Private Morocco Tour",

  url:
    "https://moorishtour.com/tour/10-days-in-morocco-tour-from-tangier/",

  title: "Best Morocco Itinerary 10 Days",

  description:
    "Explore Morocco in 10 days from Tangier to Marrakech through Chefchaouen, Rabat, Casablanca, Fes, Merzouga, Todra Gorge, Dades and Ait Ben Haddou.",

  overeview:
    "A complete 10-day Morocco itinerary from Tangier to Marrakech combining northern Morocco, imperial cities, the Middle Atlas, Merzouga Sahara, Todra Gorge, Dades Valley, Ait Ben Haddou and the High Atlas.",

  duration: "10 Days / 9 Nights",

  route:
    "Tangier → Tetouan → Chefchaouen → Rabat → Casablanca → Meknes → Fes → Ifrane → Midelt → Merzouga → Todra Gorge → Dades → Ouarzazate → Ait Ben Haddou → Marrakech",

  reviews: "4",
  reviewsRate: "5",
  price:200,
  maxPeople: "Private Tour",
  accommodation: "Riads / Hotels / Desert Camp",
  activities: "Culture, Cities, Mountains, Desert & Nature",
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "Best Morocco Itinerary 10 Days | Tangier to Marrakech",

  description:
    "Discover the best Morocco itinerary in 10 days from Tangier to Marrakech with Chefchaouen, Fes, Merzouga, Todra Gorge, Dades and Ait Ben Haddou.",

  keywords: [
    "best Morocco itinerary 10 days",
    "Morocco itinerary 10 days",
    "10 days in Morocco itinerary",
    "10 day Morocco itinerary",
    "best 10 day Morocco itinerary",
    "10 days Morocco tour",
    "Morocco 10 day tour",
    "10 days Morocco road trip",
    "Tangier to Marrakech 10 days",
    "10 day Morocco tour from Tangier",
    "Tangier to Chefchaouen tour",
    "Tangier Tetouan Chefchaouen itinerary",
    "Chefchaouen Rabat Casablanca tour",
    "Casablanca Meknes Fes tour",
    "Fes Ifrane Midelt tour",
    "Midelt Ziz Valley Merzouga tour",
    "Merzouga Sahara desert tour",
    "Merzouga camel trekking",
    "Merzouga desert camp",
    "Morocco cooking class desert",
    "Todra Gorge Dades Valley tour",
    "Dades Ouarzazate Ait Ben Haddou",
    "Ait Ben Haddou High Atlas Marrakech",
    "Marrakech guided tour",
    "Morocco private tour 10 days",
    "Morocco grand tour 10 days",
    "Morocco north to south itinerary",
    "Tangier to Sahara Desert tour",
    "Tangier to Merzouga tour",
    "Morocco imperial cities and desert tour",
    "Morocco itinerary Chefchaouen Fes Merzouga Marrakech",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "Best Morocco Itinerary 10 Days | Tangier to Marrakech",
    description:
      "Travel from Tangier through Chefchaouen, Rabat, Casablanca and Fes to Merzouga, then continue via Todra Gorge, Dades and Ait Ben Haddou to Marrakech.",
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
    title: "Imperial Cities",
    subtitle: "Rabat, Meknes, Fes & Marrakech",
  },
  {
    icon: MapIcon,
    title: "Northern Morocco",
    subtitle: "Tangier, Tetouan & Chefchaouen",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle: "Camel trek & desert camp",
  },
  {
    icon: HomeModernIcon,
    title: "Kasbah Route",
    subtitle: "Dades, Ouarzazate & Ait Ben Haddou",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ITINERARY                                  */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Arrival in Tangier – Tetouan – Chefchaouen",

    description:
      "Welcome to Morocco. Your 10-day Morocco itinerary begins in Tangier, where your driver meets you at the airport, port or agreed pickup point. After a short introduction to northern Morocco, travel toward Tetouan, a historic city with strong Andalusian influence and a traditional medina atmosphere. Depending on your arrival time, enjoy a short stop before continuing through the Rif Mountain landscapes toward Chefchaouen. As the road climbs, the scenery becomes greener and more mountainous. Arrive in Chefchaouen in the afternoon or evening, check into your riad or hotel and enjoy free time to walk through the famous blue-painted streets, small squares and local shops. Overnight in Chefchaouen.",

    details: [
      "Arrival in Tangier",
      "Airport, port or hotel pickup",
      "Tetouan",
      "Rif Mountain scenery",
      "Arrival in Chefchaouen",
      "Blue medina",
      "Free time",
      "Overnight in Chefchaouen",
    ],
  },

  {
    title:
      "Day 2: Chefchaouen – Rabat – Casablanca",

    description:
      "After breakfast, leave Chefchaouen and travel south toward Rabat, Morocco's capital and one of the country's imperial cities. The journey moves from the Rif region toward the Atlantic plains, giving you another change of landscape. In Rabat, visit or view important landmarks such as Hassan Tower, the Mausoleum of Mohammed V and the Kasbah of the Udayas depending on timing and your interests. Continue south along the Atlantic corridor to Casablanca, Morocco's largest city. In Casablanca, you can see the exterior and surroundings of the Hassan II Mosque and enjoy the city's modern coastal atmosphere before checking into your hotel. Overnight in Casablanca.",

    details: [
      "Breakfast in Chefchaouen",
      "Drive to Rabat",
      "Hassan Tower area",
      "Kasbah of the Udayas",
      "Atlantic coastal route",
      "Arrival in Casablanca",
      "Hassan II Mosque area",
      "Overnight in Casablanca",
    ],
  },

  {
    title:
      "Day 3: Casablanca – Meknes – Fes",

    description:
      "Leave Casablanca after breakfast and travel inland toward Meknes, one of Morocco's historic imperial cities. The road moves away from the Atlantic coast and passes through agricultural areas before reaching the Meknes region. Depending on timing, explore part of the historic center, see monumental gates or enjoy lunch before continuing to Fes. Arrive in Fes later in the day and settle into your riad or hotel inside or near the medina. The evening is free to relax and prepare for the guided cultural visit on day four.",

    details: [
      "Breakfast in Casablanca",
      "Drive to Meknes",
      "Imperial-city stop",
      "Historic gates and medina area",
      "Lunch break",
      "Continue to Fes",
      "Arrival in Fes",
      "Overnight in Fes",
    ],
  },

  {
    title:
      "Day 4: Guided Visit of Fes – Ifrane – Midelt",

    description:
      "Begin the day with a guided visit of Fes, one of Morocco's most important cultural and historic cities. Explore the old medina with a local guide and discover traditional crafts, narrow streets, historic madrasas, souks and important viewpoints. After the guided visit, leave Fes and travel south toward Ifrane, a mountain town in the Middle Atlas known for its clean streets, alpine-style architecture and cooler climate. Continue through forested and mountain landscapes toward Midelt. The road gives you a clear transition from the cultural center of Fes to the quieter interior of Morocco. Arrive in Midelt for dinner and overnight.",

    details: [
      "Guided Fes medina visit",
      "Traditional crafts",
      "Historic streets and souks",
      "Ifrane",
      "Middle Atlas scenery",
      "Mountain road",
      "Arrival in Midelt",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 5: Midelt – Ziz Valley – Erfoud – Merzouga",

    description:
      "After breakfast in Midelt, continue south toward southeastern Morocco. The scenery becomes increasingly dry and dramatic as the route approaches the Ziz Valley, one of the most beautiful oasis landscapes on the road to the Sahara. Stop at panoramic viewpoints to see palm groves and traditional settlements stretching along the valley floor. Continue toward Erfoud, a desert gateway town known for fossils, dates and its location in the Tafilalet region. From Erfoud, travel to Merzouga beside the golden Erg Chebbi dunes. In the late afternoon, meet your camel guide and ride into the Sahara around sunset. Continue to the desert camp for dinner, local music and an overnight stay under the desert sky.",

    details: [
      "Breakfast in Midelt",
      "Ziz Valley",
      "Palm-grove viewpoints",
      "Erfoud",
      "Tafilalet region",
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
      "Day 6: Merzouga – Cooking Class – Todra Gorge – Dades",

    description:
      "Wake early for sunrise over the Erg Chebbi dunes, then enjoy breakfast at the desert camp and return toward Merzouga by camel or 4x4 transfer. Before leaving the desert region, take part in a Moroccan cooking class when included in your confirmed tour arrangement. The activity can introduce you to local ingredients, simple traditional preparation methods and the flavors used in southeastern Morocco. Later, leave Merzouga and travel west through changing desert and oasis landscapes toward Tinghir and Todra Gorge. Walk through the dramatic canyon between high limestone walls before continuing to the Dades Valley. Arrive in the Dades region in the evening for dinner and overnight.",

    details: [
      "Sahara sunrise",
      "Breakfast at camp",
      "Return to Merzouga",
      "Cooking class when confirmed",
      "Drive toward Tinghir",
      "Todra Gorge",
      "Canyon walk",
      "Dades Valley",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 7: Dades – Rose Valley – Ouarzazate – Ait Ben Haddou",

    description:
      "After breakfast, leave the Dades Valley and continue through southern Morocco's kasbah and valley landscapes. Pass through the Rose Valley and Kelaat M'Gouna region, known for rose cultivation and rural villages, before continuing toward Ouarzazate. The city is well known for its film history, kasbah scenery and position between the desert routes and the High Atlas. Continue to Ait Ben Haddou, one of Morocco's most recognizable fortified settlements and a UNESCO World Heritage Site. Walk through the historic ksar, explore its earthen architecture and enjoy panoramic views over the surrounding valley. Spend the night in or near Ait Ben Haddou.",

    details: [
      "Breakfast in Dades",
      "Dades Valley scenery",
      "Rose Valley",
      "Kelaat M'Gouna region",
      "Ouarzazate",
      "Kasbah landscapes",
      "Ait Ben Haddou",
      "Historic ksar walk",
      "Overnight near Ait Ben Haddou",
    ],
  },

  {
    title:
      "Day 8: Ait Ben Haddou – High Atlas Mountains – Marrakech",

    description:
      "Leave Ait Ben Haddou after breakfast and begin the mountain crossing toward Marrakech. Travel through the High Atlas Mountains on winding roads with changing views of valleys, traditional villages and high mountain slopes. The journey connects southern Morocco with the Marrakech region and is one of the most scenic road sections of the itinerary. Stop for photos and rest breaks along the route before descending toward Marrakech. Arrive in the city in the afternoon or evening, check into your riad or hotel and enjoy free time around the medina or Jemaa el-Fnaa.",

    details: [
      "Breakfast near Ait Ben Haddou",
      "High Atlas Mountains",
      "Scenic mountain road",
      "Traditional villages",
      "Panoramic stops",
      "Arrival in Marrakech",
      "Free evening",
      "Overnight in Marrakech",
    ],
  },

  {
    title:
      "Day 9: Marrakech Guided Tour & Free Time",

    description:
      "Spend the day discovering Marrakech with a local guide. Explore the medina, traditional souks and important historic areas while learning about the city's long history and everyday life. Depending on the final sightseeing plan, the guided visit can include the Bahia Palace area, Koutoubia surroundings, traditional neighborhoods and other cultural landmarks. After the guided portion, enjoy free time to shop in the souks, visit a garden, relax in a cafe or experience Jemaa el-Fnaa at your own pace. This final full day gives you time to enjoy Marrakech without a long road journey.",

    details: [
      "Guided Marrakech tour",
      "Medina",
      "Traditional souks",
      "Historic landmarks",
      "Local culture",
      "Free time",
      "Shopping or optional visits",
      "Final night in Marrakech",
    ],
  },

  {
    title:
      "Day 10: Marrakech – Airport Transfer",

    description:
      "Enjoy your final morning in Marrakech according to your flight schedule. You may have time for breakfast, a last walk through the medina, souvenir shopping or a relaxed morning at your accommodation. At the agreed time, your driver transfers you to Marrakech Menara Airport for departure. Your best Morocco itinerary 10 days ends after a complete north-to-south journey through Tangier, Chefchaouen, Rabat, Casablanca, Meknes, Fes, the Middle Atlas, Merzouga Sahara, Todra Gorge, Dades Valley, Ait Ben Haddou, the High Atlas and Marrakech.",

    details: [
      "Breakfast in Marrakech",
      "Free time depending on flight",
      "Hotel or riad pickup",
      "Airport transfer",
      "Marrakech Menara Airport",
      "End of 10-day Morocco tour",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  REVIEWS                                   */
/* -------------------------------------------------------------------------- */

/*
  Filled sample review drafts for layout/content testing.
  Replace names, dates, countries and review text with genuine customer feedback
  before presenting them publicly as real testimonials.
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
        "This sample review is written for the 10-day Tangier to Marrakech itinerary. The route felt very complete because it combined northern Morocco, Chefchaouen, Rabat, Casablanca and Fes before continuing through the Middle Atlas to Merzouga. The camel trek and desert camp in Erg Chebbi were highlights, while Todra Gorge, Dades Valley, Ait Ben Haddou and the High Atlas made the journey to Marrakech just as memorable.",
    },
    {
      id: 2,
      name: "Sample Traveler 2",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🌍",
      rating: 5,
      date: "Sample review",
      review:
        "This sample testimonial reflects the variety of the itinerary. Chefchaouen was beautiful, the guided visit of Fes gave us a deeper understanding of the city, and the road through Ifrane, Midelt and the Ziz Valley was very scenic. The Sahara experience in Merzouga was unforgettable, and finishing with Ait Ben Haddou, the High Atlas and a guided day in Marrakech made the trip feel balanced from beginning to end.",
    },
    {
      id: 3,
      name: "Sample Traveler 3",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🌍",
      rating: 5,
      date: "Sample review",
      review:
        "This sample review is tailored to the exact north-to-south Morocco route. We especially liked seeing the contrast between Tangier and Chefchaouen, the imperial-city atmosphere of Rabat, Meknes and Fes, and the open desert landscapes around Merzouga. Todra Gorge and Dades were beautiful, and the night near Ait Ben Haddou before crossing the High Atlas to Marrakech was a great way to finish the road-trip section.",
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
        "This sample testimonial focuses on the main experiences of the 10-day Morocco itinerary: blue Chefchaouen, the culture of Fes, Middle Atlas scenery, the Ziz Valley, camel trekking in Erg Chebbi, the desert camp, Todra Gorge, Dades Valley, Ouarzazate and Ait Ben Haddou. Having the final full day in Marrakech for a guided tour and free time made the itinerary feel relaxed at the end.",
    },
  ],

};

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Arrival pickup in Tangier",
    "Airport transfer in Marrakech on departure",
    "Private air-conditioned vehicle during the tour",
    "English-speaking driver",
    "9 nights accommodation according to selected package",
    "Breakfasts according to the accommodation plan",
    "Dinners in selected mountain, desert and southern accommodations",
    "Guided visit of Fes",
    "Camel trek in the Erg Chebbi dunes",
    "Overnight desert camp in Merzouga",
    "4x4 transfer to or from the desert camp when arranged",
    "Cooking class when confirmed in the final booking",
    "Guided tour of Marrakech",
  ],

  notIncluded: [
    "Flights to and from Morocco",
    "Lunches",
    "Drinks",
    "Entrance fees to monuments and attractions",
    "Local guides not specifically listed",
    "Tips for driver, guides and hotel or camp staff",
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
    id: "tangier",
    name: "Tangier",
    lat: 35.7595,
    lng: -5.834,
    day: 1,
    description:
      "Arrival point and starting city for the 10-day Morocco itinerary.",
  },
  {
    id: "tetouan",
    name: "Tetouan",
    lat: 35.5785,
    lng: -5.3684,
    day: 1,
    description:
      "Historic northern Moroccan city and first cultural stop.",
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    lat: 35.1688,
    lng: -5.2636,
    day: 1,
    description:
      "Blue-painted Rif Mountain town and first overnight destination.",
  },
  {
    id: "rabat",
    name: "Rabat",
    lat: 34.0209,
    lng: -6.8416,
    day: 2,
    description:
      "Morocco's capital and imperial-city stop on the route south.",
  },
  {
    id: "casablanca",
    name: "Casablanca",
    lat: 33.5731,
    lng: -7.5898,
    day: 2,
    description:
      "Atlantic city and second-night stop.",
  },
  {
    id: "meknes",
    name: "Meknes",
    lat: 33.8935,
    lng: -5.5473,
    day: 3,
    description:
      "Historic imperial city visited before continuing to Fes.",
  },
  {
    id: "fes",
    name: "Fes",
    lat: 34.0331,
    lng: -5.0003,
    day: 3,
    description:
      "Major cultural city with a guided medina visit on day four.",
  },
  {
    id: "ifrane",
    name: "Ifrane",
    lat: 33.5228,
    lng: -5.1109,
    day: 4,
    description:
      "Middle Atlas mountain town on the route from Fes to Midelt.",
  },
  {
    id: "midelt",
    name: "Midelt",
    lat: 32.6806,
    lng: -4.7369,
    day: 4,
    description:
      "Mountain-region overnight stop before the Sahara route.",
  },
  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.86,
    lng: -4.35,
    day: 5,
    description:
      "Oasis valley known for palm groves and panoramic viewpoints.",
  },
  {
    id: "erfoud",
    name: "Erfoud",
    lat: 31.4353,
    lng: -4.2326,
    day: 5,
    description:
      "Desert gateway town known for fossils and dates.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 5,
    description:
      "Sahara village beside the Erg Chebbi dunes.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi",
    lat: 31.1477,
    lng: -3.9786,
    day: 5,
    description:
      "Golden Sahara dune field for camel trekking, sunset and desert camping.",
  },
  {
    id: "tinghir",
    name: "Tinghir",
    lat: 31.5147,
    lng: -5.5328,
    day: 6,
    description:
      "Oasis town and gateway to Todra Gorge.",
  },
  {
    id: "todra-gorge",
    name: "Todra Gorge",
    lat: 31.585,
    lng: -5.59,
    day: 6,
    description:
      "Dramatic limestone canyon and walking stop.",
  },
  {
    id: "dades-valley",
    name: "Dades Valley",
    lat: 31.471,
    lng: -5.974,
    day: 6,
    description:
      "Scenic valley known for rock formations, kasbahs and mountain roads.",
  },
  {
    id: "ouarzazate",
    name: "Ouarzazate",
    lat: 30.9335,
    lng: -6.937,
    day: 7,
    description:
      "Southern Moroccan city known for kasbah landscapes and film history.",
  },
  {
    id: "ait-ben-haddou",
    name: "Ait Ben Haddou",
    lat: 31.047,
    lng: -7.129,
    day: 7,
    description:
      "UNESCO-listed fortified ksar and overnight stop.",
  },
  {
    id: "high-atlas",
    name: "High Atlas Mountains",
    lat: 31.2,
    lng: -7.4,
    day: 8,
    description:
      "Scenic mountain crossing between southern Morocco and Marrakech.",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 8,
    description:
      "Final city for guided sightseeing, free time and airport departure.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the Best Morocco Itinerary 10 Days",

      description:
        "Plan your 10-day Morocco itinerary from Tangier to Marrakech with practical answers about Chefchaouen, Rabat, Casablanca, Fes, Ifrane, Midelt, Ziz Valley, Merzouga, camel trekking, the Sahara camp, Todra Gorge, Dades Valley, Ait Ben Haddou, the High Atlas and Marrakech.",
    },
  ],

  faqs: [
    {
      question:
        "Is 10 days enough for a Morocco itinerary?",

      answer:
        "Ten days is a strong length for a first Morocco trip because it allows you to combine northern cities, imperial cities, the Middle Atlas, the Sahara Desert, southern valleys, Ait Ben Haddou and Marrakech. The itinerary still includes several long road days, but it covers a wide range of landscapes and cultures.",
    },
    {
      question:
        "Where does this 10-day Morocco tour start and end?",

      answer:
        "The itinerary begins in Tangier and ends in Marrakech, making it suitable for travelers arriving in northern Morocco and departing from Marrakech.",
    },
    {
      question:
        "Does the tour include Chefchaouen?",

      answer:
        "Yes. Day one travels from Tangier through Tetouan to Chefchaouen, where you spend the first night and have free time in the blue medina.",
    },
    {
      question:
        "Do we visit Rabat and Casablanca?",

      answer:
        "Yes. Day two travels from Chefchaouen to Rabat and then Casablanca, combining Morocco's capital with its largest Atlantic city.",
    },
    {
      question:
        "Is Meknes included?",

      answer:
        "Yes. Meknes is visited on day three between Casablanca and Fes.",
    },
    {
      question:
        "Is there a guided visit of Fes?",

      answer:
        "Yes. Day four includes a guided visit of Fes before traveling through Ifrane to Midelt.",
    },
    {
      question:
        "Does the itinerary include the Sahara Desert?",

      answer:
        "Yes. Day five reaches Merzouga and Erg Chebbi, where the standard experience includes camel trekking around sunset and an overnight desert camp.",
    },
    {
      question:
        "Is camel trekking included?",

      answer:
        "Yes. Camel trekking in the Erg Chebbi dunes is included in the standard Sahara experience. A 4x4 transfer can usually be arranged for travelers who prefer not to ride a camel.",
    },
    {
      question:
        "What is the cooking class on day six?",

      answer:
        "The exact format depends on the final booking, but it can introduce travelers to Moroccan ingredients and simple traditional preparation methods used in the region. Confirm the activity details before booking.",
    },
    {
      question:
        "Does the tour include Todra Gorge and Dades Valley?",

      answer:
        "Yes. Day six travels from Merzouga toward Todra Gorge and continues to the Dades Valley for the overnight stay.",
    },
    {
      question:
        "Do we visit Ouarzazate and Ait Ben Haddou?",

      answer:
        "Yes. Day seven travels from Dades through southern Morocco to Ouarzazate and Ait Ben Haddou, where you can explore the historic ksar.",
    },
    {
      question:
        "Does the route cross the High Atlas Mountains?",

      answer:
        "Yes. Day eight crosses the High Atlas between Ait Ben Haddou and Marrakech.",
    },
    {
      question:
        "Is Marrakech guided sightseeing included?",

      answer:
        "Yes. Day nine includes a guided tour of Marrakech followed by free time.",
    },
    {
      question:
        "Are airport transfers included?",

      answer:
        "The itinerary includes arrival pickup in Tangier and a departure transfer to Marrakech Menara Airport on day ten.",
    },
    {
      question:
        "What accommodation is used?",

      answer:
        "Accommodation can include riads, hotels, mountain or valley guesthouses and a Sahara desert camp. Exact properties depend on the package and availability.",
    },
    {
      question:
        "Are all meals included?",

      answer:
        "Breakfasts are generally included with accommodation, while dinners are commonly included in selected mountain, desert and southern stays. Lunches, drinks and meals not listed in the confirmed package remain separate.",
    },
    {
      question:
        "How much driving is involved?",

      answer:
        "This is a road-based grand tour covering Morocco from north to south, so several days include significant driving. Sightseeing stops and overnight stays divide the route and make the journey more varied.",
    },
    {
      question:
        "Is this itinerary suitable for families?",

      answer:
        "Families can enjoy the itinerary, especially as a private tour, but parents should consider the longer driving days. Extra rest stops and pacing adjustments can usually be arranged.",
    },
    {
      question:
        "Can the best Morocco itinerary 10 days be customized?",

      answer:
        "Yes. A private tour can often be adjusted for accommodation level, sightseeing time, extra nights, desert-camp category, arrival point and departure schedule.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the Best Morocco Itinerary 10 Days",

  highlights: [
    "Begin your Morocco journey in Tangier.",
    "Travel through Tetouan to the blue city of Chefchaouen.",
    "Visit Rabat, Morocco's capital.",
    "See Casablanca and the Hassan II Mosque area.",
    "Stop in Meknes, one of Morocco's imperial cities.",
    "Explore Fes with a local guide.",
    "Travel through Ifrane and the Middle Atlas.",
    "Spend a night in Midelt.",
    "Enjoy panoramic views over the Ziz Valley.",
    "Pass through Erfoud on the way to the Sahara.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Ride camels across the Sahara around sunset.",
    "Spend one night in a desert camp.",
    "Wake early for sunrise over Erg Chebbi.",
    "Enjoy a Moroccan cooking class when confirmed.",
    "Walk through Todra Gorge.",
    "Spend the night in Dades Valley.",
    "Travel through Rose Valley and Ouarzazate.",
    "Explore the historic ksar of Ait Ben Haddou.",
    "Cross the High Atlas Mountains.",
    "Discover Marrakech with a local guide.",
    "Enjoy free time in Marrakech.",
    "Finish with an airport transfer on day ten.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route:
      "Tangier → Tetouan → Chefchaouen",
    target: "day-1",
  },
  {
    day: "Day 2",
    route:
      "Chefchaouen → Rabat → Casablanca",
    target: "day-2",
  },
  {
    day: "Day 3",
    route:
      "Casablanca → Meknes → Fes",
    target: "day-3",
  },
  {
    day: "Day 4",
    route:
      "Fes Guided Visit → Ifrane → Midelt",
    target: "day-4",
  },
  {
    day: "Day 5",
    route:
      "Midelt → Ziz Valley → Erfoud → Merzouga → Erg Chebbi",
    target: "day-5",
  },
  {
    day: "Day 6",
    route:
      "Merzouga → Cooking Class → Tinghir → Todra Gorge → Dades",
    target: "day-6",
  },
  {
    day: "Day 7",
    route:
      "Dades → Rose Valley → Ouarzazate → Ait Ben Haddou",
    target: "day-7",
  },
  {
    day: "Day 8",
    route:
      "Ait Ben Haddou → High Atlas Mountains → Marrakech",
    target: "day-8",
  },
  {
    day: "Day 9",
    route:
      "Marrakech Guided Tour → Free Time",
    target: "day-9",
  },
  {
    day: "Day 10",
    route:
      "Marrakech → Airport Transfer",
    target: "day-10",
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
        "A 10-day Morocco itinerary from Tangier through Tetouan, Chefchaouen, Rabat, Casablanca, Meknes and Fes to Merzouga, then Todra Gorge, Dades Valley, Ouarzazate, Ait Ben Haddou, the High Atlas and Marrakech.",
      provider: {
        "@id": "https://moorishtour.com/#organization",
      },
      touristType: [
        "Couples",
        "Families",
        "Private travelers",
        "Cultural travelers",
        "Adventure travelers",
        "Sahara desert travelers",
        "First-time Morocco visitors",
      ],
      tripOrigin: {
        "@type": "Place",
        name: "Tangier",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tangier",
          addressCountry: "MA",
        },
      },
      itinerary: {
        "@type": "ItemList",
        name: "Best Morocco Itinerary 10 Days",
        numberOfItems: 10,
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
          value: "10 days / 9 nights",
        },
        {
          "@type": "PropertyValue",
          name: "Starting City",
          value: "Tangier",
        },
        {
          "@type": "PropertyValue",
          name: "Ending City",
          value: "Marrakech",
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
          name: "Guided Cities",
          value: "Fes and Marrakech",
        },
        {
          "@type": "PropertyValue",
          name: "Mountain Crossing",
          value: "Middle Atlas and High Atlas",
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

              <section
                className="my-10 scroll-mt-42 py-10"
                id="overview"
              >
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Morocco Grand Tour
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    Why Is This One of the Best Morocco Itineraries for 10 Days?
                  </h2>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    This <strong>best Morocco itinerary 10 days</strong> route
                    is designed for travelers who want to see Morocco from
                    north to south in one private journey. It starts in Tangier,
                    includes Chefchaouen and several imperial cities, crosses
                    the Middle Atlas to the Sahara and finishes through the
                    southern kasbah route and High Atlas in Marrakech.
                  </p>

                  <p>
                    The itinerary combines culture, mountain landscapes,
                    historic medinas, desert experiences, gorges, valleys and
                    UNESCO-listed architecture without limiting the trip to
                    only Marrakech and Merzouga.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Your journey begins in{" "}
                    <PlaceHoverCard place="tangier">
                      Tangier
                    </PlaceHoverCard>{" "}
                    and continues through{" "}
                    <PlaceHoverCard place="tetouan">
                      Tetouan
                    </PlaceHoverCard>{" "}
                    to{" "}
                    <PlaceHoverCard place="chefchaouen">
                      Chefchaouen
                    </PlaceHoverCard>
                    , where the blue-painted medina and Rif Mountain setting
                    create a relaxed first night in Morocco.

                    <br />
                    <br />

                    Continue south through{" "}
                    <PlaceHoverCard place="rabat">
                      Rabat
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="casablanca">
                      Casablanca
                    </PlaceHoverCard>
                    , then travel inland through{" "}
                    <PlaceHoverCard place="meknes">
                      Meknes
                    </PlaceHoverCard>{" "}
                    to{" "}
                    <PlaceHoverCard place="fes">
                      Fes
                    </PlaceHoverCard>
                    . A guided visit of Fes gives you time to understand the
                    medina, traditional crafts and historic character of one
                    of Morocco&apos;s most important cultural cities.

                    <br />
                    <br />

                    From Fes, travel through{" "}
                    <PlaceHoverCard place="ifrane">
                      Ifrane
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>{" "}
                    before continuing through the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>{" "}
                    and{" "}
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

                    In Merzouga, ride camels across{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    , watch the Sahara sunset and spend the night at a desert
                    camp. The following morning can include a cooking class
                    before the journey continues toward{" "}
                    <PlaceHoverCard place="tinghir">
                      Tinghir
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="todra-gorge">
                      Todra Gorge
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    Continue through{" "}
                    <PlaceHoverCard place="dades-valley">
                      Dades Valley
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="ouarzazate">
                      Ouarzazate
                    </PlaceHoverCard>{" "}
                    to{" "}
                    <PlaceHoverCard place="ait-ben-haddou">
                      Ait Ben Haddou
                    </PlaceHoverCard>
                    . The final road section crosses the{" "}
                    <PlaceHoverCard place="high-atlas-mountains">
                      High Atlas Mountains
                    </PlaceHoverCard>{" "}
                    to{" "}
                    <PlaceHoverCard place="marrakech">
                      Marrakech
                    </PlaceHoverCard>
                    , where you enjoy a guided city tour, free time and your
                    final airport transfer.
                  </>
                </Overview>
              </section>

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
                    Best Morocco Itinerary 10 Days Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    Travel from Tangier through northern Morocco and the
                    imperial cities to Merzouga Sahara, then continue through
                    Todra Gorge, Dades, Ait Ben Haddou and the High Atlas to
                    Marrakech.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Morocco Tour Route
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

              <section
                className="scroll-mt-42 py-10"
                id="highlights"
              >
                <TourHighlights
                  title={tour.title}
                  highlights={tour.highlights}
                />
              </section>

              <section
                className="scroll-mt-42 py-16"
                id="itinerary"
              >
                <TourItinerary
                  title={propsObj.title}
                  days={itinerary}
                />
              </section>

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
                    How Much Does This 10-Day Morocco Itinerary Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The price depends on your travel dates, number of travelers,
                    accommodation category, desert-camp level, guided visits
                    and any customization. Request the current rate for your
                    exact dates and preferred package.
                  </p>

                  <a
                    href="#reservation-form"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-800"
                  >
                    Check Current Price & Availability
                  </a>
                </div>
              </section>

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

              <section
                className="scroll-mt-42 py-10"
                id="info"
              >
                <WhatToBring
                  description="Pack for several climates during this 10-day Morocco itinerary. You will travel through northern cities, the Middle Atlas, the Merzouga Sahara, Todra Gorge, Dades Valley, the High Atlas and Marrakech. Bring comfortable walking shoes, sun protection, light layers and a warm jacket for mountain mornings and desert nights."
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

              <section
                className="scroll-mt-42 py-10"
                id="map"
              >
                <h2 className="mb-3 text-2xl font-bold text-slate-900">
                  Map of the Best Morocco Itinerary 10 Days
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the complete north-to-south route from Tangier through
                  Chefchaouen, Rabat, Casablanca, Fes and Merzouga, then across
                  Todra Gorge, Dades, Ait Ben Haddou and the High Atlas to
                  Marrakech.
                </p>

                <TourMap locations={locations} />
              </section>

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

          <section
            id="book-tour"
            className="py-12"
            aria-labelledby="final-tour-cta-title"
          >
            <div className="mx-auto max-w-6xl px-4">
              <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-8 text-center shadow-sm md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  Tangier → Sahara → Marrakech
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your 10-Day Morocco Grand Tour?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Discover northern Morocco, imperial cities, the Middle Atlas,
                  Merzouga Sahara, Todra Gorge, Dades Valley, Ait Ben Haddou
                  and Marrakech in one complete private itinerary.
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
                  10 Days · 9 Nights · Tangier to Marrakech · Imperial Cities · Sahara · Atlas Mountains
                </p>
              </div>
            </div>
          </section>
        </div>

        <YouMayAlsoLike
          tours={[
            {
              title:
                "10 Days Morocco Itinerary from Marrakech",
              href:
                "/tour/morocco-itinerary-10-days-from-marrakech/",
              image: MarrakechToMerzouga10Day,
              duration: "10 DAYS",
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
          ]}
        />
      </div>
    </>
  );
}

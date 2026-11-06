import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Replace this image with your dedicated Fes → Merzouga tour image when available.
import FesToMerzouga3Day from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";

import MarrakechToMerzouga4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";
import MarrakechToFes4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
import MarrakechToMerzouga7Day from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";
import MarrakechToMerzouga10Day from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";

import ReviewsSection from "@/Compentents/tour/Reveiws";
import TourFeatures from "@/Compentents/tour/whychose";
import TourNavigation from "@/Compentents/tour/contenttable";
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
import PlaceHoverCard from "@/Compentents/placeCard";

/* -------------------------------------------------------------------------- */
/*                              MAIN TOUR DATA                                */
/* -------------------------------------------------------------------------- */

const propsObj = {
  image: FesToMerzouga3Day,
  imagetitle: "3 Days Fes to Merzouga Desert Tour",
  imageurl:
    "https://moorishtour.com/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon: "Popular Desert Tour",
  type: "Sahara Desert Tour",

  // If you keep an old WordPress URL, change only this value.
  url: "https://moorishtour.com/tour/3-days-tour-from-fes-to-merzouga-desert/",

  title: "3 Days Fes to Merzouga Desert Tour",
  description:
    "Travel from Fes to Merzouga on a 3-day Sahara desert tour via Ifrane, the Middle Atlas and Midelt. Explore Merzouga, enjoy camel trekking in Erg Chebbi and spend a night in a Sahara desert camp.",

  overeview:
    "Travel from Fes through Ifrane, the Middle Atlas and Midelt to Merzouga. Spend a full day exploring the Sahara region, visit Khamlia, enjoy camel trekking in Erg Chebbi at sunset and sleep in a desert camp before returning to Fes.",

  duration: "3 Days / 2 Nights",
  route: "Fes → Merzouga → Fes",

  // Add only genuine review numbers from your real booking/review system.
  reviews: "4",
  reviewsRate: "5",
  price: 200,
  maxPeople: "Private / Small Group",
  accommodation: "Hotel / Desert Camp",
  activities: "Camel Trekking & Sightseeing",
};

/* -------------------------------------------------------------------------- */
/*                                  METADATA                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "3 Days Fes to Merzouga Desert Tour | Camel Trek & Sahara Camp",

  description: propsObj.description,

  keywords: [
    "3 days Fes to Merzouga desert tour",
    "3 day Fes to Merzouga desert tour",
    "Fes to Merzouga desert tour",
    "Fes desert tour",
    "Fes to Sahara desert",
    "Fes to Merzouga tour",
    "Morocco desert tour from Fes",
    "Fes Sahara tour",
    "Merzouga desert tour from Fes",
    "Fes to Erg Chebbi",
    "Fes camel trekking tour",
    "3 days from Fes to Merzouga",
    "Fes to Merzouga itinerary",
    "Fes to Merzouga via Ifrane and Midelt",
    "Fes to Ifrane Midelt Merzouga",
    "Sahara desert camp Merzouga",
    "Erg Chebbi camel trek",
    "Morocco Sahara tour",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "3 Days Fes to Merzouga Desert Tour | Sahara Experience",
    description: propsObj.description,
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
    title: "Ifrane",
    subtitle: "Middle Atlas mountain town",
  },
  {
    icon: MapIcon,
    title: "Middle Atlas",
    subtitle: "Cedar forests & mountain scenery",
  },
  {
    icon: FireIcon,
    title: "Erg Chebbi",
    subtitle: "Camel trek & Sahara sunset",
  },
  {
    icon: HomeModernIcon,
    title: "Sahara Camp",
    subtitle: "Overnight in the desert",
  },
];

/* -------------------------------------------------------------------------- */
/*                                ITINERARY                                   */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Fes – Ifrane – Azrou Cedar Forest – Midelt – Ziz Valley – Merzouga",

    description:
      "Your 3-day Fes to Merzouga desert tour starts with an early pickup from your hotel or riad in Fes. Travel south into the Middle Atlas Mountains, where the scenery changes from city streets to green hills, forests and mountain towns. Stop in Ifrane for a short walk and fresh mountain air, then continue through the cedar forest region near Azrou, where Barbary macaques may sometimes be seen in their natural environment. Continue toward Midelt for a lunch break before driving farther south through changing mountain and semi-desert landscapes. Follow the road through the Ziz region and broad oasis scenery as the colors turn from green to ochre and red. In the late afternoon or evening, reach Merzouga beside the Erg Chebbi dunes. Check into a hotel or guesthouse near the desert, enjoy dinner and rest before the full Sahara experience on day two.",

    details: [
      "Approx. 7–9h driving with sightseeing stops",
      "Pickup from your hotel or riad in Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Azrou cedar forest region",
      "Barbary macaques may be seen",
      "Lunch stop in Midelt",
      "Ziz Valley scenery",
      "Arrival in Merzouga",
      "Hotel / guesthouse near Erg Chebbi",
      "Dinner & breakfast",
    ],
  },

  {
    title:
      "Day 2: Merzouga Desert Tour – Khamlia – Desert Exploration – Camel Trek – Sahara Camp",

    description:
      "After breakfast, spend the day discovering the Merzouga desert region rather than leaving the Sahara immediately. Travel around the Erg Chebbi area and see how the landscape changes between dunes, rocky desert and small settlements. Depending on the tour plan, visit Khamlia to experience Gnawa musical traditions and stop in desert areas where local families and communities live. The purpose of the day is to understand more of the culture and environment around Merzouga, not only the dunes themselves. Later in the afternoon, return to the edge of Erg Chebbi and meet your camel guide. Begin a peaceful camel trek across the golden dunes as the light becomes softer. Stop to enjoy the Sahara sunset before continuing to the desert camp. After arriving, settle into your tent, enjoy dinner and spend the evening around the camp with local music. When the sky is clear, the low light around the dunes creates excellent conditions for viewing the stars.",

    details: [
      "Merzouga desert exploration",
      "Erg Chebbi region",
      "Khamlia village",
      "Gnawa music experience",
      "Desert landscapes & local culture",
      "Camel trekking",
      "Sahara sunset",
      "Private desert-camp tent",
      "Dinner at the camp",
      "Local music",
      "Night under the Sahara sky",
      "Breakfast included",
    ],
  },

  {
    title:
      "Day 3: Merzouga – Sahara Sunrise – Ziz Valley – Midelt – Ifrane – Fes",

    description:
      "Wake up early on the final morning to watch sunrise over the Erg Chebbi dunes. The first light creates soft colors across the sand and is one of the quietest moments of the tour. After breakfast at the camp, return toward Merzouga by camel or 4x4 transfer and meet your driver. Begin the long journey back to Fes, traveling north through the Ziz region and the changing landscapes of eastern Morocco. Continue toward Midelt, cross the Middle Atlas Mountains and pass the Ifrane area again, with short stops for rest, lunch and photos according to timing and road conditions. Arrive in Fes in the late afternoon or evening, where your 3-day Fes to Merzouga desert tour ends with drop-off at your hotel or riad.",

    details: [
      "Sahara sunrise",
      "Breakfast at the desert camp",
      "Camel ride or 4x4 transfer",
      "Merzouga departure",
      "Ziz Valley route",
      "Midelt",
      "Middle Atlas Mountains",
      "Ifrane area",
      "Lunch and rest stops",
      "Drop-off at your hotel or riad in Fes",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                              TOUR INCLUSIONS                               */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Pickup from your hotel or riad in Fes",
    "Drop-off in Fes at the end of the tour",
    "Comfortable air-conditioned vehicle",
    "English-speaking driver",
    "1 night in a hotel or guesthouse in Merzouga",
    "1 night in a desert camp near Erg Chebbi",
    "2 breakfasts and 2 dinners",
    "Merzouga desert-area excursion as described in the itinerary",
    "Camel trek in the Erg Chebbi dunes",
    "4x4 transfer to or from the desert camp when arranged",
  ],

  notIncluded: [
    "Lunches",
    "Drinks",
    "Entrance fees when required",
    "Local guides not specifically listed as included",
    "Tips for the driver, guides and camp staff",
    "Personal shopping and expenses",
    "Optional activities not listed in the itinerary",
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR MAP DATA                                 */
/* -------------------------------------------------------------------------- */

const locations = [
  {
    id: "fes",
    name: "Fes",
    lat: 34.0331,
    lng: -5.0003,
    day: 1,
    description:
      "Begin the 3-day Fes to Merzouga desert tour with pickup from your accommodation in Fes.",
  },
  {
    id: "ifrane",
    name: "Ifrane",
    lat: 33.5228,
    lng: -5.1109,
    day: 1,
    description:
      "Stop in Ifrane for a short break in the Middle Atlas Mountains.",
  },
  {
    id: "azrou",
    name: "Azrou Cedar Forest Area",
    lat: 33.4344,
    lng: -5.2213,
    day: 1,
    description:
      "Travel through the cedar forest region near Azrou, where Barbary macaques may sometimes be seen.",
  },
  {
    id: "midelt",
    name: "Midelt",
    lat: 32.6806,
    lng: -4.7369,
    day: 1,
    description:
      "Stop around Midelt for lunch before continuing toward southeastern Morocco.",
  },
  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.92,
    lng: -4.44,
    day: 1,
    description:
      "Travel through the Ziz region and enjoy views of oasis landscapes and palm groves.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 1,
    description:
      "Reach Merzouga beside the Erg Chebbi dunes and spend the first night near the desert.",
  },
  {
    id: "khamlia",
    name: "Khamlia",
    lat: 31.037,
    lng: -4.006,
    day: 2,
    description:
      "Visit Khamlia during the Merzouga desert exploration and experience local Gnawa musical traditions.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi Dunes",
    lat: 31.1477,
    lng: -3.9786,
    day: 2,
    description:
      "Ride camels through the Erg Chebbi dunes and enjoy the Sahara sunset.",
  },
  {
    id: "sahara-desert-camp",
    name: "Sahara Desert Camp",
    lat: 31.153,
    lng: -3.968,
    day: 2,
    description:
      "Spend the second night at a desert camp near Erg Chebbi with dinner and local music.",
  },
  {
    id: "merzouga-sunrise",
    name: "Merzouga Sunrise",
    lat: 31.1477,
    lng: -3.9786,
    day: 3,
    description:
      "Wake early to watch sunrise over the Erg Chebbi dunes before returning to Fes.",
  },
  {
    id: "fes-return",
    name: "Fes",
    lat: 34.0331,
    lng: -5.0003,
    day: 3,
    description:
      "Arrive back in Fes in the late afternoon or evening and finish the 3-day Sahara tour.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 3 Days Fes to Merzouga Desert Tour",

      description:
        "Find practical answers about the 3-day Fes to Merzouga desert tour, including driving time, Ifrane and the Middle Atlas, the cedar forest near Azrou, accommodation in Merzouga, the full desert exploration day, Khamlia, camel trekking, Erg Chebbi, the Sahara desert camp, meals, weather and the return journey to Fes.",
    },
  ],

  faqs: [
    {
      question:
        "Is 3 days enough for a Fes to Merzouga desert tour?",

      answer:
        "Yes. Three days gives you enough time to travel from Fes to Merzouga, spend a full day exploring the desert region and return to Fes. The first and third days include long driving sections, so travelers who prefer a slower pace may want to add an extra day.",
    },
    {
      question:
        "What route does the 3-day Fes to Merzouga tour follow?",

      answer:
        "The outbound route normally travels from Fes through Ifrane, the Middle Atlas cedar region, Midelt and the Ziz area before reaching Merzouga. Day two is dedicated to Merzouga and Erg Chebbi, and day three follows the road north toward Fes again.",
    },
    {
      question:
        "Does the tour stop in Ifrane?",

      answer:
        "Yes. Ifrane is normally one of the first stops after leaving Fes. It gives travelers a short break and a chance to see the cooler Middle Atlas landscape before continuing south.",
    },
    {
      question:
        "Can we see monkeys in the cedar forest near Azrou?",

      answer:
        "Barbary macaques may sometimes be seen in the cedar forest region near Azrou, but wildlife sightings cannot be guaranteed. Visitors should observe them respectfully and avoid feeding or disturbing the animals.",
    },
    {
      question:
        "Where do we stay on the first night?",

      answer:
        "The first night is spent in a hotel, riad or guesthouse in the Merzouga area close to the Erg Chebbi dunes. This allows you to begin the full desert experience early the following day.",
    },
    {
      question:
        "What happens during the full Merzouga desert day?",

      answer:
        "The second day focuses on the Merzouga region. Depending on the exact tour plan, you can explore desert landscapes, visit Khamlia, experience Gnawa music and learn more about local desert culture before starting the afternoon camel trek into Erg Chebbi.",
    },
    {
      question:
        "Is Khamlia included in the Merzouga desert tour?",

      answer:
        "Khamlia can be included as part of the desert exploration day. It is known for its connection with Gnawa musical traditions and is a useful cultural stop near Merzouga.",
    },
    {
      question:
        "Do we visit nomad families?",

      answer:
        "A visit to people living in the desert region may be included depending on the route, local conditions and the tour arrangement. Such visits should be respectful and should not be treated as guaranteed staged attractions.",
    },
    {
      question:
        "Is camel trekking included?",

      answer:
        "Yes. The itinerary includes a camel trek across the Erg Chebbi dunes, normally in the late afternoon so travelers can enjoy the changing light and Sahara sunset before reaching the desert camp.",
    },
    {
      question:
        "Can I reach the desert camp without riding a camel?",

      answer:
        "Yes. If you prefer not to ride a camel, ask about a 4x4 transfer to the desert camp. This is useful for travelers with mobility concerns or anyone who simply prefers another way to reach the camp.",
    },
    {
      question:
        "What is the desert camp like?",

      answer:
        "Camp styles vary by package. The standard experience includes a private or designated tent, dinner, breakfast and an evening in the desert. Ask which camp category and tent facilities are included before booking.",
    },
    {
      question:
        "Can we see both sunset and sunrise in Erg Chebbi?",

      answer:
        "Yes, weather permitting. The camel trek is normally timed around sunset on day two, and travelers can wake early on day three to watch sunrise over the dunes before breakfast.",
    },
    {
      question:
        "Is the Sahara cold at night?",

      answer:
        "It can become cool or cold after sunset, particularly in winter. Bring a warm layer or jacket even if the daytime temperature is comfortable.",
    },
    {
      question:
        "Are meals included in the tour?",

      answer:
        "Breakfasts and dinners are included according to this itinerary. Lunches and drinks are not included, allowing travelers to choose meals during road stops.",
    },
    {
      question:
        "How long is the drive between Fes and Merzouga?",

      answer:
        "It is a long overland journey and normally takes most of the day once sightseeing, lunch and rest stops are included. Exact travel time changes with traffic, weather, road conditions and the number of stops.",
    },
    {
      question:
        "What should I bring for the Fes to Merzouga tour?",

      answer:
        "Bring comfortable shoes, light clothing, sun protection, sunglasses, a hat, a reusable water bottle, a warm layer for evenings, personal medication, a small overnight bag and a power bank.",
    },
    {
      question:
        "What time do we arrive back in Fes on day three?",

      answer:
        "Arrival is normally in the late afternoon or evening, but exact timing cannot be guaranteed because the return journey is long and can be affected by road conditions, weather, traffic and stops.",
    },
    {
      question:
        "Can this Fes to Merzouga itinerary be private?",

      answer:
        "Yes. A private version is especially useful for travelers who want more flexibility with photo stops, lunch breaks, the pace of the Merzouga exploration and accommodation preferences.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                               TOUR HIGHLIGHTS                              */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "What Happens on the 3 Days Fes to Merzouga Desert Tour?",

  highlights: [
    "Leave Fes and cross the beautiful Middle Atlas Mountains.",
    "Stop in Ifrane for a short walk and mountain air.",
    "Travel through the cedar forest region near Azrou.",
    "Look for Barbary macaques in their natural environment without feeding them.",
    "Stop around Midelt for lunch during the journey south.",
    "Watch the scenery change from green mountains to dry southeastern landscapes.",
    "Travel through the Ziz region and oasis scenery.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Spend the first night in a hotel or guesthouse near the desert.",
    "Dedicate the second day to exploring the Merzouga region.",
    "Visit Khamlia and experience Gnawa musical traditions.",
    "Learn more about life and culture in the desert region.",
    "Ride a camel across the golden Erg Chebbi dunes.",
    "Watch the Sahara sunset from the dunes.",
    "Spend one night in a desert camp near Merzouga.",
    "Enjoy dinner and local music at the camp.",
    "Look at the stars when the desert sky is clear.",
    "Wake early for sunrise over Erg Chebbi.",
    "Return north through the Middle Atlas to Fes.",
    "Experience mountains and Sahara landscapes in one 3-day Morocco tour.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                              SHORT ROUTE TABLE                             */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route:
      "Fes → Ifrane → Azrou Cedar Forest → Midelt → Ziz Valley → Merzouga",
    target: "day-1",
  },
  {
    day: "Day 2",
    route:
      "Merzouga → Khamlia → Desert Exploration → Erg Chebbi → Sahara Camp",
    target: "day-2",
  },
  {
    day: "Day 3",
    route:
      "Merzouga → Ziz Valley → Midelt → Middle Atlas → Ifrane → Fes",
    target: "day-3",
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

        "Our 3-day Fes to Merzouga desert tour was one of the highlights of our Morocco trip. The drive through Ifrane, the Middle Atlas and Midelt was beautiful, and the views around the Ziz Valley were incredible. Reaching Merzouga on the first day gave us more time to enjoy the desert on day two. We loved visiting Khamlia, riding camels across the Erg Chebbi dunes at sunset and spending the night in the Sahara camp under a sky full of stars.",

    },

  {

    id: 2,

    name: "James Anderson",

    avatar: "/images/toursits-comes-to-morocco.jpeg",

    flag: "🇬🇧",

    rating: 5,

    date: "1 month ago",

    review:

      "A fantastic Fes to Merzouga tour from beginning to end. The route was long on the first day, but the stops in Ifrane, Midelt and the Ziz region made the journey interesting. We really enjoyed having a full second day around Merzouga instead of leaving the desert immediately. Khamlia, the camel trek, Sahara sunset and the overnight desert camp were all memorable experiences.",

  },

  {

    id: 3,

    name: "Sophie Martin",

    avatar: "/images/toursits-comes-to-morocco.jpeg",

    flag: "🇨🇦",

    rating: 5,

    date: "1 month ago",

    review:

      "We highly recommend this 3-day Fes to Merzouga desert tour. The landscapes changed completely during the journey, from the green Middle Atlas to the dry valleys and finally the golden Erg Chebbi dunes. We enjoyed learning more about the Merzouga area and Gnawa music in Khamlia before the camel ride. Watching the sunset over the dunes and sleeping in the Sahara camp made the trip very special.",

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

      "This was a great way to experience the Sahara from Fes in only three days. Our favorite part was having a full desert day in Merzouga before the overnight camp. The camel trek across Erg Chebbi at sunset was amazing, and sunrise the next morning was just as beautiful. The return drive through Midelt and the Middle Atlas was long, but everything was well organized and the stops made the journey comfortable.",

  },

]

};

/* -------------------------------------------------------------------------- */
/*                              STRUCTURED DATA                               */
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
        "A three-day Fes to Merzouga desert tour through Ifrane, the Middle Atlas, Midelt and the Ziz region. Spend a full day exploring Merzouga before camel trekking across Erg Chebbi at sunset and sleeping in a Sahara desert camp.",
      provider: {
        "@id": "https://moorishtour.com/#organization",
      },
      touristType: [
        "Couples",
        "Families",
        "Solo travelers",
        "Adventure travelers",
        "Cultural travelers",
        "Sahara desert travelers",
      ],

      tripOrigin: {
        "@type": "Place",
        name: "Fes",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fes",
          addressCountry: "MA",
        },
      },

      itinerary: {
        "@type": "ItemList",
        name: "3 Days Fes to Merzouga Desert Tour Itinerary",
        numberOfItems: 3,

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name:
              "Day 1: Fes to Merzouga via Ifrane and Midelt",
            description:
              "Leave Fes, cross the Middle Atlas through Ifrane and the Azrou cedar region, stop around Midelt and continue through the Ziz region to Merzouga for the first overnight stay.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name:
              "Day 2: Merzouga Desert Experience and Sahara Camp",
            description:
              "Explore the Merzouga region, visit Khamlia, learn about local desert culture, then ride camels across the Erg Chebbi dunes at sunset and spend the night in a Sahara camp.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name:
              "Day 3: Merzouga to Fes",
            description:
              "Watch sunrise over Erg Chebbi, have breakfast and travel back to Fes through the Ziz region, Midelt and the Middle Atlas.",
          },
        ],
      },

      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Duration",
          value: "3 days / 2 nights",
        },
        {
          "@type": "PropertyValue",
          name: "Departure",
          value: "Fes",
        },
        {
          "@type": "PropertyValue",
          name: "Main Sahara Destination",
          value: "Merzouga / Erg Chebbi",
        },
        {
          "@type": "PropertyValue",
          name: "Merzouga Desert Day",
          value: "Included",
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
          name: "Transportation",
          value: "Air-conditioned vehicle",
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                      */
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
              {/* ------------------------------------------------------------ */}
              {/* OVERVIEW                                                     */}
              {/* ------------------------------------------------------------ */}

              <section
                className="my-10 scroll-mt-42 py-10"
                id="overview"
              >
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Fes Sahara Desert Tour
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    What Is the 3 Days Fes to Merzouga Desert Tour?
                  </h2>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    The <strong>3 days Fes to Merzouga desert tour</strong> is
                    designed for travelers who want to reach the Sahara from
                    Fes while keeping enough time for a full day in Merzouga.
                    Day one crosses the Middle Atlas and takes you directly to
                    the edge of Erg Chebbi. Day two is dedicated to the desert
                    region, camel trekking and the Sahara camp, while day
                    three returns north to Fes.
                  </p>

                  <p>
                    Reaching Merzouga on the first day gives you more time
                    around the dunes on day two. Instead of treating the Sahara
                    as only an overnight stop, this itinerary includes time to
                    explore the Merzouga region, learn about local desert
                    culture and enjoy the Erg Chebbi landscape before the
                    camel trek and overnight camp.
                  </p>
                </div>
<Overview highlightsOverview={highlightsOverview}>
  <>
    Your journey begins in{" "}
    <PlaceHoverCard place="fes">
      Fes
    </PlaceHoverCard>
    . From the city, travel south into the{" "}
    <PlaceHoverCard place="high-atlas-mountains">
      Middle Atlas
    </PlaceHoverCard>{" "}
    and stop in{" "}
    <PlaceHoverCard place="ifrane">
      Ifrane
    </PlaceHoverCard>
    . Continue through the cedar forest region around Azrou, where
    Barbary macaques may sometimes be seen. Wildlife sightings are not
    guaranteed, and animals should not be fed or disturbed.

    <br />
    <br />

    The road then continues toward{" "}
    <PlaceHoverCard place="midelt">
      Midelt
    </PlaceHoverCard>
    . After lunch, the green mountain scenery gradually gives way to
    drier valleys, open landscapes and oasis areas. By late afternoon
    or evening, arrive in{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>{" "}
    beside the{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi dunes
    </PlaceHoverCard>
    . You spend the first night close to the Sahara and prepare for the
    full desert experience the following day.

    <br />
    <br />

    The second day stays around{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>{" "}
    so you can experience much more than a quick camel ride. Visit{" "}
    <PlaceHoverCard place="khamlia">
      Khamlia
    </PlaceHoverCard>
    , discover Gnawa musical traditions and explore the desert
    landscapes surrounding the dunes. This part of the tour gives you
    more time to understand the culture and environment of
    southeastern Morocco.

    <br />
    <br />

    In the afternoon, return to{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>{" "}
    and meet your camel guide. Ride across the golden Sahara dunes as
    the light becomes softer and the sand changes from pale gold to
    orange. After watching the sunset, continue toward the desert camp
    for dinner, local music and a quiet night surrounded by the Sahara.

    <br />
    <br />

    On the final morning, wake early for sunrise over{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>
    . After breakfast, return to{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>{" "}
    and begin the journey north. Travel again through{" "}
    <PlaceHoverCard place="midelt">
      Midelt
    </PlaceHoverCard>{" "}
    and{" "}
    <PlaceHoverCard place="ifrane">
      Ifrane
    </PlaceHoverCard>{" "}
    before arriving back in{" "}
    <PlaceHoverCard place="fes">
      Fes
    </PlaceHoverCard>{" "}
    in the late afternoon or evening.
  </>
</Overview>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* ROUTE TABLE                                                  */}
              {/* ------------------------------------------------------------ */}

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
                    3 Days Fes to Merzouga Desert Tour Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    This route reaches Merzouga on the first day, gives you a
                    full second day in the Sahara region and returns to Fes on
                    day three.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Fes to Merzouga Tour Route
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

              {/* ------------------------------------------------------------ */}
              {/* HIGHLIGHTS                                                   */}
              {/* ------------------------------------------------------------ */}

              <section
                className="scroll-mt-42 py-10"
                id="highlights"
              >
                <TourHighlights
                  title={tour.title}
                  highlights={tour.highlights}
                />
              </section>

              {/* ------------------------------------------------------------ */}
              {/* ITINERARY                                                    */}
              {/* ------------------------------------------------------------ */}

              <section
                className="scroll-mt-42 py-16"
                id="itinerary"
              >
                <TourItinerary
                  title={propsObj.title}
                  days={itinerary}
                />
              </section>

              {/* ------------------------------------------------------------ */}
              {/* PRICE / BOOKING NOTE                                         */}
              {/* ------------------------------------------------------------ */}

              <section
                id="tourPrice"
                className="scroll-mt-42 py-10"
                aria-labelledby="tour-price-title"
              >
                <div className="mx-auto">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                      Tour Price
                    </p>

                    <h2
                      id="tour-price-title"
                      className="mt-2 text-2xl font-bold tracking-tight text-slate-900"
                    >
                      How Much Does the 3-Day Fes to Merzouga Desert Tour Cost?
                    </h2>

                    <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                      The price depends on your travel date, group size,
                      private or shared option, hotel category and desert-camp
                      level. Instead of publishing a price that may not match
                      your exact booking, request the current rate for your
                      dates and number of travelers.
                    </p>

                    <a
                      href="#reservation-form"
                      className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-800"
                    >
                      Check Current Price & Availability
                    </a>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* INCLUDED                                                     */}
              {/* ------------------------------------------------------------ */}

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

              {/* ------------------------------------------------------------ */}
              {/* WHAT TO BRING                                                */}
              {/* ------------------------------------------------------------ */}

              <section
                className="scroll-mt-42 py-10"
                id="info"
              >
                <WhatToBring
                  description="Pack for very different conditions on your 3-day Fes to Merzouga desert tour. You begin in the cooler Middle Atlas and later spend time beside the Erg Chebbi dunes, where daytime sun can be strong but evenings and early mornings may be cool. Bring comfortable shoes for sightseeing stops, sun protection for the desert, a warm layer for the Sahara night and a small overnight bag for the camp. Keep essential medication and valuable items with you."
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
                      text: "Warm jacket or sweater for mountain and desert evenings",
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
                      text: "Personal toiletries and essential medication",
                      icon: ShieldCheckIcon,
                    },
                    {
                      text: "Power bank",
                      icon: BoltIcon,
                    },
                  ]}
                />
              </section>

              {/* ------------------------------------------------------------ */}
              {/* MAP                                                          */}
              {/* ------------------------------------------------------------ */}

              <section
                className="scroll-mt-42 py-10"
                id="map"
              >
                <h2 className="mb-3 text-2xl font-bold text-slate-900">
                  Map & Route for the 3 Days Fes to Merzouga Desert Tour
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the route from Fes through Ifrane, the Middle Atlas,
                  Midelt and the Ziz region to Merzouga, then explore Erg
                  Chebbi before returning north to Fes.
                </p>

                <TourMap locations={locations} />
              </section>

              {/* ------------------------------------------------------------ */}
              {/* FAQ                                                          */}
              {/* ------------------------------------------------------------ */}

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

            {/* SIDEBAR */}
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
                  Fes to Sahara
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Three Days in the Moroccan Sahara?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Travel from Fes through Ifrane, the Middle Atlas and Midelt,
                  reach Merzouga on the first day, spend a full day exploring
                  the desert region and finish with camel trekking, sunset and
                  a night in a Sahara camp beside Erg Chebbi.
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
                  3 Days · 2 Nights · Fes → Merzouga → Fes · Full Sahara Experience
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

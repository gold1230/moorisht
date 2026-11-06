import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Temporary image so the page can use your existing asset.
// Replace it later with a dedicated Casablanca/Rabat → Merzouga hero image.
import CasablancaToMerzouga3Day from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";

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
  image: CasablancaToMerzouga3Day,
  imagetitle: "3 Days Casablanca or Rabat to Merzouga Desert Tour",
  imageurl:
    "https://moorishtour.com/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon: "Short Sahara Escape",
  type: "Sahara Desert Tour",

  url:
    "https://moorishtour.com/tour/3-day-tour-from-casablanca-rabat-to-the-sahara-desert/",

  title: "3 Days Casablanca or Rabat to Merzouga Desert Tour",

  description:
    "Travel from Casablanca or Rabat to Merzouga on a 3-day Morocco desert tour via Meknes, Midelt and Ziz Valley, with camel trekking and a Sahara camp.",

  overeview:
    "A fast 3-day Sahara tour from Casablanca or Rabat through Meknes, Midelt and the Ziz Valley to Merzouga and Erg Chebbi, including camel trekking, sunset and an overnight desert camp.",

  duration: "3 Days / 2 Nights",

  route:
    "Casablanca / Rabat → Meknes → Midelt → Ziz Valley → Merzouga → Kasbah Tadla → Casablanca / Rabat",

  reviews: "4",
  reviewsRate: "5",
  price: 195,

  maxPeople: "Private / Small Group",
  accommodation: "Hotel / Desert Camp",
  activities: "Sightseeing, Camel Trekking & Sahara Camp",
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "3 Days Casablanca or Rabat to Merzouga Desert Tour",

  description:
    "Take a 3-day Casablanca or Rabat to Merzouga desert tour through Meknes, Midelt and Ziz Valley. Enjoy camel trekking, Sahara sunset and desert camp.",

  keywords: [
    "3 days Casablanca to Merzouga desert tour",
    "3 day Casablanca to Merzouga desert tour",
    "Casablanca to Merzouga desert tour",
    "Casablanca Sahara desert tour",
    "Casablanca to Sahara desert",
    "Casablanca to Merzouga tour",
    "3 days Rabat to Merzouga desert tour",
    "3 day Rabat to Merzouga desert tour",
    "Rabat to Merzouga desert tour",
    "Rabat Sahara desert tour",
    "Rabat to Sahara desert",
    "Rabat to Merzouga tour",
    "Casablanca desert tour 3 days",
    "Rabat desert tour 3 days",
    "Morocco desert tour from Casablanca",
    "Morocco desert tour from Rabat",
    "Casablanca to Erg Chebbi",
    "Rabat to Erg Chebbi",
    "Casablanca Meknes Midelt Merzouga tour",
    "Rabat Meknes Midelt Merzouga tour",
    "Midelt Ziz Valley Merzouga tour",
    "Merzouga camel trekking",
    "Merzouga desert camp",
    "Erg Chebbi Sahara tour",
    "short Morocco Sahara tour",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "3 Days Casablanca or Rabat to Merzouga Desert Tour",
    description:
      "Cross Morocco from Casablanca or Rabat to Merzouga in three days, with Meknes, Midelt, Ziz Valley, Erg Chebbi camel trekking and a Sahara camp.",
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
    subtitle: "Oasis & palm-grove views",
  },
  {
    icon: FireIcon,
    title: "Erg Chebbi",
    subtitle: "Camel trek & Sahara sunset",
  },
  {
    icon: HomeModernIcon,
    title: "Desert Camp",
    subtitle: "Night beside the dunes",
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
      "Your 3-day Casablanca or Rabat to Merzouga desert tour begins with morning pickup from your hotel, riad or agreed meeting point. Leave Morocco's Atlantic side and travel inland toward Meknes, one of the country's historic imperial cities. The drive introduces you to the changing landscapes of northern and central Morocco before a stop in Meknes for a short visit, lunch break or time to enjoy the historic atmosphere depending on your departure time. Continue southeast toward Midelt, a town located between major mountain regions and an important overnight stop on the road to the Sahara. As you travel farther from the coast, the scenery becomes more rural, with wide agricultural areas, mountain views and small towns along the road. Arrive in Midelt in the afternoon or evening, check into your hotel or guesthouse and rest before the journey toward the Ziz Valley and Merzouga the following day.",

    details: [
      "Pickup in Casablanca or Rabat",
      "Private or small-group road journey",
      "Meknes",
      "Imperial-city atmosphere",
      "Scenic inland drive",
      "Arrival in Midelt",
      "Hotel or guesthouse",
      "Dinner & breakfast according to package",
    ],
  },

  {
    title:
      "Day 2: Midelt – Ziz Valley – Merzouga – Erg Chebbi Desert",

    description:
      "After breakfast in Midelt, continue south toward one of the most scenic parts of the journey. The landscape becomes increasingly dry and dramatic as the road approaches the Ziz Valley, known for long palm groves, oasis settlements and viewpoints over the valley. Stop for photos and enjoy the contrast between green vegetation and the surrounding rocky terrain before continuing toward the Sahara. In the afternoon, arrive in Merzouga, the desert village beside the famous Erg Chebbi dunes. Meet your camel guide and begin a peaceful camel trek across the golden sand. As the sun moves lower, the dunes change color and create one of the most memorable moments of the tour. Stop to enjoy the Sahara sunset before continuing to your desert camp. After arrival, settle into your tent, enjoy dinner and spend the evening with local music. When the sky is clear, the quiet desert and low surrounding light make the stars especially visible.",

    details: [
      "Breakfast in Midelt",
      "Scenic road toward southeastern Morocco",
      "Ziz Valley",
      "Palm-grove viewpoints",
      "Arrival in Merzouga",
      "Erg Chebbi dunes",
      "Camel trekking",
      "Sahara sunset",
      "Private desert-camp tent",
      "Dinner & breakfast",
      "Local music at camp",
    ],
  },

  {
    title:
      "Day 3: Merzouga Desert – Midelt – Kasbah Tadla – Casablanca / Rabat",

    description:
      "Wake up early for sunrise over the Erg Chebbi dunes before breakfast at the desert camp. After breakfast, return toward Merzouga by camel or 4x4 transfer and meet your driver for the long journey back toward Morocco's Atlantic side. Travel north through changing desert, plateau and mountain landscapes, passing the Midelt region again before continuing west. Later, pass through Kasbah Tadla, an important town on the route across central Morocco, and continue toward Casablanca. Travelers who began the tour in Rabat can arrange the most suitable final drop-off according to the confirmed booking. The third day is a long road day, but it shows how quickly Morocco's scenery changes from Sahara dunes and dry valleys to central plains and Atlantic cities. Arrival is normally in the evening, where the 3-day Morocco desert tour ends at your hotel, riad or agreed drop-off point.",

    details: [
      "Sahara sunrise",
      "Breakfast at desert camp",
      "Camel or 4x4 camp transfer",
      "Departure from Merzouga",
      "Midelt region",
      "Kasbah Tadla",
      "Long scenic return drive",
      "Drop-off in Casablanca or Rabat",
    ],
  },
];

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
    "1 night in a desert camp near Merzouga",
    "Breakfasts and dinners according to the confirmed package",
    "Camel trek in the Erg Chebbi dunes",
    "4x4 transfer to or from the desert camp when arranged",
  ],

  notIncluded: [
    "Lunches",
    "Drinks",
    "Entrance fees when required",
    "Local guides unless specifically listed",
    "Tips for the driver, guides and camp staff",
    "Personal purchases and expenses",
    "Travel insurance",
    "Optional activities not confirmed as included",
  ],
};

/* -------------------------------------------------------------------------- */
/*                                  MAP DATA                                  */
/* -------------------------------------------------------------------------- */

const locations = [
  {
    id: "casablanca",
    name: "Casablanca",
    lat: 33.5731,
    lng: -7.5898,
    day: 1,
    description:
      "One possible starting point for the 3-day desert tour to Merzouga.",
  },
  {
    id: "rabat",
    name: "Rabat",
    lat: 34.0209,
    lng: -6.8416,
    day: 1,
    description:
      "Rabat can also be used as the departure point for the three-day Sahara route.",
  },
  {
    id: "meknes",
    name: "Meknes",
    lat: 33.8935,
    lng: -5.5473,
    day: 1,
    description:
      "Historic imperial-city stop on the road from Casablanca or Rabat toward Midelt.",
  },
  {
    id: "midelt",
    name: "Midelt",
    lat: 32.6806,
    lng: -4.7369,
    day: 1,
    description:
      "First overnight stop before continuing toward the Ziz Valley and Merzouga.",
  },
  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.86,
    lng: -4.35,
    day: 2,
    description:
      "Scenic oasis valley known for palm groves and viewpoints on the road toward Merzouga.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 2,
    description:
      "Sahara village beside the Erg Chebbi dunes and gateway to the desert-camp experience.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi",
    lat: 31.1477,
    lng: -3.9786,
    day: 2,
    description:
      "Golden dune field used for camel trekking, sunset, sunrise and desert camping.",
  },
  {
    id: "kasbah-tadla",
    name: "Kasbah Tadla",
    lat: 32.5977,
    lng: -6.2684,
    day: 3,
    description:
      "Central Moroccan town passed on the return journey toward Casablanca or Rabat.",
  },
  {
    id: "casablanca-return",
    name: "Casablanca",
    lat: 33.5731,
    lng: -7.5898,
    day: 3,
    description:
      "Standard final destination and drop-off point for the tour.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 3 Days Casablanca or Rabat to Merzouga Desert Tour",

      description:
        "Find practical answers about this three-day Morocco desert tour from Casablanca or Rabat to Merzouga, including driving time, Meknes, Midelt, Ziz Valley, camel trekking, Erg Chebbi, the Sahara desert camp, accommodation, meals, packing and the return journey through Kasbah Tadla.",
    },
  ],

  faqs: [
    {
      question:
        "Can I start the 3-day Merzouga desert tour from Casablanca or Rabat?",

      answer:
        "Yes. The tour can begin in Casablanca or Rabat. Your exact pickup location and departure time should be confirmed before the trip because the starting city affects the first day's driving schedule.",
    },
    {
      question:
        "Is 3 days enough to visit the Sahara from Casablanca?",

      answer:
        "Three days is possible, but it is a fast itinerary with significant driving. It is best for travelers with limited time who want to experience Merzouga, Erg Chebbi, camel trekking and a desert camp. If you have more time, a four- or five-day itinerary allows a slower pace.",
    },
    {
      question:
        "Is 3 days enough to visit Merzouga from Rabat?",

      answer:
        "Yes, but it remains a long-distance road trip. The itinerary divides the journey with an overnight stay in Midelt before continuing to Merzouga on day two.",
    },
    {
      question:
        "What is the route from Casablanca to Merzouga?",

      answer:
        "This itinerary travels from Casablanca or Rabat toward Meknes and Midelt on day one, continues through the Ziz Valley to Merzouga and Erg Chebbi on day two, then returns through Midelt and Kasbah Tadla on day three.",
    },
    {
      question:
        "Does the tour stop in Meknes?",

      answer:
        "Yes. Meknes is included on the first day's route. The amount of sightseeing time depends on your departure city, traffic and the day's overall schedule.",
    },
    {
      question:
        "Where do we sleep on the first night?",

      answer:
        "The first night is spent in Midelt in a hotel or guesthouse. This divides the long journey between the Atlantic cities and the Sahara.",
    },
    {
      question:
        "Does the tour visit Ziz Valley?",

      answer:
        "Yes. Ziz Valley is one of the main scenic areas on day two. The road offers views of palm groves and oasis landscapes before continuing toward Merzouga.",
    },
    {
      question:
        "Is camel trekking included in Merzouga?",

      answer:
        "Yes. The standard itinerary includes a camel trek across the Erg Chebbi dunes, normally timed around sunset before reaching the desert camp.",
    },
    {
      question:
        "Can I go to the desert camp without riding a camel?",

      answer:
        "Yes. A 4x4 transfer can usually be arranged for travelers who do not want to ride a camel or who have mobility concerns.",
    },
    {
      question:
        "Where is the desert camp?",

      answer:
        "The camp is located in the Merzouga and Erg Chebbi desert area. Exact camp location and comfort level depend on the package and accommodation category confirmed for your booking.",
    },
    {
      question:
        "Can we see both sunset and sunrise in the Sahara?",

      answer:
        "Yes, weather permitting. Sunset is normally enjoyed during the camel trek on day two, and travelers can wake early on day three for sunrise over the dunes.",
    },
    {
      question:
        "Are meals included?",

      answer:
        "Breakfasts and dinners are included according to the confirmed package. Lunches and drinks are normally not included, giving travelers flexibility during road stops.",
    },
    {
      question:
        "How much driving is involved in this 3-day desert tour?",

      answer:
        "The tour includes long road sections because Casablanca and Rabat are far from Merzouga. Day one and day three are mainly travel days, while day two combines road travel with the Ziz Valley and the Sahara experience.",
    },
    {
      question:
        "Is the tour suitable for children?",

      answer:
        "Families can take the tour, but parents should consider the long driving hours. A private tour is useful for families because it allows more flexibility for comfort stops and timing.",
    },
    {
      question:
        "What should I bring for the Sahara desert tour?",

      answer:
        "Bring comfortable shoes, light clothing, sun protection, sunglasses, a hat, a reusable water bottle, a warm layer for the desert night, personal medication, a small overnight bag and a power bank.",
    },
    {
      question:
        "What time will we return to Casablanca or Rabat?",

      answer:
        "Arrival is normally in the evening, but the exact time cannot be guaranteed because the final day is long and may be affected by traffic, weather, road conditions and rest stops.",
    },
    {
      question:
        "Can this Casablanca or Rabat desert tour be customized?",

      answer:
        "Yes. Private tours can often be adjusted for pickup city, accommodation level, camp category, rest stops and final drop-off. Travelers with more time can also extend the itinerary to reduce the amount of driving each day.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the 3 Days Casablanca or Rabat to Merzouga Desert Tour",

  highlights: [
    "Start your Sahara journey from Casablanca or Rabat.",
    "Travel inland through changing Moroccan landscapes.",
    "Visit Meknes, one of Morocco's historic imperial cities.",
    "Spend the first night in Midelt.",
    "Continue south toward southeastern Morocco.",
    "Enjoy panoramic views over the Ziz Valley.",
    "See palm groves and oasis landscapes.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Ride a camel across the golden Sahara dunes.",
    "Watch sunset over Erg Chebbi.",
    "Spend a night in a Merzouga desert camp.",
    "Enjoy dinner and local music at the camp.",
    "Wake early for Sahara sunrise.",
    "Return by camel or 4x4 transfer.",
    "Travel north through Midelt again.",
    "Pass through Kasbah Tadla on the return route.",
    "Finish the tour in Casablanca or Rabat.",
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
      "Midelt → Ziz Valley → Merzouga → Erg Chebbi Desert Camp",
    target: "day-2",
  },
  {
    day: "Day 3",
    route:
      "Merzouga → Midelt → Kasbah Tadla → Casablanca / Rabat",
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

        "Our 3-day Casablanca to Merzouga desert tour was an unforgettable experience. The first day through Meknes and Midelt gave us a chance to see a completely different side of Morocco before reaching the Sahara. We especially loved the views over the Ziz Valley, the camel trek across Erg Chebbi at sunset and the peaceful night in the desert camp. It was a fast trip, but very well organized and perfect for the limited time we had in Morocco.",

    },

  {

    id: 2,

    name: "James Anderson",

    avatar: "/images/toursits-comes-to-morocco.jpeg",

    flag: "🇬🇧",

    rating: 5,

    date: "1 month ago",

    review:

      "We started our desert tour from Rabat and really enjoyed the route through Meknes, Midelt and the Ziz Valley. The scenery changed so much during the journey, from green countryside to mountains, palm groves and finally the Sahara. Arriving in Merzouga and riding camels into the Erg Chebbi dunes was the highlight. The sunset, dinner and local music at the desert camp made the long drive completely worth it.",

  },

  {

    id: 3,

    name: "Sophie Martin",

    avatar: "/images/toursits-comes-to-morocco.jpeg",

    flag: "🇨🇦",

    rating: 5,

    date: "1 month ago",

    review:

      "This three-day Morocco desert tour from Casablanca was a great choice for us because we wanted to see the Sahara but did not have many days available. We enjoyed the stop in Meknes, the overnight stay in Midelt and the beautiful Ziz Valley on the way to Merzouga. Camel trekking at sunset and waking early for sunrise over Erg Chebbi were incredible experiences. Our driver made the long road days comfortable with regular stops.",

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

      "A fantastic short Sahara adventure from Casablanca. The route was long but full of changing scenery, and we liked having the first night in Midelt before continuing through the Ziz Valley to Merzouga. The camel ride across the golden dunes, Sahara sunset and overnight camp were easily the best parts of the tour. The return through Midelt and Kasbah Tadla was a long day, but everything was handled smoothly.",

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
        "A three-day Morocco Sahara tour from Casablanca or Rabat through Meknes and Midelt to the Ziz Valley, Merzouga and Erg Chebbi, including camel trekking, sunset and an overnight desert camp.",

      provider: {
        "@id": "https://moorishtour.com/#organization",
      },

      touristType: [
        "Couples",
        "Private travelers",
        "Small groups",
        "Adventure travelers",
        "Sahara desert travelers",
        "Travelers with limited time",
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
          "3 Days Casablanca or Rabat to Merzouga Desert Tour Itinerary",
        numberOfItems: 3,

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
          value: "3 days / 2 nights",
        },
        {
          "@type": "PropertyValue",
          name: "Starting Cities",
          value: "Casablanca or Rabat",
        },
        {
          "@type": "PropertyValue",
          name: "Main Destination",
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
          price={propsObj.price}
          reviews={propsObj.reviews}
          reviewsRate={propsObj.reviewsRate}
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
                    What Is the 3 Days Casablanca or Rabat to Merzouga Desert Tour?
                  </h2>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    The{" "}
                    <strong>
                      3 days Casablanca or Rabat to Merzouga desert tour
                    </strong>{" "}
                    is a fast Morocco Sahara itinerary for travelers who begin
                    their trip on the Atlantic side of the country but still
                    want to experience the Erg Chebbi dunes. The route crosses
                    central Morocco through Meknes and Midelt, reaches the Ziz
                    Valley and Merzouga on day two, and returns west on day
                    three.
                  </p>

                  <p>
                    Because Casablanca and Rabat are far from the Sahara, this
                    is a road-intensive tour. It is best for visitors with
                    limited time who understand that day one and day three
                    include long drives. In return, the itinerary gives you a
                    real Merzouga desert experience with camel trekking,
                    Sahara sunset, an overnight camp and sunrise over Erg
                    Chebbi.
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
                    . From Morocco&apos;s Atlantic side, travel inland toward{" "}
                    <PlaceHoverCard place="meknes">
                      Meknes
                    </PlaceHoverCard>
                    , one of the country&apos;s historic imperial cities.
                    Depending on the departure time, there is time for a short
                    stop before continuing southeast toward{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>
                    , where you spend the first night.

                    <br />
                    <br />

                    The following morning, leave{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>{" "}
                    and continue toward the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>
                    . The valley is one of the most visually striking sections
                    of the route, where green palm groves and oasis settlements
                    appear between dry rocky landscapes. Stops at panoramic
                    points give you time to see how water and agriculture shape
                    life in this part of southeastern Morocco.

                    <br />
                    <br />

                    In the afternoon, arrive in{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    , the Sahara village beside the{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>{" "}
                    dunes. Leave the road behind and ride a camel across the
                    golden sand as the light changes toward sunset. After
                    watching the sun disappear behind the dunes, continue to
                    the desert camp for dinner, local music and a quiet night
                    in the Sahara.

                    <br />
                    <br />

                    On the final morning, wake early for sunrise over{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    . After breakfast, return toward{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>{" "}
                    and begin the long road back west. Travel through the{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>{" "}
                    region again, continue through{" "}
                    <PlaceHoverCard place="kasbah-tadla">
                      Kasbah Tadla
                    </PlaceHoverCard>
                    , and finish in{" "}
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
                    3 Days Casablanca / Rabat to Merzouga Tour Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    This three-day itinerary travels from Casablanca or Rabat
                    through Meknes and Midelt, continues via Ziz Valley to
                    Merzouga and Erg Chebbi, then returns through Midelt and
                    Kasbah Tadla.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>

                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Casablanca / Rabat Desert Tour Route
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
                    How Much Does the 3-Day Casablanca or Rabat Desert Tour Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The price depends on your pickup city, number of travelers,
                    travel date, vehicle, Midelt accommodation and desert-camp
                    category. Request the current price for your exact dates
                    and preferred tour type.
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
                  description="This 3-day Casablanca or Rabat to Merzouga desert tour crosses several climate zones in a short time. Bring comfortable clothes for long road sections, walking shoes for sightseeing stops, sun protection for the Sahara and a warm layer for the desert night. Temperatures in Midelt can also be cooler than Casablanca, Rabat and Merzouga depending on the season. Keep a small overnight bag ready for the desert camp and carry essential medication with you."
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
                  Map of the 3 Days Casablanca or Rabat to Merzouga Desert Tour
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the route from Casablanca or Rabat through Meknes and
                  Midelt to the Ziz Valley, Merzouga and Erg Chebbi, then
                  return west through Midelt and Kasbah Tadla.
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
                  Atlantic Cities to the Sahara
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your Casablanca or Rabat to Merzouga Desert Tour?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Travel from Casablanca or Rabat through Meknes, Midelt and
                  Ziz Valley before reaching Merzouga for camel trekking,
                  Sahara sunset and an overnight camp beside Erg Chebbi.
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
                  3 Days · 2 Nights · Casablanca / Rabat · Meknes · Midelt · Ziz Valley · Merzouga
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

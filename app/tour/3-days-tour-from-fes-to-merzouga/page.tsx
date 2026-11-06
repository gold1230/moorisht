import ReviewsSection from "@/Compentents/tour/Reveiws";
import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Replace this image with your dedicated Fes → Merzouga tour image when available.
import FesToMerzouga3Day from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";

import MarrakechToMerzouga4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";
import MarrakechToFes4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
import MarrakechToMerzouga7Day from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";
import MarrakechToMerzouga10Day from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";

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
  url: "https://moorishtour.com/tour/3-days-tour-from-fes-to-merzouga/",

  title: "3 Days Fes to Merzouga Desert Tour",
  description:
    "Book a 3 days Fes to Merzouga desert tour through Ifrane, the Middle Atlas, Midelt and Todra Gorge. Enjoy Erg Chebbi camel trekking, a Sahara sunset and an overnight Merzouga desert camp.",

  overeview:
    "Travel from Fes through the Middle Atlas Mountains and southern Morocco to Merzouga. Visit Ifrane, cedar landscapes, Midelt, Tinghir and Todra Gorge before enjoying camel trekking and one night in a Sahara desert camp beside the Erg Chebbi dunes.",

  duration: "3 Days / 2 Nights",
  route: "Fes → Todra Gorge → Merzouga → Fes",

  // Add only genuine review numbers from your real booking/review system.
  reviews: "0",
  reviewsRate: "0",
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
    "3 Days Fes to Merzouga Desert Tour | Sahara Camel Trek & Camp",

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
    "Fes to Todra Gorge",
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
    title: "Ifrane & Middle Atlas",
    subtitle: "Mountain towns & cedar landscapes",
  },
  {
    icon: MapIcon,
    title: "Todra Gorge",
    subtitle: "Walk below dramatic canyon walls",
  },
  {
    icon: FireIcon,
    title: "Erg Chebbi",
    subtitle: "Camel trek & Sahara sunset",
  },
  {
    icon: HomeModernIcon,
    title: "Desert Camp",
    subtitle: "Overnight beside the dunes",
  },
];

/* -------------------------------------------------------------------------- */
/*                                ITINERARY                                   */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Fes – Ifrane – Middle Atlas – Midelt – Tinghir – Todra Gorge",

    description:
      "Your 3-day Fes to Merzouga desert tour starts with morning pickup from your hotel or riad in Fes. Leave the city and travel south through the Middle Atlas Mountains, where the landscape changes from urban streets to forests, hills and mountain towns. Stop in Ifrane for a short walk, then continue through the cedar region around Azrou. After a lunch stop in Midelt, drive across changing mountain and semi-desert scenery toward southeastern Morocco. Continue through valleys and oasis landscapes before reaching Tinghir and the impressive Todra Gorge. Take time to walk between the tall limestone walls and enjoy the cooler air beside the river. Dinner and overnight are at a hotel or riad in the Todra/Tinghir area.",

    details: [
      "Approx. 7–9h driving with sightseeing stops",
      "Pickup from your hotel or riad in Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Cedar forest area near Azrou",
      "Lunch stop in Midelt",
      "Tinghir oasis area",
      "Todra Gorge walk",
      "Hotel or riad accommodation",
      "Dinner & breakfast",
    ],
  },

  {
    title:
      "Day 2: Todra Gorge – Erfoud – Rissani – Merzouga – Erg Chebbi",

    description:
      "After breakfast, leave Todra Gorge and continue east through the dry landscapes and oasis towns of southeastern Morocco. Pass through small villages before reaching Erfoud, a town well known for the fossils found in the surrounding region. Continue to Rissani, an old market town with a long connection to trade in the Tafilalet area. In the afternoon, arrive in Merzouga beside the golden Erg Chebbi dunes. Meet your camel guide and begin a camel trek into the Sahara, with time to enjoy the changing colors of the dunes around sunset. Reach your desert camp, settle into your tent and enjoy dinner. In the evening, relax around the camp and experience local music and the quiet atmosphere of the Sahara night.",

    details: [
      "Approx. 4–5h driving plus stops",
      "Todra / Tinghir area",
      "Erfoud",
      "Rissani",
      "Merzouga",
      "Erg Chebbi dunes",
      "Camel trekking",
      "Sahara sunset",
      "Private desert-camp tent",
      "Dinner & breakfast",
    ],
  },

  {
    title:
      "Day 3: Merzouga – Sahara Sunrise – Ziz Valley – Midelt – Ifrane – Fes",

    description:
      "Wake early for sunrise over the Erg Chebbi dunes, one of the most peaceful moments of the tour. After breakfast at the camp, return to Merzouga by camel or 4x4 transfer and meet your driver. Begin the journey back to Fes through the landscapes of eastern Morocco. Travel through the Ziz region, continue north toward Midelt and cross the Middle Atlas Mountains again. There will be stops for lunch, rest and photos depending on timing and road conditions. Pass through the Ifrane area before arriving in Fes in the late afternoon or evening, where your 3-day Fes to Merzouga Sahara tour ends with drop-off at your accommodation.",

    details: [
      "Approx. 7–9h driving with breaks",
      "Sahara sunrise",
      "Camel ride or 4x4 camp transfer",
      "Ziz Valley scenery",
      "Midelt",
      "Middle Atlas Mountains",
      "Ifrane area",
      "Breakfast included",
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
    "1 night in a hotel or riad near Tinghir / Todra Gorge",
    "1 night in a desert camp near Merzouga",
    "2 breakfasts and 2 dinners",
    "Camel trek in the Erg Chebbi dunes",
    "4x4 camp transfer if arranged instead of camel riding",
  ],

  notIncluded: [
    "Lunches",
    "Drinks",
    "Entrance fees when required",
    "Local guides at optional sightseeing stops",
    "Tips for the driver, guides and camp staff",
    "Personal shopping and expenses",
    "Activities not listed as included",
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
      "Start your 3-day Fes to Merzouga desert tour with pickup from your hotel or riad in Fes.",
  },
  {
    id: "ifrane",
    name: "Ifrane",
    lat: 33.5228,
    lng: -5.1109,
    day: 1,
    description:
      "Stop in Ifrane, a quiet Middle Atlas town known for its clean streets, mountain setting and distinctive architecture.",
  },
  {
    id: "azrou",
    name: "Azrou Cedar Area",
    lat: 33.4344,
    lng: -5.2213,
    day: 1,
    description:
      "Travel through the cedar forest region near Azrou and enjoy the green Middle Atlas scenery.",
  },
  {
    id: "midelt",
    name: "Midelt",
    lat: 32.6806,
    lng: -4.7369,
    day: 1,
    description:
      "Stop around Midelt for lunch and a break before continuing toward southeastern Morocco.",
  },
  {
    id: "tinghir",
    name: "Tinghir",
    lat: 31.5147,
    lng: -5.5328,
    day: 1,
    description:
      "Reach the Tinghir oasis region, surrounded by palm groves and rocky mountain scenery.",
  },
  {
    id: "todra-gorge",
    name: "Todra Gorge",
    lat: 31.585,
    lng: -5.59,
    day: 1,
    description:
      "Walk through Todra Gorge between its high limestone walls and spend the first night nearby.",
  },
  {
    id: "erfoud",
    name: "Erfoud",
    lat: 31.4353,
    lng: -4.2326,
    day: 2,
    description:
      "Pass through Erfoud, a desert gateway town known for the fossil heritage of the surrounding region.",
  },
  {
    id: "rissani",
    name: "Rissani",
    lat: 31.282,
    lng: -4.265,
    day: 2,
    description:
      "Visit or pass through Rissani, an old market town in the Tafilalet region near Merzouga.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 2,
    description:
      "Arrive in Merzouga, the desert village beside the famous Erg Chebbi dunes.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi Dunes",
    lat: 31.1477,
    lng: -3.9786,
    day: 2,
    description:
      "Enjoy a camel trek across the Erg Chebbi dunes and watch the Sahara sunset.",
  },
  {
    id: "sahara-desert-camp",
    name: "Merzouga Desert Camp",
    lat: 31.153,
    lng: -3.968,
    day: 2,
    description:
      "Spend the second night in a desert camp near Erg Chebbi with dinner and local music.",
  },
  {
    id: "merzouga-sunrise",
    name: "Merzouga Sunrise",
    lat: 31.1477,
    lng: -3.9786,
    day: 3,
    description:
      "Wake early to watch sunrise over the Sahara before beginning the return journey to Fes.",
  },
  {
    id: "fes-return",
    name: "Fes",
    lat: 34.0331,
    lng: -5.0003,
    day: 3,
    description:
      "Return to Fes in the late afternoon or evening and finish the 3-day desert tour.",
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
        "Plan your 3-day Fes to Merzouga desert tour with answers about driving times, Ifrane and the Middle Atlas, Todra Gorge, accommodation, camel trekking, the Merzouga desert camp, meals, weather, luggage and the return journey to Fes. These practical questions help travelers understand what to expect before booking a short Morocco Sahara tour from Fes.",
    },
  ],

  faqs: [
    {
      question:
        "Is 3 days enough for a Fes to Merzouga desert tour?",

      answer:
        "Three days is a practical option for travelers who want to visit Merzouga from Fes while also seeing parts of the Middle Atlas and southeastern Morocco. The itinerary includes long road sections, but the journey is divided with sightseeing stops and two overnight stays. Travelers who prefer slower travel can consider adding an extra day.",
    },
    {
      question:
        "What are the main stops on the 3-day Fes to Merzouga tour?",

      answer:
        "The route includes Fes, Ifrane, the Middle Atlas cedar region, Midelt, Tinghir, Todra Gorge, Erfoud, Rissani, Merzouga and the Erg Chebbi dunes. The return journey travels north again toward Fes with rest and photo stops according to timing and road conditions.",
    },
    {
      question:
        "Is camel trekking included in the Fes to Merzouga desert tour?",

      answer:
        "Yes. The standard experience includes a camel trek in the Erg Chebbi dunes on the second afternoon, normally around sunset, before arriving at the desert camp. Travelers who do not want to ride a camel can ask about a 4x4 transfer.",
    },
    {
      question:
        "Where do we sleep during the 3-day Fes desert tour?",

      answer:
        "The first night is normally spent in a hotel or riad in the Tinghir or Todra Gorge area. The second night is spent in a desert camp near Merzouga and the Erg Chebbi dunes. Exact properties depend on the package and availability.",
    },
    {
      question:
        "Does the tour visit Todra Gorge?",

      answer:
        "Yes. Todra Gorge is one of the main sightseeing stops on the first day. You can take a short walk between the high limestone walls before checking into your accommodation in the area.",
    },
    {
      question:
        "Does the tour stop in Ifrane and the cedar forest?",

      answer:
        "Yes. The route from Fes travels through the Middle Atlas and normally includes a stop in Ifrane plus time in the cedar region around Azrou. Exact stops can change because of weather, road conditions and timing.",
    },
    {
      question:
        "Can I see monkeys near Azrou?",

      answer:
        "Barbary macaques may sometimes be seen in the cedar forest region around Azrou, but wildlife sightings are never guaranteed. Visitors should observe animals respectfully and avoid feeding or disturbing them.",
    },
    {
      question:
        "How long is the drive from Fes to the Sahara?",

      answer:
        "Fes and Merzouga are separated by a long overland journey through the Middle Atlas and eastern Morocco. This itinerary does not drive directly to Merzouga on the first day; it breaks the route with sightseeing and an overnight stay near Todra Gorge before continuing to the Sahara on day two.",
    },
    {
      question:
        "What is included at the Merzouga desert camp?",

      answer:
        "The standard package includes your camp accommodation, dinner, breakfast and the desert transfer or camel-trekking experience described in the itinerary. Camp comfort levels vary, so ask which accommodation category is included in your booking.",
    },
    {
      question:
        "Is the Sahara cold at night?",

      answer:
        "It can be. Desert temperatures can fall significantly after sunset, particularly in winter. Bring a warm layer or jacket even when daytime temperatures are comfortable.",
    },
    {
      question:
        "Are lunches included?",

      answer:
        "No. Lunches and drinks are normally not included. The driver stops at suitable towns or restaurants along the route, giving travelers some flexibility over where and what they eat.",
    },
    {
      question:
        "What should I bring on the 3-day Fes to Merzouga tour?",

      answer:
        "Bring comfortable walking shoes, sun protection, sunglasses, a hat, a reusable water bottle, a warm layer for the desert night, personal toiletries, necessary medication, a small overnight bag and a power bank for your phone or camera.",
    },
    {
      question:
        "Is this Fes to Merzouga tour suitable for families?",

      answer:
        "Families can enjoy the route, but parents should consider the long driving sections and the ages of their children. A private tour is useful for families because it allows more flexibility for breaks and timing.",
    },
    {
      question:
        "Can the Fes to Merzouga itinerary be customized?",

      answer:
        "Private tours can often be adjusted according to your dates, group size, accommodation preferences and travel plans after the desert. Ask before booking if you want to finish in Marrakech, add another desert night or change the pace.",
    },
    {
      question:
        "What time does the tour return to Fes on day three?",

      answer:
        "Arrival is normally in the late afternoon or evening, but there is no single guaranteed time because traffic, road conditions, weather and stops can affect the journey. Avoid planning a tight flight or train connection immediately after the tour.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                               TOUR HIGHLIGHTS                              */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the 3 Days Fes to Merzouga Desert Tour",

  highlights: [
    "Leave Fes and travel south through the Middle Atlas Mountains.",
    "Stop in Ifrane and see a different side of Morocco.",
    "Travel through the cedar forest region around Azrou.",
    "Cross mountain and valley landscapes toward Midelt.",
    "Enjoy views of southeastern Morocco as the landscape becomes drier.",
    "Visit Tinghir and the surrounding oasis scenery.",
    "Walk between the impressive limestone walls of Todra Gorge.",
    "Travel through Erfoud, a region known for fossils.",
    "Pass through the historic market town of Rissani.",
    "Reach Merzouga beside the golden Erg Chebbi dunes.",
    "Ride a camel into the Sahara around sunset.",
    "Watch the colors change across the Erg Chebbi sand dunes.",
    "Spend a night in a desert camp near Merzouga.",
    "Enjoy dinner and local music in the Sahara.",
    "Wake early for sunrise over the dunes.",
    "Return north through changing desert and mountain landscapes.",
    "Travel through the Ziz region and Midelt on the way back to Fes.",
    "Experience mountains, oases, gorges and the Sahara in one 3-day route.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                              SHORT ROUTE TABLE                             */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route:
      "Fes → Ifrane → Azrou Cedar Area → Midelt → Tinghir → Todra Gorge",
    target: "day-1",
  },
  {
    day: "Day 2",
    route:
      "Todra Gorge → Erfoud → Rissani → Merzouga → Erg Chebbi Desert Camp",
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
        "A 3-day Fes to Merzouga desert tour through Ifrane, the Middle Atlas Mountains, Midelt, Tinghir and Todra Gorge before reaching Merzouga and the Erg Chebbi dunes. The experience includes camel trekking, a Sahara sunset and an overnight desert camp before returning to Fes.",
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
              "Day 1: Fes to Todra Gorge via Ifrane and Midelt",
            description:
              "Travel from Fes through Ifrane, the Middle Atlas and Midelt before continuing toward Tinghir and Todra Gorge for the first overnight stay.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name:
              "Day 2: Todra Gorge to Merzouga and Erg Chebbi",
            description:
              "Continue through Erfoud and Rissani to Merzouga, enjoy camel trekking in the Erg Chebbi dunes and spend the night at a Sahara desert camp.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name:
              "Day 3: Merzouga to Fes",
            description:
              "Watch sunrise over the dunes, return to Merzouga and travel north through the Ziz region, Midelt and the Middle Atlas before arriving in Fes.",
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

        <ReviewsSection url={propsObj.url} />
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
                    a short overland Sahara journey connecting northern
                    Morocco with the Erg Chebbi dunes in southeastern Morocco.
                    Instead of flying or traveling directly to the desert, the
                    route lets you see how the country changes from the green
                    Middle Atlas Mountains to dry valleys, oasis towns, rocky
                    gorges and finally the golden Sahara dunes.
                  </p>

                  <p>
                    This itinerary is especially useful for travelers starting
                    in Fes who want a complete desert experience without
                    returning to the same scenery every hour. The journey
                    includes mountain towns, cedar landscapes, Todra Gorge,
                    Erfoud, Rissani and Merzouga, followed by camel trekking,
                    sunset in Erg Chebbi and an overnight Sahara camp.
                  </p>
                </div>

               <Overview highlightsOverview={highlightsOverview}>
            <>
                Your journey begins in{" "}
                <PlaceHoverCard place="fes">
                Fes
                </PlaceHoverCard>
                , one of Morocco&apos;s most historic imperial cities, before traveling
                south through the Middle Atlas Mountains toward{" "}
                <PlaceHoverCard place="ifrane">
                Ifrane
                </PlaceHoverCard>
                . This mountain town has a very different atmosphere from Fes, with a
                cooler climate, green spaces and architecture that makes it one of the
                most distinctive stops on the route.
                
                <br />
                <br />

                From Ifrane, the journey continues through the cedar landscapes around
                Azrou. This part of the Middle Atlas gives travelers a completely
                different view of Morocco, with forests, mountain roads and greener
                scenery before the landscape slowly becomes drier as you travel toward
                southeastern Morocco.

                <br />
                <br />

                After a lunch stop around{" "}
                <PlaceHoverCard place="midelt">
                Midelt
                </PlaceHoverCard>
                , the road continues through broad valleys, mountain scenery and changing
                geological landscapes. Midelt is an important stop between northern
                Morocco and the desert regions because it sits between the Middle Atlas
                and High Atlas areas and helps break up the long journey toward the
                Sahara.

                <br />
                <br />

                Later in the day, you reach{" "}
                <PlaceHoverCard place="tinghir">
                Tinghir
                </PlaceHoverCard>
                , an oasis town surrounded by palm groves, rocky mountains and traditional
                settlements. From Tinghir, the route continues to{" "}
                <PlaceHoverCard place="todra-gorge">
                Todra Gorge
                </PlaceHoverCard>
                , one of the most impressive natural stops on this{" "}
                <strong>3 days Fes to Merzouga desert tour</strong>. The gorge is known
                for its high limestone walls and narrow passage, where travelers can take
                a short walk beside the river and enjoy a break from the vehicle before
                spending the night in the area.

                <br />
                <br />

                On the second day, the journey continues deeper into southeastern Morocco
                toward{" "}
                <PlaceHoverCard place="erfoud">
                Erfoud
                </PlaceHoverCard>
                . Erfoud is known as an important gateway to the Sahara and is especially
                famous for the fossils found throughout the surrounding region. From
                Erfoud, continue toward{" "}
                <PlaceHoverCard place="rissani">
                Rissani
                </PlaceHoverCard>
                , a historic market town in the Tafilalet region with an important
                connection to old desert trade routes and the history of southeastern
                Morocco.

                <br />
                <br />

                In the afternoon, you finally arrive in{" "}
                <PlaceHoverCard place="merzouga">
                Merzouga
                </PlaceHoverCard>
                , the small Sahara village located beside the famous{" "}
                <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi dunes
                </PlaceHoverCard>
                . This is where the road journey changes into a real Sahara experience.
                The large golden dunes rise beside the village and create one of Morocco&apos;s
                most famous desert landscapes.

                <br />
                <br />

                In Merzouga, meet your camel guide and begin a camel trek into{" "}
                <PlaceHoverCard place="erg-chebbi">
                Erg Chebbi
                </PlaceHoverCard>
                . The ride usually takes place in the late afternoon, allowing you to
                watch the changing colors of the sand as the sun moves toward the horizon.
                After sunset, continue to your desert camp, where you can enjoy dinner,
                local music and the peaceful atmosphere of the Sahara under a wide night
                sky.

                <br />
                <br />

                The following morning, wake early to watch sunrise over the dunes before
                beginning the return journey toward{" "}
                <PlaceHoverCard place="fes">
                Fes
                </PlaceHoverCard>
                . The road takes you back through southeastern Morocco, the Ziz region,{" "}
                <PlaceHoverCard place="midelt">
                Midelt
                </PlaceHoverCard>{" "}
                and the Middle Atlas Mountains, completing a route that combines imperial
                city culture, forests, mountains, oasis landscapes, dramatic gorges and
                the Sahara Desert in only three days.
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
                    This short route shows where you travel each day on the
                    Fes to Merzouga desert tour. It helps answer two important
                    planning questions: how many days the tour takes and which
                    destinations are included before reaching the Sahara.
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
                  description="Pack for several different environments on your 3 days Fes to Merzouga desert tour. The route begins in Fes, crosses the cooler Middle Atlas, continues through Todra Gorge and finishes in the Sahara near Merzouga. Daytime conditions can be warm and sunny while mountain mornings and desert nights can be much cooler. Comfortable walking shoes are useful for Ifrane, Todra Gorge and sightseeing stops, while sun protection is important around Merzouga and Erg Chebbi. Keep a small overnight bag ready for the desert camp and bring any essential medication you may need."
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
                  Follow the route from Fes through the Middle Atlas to Todra
                  Gorge, then continue through Erfoud and Rissani to Merzouga
                  and Erg Chebbi before returning north to Fes.
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
                  Ready for Your Fes to Merzouga Desert Tour?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Travel from Fes through Ifrane and the Middle Atlas, walk
                  through Todra Gorge, continue through Erfoud and Rissani,
                  then experience camel trekking, sunset and an overnight
                  desert camp beside the Erg Chebbi dunes in Merzouga.
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
                  3 Days · 2 Nights · Fes to Merzouga · Erg Chebbi Sahara Experience
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

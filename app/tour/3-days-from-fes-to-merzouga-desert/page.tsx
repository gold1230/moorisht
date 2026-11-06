import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Temporary image so this page compiles with an existing asset.
// Replace later with your dedicated Fes → Erfoud → Merzouga image.
import FesToMerzougaViaErfoud3Day from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";

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
  image: FesToMerzougaViaErfoud3Day,
  imagetitle: "3 Days from Fes to Merzouga Desert via Erfoud",
  imageurl:
    "https://moorishtour.com/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon: "Sahara Route",
  type: "Desert Tour",

  url:
    "https://moorishtour.com/tour/3-days-from-fes-to-merzouga-desert/",

  title: "3 Days from Fes to Merzouga Desert via Erfoud",

  description:
    "Travel from Fes to Merzouga on a 3-day desert tour via Ifrane, Midelt, Ziz Valley and Erfoud. Enjoy Erg Chebbi camel trekking, Sahara sunset and a desert camp.",

  overeview:
    "A 3-day Fes to Merzouga desert tour with an overnight stop in Erfoud, scenic Middle Atlas and Ziz Valley views, then camel trekking and a Sahara camp in Erg Chebbi.",

  duration: "3 Days / 2 Nights",
  route: "Fes → Erfoud → Merzouga → Fes",

  reviews: "10",
  reviewsRate: "5",
  price : 200,
  maxPeople: "Private / Small Group",
  accommodation: "Hotel / Desert Camp",
  activities: "Sightseeing, Camel Trekking & Sahara Camp",
};

/* -------------------------------------------------------------------------- */
/*                                  METADATA                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "3 Days Fes to Merzouga Desert via Erfoud | Sahara Tour",

  description:
    "Book a 3-day Fes to Merzouga desert tour via Erfoud, Midelt and Ziz Valley. Ride camels in Erg Chebbi, watch sunset and sleep in a Sahara camp.",

  keywords: [
    "3 days Fes to Merzouga desert via Erfoud",
    "3 days Fes to Merzouga desert tour",
    "3 day Fes to Merzouga tour",
    "Fes to Merzouga via Erfoud",
    "Fes to Erfoud tour",
    "Fes to Merzouga desert tour",
    "Fes Sahara desert tour",
    "Fes to Sahara desert",
    "Fes to Erg Chebbi",
    "Fes desert tour 3 days",
    "Morocco desert tour from Fes",
    "Fes Midelt Erfoud Merzouga tour",
    "Fes Ziz Valley Merzouga tour",
    "Erfoud to Merzouga desert",
    "Erfoud Sahara tour",
    "Merzouga camel trekking",
    "Erg Chebbi camel trek",
    "Merzouga desert camp",
    "Sahara desert camp Morocco",
    "3 days from Fes to Sahara",
    "Fes to Merzouga itinerary",
    "short Morocco Sahara tour from Fes",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "3 Days Fes to Merzouga Desert via Erfoud",
    description:
      "Cross the Middle Atlas and Ziz Valley from Fes to Erfoud, then continue to Merzouga for camel trekking, Sahara sunset and a night in Erg Chebbi.",
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
    title: "Middle Atlas",
    subtitle: "Ifrane, forests & mountain roads",
  },
  {
    icon: MapIcon,
    title: "Erfoud",
    subtitle: "Fossils & desert gateway",
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
/*                                ITINERARY                                   */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Fes – Ifrane – Midelt – Ziz Valley – Erfoud",

    description:
      "Your 3-day Fes to Merzouga desert tour via Erfoud begins with an early pickup from your hotel or riad in Fes. Leave the historic city and travel south through the Middle Atlas Mountains, where the landscape quickly changes from urban streets to forests, hills and mountain towns. Stop in Ifrane for a short walk and fresh mountain air before continuing through the cedar forest region around Azrou. The road then leads toward Midelt, a convenient place for lunch and a break between the Middle Atlas and southeastern Morocco. After lunch, continue through increasingly dry landscapes toward the Ziz Valley. From panoramic viewpoints, you can see long palm groves and oasis settlements stretching through the valley. By late afternoon or evening, arrive in Erfoud, a desert gateway town known for fossils, dates and its location near the Tafilalet region. Check into your hotel, enjoy dinner and rest before continuing to Merzouga the following day.",

    details: [
      "Pickup from your hotel or riad in Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Azrou cedar forest region",
      "Lunch stop in Midelt",
      "Ziz Valley viewpoints",
      "Palm-grove scenery",
      "Arrival in Erfoud",
      "Hotel or guesthouse",
      "Dinner & breakfast",
    ],
  },

  {
    title:
      "Day 2: Erfoud – Rissani – Merzouga – Erg Chebbi Desert Camp",

    description:
      "After breakfast in Erfoud, spend some time discovering the desert gateway region before continuing toward Merzouga. Erfoud is well known for the fossils found in the surrounding area, and a short stop can be made to see local fossil products and learn more about the geology of southeastern Morocco. Continue toward Rissani, an old market town with strong links to the Tafilalet oasis and historic desert trade. From Rissani, the landscape becomes more open as you approach Merzouga and the golden Erg Chebbi dunes. In the afternoon, meet your camel guide and begin a peaceful camel trek across the Sahara. The ride gives you time to enjoy the silence, wide views and changing colors of the dunes as sunset approaches. After watching the sun drop behind the sand, continue to your desert camp. Settle into your tent, enjoy dinner and spend the evening with local music around the camp before sleeping in the quiet Sahara.",

    details: [
      "Breakfast in Erfoud",
      "Erfoud fossil region",
      "Rissani",
      "Tafilalet desert landscapes",
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
      "Day 3: Merzouga – Ziz Valley – Midelt – Ifrane – Fes",

    description:
      "Wake up early on the final morning to watch sunrise over the Erg Chebbi dunes. The first light creates soft colors across the sand and is one of the most peaceful moments of the tour. After breakfast at the camp, return toward Merzouga by camel or 4x4 transfer and meet your driver. Begin the long journey back to Fes, traveling north through the Ziz Valley and the changing landscapes of eastern Morocco. Pass through the Midelt region and cross the Middle Atlas Mountains again, with stops for lunch, rest and photos depending on timing and road conditions. Continue through the Ifrane area before arriving back in Fes in the late afternoon or evening. Your 3-day Fes to Merzouga desert tour via Erfoud ends with drop-off at your hotel or riad.",

    details: [
      "Sahara sunrise",
      "Breakfast at desert camp",
      "Camel ride or 4x4 transfer",
      "Departure from Merzouga",
      "Ziz Valley",
      "Midelt",
      "Middle Atlas Mountains",
      "Ifrane area",
      "Rest and lunch stops",
      "Drop-off in Fes",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Pickup from your hotel or riad in Fes",
    "Drop-off in Fes at the end of the tour",
    "Comfortable air-conditioned vehicle",
    "English-speaking driver",
    "1 night in a hotel or guesthouse in Erfoud",
    "1 night in a desert camp near Merzouga",
    "2 breakfasts and 2 dinners",
    "Camel trek in the Erg Chebbi dunes",
    "4x4 transfer to or from the desert camp when arranged",
  ],

  notIncluded: [
    "Lunches",
    "Drinks",
    "Entrance fees when required",
    "Local guides unless specifically listed",
    "Tips for driver, guides and camp staff",
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
    id: "fes",
    name: "Fes",
    lat: 34.0331,
    lng: -5.0003,
    day: 1,
    description:
      "Start your three-day Sahara journey from your hotel or riad in Fes.",
  },
  {
    id: "ifrane",
    name: "Ifrane",
    lat: 33.5228,
    lng: -5.1109,
    day: 1,
    description:
      "Short Middle Atlas stop known for mountain scenery and cooler air.",
  },
  {
    id: "midelt",
    name: "Midelt",
    lat: 32.6806,
    lng: -4.7369,
    day: 1,
    description:
      "Lunch and rest stop between the Middle Atlas and southeastern Morocco.",
  },
  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.86,
    lng: -4.35,
    day: 1,
    description:
      "Scenic oasis valley with palm groves and panoramic viewpoints.",
  },
  {
    id: "erfoud",
    name: "Erfoud",
    lat: 31.4353,
    lng: -4.2326,
    day: 1,
    description:
      "First overnight stop and desert gateway town known for fossils and date palms.",
  },
  {
    id: "rissani",
    name: "Rissani",
    lat: 31.282,
    lng: -4.265,
    day: 2,
    description:
      "Historic market town in the Tafilalet region on the way to Merzouga.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 2,
    description:
      "Sahara village beside Erg Chebbi and starting point for the camel trek.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi",
    lat: 31.1477,
    lng: -3.9786,
    day: 2,
    description:
      "Golden dune field for camel trekking, Sahara sunset, sunrise and desert camping.",
  },
  {
    id: "sahara-desert-camp",
    name: "Sahara Desert Camp",
    lat: 31.153,
    lng: -3.968,
    day: 2,
    description:
      "Spend the second night in a desert camp near the Erg Chebbi dunes.",
  },
  {
    id: "fes-return",
    name: "Fes",
    lat: 34.0331,
    lng: -5.0003,
    day: 3,
    description:
      "Return to Fes after the Sahara experience and finish the three-day tour.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 3 Days Fes to Merzouga Desert Tour via Erfoud",

      description:
        "Plan your 3-day Fes to Merzouga desert tour via Erfoud with answers about Ifrane, Midelt, Ziz Valley, Erfoud fossils, Rissani, Merzouga, camel trekking, Erg Chebbi, the Sahara desert camp, accommodation, meals, driving time and the return journey to Fes.",
    },
  ],

  faqs: [
    {
      question:
        "What is the route for the 3-day Fes to Merzouga desert tour via Erfoud?",

      answer:
        "Day one travels from Fes through Ifrane, Midelt and the Ziz Valley to Erfoud. Day two continues through Rissani to Merzouga and Erg Chebbi for camel trekking and a desert-camp night. Day three returns to Fes through the Ziz Valley, Midelt and the Middle Atlas.",
    },
    {
      question:
        "Why does this itinerary spend the first night in Erfoud?",

      answer:
        "Staying in Erfoud breaks the long journey from Fes to the Sahara into a more manageable first day. It also gives travelers time to see the Ziz Valley and learn about Erfoud's fossil heritage before continuing to Merzouga on day two.",
    },
    {
      question:
        "Is Erfoud close to Merzouga?",

      answer:
        "Erfoud is one of the main gateway towns to the Merzouga area. The second day's drive from Erfoud to Merzouga is much shorter than the full journey from Fes, allowing more time for Rissani and the Sahara experience.",
    },
    {
      question:
        "Does the tour stop in Ifrane?",

      answer:
        "Yes. Ifrane is normally included as a short stop on day one as the route crosses the Middle Atlas Mountains south of Fes.",
    },
    {
      question:
        "Does the tour visit Ziz Valley?",

      answer:
        "Yes. Ziz Valley is a major scenic stop on day one. The road offers panoramic views of palm groves and oasis landscapes before reaching Erfoud.",
    },
    {
      question:
        "Can we see fossils in Erfoud?",

      answer:
        "Yes. Erfoud is widely associated with fossils from the surrounding region, and short visits to local fossil workshops or displays can be arranged depending on timing and your interests.",
    },
    {
      question:
        "Does the tour stop in Rissani?",

      answer:
        "Yes. Rissani is normally included on day two between Erfoud and Merzouga. It is an important market town in the Tafilalet region with a long connection to local and desert trade.",
    },
    {
      question:
        "Is camel trekking included in Merzouga?",

      answer:
        "Yes. The standard itinerary includes a camel trek across the Erg Chebbi dunes, normally in the late afternoon so you can experience the Sahara around sunset before reaching the camp.",
    },
    {
      question:
        "Can I reach the desert camp without riding a camel?",

      answer:
        "Yes. A 4x4 transfer can usually be arranged for travelers who prefer not to ride a camel or who have mobility concerns.",
    },
    {
      question:
        "What is included at the Merzouga desert camp?",

      answer:
        "The standard camp experience includes your tent, dinner, breakfast and the transfer or camel-trekking experience described in the itinerary. Exact tent facilities depend on the camp category booked.",
    },
    {
      question:
        "Can we watch both sunset and sunrise in Erg Chebbi?",

      answer:
        "Yes, weather permitting. Sunset is normally enjoyed during the camel trek on day two, and travelers can wake early on day three for sunrise over the dunes.",
    },
    {
      question:
        "How much driving is involved?",

      answer:
        "Day one and day three include long road sections between Fes and southeastern Morocco. The overnight in Erfoud helps divide the outbound journey, while day two is significantly shorter and gives you more time around the Sahara.",
    },
    {
      question:
        "Are breakfasts and dinners included?",

      answer:
        "Yes. This itinerary includes two breakfasts and two dinners according to the confirmed accommodation package. Lunches and drinks are normally separate.",
    },
    {
      question:
        "Is the Sahara cold at night?",

      answer:
        "It can become cold after sunset, particularly in winter. Bring a warm layer or jacket even if the daytime temperature in Merzouga is comfortable.",
    },
    {
      question:
        "What should I pack for the tour?",

      answer:
        "Bring comfortable walking shoes, light clothing, sun protection, sunglasses, a hat, a reusable water bottle, a warm layer, personal medication, a small overnight bag and a power bank.",
    },
    {
      question:
        "Is this tour suitable for families?",

      answer:
        "Families can take the tour, but parents should consider the long driving sections on days one and three. A private tour gives families more flexibility for breaks and timing.",
    },
    {
      question:
        "Can the Fes to Merzouga via Erfoud itinerary be customized?",

      answer:
        "Yes. Private tours can often be adjusted for accommodation category, camp level, stops, final destination and travel pace. You can also extend the trip if you prefer less driving each day.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the 3 Days Fes to Merzouga Desert Tour via Erfoud",

  highlights: [
    "Leave Fes and travel through the Middle Atlas Mountains.",
    "Stop in Ifrane for mountain scenery and fresh air.",
    "Travel through the cedar region near Azrou.",
    "Stop around Midelt for lunch.",
    "Enjoy panoramic views over the Ziz Valley.",
    "See palm groves and oasis landscapes.",
    "Spend the first night in Erfoud.",
    "Discover Erfoud's connection with fossils and desert geology.",
    "Pass through the historic market town of Rissani.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Ride camels across the Sahara around sunset.",
    "Watch the changing colors of the golden dunes.",
    "Spend one night in a Merzouga desert camp.",
    "Enjoy dinner and local music at the camp.",
    "Wake early for sunrise over Erg Chebbi.",
    "Return north through the Ziz Valley and Midelt.",
    "Cross the Middle Atlas again before reaching Fes.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route:
      "Fes → Ifrane → Midelt → Ziz Valley → Erfoud",
    target: "day-1",
  },
  {
    day: "Day 2",
    route:
      "Erfoud → Rissani → Merzouga → Erg Chebbi Desert Camp",
    target: "day-2",
  },
  {
    day: "Day 3",
    route:
      "Merzouga → Ziz Valley → Midelt → Ifrane → Fes",
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

        "Our 3-day Fes to Merzouga desert tour via Erfoud was a wonderful way to experience the changing landscapes of Morocco. We enjoyed the drive through Ifrane and Midelt, and the views over the Ziz Valley were beautiful. Spending the first night in Erfoud made the journey comfortable, and the camel trek across the Erg Chebbi dunes at sunset was unforgettable. The desert camp was peaceful, the dinner was good, and waking up for sunrise over the Sahara was one of our favorite moments in Morocco.",

    },

  {

    id: 2,

    name: "James Anderson",

    avatar: "/images/toursits-comes-to-morocco.jpeg",

    flag: "🇬🇧",

    rating: 5,

    date: "1 month ago",

    review:

      "A fantastic desert tour from Fes from beginning to end. The route through the Middle Atlas, Midelt and the Ziz Valley was very scenic, and we really liked stopping in Erfoud before continuing to Rissani and Merzouga. Our driver made the long journey easy with regular stops. Riding camels into Erg Chebbi while the sun was setting was the highlight, followed by a relaxing evening with music at the Sahara desert camp.",

  },

  {

    id: 3,

    name: "Sophie Martin",

    avatar: "/images/toursits-comes-to-morocco.jpeg",

    flag: "🇨🇦",

    rating: 5,

    date: "1 month ago",

    review:

      "We highly recommend this 3-day Fes to Merzouga tour via Erfoud. It was a great mix of mountain scenery, oasis landscapes and the Sahara Desert. We loved seeing the palm groves of the Ziz Valley, learning about the fossil region around Erfoud and visiting Rissani before reaching Merzouga. The camel ride, sunset over the dunes and overnight stay in the desert camp made the trip very special.",

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

      "This was an excellent short Sahara tour from Fes. The first day to Erfoud was long but full of interesting scenery, especially around Ifrane, Midelt and the Ziz Valley. The second day was more relaxed and gave us time to enjoy Erfoud, Rissani and Merzouga before the camel trek. Watching the sunset and sunrise over Erg Chebbi and spending the night in the desert camp were experiences we will always remember.",

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
        "A 3-day Fes to Merzouga desert tour via Ifrane, Midelt, Ziz Valley and Erfoud, followed by Rissani, camel trekking in Erg Chebbi, a Sahara desert camp and return to Fes.",

      provider: {
        "@id": "https://moorishtour.com/#organization",
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
        name:
          "3 Days Fes to Merzouga Desert Tour via Erfoud Itinerary",
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
          name: "Starting City",
          value: "Fes",
        },
        {
          "@type": "PropertyValue",
          name: "First Overnight",
          value: "Erfoud",
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
                    Fes to Sahara via Erfoud
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    What Is the 3 Days Fes to Merzouga Desert Tour via Erfoud?
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
                      3 days Fes to Merzouga desert tour via Erfoud
                    </strong>{" "}
                    is a short Sahara itinerary that divides the journey from
                    Fes with an overnight stop in Erfoud. This gives you time
                    to cross the Middle Atlas, enjoy Ziz Valley scenery and
                    arrive in southeastern Morocco without trying to combine
                    the entire Fes-to-Merzouga road and the desert experience
                    in one day.
                  </p>

                  <p>
                    The second day is shorter and more focused on the desert.
                    You can discover Erfoud and Rissani before reaching
                    Merzouga, where camel trekking, sunset in Erg Chebbi and
                    an overnight Sahara camp become the main experiences of
                    the tour.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Your journey starts in{" "}
                    <PlaceHoverCard place="fes">
                      Fes
                    </PlaceHoverCard>{" "}
                    and travels south through{" "}
                    <PlaceHoverCard place="ifrane">
                      Ifrane
                    </PlaceHoverCard>{" "}
                    and the mountain landscapes of the Middle Atlas. The route
                    continues toward{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>
                    , a useful lunch and rest stop before the scenery becomes
                    drier and more open.

                    <br />
                    <br />

                    After Midelt, continue toward the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>
                    . From panoramic viewpoints, long palm groves run through
                    the dry valley floor and show the contrast between the
                    oasis and surrounding rocky landscapes. By late afternoon
                    or evening, arrive in{" "}
                    <PlaceHoverCard place="erfoud">
                      Erfoud
                    </PlaceHoverCard>
                    , where you spend the first night.

                    <br />
                    <br />

                    On day two, leave{" "}
                    <PlaceHoverCard place="erfoud">
                      Erfoud
                    </PlaceHoverCard>{" "}
                    and continue through{" "}
                    <PlaceHoverCard place="rissani">
                      Rissani
                    </PlaceHoverCard>{" "}
                    toward{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    . Erfoud is known for the fossil heritage of the
                    surrounding region, while Rissani adds an important
                    historic market and oasis stop before the dunes.

                    <br />
                    <br />

                    In{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    , meet your camel guide and ride into{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    . The golden dunes become warmer in color as sunset
                    approaches, creating one of the most memorable moments of
                    this short Morocco desert tour. Spend the night at a
                    Sahara camp with dinner, local music and the peaceful
                    atmosphere of the dunes.

                    <br />
                    <br />

                    On the final morning, watch sunrise over{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>{" "}
                    before beginning the return journey. Travel again through
                    the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>
                    ,{" "}
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
                    </PlaceHoverCard>
                    .
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
                    3 Days Fes to Merzouga via Erfoud Tour Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    This itinerary spends the first night in Erfoud, continues
                    to Merzouga and Erg Chebbi on day two, then returns to Fes
                    through the Ziz Valley and Middle Atlas on day three.
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
                    How Much Does the 3-Day Fes to Merzouga via Erfoud Tour Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The final price depends on your travel date, group size,
                    private or shared option, hotel category in Erfoud and
                    desert-camp level in Merzouga. Request the current rate
                    for your dates and preferred accommodation.
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
                  description="Pack for different conditions on this 3-day Fes to Merzouga desert tour via Erfoud. You will cross the cooler Middle Atlas, travel through the dry Ziz Valley and spend a night beside the Erg Chebbi dunes. Comfortable shoes are useful for sightseeing stops, while sunscreen, sunglasses and a hat help in the Sahara. Desert nights and mountain mornings can be cool, especially in winter, so bring a warm layer and keep a small overnight bag ready for the camp."
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

              {/* ---------------------------------------------------------- */}
              {/* MAP                                                        */}
              {/* ---------------------------------------------------------- */}

              <section
                className="scroll-mt-42 py-10"
                id="map"
              >
                <h2 className="mb-3 text-2xl font-bold text-slate-900">
                  Map of the 3 Days Fes to Merzouga Desert Tour via Erfoud
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the route from Fes through Ifrane, Midelt and Ziz
                  Valley to Erfoud, continue through Rissani to Merzouga and
                  Erg Chebbi, then return north to Fes.
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
                  Fes → Erfoud → Merzouga
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your Fes to Merzouga Desert Tour via Erfoud?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Cross the Middle Atlas and Ziz Valley, spend a night in
                  Erfoud, then continue through Rissani to Merzouga for camel
                  trekking, Sahara sunset and an overnight camp in Erg Chebbi.
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
                  3 Days · 2 Nights · Fes · Erfoud · Rissani · Merzouga · Erg Chebbi
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

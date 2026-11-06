import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Replace with a dedicated Errachidia → Merzouga → Dades tour image when available.
import Errachidia6DayImage from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";

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
  image: Errachidia6DayImage,
  imagetitle: "6 Days From Errachidia Morocco Tour",
  imageurl:
    "https://moorishtour.com/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon: "Sahara & Southern Morocco",
  type: "Private Morocco Desert Tour",

  url:
    "https://moorishtour.com/tour/6-days-from-errachidia-morocco-tour/",

  title: "6 Days From Errachidia Morocco Tour",

  description:
    "Explore southern Morocco in 6 days from Errachidia through Ziz Valley, Merzouga, Khamlia, Rissani, Todra Gorge, Dades Valley and Ait Atta villages.",

  overeview:
    "A 6-day Morocco tour from Errachidia combining the Ziz Valley, Merzouga Sahara, Khamlia, desert communities, Rissani, Todra Gorge, Dades Valley and Ait Atta villages before returning to Errachidia.",

  duration: "6 Days / 5 Nights",

  route:
    "Errachidia → Ziz Valley → Merzouga → Khamlia → Rissani → Todra Gorge → Dades Valley → Ait Atta Villages → Ziz Valley → Errachidia",

  reviews: "4",
  reviewsRate: "5",
  price: 120,
  maxPeople: "Private Tour",
  accommodation: "Hotels / Guesthouses / Desert Camp",
  activities: "Culture, Desert, Camel Trekking & Nature",
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "6 Days Errachidia Morocco Tour | Merzouga, Todra & Dades",

  description:
    "Take a 6-day Morocco tour from Errachidia through Ziz Valley, Merzouga, Khamlia, Rissani, Todra Gorge, Dades Valley and Ait Atta villages.",

  keywords: [
    "6 days from Errachidia Morocco tour",
    "6 day Errachidia Morocco tour",
    "Errachidia desert tour",
    "Errachidia to Merzouga tour",
    "Errachidia to Sahara Desert",
    "Morocco tour from Errachidia",
    "Errachidia Merzouga itinerary",
    "6 days Morocco desert tour",
    "Errachidia Ziz Valley Merzouga tour",
    "Ziz Valley Morocco tour",
    "Merzouga desert excursion",
    "Merzouga Sahara tour",
    "Merzouga camel trekking",
    "Merzouga desert camp",
    "Khamlia village tour",
    "Gnawa music Khamlia",
    "Merzouga nomad visit",
    "Rissani market tour",
    "Rissani to Todra Gorge",
    "Todra Gorge Morocco tour",
    "Todra Gorge Dades Valley",
    "Dades Valley Morocco tour",
    "Dades panorama route",
    "Ait Atta villages Morocco",
    "southern Morocco road trip",
    "Morocco Sahara and valleys tour",
    "Errachidia private tour",
    "Errachidia round trip Morocco",
    "best tour from Errachidia",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "6 Days Errachidia Morocco Tour | Sahara, Todra & Dades",
    description:
      "Travel from Errachidia through Ziz Valley to Merzouga, explore Khamlia and the Sahara, then continue to Rissani, Todra Gorge and Dades Valley.",
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
    icon: MapIcon,
    title: "Ziz Valley",
    subtitle: "Palm groves & oasis scenery",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle: "Desert excursion & camel trek",
  },
  {
    icon: BuildingLibraryIcon,
    title: "Rissani",
    subtitle: "Traditional market & history",
  },
  {
    icon: HomeModernIcon,
    title: "Dades Valley",
    subtitle: "Kasbahs, villages & panoramas",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ITINERARY                                  */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Errachidia – Ziz Valley – Merzouga",

    description:
      "Your 6-day Errachidia Morocco tour begins with pickup from Errachidia Airport, your hotel or an agreed meeting point. Leave the city and travel south through the Ziz region, one of southeastern Morocco's most distinctive oasis landscapes. Stop at panoramic viewpoints overlooking the long palm groves of the Ziz Valley, where green date palms contrast with dry mountains and rocky desert terrain. Continue toward Erfoud and the Tafilalet region before reaching Merzouga, the desert village beside the golden Erg Chebbi dunes. Depending on your arrival time, settle into your hotel or desert-side accommodation and enjoy a relaxed first evening near the Sahara. This first day is designed as a smooth introduction to the region, combining arrival, oasis scenery and the first view of the dunes.",

    details: [
      "Pickup in Errachidia",
      "Ziz Valley",
      "Panoramic viewpoints",
      "Palm groves",
      "Tafilalet region",
      "Arrival in Merzouga",
      "First views of Erg Chebbi",
      "Hotel or guesthouse",
      "Dinner & breakfast",
    ],
  },

  {
    title:
      "Day 2: Merzouga Desert Excursion – Khamlia – Nomad Area – Camel Trek – Desert Camp",

    description:
      "After breakfast, spend a full day exploring the Merzouga desert region rather than seeing only the dunes. Travel around Erg Chebbi by 4x4 and discover the changing scenery between golden dunes, black desert, small settlements and open Sahara landscapes. Visit Khamlia, a village known for its connection with Gnawa musical traditions, and enjoy time learning about the local cultural heritage. Depending on the confirmed route and local conditions, the excursion can continue into desert areas where nomadic or semi-nomadic families live. Any such visit should be respectful and based on genuine local arrangements rather than treated as a staged attraction. Later in the afternoon, return to the edge of Erg Chebbi and meet your camel guide. Ride across the dunes around sunset, then continue to the Sahara camp for dinner, local music and an overnight stay under the desert sky.",

    details: [
      "Merzouga desert excursion",
      "4x4 exploration",
      "Erg Chebbi region",
      "Khamlia village",
      "Gnawa music experience",
      "Desert landscapes",
      "Respectful local desert encounter when arranged",
      "Camel trekking",
      "Sahara sunset",
      "Desert camp",
      "Dinner & breakfast",
      "Local music",
    ],
  },

  {
    title:
      "Day 3: Merzouga – Rissani Market – Tinghir – Todra Gorge",

    description:
      "Wake early for sunrise over the Erg Chebbi dunes before breakfast at the desert camp. Return toward Merzouga by camel or 4x4 transfer and meet your driver. Continue to Rissani, an important historic town in the Tafilalet region. When the traditional market is operating, enjoy time to experience its local atmosphere, produce stalls, spices and regional trade. After Rissani, travel west across dry plateaus and oasis landscapes toward Tinghir. The palm-filled oasis of Tinghir marks the entrance to Todra Gorge, where high limestone walls rise dramatically on both sides of the canyon. Take a short walk through the gorge, enjoy the cooler air and mountain scenery, then check into your hotel or guesthouse in the Todra area for dinner and overnight.",

    details: [
      "Sahara sunrise",
      "Breakfast at desert camp",
      "Return to Merzouga",
      "Rissani",
      "Traditional market when operating",
      "Tafilalet region",
      "Tinghir oasis",
      "Todra Gorge",
      "Canyon walk",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 4: Todra Gorge – Tinghir – Dades Valley",

    description:
      "After breakfast, enjoy another look at the Todra region before continuing through Tinghir toward the Dades Valley. The journey is shorter than the previous driving days, allowing more time for stops and scenery. Pass traditional villages, palm groves, kasbahs and rocky mountain landscapes as the road enters the Dades region. The valley is known for unusual geological formations, winding roads, old mud-brick architecture and panoramic viewpoints. Depending on timing, stop at viewpoints over the valley and take short walks near villages or rock formations. Arrive at your accommodation in the Dades Valley with time to relax before dinner and overnight.",

    details: [
      "Breakfast near Todra Gorge",
      "Tinghir",
      "Oasis scenery",
      "Traditional villages",
      "Drive to Dades Valley",
      "Kasbah landscapes",
      "Rock formations",
      "Panoramic viewpoints",
      "Dinner & overnight in Dades",
    ],
  },

  {
    title:
      "Day 5: Dades Valley – Panorama Route – Ait Atta Villages",

    description:
      "Spend the day exploring more deeply around the Dades region instead of immediately returning east. Follow scenic roads and panoramic routes through valleys, mountain foothills and traditional communities. The area is connected with Ait Atta Amazigh heritage, and the day can include stops in villages where daily life, agriculture and local architecture are still closely linked to the landscape. The exact route may change with road conditions, season and the final tour plan, but the focus is on rural scenery, quiet roads and a more local side of southern Morocco. Enjoy panoramic viewpoints over the valley, short walks and time for photography before returning to the Dades region for another overnight stay.",

    details: [
      "Dades panorama route",
      "Mountain and valley scenery",
      "Traditional rural roads",
      "Ait Atta villages",
      "Amazigh cultural landscapes",
      "Local architecture",
      "Short walks",
      "Photography stops",
      "Second overnight in Dades region",
    ],
  },

  {
    title:
      "Day 6: Dades Valley – Tinghir – Ziz Valley – Errachidia",

    description:
      "After breakfast, begin the return journey toward Errachidia. Travel back through the southeastern landscapes, passing the Tinghir region and continuing east across plateaus, small towns and oasis areas. The road gradually reconnects with the Ziz Valley, giving you another opportunity to enjoy its palm groves and dramatic dry scenery from a different direction. Stop for lunch, coffee or photos depending on timing before continuing to Errachidia. Arrive in the afternoon or evening for drop-off at your hotel, Errachidia Airport or another agreed location. Your 6-day Errachidia Morocco tour ends after a route that combines oasis scenery, the Merzouga Sahara, Khamlia, Rissani, Todra Gorge, Dades Valley and the rural landscapes of the Ait Atta region.",

    details: [
      "Breakfast in Dades",
      "Return through southeastern Morocco",
      "Tinghir region",
      "Ziz Valley",
      "Palm-grove scenery",
      "Rest and photo stops",
      "Arrival in Errachidia",
      "Airport or hotel drop-off",
      "End of tour",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  REVIEWS                                   */
/* -------------------------------------------------------------------------- */

/*
  Named sample review drafts for layout/content testing.
  Replace these sample identities and testimonials with genuine customer
  feedback before presenting them publicly as real reviews.
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
      name: "Olivia Miller",
      avatar:
        "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",
      flag: "🇺🇸",
      rating: 5,
      date: "2 weeks ago",
      review:
        "This sample review is written for the 6-day Errachidia route. The Ziz Valley was beautiful on the first day, and reaching Merzouga so quickly gave us plenty of time to enjoy the Sahara. The full desert excursion, Khamlia, the camel trek and the night in the camp were highlights. We also really enjoyed Rissani, Todra Gorge and the slower days around Dades Valley.",
    },
    {
      id: 2,
      name: "James Anderson",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇬🇧",
      rating: 5,
      date: "1 month ago",
      review:
        "This sample testimonial reflects the mix of desert and valley scenery on the tour. We liked that the itinerary did not rush through Merzouga and that there was time for Khamlia and a wider desert excursion. Rissani market added local atmosphere, while Todra Gorge and the Dades panorama route showed a completely different side of southern Morocco.",
    },
    {
      id: 3,
      name: "Sophie Martin",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇨🇦",
      rating: 5,
      date: "1 month ago",
      review:
        "This sample review is tailored to the exact Errachidia round-trip itinerary. The camel trek at sunset, sunrise over Erg Chebbi and the desert camp were unforgettable, but the journey became even more interesting after Merzouga. The drive through Tinghir, Todra Gorge and Dades Valley was scenic, and visiting rural Ait Atta areas gave the trip a more local feeling.",
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
        "This sample testimonial focuses on the variety of the six days: Ziz Valley, Merzouga, Khamlia, desert landscapes, Rissani, Todra Gorge and Dades Valley. We especially liked having a full day for the Dades panorama route and Ait Atta villages instead of only driving through. Returning to Errachidia through the Ziz Valley made the itinerary feel like a complete loop.",
    },
  ],

};

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Pickup in Errachidia from airport, hotel or agreed meeting point",
    "Drop-off in Errachidia at the end of the tour",
    "Private air-conditioned vehicle during the itinerary",
    "English-speaking driver",
    "5 nights accommodation according to selected package",
    "Breakfasts according to the accommodation plan",
    "Dinners in selected desert and valley accommodations",
    "Merzouga desert excursion by 4x4",
    "Khamlia visit",
    "Camel trek in the Erg Chebbi dunes",
    "Overnight Sahara desert camp",
    "4x4 transfer to or from the desert camp when arranged",
  ],

  notIncluded: [
    "Flights",
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
    id: "errachidia",
    name: "Errachidia",
    lat: 31.9314,
    lng: -4.4241,
    day: 1,
    description:
      "Starting and ending city for the six-day Morocco desert and valley tour.",
  },
  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.86,
    lng: -4.35,
    day: 1,
    description:
      "Palm-filled oasis valley and major scenic stop between Errachidia and Merzouga.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 1,
    description:
      "Sahara village beside the Erg Chebbi dunes.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi",
    lat: 31.1477,
    lng: -3.9786,
    day: 2,
    description:
      "Golden Sahara dune field for camel trekking, sunset and desert camping.",
  },
  {
    id: "khamlia",
    name: "Khamlia",
    lat: 31.037,
    lng: -4.006,
    day: 2,
    description:
      "Village near Merzouga known for Gnawa musical traditions.",
  },
  {
    id: "rissani",
    name: "Rissani",
    lat: 31.282,
    lng: -4.265,
    day: 3,
    description:
      "Historic market town in the Tafilalet region.",
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
      "Dramatic limestone canyon and overnight region.",
  },
  {
    id: "dades-valley",
    name: "Dades Valley",
    lat: 31.471,
    lng: -5.974,
    day: 4,
    description:
      "Scenic valley known for kasbahs, rock formations and mountain roads.",
  },
  {
    id: "ait-atta-villages",
    name: "Ait Atta Villages",
    lat: 31.35,
    lng: -5.95,
    day: 5,
    description:
      "Rural Amazigh communities and cultural landscapes explored from the Dades region.",
  },
  {
    id: "errachidia-return",
    name: "Errachidia",
    lat: 31.9314,
    lng: -4.4241,
    day: 6,
    description:
      "Final return and drop-off point for the six-day itinerary.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 6 Days From Errachidia Morocco Tour",

      description:
        "Plan your 6-day Morocco tour from Errachidia with answers about the Ziz Valley, Merzouga, Khamlia, desert excursions, camel trekking, Rissani market, Todra Gorge, Dades Valley, Ait Atta villages, accommodation, meals and return transfers.",
    },
  ],

  faqs: [
    {
      question:
        "Is Errachidia a good starting point for a Merzouga desert tour?",

      answer:
        "Yes. Errachidia is much closer to Merzouga than Marrakech, Casablanca or Fes, so starting here gives you more time to explore the Sahara and southeastern Morocco instead of spending most of the trip on long transfer days.",
    },
    {
      question:
        "What places are included in this 6-day Errachidia itinerary?",

      answer:
        "The route includes Errachidia, the Ziz Valley, Merzouga, Erg Chebbi, Khamlia, the Rissani region, Tinghir, Todra Gorge, Dades Valley and rural Ait Atta areas before returning to Errachidia.",
    },
    {
      question:
        "Does the tour include a full Merzouga desert excursion?",

      answer:
        "Yes. Day two is dedicated to exploring the Merzouga desert region by 4x4, including Khamlia and other Sahara landscapes before the camel trek and desert camp.",
    },
    {
      question:
        "Is Khamlia included?",

      answer:
        "Yes. Khamlia is included as a cultural stop during the Merzouga desert excursion and is known for its connection with Gnawa musical traditions.",
    },
    {
      question:
        "Do we visit nomadic families?",

      answer:
        "A respectful visit in desert areas where nomadic or semi-nomadic families live may be included depending on local conditions and the confirmed route. It should not be treated as a guaranteed staged attraction.",
    },
    {
      question:
        "Is camel trekking included in Merzouga?",

      answer:
        "Yes. The standard itinerary includes a camel trek across the Erg Chebbi dunes around sunset before reaching the desert camp.",
    },
    {
      question:
        "Can I reach the desert camp by 4x4 instead of camel?",

      answer:
        "Yes. A 4x4 transfer can usually be arranged for travelers who prefer not to ride a camel or who have mobility concerns.",
    },
    {
      question:
        "Does the tour visit Rissani market?",

      answer:
        "Yes. Rissani is included on day three. The traditional market experience depends on the day of operation and the timing of your visit.",
    },
    {
      question:
        "Is Todra Gorge included?",

      answer:
        "Yes. Day three continues from Merzouga through Rissani and Tinghir to Todra Gorge, where you can take a short walk through the canyon.",
    },
    {
      question:
        "How much time do we spend in Dades Valley?",

      answer:
        "The itinerary reaches Dades on day four, then dedicates day five to a wider panorama route and rural Ait Atta landscapes before returning east on day six.",
    },
    {
      question:
        "What is the Dades panorama route?",

      answer:
        "It is a scenic exploration of roads, viewpoints, villages and mountain landscapes in and around the Dades region. The exact route can change with road conditions and the final tour plan.",
    },
    {
      question:
        "Who are the Ait Atta?",

      answer:
        "Ait Atta refers to an Amazigh tribal confederation historically associated with southeastern Morocco. On this itinerary, the focus is on rural landscapes and villages connected with Ait Atta heritage in the wider Dades region.",
    },
    {
      question:
        "Where do we sleep during the tour?",

      answer:
        "Accommodation can include a hotel or guesthouse in Merzouga, a Sahara desert camp, accommodation near Todra Gorge and stays in the Dades region. Exact properties depend on the selected package.",
    },
    {
      question:
        "Are breakfasts and dinners included?",

      answer:
        "Breakfasts are generally included with accommodation, and dinners are commonly included at desert and valley stays according to the confirmed package. Lunches and drinks are normally separate.",
    },
    {
      question:
        "Is the tour private?",

      answer:
        "The page is designed as a private tour, allowing more flexibility for stops, photography, accommodation categories and pacing.",
    },
    {
      question:
        "Is this itinerary suitable for families?",

      answer:
        "Families can enjoy the tour, especially because the route starts close to the Sahara and includes fewer very long transfer days than tours starting in western Morocco.",
    },
    {
      question:
        "What should I pack?",

      answer:
        "Bring comfortable walking shoes, light clothing, sun protection, sunglasses, a hat, a reusable water bottle, a warm layer for desert nights, personal medication, a small camp bag and a power bank.",
    },
    {
      question:
        "Can the 6-day Errachidia tour be customized?",

      answer:
        "Yes. Private itineraries can often be adjusted for arrival time, accommodation category, desert-camp level, extra nights, the Dades route and your Errachidia departure schedule.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the 6 Days From Errachidia Morocco Tour",

  highlights: [
    "Start and end your Morocco tour in Errachidia.",
    "Travel through the palm-filled Ziz Valley.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Spend a full day exploring the Sahara region.",
    "Visit Khamlia and experience Gnawa musical traditions.",
    "Explore desert landscapes by 4x4.",
    "Enjoy a respectful local desert encounter when arranged.",
    "Ride camels across Erg Chebbi around sunset.",
    "Spend one night in a Sahara desert camp.",
    "Wake early for sunrise over the dunes.",
    "Visit Rissani and its traditional market when operating.",
    "Travel through the Tafilalet region.",
    "Explore the Tinghir oasis.",
    "Walk through Todra Gorge.",
    "Continue to the scenic Dades Valley.",
    "See kasbahs, rock formations and panoramic roads.",
    "Dedicate a full day to the Dades panorama route.",
    "Discover rural Ait Atta landscapes and villages.",
    "Return through the Ziz Valley to Errachidia.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route:
      "Errachidia → Ziz Valley → Merzouga",
    target: "day-1",
  },
  {
    day: "Day 2",
    route:
      "Merzouga → Khamlia → Desert Excursion → Camel Trek → Sahara Camp",
    target: "day-2",
  },
  {
    day: "Day 3",
    route:
      "Merzouga → Rissani → Tinghir → Todra Gorge",
    target: "day-3",
  },
  {
    day: "Day 4",
    route:
      "Todra Gorge → Tinghir → Dades Valley",
    target: "day-4",
  },
  {
    day: "Day 5",
    route:
      "Dades Valley → Panorama Route → Ait Atta Villages → Dades",
    target: "day-5",
  },
  {
    day: "Day 6",
    route:
      "Dades → Tinghir Region → Ziz Valley → Errachidia",
    target: "day-6",
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
        "A six-day Morocco tour from Errachidia through Ziz Valley to Merzouga, with a full Sahara excursion, Khamlia, camel trekking, Rissani, Todra Gorge, Dades Valley and Ait Atta village landscapes before returning to Errachidia.",

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
        name: "Errachidia",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Errachidia",
          addressCountry: "MA",
        },
      },

      itinerary: {
        "@type": "ItemList",
        name:
          "6 Days From Errachidia Morocco Tour Itinerary",
        numberOfItems: 6,

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
          value: "6 days / 5 nights",
        },
        {
          "@type": "PropertyValue",
          name: "Starting City",
          value: "Errachidia",
        },
        {
          "@type": "PropertyValue",
          name: "Ending City",
          value: "Errachidia",
        },
        {
          "@type": "PropertyValue",
          name: "Sahara Destination",
          value: "Merzouga / Erg Chebbi",
        },
        {
          "@type": "PropertyValue",
          name: "Desert Excursion",
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
          name: "Valley Destinations",
          value: "Ziz Valley and Dades Valley",
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
                    Errachidia Sahara & Valleys Tour
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    What Is the 6 Days From Errachidia Morocco Tour?
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
                    <strong>6 days from Errachidia Morocco tour</strong>{" "}
                    is designed for travelers who want to spend more time in
                    southeastern Morocco instead of using several days just to
                    reach the Sahara. Starting in Errachidia gives you quick
                    access to the Ziz Valley and Merzouga while leaving enough
                    time for Khamlia, Rissani, Todra Gorge and the Dades region.
                  </p>

                  <p>
                    The itinerary combines a full Merzouga desert excursion
                    with slower exploration around Dades Valley, making it a
                    strong choice for travelers who want both Sahara experiences
                    and rural southern Morocco.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Your journey begins in{" "}
                    <PlaceHoverCard place="errachidia">
                      Errachidia
                    </PlaceHoverCard>{" "}
                    and quickly reaches the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>
                    . Palm groves fill the valley floor as the road continues
                    south toward{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    , the desert village beside{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    The second day stays around{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>{" "}
                    so you can explore more of the Sahara. Visit{" "}
                    <PlaceHoverCard place="khamlia">
                      Khamlia
                    </PlaceHoverCard>
                    , experience Gnawa musical traditions and travel through
                    desert landscapes before the afternoon camel trek and
                    overnight camp.

                    <br />
                    <br />

                    After the Sahara, continue through{" "}
                    <PlaceHoverCard place="rissani">
                      Rissani
                    </PlaceHoverCard>
                    , where the traditional market adds another layer of local
                    culture to the itinerary. Travel toward{" "}
                    <PlaceHoverCard place="tinghir">
                      Tinghir
                    </PlaceHoverCard>{" "}
                    and walk through{" "}
                    <PlaceHoverCard place="todra-gorge">
                      Todra Gorge
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    From Todra, continue into{" "}
                    <PlaceHoverCard place="dades-valley">
                      Dades Valley
                    </PlaceHoverCard>
                    . Instead of leaving immediately, dedicate the following day
                    to panoramic roads, villages and rural landscapes connected
                    with{" "}
                    <PlaceHoverCard place="ait-atta-villages">
                      Ait Atta villages
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    On the final day, return east through southeastern Morocco
                    and the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>{" "}
                    before finishing in{" "}
                    <PlaceHoverCard place="errachidia">
                      Errachidia
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
                    6 Days Errachidia Morocco Tour Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    Travel from Errachidia through Ziz Valley to Merzouga,
                    explore the Sahara, continue through Rissani and Todra Gorge
                    to Dades Valley, then return to Errachidia.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>

                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Errachidia Tour Route
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
                    How Much Does the 6-Day Errachidia Morocco Tour Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The price depends on your travel dates, number of travelers,
                    hotel category, desert-camp level, private vehicle and any
                    changes to the Dades or Sahara program. Request the current
                    rate for your exact dates and preferred package.
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
                  description="Pack for desert sun, cooler nights and walking in valleys and gorges during this 6-day Errachidia Morocco tour. Comfortable shoes, sun protection, light layers and a warm jacket are useful. Keep a small overnight bag ready for the Sahara camp and carry essential medication with you."
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
                  Map of the 6 Days From Errachidia Morocco Tour
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the complete loop from Errachidia through Ziz Valley
                  to Merzouga, then continue through Rissani, Todra Gorge and
                  Dades Valley before returning east.
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
                  Errachidia → Sahara → Todra → Dades
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your 6-Day Morocco Tour from Errachidia?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Discover Ziz Valley, Merzouga, Khamlia, the Sahara, Rissani,
                  Todra Gorge, Dades Valley and rural Ait Atta landscapes in
                  one private six-day itinerary.
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
                  6 Days · 5 Nights · Errachidia Round Trip · Sahara · Todra Gorge · Dades Valley
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

import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Replace with a dedicated 8-day Marrakech → Merzouga tour image when available.
import Morocco8DaysImage from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";

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

import { SunIcon, CameraIcon, ShieldCheckIcon, BeakerIcon, BackwardIcon, MapIcon, BuildingLibraryIcon, FireIcon, BriefcaseIcon, BoltIcon } from "@heroicons/react/24/solid";

/* -------------------------------------------------------------------------- */
/*                               MAIN TOUR DATA                               */
/* -------------------------------------------------------------------------- */

const propsObj = {
  image: Morocco8DaysImage,
  imagetitle: "8 Days Tour from Marrakech to Merzouga",
  imageurl:
    "https://moorishtour.com/tours/related/morocco-itinerary-7-days-from-marrakech.jpg",
  imagerRobbicon: "Nature, Sahara & Culture",
  type: "Private Morocco Desert Tour",

  url:
    "https://moorishtour.com/tour/8-days-tour-from-marrakech-to-merzouga/",

  title: "8 Days Tour from Marrakech to Merzouga",

  description:
    "Explore Morocco in 8 days from Marrakech with Ouzoud Waterfalls, dinosaur footprints near Demnate, Dades, Todra Gorge, Merzouga, Ait Ben Haddou and the High Atlas.",

  overeview:
    "An 8-day Morocco itinerary from Marrakech combining Ouzoud Waterfalls, Demnate, Amazigh villages, Dades Valley, Todra Gorge, Merzouga Sahara, camel trekking, a luxury desert camp, a cooking class, Ait Ben Haddou and Marrakech.",

  duration: "8 Days / 7 Nights",

  route:
    "Marrakech → Ouzoud Waterfalls → Demnate → Dades Valley → Todra Gorge → Merzouga → Khamlia → Rissani → Ouarzazate → Ait Ben Haddou → High Atlas → Marrakech",

  reviews: "4",
  reviewsRate: "5",
  price: 120,
  maxPeople: "Private Tour",
  accommodation: "Riads / Hotels / Luxury Desert Camp",
  activities: "Waterfalls, Culture, Camel Trekking, Cooking & Sahara",
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "8 Days Tour from Marrakech to Merzouga | Sahara & Ouzoud",

  description:
    "Take an 8-day Marrakech to Merzouga tour with Ouzoud Waterfalls, Dades, Todra Gorge, camel trekking, a luxury desert camp and Ait Ben Haddou.",

  keywords: [
    "8 days tour from Marrakech to Merzouga",
    "8 day Morocco tour from Marrakech",
    "8 days Morocco itinerary",
    "8 days in Morocco",
    "8 day Morocco itinerary",
    "Morocco 8 days",
    "Marrakech to Merzouga 8 days",
    "Marrakech desert tour 8 days",
    "Marrakech Sahara tour",
    "Morocco itinerary from Marrakech",
    "Marrakech Ouzoud Waterfalls tour",
    "Ouzoud Waterfalls Morocco",
    "Demnate dinosaur footprints",
    "Morocco dinosaur footprints tour",
    "Amazigh villages Morocco",
    "Berber villages Morocco tour",
    "Dades Valley Morocco",
    "Todra Gorge Morocco",
    "Merzouga camel trek",
    "Erg Chebbi camel trekking",
    "luxury desert camp Merzouga",
    "Merzouga desert excursion",
    "Khamlia Gnawa music",
    "Morocco cooking class",
    "Rissani market Morocco",
    "Ouarzazate Morocco tour",
    "Ait Ben Haddou tour",
    "High Atlas Mountains tour",
    "Marrakech medina souks tour",
    "private Morocco tour 8 days",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "8 Days Tour from Marrakech to Merzouga | Waterfalls, Sahara & Atlas",
    description:
      "Travel from Marrakech to Ouzoud, Dades and Merzouga, enjoy camel trekking and a desert camp, then return through Ait Ben Haddou and the High Atlas.",
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
    icon: SunIcon,
    title: "Ouzoud Waterfalls",
    subtitle: "Nature, walking & viewpoints",
  },
  {
    icon: MapIcon,
    title: "Dades & Todra",
    subtitle: "Valleys, villages & canyon",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle: "Camel trek & luxury camp",
  },
  {
    icon: BuildingLibraryIcon,
    title: "Ait Ben Haddou",
    subtitle: "Historic ksar & Atlas crossing",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ITINERARY                                  */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Marrakech – Ouzoud Waterfalls",

    description:
      "Your 8 days tour from Marrakech to Merzouga begins with morning pickup from your riad, hotel or agreed meeting point in Marrakech. Leave the busy city behind and travel through countryside and small towns toward Ouzoud Waterfalls, one of Morocco's most famous natural attractions. After arrival, walk along viewpoints and paths around the falls, enjoy the green valley scenery and take time for photographs. Depending on your pace, continue toward lower viewpoints and enjoy lunch near the water. This first day is designed as a relaxed beginning to your Morocco adventure, giving you nature and fresh air before the mountain and desert sections of the trip. Spend the night near Ouzoud in a guesthouse or hotel.",

    details: [
      "Pickup from Marrakech",
      "Scenic countryside drive",
      "Ouzoud Waterfalls",
      "Walking paths and viewpoints",
      "Green valley scenery",
      "Free time for photos",
      "Overnight near Ouzoud",
    ],
  },

  {
    title:
      "Day 2: Ouzoud – Demnate – Dinosaur Footprints – Amazigh Villages – Dades Valley",

    description:
      "After breakfast, leave Ouzoud and continue toward the Demnate region, where mountain foothills, rural Amazigh villages and geological sites create a very different landscape. Depending on local access, timing and road conditions, stop near known dinosaur-track areas in the wider Demnate region and see traces preserved in the rock. Continue through traditional villages and quiet mountain roads where local houses, farms and valleys show a more rural side of Morocco. Later, travel toward southern Morocco and the Dades Valley. As you approach the valley, the scenery changes to dry mountains, old kasbahs and unusual rock formations. Arrive in Dades in the evening for dinner and overnight.",

    details: [
      "Breakfast near Ouzoud",
      "Demnate region",
      "Dinosaur footprints when accessible",
      "Amazigh / Berber villages",
      "Mountain scenery",
      "Traditional rural landscapes",
      "Arrival in Dades Valley",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 3: Dades Valley – Tinghir – Todra Gorge – Merzouga",

    description:
      "After breakfast, enjoy panoramic views in the Dades Valley before continuing toward Tinghir. The route passes kasbahs, villages and dry mountain scenery before reaching the palm-filled oasis around Tinghir. Continue to Todra Gorge, where high limestone canyon walls rise dramatically on both sides of the road. Take time for a short walk through the gorge and enjoy the cooler air before continuing east across desert-edge landscapes. In the late afternoon or evening, arrive in Merzouga beside the golden Erg Chebbi dunes. Check into your hotel or riad near the Sahara and enjoy dinner while preparing for the full desert experience on the following day.",

    details: [
      "Dades Valley viewpoints",
      "Kasbah landscapes",
      "Tinghir oasis",
      "Todra Gorge",
      "Canyon walk",
      "Drive toward the Sahara",
      "Arrival in Merzouga",
      "First view of Erg Chebbi",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 4: Merzouga Desert Excursion – Khamlia – Local Culture – Camel Trek – Luxury Desert Camp",

    description:
      "Spend a full day discovering the Merzouga region instead of seeing only the dunes. After breakfast, explore the Sahara by 4x4 and discover golden sand, rocky desert and small communities around Erg Chebbi. Visit Khamlia, a village known for Gnawa musical traditions, and enjoy time learning about local culture. Depending on your confirmed route and local conditions, you may also stop in desert areas where local families live, always with respect for privacy and daily life. In the late afternoon, meet your camel guide and ride across Erg Chebbi while the sunset changes the color of the dunes. Continue to your luxury desert camp for dinner, local music and a peaceful night under the stars.",

    details: [
      "Merzouga desert excursion",
      "4x4 exploration",
      "Khamlia",
      "Gnawa music",
      "Local desert culture",
      "Camel trekking",
      "Sahara sunset",
      "Luxury desert camp",
      "Dinner & breakfast",
      "Music under the stars",
    ],
  },

  {
    title:
      "Day 5: Merzouga – Cooking Class – Rissani – Desert & Oasis Region",

    description:
      "Wake early to watch sunrise over Erg Chebbi, then enjoy breakfast at the camp and return toward Merzouga by camel or 4x4. Spend a slower morning in the desert region and join a Moroccan cooking class when included in your booking. Learn about local ingredients, spices and simple preparation methods with a local host or chef. Later, travel to Rissani, an important historic market town in the Tafilalet region. When the market is operating, enjoy time walking through the busy local stalls before returning toward the Merzouga or nearby desert region. This day gives you a more relaxed cultural experience after the camel trek, with food, local life and time away from long driving.",

    details: [
      "Sahara sunrise",
      "Breakfast at camp",
      "Return to Merzouga",
      "Moroccan cooking class when confirmed",
      "Local ingredients and food culture",
      "Rissani",
      "Traditional market when operating",
      "Second night in Merzouga region",
    ],
  },

  {
    title:
      "Day 6: Merzouga – Rissani Region – Draa Landscapes – Ouarzazate",

    description:
      "After breakfast, leave Merzouga and begin the journey west through southeastern Morocco. Pass the wider Rissani and Tafilalet region before continuing through dry plateaus, small desert towns and pre-Sahara landscapes. The route is long, but the scenery changes continuously between open plains, rocky hills and oasis areas. Continue toward the Draa region and Ouarzazate, a city known for kasbah landscapes and its connection with international film production. Arrive in the late afternoon or evening, check into your accommodation and enjoy dinner and rest before the Ait Ben Haddou visit the next day.",

    details: [
      "Departure from Merzouga",
      "Tafilalet region",
      "Desert and pre-Sahara scenery",
      "Oasis landscapes",
      "Draa-region road",
      "Arrival in Ouarzazate",
      "Hotel or riad check-in",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 7: Ouarzazate – Ait Ben Haddou – High Atlas Mountains – Marrakech",

    description:
      "Leave Ouarzazate after breakfast and travel to Ait Ben Haddou, one of Morocco's most famous fortified villages and a UNESCO World Heritage Site. Walk through the old ksar, explore its earthen architecture and climb higher for panoramic views across the valley. After the visit, continue into the High Atlas Mountains. The road passes through steep valleys, traditional villages and dramatic mountain scenery before descending toward Marrakech. Stop for photographs and breaks along the route, then arrive in the city in the afternoon or evening. Check into your riad or hotel and enjoy a free first evening in the medina.",

    details: [
      "Ouarzazate",
      "Ait Ben Haddou",
      "Historic ksar walk",
      "Panoramic viewpoints",
      "High Atlas Mountains",
      "Traditional mountain villages",
      "Arrival in Marrakech",
      "Free evening",
    ],
  },

  {
    title:
      "Day 8: Marrakech Guided Tour – Medina Souks – Free Time – End of Tour",

    description:
      "Spend the final day exploring Marrakech and its colorful medina. A local guided visit can introduce you to traditional souks, historic neighborhoods, important monuments and the daily life of the old city. Depending on your interests and the final sightseeing plan, visit areas around Bahia Palace, Koutoubia, traditional craft markets and Jemaa el-Fnaa. After the guided portion, enjoy free time for shopping, a rooftop lunch, a garden visit or a final mint tea before your departure arrangements. Your 8-day Morocco tour from Marrakech to Merzouga ends after a complete week of waterfalls, mountain villages, geological sites, Dades Valley, Todra Gorge, Sahara dunes, camel trekking, desert culture, local cooking, Ait Ben Haddou and the High Atlas.",

    details: [
      "Guided Marrakech visit when included",
      "Marrakech medina",
      "Colorful souks",
      "Historic neighborhoods",
      "Jemaa el-Fnaa",
      "Free time",
      "Shopping or optional visits",
      "End of 8-day Morocco tour",
    ],
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
        "This sample review is written for the 8-day Marrakech to Merzouga itinerary. Starting with Ouzoud Waterfalls was a beautiful way to begin, and the road through Demnate and the village areas showed us a quieter side of Morocco. Dades and Todra were impressive, but the camel trek in Erg Chebbi and the luxury desert camp were unforgettable. Ait Ben Haddou and the final Marrakech medina day completed the trip perfectly.",
    },

    {
      id: 2,
      name: "James Anderson",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇬🇧",
      rating: 5,
      date: "1 month ago",
      review:
        "This sample testimonial reflects how varied the tour feels. We saw waterfalls, mountain roads, Amazigh villages, Dades Valley, Todra Gorge and the Sahara all in one trip. Merzouga was the highlight, especially Khamlia, the camel ride at sunset and sleeping under the stars. We also enjoyed the cooking class and having time to see Rissani before heading back toward Ouarzazate.",
    },

    {
      id: 3,
      name: "Sophie Martin",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇨🇦",
      rating: 5,
      date: "1 month ago",
      review:
        "This sample review is tailored to the exact 8-day route. We liked that the tour was not only about the desert. Ouzoud, the dinosaur-track area near Demnate, traditional villages, Dades and Todra all made the journey interesting before reaching Merzouga. The luxury camp was beautiful, and learning about Moroccan food during the cooking experience made the desert days feel more personal.",
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
        "This sample testimonial focuses on the balance of adventure and culture. The Sahara was amazing, especially the camel trek across Erg Chebbi and the sunrise, but Ait Ben Haddou and the High Atlas were just as memorable. Finishing with a guided walk through the Marrakech medina and souks made the eight days feel like a complete Morocco experience.",
    },

  ]

};

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Pickup from your hotel or riad in Marrakech",
    "Private air-conditioned vehicle",
    "English-speaking driver",
    "7 nights accommodation according to selected package",
    "Breakfasts according to accommodation plan",
    "Dinners in selected mountain, desert and southern accommodations",
    "Merzouga desert excursion by 4x4",
    "Khamlia visit",
    "Camel trek in Erg Chebbi",
    "Luxury Sahara desert camp",
    "4x4 transfer to or from the desert camp when arranged",
    "Moroccan cooking class when confirmed",
    "Marrakech guided visit when included in final booking",
  ],

  notIncluded: [
    "Flights",
    "Lunches",
    "Drinks",
    "Entrance fees to monuments and attractions",
    "Local guides not specifically listed",
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
  { id: "marrakech", name: "Marrakech", lat: 31.6295, lng: -7.9811, day: 1, description: "Starting and ending city for the eight-day Morocco itinerary." },
  { id: "ouzoud-waterfalls", name: "Ouzoud Waterfalls", lat: 32.0151, lng: -6.719, day: 1, description: "Major waterfall destination with viewpoints and walking paths." },
  { id: "demnate", name: "Demnate", lat: 31.7344, lng: -7.005, day: 2, description: "Atlas foothill town near rural villages and geological sites." },
  { id: "dades-valley", name: "Dades Valley", lat: 31.471, lng: -5.974, day: 2, description: "Scenic valley known for kasbahs, villages and rock formations." },
  { id: "tinghir", name: "Tinghir", lat: 31.5147, lng: -5.5328, day: 3, description: "Oasis town and gateway to Todra Gorge." },
  { id: "todra-gorge", name: "Todra Gorge", lat: 31.585, lng: -5.59, day: 3, description: "Dramatic limestone canyon and walking stop." },
  { id: "merzouga", name: "Merzouga", lat: 31.0801, lng: -4.0134, day: 3, description: "Sahara village beside Erg Chebbi." },
  { id: "erg-chebbi", name: "Erg Chebbi", lat: 31.1477, lng: -3.9786, day: 4, description: "Golden Sahara dunes for camel trekking and camping." },
  { id: "khamlia", name: "Khamlia", lat: 31.037, lng: -4.006, day: 4, description: "Village near Merzouga known for Gnawa musical traditions." },
  { id: "rissani", name: "Rissani", lat: 31.282, lng: -4.265, day: 5, description: "Historic market town in the Tafilalet region." },
  { id: "ouarzazate", name: "Ouarzazate", lat: 30.9335, lng: -6.937, day: 6, description: "Southern city known for kasbah scenery and film history." },
  { id: "ait-ben-haddou", name: "Ait Ben Haddou", lat: 31.047, lng: -7.129, day: 7, description: "UNESCO-listed fortified ksar." },
  { id: "high-atlas", name: "High Atlas Mountains", lat: 31.2, lng: -7.4, day: 7, description: "Mountain crossing on the route back to Marrakech." },
  { id: "marrakech-return", name: "Marrakech", lat: 31.6295, lng: -7.9811, day: 8, description: "Final city for guided medina sightseeing and free time." },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 8 Days Tour from Marrakech to Merzouga",
      description:
        "Plan your 8-day Morocco tour from Marrakech with answers about Ouzoud Waterfalls, Demnate dinosaur footprints, Dades Valley, Todra Gorge, Merzouga, camel trekking, luxury desert camp, cooking class, Ait Ben Haddou and Marrakech.",
    },
  ],

  faqs: [
    {
      question:
        "Is 8 days enough for a Morocco tour from Marrakech to Merzouga?",
      answer:
        "Yes. Eight days gives you time to combine waterfalls, mountain villages, southern valleys, the Sahara, Ait Ben Haddou and Marrakech without making the trip only about long transfers.",
    },
    {
      question:
        "What is included in this 8-day Morocco itinerary?",
      answer:
        "The route includes Marrakech, Ouzoud Waterfalls, the Demnate region, Dades Valley, Tinghir, Todra Gorge, Merzouga, Erg Chebbi, Khamlia, Rissani, Ouarzazate, Ait Ben Haddou and the High Atlas.",
    },
    {
      question:
        "Does the tour include Ouzoud Waterfalls?",
      answer:
        "Yes. Ouzoud is the main destination on day one, with time for walking and viewpoints around the falls.",
    },
    {
      question:
        "Can we see dinosaur footprints?",
      answer:
        "Day two can include a stop near known dinosaur-track areas in the wider Demnate region when access, timing and local conditions allow.",
    },
    {
      question:
        "Do we visit Berber or Amazigh villages?",
      answer:
        "Yes. The route passes rural Amazigh communities and traditional mountain villages, with stops depending on timing and road conditions.",
    },
    {
      question:
        "Does the tour visit Dades Valley and Todra Gorge?",
      answer:
        "Yes. Dades Valley is included before the route continues through Tinghir and Todra Gorge toward Merzouga.",
    },
    {
      question:
        "How much time do we spend in Merzouga?",
      answer:
        "The itinerary reaches Merzouga on day three and keeps the following two days focused on the Sahara region, including the desert excursion, camel trek, camp, cooking experience and Rissani.",
    },
    {
      question:
        "Is camel trekking included?",
      answer:
        "Yes. The standard Sahara experience includes a camel trek across Erg Chebbi around sunset.",
    },
    {
      question:
        "Is the desert camp a luxury camp?",
      answer:
        "This page is designed around a luxury desert-camp option. Exact tent facilities and camp category should be confirmed before booking.",
    },
    {
      question:
        "Can I reach the desert camp without riding a camel?",
      answer:
        "Yes. A 4x4 transfer can usually be arranged for travelers who prefer not to ride a camel.",
    },
    {
      question:
        "Does the tour include Khamlia?",
      answer:
        "Yes. Khamlia is included during the Merzouga desert excursion and is known for Gnawa musical traditions.",
    },
    {
      question:
        "Is there a cooking class?",
      answer:
        "A Moroccan cooking class can be included on day five when confirmed in the final booking.",
    },
    {
      question:
        "Do we visit Rissani market?",
      answer:
        "Yes. Rissani is included, and a market visit is possible when the traditional market is operating.",
    },
    {
      question:
        "Is Ouarzazate included?",
      answer:
        "Yes. The route includes Ouarzazate before visiting Ait Ben Haddou.",
    },
    {
      question:
        "Do we visit Ait Ben Haddou?",
      answer:
        "Yes. Day seven includes a visit to Ait Ben Haddou before crossing the High Atlas to Marrakech.",
    },
    {
      question:
        "Does the tour cross the High Atlas Mountains?",
      answer:
        "Yes. The return route from Ait Ben Haddou to Marrakech crosses the High Atlas Mountains.",
    },
    {
      question:
        "Is Marrakech sightseeing included?",
      answer:
        "The final day can include a guided Marrakech medina visit when this is confirmed in your booking.",
    },
    {
      question:
        "What accommodation is used?",
      answer:
        "Accommodation can include riads, hotels, guesthouses and a luxury desert camp. Exact properties depend on the selected package.",
    },
    {
      question:
        "Are all meals included?",
      answer:
        "Breakfasts are generally included, and dinners are commonly included in selected southern and desert stays. Lunches and drinks are usually separate.",
    },
    {
      question:
        "What should I pack?",
      answer:
        "Bring comfortable walking shoes, light clothing, sun protection, sunglasses, a hat, a warm layer for desert nights, personal medication, a small overnight camp bag and a power bank.",
    },
    {
      question:
        "Can this 8-day Marrakech to Merzouga tour be customized?",
      answer:
        "Yes. A private itinerary can often be adjusted for hotel category, camp level, extra nights, cooking activity, sightseeing time and your flight schedule.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "8 Day Morocco Itinerary – Tour Highlights",

  highlights: [
    "Discover the stunning Ouzoud Waterfalls.",
    "Visit dinosaur-track areas near Demnate when accessible.",
    "Walk through traditional Amazigh and Berber villages.",
    "Explore the scenic Dades Valley.",
    "Walk through Todra Gorge.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Explore the Sahara by 4x4.",
    "Visit Khamlia and experience Gnawa music.",
    "Ride camels through the Erg Chebbi dunes.",
    "Watch sunset over the Sahara.",
    "Spend a night in a luxury desert camp under the stars.",
    "Wake early for sunrise over the dunes.",
    "Take a Moroccan cooking class when confirmed.",
    "Visit Rissani and its traditional market when operating.",
    "Travel through southern Morocco to Ouarzazate.",
    "Visit the famous ksar of Ait Ben Haddou.",
    "Cross the beautiful High Atlas Mountains.",
    "Explore the colorful souks of Marrakech medina.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route: "Marrakech → Ouzoud Waterfalls",
    target: "day-1",
  },
  {
    day: "Day 2",
    route:
      "Ouzoud → Demnate → Dinosaur Footprints → Amazigh Villages → Dades Valley",
    target: "day-2",
  },
  {
    day: "Day 3",
    route:
      "Dades Valley → Tinghir → Todra Gorge → Merzouga",
    target: "day-3",
  },
  {
    day: "Day 4",
    route:
      "Merzouga Desert Excursion → Khamlia → Camel Trek → Luxury Desert Camp",
    target: "day-4",
  },
  {
    day: "Day 5",
    route:
      "Merzouga → Cooking Class → Rissani → Merzouga Region",
    target: "day-5",
  },
  {
    day: "Day 6",
    route:
      "Merzouga → Tafilalet → Draa Region → Ouarzazate",
    target: "day-6",
  },
  {
    day: "Day 7",
    route:
      "Ouarzazate → Ait Ben Haddou → High Atlas Mountains → Marrakech",
    target: "day-7",
  },
  {
    day: "Day 8",
    route:
      "Marrakech Guided Tour → Medina Souks → Free Time",
    target: "day-8",
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
        "An eight-day Morocco tour from Marrakech combining Ouzoud Waterfalls, Demnate, Dades Valley, Todra Gorge, Merzouga and Erg Chebbi, Khamlia, Rissani, Ouarzazate, Ait Ben Haddou and the High Atlas Mountains.",

      provider: {
        "@id": "https://moorishtour.com/#organization",
      },

      touristType: [
        "Couples",
        "Families",
        "Private travelers",
        "Adventure travelers",
        "Cultural travelers",
        "Nature travelers",
        "Sahara desert travelers",
      ],

      tripOrigin: {
        "@type": "Place",
        name: "Marrakech",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Marrakech",
          addressCountry: "MA",
        },
      },

      itinerary: {
        "@type": "ItemList",
        name:
          "8 Days Tour from Marrakech to Merzouga",
        numberOfItems: 8,

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
          value: "8 days / 7 nights",
        },
        {
          "@type": "PropertyValue",
          name: "Starting City",
          value: "Marrakech",
        },
        {
          "@type": "PropertyValue",
          name: "Ending City",
          value: "Marrakech",
        },
        {
          "@type": "PropertyValue",
          name: "Waterfall Destination",
          value: "Ouzoud Waterfalls",
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
          name: "Luxury Desert Camp",
          value: "Included according to selected package",
        },
        {
          "@type": "PropertyValue",
          name: "Cooking Experience",
          value: "Included when confirmed",
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
                    Marrakech, Waterfalls & Sahara
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    About the 8 Days Tour from Marrakech to Merzouga
                  </h2>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    If you want to see several different sides of Morocco in
                    one trip, this{" "}
                    <strong>8 days tour from Marrakech to Merzouga</strong>{" "}
                    combines busy city life, quiet waterfalls, mountain
                    villages, old kasbahs and the golden dunes of the Sahara.
                    It is designed for travelers who want more than quick photo
                    stops and who want time to enjoy local culture.
                  </p>

                  <p>
                    During these <strong>8 days in Morocco</strong>, you can
                    walk beside waterfalls, see geological sites, travel
                    through Amazigh villages, ride camels in the desert, learn
                    about Moroccan food and finish among the colorful souks of
                    Marrakech.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Start in{" "}
                    <PlaceHoverCard place="marrakech">
                      Marrakech
                    </PlaceHoverCard>{" "}
                    and travel to{" "}
                    <PlaceHoverCard place="ouzoud-waterfalls">
                      Ouzoud Waterfalls
                    </PlaceHoverCard>
                    , where walking paths and viewpoints give you a calm first
                    day surrounded by nature.

                    <br />
                    <br />

                    Continue toward{" "}
                    <PlaceHoverCard place="demnate">
                      Demnate
                    </PlaceHoverCard>
                    , where the wider region includes geological sites and
                    traditional Amazigh villages. Travel onward to{" "}
                    <PlaceHoverCard place="dades-valley">
                      Dades Valley
                    </PlaceHoverCard>{" "}
                    before continuing through{" "}
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

                    Reach{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>{" "}
                    beside{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    . Spend time exploring the Sahara, visit{" "}
                    <PlaceHoverCard place="khamlia">
                      Khamlia
                    </PlaceHoverCard>
                    , ride camels across the dunes and sleep beneath the stars
                    in a luxury desert camp.

                    <br />
                    <br />

                    The following day gives you time for a cooking experience
                    and a visit to{" "}
                    <PlaceHoverCard place="rissani">
                      Rissani
                    </PlaceHoverCard>
                    . Then begin the journey west toward{" "}
                    <PlaceHoverCard place="ouarzazate">
                      Ouarzazate
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="ait-ben-haddou">
                      Ait Ben Haddou
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    Cross the{" "}
                    <PlaceHoverCard place="high-atlas-mountains">
                      High Atlas Mountains
                    </PlaceHoverCard>{" "}
                    and return to{" "}
                    <PlaceHoverCard place="marrakech">
                      Marrakech
                    </PlaceHoverCard>
                    , where the final day is dedicated to the medina, colorful
                    souks and free time.
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
                    8 Day Morocco Itinerary from Marrakech
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    Travel from Marrakech to Ouzoud, Dades and the Sahara,
                    spend extra time in Merzouga, then return through
                    Ouarzazate, Ait Ben Haddou and the High Atlas.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            8-Day Morocco Route
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
                    How Much Does an 8-Day Marrakech to Merzouga Tour Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The price depends on your dates, number of travelers,
                    accommodation category, luxury camp level, cooking activity
                    and any custom changes. Request the current rate for your
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
                  description="Pack for waterfalls, mountains, valleys and desert conditions during this 8-day Morocco itinerary. Bring comfortable shoes, sun protection, light clothing, a warm layer for Sahara nights and the High Atlas, personal medication and a small overnight bag for the luxury desert camp."
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
                  Map of the 8 Days Tour from Marrakech to Merzouga
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the complete Marrakech round trip through Ouzoud,
                  Dades, Todra Gorge and Merzouga, then return via Ouarzazate,
                  Ait Ben Haddou and the High Atlas.
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
                  Marrakech → Ouzoud → Sahara → Atlas
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your 8-Day Morocco Adventure?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Experience waterfalls, villages, valleys, the Sahara Desert,
                  camel trekking, local food, Ait Ben Haddou and the High Atlas
                  before returning to Marrakech.
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
                  8 Days · 7 Nights · Marrakech Round Trip · Ouzoud · Sahara · Ait Ben Haddou · High Atlas
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

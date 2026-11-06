import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

import Morocco10DaysImage from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";
import MarrakechToMerzouga4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";
import MarrakechToFes4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
import MarrakechToMerzouga7Day from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";

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
  image: Morocco10DaysImage,
  imagetitle: "Morocco Itinerary 10 Days from Marrakech",
  imageurl:
    "https://moorishtour.com/tours/related/morocco-itinerary-10-days-from-marrakech.jpg",
  imagerRobbicon: "Grand Morocco Route",
  type: "Private Morocco Tour",

  url:
    "https://moorishtour.com/tour/morocco-itinerary-10-days-from-marrakech/",

  title: "Morocco Itinerary 10 Days from Marrakech",

  description:
    "Explore Morocco in 10 days from Marrakech through Imlil, Ait Ben Haddou, Zagora, Merzouga, Todra Gorge, Dades Valley, Rose Valley and Ouzoud Waterfalls.",

  overeview:
    "A 10-day Morocco itinerary from Marrakech combining the High Atlas, Imlil, UNESCO-listed Ait Ben Haddou, Ouarzazate, Zagora, Merzouga Sahara, Todra Gorge, Dades Valley, Rose Valley and Ouzoud Waterfalls before returning to Marrakech.",

  duration: "10 Days / 9 Nights",

  route:
    "Marrakech → Imlil → Ait Ben Haddou → Zagora → Merzouga → Tinghir → Dades → Ouzoud → Marrakech",

  reviews: "4",
  reviewsRate: "5",
 price: 250,
  maxPeople: "Private Tour",
  accommodation: "Riads / Hotels / Desert Camp",
  activities: "Culture, Mountains, Desert & Nature",
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "10 Days Morocco Itinerary from Marrakech | Sahara, Atlas & Ouzoud",

  description:
    "Explore Morocco in 10 days from Marrakech through Imlil, Ait Ben Haddou, Zagora, Merzouga, Todra Gorge, Dades Valley, Rose Valley and Ouzoud Waterfalls.",

  keywords: [
    "Morocco itinerary 10 days from Marrakech",
    "10 days Morocco itinerary from Marrakech",
    "10 day Morocco tour from Marrakech",
    "10 days in Morocco from Marrakech",
    "Morocco 10 day itinerary",
    "10 days Morocco tour",
    "Marrakech 10 day tour",
    "10 days Marrakech desert tour",
    "10 day Marrakech to Merzouga tour",
    "Marrakech to Merzouga 10 days",
    "Morocco desert tour from Marrakech",
    "Marrakech Sahara tour",
    "Morocco private tour 10 days",
    "10 day Morocco road trip",
    "Morocco itinerary Marrakech Sahara",
    "Marrakech Imlil Ait Ben Haddou tour",
    "Marrakech Zagora Merzouga itinerary",
    "Merzouga desert camp Morocco",
    "Todra Gorge Dades Valley tour",
    "Rose Valley Morocco tour",
    "Ouzoud Waterfalls tour",
    "High Atlas Mountains Morocco tour",
    "best 10 day Morocco itinerary",
    "Morocco tour with Sahara desert",
    "Morocco itinerary with Ouzoud waterfalls",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "10 Days Morocco Itinerary from Marrakech | Atlas, Sahara & Ouzoud",
    description:
      "Travel from Marrakech through the High Atlas, Imlil, Ait Ben Haddou, Zagora, Merzouga, Todra, Dades, Rose Valley and Ouzoud on a 10-day Morocco tour.",
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
    title: "Historic Morocco",
    subtitle: "Marrakech & Ait Ben Haddou",
  },
  {
    icon: MapIcon,
    title: "Atlas Mountains",
    subtitle: "Imlil & scenic mountain roads",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle: "Camel trek & desert camp",
  },
  {
    icon: SunIcon,
    title: "Ouzoud Waterfalls",
    subtitle: "Nature stop before Marrakech",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ITINERARY                                  */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title: "Day 1: Arrival in Marrakech",

    description:
      "Welcome to Morocco. Your 10-day Morocco itinerary from Marrakech begins with arrival at Marrakech Menara Airport or pickup from your accommodation in the city. Depending on your arrival time, settle into your riad or hotel and enjoy a relaxed introduction to Marrakech. If time allows, take a first walk through the medina, visit Jemaa el-Fnaa in the evening or enjoy dinner in a traditional Moroccan restaurant. This first day is intentionally light so you can recover from your journey and prepare for the mountain and desert route ahead.",

    details: [
      "Airport or accommodation pickup",
      "Arrival in Marrakech",
      "Check-in at riad or hotel",
      "Free time depending on arrival",
      "Optional Jemaa el-Fnaa evening walk",
      "Overnight in Marrakech",
    ],
  },

  {
    title: "Day 2: Explore Marrakech – Imlil",

    description:
      "After breakfast, discover some of Marrakech's most important tourism highlights before leaving the city for the High Atlas. Depending on timing and your interests, the morning can include the medina, souks, Bahia Palace area, Koutoubia surroundings or gardens. Later, leave Marrakech and drive toward Imlil, a mountain village in the High Atlas and an important base for walking routes around the Toubkal region. As the road climbs, city landscapes give way to mountain valleys, terraced fields and traditional villages. Spend the afternoon enjoying the quieter atmosphere of Imlil and the surrounding scenery before dinner and an overnight stay in a local guesthouse or mountain accommodation.",

    details: [
      "Marrakech sightseeing",
      "Medina and souks",
      "Drive into the High Atlas",
      "Imlil village",
      "Mountain scenery",
      "Local guesthouse or hotel",
      "Dinner & breakfast",
    ],
  },

  {
    title: "Day 3: Imlil – High Atlas – Ait Ben Haddou",

    description:
      "Leave Imlil after breakfast and continue through the High Atlas Mountains toward southern Morocco. The day is focused on mountain scenery, changing elevations and traditional villages before reaching the historic ksar of Ait Ben Haddou. This fortified settlement is one of southern Morocco's most recognizable examples of earthen architecture and is an important cultural stop on routes between Marrakech and Ouarzazate. Walk through the ksar, explore its narrow passages and climb higher for views over the surrounding valley. Spend the night in or near Ait Ben Haddou, allowing more time to enjoy the site after many day visitors have left.",

    details: [
      "High Atlas Mountains",
      "Scenic mountain roads",
      "Traditional villages",
      "Ait Ben Haddou",
      "Historic ksar walk",
      "Panoramic viewpoints",
      "Overnight near Ait Ben Haddou",
    ],
  },

  {
    title: "Day 4: Ait Ben Haddou – Ouarzazate – Agdez – Zagora",

    description:
      "Continue your 10-day Morocco tour through southern Morocco. Start with the short journey toward Ouarzazate, a city known for kasbah landscapes and its long connection with film production. From Ouarzazate, travel toward Agdez and descend into the Draa Valley, where palm groves, old villages and earthen kasbahs create one of the country's classic oasis landscapes. Follow the valley south toward Zagora, an important desert-edge town and a gateway to the wider Draa region. The journey is scenic rather than rushed, with opportunities for photo stops and short breaks along the palm-oasis road. Overnight in Zagora.",

    details: [
      "Ouarzazate",
      "Southern kasbah scenery",
      "Agdez",
      "Draa Valley",
      "Palm groves",
      "Traditional villages",
      "Arrival in Zagora",
      "Overnight in Zagora",
    ],
  },

  {
    title:
      "Day 5: Zagora – Amezrou – Tamegroute – Rissani – Merzouga Desert",

    description:
      "After breakfast, continue deeper into southeastern Morocco. Visit Amezrou and travel through the Zagora area before stopping in Tamegroute, known for its long religious, cultural and pottery traditions. Continue across remote desert and pre-Sahara landscapes toward the Tafilalet region. The scenery becomes wider and drier as the route approaches Rissani and Merzouga. In the afternoon, reach Merzouga beside the golden Erg Chebbi dunes. Meet your camel guide and ride into the Sahara around sunset, watching the color of the sand change as the light becomes softer. Continue to the desert camp for dinner, local music and an overnight stay among the dunes.",

    details: [
      "Amezrou",
      "Tamegroute",
      "Southern desert road",
      "Rissani region",
      "Merzouga",
      "Erg Chebbi dunes",
      "Camel trekking",
      "Sahara sunset",
      "Desert camp",
      "Dinner & breakfast",
    ],
  },

  {
    title: "Day 6: Merzouga Desert Experience – Tinghir",

    description:
      "Wake early for sunrise over the Erg Chebbi dunes, then have breakfast at the camp and return toward Merzouga by camel or 4x4 transfer. Before leaving the desert, enjoy a slower morning focused on the Sahara environment. A desert cooking experience can introduce you to simple Moroccan food preparation and the flavors used in the region, depending on the final tour arrangement. Later, leave Merzouga and travel west through the Tafilalet and oasis landscapes toward Tinghir. The route passes dry plateaus, small towns and palm-filled valleys before reaching Tinghir, the main gateway to Todra Gorge. Dinner and overnight in the Tinghir area.",

    details: [
      "Sahara sunrise",
      "Breakfast at camp",
      "Return to Merzouga",
      "Desert cooking experience",
      "Drive through southeastern Morocco",
      "Oasis scenery",
      "Arrival in Tinghir",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 7: Tinghir – Todra Gorge – Dades Valley – Rose Valley",

    description:
      "After breakfast, explore the Tinghir oasis and continue to Todra Gorge, where high limestone walls create one of southern Morocco's most dramatic natural stops. Take time for a walk through the canyon before continuing toward Dades Valley. The road reveals kasbahs, unusual rock formations, mountain scenery and traditional villages. Continue through Kelaat M'Gouna and the Rose Valley, an area known for rose cultivation and local rose products. The landscape is especially attractive during the spring flowering season, but the valley remains an interesting rural stop throughout the year. Overnight in the wider Dades, Rose Valley or Ouarzazate region depending on the final accommodation plan.",

    details: [
      "Tinghir oasis",
      "Todra Gorge",
      "Canyon walk",
      "Dades Valley",
      "Rock formations",
      "Kelaat M'Gouna",
      "Rose Valley",
      "Kasbah landscapes",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 8: Rose Valley / Ouarzazate – High Atlas – Ouzoud Waterfalls",

    description:
      "Travel back toward central Morocco, passing Ouarzazate and crossing the mountain landscapes that separate the south from the Marrakech region. Instead of returning directly to Marrakech, continue toward Ouzoud Waterfalls for a different natural experience. Ouzoud is known for its high cascades, green valley scenery and walking paths around the falls. After the long desert and mountain route of the previous days, the waterfalls provide a refreshing change of landscape. Arrive in the Ouzoud area, check into your accommodation and enjoy a relaxed evening close to the falls.",

    details: [
      "Ouarzazate region",
      "Mountain road",
      "Scenic transfer",
      "Ouzoud Waterfalls area",
      "Nature landscapes",
      "Overnight near Ouzoud",
    ],
  },

  {
    title: "Day 9: Ouzoud Waterfalls – Marrakech",

    description:
      "Spend the morning exploring Ouzoud Waterfalls. Walk along viewpoints and paths to see the cascades from different angles, enjoy the green valley and take time for photos before beginning the drive back to Marrakech. Arrive in the city later in the day and check into your riad or hotel. The evening is free, giving you another opportunity to return to Jemaa el-Fnaa, shop in the souks, enjoy a rooftop dinner or simply relax after the long journey across Morocco.",

    details: [
      "Ouzoud Waterfalls",
      "Walking viewpoints",
      "Free time for photos",
      "Drive to Marrakech",
      "Arrival in Marrakech",
      "Free evening",
      "Overnight in Marrakech",
    ],
  },

  {
    title: "Day 10: Marrakech Free Time – Airport Transfer",

    description:
      "Enjoy the final morning of your Morocco itinerary at your own pace. Depending on your flight time, use the free time for last-minute shopping, a relaxed breakfast, a short medina walk or simply rest at your accommodation. At the agreed time, your driver transfers you to Marrakech Menara Airport for departure. Your 10-day Morocco itinerary from Marrakech ends after a route that combines imperial-city culture, the High Atlas Mountains, southern kasbahs, the Draa Valley, the Merzouga Sahara, Todra Gorge, Dades Valley, Rose Valley and Ouzoud Waterfalls.",

    details: [
      "Free time in Marrakech",
      "Last-minute shopping if time allows",
      "Hotel or riad pickup",
      "Transfer to Marrakech Menara Airport",
      "End of the 10-day Morocco tour",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Airport pickup in Marrakech on arrival",
    "Airport transfer in Marrakech on departure",
    "Private air-conditioned vehicle during the tour",
    "English-speaking driver",
    "Accommodation for 9 nights according to your selected package",
    "Breakfasts according to the accommodation plan",
    "Dinners in selected mountain, desert and southern accommodations",
    "Camel trek in the Erg Chebbi dunes",
    "Overnight desert camp in Merzouga",
    "4x4 transfer to or from the desert camp when arranged",
    "Desert cooking experience when confirmed in the final booking",
  ],

  notIncluded: [
    "Flights to and from Morocco",
    "Lunches",
    "Drinks",
    "Entrance fees to monuments and attractions",
    "Local city guides unless specifically listed",
    "Tips for driver, guides and hotel or camp staff",
    "Personal shopping and expenses",
    "Travel insurance",
    "Optional activities not confirmed as included",
  ],
};

/* -------------------------------------------------------------------------- */
/*                                TOUR MAP                                    */
/* -------------------------------------------------------------------------- */

const locations = [
  {
    id: "marrakech",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 1,
    description:
      "Arrival in Marrakech and the starting point of the 10-day Morocco itinerary.",
  },
  {
    id: "imlil",
    name: "Imlil",
    lat: 31.1374,
    lng: -7.918,
    day: 2,
    description:
      "High Atlas mountain village and overnight stop after exploring Marrakech.",
  },
  {
    id: "ait-ben-haddou",
    name: "Ait Ben Haddou",
    lat: 31.047,
    lng: -7.129,
    day: 3,
    description:
      "Historic fortified ksar and important cultural stop in southern Morocco.",
  },
  {
    id: "ouarzazate",
    name: "Ouarzazate",
    lat: 30.9335,
    lng: -6.937,
    day: 4,
    description:
      "Southern Morocco city known for kasbah landscapes and film history.",
  },
  {
    id: "agdez",
    name: "Agdez",
    lat: 30.6937,
    lng: -6.4463,
    day: 4,
    description:
      "Gateway to the Draa Valley and its palm-oasis landscapes.",
  },
  {
    id: "zagora",
    name: "Zagora",
    lat: 30.3306,
    lng: -5.838,
    day: 4,
    description:
      "Desert-edge town in the Draa Valley and overnight stop.",
  },
  {
    id: "tamegroute",
    name: "Tamegroute",
    lat: 30.2601,
    lng: -5.6815,
    day: 5,
    description:
      "Cultural stop south of Zagora known for religious heritage and pottery traditions.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 5,
    description:
      "Sahara village beside the Erg Chebbi dunes and desert-camp experience.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi",
    lat: 31.1477,
    lng: -3.9786,
    day: 5,
    description:
      "Golden Sahara dunes for camel trekking, sunset and sunrise.",
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
    day: 7,
    description:
      "Dramatic limestone canyon and walking stop in southeastern Morocco.",
  },
  {
    id: "dades-valley",
    name: "Dades Valley",
    lat: 31.471,
    lng: -5.974,
    day: 7,
    description:
      "Scenic valley known for kasbahs, rock formations and mountain roads.",
  },
  {
    id: "rose-valley",
    name: "Rose Valley",
    lat: 31.245,
    lng: -6.127,
    day: 7,
    description:
      "Rural valley around Kelaat M'Gouna known for rose cultivation.",
  },
  {
    id: "ouzoud",
    name: "Ouzoud Waterfalls",
    lat: 32.0151,
    lng: -6.719,
    day: 8,
    description:
      "Major waterfall destination in central Morocco and final nature stop before Marrakech.",
  },
  {
    id: "marrakech-return",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 9,
    description:
      "Return to Marrakech for the final night before departure.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  FAQS                                      */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 10 Days Morocco Itinerary from Marrakech",

      description:
        "Plan your 10-day Morocco itinerary from Marrakech with practical answers about the High Atlas, Imlil, Ait Ben Haddou, Zagora, Merzouga, camel trekking, desert camps, Todra Gorge, Dades Valley, Rose Valley, Ouzoud Waterfalls, driving times, accommodation, meals and airport transfers.",
    },
  ],

  faqs: [
    {
      question:
        "Is 10 days enough for a Morocco itinerary from Marrakech?",

      answer:
        "Ten days gives travelers enough time to combine Marrakech, the High Atlas, southern Morocco, the Merzouga Sahara, Todra Gorge, Dades Valley and Ouzoud Waterfalls. The route still includes several long driving days, but it provides more variety than a short desert tour.",
    },
    {
      question:
        "What places are included in this 10-day Morocco tour?",

      answer:
        "The itinerary includes Marrakech, Imlil, the High Atlas Mountains, Ait Ben Haddou, Ouarzazate, Agdez, the Draa Valley, Zagora, Tamegroute, Merzouga, Erg Chebbi, Tinghir, Todra Gorge, Dades Valley, Rose Valley, Ouzoud Waterfalls and Marrakech again.",
    },
    {
      question:
        "Does this 10-day itinerary include the Sahara Desert?",

      answer:
        "Yes. The tour reaches Merzouga and the Erg Chebbi dunes, where you can enjoy a camel trek around sunset and spend the night at a Sahara desert camp.",
    },
    {
      question:
        "How many nights are spent in Merzouga?",

      answer:
        "This itinerary includes the Merzouga region on day five and a desert-camp overnight. The exact hotel and camp arrangement can be adjusted depending on your preferred accommodation level and final booking.",
    },
    {
      question:
        "Is camel trekking included in Merzouga?",

      answer:
        "Yes. Camel trekking in the Erg Chebbi dunes is included in the standard desert experience. A 4x4 transfer can usually be arranged for travelers who prefer not to ride a camel.",
    },
    {
      question:
        "Does the tour include Imlil and the High Atlas Mountains?",

      answer:
        "Yes. Day two travels from Marrakech to Imlil, and day three continues through the High Atlas toward Ait Ben Haddou. This gives the itinerary a mountain experience before the southern desert route.",
    },
    {
      question:
        "Do we visit Ait Ben Haddou?",

      answer:
        "Yes. Ait Ben Haddou is a major stop on day three. You have time to walk through the historic ksar and enjoy views over the surrounding valley before continuing the southern route.",
    },
    {
      question:
        "Does the itinerary include Zagora?",

      answer:
        "Yes. After traveling through Ouarzazate, Agdez and the Draa Valley, the tour reaches Zagora for an overnight stay before continuing toward Tamegroute and Merzouga.",
    },
    {
      question:
        "What is the desert cooking experience on day six?",

      answer:
        "The exact activity depends on the final booking, but it can involve learning about simple Moroccan food preparation and ingredients used in the desert region. Confirm the format and whether it is included before booking.",
    },
    {
      question:
        "Does the tour visit Todra Gorge and Dades Valley?",

      answer:
        "Yes. Day seven includes the Tinghir area, Todra Gorge, Dades Valley and Rose Valley, giving travelers a full day of canyon, oasis and mountain scenery.",
    },
    {
      question:
        "Are Ouzoud Waterfalls included?",

      answer:
        "Yes. Instead of returning directly to Marrakech from the south, the itinerary continues toward Ouzoud Waterfalls for an overnight stay and morning visit before returning to Marrakech on day nine.",
    },
    {
      question:
        "Is this Morocco itinerary private?",

      answer:
        "The page is designed as a private tour, which allows more flexibility with departure times, photo stops, accommodation categories and the pace of the journey.",
    },
    {
      question:
        "What accommodation is used during the 10-day tour?",

      answer:
        "Accommodation can include riads, hotels, mountain guesthouses and a Sahara desert camp. Exact properties and room categories depend on the package you choose and availability for your dates.",
    },
    {
      question:
        "Are all meals included?",

      answer:
        "No. Breakfasts are normally included with accommodation, and dinners are commonly included in selected mountain, desert and southern stays. Lunches, drinks and meals not listed in the final booking remain separate.",
    },
    {
      question:
        "How much driving is involved?",

      answer:
        "This is a road-based Morocco itinerary covering several regions, so some days include long drives. The route is divided with sightseeing stops and overnight stays to make the journey more interesting and manageable.",
    },
    {
      question:
        "Is this itinerary suitable for families?",

      answer:
        "Families can enjoy the itinerary, especially on a private tour, but parents should consider the ages of their children and the longer driving days. Additional rest stops and a slower schedule can be arranged when possible.",
    },
    {
      question:
        "What should I pack for this 10-day Morocco tour?",

      answer:
        "Bring comfortable walking shoes, light clothing, sun protection, a warm layer for mountains and desert nights, personal medication, a reusable water bottle, toiletries, a small desert-camp bag and a power bank.",
    },
    {
      question:
        "Can this 10-day Morocco itinerary be customized?",

      answer:
        "Yes. A private itinerary can often be adjusted to change hotel categories, add or remove stops, spend longer in Merzouga, change the Ouzoud section or adapt the route to your flight schedule.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the Morocco Itinerary 10 Days from Marrakech",

  highlights: [
    "Begin and end your Morocco itinerary in Marrakech.",
    "Explore Marrakech's medina, souks and historic atmosphere.",
    "Travel into the High Atlas Mountains.",
    "Spend time in the mountain village of Imlil.",
    "Cross scenic mountain roads toward southern Morocco.",
    "Walk through the historic ksar of Ait Ben Haddou.",
    "Visit Ouarzazate and its kasbah landscapes.",
    "Travel through Agdez and the palm-filled Draa Valley.",
    "Spend a night in Zagora.",
    "Visit Tamegroute on the road toward the Sahara.",
    "Reach Merzouga beside the Erg Chebbi dunes.",
    "Ride camels across the Sahara around sunset.",
    "Spend a night in a Merzouga desert camp.",
    "Wake early for sunrise over the dunes.",
    "Experience a desert cooking activity when confirmed.",
    "Travel through oasis landscapes toward Tinghir.",
    "Walk through the dramatic Todra Gorge.",
    "Drive through the scenic Dades Valley.",
    "Visit Kelaat M'Gouna and Rose Valley.",
    "Finish the road trip with Ouzoud Waterfalls.",
    "Return to Marrakech for a final free evening.",
    "Airport transfer on day ten.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  {
    day: "Day 1",
    route: "Arrival in Marrakech",
    target: "day-1",
  },
  {
    day: "Day 2",
    route: "Marrakech → Imlil",
    target: "day-2",
  },
  {
    day: "Day 3",
    route: "Imlil → High Atlas → Ait Ben Haddou",
    target: "day-3",
  },
  {
    day: "Day 4",
    route: "Ait Ben Haddou → Ouarzazate → Agdez → Zagora",
    target: "day-4",
  },
  {
    day: "Day 5",
    route:
      "Zagora → Amezrou → Tamegroute → Rissani → Merzouga → Erg Chebbi",
    target: "day-5",
  },
  {
    day: "Day 6",
    route: "Merzouga Desert Experience → Tinghir",
    target: "day-6",
  },
  {
    day: "Day 7",
    route:
      "Tinghir → Todra Gorge → Dades Valley → Kelaat M'Gouna → Rose Valley",
    target: "day-7",
  },
  {
    day: "Day 8",
    route: "Rose Valley / Ouarzazate → Ouzoud Waterfalls",
    target: "day-8",
  },
  {
    day: "Day 9",
    route: "Ouzoud Waterfalls → Marrakech",
    target: "day-9",
  },
  {
    day: "Day 10",
    route: "Marrakech Free Time → Airport Transfer",
    target: "day-10",
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

        "Our 10-day Morocco itinerary from Marrakech was an amazing way to see so many different parts of the country. We loved exploring Marrakech, spending time in Imlil and crossing the High Atlas before visiting Ait Ben Haddou. The route through Ouarzazate, the Draa Valley and Zagora was beautiful, and the camel trek into the Merzouga desert at sunset was unforgettable. Todra Gorge, Dades Valley, Rose Valley and Ouzoud Waterfalls made the journey feel very complete.",

    },

  {

    id: 2,

    name: "James Anderson",

    avatar: "/images/toursits-comes-to-morocco.jpeg",

    flag: "🇬🇧",

    rating: 5,

    date: "1 month ago",

    review:

      "A fantastic 10-day Morocco tour from Marrakech from start to finish. The itinerary had a great balance of cities, mountains, villages, desert and nature. We especially enjoyed Imlil, Ait Ben Haddou, the Draa Valley and the road to Merzouga. Riding camels across Erg Chebbi, watching the Sahara sunset and sleeping in the desert camp were highlights, and finishing the trip with Todra Gorge, Dades Valley and Ouzoud Waterfalls was perfect.",

  },

  {

    id: 3,

    name: "Sophie Martin",

    avatar: "/images/toursits-comes-to-morocco.jpeg",

    flag: "🇨🇦",

    rating: 5,

    date: "1 month ago",

    review:

      "We highly recommend this Morocco itinerary for anyone who wants to see more than just Marrakech and the Sahara. Every day felt different, from the High Atlas Mountains and Imlil to Ait Ben Haddou, Zagora, Merzouga, Tinghir and the beautiful valleys in the south. The desert camp in Erg Chebbi was very special, and we also loved the walk through Todra Gorge and the visit to Ouzoud Waterfalls before returning to Marrakech.",

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

      "This 10-day private Morocco tour gave us a wonderful mix of culture, scenery and adventure. We enjoyed Marrakech, the mountain atmosphere in Imlil, the historic ksar of Ait Ben Haddou and the long drive through the Draa Valley toward Zagora and Merzouga. The camel trek and night in the Sahara were unforgettable, but Todra Gorge, Dades Valley, Rose Valley and Ouzoud Waterfalls were also beautiful. It was a very memorable Morocco road trip.",

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
        "A 10-day Morocco itinerary from Marrakech through the High Atlas, Imlil, Ait Ben Haddou, Ouarzazate, Draa Valley, Zagora, Merzouga, Erg Chebbi, Tinghir, Todra Gorge, Dades Valley, Rose Valley and Ouzoud Waterfalls.",

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
        "Nature travelers",
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

        name: "10 Days Morocco Itinerary from Marrakech",
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
          value: "Marrakech",
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
          name: "Mountain Destination",
          value: "Imlil / High Atlas Mountains",
        },
        {
          "@type": "PropertyValue",
          name: "Waterfall Destination",
          value: "Ouzoud Waterfalls",
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
                    10-Day Morocco Road Trip
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    What Is the 10 Days Morocco Itinerary from Marrakech?
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
                    <strong>Morocco itinerary 10 days from Marrakech</strong>{" "}
                    is designed for travelers who want more than a quick Sahara
                    trip. The route combines an imperial city, High Atlas
                    mountain scenery, historic kasbahs, the Draa Valley,
                    Merzouga and Erg Chebbi, dramatic gorges, Rose Valley and
                    Ouzoud Waterfalls in one private road journey.
                  </p>

                  <p>
                    Ten days gives you enough time to see several very
                    different parts of Morocco while still sleeping in key
                    destinations instead of returning to Marrakech every day.
                    The itinerary works especially well for first-time visitors
                    who want culture, mountains, Sahara experiences and nature
                    in the same trip.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Your Morocco journey starts in{" "}
                    <PlaceHoverCard place="marrakech">
                      Marrakech
                    </PlaceHoverCard>
                    , where historic medina streets, souks, gardens and
                    traditional riads introduce you to one of Morocco&apos;s
                    most visited cities. From Marrakech, travel into the{" "}
                    <PlaceHoverCard place="high-atlas-mountains">
                      High Atlas Mountains
                    </PlaceHoverCard>{" "}
                    and continue to{" "}
                    <PlaceHoverCard place="imlil">
                      Imlil
                    </PlaceHoverCard>
                    , a mountain village that offers a completely different
                    atmosphere from the city.

                    <br />
                    <br />

                    The route then crosses the mountains toward{" "}
                    <PlaceHoverCard place="ait-ben-haddou">
                      Ait Ben Haddou
                    </PlaceHoverCard>
                    , one of southern Morocco&apos;s most recognizable
                    fortified settlements. Continue through{" "}
                    <PlaceHoverCard place="ouarzazate">
                      Ouarzazate
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="agdez">
                      Agdez
                    </PlaceHoverCard>{" "}
                    before following the palm-filled{" "}
                    <PlaceHoverCard place="draa-valley">
                      Draa Valley
                    </PlaceHoverCard>{" "}
                    south to{" "}
                    <PlaceHoverCard place="zagora">
                      Zagora
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    From Zagora, travel through Amezrou and{" "}
                    <PlaceHoverCard place="tamegroute">
                      Tamegroute
                    </PlaceHoverCard>{" "}
                    before continuing toward{" "}
                    <PlaceHoverCard place="rissani">
                      Rissani
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    . Here, the road journey becomes a Sahara experience.
                    Ride camels across{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    , watch sunset over the dunes and spend the night in a
                    desert camp under the open sky.

                    <br />
                    <br />

                    After the Sahara, travel west toward{" "}
                    <PlaceHoverCard place="tinghir">
                      Tinghir
                    </PlaceHoverCard>{" "}
                    and walk through{" "}
                    <PlaceHoverCard place="todra-gorge">
                      Todra Gorge
                    </PlaceHoverCard>
                    . Continue through{" "}
                    <PlaceHoverCard place="dades-valley">
                      Dades Valley
                    </PlaceHoverCard>
                    ,{" "}
                    <PlaceHoverCard place="kelaat-mgouna">
                      Kelaat M&apos;Gouna
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="rose-valley">
                      Rose Valley
                    </PlaceHoverCard>
                    . These valleys add mountain scenery, kasbahs, villages
                    and rural landscapes to the itinerary.

                    <br />
                    <br />

                    The final part of the trip turns north toward{" "}
                    <PlaceHoverCard place="ouzoud-waterfalls">
                      Ouzoud Waterfalls
                    </PlaceHoverCard>
                    , giving you another kind of natural landscape after the
                    Sahara. After exploring the waterfalls, return to{" "}
                    <PlaceHoverCard place="marrakech">
                      Marrakech
                    </PlaceHoverCard>{" "}
                    for your final night and airport transfer on day ten.
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
                    10-Day Morocco Itinerary from Marrakech
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    This route connects Marrakech with the High Atlas,
                    southern Morocco, the Merzouga Sahara, Todra and Dades,
                    Rose Valley and Ouzoud Waterfalls before returning to
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
                    How Much Does a 10-Day Morocco Tour from Marrakech Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The price depends on your travel date, number of travelers,
                    accommodation category, desert-camp level and any
                    customization requested. Ask for the current price for
                    your dates instead of relying on an old fixed rate.
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
                  description="Pack for different climates during this 10-day Morocco itinerary from Marrakech. You will spend time in Marrakech, the High Atlas Mountains, southern valleys, the Merzouga Sahara, gorges and Ouzoud Waterfalls. Daytime conditions can be warm while mountain mornings and desert nights may be cool or cold depending on the season. Comfortable walking shoes, sun protection, layers, a small desert-camp bag and personal medication are especially useful."
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
                  Map of the 10 Days Morocco Itinerary from Marrakech
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the complete route from Marrakech into the High Atlas,
                  through southern Morocco to Merzouga, then across Tinghir,
                  Todra Gorge, Dades Valley, Rose Valley and Ouzoud before
                  returning to Marrakech.
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
                  Explore Morocco in 10 Days
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your 10-Day Morocco Tour from Marrakech?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Explore Marrakech, the High Atlas, Ait Ben Haddou, the Draa
                  Valley, Merzouga Sahara, Todra Gorge, Dades Valley, Rose
                  Valley and Ouzoud Waterfalls on one private Morocco road
                  trip.
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
                  10 Days · 9 Nights · Marrakech Round Trip · Atlas · Sahara · Valleys · Ouzoud
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

import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";

// Replace with a dedicated 12-day Casablanca → Marrakech Morocco tour image when available.
import Morocco12DaysImage from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";

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
  image: Morocco12DaysImage,
  imagetitle: "12 Days Tour from Casablanca to Marrakech",
  imageurl:
    "https://moorishtour.com/tours/related/morocco-itinerary-10-days-from-marrakech.jpg",
  imagerRobbicon: "Complete Morocco Experience",
  type: "Private Morocco Grand Tour",

  url:
    "https://moorishtour.com/tour/12-days-morocco-tour-from-casablanca-to-marrakech/",

  title: "12 Days Tour from Casablanca to Marrakech",

  description:
    "Explore Morocco in 12 days from Casablanca to Marrakech through Rabat, Chefchaouen, Volubilis, Fes, Merzouga, Dades, Ait Ben Haddou and Essaouira.",

  overeview:
    "A complete 12-day Morocco itinerary from Casablanca to Marrakech combining imperial cities, Chefchaouen, Volubilis, Fes, the Middle Atlas, Merzouga Sahara, Todra Gorge, Dades Valley, Ait Ben Haddou, Marrakech and Essaouira.",

  duration: "12 Days / 11 Nights",

  route:
    "Casablanca → Marrakech",

  reviews: "4",
  reviewsRate: "5",

  maxPeople: "Private Tour",
  accommodation: "Riads / Hotels / Desert Camp",
  activities: "Culture, Cities, Mountains, Camel Trekking, Cooking & Coast",
  price: 395,
};

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "12 Days Tour from Casablanca to Marrakech | Morocco Grand Tour",

  description:
    "Book a 12-day Morocco tour from Casablanca to Marrakech via Chefchaouen, Fes, Merzouga, Dades, Ait Ben Haddou and Essaouira.",

  keywords: [
    "12 days tour from Casablanca to Marrakech",
    "12 day Morocco tour from Casablanca",
    "Morocco itinerary 12 days from Casablanca",
    "12 days in Morocco itinerary",
    "Morocco 12 day itinerary",
    "Casablanca to Marrakech 12 days",
    "best 12 days tour from Casablanca",
    "Morocco grand tour 12 days",
    "Casablanca Rabat Chefchaouen tour",
    "Chefchaouen Volubilis Meknes Fes tour",
    "Fes guided tour Morocco",
    "Fes Middle Atlas Merzouga tour",
    "Fes to Merzouga desert tour",
    "Midelt Ziz Valley Merzouga tour",
    "Merzouga camel trekking",
    "Merzouga desert camp",
    "Khamlia Gnawa music",
    "Morocco cooking class Merzouga",
    "Rissani Todra Gorge Dades tour",
    "Todra Gorge Morocco",
    "Dades Valley Morocco tour",
    "Rose Valley Morocco",
    "Ouarzazate Ait Ben Haddou tour",
    "Ait Ben Haddou Marrakech",
    "High Atlas Mountains Morocco tour",
    "Marrakech guided tour",
    "Essaouira day trip from Marrakech",
    "Morocco imperial cities desert coast tour",
    "private Morocco tour 12 days",
    "Morocco Sahara and Atlantic coast itinerary",
  ],

  alternates: {
    canonical: propsObj.url,
  },

  openGraph: {
    title:
      "12 Days Tour from Casablanca to Marrakech | Cities, Sahara & Coast",
    description:
      "Travel from Casablanca through Rabat, Chefchaouen, Fes and Merzouga, then continue via Dades, Ait Ben Haddou and Marrakech with an Essaouira day trip.",
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
    title: "North Morocco",
    subtitle: "Chefchaouen & Volubilis",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle: "Camel trek, camp & desert culture",
  },
  {
    icon: SunIcon,
    title: "Atlantic Coast",
    subtitle: "Essaouira day trip",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ITINERARY                                  */
/* -------------------------------------------------------------------------- */

const itinerary = [
  {
    title:
      "Day 1: Arrival in Casablanca – Hassan II Mosque – Seaside",

    description:
      "Welcome to Morocco. Your 12 days tour from Casablanca to Marrakech begins with pickup from Casablanca Mohammed V International Airport, your hotel or another agreed location. Depending on your arrival time, begin with an easy introduction to Casablanca, Morocco's largest city and one of the country's main Atlantic gateways. Visit the area around the Hassan II Mosque, an important landmark beside the ocean, and enjoy time along the seaside corniche. The first day is intentionally relaxed so you can recover from your journey, become familiar with the city and prepare for the long Morocco itinerary ahead. Check into your hotel and enjoy a free evening in Casablanca.",

    details: [
      "Arrival pickup in Casablanca",
      "Hassan II Mosque area",
      "Atlantic seaside",
      "Casablanca Corniche",
      "Easy first day",
      "Hotel check-in",
      "Overnight in Casablanca",
    ],
  },

  {
    title:
      "Day 2: Casablanca – Rabat – Chefchaouen",

    description:
      "After breakfast, leave Casablanca and travel north along Morocco's Atlantic corridor toward Rabat, the country's capital and one of its historic imperial cities. Visit or view major landmarks such as Hassan Tower, the Mausoleum of Mohammed V and the Kasbah of the Udayas depending on timing and your interests. Continue north through changing countryside toward the Rif Mountains and Chefchaouen. As the road climbs, the scenery becomes greener and more mountainous. Arrive in the famous blue city in the afternoon or evening, check into your riad and enjoy free time walking through the blue-painted streets, small squares and local shops of the medina.",

    details: [
      "Breakfast in Casablanca",
      "Rabat",
      "Hassan Tower",
      "Kasbah of the Udayas",
      "Rif Mountain scenery",
      "Arrival in Chefchaouen",
      "Blue medina",
      "Overnight in Chefchaouen",
    ],
  },

  {
    title:
      "Day 3: Chefchaouen – Volubilis – Meknes – Fes",

    description:
      "Leave Chefchaouen after breakfast and travel south through the Rif foothills toward Volubilis, one of Morocco's most important archaeological sites. Walk among the remains of the ancient Roman city and see columns, mosaics and open views over the surrounding countryside. Continue to Meknes, an imperial city known for monumental gates and its historic medina. After a sightseeing or lunch stop, continue to Fes. Arrive in the late afternoon or evening and settle into a traditional riad in or near the old medina. This day connects Morocco's northern mountain culture, ancient Roman history and imperial-city heritage in one route.",

    details: [
      "Breakfast in Chefchaouen",
      "Volubilis",
      "Roman ruins",
      "Meknes",
      "Imperial-city stop",
      "Continue to Fes",
      "Riad check-in",
      "Overnight in Fes",
    ],
  },

  {
    title:
      "Day 4: Guided Visit of Fes – Medina, Crafts & Local Culture",

    description:
      "Spend a full day discovering Fes with a local guide. Enter the old medina and walk through its narrow streets, traditional souks and historic neighborhoods while learning about the city's religious, cultural and artisan heritage. Depending on the final sightseeing plan, see important gates, madrasas, craft areas, traditional tanneries and panoramic viewpoints. Fes is one of the best places in Morocco to understand traditional craftsmanship and urban life because many workshops, markets and family businesses still operate inside the historic medina. After the guided visit, enjoy free time for shopping, a rooftop meal or a relaxed evening at your riad.",

    details: [
      "Local guided tour",
      "Fes medina",
      "Traditional souks",
      "Artisan workshops",
      "Historic architecture",
      "Tannery viewpoints",
      "Free evening",
      "Second overnight in Fes",
    ],
  },

  {
    title:
      "Day 5: Fes – Ifrane – Middle Atlas – Midelt",

    description:
      "After breakfast, leave Fes and begin the journey toward southeastern Morocco. Stop in Ifrane, a Middle Atlas mountain town known for its clean streets, cooler climate and alpine-style architecture. Continue through forested landscapes and mountain areas where the road passes rural communities and broad highland scenery. The exact route can include short nature and village stops depending on timing and road conditions. Continue to Midelt, a quiet town positioned between major mountain regions and a useful overnight point before the Sahara route. Check into your hotel or guesthouse and enjoy dinner and rest.",

    details: [
      "Departure from Fes",
      "Ifrane",
      "Middle Atlas Mountains",
      "Forest scenery",
      "Rural villages",
      "Scenic mountain road",
      "Arrival in Midelt",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 6: Midelt – Ziz Valley – Erfoud – Merzouga – Camel Trek – Desert Camp",

    description:
      "After breakfast in Midelt, continue south through increasingly dry and dramatic landscapes toward the Ziz Valley. Stop at panoramic viewpoints overlooking long palm groves, oasis settlements and the valley floor below. Continue through Erfoud, a desert gateway town known for fossils, dates and its position in the Tafilalet region, before reaching Merzouga. In the late afternoon, meet your camel guide and begin a camel trek across the golden Erg Chebbi dunes. Watch the Sahara sunset as the sand changes color, then continue to the desert camp. Enjoy dinner, local music and a quiet night under the stars surrounded by the Sahara.",

    details: [
      "Breakfast in Midelt",
      "Ziz Valley",
      "Palm-grove viewpoints",
      "Erfoud",
      "Arrival in Merzouga",
      "Erg Chebbi",
      "Camel trekking",
      "Sahara sunset",
      "Desert camp",
      "Dinner & breakfast",
    ],
  },

  {
    title:
      "Day 7: Merzouga Desert Experience – Khamlia – Cooking Class – Gnawa Music",

    description:
      "Wake early for sunrise over Erg Chebbi, then enjoy breakfast and spend a full day around the Merzouga region. Explore the desert by 4x4 and discover how the landscape changes between dunes, rocky plains and small settlements. Visit Khamlia, a village known for its connection with Gnawa musical traditions, and enjoy time learning about the music and culture of the area. A Moroccan cooking experience can also be included when confirmed in your booking, giving you the chance to learn about local ingredients and simple traditional preparation. Depending on the final route and local conditions, respectful stops in rural desert communities can be arranged. Return to your hotel, riad or desert-side accommodation for the night.",

    details: [
      "Sahara sunrise",
      "Merzouga desert excursion",
      "4x4 exploration",
      "Khamlia",
      "Gnawa music",
      "Moroccan cooking class when confirmed",
      "Local desert culture",
      "Second night in Merzouga region",
    ],
  },

  {
    title:
      "Day 8: Merzouga – Rissani – Tinghir – Todra Gorge – Dades Valley",

    description:
      "Leave Merzouga after breakfast and travel toward Rissani, an important historic market town in the Tafilalet region. When the traditional market is operating, enjoy time among local produce, spices and regional trade before continuing west. Travel toward Tinghir, an oasis town surrounded by palm groves, and continue to Todra Gorge. Walk between the high limestone canyon walls and enjoy the cooler air and dramatic scenery. Later, continue toward the Dades Valley, where kasbahs, rock formations and traditional villages create one of southern Morocco's classic landscapes. Arrive at your accommodation for dinner and overnight.",

    details: [
      "Departure from Merzouga",
      "Rissani",
      "Traditional market when operating",
      "Tinghir oasis",
      "Todra Gorge",
      "Canyon walk",
      "Dades Valley",
      "Dinner & overnight",
    ],
  },

  {
    title:
      "Day 9: Dades Valley – Rose Valley – Ouarzazate – Ait Ben Haddou",

    description:
      "After breakfast, travel through the Dades region and continue toward Rose Valley and Kelaat M'Gouna, an area known for rose cultivation and rural villages. The landscape is especially colorful during the spring flowering season, but the valley remains attractive throughout the year. Continue toward Ouarzazate, a southern city known for kasbah scenery and its long connection with film production. From Ouarzazate, travel to Ait Ben Haddou, one of Morocco's best-known fortified settlements and a UNESCO World Heritage Site. Walk through the historic ksar and enjoy panoramic views before spending the night in or near Ait Ben Haddou.",

    details: [
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
      "Day 10: Ait Ben Haddou – High Atlas Mountains – Marrakech",

    description:
      "Leave Ait Ben Haddou after breakfast and begin the scenic crossing toward Marrakech. The route climbs into the High Atlas Mountains, passing traditional villages, steep valleys and high mountain scenery. Stop for photographs and breaks along the road before descending toward the Marrakech plains. Arrive in Marrakech in the afternoon or evening and check into your riad or hotel. Enjoy a first free walk through the medina or Jemaa el-Fnaa, where food stalls, musicians and local activity create a lively introduction to the Red City.",

    details: [
      "Breakfast near Ait Ben Haddou",
      "High Atlas Mountains",
      "Mountain villages",
      "Scenic viewpoints",
      "Arrival in Marrakech",
      "Medina free time",
      "Jemaa el-Fnaa",
      "Overnight in Marrakech",
    ],
  },

  {
    title:
      "Day 11: Guided Marrakech Tour – Historic Sites – Souks – Free Time",

    description:
      "Spend the day discovering Marrakech with a local guide. Explore the old medina, traditional souks and important historic areas while learning about the city's history, architecture and daily life. Depending on the final sightseeing plan, the visit can include the Bahia Palace area, Koutoubia surroundings, traditional neighborhoods, gardens or other cultural landmarks. After the guided portion, enjoy free time for shopping, a hammam, a rooftop meal or a relaxed walk through Jemaa el-Fnaa. This slower day gives you time to enjoy Marrakech after the long road journey from Casablanca through the Sahara.",

    details: [
      "Local Marrakech guide",
      "Historic medina",
      "Traditional souks",
      "Cultural landmarks",
      "Local architecture",
      "Free time",
      "Shopping or optional experiences",
      "Second overnight in Marrakech",
    ],
  },

  {
    title:
      "Day 12: Marrakech – Essaouira Day Trip – Atlantic Coast – Marrakech",

    description:
      "On the final day, travel west from Marrakech to Essaouira on Morocco's Atlantic coast. The journey leaves the inland plains and approaches a cooler coastal environment before reaching the historic port city. Walk through the medina, explore the old ramparts and harbor area, and enjoy fresh seafood or a relaxed lunch near the ocean. Essaouira offers a calm atmosphere, white-and-blue architecture and a very different final experience after the imperial cities, mountains and Sahara. In the late afternoon, return to Marrakech. Your 12 days tour from Casablanca to Marrakech ends after a complete journey through Morocco's cities, history, mountain regions, desert landscapes, valleys and Atlantic coast.",

    details: [
      "Drive from Marrakech to Essaouira",
      "Atlantic coast",
      "Essaouira medina",
      "Historic ramparts",
      "Fishing harbor",
      "Free time for lunch and walking",
      "Return to Marrakech",
      "End of 12-day Morocco tour",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  REVIEWS                                   */
/* -------------------------------------------------------------------------- */

/*
  Named sample review drafts.
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
        "This sample review is written for the 12-day Casablanca to Marrakech route. We loved how much variety the trip included, from Casablanca and Rabat to blue Chefchaouen, Volubilis and the medina of Fes. The journey through the Middle Atlas to Merzouga was beautiful, and the camel trek, Sahara sunset and desert camp were unforgettable. Todra Gorge, Dades Valley, Ait Ben Haddou and the final Essaouira day trip made the itinerary feel complete.",
    },

    {
      id: 2,
      name: "James Anderson",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇬🇧",
      rating: 5,
      date: "1 month ago",
      review:
        "This sample testimonial reflects the cultural side of the tour. The guided day in Fes was excellent, Chefchaouen was beautiful and Volubilis added something completely different. We also enjoyed the slower Merzouga day with Khamlia, Gnawa music and the cooking experience. The road through Todra, Dades and the Rose Valley was scenic, and Marrakech and Essaouira were a great finish.",
    },

    {
      id: 3,
      name: "Sophie Martin",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇨🇦",
      rating: 5,
      date: "1 month ago",
      review:
        "This sample review is tailored to the full Morocco itinerary. What we liked most was not rushing from city to city. There was time to enjoy Chefchaouen, explore Fes properly, see the Middle Atlas and spend two days around Merzouga. The Sahara camp under the stars was a highlight, but Ait Ben Haddou, the High Atlas and the guided Marrakech visit were equally memorable.",
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
        "This sample testimonial focuses on the changing landscapes of the twelve days. We went from the Atlantic coast to Rif Mountains, imperial cities, cedar and mountain scenery, the Sahara, deep valleys and finally back to the Atlantic at Essaouira. Camel trekking in Erg Chebbi, Gnawa music in Khamlia, Todra Gorge and the old ksar of Ait Ben Haddou were some of our favorite experiences.",
    },

  ]

};

/* -------------------------------------------------------------------------- */
/*                                INCLUSIONS                                  */
/* -------------------------------------------------------------------------- */

const tourinclude = {
  included: [
    "Arrival pickup in Casablanca",
    "Private air-conditioned vehicle throughout the tour",
    "English-speaking driver",
    "11 nights accommodation according to selected package",
    "Breakfasts according to the accommodation plan",
    "Dinners in selected mountain, desert and southern accommodations",
    "Guided visit of Fes",
    "Camel trek in Erg Chebbi",
    "Overnight Sahara desert camp",
    "Merzouga desert excursion by 4x4",
    "Khamlia visit",
    "Moroccan cooking experience when confirmed",
    "Guided visit of Marrakech",
    "Essaouira day trip from Marrakech",
  ],

  notIncluded: [
    "Flights to and from Morocco",
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
  { id: "casablanca", name: "Casablanca", lat: 33.5731, lng: -7.5898, day: 1, description: "Arrival city and starting point of the 12-day Morocco tour." },
  { id: "rabat", name: "Rabat", lat: 34.0209, lng: -6.8416, day: 2, description: "Morocco's capital and imperial-city stop." },
  { id: "chefchaouen", name: "Chefchaouen", lat: 35.1688, lng: -5.2636, day: 2, description: "Blue-painted mountain town in northern Morocco." },
  { id: "volubilis", name: "Volubilis", lat: 34.0733, lng: -5.555, day: 3, description: "Ancient Roman archaeological site." },
  { id: "meknes", name: "Meknes", lat: 33.8935, lng: -5.5473, day: 3, description: "Historic imperial city on the road to Fes." },
  { id: "fes", name: "Fes", lat: 34.0331, lng: -5.0003, day: 3, description: "Historic cultural city with a full guided medina visit." },
  { id: "ifrane", name: "Ifrane", lat: 33.5228, lng: -5.1109, day: 5, description: "Middle Atlas mountain town." },
  { id: "midelt", name: "Midelt", lat: 32.6806, lng: -4.7369, day: 5, description: "Mountain-region overnight stop before the Sahara." },
  { id: "ziz-valley", name: "Ziz Valley", lat: 31.86, lng: -4.35, day: 6, description: "Palm-filled oasis valley on the road to Merzouga." },
  { id: "erfoud", name: "Erfoud", lat: 31.4353, lng: -4.2326, day: 6, description: "Desert gateway town before Merzouga." },
  { id: "merzouga", name: "Merzouga", lat: 31.0801, lng: -4.0134, day: 6, description: "Sahara village beside the Erg Chebbi dunes." },
  { id: "erg-chebbi", name: "Erg Chebbi", lat: 31.1477, lng: -3.9786, day: 6, description: "Golden Sahara dunes for camel trekking and desert camping." },
  { id: "khamlia", name: "Khamlia", lat: 31.037, lng: -4.006, day: 7, description: "Village known for Gnawa musical traditions." },
  { id: "rissani", name: "Rissani", lat: 31.282, lng: -4.265, day: 8, description: "Historic market town in the Tafilalet region." },
  { id: "tinghir", name: "Tinghir", lat: 31.5147, lng: -5.5328, day: 8, description: "Oasis town and gateway to Todra Gorge." },
  { id: "todra-gorge", name: "Todra Gorge", lat: 31.585, lng: -5.59, day: 8, description: "Dramatic limestone canyon and walking stop." },
  { id: "dades-valley", name: "Dades Valley", lat: 31.471, lng: -5.974, day: 8, description: "Scenic valley known for kasbahs and rock formations." },
  { id: "rose-valley", name: "Rose Valley", lat: 31.245, lng: -6.127, day: 9, description: "Rural valley associated with rose cultivation." },
  { id: "ouarzazate", name: "Ouarzazate", lat: 30.9335, lng: -6.937, day: 9, description: "Southern city known for kasbah landscapes and film history." },
  { id: "ait-ben-haddou", name: "Ait Ben Haddou", lat: 31.047, lng: -7.129, day: 9, description: "UNESCO-listed fortified ksar." },
  { id: "high-atlas", name: "High Atlas Mountains", lat: 31.2, lng: -7.4, day: 10, description: "Mountain crossing on the route to Marrakech." },
  { id: "marrakech", name: "Marrakech", lat: 31.6295, lng: -7.9811, day: 10, description: "Final base for guided sightseeing and the Essaouira day trip." },
  { id: "essaouira", name: "Essaouira", lat: 31.5085, lng: -9.7595, day: 12, description: "Atlantic coastal city visited on the final day trip." },
  { id: "marrakech-return", name: "Marrakech", lat: 31.6295, lng: -7.9811, day: 12, description: "Final return and end of the 12-day Morocco tour." },
];

/* -------------------------------------------------------------------------- */
/*                                   FAQS                                     */
/* -------------------------------------------------------------------------- */

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the 12 Days Tour from Casablanca to Marrakech",
      description:
        "Plan your 12-day Morocco itinerary with practical answers about Casablanca, Rabat, Chefchaouen, Volubilis, Fes, the Middle Atlas, Merzouga, camel trekking, Khamlia, Todra Gorge, Dades Valley, Ait Ben Haddou, Marrakech and Essaouira.",
    },
  ],

  faqs: [
    {
      question:
        "Is 12 days enough to see the main highlights of Morocco?",
      answer:
        "Yes. Twelve days gives you time to combine imperial cities, Chefchaouen, ancient sites, the Middle Atlas, the Sahara, southern valleys, Ait Ben Haddou, Marrakech and the Atlantic coast without making every day a long transfer.",
    },
    {
      question:
        "Where does the 12-day Morocco tour start and end?",
      answer:
        "The itinerary starts in Casablanca and finishes in Marrakech after a day trip to Essaouira.",
    },
    {
      question:
        "Does the tour include Casablanca sightseeing?",
      answer:
        "Yes. The arrival day can include the Hassan II Mosque area and Casablanca's Atlantic seaside depending on your arrival time.",
    },
    {
      question:
        "Are Rabat and Chefchaouen included?",
      answer:
        "Yes. Day two travels from Casablanca through Rabat to Chefchaouen.",
    },
    {
      question:
        "Do we visit Volubilis?",
      answer:
        "Yes. Day three includes the ancient Roman ruins of Volubilis before continuing through Meknes to Fes.",
    },
    {
      question:
        "Is Fes visited with a local guide?",
      answer:
        "Yes. Day four is dedicated to a guided exploration of Fes and its historic medina.",
    },
    {
      question:
        "Does the route cross the Middle Atlas?",
      answer:
        "Yes. Day five travels through Ifrane and Middle Atlas scenery before reaching Midelt.",
    },
    {
      question:
        "How many nights are spent around Merzouga?",
      answer:
        "The itinerary includes the desert camp night and a second night in the Merzouga region so you have time for a full Sahara excursion, Khamlia and cultural activities.",
    },
    {
      question:
        "Is camel trekking included?",
      answer:
        "Yes. Camel trekking across Erg Chebbi is included in the standard Sahara experience.",
    },
    {
      question:
        "Can I reach the desert camp without riding a camel?",
      answer:
        "Yes. A 4x4 transfer can normally be arranged for travelers who prefer not to ride a camel.",
    },
    {
      question:
        "Does the tour include Gnawa music?",
      answer:
        "Yes. Khamlia is included during the Merzouga desert day and is known for Gnawa musical traditions.",
    },
    {
      question:
        "Is there a Moroccan cooking experience?",
      answer:
        "A cooking experience can be included during the Merzouga day when confirmed in the final booking.",
    },
    {
      question:
        "Does the tour visit Todra Gorge and Dades Valley?",
      answer:
        "Yes. Day eight includes Rissani, Tinghir, Todra Gorge and Dades Valley.",
    },
    {
      question:
        "Is Rose Valley included?",
      answer:
        "Yes. Day nine passes through Rose Valley and Kelaat M'Gouna before reaching Ouarzazate and Ait Ben Haddou.",
    },
    {
      question:
        "Do we visit Ait Ben Haddou?",
      answer:
        "Yes. The tour includes a walk through the historic ksar before the High Atlas crossing to Marrakech.",
    },
    {
      question:
        "Does the route cross the High Atlas Mountains?",
      answer:
        "Yes. Day ten crosses the High Atlas from Ait Ben Haddou toward Marrakech.",
    },
    {
      question:
        "Is there a guided tour of Marrakech?",
      answer:
        "Yes. Day eleven is dedicated to guided sightseeing and free time in Marrakech.",
    },
    {
      question:
        "Is Essaouira included?",
      answer:
        "Yes. Day twelve is designed as a Marrakech to Essaouira day trip with a return to Marrakech.",
    },
    {
      question:
        "What accommodation is used during the tour?",
      answer:
        "Accommodation can include city hotels, traditional riads, mountain or valley guesthouses and a Sahara desert camp. Exact properties depend on the selected package.",
    },
    {
      question:
        "Are all meals included?",
      answer:
        "Breakfasts are generally included with accommodation, while dinners are commonly included in selected mountain, desert and southern stays. Lunches and drinks are normally separate.",
    },
    {
      question:
        "Is this 12-day Morocco itinerary private?",
      answer:
        "The page is designed as a private tour, giving you more flexibility with sightseeing time, accommodation, photo stops and travel pace.",
    },
    {
      question:
        "Can the 12-day tour be customized?",
      answer:
        "Yes. Private itineraries can often be adjusted for hotel category, extra nights, arrival time, departure plans, desert-camp level and optional activities.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              TOUR HIGHLIGHTS                               */
/* -------------------------------------------------------------------------- */

const tour = {
  title:
    "Highlights of the Morocco Itinerary 12 Days from Casablanca",

  highlights: [
    "Explore Casablanca and the Hassan II Mosque area.",
    "Discover Rabat, Morocco's capital.",
    "Walk through the blue streets of Chefchaouen.",
    "Visit the ancient Roman ruins of Volubilis.",
    "Stop in Meknes, one of Morocco's imperial cities.",
    "Explore the spiritual old medina of Fes with a local guide.",
    "Cross the Middle Atlas Mountains and forest landscapes.",
    "Enjoy quieter rural villages and mountain scenery.",
    "Travel through the palm-filled Ziz Valley.",
    "Ride camels across the Erg Chebbi dunes.",
    "Sleep in a Sahara desert camp under the stars.",
    "Visit Khamlia and experience Gnawa music.",
    "Join a Moroccan cooking experience when confirmed.",
    "Visit Rissani and the Tafilalet region.",
    "Walk through Todra Gorge.",
    "Explore Dades Valley and Rose Valley.",
    "Visit Ouarzazate and Ait Ben Haddou.",
    "Cross the High Atlas Mountains to Marrakech.",
    "Explore Marrakech with a local guide.",
    "Take a day trip to Essaouira on the Atlantic coast.",
  ],
};

/* -------------------------------------------------------------------------- */
/*                           SHORT ROUTE TABLE                                */
/* -------------------------------------------------------------------------- */

const itineraryRoute = [
  { day: "Day 1", route: "Arrival Casablanca → Hassan II Mosque → Seaside", target: "day-1" },
  { day: "Day 2", route: "Casablanca → Rabat → Chefchaouen", target: "day-2" },
  { day: "Day 3", route: "Chefchaouen → Volubilis → Meknes → Fes", target: "day-3" },
  { day: "Day 4", route: "Guided Visit of Fes", target: "day-4" },
  { day: "Day 5", route: "Fes → Ifrane → Middle Atlas → Midelt", target: "day-5" },
  { day: "Day 6", route: "Midelt → Ziz Valley → Erfoud → Merzouga → Erg Chebbi Camp", target: "day-6" },
  { day: "Day 7", route: "Merzouga Desert Excursion → Khamlia → Cooking Class → Gnawa Music", target: "day-7" },
  { day: "Day 8", route: "Merzouga → Rissani → Tinghir → Todra Gorge → Dades Valley", target: "day-8" },
  { day: "Day 9", route: "Dades → Rose Valley → Ouarzazate → Ait Ben Haddou", target: "day-9" },
  { day: "Day 10", route: "Ait Ben Haddou → High Atlas Mountains → Marrakech", target: "day-10" },
  { day: "Day 11", route: "Guided Marrakech Tour → Free Time", target: "day-11" },
  { day: "Day 12", route: "Marrakech → Essaouira → Marrakech", target: "day-12" },
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
        "A twelve-day Morocco grand tour from Casablanca through Rabat, Chefchaouen, Volubilis, Meknes and Fes to Merzouga, then Todra Gorge, Dades Valley, Ouarzazate, Ait Ben Haddou, Marrakech and Essaouira.",
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
        name: "Casablanca",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "MA",
        },
      },
      itinerary: {
        "@type": "ItemList",
        name: "12 Days Tour from Casablanca to Marrakech",
        numberOfItems: 12,
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
          value: "12 days / 11 nights",
        },
        {
          "@type": "PropertyValue",
          name: "Starting City",
          value: "Casablanca",
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
          name: "Atlantic Coast",
          value: "Casablanca and Essaouira",
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
        price={propsObj.price}
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
                    Complete Morocco Grand Tour
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    About This 12 Days Tour from Casablanca to Marrakech
                  </h2>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    This <strong>12 days tour from Casablanca to Marrakech</strong>{" "}
                    is designed for travelers who want a complete Morocco
                    experience instead of rushing through only the most famous
                    places. The route connects big cities, old medinas, mountain
                    landscapes, villages, the Sahara Desert, valleys, kasbahs
                    and the Atlantic coast.
                  </p>

                  <p>
                    During this <strong>Morocco itinerary 12 days from Casablanca</strong>,
                    you have time to enjoy local life and simple cultural
                    experiences. You move from Casablanca and Chefchaouen to Fes,
                    cross the Middle Atlas toward Merzouga, sleep in the desert,
                    explore southern Morocco and finish with Marrakech and
                    Essaouira.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Begin in{" "}
                    <PlaceHoverCard place="casablanca">
                      Casablanca
                    </PlaceHoverCard>{" "}
                    beside the Atlantic Ocean. Continue to{" "}
                    <PlaceHoverCard place="rabat">
                      Rabat
                    </PlaceHoverCard>{" "}
                    before entering the Rif region and the famous blue streets
                    of{" "}
                    <PlaceHoverCard place="chefchaouen">
                      Chefchaouen
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    Travel south to the ancient Roman ruins of{" "}
                    <PlaceHoverCard place="volubilis">
                      Volubilis
                    </PlaceHoverCard>{" "}
                    and continue through{" "}
                    <PlaceHoverCard place="meknes">
                      Meknes
                    </PlaceHoverCard>{" "}
                    to{" "}
                    <PlaceHoverCard place="fes">
                      Fes
                    </PlaceHoverCard>
                    . Spend a full guided day inside the old medina before
                    leaving the city toward{" "}
                    <PlaceHoverCard place="ifrane">
                      Ifrane
                    </PlaceHoverCard>{" "}
                    and the{" "}
                    <PlaceHoverCard place="middle-atlas">
                      Middle Atlas Mountains
                    </PlaceHoverCard>
                    .

                    <br />
                    <br />

                    Continue through{" "}
                    <PlaceHoverCard place="midelt">
                      Midelt
                    </PlaceHoverCard>{" "}
                    and the{" "}
                    <PlaceHoverCard place="ziz-valley">
                      Ziz Valley
                    </PlaceHoverCard>{" "}
                    to{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>
                    . Ride camels across{" "}
                    <PlaceHoverCard place="erg-chebbi">
                      Erg Chebbi
                    </PlaceHoverCard>
                    , watch the Sahara sunset and spend the night at a desert
                    camp.

                    <br />
                    <br />

                    The following day stays around{" "}
                    <PlaceHoverCard place="merzouga">
                      Merzouga
                    </PlaceHoverCard>{" "}
                    so you can explore more than the dunes. Visit{" "}
                    <PlaceHoverCard place="khamlia">
                      Khamlia
                    </PlaceHoverCard>
                    , experience Gnawa musical traditions and join a cooking
                    activity when confirmed.

                    <br />
                    <br />

                    Continue through{" "}
                    <PlaceHoverCard place="rissani">
                      Rissani
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="tinghir">
                      Tinghir
                    </PlaceHoverCard>{" "}
                    to{" "}
                    <PlaceHoverCard place="todra-gorge">
                      Todra Gorge
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="dades-valley">
                      Dades Valley
                    </PlaceHoverCard>
                    . Travel through{" "}
                    <PlaceHoverCard place="rose-valley">
                      Rose Valley
                    </PlaceHoverCard>{" "}
                    and{" "}
                    <PlaceHoverCard place="ouarzazate">
                      Ouarzazate
                    </PlaceHoverCard>{" "}
                    to{" "}
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
                    to{" "}
                    <PlaceHoverCard place="marrakech">
                      Marrakech
                    </PlaceHoverCard>
                    . After guided sightseeing and free time in the Red City,
                    finish your journey with a day trip to{" "}
                    <PlaceHoverCard place="essaouira">
                      Essaouira
                    </PlaceHoverCard>{" "}
                    on the Atlantic coast before returning to Marrakech.
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
                    Morocco Itinerary 12 Days from Casablanca Route
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    Travel from Casablanca through Morocco&apos;s northern cities,
                    imperial centers, the Middle Atlas and Sahara, then continue
                    through southern valleys to Marrakech and Essaouira.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            12-Day Morocco Tour Route
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
                    How Much Does a 12-Day Morocco Tour from Casablanca Cost?
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The price depends on your travel dates, group size,
                    accommodation category, desert-camp level, guided visits
                    and any itinerary customization. Request the current rate
                    for your exact dates and preferred package.
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
                  description="Pack for several climates during this 12-day Morocco itinerary. You will travel through Atlantic cities, the Rif region, the Middle Atlas, the Sahara, southern valleys, the High Atlas, Marrakech and Essaouira. Bring comfortable walking shoes, light clothing, sun protection, warm layers for mountains and desert nights, and a small overnight bag for the Sahara camp."
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
                  Map of the 12 Days Tour from Casablanca to Marrakech
                </h2>

                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the complete Morocco route from Casablanca through
                  Chefchaouen, Fes and Merzouga, then across Todra, Dades,
                  Ait Ben Haddou and the Atlas to Marrakech and Essaouira.
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
                  Casablanca → Sahara → Marrakech → Essaouira
                </p>

                <h2
                  id="final-tour-cta-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Ready for Your 12-Day Morocco Journey?
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Discover Morocco slowly through imperial cities, Chefchaouen,
                  Fes, the Middle Atlas, Merzouga Sahara, Todra Gorge, Dades,
                  Ait Ben Haddou, Marrakech and Essaouira.
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
                  12 Days · 11 Nights · Casablanca to Marrakech · Imperial Cities · Sahara · Atlas · Atlantic Coast
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

import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";
import MarrakechToMerzouga3Day from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg"
import MarrakechToMerzouga4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg"
import MarrakechToFes4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg"
import MarrakechToMerzouga7Day from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg"
import MarrakechToMerzouga10Day from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg"
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
  BoltIcon
} from "@heroicons/react/24/solid"; 
import PlaceHoverCard from "@/Compentents/placeCard";




// Tour Page Data

const propsObj = {
  image: MarrakechToMerzouga3Day,
  imagetitle: "3 Days Desert Tour from Marrakech to Merzouga ",
  imageurl : "https://moorishtour.com/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon:"Best Seller",
  type: "Desert Tour",
  url: "https://moorishtour.com/tour/3-days-desert-tour-from-marrakech-to-merzouga/",
  title: "3 Days Desert Tour from Marrakech to Merzouga",
  description:  "A 3 days desert tour from Marrakech to Merzouga is one of the most loved trips in Morocco. It is perfect for people who want to see the Sahara desert.",
  overeview : `travelers who want to experience the Sahara in a short time. Cross the High Atlas Mountains, visit UNESCO sites, discover stunning valleys and enjoy a magical night in the desert`,
  duration: "3 Days / 2 Nights",
  route: "Marrakech → Merzouga", 
  reviews: "315",
  price: 195,
  reviewsRate: "4.9",
  maxPeople: "Max People: 18",
  accommodation: "Hotel / Camp",
  activities: "Camel Trekking",   
}


// Tour Page Metadata

export const metadata: Metadata = {
  title: propsObj.title,
  description: propsObj.description,
  keywords: [
    "3 days Marrakech to Merzouga desert tour",
    "3 day Marrakech to Merzouga desert tour",
    "Marrakech desert tour",
    "Morocco desert tour",
    "Marrakech to Merzouga tour",
    "private Morocco desert tour",
    "Sahara desert tour",
  ],

  alternates: {
    canonical:
      propsObj.url,
  },

  openGraph: {
    title: propsObj.title,
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
    images: [
      propsObj.imageurl ,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// Tour Highlights Data

const highlightsOverview = [
  {
    icon: MapIcon,
    title: "Atlas Mountains",
    subtitle: "Scenic drives & views",
  },
  {
    icon: BuildingLibraryIcon,
    title: "Ait Ben Haddou",
    subtitle: "UNESCO World Heritage",
  },
  {
    icon: MapIcon,
    title: "Dades Valley",
    subtitle: "Explore the valley",
  },
  {
    icon: FireIcon,
    title: "Sahara Desert",
    subtitle: "Camel trek & sunset",
  },
  {
    icon: HomeModernIcon,
    title: "Desert Camp",
    subtitle: "Overnight in luxury camp",
  },
];


// Tour Itinerary Data

const itinerary = [
  {
    title: "Day 1: Marrakech – Ait Ben Haddou – Ouarzazate – Dades Valley",
    description:
      "Start your 3-day Marrakech to Merzouga desert tour with an early pickup from your hotel or riad in Marrakech. Cross the High Atlas Mountains through the famous Tizi n'Tichka Pass and enjoy views of mountain villages, valleys, and red-colored landscapes. Visit the UNESCO-listed Ait Ben Haddou Kasbah, then continue to Ouarzazate, known as the Gateway to the Desert. Drive through Skoura and the Rose Valley before reaching the beautiful Dades Valley and Dades Gorge, where you spend the night in a hotel or riad.",
    details: [
      "7-8h Drive",
      "Tizi n'Tichka Pass",
      "Ait Ben Haddou Kasbah",
      "Ouarzazate",
      "Skoura & Rose Valley",
      "Dades Gorge",
      "Dinner & Breakfast",
    ],
  },

  {
    title: "Day 2: Dades Valley – Todra Gorge – Erfoud – Merzouga Desert",
    description:
      "After breakfast, leave the Dades Valley and continue your journey toward the Sahara Desert. Travel through Tinghir and visit the impressive Todra Gorge, where you can walk between its tall rock walls. Continue through the desert landscapes to Erfoud, famous for its fossils, before reaching Merzouga and the golden Erg Chebbi dunes. Enjoy a camel trek into the Sahara Desert, watch the sunset over the dunes, and arrive at your desert camp for dinner, traditional music, and a night under the stars.",
    details: [
      "5-6h Drive",
      "Tinghir",
      "Todra Gorge",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi Dunes",
      "Camel Trekking",
      "Sunset in the Sahara",
      "Dinner & Breakfast",
    ],
  },

  {
    title: "Day 3: Merzouga – Sahara Sunrise – Ouarzazate – Marrakech",
    description:
      "Wake up early to enjoy the beautiful sunrise over the Erg Chebbi sand dunes. After breakfast, ride the camels back or take a 4x4 vehicle to meet your driver. Begin the long journey back to Marrakech through the changing landscapes of southern Morocco, with views of desert areas, valleys, villages, and the High Atlas Mountains. Continue through Ouarzazate and cross the Tizi n'Tichka Pass before arriving in Marrakech in the evening.",
    details: [
      "8-9h Drive",
      "Sahara Sunrise",
      "Camel Ride or 4x4 Transfer",
      "Ouarzazate",
      "High Atlas Mountains",
      "Tizi n'Tichka Pass",
      "Breakfast Included",
      "Drop-off in Marrakech",
    ],
  },
];

// Tour Inclusions Data

const tourinclude = {
  included: [
    "Pickup from your hotel or riad in Marrakech",
    "Drop-off in Marrakech at the end of the tour",
    "Clean and air-conditioned car or minibus",
    "English-speaking driver with explanations along the way",
    "1 night in a hotel in the Dades Valley",
    "1 night in a desert camp in Merzouga",
    "2 breakfasts and 2 dinners",
    "Camel trek in the Sahara Desert",
  ],

  notIncluded: [
    "Lunches and drinks",
    "Tips for the driver and local guides",
    "Personal shopping and expenses",
    "Extra activities not included in the itinerary",
  ],
};

// Tour Map Locations Data

const locations = [
  {
    id: "marrakech",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 1,
    description:
      "Start your 3-day Marrakech to Merzouga desert tour with pickup from your hotel or riad.",
  },

  {
    id: "tizi-n-tichka",
    name: "Tizi n'Tichka Pass",
    lat: 31.343,
    lng: -7.379,
    day: 1,
    description:
      "Cross the famous Tizi n'Tichka Pass through the High Atlas Mountains and enjoy spectacular mountain views.",
  },

  {
    id: "ait-ben-haddou",
    name: "Ait Ben Haddou",
    lat: 31.047,
    lng: -7.129,
    day: 1,
    description:
      "Visit the famous Ait Ben Haddou Kasbah, a UNESCO World Heritage Site and historic fortified village.",
  },

  {
    id: "ouarzazate",
    name: "Ouarzazate",
    lat: 30.9189,
    lng: -6.8934,
    day: 1,
    description:
      "Discover Ouarzazate, known as the Gateway to the Desert and famous for its kasbahs and film studios.",
  },

  {
    id: "skoura",
    name: "Skoura",
    lat: 31.0626,
    lng: -6.5575,
    day: 1,
    description:
      "Drive through the Skoura oasis, known for its palm groves, traditional villages, and historic kasbahs.",
  },

  {
    id: "rose-valley",
    name: "Valley of Roses",
    lat: 31.216,
    lng: -6.049,
    day: 1,
    description:
      "Travel through the scenic Valley of Roses, known for its beautiful landscapes, villages, and rose fields.",
  },

  {
    id: "dades-valley",
    name: "Dades Valley",
    lat: 31.45,
    lng: -5.95,
    day: 1,
    description:
      "Reach the Dades Valley and enjoy its dramatic rock formations, red mountains, and traditional villages.",
  },

  {
    id: "dades-gorge",
    name: "Dades Gorge",
    lat: 31.443,
    lng: -5.974,
    day: 1,
    description:
      "Explore the spectacular Dades Gorge, famous for its winding mountain road and impressive rock formations.",
  },

  {
    id: "tinghir",
    name: "Tinghir",
    lat: 31.5147,
    lng: -5.5328,
    day: 2,
    description:
      "Pass through Tinghir, an oasis town surrounded by palm groves, mountains, and traditional villages.",
  },

  {
    id: "todra-valley",
    name: "Todra Valley",
    lat: 31.55,
    lng: -5.59,
    day: 2,
    description:
      "Discover the Todra Valley, known for its green palm oasis and dramatic mountain scenery.",
  },

  {
    id: "todra-gorge",
    name: "Todra Gorge",
    lat: 31.585,
    lng: -5.59,
    day: 2,
    description:
      "Walk through the impressive Todra Gorge between towering limestone cliffs in southern Morocco.",
  },

  {
    id: "erfoud",
    name: "Erfoud",
    lat: 31.4353,
    lng: -4.2326,
    day: 2,
    description:
      "Visit Erfoud, a desert town famous for fossils, fossils products, and its location near the Sahara.",
  },

  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 2,
    description:
      "Arrive in Merzouga, the gateway to the Sahara Desert and the golden Erg Chebbi dunes.",
  },

  {
    id: "erg-chebbi",
    name: "Erg Chebbi Dunes",
    lat: 31.1477,
    lng: -3.9786,
    day: 2,
    description:
      "Experience the golden Erg Chebbi sand dunes with a camel trek and beautiful Sahara sunset.",
  },

  {
    id: "sahara-desert-camp",
    name: "Sahara Desert Camp",
    lat: 31.153,
    lng: -3.968,
    day: 2,
    description:
      "Spend the night in a desert camp, enjoy a traditional dinner and Berber music, and sleep under the stars.",
  },

  {
    id: "merzouga-sunrise",
    name: "Merzouga Sunrise",
    lat: 31.1477,
    lng: -3.9786,
    day: 3,
    description:
      "Wake up early to watch the sunrise over the golden Erg Chebbi dunes before beginning the journey back to Marrakech.",
  },

  {
    id: "ouarzazate-return",
    name: "Ouarzazate",
    lat: 30.9189,
    lng: -6.8934,
    day: 3,
    description:
      "Pass through Ouarzazate again during the return journey from the Sahara Desert to Marrakech.",
  },

  {
    id: "high-atlas-return",
    name: "High Atlas Mountains",
    lat: 31.343,
    lng: -7.379,
    day: 3,
    description:
      "Cross the High Atlas Mountains again before continuing toward Marrakech.",
  },

  {
    id: "marrakech-return",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 3,
    description:
      "Arrive back in Marrakech in the evening after your 3-day Morocco desert tour.",
  },
];

// Tour FAQs Data
const faqs = {
  head: [
    {
      title: "Frequently Asked Questions about the 3-Day Marrakech to Merzouga Desert Tour",
      description:"Find answers to the most common questions about our 3-Day Marrakech to Merzouga Desert Tour. Learn more about the journey from Marrakech to the Sahara Desert, including driving time, accommodation, camel trekking, desert camps, meals, what to bring, family travel, and the main places visited along the way. This FAQ guide also explains what to expect when crossing the High Atlas Mountains, visiting Ait Ben Haddou, Ouarzazate, Dades Valley, Todra Gorge, and Erfoud, and reaching the golden Erg Chebbi dunes in Merzouga. Whether you are planning your first Morocco desert tour or comparing different Marrakech to Merzouga trips, these answers will help you prepare for a comfortable and memorable Sahara Desert experience."
    }
  ],
  faqs: [
    {
      question: "Is the 3-day tour from Marrakech to Merzouga too long?",
      answer:
        "The 3-day Marrakech to Merzouga desert tour includes some long driving days, especially because Marrakech and Merzouga are far apart. However, the journey is divided into different stops and experiences, including the High Atlas Mountains, Ait Ben Haddou, Ouarzazate, the Dades Valley, Todra Gorge, and Erfoud. There are regular stops along the way to enjoy the views, take photos, walk around historic sites, and have breaks. If you have limited time in Morocco and want to visit the Sahara Desert from Marrakech, three days is a popular option.",
    },

    {
      question: "Is the Marrakech to Merzouga desert tour private or shared?",
      answer:
        "The 3-day Marrakech to Merzouga tour can be arranged as a private tour or, depending on availability, as a shared group tour. A private Morocco desert tour gives you more flexibility with departure times, stops, sightseeing, and the pace of the journey. Shared tours are a good option for travelers looking for a more affordable way to visit the Sahara Desert. Contact us with your travel dates and group size to find the best option.",
    },

    {
      question: "Is camel trekking included in the 3-day Marrakech to Merzouga tour?",
      answer:
        "Yes, a camel trek in Merzouga is included in this desert tour. When you reach the Erg Chebbi dunes, you will meet your camel guide and ride across the golden Sahara sand dunes, usually around sunset. The camel trek takes you to the desert camp where you will spend the night. If you prefer not to ride a camel, a 4x4 transfer to the camp can be arranged.",
    },

    {
      question: "Where do we stay during the Marrakech to Merzouga desert tour?",
      answer:
        "You will spend the first night in a hotel or riad in the Dades Valley and the second night in a desert camp near Merzouga. The desert camp allows you to experience the Sahara at night, enjoy a traditional Moroccan dinner, listen to local music, and spend the night surrounded by the Erg Chebbi dunes. Accommodation options may vary depending on the package and availability.",
    },

    {
      question: "Is the desert camp in Merzouga private or shared?",
      answer:
        "Most desert camps offer private tents, but shared accommodation can also be available depending on the camp and package. If you prefer more privacy and comfort, you can request a private tent. When booking your Marrakech to Merzouga desert tour, let us know your preferred accommodation style so we can recommend the most suitable option.",
    },

    {
      question: "Can I go to the desert camp without riding a camel?",
      answer:
        "Yes. Camel trekking is an important part of the Merzouga desert experience, but it is not the only way to reach the desert camp. If you do not want to ride a camel, you can usually reach the camp by 4x4 vehicle. This can be a good option for travelers who are not comfortable riding a camel or simply prefer a different experience.",
    },

    {
      question: "What should I bring for the 3-day Marrakech to Merzouga tour?",
      answer:
        "We recommend bringing comfortable walking shoes, light and comfortable clothes, sunscreen, sunglasses, a hat or cap, a reusable water bottle, and a camera or smartphone. A warm jacket or sweater is also recommended because temperatures can become cool at night in the desert, especially during winter. It is also useful to bring a small day bag for your desert camp night and a power bank for your phone.",
    },

    {
      question: "Is the Sahara Desert cold at night?",
      answer:
        "Yes, temperatures in the Sahara Desert can drop significantly at night, especially during the winter months. Although the days can be warm and sunny, evenings and early mornings around Merzouga can feel cold. We recommend bringing a warm jacket, sweater, or other warm layer so you can comfortably enjoy your evening at the desert camp and watch the sunrise.",
    },

    {
      question: "Are meals included in the Marrakech to Merzouga tour?",
      answer:
        "Yes. Breakfasts and dinners are included during the 3-day Marrakech to Merzouga desert tour. This includes dinner at your accommodation in the Dades Valley and dinner at the desert camp in Merzouga, as well as breakfast each morning. Lunches and drinks are not included, giving you the flexibility to choose where and what you would like to eat during the journey.",
    },

    {
      question: "Are lunch and drinks included in the desert tour?",
      answer:
        "No. Lunches and drinks are not included in the tour price. There are several opportunities to stop at local restaurants and cafés along the Marrakech to Merzouga route. You can choose your lunch during the journey according to your preferences. We also recommend carrying a reusable water bottle and some cash for drinks and small purchases.",
    },

    {
      question: "Is the road from Marrakech to Merzouga safe?",
      answer:
        "Yes. The Marrakech to Merzouga route is a popular tourist route and is regularly traveled by visitors exploring southern Morocco. Your experienced driver will handle the mountain roads and long-distance sections carefully. The route includes the High Atlas Mountains, valleys, and desert roads, with regular stops along the way. Driving conditions can vary, so your driver will adjust the journey when necessary.",
    },

    {
      question: "Is the 3-day Marrakech to Merzouga tour suitable for families with children?",
      answer:
        "Yes. Families with children can enjoy the Marrakech to Merzouga desert tour. Children can experience the Atlas Mountains, Ait Ben Haddou, Todra Gorge, camel trekking, and a night in the Sahara Desert. Because the tour includes some long driving days, we recommend considering your children's ages and comfort before booking. A private tour can also give families more flexibility with stops and breaks.",
    },

    {
      question: "What type of vehicle is used for the Marrakech to Merzouga tour?",
      answer:
        "The vehicle depends on the size of your group and the type of tour you choose. Private tours generally use a comfortable, clean, and air-conditioned 4x4 vehicle or minivan, while larger groups may travel in an air-conditioned minibus. The vehicle is suitable for the long journey through the Atlas Mountains, valleys, and desert areas.",
    },

    {
      question: "What time does the Marrakech to Merzouga tour start?",
      answer:
        "The tour usually starts around 7:30 to 8:00 in the morning from your hotel or riad in Marrakech. An early departure is recommended because the first day includes several important stops and a long drive toward the Dades Valley. Your exact pickup time can be confirmed before the tour according to your accommodation and travel arrangements.",
    },

    {
      question: "Do I need to bring cash on the Marrakech to Merzouga tour?",
      answer:
        "Yes, carrying some Moroccan dirhams in cash is recommended. You may need cash for lunches, drinks, tips, small purchases, souvenirs, or optional activities. Credit cards are not accepted everywhere, particularly in smaller villages and some stops along the desert route. It is better to have some cash available during the journey.",
    },

    {
      question: "Can I see the sunset and sunrise in the Merzouga desert?",
      answer:
        "Yes. One of the highlights of the Marrakech to Merzouga desert tour is watching the sunset over the Erg Chebbi dunes during the camel trek. The following morning, you can wake up early to watch the sunrise over the Sahara Desert before breakfast. The changing colors of the sand and the peaceful desert landscape make both moments special.",
    },

    {
      question: "What are the main stops on the Marrakech to Merzouga tour?",
      answer:
        "The 3-day Marrakech to Merzouga desert tour passes through some of the most famous destinations in southern Morocco. Main stops and attractions include the High Atlas Mountains, Tizi n'Tichka Pass, Ait Ben Haddou, Ouarzazate, Skoura, the Valley of Roses, Dades Valley, Todra Gorge, Tinghir, Erfoud, Merzouga, and the Erg Chebbi sand dunes.",
    },

    {
      question: "Does the tour visit Ait Ben Haddou and Ouarzazate?",
      answer:
        "Yes. Ait Ben Haddou and Ouarzazate are important stops on the first day of the Marrakech to Merzouga desert tour. You can explore the historic Ait Ben Haddou Kasbah and then continue to Ouarzazate, often called the Gateway to the Desert. The route then continues through Skoura and the Valley of Roses toward the Dades Valley.",
    },

    {
      question: "Does the tour visit Todra Gorge?",
      answer:
        "Yes. Todra Gorge is one of the main attractions visited on the second day. The gorge is famous for its tall limestone cliffs and narrow passage. You will have time to walk around the area, enjoy the scenery, and take photos before continuing toward Erfoud and Merzouga.",
    },

    {
      question: "How far is Merzouga from Marrakech?",
      answer:
        "Marrakech and Merzouga are separated by a long road journey across southern Morocco. The exact driving distance and travel time can vary depending on the route, stops, road conditions, and traffic. This is why the 3-day itinerary includes overnight stops in the Dades Valley and Merzouga instead of trying to make the journey in one day.",
    },

    {
      question: "Can the 3-day Marrakech to Merzouga itinerary be customized?",
      answer:
        "Yes. Private Marrakech to Merzouga tours can usually be customized according to your travel dates, group size, interests, accommodation preferences, and available time. You can discuss additional stops, preferred hotels or desert camps, and the pace of the journey with your tour operator before booking.",
    },

    {
      question: "What makes the 3-day Marrakech to Merzouga tour special?",
      answer:
        "This Morocco desert tour combines several of southern Morocco's most famous landscapes and attractions in one journey. You will cross the High Atlas Mountains, visit Ait Ben Haddou, explore Ouarzazate and the Dades Valley, walk through Todra Gorge, travel through desert landscapes, and finish with a camel trek and overnight stay in the Sahara Desert near Merzouga.",
    },
  ],
}

// Tour Highlights Data
const tour = {
  title: "What happens each day for 3 Days Marrakech to Merzouga Desert Tour?",

  highlights: [
    "Drive across the High Atlas Mountains and enjoy beautiful views.",
    "Cross the famous Tizi n'Tichka mountain pass.",
    "Visit the old village of Ait Benhaddou, a famous UNESCO World Heritage Site.",
    "Stop in Ouarzazate, known as the “Gateway to the Desert.”",
    "Drive through the beautiful Valley of Roses and traditional Berber villages.",
    "Explore the scenic Dades Valley and its dramatic rock formations.",
    "Walk inside the tall rock walls of Todra Gorge.",
    "Enjoy scenic views of the Todra Valley and its palm-filled oasis.",
    "Travel through the Ziz Valley and see its green palm groves.",
    "Reach Merzouga and discover the golden Erg Chebbi sand dunes.",
    "Enjoy a camel trek across the Sahara Desert at sunset.",
    "Watch the sunset over the Erg Chebbi dunes.",
    "Spend one night in a comfortable hotel in the Dades Valley.",
    "Spend one unforgettable night in a desert camp near Merzouga.",
    "Enjoy a traditional Moroccan dinner in the Sahara.",
    "Listen to local Berber music around the campfire.",
    "Wake up early to watch the beautiful Sahara sunrise.",
    "Experience the peaceful atmosphere of the Moroccan Sahara.",
    "Discover traditional Moroccan culture, food, and local hospitality.",
    "Experience the highlights of a 3-day desert tour from Marrakech to Merzouga.",
  ],
}; 



const itineraryRoute = [
  {
    day: "Day 1",
    route: "Marrakech → Ait Ben Haddou → Ouarzazate → Dades Valley",
    target: "day-1",
  },
  {
    day: "Day 2",
    route: "Dades Valley → Todra Gorge → Erfoud → Merzouga",
    target: "day-2",
  },
  {
    day: "Day 3",
    route: "Merzouga → Sahara Desert → Ouarzazate → Marrakech",
    target: "day-3",
  },
];

//this apart for reviews
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
        "Our 3-day Marrakech to Merzouga desert tour was one of the best experiences of our Morocco trip. We loved crossing the High Atlas Mountains, visiting Ait Ben Haddou and Ouarzazazate, and exploring the Dades Valley. The camel trek into the Erg Chebbi dunes at sunset was unforgettable, and the desert camp was a beautiful way to experience the Sahara.",
    },

  {
    id: 2,
    name: "James Anderson",
    avatar: "/images/toursits-comes-to-morocco.jpeg",
    flag: "🇬🇧",
    rating: 5,
    date: "1 month ago",
    review:
      "A fantastic Marrakech to Merzouga tour from beginning to end. Our driver was friendly and knowledgeable, and we enjoyed the stops at Ait Ben Haddou and Todra Gorge. The highlight was arriving in Merzouga, riding camels across the golden Erg Chebbi dunes, watching the Sahara sunset, and spending the night in the desert camp.",
  },

  {
    id: 3,
    name: "Sophie Martin",
    avatar: "/images/toursits-comes-to-morocco.jpeg",
    flag: "🇨🇦",
    rating: 5,
    date: "1 month ago",
    review:
      "We highly recommend this 3-day Morocco desert tour from Marrakech. The journey through the Atlas Mountains, Dades Valley, Todra Gorge, and southern Morocco was beautiful. Everything was well organized, from the comfortable transportation and hotel in Dades to the camel trekking experience and overnight stay in the Sahara Desert.",
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
      "This was an amazing way to experience the Sahara Desert in a short time. The 3-day Marrakech to Merzouga itinerary included incredible landscapes, Ait Ben Haddou, Ouarzazate, Todra Gorge, and the beautiful Erg Chebbi dunes. The camel ride at sunset and sunrise in the desert were unforgettable. Highly recommended for anyone visiting Morocco.",
  },
]
 
};

//tour data faqs for schema
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

// Tour Schema Data
const tourSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://moorishtour.com/#website",
      "url": "https://moorishtour.com/",
      "name": "Moorish Tour",
      "publisher": {
        "@id": "https://moorishtour.com/#organization"
      }
    },

    {
      "@type": "TravelAgency",
      "@id": "https://moorishtour.com/#organization",
      "name": "Moorish Tour",
      "url": "https://moorishtour.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://moorishtour.com/moorishtours3white.png"
      },
      "image": propsObj.imageurl,
      "telephone": "+212628812520",
      "email": "moorishtour@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marrakech",
        "addressRegion": "Marrakech-Safi",
        "addressCountry": "MA"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Morocco"
        },
        {
          "@type": "City",
          "name": "Marrakech"
        },
        {
          "@type": "Place",
          "name": "Merzouga"
        }
      ]
    },

    {
      "@type": "WebPage",
      "@id": propsObj.url + "#webpage",
      "url": propsObj.url,
      "name": propsObj.title,
      "description": propsObj.description,
      "isPartOf": {
        "@id": "https://moorishtour.com/#website"
      },
      "about": {
        "@id": propsObj.url + "#tour"
      },
      "publisher": {
        "@id": "https://moorishtour.com/#organization"
      }
    },

    {
      "@type": "TouristTrip",
      "@id": propsObj.url + "#tour",

      "name": propsObj.title,

      "url": propsObj.url,

      "description": "Enjoy a 3-day Marrakech to Merzouga desert tour through the High Atlas Mountains, Ait Ben Haddou, Ouarzazate, Dades Valley, Todra Gorge and Erfoud before reaching Merzouga and the golden Erg Chebbi dunes. Experience camel trekking, a Sahara sunset, a desert camp and sunrise in the Moroccan Sahara.",

      "image": [
        MarrakechToMerzouga3Day
      ],

      "touristType": [
        "Couples",
        "Families",
        "Solo Travelers",
        "Adventure Travelers"
      ],

      "tripOrigin": {
        "@type": "Place",
        "name": "Marrakech",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Marrakech",
          "addressCountry": "MA"
        }
      },

      "provider": {
        "@id": "https://moorishtour.com/#organization"
      },

      "itinerary": {
        "@type": "ItemList",
        "numberOfItems": 15,

        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Place",
              "name": "Marrakech",
              "description": "Departure from Marrakech."
            }
          },

          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Place",
              "name": "Tizi n'Tichka Pass",
              "description": "Cross the famous mountain pass through the High Atlas Mountains."
            }
          },

          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "TouristDestination",
              "name": "Ait Ben Haddou",
              "description": "Visit the historic UNESCO World Heritage Kasbah of Ait Ben Haddou."
            }
          },

          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Place",
              "name": "Ouarzazate",
              "description": "Discover Ouarzazate, known as the Gateway to the Desert."
            }
          },

          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Place",
              "name": "Skoura",
              "description": "Drive through the Skoura oasis and its palm groves."
            }
          },

          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Place",
              "name": "Valley of Roses",
              "description": "Travel through the scenic Valley of Roses in southern Morocco."
            }
          },

          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "TouristDestination",
              "name": "Dades Valley",
              "description": "Explore the beautiful Dades Valley and its dramatic rock formations."
            }
          },

          {
            "@type": "ListItem",
            "position": 8,
            "item": {
              "@type": "Place",
              "name": "Tinghir",
              "description": "Pass through the oasis town of Tinghir."
            }
          },

          {
            "@type": "ListItem",
            "position": 9,
            "item": {
              "@type": "TouristDestination",
              "name": "Todra Gorge",
              "description": "Walk between the impressive limestone cliffs of Todra Gorge."
            }
          },

          {
            "@type": "ListItem",
            "position": 10,
            "item": {
              "@type": "Place",
              "name": "Erfoud",
              "description": "Visit Erfoud, a desert town famous for fossils."
            }
          },

          {
            "@type": "ListItem",
            "position": 11,
            "item": {
              "@type": "TouristDestination",
              "name": "Merzouga",
              "description": "Reach Merzouga, the gateway to the Sahara Desert."
            }
          },

          {
            "@type": "ListItem",
            "position": 12,
            "item": {
              "@type": "TouristDestination",
              "name": "Erg Chebbi",
              "description": "Experience the golden Erg Chebbi sand dunes by camel."
            }
          },

          {
            "@type": "ListItem",
            "position": 13,
            "item": {
              "@type": "TouristDestination",
              "name": "Sahara Desert Camp",
              "description": "Spend the night in a desert camp near the Erg Chebbi dunes."
            }
          },

          {
            "@type": "ListItem",
            "position": 14,
            "item": {
              "@type": "Place",
              "name": "High Atlas Mountains",
              "description": "Cross the High Atlas Mountains on the return journey."
            }
          },

          {
            "@type": "ListItem",
            "position": 15,
            "item": {
              "@type": "Place",
              "name": "Marrakech",
              "description": "Return to Marrakech at the end of the tour."
            }
          }
        ]
      },

      "offers": {
        "@type": "Offer",
        "url": propsObj.url ,
        "priceCurrency": "EUR",
        "price": "120",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://moorishtour.com/#organization"
        }
      },

      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Duration",
          "value": "3 days"
        },
        {
          "@type": "PropertyValue",
          "name": "Departure",
          "value": "Marrakech"
        },
        {
          "@type": "PropertyValue",
          "name": "Destination",
          "value": "Merzouga"
        },
        {
          "@type": "PropertyValue",
          "name": "Camel Trekking",
          "value": "Included"
        },
        {
          "@type": "PropertyValue",
          "name": "Desert Camp",
          "value": "Included"
        },
        {
          "@type": "PropertyValue",
          "name": "Dades Valley Hotel",
          "value": "Included"
        },
        {
          "@type": "PropertyValue",
          "name": "Breakfast",
          "value": "Included"
        },
        {
          "@type": "PropertyValue",
          "name": "Dinner",
          "value": "Included"
        },
        {
          "@type": "PropertyValue",
          "name": "Transportation",
          "value": "Air-conditioned vehicle"
        }
      ]
    }
  ]
};

// tourtrip itinerary schema 
// Tour Page Component


export default function pageTour() {


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
      price={propsObj.price}
      reviewsRate={propsObj.reviewsRate}
      maxPeople={propsObj.maxPeople}
      accommodation={propsObj.accommodation}
      activities={propsObj.activities}
      />
      <ReviewsSection url={propsObj.url}  reviewRate={reviews.reviewRate} review={reviews.review}  />

      <TourFeatures />

      <TourNavigation />

      <div className="w-[98%] mx-auto py-5">
        <div className="md:grid lg:grid-cols-4 gap-4 ">
          <div className="lg:col-span-3">
          <section className="my-10 py-10 scroll-mt-42 " id="overview">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                    What is the 3 days Marrakech to Merzouga desert tour?
                </h2>
               

              </div>
               <p>The 3 days Marrakech to Merzouga desert tour is a short Morocco Sahara itinerary that connects Marrakech with Merzouga and the Erg Chebbi dunes. The route crosses the High Atlas Mountains and includes stops at Ait Ben Haddou, Ouarzazate, Dades Valley and Todra Gorge before reaching the Sahara Desert. Travelers can enjoy a camel trek, Sahara sunset and an overnight desert camp before returning to Marrakech.</p>
           <Overview highlightsOverview={highlightsOverview}>
  <>
    Experience the best of southern Morocco on a{" "}
    <strong>3-day Marrakech to Merzouga desert tour</strong> through the{" "}
    <PlaceHoverCard place="high-atlas-mountains">
      High Atlas Mountains
    </PlaceHoverCard>
    , ancient kasbahs, beautiful valleys and the Sahara Desert. This short
    Morocco desert tour is a good choice for travelers who want to discover
    several different landscapes in a limited amount of time while traveling
    from{" "}
    <PlaceHoverCard place="marrakech">
      Marrakech
    </PlaceHoverCard>{" "}
    to{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>{" "}
    and the golden{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi dunes
    </PlaceHoverCard>
    .

    <br />
    <br />

    The journey begins in{" "}
    <PlaceHoverCard place="marrakech">
      Marrakech
    </PlaceHoverCard>
    , one of Morocco&apos;s most visited cities and an important starting point
    for trips toward the south. After leaving the city, the road climbs into
    the{" "}
    <PlaceHoverCard place="high-atlas-mountains">
      High Atlas Mountains
    </PlaceHoverCard>
    , where the scenery changes quickly from the plains around Marrakech to
    steep mountain slopes, valleys and traditional villages.

    <br />
    <br />

    The route crosses{" "}
    <PlaceHoverCard place="tizi-ntichka">
      Tizi n&apos;Tichka Pass
    </PlaceHoverCard>
    , one of the best-known mountain roads in Morocco. From the pass, the tour
    continues toward{" "}
    <PlaceHoverCard place="ait-ben-haddou">
      Ait Ben Haddou
    </PlaceHoverCard>
    , a historic fortified settlement in southern Morocco and an important
    cultural stop on many Marrakech to Merzouga desert tours.

    <br />
    <br />

    After visiting Ait Ben Haddou, continue toward{" "}
    <PlaceHoverCard place="ouarzazate">
      Ouarzazate
    </PlaceHoverCard>
    , often used as a gateway between the High Atlas Mountains and the desert
    regions of southeastern Morocco. From Ouarzazate, the road passes through{" "}
    <PlaceHoverCard place="skoura">
      Skoura
    </PlaceHoverCard>{" "}
    and{" "}
    <PlaceHoverCard place="rose-valley">
      Rose Valley
    </PlaceHoverCard>{" "}
    before reaching{" "}
    <PlaceHoverCard place="dades-valley">
      Dades Valley
    </PlaceHoverCard>
    .

    <br />
    <br />

    The{" "}
    <PlaceHoverCard place="dades-valley">
      Dades Valley
    </PlaceHoverCard>{" "}
    is one of the most scenic areas on the route, with red rock formations,
    traditional villages, kasbahs and mountain roads. The following day, the
    journey continues through{" "}
    <PlaceHoverCard place="tinghir">
      Tinghir
    </PlaceHoverCard>{" "}
    and toward{" "}
    <PlaceHoverCard place="todra-gorge">
      Todra Gorge
    </PlaceHoverCard>
    , where travelers can walk between the high limestone walls and enjoy a
    short break from the long road journey.

    <br />
    <br />

    From Todra Gorge, the road continues through southeastern Morocco toward{" "}
    <PlaceHoverCard place="erfoud">
      Erfoud
    </PlaceHoverCard>
    , a desert gateway town known for the fossil heritage of the surrounding
    region. The tour then continues toward{" "}
    <PlaceHoverCard place="rissani">
      Rissani
    </PlaceHoverCard>
    , a historic market town near Merzouga with a long connection to trade in
    the Tafilalet region.

    <br />
    <br />

    In the afternoon, you arrive in{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>
    , the small desert village located beside the famous{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi dunes
    </PlaceHoverCard>
    . This is the main Sahara experience of the tour. The large golden sand
    dunes create one of the most recognizable desert landscapes in Morocco
    and are a popular place for sunset, sunrise, camel trekking and overnight
    desert camps.

    <br />
    <br />

    In Merzouga, you can ride a camel across the{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi dunes
    </PlaceHoverCard>
    , watch the sunset over the Sahara and continue to your desert camp. After
    dinner, the evening is usually spent enjoying the quiet desert atmosphere
    and local music before sleeping in a private tent near the dunes.

    <br />
    <br />

    The next morning begins with sunrise over{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>
    . After breakfast, the return journey takes you back through southern
    Morocco toward{" "}
    <PlaceHoverCard place="ouarzazate">
      Ouarzazate
    </PlaceHoverCard>{" "}
    and the{" "}
    <PlaceHoverCard place="high-atlas-mountains">
      High Atlas Mountains
    </PlaceHoverCard>{" "}
    before arriving again in{" "}
    <PlaceHoverCard place="marrakech">
      Marrakech
    </PlaceHoverCard>
    .

    <br />
    <br />

    This route combines mountains, UNESCO-listed heritage, kasbahs, valleys,
    oasis landscapes and the Sahara in only three days. It is a fast-paced
    itinerary, but it is one of the most popular options for travelers who
    have limited time and still want to experience{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>{" "}
    and the Moroccan Sahara from Marrakech.
  </>
</Overview>
           
          </section>

          <section
            id="tour-route"
            className="py-5"
            aria-labelledby="tour-route-title"
          >
        <div className="mx-auto  px-4">

          <h2
            id="tour-route-title"
            className="text-3xl font-bold"
          >
            3 Days Marrakech to Merzouga Tour Route 
          </h2>

          <p className="mt-2 text-gray-800">
            A quick overview of the route for this 3-day Marrakech to Merzouga
            desert tour through the High Atlas Mountains, southern Morocco and
            the Sahara Desert, this table is short answering to those questions :  How many days? and Where does it go?.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-amber-600 bg-gray-50">
                  <th className="px-4 py-4 text-amber-700 font-semibold">
                    Day
                  </th>

                  <th className="px-4 py-4  text-amber-700 font-semibold">
                    Marrakech to Merzouga Tour Route
                  </th>
                </tr>
              </thead>

              <tbody>
                {itineraryRoute.map((item) => (
                  <tr
                    key={item.day}
                    className="border-b border-amber-600 last:border-b-0"
                  >
                    <td className="whitespace-nowrap text-amber-700 px-4 py-4 font-semibold">
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

          <section className="scroll-mt-42 py-6" id="highlights">
            <TourHighlights title={tour.title} highlights={tour.highlights} />
          </section>

          <section className="scroll-mt-42  py-20" id="itinerary">
          <TourItinerary  title={propsObj.title} days={itinerary} />

          </section>
          <section
            id="tourPrice"
            className="py-10 scroll-mt-42"
            aria-labelledby="tour-price-title"
          >
       <div className="mx-auto  ">
        <div className="rounded-2xl border border-gray-200 bg-white p-6   md:p-8">

          <h2
            id="tour-price-title"
            className="text-2xl font-bold tracking-tight"
          >
            What Does the 3-Day Marrakech to Merzouga Desert Tour Cost?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            The price of the 3-day Marrakech to Merzouga desert tour depends
            on the number of travelers and the selected tour option. Private
            tours and shared group tours may have different prices. The tour
            includes transportation, accommodation, meals, camel trekking,
            and an overnight stay in the Merzouga Sahara Desert camp.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border  border-gray-200 px-5 py-4">
            <span className="text-xl font-bold text-gray-800">
              From
            </span>

            <span className="text-3xl font-bold text-amber-700">
              120
            </span>

            <span className="text-sm text-amber-700">
              EURO / person
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            The final price may vary depending on the group size, travel date,
            accommodation category, and tour option selected.
          </p>

        </div>
      </div>
              </section>

          <section className=" py-10 scroll-mt-42" id="included">
         
            <TourInclusions
            title={propsObj.title}
              included={tourinclude.included}
              notIncluded={tourinclude.notIncluded}
            />
          </section>

      
          <section className="py-10 scroll-mt-42 " id="info">
             <WhatToBring
              description="For your 3 days Marrakech to Merzouga desert tour, it is important to pack for different weather and landscapes. During the journey, you will cross the High Atlas Mountains, visit Ait Ben Haddou and the Dades Valley, explore Todra Gorge, and spend a night in the Sahara Desert near Merzouga. Comfortable clothing and walking shoes are useful for sightseeing and walking around the kasbahs and valleys, while sun protection will help during the warmer parts of the day. Nights in the Sahara can be cool, especially during the colder months, so bringing a light jacket or warm layer is recommended. Keep your luggage light and bring the essentials you will need for the three-day Morocco desert tour."
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
                  text: "Warm jacket or sweater for the desert night",
                  icon: ShieldCheckIcon,
                },
                {
                  text: "Sunscreen and sunglasses",
                  icon: SunIcon,
                },
                {
                  text: "Hat or cap for sun protection",
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
                  text: "Small day bag for the desert camp",
                  icon: BriefcaseIcon,
                },
                {
                  text: "Personal toiletries and essential medication",
                  icon: ShieldCheckIcon,
                },
                {
                  text: "Power bank for your phone and camera",
                  icon: BoltIcon,
                },
              ]}
            />

          </section>

          <section className="py-10 scroll-mt-42" id="map">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">
            Map & Route for 3 Days Desert Tour from Marrakech
           </h2>

            <TourMap locations={locations} />
          </section>

          <section className="py-15 scroll-mt-42" id="faqs">
         <TourFAQs head={faqs.head} faqs={faqs.faqs} />

          </section>
              
          

          </div>
          <div className="lg:col-span-1 my-10 py-10 mx-7 lg:mx-0">
            <TourSidebar  price={propsObj.price}/>
          </div>
          
        </div>
        
        <section
      id="book-tour"
      className="py-12"
      aria-labelledby="final-tour-cta-title"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">

          <h2
            id="final-tour-cta-title"
            className="text-amber-700 text-3xl font-bold tracking-tight"
          >
            Ready to Experience the Sahara?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Book your 3-day Marrakech to Merzouga desert tour and travel from
            Marrakech through the High Atlas Mountains to the golden Erg Chebbi
            dunes. Discover Ait Ben Haddou, Ouarzazate, Dades Valley and Todra
            Gorge before experiencing camel trekking and a night in the Sahara
            Desert.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="#reservation-form"
              className="inline-flex items-center justify-center bg-amber-700 text-white rounded-lg px-6 py-3 font-semibold shadow-sm transition hover:opacity-90"
            >
              Check Availability & Book
            </a>

            <a
              href="#itinerary"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-50"
            >
              View Full Itinerary
            </a>

          </div>

          <p className="mt-5 text-sm text-gray-500">
            3 Days · 2 Nights · Marrakech to Merzouga · Sahara Desert Experience
          </p>

        </div>
      </div>
    </section>
      </div>
      <YouMayAlsoLike
            tours={[
              {
                title: "4 Days Marrakech to Mezouga desert tour",
                href: "/tour/4-days-tour-from-marrakech-to-merzouga/",
                image: MarrakechToMerzouga4Day,
                duration: "4 DAYS",
              },

              {
                title: "4 Days Tour from Marrakech to fes",
                href: "/tour/4-days-tour-from-marrakech-to-fes/",
                image: MarrakechToFes4Day,
                duration: "4 DAYS",
              },

              {
                title: "Morocco itinerary 7 days from marrakech",
                href: "/tour/morocco-itinerary-7-days-from-marrakech/",
                image: MarrakechToMerzouga7Day,
                duration: "7 DAYS",
              },

              {
                title: "Morocco itinerary 10 days from marrakech",
                href: "/tour/morocco-itinerary-10-days-from-marrakech/",
                image: MarrakechToMerzouga10Day,
                duration: "10 DAYS",
              },
            ]}
          />
    </div>
    </>
  );
}
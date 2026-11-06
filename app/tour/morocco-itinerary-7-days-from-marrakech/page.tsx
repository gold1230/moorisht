import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";
import Morocco7DaysImage from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";
import MarrakechToMerzouga4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";
import MarrakechToFes4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
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

const propsObj = {
  image: Morocco7DaysImage,
  imagetitle: "Morocco Itinerary 7 Days from Marrakech",
  imageurl:
    "https://moorishtour.com/tours/related/morocco-itinerary-7-days-from-marrakech.jpg",
  imagerRobbicon: "Nature, Sahara & Culture",
  type: "Private Morocco Tour",
  url:
    "https://moorishtour.com/tour/morocco-itinerary-7-days-from-marrakech/",
  title: "Morocco Itinerary 7 Days from Marrakech",
  description:
    "Explore Morocco in 7 days from Marrakech with Ouzoud Waterfalls, dinosaur footprints near Demnate, Dades Valley, Merzouga Sahara, Ait Ben Haddou and the High Atlas.",
  overeview:
    "A 7-day Morocco itinerary from Marrakech combining Ouzoud Waterfalls, mountain villages, dinosaur footprints near Demnate, Dades Valley, Todra Gorge, Merzouga Sahara, a cooking experience, Ait Ben Haddou and the High Atlas.",
  duration: "7 Days / 6 Nights",
  route:
    "Marrakech → Ouzoud Waterfalls → Demnate → Dades Valley → Todra Gorge → Merzouga → Rissani → Ouarzazate → Ait Ben Haddou → High Atlas → Marrakech",
  reviews: "4",
  reviewsRate: "5",
  price: 150,
  maxPeople: "Private Tour",
  accommodation: "Riads / Hotels / Luxury Desert Camp",
  activities: "Waterfalls, Culture, Camel Trekking, Cooking & Nature",
};

export const metadata: Metadata = {
  title: "Morocco Itinerary 7 Days from Marrakech | Sahara & Ouzoud",
  description:
    "Enjoy a 7-day Morocco itinerary from Marrakech with Ouzoud Waterfalls, Dades, Todra Gorge, Merzouga Sahara, Ait Ben Haddou and the Atlas Mountains.",
  keywords: [
    "Morocco itinerary 7 days from Marrakech",
    "7 day Morocco itinerary",
    "7 days in Morocco",
    "7 day itinerary Morocco",
    "Morocco 7 days",
    "7 day tour Morocco",
    "7 days Morocco tour from Marrakech",
    "Morocco in 7 days from Marrakech",
    "7 day trip to Morocco",
    "best 7 day Morocco itinerary",
    "Marrakech 7 day tour",
    "7 day Marrakech desert tour",
    "Marrakech to Merzouga 7 days",
    "Marrakech Ouzoud Waterfalls tour",
    "Ouzoud Waterfalls Morocco itinerary",
    "Demnate dinosaur footprints Morocco",
    "Berber villages Morocco tour",
    "Dades Valley Morocco tour",
    "Todra Gorge Morocco tour",
    "Merzouga desert tour from Marrakech",
    "Merzouga camel trekking",
    "luxury desert camp Merzouga",
    "Morocco cooking class Merzouga",
    "Ait Ben Haddou Marrakech tour",
    "High Atlas Mountains tour",
    "Morocco Sahara 7 day itinerary",
    "private Morocco tour 7 days",
  ],
  alternates: { canonical: propsObj.url },
  openGraph: {
    title: "Morocco Itinerary 7 Days from Marrakech | Sahara, Ouzoud & Atlas",
    description:
      "Discover Ouzoud Waterfalls, Amazigh villages, Dades, Todra Gorge, Merzouga Sahara, Ait Ben Haddou and the High Atlas in seven days from Marrakech.",
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
  robots: { index: true, follow: true },
};

const highlightsOverview = [
  {
    icon: SunIcon,
    title: "Ouzoud Waterfalls",
    subtitle: "Nature, walking & viewpoints",
  },
  {
    icon: MapIcon,
    title: "Southern Valleys",
    subtitle: "Dades, Todra & Amazigh villages",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle: "Camel trek & luxury desert camp",
  },
  {
    icon: BuildingLibraryIcon,
    title: "Ait Ben Haddou",
    subtitle: "Historic ksar & Atlas route",
  },
];

const itinerary = [
  {
    title: "Day 1: Marrakech – Ouzoud Waterfalls",
    description:
      "Your Morocco itinerary 7 days from Marrakech begins with morning pickup from your hotel or riad. Leave the city and travel northeast through countryside, small towns and agricultural landscapes toward Ouzoud Waterfalls, one of Morocco's best-known natural attractions. After arrival, follow walking paths and viewpoints around the falls, where the cascades drop into a green valley surrounded by olive trees and rocky cliffs. Depending on your pace, walk toward the lower viewpoints, enjoy lunch overlooking the valley and take time for photography. This first day focuses on nature rather than a long desert transfer, giving you a relaxed introduction to Morocco outside Marrakech. Spend the night in the Ouzoud area.",
    details: [
      "Pickup from Marrakech",
      "Scenic countryside drive",
      "Ouzoud Waterfalls",
      "Walking paths and viewpoints",
      "Green valley scenery",
      "Free time for photography",
      "Overnight near Ouzoud",
    ],
  },
  {
    title:
      "Day 2: Ouzoud – Demnate – Dinosaur Footprints – Amazigh Villages – Dades Valley",
    description:
      "After breakfast, leave Ouzoud and travel toward the Demnate region. This part of central Morocco offers mountain foothills, traditional villages and geological sites that add a different experience to a classic Sahara itinerary. Depending on local access and the confirmed route, stop near known dinosaur-track areas in the wider Demnate region and see traces preserved in the rock. Continue through rural Amazigh villages and mountain scenery, with stops for photographs and short walks when practical. The route then continues toward southern Morocco and the Dades Valley, where dry valleys, kasbahs and unusual rock formations create a new landscape. Arrive in Dades in the evening for dinner and overnight.",
    details: [
      "Demnate region",
      "Dinosaur-track area when accessible",
      "Amazigh / Berber villages",
      "Mountain landscapes",
      "Scenic road journey",
      "Arrival in Dades Valley",
      "Dinner & overnight",
    ],
  },
  {
    title: "Day 3: Dades Valley – Tinghir – Todra Gorge – Merzouga",
    description:
      "After breakfast, continue through the Dades Valley and stop for panoramic views over kasbahs, rock formations and traditional villages. Travel toward Tinghir, an oasis town surrounded by palm groves, then continue to Todra Gorge. Walk between the high limestone canyon walls before continuing east across dry plateaus and desert-edge towns. The scenery becomes wider and more open as you approach Merzouga. In the late afternoon or evening, arrive beside the golden Erg Chebbi dunes, check into your hotel or riad and prepare for the full Sahara experience the next day.",
    details: [
      "Dades Valley viewpoints",
      "Tinghir oasis",
      "Todra Gorge",
      "Canyon walk",
      "Drive through southeastern Morocco",
      "Arrival in Merzouga",
      "First views of Erg Chebbi",
      "Dinner & overnight near the dunes",
    ],
  },
  {
    title:
      "Day 4: Merzouga Desert Excursion – Khamlia – Cooking Class – Camel Trek – Luxury Camp",
    description:
      "Spend a full day around Merzouga so the Sahara becomes more than a quick overnight stop. Explore the Erg Chebbi region by 4x4 and see how the landscape changes between golden dunes, rocky desert and small settlements. Visit Khamlia to experience Gnawa musical traditions and learn more about local desert culture. Later, join a Moroccan cooking experience when included in your confirmed booking, with an introduction to local ingredients and simple traditional preparation. In the late afternoon, meet your camel guide and ride across Erg Chebbi at sunset. Continue to your luxury desert camp for dinner, local music and a peaceful night under the Sahara sky.",
    details: [
      "Merzouga desert excursion",
      "4x4 Sahara exploration",
      "Khamlia",
      "Gnawa music",
      "Cooking class when confirmed",
      "Erg Chebbi camel trek",
      "Sahara sunset",
      "Luxury desert camp",
      "Dinner & breakfast",
    ],
  },
  {
    title: "Day 5: Merzouga – Rissani – Draa Region – Ouarzazate",
    description:
      "Wake early for sunrise over the Erg Chebbi dunes, then enjoy breakfast at the camp and return toward Merzouga by camel or 4x4 transfer. Continue to Rissani, an important historic town in the Tafilalet region. When the traditional market is operating, enjoy some time in its local atmosphere before beginning the long journey west. Travel through desert and pre-Sahara landscapes toward the Draa region and Ouarzazate. The drive reveals remote plains, mountain edges and oasis scenery that show another side of southern Morocco. Arrive in Ouarzazate in the late afternoon or evening for dinner and overnight.",
    details: [
      "Sahara sunrise",
      "Breakfast at camp",
      "Rissani",
      "Traditional market when operating",
      "Tafilalet region",
      "Draa-region scenery",
      "Arrival in Ouarzazate",
      "Dinner & overnight",
    ],
  },
  {
    title:
      "Day 6: Ouarzazate – Ait Ben Haddou – High Atlas Mountains – Marrakech",
    description:
      "After breakfast, travel from Ouarzazate to Ait Ben Haddou, one of Morocco's best-known fortified settlements and a UNESCO World Heritage Site. Walk through the historic ksar, explore its earthen architecture and climb higher for wide views over the surrounding valley. Continue toward the High Atlas Mountains on winding roads that pass mountain villages, high slopes and dramatic viewpoints. Stop for photographs and breaks along the route before descending toward Marrakech. Arrive in the afternoon or evening, check into your riad or hotel and enjoy a free evening.",
    details: [
      "Ouarzazate",
      "Ait Ben Haddou",
      "Historic ksar walk",
      "Panoramic viewpoints",
      "High Atlas Mountains",
      "Mountain villages",
      "Arrival in Marrakech",
      "Free evening",
    ],
  },
  {
    title: "Day 7: Marrakech Guided Visit – Free Time – End of Tour",
    description:
      "Spend the final day enjoying Marrakech at a slower pace. A guided visit can introduce you to the medina, traditional souks, historic neighborhoods and important landmarks according to the sightseeing plan. After the guided portion, enjoy free time for shopping, a garden visit, a rooftop meal or simply walking through the old city. If your flight leaves on this day, an airport transfer can be arranged at the appropriate time. Your Morocco itinerary 7 days from Marrakech ends after a week combining Ouzoud Waterfalls, dinosaur-track landscapes near Demnate, Amazigh villages, Dades Valley, Todra Gorge, Merzouga Sahara, a cooking experience, Ait Ben Haddou and the High Atlas.",
    details: [
      "Guided Marrakech visit when included",
      "Medina and souks",
      "Historic city atmosphere",
      "Free time",
      "Airport transfer when arranged",
      "End of 7-day Morocco itinerary",
    ],
  },
];

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
        "This sample review is written for the 7-day Morocco itinerary from Marrakech. We loved starting with Ouzoud Waterfalls because it made the trip feel different from a normal desert tour. The mountain villages, Dades Valley and Todra Gorge were beautiful, and the full day in Merzouga gave us time for Khamlia, a cooking experience, camel trekking and the desert camp. Ait Ben Haddou and the High Atlas were a perfect way to return to Marrakech.",
    },
    {
      id: 2,
      name: "James Anderson",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇬🇧",
      rating: 5,
      date: "1 month ago",
      review:
        "This sample testimonial reflects the variety of this seven-day route. Ouzoud was peaceful and green, while the road through the Demnate region and traditional villages gave us a more local side of Morocco. Merzouga was the highlight, especially the camel trek at sunset and the luxury desert camp. We also enjoyed Todra Gorge, Ouarzazate and exploring Ait Ben Haddou before crossing the Atlas Mountains.",
    },
    {
      id: 3,
      name: "Sophie Martin",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇨🇦",
      rating: 5,
      date: "1 month ago",
      review:
        "This sample review is tailored to the exact Marrakech round-trip itinerary. The mix of waterfalls, mountain scenery, old villages, Sahara dunes and historic kasbahs made every day feel different. The cooking class in Merzouga was a fun cultural experience, and sleeping in the desert camp under the stars was unforgettable. The guided time in Marrakech at the end was also a nice way to finish the week.",
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
        "This sample testimonial focuses on the best parts of the seven days: Ouzoud Waterfalls, dinosaur-track landscapes near Demnate, Dades Valley, Todra Gorge, Merzouga and Erg Chebbi. The desert excursion, camel ride and camp were excellent, but Ait Ben Haddou and the drive through the High Atlas back to Marrakech were just as memorable. It felt like a complete Morocco experience in one week.",
    },
  ],
};

const tourinclude = {
  included: [
    "Pickup from your hotel or riad in Marrakech",
    "Return to Marrakech at the end of the itinerary",
    "Private air-conditioned vehicle",
    "English-speaking driver",
    "6 nights accommodation according to selected package",
    "Breakfasts according to the accommodation plan",
    "Dinners in selected mountain, desert and southern accommodations",
    "Merzouga desert excursion by 4x4",
    "Khamlia visit",
    "Camel trek in the Erg Chebbi dunes",
    "Luxury desert camp in Merzouga",
    "4x4 transfer to or from the desert camp when arranged",
    "Moroccan cooking experience when confirmed",
    "Marrakech guided visit when included in the final booking",
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

const locations = [
  { id: "marrakech", name: "Marrakech", lat: 31.6295, lng: -7.9811, day: 1, description: "Starting and ending city for the seven-day Morocco itinerary." },
  { id: "ouzoud-waterfalls", name: "Ouzoud Waterfalls", lat: 32.0151, lng: -6.719, day: 1, description: "Waterfall destination with walking paths and viewpoints." },
  { id: "demnate", name: "Demnate", lat: 31.7344, lng: -7.005, day: 2, description: "Atlas foothill town near rural villages and geological sites." },
  { id: "dades-valley", name: "Dades Valley", lat: 31.471, lng: -5.974, day: 2, description: "Scenic valley known for kasbahs and rock formations." },
  { id: "tinghir", name: "Tinghir", lat: 31.5147, lng: -5.5328, day: 3, description: "Oasis town and gateway to Todra Gorge." },
  { id: "todra-gorge", name: "Todra Gorge", lat: 31.585, lng: -5.59, day: 3, description: "Dramatic limestone canyon and walking stop." },
  { id: "merzouga", name: "Merzouga", lat: 31.0801, lng: -4.0134, day: 3, description: "Sahara village beside Erg Chebbi." },
  { id: "erg-chebbi", name: "Erg Chebbi", lat: 31.1477, lng: -3.9786, day: 4, description: "Sahara dunes for camel trekking, sunset and camping." },
  { id: "khamlia", name: "Khamlia", lat: 31.037, lng: -4.006, day: 4, description: "Village near Merzouga known for Gnawa musical traditions." },
  { id: "rissani", name: "Rissani", lat: 31.282, lng: -4.265, day: 5, description: "Historic Tafilalet market town." },
  { id: "ouarzazate", name: "Ouarzazate", lat: 30.9335, lng: -6.937, day: 5, description: "Southern city known for kasbah scenery and film history." },
  { id: "ait-ben-haddou", name: "Ait Ben Haddou", lat: 31.047, lng: -7.129, day: 6, description: "Historic fortified ksar before the High Atlas crossing." },
  { id: "high-atlas", name: "High Atlas Mountains", lat: 31.2, lng: -7.4, day: 6, description: "Mountain crossing on the route back to Marrakech." },
  { id: "marrakech-return", name: "Marrakech", lat: 31.6295, lng: -7.9811, day: 7, description: "Final city for sightseeing and departure." },
];

const faqs = {
  head: [
    {
      title:
        "Frequently Asked Questions About the Morocco Itinerary 7 Days from Marrakech",
      description:
        "Plan your 7-day Morocco itinerary from Marrakech with practical answers about Ouzoud Waterfalls, Demnate, Dades Valley, Todra Gorge, Merzouga, camel trekking, luxury desert camp, cooking experiences, Ait Ben Haddou and the High Atlas.",
    },
  ],
  faqs: [
    { question: "Is 7 days enough for a Morocco itinerary from Marrakech?", answer: "Yes. Seven days gives you enough time to combine Marrakech, Ouzoud Waterfalls, southern valleys, Todra Gorge, Merzouga Sahara, Ait Ben Haddou and the High Atlas. Some days include long road sections, but the itinerary offers much more variety than a short desert tour." },
    { question: "What can I do in a 7-day trip to Morocco?", answer: "On this itinerary you can walk around Ouzoud Waterfalls, travel through mountain villages, see geological sites near Demnate when accessible, explore Dades and Todra, ride camels in Merzouga, sleep in a desert camp, visit Ait Ben Haddou and return through the High Atlas." },
    { question: "Does the tour start and end in Marrakech?", answer: "Yes. The standard route begins in Marrakech and returns to Marrakech." },
    { question: "Are Ouzoud Waterfalls included?", answer: "Yes. Day one travels from Marrakech to Ouzoud Waterfalls with time for walking, viewpoints and an overnight stay nearby." },
    { question: "Does the tour include dinosaur footprints?", answer: "Day two can include a stop near known dinosaur-track areas around the wider Demnate region when access, timing and local conditions allow. Confirm the exact stop before departure." },
    { question: "Do we visit Amazigh villages?", answer: "Yes. The route passes rural Amazigh communities and traditional villages in mountain and southern regions, with stops depending on timing and road conditions." },
    { question: "Does the tour include Dades Valley and Todra Gorge?", answer: "Yes. The route includes Dades Valley and a walking stop at Todra Gorge before continuing to Merzouga." },
    { question: "Is camel trekking included?", answer: "Yes. The standard Sahara experience includes a camel trek across the Erg Chebbi dunes around sunset." },
    { question: "Is the desert camp a luxury camp?", answer: "This page is designed around a luxury camp option. Exact tent facilities and camp category should be confirmed for your booking." },
    { question: "Can I reach the camp without riding a camel?", answer: "Yes. A 4x4 transfer can usually be arranged." },
    { question: "Is there a Moroccan cooking class?", answer: "A cooking experience can be included during the Merzouga day when confirmed in the final booking." },
    { question: "Does the tour visit Khamlia?", answer: "Yes. Khamlia is included during the Merzouga desert excursion and is known for Gnawa musical traditions." },
    { question: "Do we visit Rissani?", answer: "Yes. Day five passes through Rissani. A market visit depends on its operating day and timing." },
    { question: "Is Ait Ben Haddou included?", answer: "Yes. Day six includes a visit to Ait Ben Haddou before crossing the High Atlas back to Marrakech." },
    { question: "Does the tour cross the Atlas Mountains?", answer: "Yes. The route from Ait Ben Haddou to Marrakech crosses the High Atlas Mountains." },
    { question: "Is Marrakech sightseeing included?", answer: "The final day can include a guided Marrakech visit when this is confirmed in your package." },
    { question: "What accommodation is used?", answer: "Accommodation can include hotels, riads, guesthouses and a luxury Sahara desert camp, depending on the package." },
    { question: "Are all meals included?", answer: "Breakfasts are generally included, while dinners are commonly included at selected southern and desert stays. Lunches and drinks are normally separate." },
    { question: "What should I pack?", answer: "Bring comfortable walking shoes, light clothing, sun protection, sunglasses, a hat, a warm layer for desert evenings, personal medication, a small camp bag and a power bank." },
    { question: "Can the 7-day itinerary be customized?", answer: "Yes. Private tours can often be adjusted for hotels, camp category, sightseeing time, cooking activity and flight schedule." },
  ],
};

const tour = {
  title: "Tour Highlights – 7 Day Morocco Tour from Marrakech",
  highlights: [
    "Experience Morocco in 7 days from Marrakech.",
    "Walk around Ouzoud Waterfalls.",
    "Travel through mountain landscapes and Amazigh villages.",
    "Visit dinosaur-track areas near Demnate when accessible.",
    "Discover Dades Valley and Todra Gorge.",
    "Reach Merzouga beside Erg Chebbi.",
    "Explore the Sahara by 4x4.",
    "Visit Khamlia and experience Gnawa music.",
    "Join a Moroccan cooking experience when confirmed.",
    "Ride camels across the Sahara at sunset.",
    "Sleep under the stars in a luxury Merzouga desert camp.",
    "Visit Rissani and its market when operating.",
    "Explore Ouarzazate and Ait Ben Haddou.",
    "Cross the High Atlas Mountains.",
    "Return to Marrakech for guided sightseeing or free time.",
  ],
};

const itineraryRoute = [
  { day: "Day 1", route: "Marrakech → Ouzoud Waterfalls", target: "day-1" },
  { day: "Day 2", route: "Ouzoud → Demnate → Dinosaur Footprints → Amazigh Villages → Dades Valley", target: "day-2" },
  { day: "Day 3", route: "Dades Valley → Tinghir → Todra Gorge → Merzouga", target: "day-3" },
  { day: "Day 4", route: "Merzouga Desert Excursion → Khamlia → Cooking Class → Erg Chebbi → Luxury Camp", target: "day-4" },
  { day: "Day 5", route: "Merzouga → Rissani → Draa Region → Ouarzazate", target: "day-5" },
  { day: "Day 6", route: "Ouarzazate → Ait Ben Haddou → High Atlas Mountains → Marrakech", target: "day-6" },
  { day: "Day 7", route: "Marrakech Guided Visit → Free Time → Departure", target: "day-7" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://moorishtour.com/" },
    { "@type": "ListItem", position: 2, name: "Morocco Tours", item: "https://moorishtour.com/tour/" },
    { "@type": "ListItem", position: 3, name: propsObj.title, item: propsObj.url },
  ],
};

const tourSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": "https://moorishtour.com/#website", url: "https://moorishtour.com/", name: "Moorish Tour" },
    {
      "@type": "TravelAgency",
      "@id": "https://moorishtour.com/#organization",
      name: "Moorish Tour",
      url: "https://moorishtour.com/",
      telephone: "+212628812520",
      email: "moorishtour@gmail.com",
      address: { "@type": "PostalAddress", addressCountry: "MA" },
      areaServed: { "@type": "Country", name: "Morocco" },
    },
    {
      "@type": "WebPage",
      "@id": `${propsObj.url}#webpage`,
      url: propsObj.url,
      name: propsObj.title,
      description: propsObj.description,
      isPartOf: { "@id": "https://moorishtour.com/#website" },
      about: { "@id": `${propsObj.url}#tour` },
    },
    {
      "@type": "TouristTrip",
      "@id": `${propsObj.url}#tour`,
      name: propsObj.title,
      url: propsObj.url,
      description:
        "A seven-day Morocco itinerary from Marrakech combining Ouzoud Waterfalls, Demnate, Dades Valley, Todra Gorge, Merzouga, Erg Chebbi, Rissani, Ouarzazate, Ait Ben Haddou and the High Atlas Mountains.",
      provider: { "@id": "https://moorishtour.com/#organization" },
      touristType: ["Couples", "Families", "Private travelers", "Adventure travelers", "Cultural travelers", "Nature travelers", "Sahara desert travelers"],
      tripOrigin: {
        "@type": "Place",
        name: "Marrakech",
        address: { "@type": "PostalAddress", addressLocality: "Marrakech", addressCountry: "MA" },
      },
      itinerary: {
        "@type": "ItemList",
        name: "Morocco Itinerary 7 Days from Marrakech",
        numberOfItems: 7,
        itemListElement: itinerary.map((day, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: day.title,
          description: day.description,
        })),
      },
    },
  ],
};

export default function PageTour() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(attachProductToTourGraph(tourSchemaData, { url: propsObj.url, name: propsObj.title, description: propsObj.description, image: propsObj.imageurl, price: propsObj.price, priceCurrency: "EUR", ...getTourReviewSchemaFields(propsObj.url) })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
              <section className="my-10 scroll-mt-42 py-10" id="overview">
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    7-Day Morocco Adventure
                  </p>
                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    About This Morocco Itinerary 7 Days from Marrakech
                  </h2>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    If you are looking for the <strong>best 7 day Morocco itinerary</strong>, this route gives you nature, history, culture and adventure in one complete week. You travel from Marrakech to Ouzoud Waterfalls, cross mountain and village landscapes, reach the Sahara Desert and return through Ait Ben Haddou and the High Atlas.
                  </p>
                  <p>
                    Travelers often ask what they can do during <strong>7 days in Morocco</strong>. This itinerary is designed to show several very different sides of the country: waterfalls, valleys, Amazigh villages, desert dunes, local food, old kasbahs and mountain roads.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
                  <>
                    Start in <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and travel to <PlaceHoverCard place="ouzoud-waterfalls">Ouzoud Waterfalls</PlaceHoverCard>. Continue toward <PlaceHoverCard place="demnate">Demnate</PlaceHoverCard>, where the wider region includes mountain villages and geological sites. When access allows, stop near dinosaur-track areas before continuing to <PlaceHoverCard place="dades-valley">Dades Valley</PlaceHoverCard>.
                    <br /><br />
                    From Dades, travel through <PlaceHoverCard place="tinghir">Tinghir</PlaceHoverCard> and walk inside <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard>. Continue to <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and the <PlaceHoverCard place="erg-chebbi">Erg Chebbi dunes</PlaceHoverCard>.
                    <br /><br />
                    Spend a full day in the Sahara, visit <PlaceHoverCard place="khamlia">Khamlia</PlaceHoverCard>, join a cooking experience when confirmed and ride camels across <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard> at sunset before sleeping in a luxury desert camp.
                    <br /><br />
                    After the desert, travel through <PlaceHoverCard place="rissani">Rissani</PlaceHoverCard> toward <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard>. Explore <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard> before crossing the <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard> back to <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>.
                  </>
                </Overview>
              </section>

              <section id="tour-route" className="py-8" aria-labelledby="tour-route-title">
                <div className="mx-auto px-4">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">Route at a Glance</p>
                  <h2 id="tour-route-title" className="mt-2 text-3xl font-bold text-slate-900">
                    Morocco Itinerary 7 Days from Marrakech Route
                  </h2>
                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    Explore waterfalls, villages, valleys and the Sahara before returning to Marrakech through Ait Ben Haddou and the High Atlas Mountains.
                  </p>
                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">Day</th>
                          <th className="px-4 py-4 font-semibold text-amber-700">Morocco 7-Day Route</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itineraryRoute.map((item) => (
                          <tr key={item.day} className="border-b border-amber-200 last:border-b-0">
                            <td className="whitespace-nowrap px-4 py-4 font-semibold text-amber-700">{item.day}</td>
                            <td className="px-4 py-4 text-gray-700">{item.route}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-42 py-10" id="highlights">
                <TourHighlights title={tour.title} highlights={tour.highlights} />
              </section>

              <section className="scroll-mt-42 py-16" id="itinerary">
                <TourItinerary title={propsObj.title} days={itinerary} />
              </section>

              <section id="tourPrice" className="scroll-mt-42 py-10" aria-labelledby="tour-price-title">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">Tour Price</p>
                  <h2 id="tour-price-title" className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                    How Much Does a 7-Day Morocco Tour from Marrakech Cost?
                  </h2>
                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The price depends on your travel dates, number of travelers, hotel category, luxury desert-camp level, cooking activity and any itinerary changes. Request the current rate for your exact dates and preferred package.
                  </p>
                  <a href="#reservation-form" className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-800">
                    Check Current Price & Availability
                  </a>
                </div>
              </section>

              <section className="scroll-mt-42 py-10" id="included">
                <TourInclusions title={propsObj.title} included={tourinclude.included} notIncluded={tourinclude.notIncluded} />
              </section>

              <section className="scroll-mt-42 py-10" id="info">
                <WhatToBring
                  description="Pack for different conditions during this 7-day Morocco itinerary. Ouzoud can be cooler around the water, the Sahara can be hot in the day and cold after sunset, and the High Atlas may be much cooler than Marrakech. Bring comfortable shoes, sun protection, light layers, a warm jacket and a small bag for the desert camp."
                  items={[
                    { text: "Comfortable walking shoes", icon: BackwardIcon },
                    { text: "Light and comfortable clothing", icon: ShieldCheckIcon },
                    { text: "Warm jacket or sweater", icon: ShieldCheckIcon },
                    { text: "Sunscreen and sunglasses", icon: SunIcon },
                    { text: "Hat or cap", icon: SunIcon },
                    { text: "Camera or smartphone", icon: CameraIcon },
                    { text: "Reusable water bottle", icon: BeakerIcon },
                    { text: "Small overnight bag for the desert camp", icon: BriefcaseIcon },
                    { text: "Personal toiletries and medication", icon: ShieldCheckIcon },
                    { text: "Power bank", icon: BoltIcon },
                  ]}
                />
              </section>

              <section className="scroll-mt-42 py-10" id="map">
                <h2 className="mb-3 text-2xl font-bold text-slate-900">
                  Map of the Morocco Itinerary 7 Days from Marrakech
                </h2>
                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Follow the seven-day loop from Marrakech to Ouzoud, Dades, Todra Gorge and Merzouga, then return through Ouarzazate, Ait Ben Haddou and the High Atlas Mountains.
                </p>
                <TourMap locations={locations} />
              </section>

              <section className="scroll-mt-42 py-14" id="faqs">
                <TourFAQs head={faqs.head} faqs={faqs.faqs} />
              </section>
            </div>

            <div className="my-10 mx-7 py-10 lg:col-span-1 lg:mx-0">
              <TourSidebar price={propsObj.price} />
            </div>
          </div>

          <section id="book-tour" className="py-12" aria-labelledby="final-tour-cta-title">
            <div className="mx-auto max-w-6xl px-4">
              <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-8 text-center shadow-sm md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  Marrakech → Ouzoud → Sahara → Atlas
                </p>
                <h2 id="final-tour-cta-title" className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Ready to Discover Morocco in 7 Days from Marrakech?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Connect with Morocco&apos;s nature, culture and adventure on a seven-day journey through waterfalls, villages, valleys, the Sahara Desert, Ait Ben Haddou and the Atlas Mountains.
                </p>
                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="#reservation-form" className="inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-800">
                    Check Availability & Book
                  </a>
                  <a href="#itinerary" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-gray-50">
                    View Full Itinerary
                  </a>
                </div>
                <p className="mt-5 text-sm text-gray-500">
                  7 Days · 6 Nights · Marrakech Round Trip · Ouzoud · Sahara · Ait Ben Haddou · High Atlas
                </p>
              </div>
            </div>
          </section>
        </div>

        <YouMayAlsoLike
          tours={[
            {
              title: "4 Days Marrakech to Merzouga Desert Tour",
              href: "/tour/4-days-tour-from-marrakech-to-merzouga/",
              image: MarrakechToMerzouga4Day,
              duration: "4 DAYS",
            },
            {
              title: "4 Days Marrakech to Fes Desert Tour",
              href: "/tour/4-days-tour-from-marrakech-to-fes/",
              image: MarrakechToFes4Day,
              duration: "4 DAYS",
            },
            {
              title: "10 Days Morocco Itinerary from Marrakech",
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

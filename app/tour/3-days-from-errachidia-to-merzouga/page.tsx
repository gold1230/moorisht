import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";
import Errachidia3DayImage from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";

import MarrakechToMerzouga7Day from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";
import MarrakechToMerzouga10Day from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";
import MarrakechToMerzouga4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";
import MarrakechToFes4Day from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

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
  FireIcon,
  BriefcaseIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";



const propsObj = {
  image: Errachidia3DayImage,
  imagetitle: "3 Days from Errachidia to Merzouga Desert Tour",
  imageurl: "https://moorishtour.com/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon: "Morocco Experience",
  type: "Private Sahara Desert Tour",
  url: "https://moorishtour.com/tour/3-days-from-errachidia-to-merzouga/",
  title: "3 Days from Errachidia to Merzouga Desert Tour",
  description: "A three-day Sahara tour from Errachidia with Ziz Valley, Merzouga, Khamlia, a full desert excursion, camel trekking, a Sahara camp and return airport transfer.",
  overeview: "This 3 days from Errachidia to Merzouga desert tour is ideal for travelers who want to reach the Sahara quickly. Starting close to the desert leaves more time for Merzouga, Khamlia, camel trekking and the Erg Chebbi camp.",
  duration: "3 Days / 2 Nights",
  route: "Errachidia → Ziz Valley → Merzouga → Khamlia → Erg Chebbi → Rissani → Errachidia",
  reviews: "4",
  reviewsRate: "5",
  price: 195,
  maxPeople: "Private Tour",
  accommodation: "Hotel / Riad / Desert Camp",
  activities: "Desert Excursion, Camel Trekking & Culture",
};

export const metadata: Metadata = {
  title: "3 Days Errachidia to Merzouga Desert Tour | Sahara Camp",
  description: "Travel from Errachidia to Merzouga in 3 days through Ziz Valley, explore Khamlia, ride camels in Erg Chebbi and sleep in a Sahara camp.",
  keywords: [
  "3 days from Errachidia to Merzouga",
  "Errachidia to Merzouga desert tour",
  "3 day Errachidia desert tour",
  "Errachidia Airport Merzouga transfer tour",
  "Ziz Valley Merzouga tour",
  "Khamlia desert excursion",
  "Erg Chebbi camel trek",
  "Merzouga desert camp",
  "Errachidia Sahara tour"
],
  alternates: {
    canonical: propsObj.url,
  },
  openGraph: {
    title: "3 Days Errachidia to Merzouga Desert Tour | Sahara Camp",
    description: "Travel from Errachidia to Merzouga in 3 days through Ziz Valley, explore Khamlia, ride camels in Erg Chebbi and sleep in a Sahara camp.",
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

const highlightsOverview = [
  {
    icon: MapIcon,
    title: "Ziz Valley",
    subtitle: "Palm groves & oasis views",
  },
  {
    icon: FireIcon,
    title: "Merzouga Sahara",
    subtitle: "Erg Chebbi dunes",
  },
  {
    icon: BuildingLibraryIcon,
    title: "Khamlia",
    subtitle: "Gnawa music & culture",
  },
  {
    icon: SunIcon,
    title: "Desert Camp",
    subtitle: "Sunset, stars & sunrise",
  }
];

const itinerary = [
  {
    title: "Day 1: Arrival at Errachidia Airport – Ziz Valley – Merzouga",
    description: "Your 3 days from Errachidia to Merzouga desert tour begins with pickup at Errachidia Airport or your hotel. Travel through the Ziz Valley, stopping at panoramic viewpoints over palm groves and oasis landscapes. Continue toward Erfoud and the Tafilalet region before reaching Merzouga beside the Erg Chebbi dunes. Depending on arrival time, enjoy a relaxed evening near the Sahara or begin the camel experience if your flight schedule allows.",
    details: [
    "Errachidia Airport pickup",
    "Ziz Valley",
    "Palm-grove viewpoints",
    "Erfoud",
    "Arrival in Merzouga",
    "Erg Chebbi views",
    "Dinner & overnight"
  ],
  },
  {
    title: "Day 2: Explore Merzouga – Khamlia – Desert Excursion – Camel Trek – Sahara Camp",
    description: "Spend a full day exploring Merzouga and the surrounding desert. Travel by 4x4 around Erg Chebbi, visit Khamlia and experience Gnawa musical traditions. Depending on the confirmed route, stop in other desert areas and learn about local life. In the late afternoon, meet your camel guide and ride across the dunes around sunset before reaching the Sahara camp for dinner, local music and overnight under the stars.",
    details: [
    "Merzouga desert excursion",
    "4x4 exploration",
    "Khamlia",
    "Gnawa music",
    "Local desert culture",
    "Camel trek",
    "Sahara sunset",
    "Desert camp"
  ],
  },
  {
    title: "Day 3: Merzouga – Rissani – Ziz Valley – Errachidia Airport",
    description: "Wake early for sunrise over Erg Chebbi, enjoy breakfast and return from the camp by camel or 4x4. Leave Merzouga and travel toward Rissani, where a market visit is possible when the traditional market is operating. Continue through the Ziz Valley toward Errachidia. Arrive at the airport or your hotel according to your departure time, ending the three-day desert tour.",
    details: [
    "Sahara sunrise",
    "Breakfast at camp",
    "Return to Merzouga",
    "Rissani",
    "Market when operating",
    "Ziz Valley",
    "Errachidia Airport drop-off",
    "End of tour"
  ],
  }
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
      avatar: "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",
      flag: "🇺🇸",
      rating: 5,
      date: "Sample review",
      review: "A perfect short desert trip from Errachidia. The Ziz Valley was beautiful on the way to Merzouga, and having a full day for Khamlia and the Sahara made the trip feel complete. The camel trek and camp under the stars were unforgettable.",
    },
    {
      id: 2,
      name: "James Anderson",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇬🇧",
      rating: 5,
      date: "Sample review",
      review: "Starting in Errachidia saved a lot of driving time. We reached Merzouga quickly, explored the desert properly on day two and still had time for Rissani and the Ziz Valley before returning to the airport.",
    },
    {
      id: 3,
      name: "Sophie Martin",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇨🇦",
      rating: 5,
      date: "Sample review",
      review: "This three-day Errachidia to Merzouga itinerary was simple and well balanced. We loved Khamlia, the desert excursion, sunset camel trek and sunrise over Erg Chebbi.",
    },
    {
      id: 4,
      name: "Daniel Williams",
      avatar: "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",
      flag: "🇦🇺",
      rating: 5,
      date: "Sample review",
      review: "A great option if you are flying into Errachidia and mainly want the Sahara. The palm groves, Merzouga, Khamlia, camel ride and camp all fit comfortably into three days.",
    }
  ],
};

const tourinclude = {
  included: [
  "Errachidia airport/hotel pickup",
  "Errachidia airport/hotel drop-off",
  "Private air-conditioned vehicle",
  "English-speaking driver",
  "1 night near Merzouga",
  "1 night in Sahara desert camp",
  "Breakfasts and selected dinners",
  "Merzouga desert excursion by 4x4",
  "Khamlia visit",
  "Camel trek in Erg Chebbi"
],
  notIncluded: [
  "Flights",
  "Lunches",
  "Drinks",
  "Tips",
  "Travel insurance",
  "Optional activities"
],
};

const locations = [
  {
    id: "errachidia",
    name: "Errachidia",
    lat: 31.9314,
    lng: -4.4241,
    day: 1,
    description: "Starting and ending city.",
  },
  {
    id: "ziz-valley",
    name: "Ziz Valley",
    lat: 31.86,
    lng: -4.35,
    day: 1,
    description: "Palm-filled oasis valley.",
  },
  {
    id: "erfoud",
    name: "Erfoud",
    lat: 31.4353,
    lng: -4.2326,
    day: 1,
    description: "Desert gateway town.",
  },
  {
    id: "merzouga",
    name: "Merzouga",
    lat: 31.0801,
    lng: -4.0134,
    day: 1,
    description: "Sahara village beside Erg Chebbi.",
  },
  {
    id: "khamlia",
    name: "Khamlia",
    lat: 31.037,
    lng: -4.006,
    day: 2,
    description: "Village known for Gnawa music.",
  },
  {
    id: "erg-chebbi",
    name: "Erg Chebbi",
    lat: 31.1477,
    lng: -3.9786,
    day: 2,
    description: "Camel trek and camp dunes.",
  },
  {
    id: "rissani",
    name: "Rissani",
    lat: 31.282,
    lng: -4.265,
    day: 3,
    description: "Historic market town.",
  },
  {
    id: "errachidia-return",
    name: "Errachidia",
    lat: 31.9314,
    lng: -4.4241,
    day: 3,
    description: "Airport or hotel drop-off.",
  }
];

const faqs = {
  head: [
    {
      title: "Frequently Asked Questions About 3 Days from Errachidia to Merzouga Desert Tour",
      description: "Practical answers about the itinerary, transport, accommodation, sightseeing, activities, packing and customization for this Morocco tour.",
    },
  ],
  faqs: [
    {
      question: "Is Errachidia a good starting point for Merzouga?",
      answer: "Yes. Errachidia is relatively close to Merzouga, so you spend less time on long transfers and more time in the Sahara.",
    },
    {
      question: "Is airport pickup included?",
      answer: "Yes. The itinerary is designed around pickup at Errachidia Airport or your hotel.",
    },
    {
      question: "Does the tour include Ziz Valley?",
      answer: "Yes. The route passes through the Ziz Valley on the way to Merzouga and again on the return.",
    },
    {
      question: "Is Khamlia included?",
      answer: "Yes. Khamlia is included during the full desert excursion.",
    },
    {
      question: "Is camel trekking included?",
      answer: "Yes. The standard itinerary includes a sunset camel trek in Erg Chebbi.",
    },
    {
      question: "Can I reach the camp by 4x4?",
      answer: "Yes. A 4x4 transfer can normally be arranged.",
    },
    {
      question: "Do we visit Rissani?",
      answer: "Yes. Day three can include Rissani and its market when operating.",
    },
    {
      question: "Can the schedule match my flight?",
      answer: "Yes. Private pickup and drop-off times can be adjusted around your Errachidia flight schedule.",
    }
  ],
};

const tour = {
  title: "Tour Highlights – 3 Days from Errachidia to Merzouga Desert Tour",
  highlights: [
  "Start at Errachidia Airport",
  "See Ziz Valley palm groves",
  "Reach Merzouga quickly",
  "Explore the Sahara by 4x4",
  "Visit Khamlia",
  "Experience Gnawa music",
  "Camel trek in Erg Chebbi",
  "Sleep in a Sahara camp",
  "See sunrise over the dunes",
  "Return through Rissani and Ziz Valley"
],
};

const itineraryRoute = [
  {
    day: "Day 1",
    route: "Errachidia Airport → Ziz Valley → Erfoud → Merzouga",
    target: "day-1",
  },
  {
    day: "Day 2",
    route: "Merzouga → Khamlia → Desert Excursion → Erg Chebbi Camp",
    target: "day-2",
  },
  {
    day: "Day 3",
    route: "Merzouga → Rissani → Ziz Valley → Errachidia",
    target: "day-3",
  }
];

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
      description: propsObj.overeview,
      provider: {
        "@id": "https://moorishtour.com/#organization",
      },
      touristType: [
        "Couples",
        "Families",
        "Private travelers",
        "Cultural travelers",
        "Adventure travelers",
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
        name: propsObj.title,
        numberOfItems: 3,
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
          price={propsObj.price}
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
              <section className="my-10 scroll-mt-42 py-10" id="overview">
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Morocco Private Tour
                  </p>
                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    About 3 Days from Errachidia to Merzouga Desert Tour
                  </h2>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>This 3 days from Errachidia to Merzouga desert tour is ideal for travelers who want to reach the Sahara quickly. Starting close to the desert leaves more time for Merzouga, Khamlia, camel trekking and the Erg Chebbi camp.</p>
                  <p>
                    This itinerary is written with simple, practical information,
                    natural keyword use and clear destination relationships so
                    travelers can quickly understand what they will see each day.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
  <>
    This{" "}
    <strong>3 days from Errachidia to Merzouga desert tour</strong>{" "}
    is a great choice for travelers who want to discover the Sahara without
    spending many hours driving from Marrakech or Fes. Starting your journey
    in{" "}
    <PlaceHoverCard place="errachidia">
      Errachidia
    </PlaceHoverCard>{" "}
    puts you much closer to southeastern Morocco and the famous dunes of
    Merzouga. This means you can spend more of your three days enjoying the
    desert, local culture and beautiful oasis landscapes instead of using most
    of the trip only for transportation.

    <br />
    <br />

    After pickup from{" "}
    <PlaceHoverCard place="errachidia">
      Errachidia
    </PlaceHoverCard>
    , the journey begins through the beautiful{" "}
    <PlaceHoverCard place="ziz-valley">
      Ziz Valley
    </PlaceHoverCard>
    . This long oasis valley is one of the most impressive landscapes in
    southeastern Morocco. From panoramic viewpoints along the road, you can
    see thousands of date palms growing beside traditional villages while dry
    mountains and rocky desert landscapes surround the green valley. It is one
    of the first places where you really begin to feel that you are entering
    Morocco&apos;s desert region.

    <br />
    <br />

    The road continues toward{" "}
    <PlaceHoverCard place="erfoud">
      Erfoud
    </PlaceHoverCard>
    , a small desert town known for dates, fossils and its location close to
    the Tafilalet oasis. Erfoud is often considered one of the gateways to the
    Sahara because the landscapes become increasingly dry as you continue
    toward{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>
    . When the golden dunes finally appear in the distance, you will understand
    why Merzouga is one of the most famous desert destinations in Morocco.

    <br />
    <br />

    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>{" "}
    sits beside the enormous dunes of{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>
    , where some dunes rise dramatically above the surrounding Sahara
    landscape. Because this itinerary starts in Errachidia, you have more time
    to enjoy the area instead of arriving late and leaving early. You can watch
    the colors of the dunes change during sunset, relax near the desert and
    experience the peaceful atmosphere that makes Merzouga very different from
    Morocco&apos;s larger cities.

    <br />
    <br />

    The second day is dedicated to exploring more of the{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>{" "}
    desert region. Rather than only riding a camel and leaving, you can travel
    around the Sahara by 4x4 and discover different landscapes around{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>
    . The area includes golden dunes, rocky desert plains, small villages and
    places where local families have lived for generations.

    <br />
    <br />

    One of the cultural stops is{" "}
    <PlaceHoverCard place="khamlia">
      Khamlia
    </PlaceHoverCard>
    , a village close to Merzouga known for its connection with Gnawa musical
    traditions. Visiting Khamlia gives you a chance to experience another side
    of southern Moroccan culture, listen to traditional rhythms and learn more
    about the people who live in this desert region.

    <br />
    <br />

    Later in the afternoon, return toward the dunes of{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>{" "}
    and meet your camel guide. Your camel trek takes you slowly across the
    Sahara while the sun begins to move lower over the dunes. The changing
    light creates beautiful colors across the sand and makes sunset one of the
    most memorable moments of this{" "}
    <strong>Errachidia to Merzouga desert tour</strong>.

    <br />
    <br />

    After sunset, continue deeper into{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>{" "}
    toward your Sahara desert camp. Here you can enjoy dinner, local music and
    a quiet evening beneath the desert sky. Away from city lights, the night in
    Merzouga can be very peaceful, and on clear evenings the stars are one of
    the special parts of staying in the Sahara.

    <br />
    <br />

    The following morning, wake early if you want to watch sunrise over the
    dunes before breakfast. The early light over{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>{" "}
    gives the Sahara another completely different atmosphere. After breakfast,
    return toward{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>{" "}
    by camel or 4x4 and begin your journey back toward Errachidia.

    <br />
    <br />

    Before leaving the desert region, the itinerary can include{" "}
    <PlaceHoverCard place="rissani">
      Rissani
    </PlaceHoverCard>
    , an important historic town in the Tafilalet region. When the traditional
    market is operating, Rissani is an interesting place to see local produce,
    spices, dates and everyday regional trade. It gives you another cultural
    experience before leaving the Sahara.

    <br />
    <br />

    From{" "}
    <PlaceHoverCard place="rissani">
      Rissani
    </PlaceHoverCard>
    , continue north through the oasis landscapes and return once again through
    the{" "}
    <PlaceHoverCard place="ziz-valley">
      Ziz Valley
    </PlaceHoverCard>
    . The final drive gives you another chance to enjoy its palm groves and
    mountain scenery before arriving back in{" "}
    <PlaceHoverCard place="errachidia">
      Errachidia
    </PlaceHoverCard>{" "}
    for your hotel or airport drop-off.

    <br />
    <br />

    This{" "}
    <strong>3 days Errachidia to Merzouga desert tour</strong>{" "}
    is especially useful for travelers arriving at Errachidia Airport who want
    a short but complete Sahara experience. In only three days, you can see the{" "}
    <PlaceHoverCard place="ziz-valley">
      Ziz Valley
    </PlaceHoverCard>
    , visit{" "}
    <PlaceHoverCard place="erfoud">
      Erfoud
    </PlaceHoverCard>
    , explore{" "}
    <PlaceHoverCard place="merzouga">
      Merzouga
    </PlaceHoverCard>
    , experience the culture of{" "}
    <PlaceHoverCard place="khamlia">
      Khamlia
    </PlaceHoverCard>
    , ride camels through{" "}
    <PlaceHoverCard place="erg-chebbi">
      Erg Chebbi
    </PlaceHoverCard>
    , sleep in a Sahara camp and visit{" "}
    <PlaceHoverCard place="rissani">
      Rissani
    </PlaceHoverCard>{" "}
    before returning to{" "}
    <PlaceHoverCard place="errachidia">
      Errachidia
    </PlaceHoverCard>
    . It gives you a strong mix of desert adventure, beautiful landscapes and
    local culture without needing a very long Morocco itinerary.
  </>
</Overview>
              </section>

              <section id="tour-route" className="py-8" aria-labelledby="tour-route-title">
                <div className="mx-auto px-4">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Route at a Glance
                  </p>
                  <h2 id="tour-route-title" className="mt-2 text-3xl font-bold text-slate-900">
                    3 Days from Errachidia to Merzouga Desert Tour Route
                  </h2>
                  <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                    Follow the complete day-by-day route below.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-amber-600 bg-gray-50">
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Day
                          </th>
                          <th className="px-4 py-4 font-semibold text-amber-700">
                            Tour Route
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

              <section className="scroll-mt-42 py-10" id="highlights">
                <TourHighlights
                  title={tour.title}
                  highlights={tour.highlights}
                />
              </section>

              <section className="scroll-mt-42 py-16" id="itinerary">
                <TourItinerary
                  title={propsObj.title}
                  days={itinerary}
                />
              </section>

              <section id="tourPrice" className="scroll-mt-42 py-10" aria-labelledby="tour-price-title">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Tour Price
                  </p>
                  <h2 id="tour-price-title" className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                    How Much Does the 3-Day Errachidia to Merzouga Tour Cost?
                  </h2>
                  <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                    The final price depends on travel dates, number of travelers,
                    accommodation category and any private-tour customization.
                    Request the current rate for your exact dates.
                  </p>
                  <a
                    href="#reservation-form"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-800"
                  >
                    Check Current Price & Availability
                  </a>
                </div>
              </section>

              <section className="scroll-mt-42 py-10" id="included">
                <TourInclusions
                  title={propsObj.title}
                  included={tourinclude.included}
                  notIncluded={tourinclude.notIncluded}
                />
              </section>

              <section className="scroll-mt-42 py-10" id="info">
                <WhatToBring
                  description="Bring comfortable walking shoes, light layers, sun protection, a warm layer for cooler mornings or evenings, personal medication, a reusable water bottle, a camera or phone and a power bank."
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
                      text: "Small day bag",
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

              <section className="scroll-mt-42 py-10" id="map">
                <h2 className="mb-3 text-2xl font-bold text-slate-900">
                  Map of 3 Days from Errachidia to Merzouga Desert Tour
                </h2>
                <p className="mb-8 max-w-3xl leading-7 text-gray-600">
                  Use the map to understand the main stops and the direction of
                  travel during the itinerary.
                </p>
                <TourMap locations={locations} />
              </section>

              <section className="scroll-mt-42 py-14" id="faqs">
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

          <section id="book-tour" className="py-12" aria-labelledby="final-tour-cta-title">
            <div className="mx-auto max-w-6xl px-4">
              <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-8 text-center shadow-sm md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  Private Morocco Experience
                </p>
                <h2 id="final-tour-cta-title" className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Ready for a 3-Day Errachidia to Merzouga Desert Tour?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Use Errachidia as your Sahara gateway and spend more time exploring Merzouga, Khamlia and Erg Chebbi.
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
              </div>
            </div>
          </section>
        </div>

        <YouMayAlsoLike
          tours={[
            {
              title: "7 Days Morocco Itinerary from Marrakech",
              href: "/tour/morocco-itinerary-7-days-from-marrakech/",
              image: MarrakechToMerzouga7Day,
              duration: "7 DAYS",
            },
            {
              title: "10 Days Morocco Itinerary from Marrakech",
              href: "/tour/morocco-itinerary-10-days-from-marrakech/",
              image: MarrakechToMerzouga10Day,
              duration: "10 DAYS",
            },
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
            }
          ]}
        />
      </div>
    </>
  );
}

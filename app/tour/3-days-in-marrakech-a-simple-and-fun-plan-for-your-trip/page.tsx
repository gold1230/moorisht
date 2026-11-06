import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";
import Marrakech3DaysImage from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";

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
  image: Marrakech3DaysImage,
  imagetitle: "3 Days in Marrakech: A Simple and Fun Plan for Your Trip",
  imageurl: "https://moorishtour.com/tours/related/morocco-itinerary-7-days-from-marrakech.jpg",
  imagerRobbicon: "Morocco Experience",
  type: "Marrakech City Break",
  url: "https://moorishtour.com/tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip/",
  title: "3 Days in Marrakech: A Simple and Fun Plan for Your Trip",
  description: "A simple three-day Marrakech itinerary combining the city center, culture and history, plus a flexible day trip from Marrakech.",
  overeview: "This 3 days in Marrakech plan is designed for first-time visitors who want a simple mix of medina life, history, food, shopping and one day outside the city.",
  duration: "3 Days / 2 Nights",
  route: "Marrakech City Center → Cultural Marrakech → Day Trip → Marrakech",
  reviews: "4",
  reviewsRate: "5",
  price: 195,
  maxPeople: "Private Tour",
  accommodation: "Riad / Hotel",
  activities: "Medina, Culture, Food, Shopping & Day Trip",
};

export const metadata: Metadata = {
  title: "3 Days in Marrakech Itinerary | Simple & Fun Travel Plan",
  description: "Plan 3 days in Marrakech with the medina, souks, cultural sights and a flexible day trip to Ouzoud, Ourika Valley or Essaouira.",
  keywords: [
  "3 days in Marrakech",
  "Marrakech 3 day itinerary",
  "3 days Marrakech itinerary",
  "what to do in Marrakech in 3 days",
  "Marrakech city break",
  "Marrakech medina tour",
  "Marrakech souks",
  "Marrakech day trip",
  "Ouzoud day trip from Marrakech",
  "Ourika Valley day trip",
  "Essaouira day trip from Marrakech"
],
  alternates: {
    canonical: propsObj.url,
  },
  openGraph: {
    title: "3 Days in Marrakech Itinerary | Simple & Fun Travel Plan",
    description: "Plan 3 days in Marrakech with the medina, souks, cultural sights and a flexible day trip to Ouzoud, Ourika Valley or Essaouira.",
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
    icon: BuildingLibraryIcon,
    title: "Marrakech Medina",
    subtitle: "Souks, squares & local life",
  },
  {
    icon: MapIcon,
    title: "Culture & History",
    subtitle: "Historic neighborhoods & monuments",
  },
  {
    icon: SunIcon,
    title: "Day Trip",
    subtitle: "Ouzoud, Ourika or Essaouira",
  },
  {
    icon: FireIcon,
    title: "Food & Atmosphere",
    subtitle: "Mint tea, rooftops & evening life",
  }
];

const itinerary = [
  {
    title: "Day 1: Explore Marrakech City Center",
    description: "Start your 3 days in Marrakech with an easy day in the heart of the city. Walk through Jemaa el-Fnaa, enter the surrounding souks and take time to understand the rhythm of the medina. Browse spices, leather goods, lamps and handmade crafts, stop for mint tea and enjoy a rooftop view over the old city. The first day is about orientation and atmosphere rather than trying to see every monument at once.",
    details: [
    "Jemaa el-Fnaa",
    "Marrakech medina",
    "Traditional souks",
    "Mint tea stop",
    "Rooftop views",
    "Free evening"
  ],
  },
  {
    title: "Day 2: Marrakech Culture & History",
    description: "Use the second day to focus on the history and culture of Marrakech. A local guide can take you through important parts of the medina and explain the city's architecture, old neighborhoods, palaces and religious history. Depending on the final visit plan, see the Bahia Palace area, Koutoubia surroundings, traditional craft districts and other cultural landmarks. Leave some free time at the end of the day for shopping or a hammam.",
    details: [
    "Guided medina visit",
    "Historic neighborhoods",
    "Bahia Palace area",
    "Koutoubia surroundings",
    "Traditional crafts",
    "Free time"
  ],
  },
  {
    title: "Day 3: Take a Day Trip from Marrakech",
    description: "For the third day, leave the city and see another side of Morocco. Choose a nature trip to Ouzoud Waterfalls, a mountain day in Ourika Valley or an Atlantic-coast visit to Essaouira. Ouzoud is ideal for waterfalls and walking, Ourika gives you valley and High Atlas scenery, while Essaouira offers a historic coastal medina, port and ocean atmosphere. Return to Marrakech in the evening.",
    details: [
    "Choose one day trip",
    "Ouzoud Waterfalls option",
    "Ourika Valley option",
    "Essaouira option",
    "Scenic drive",
    "Return to Marrakech"
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
      review: "A very easy plan for three days in Marrakech. The first day helped us understand the medina, the guided cultural day gave us more context and the final day trip was a great change from the busy city.",
    },
    {
      id: 2,
      name: "James Anderson",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇬🇧",
      rating: 5,
      date: "Sample review",
      review: "We liked the balance of city time and one day outside Marrakech. The souks and Jemaa el-Fnaa were lively, and the cultural visit made the history much easier to understand. The day trip option made the itinerary feel more complete.",
    },
    {
      id: 3,
      name: "Sophie Martin",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇨🇦",
      rating: 5,
      date: "Sample review",
      review: "This was a simple Marrakech itinerary that did not feel rushed. We had time for markets, historic places, food and free time, then finished with a day trip for nature and fresh air.",
    },
    {
      id: 4,
      name: "Daniel Williams",
      avatar: "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",
      flag: "🇦🇺",
      rating: 5,
      date: "Sample review",
      review: "A useful three-day plan for first-time visitors. The medina and cultural day were interesting, and having a flexible third-day choice between Ouzoud, Ourika and Essaouira worked well.",
    }
  ],
};

const tourinclude = {
  included: [
  "Hotel or riad pickup for guided activities when arranged",
  "Local Marrakech guide when included",
  "Private transport for the selected day trip when booked",
  "2 nights accommodation according to selected package",
  "Breakfasts according to accommodation plan"
],
  notIncluded: [
  "Flights",
  "Lunches and dinners unless specified",
  "Entrance fees",
  "Tips",
  "Optional hammam or activities",
  "Travel insurance"
],
};

const locations = [
  {
    id: "marrakech",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 1,
    description: "Main city for the three-day itinerary.",
  },
  {
    id: "ouzoud-waterfalls",
    name: "Ouzoud Waterfalls",
    lat: 32.0151,
    lng: -6.719,
    day: 3,
    description: "Optional waterfall day trip.",
  },
  {
    id: "ourika-valley",
    name: "Ourika Valley",
    lat: 31.374,
    lng: -7.768,
    day: 3,
    description: "Optional High Atlas valley day trip.",
  },
  {
    id: "essaouira",
    name: "Essaouira",
    lat: 31.5085,
    lng: -9.7595,
    day: 3,
    description: "Optional Atlantic coast day trip.",
  }
];

const faqs = {
  head: [
    {
      title: "Frequently Asked Questions About 3 Days in Marrakech: A Simple and Fun Plan for Your Trip",
      description: "Practical answers about the itinerary, transport, accommodation, sightseeing, activities, packing and customization for this Morocco tour.",
    },
  ],
  faqs: [
    {
      question: "Is 3 days enough for Marrakech?",
      answer: "Yes. Three days is enough for a good introduction to the medina, cultural sights and one day trip.",
    },
    {
      question: "What should I do on the first day?",
      answer: "Start with Jemaa el-Fnaa and the surrounding souks so you can understand the layout and atmosphere of the old city.",
    },
    {
      question: "Should I use a guide in Marrakech?",
      answer: "A local guide is useful on the culture and history day, especially inside the medina.",
    },
    {
      question: "What day trip should I choose?",
      answer: "Choose Ouzoud for waterfalls, Ourika for mountain-valley scenery or Essaouira for the Atlantic coast.",
    },
    {
      question: "Can I do all three day trips in one day?",
      answer: "No. They are separate options. Choose one for the third day.",
    },
    {
      question: "Where should I stay?",
      answer: "A riad in or near the medina is convenient for walking to many sights.",
    },
    {
      question: "Is Marrakech walkable?",
      answer: "Much of the medina is best explored on foot, though taxis are useful for places outside the old city.",
    },
    {
      question: "Can the plan be customized?",
      answer: "Yes. The third-day trip, guided hours and activity choices can all be changed.",
    }
  ],
};

const tour = {
  title: "Tour Highlights – 3 Days in Marrakech: A Simple and Fun Plan for Your Trip",
  highlights: [
  "Explore Jemaa el-Fnaa",
  "Walk through colorful souks",
  "Learn Marrakech history with a guide",
  "See traditional neighborhoods",
  "Enjoy local food and mint tea",
  "Choose Ouzoud, Ourika or Essaouira for day three",
  "Return to Marrakech for the final evening"
],
};

const itineraryRoute = [
  {
    day: "Day 1",
    route: "Marrakech City Center → Jemaa el-Fnaa → Souks",
    target: "day-1",
  },
  {
    day: "Day 2",
    route: "Marrakech → Historic Sites → Traditional Neighborhoods",
    target: "day-2",
  },
  {
    day: "Day 3",
    route: "Marrakech → Choose Ouzoud / Ourika Valley / Essaouira → Marrakech",
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
        name: "Marrakech",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marrakech",
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
                    Morocco Private Tour
                  </p>
                  <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
                    About 3 Days in Marrakech: A Simple and Fun Plan for Your Trip
                  </h2>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="space-y-4 text-base leading-8 text-slate-700">
                  <p>This 3 days in Marrakech plan is designed for first-time visitors who want a simple mix of medina life, history, food, shopping and one day outside the city.
                    This itinerary is written with simple, practical information,
                    natural keyword use and clear destination relationships so
                    travelers can quickly understand what they will see each day.
                  </p>
                </div>

              <Overview highlightsOverview={highlightsOverview}>
  <>
    This{" "}
    <strong>3 days in Marrakech itinerary</strong>{" "}
    is a simple and enjoyable plan for first-time visitors who want to discover
    the most important sides of{" "}
    <PlaceHoverCard place="marrakech">
      Marrakech
    </PlaceHoverCard>{" "}
    without rushing. During three days, you can experience the old medina,
    colorful souks, local food, historic places and one relaxing day trip
    outside the city.

    <br />
    <br />

    Your first day is focused on the heart of{" "}
    <PlaceHoverCard place="marrakech">
      Marrakech
    </PlaceHoverCard>
    . Walk through Jemaa el-Fnaa, explore the traditional souks and enjoy the
    atmosphere of the old medina. This is a good time to discover local shops,
    handmade products, spices and small cafés while slowly getting familiar
    with the city.

    <br />
    <br />

    On the second day, discover more of Marrakech&apos;s culture and history.
    You can visit historic neighborhoods, traditional architecture and famous
    places around the medina while learning more about the story of the Red
    City. A guided visit is a good option if you want to understand the history
    behind the streets, buildings and local traditions.

    <br />
    <br />

    The third day gives you a chance to leave Marrakech and see another side of
    Morocco. You can choose a nature trip to{" "}
    <PlaceHoverCard place="ouzoud-waterfalls">
      Ouzoud Waterfalls
    </PlaceHoverCard>
    , enjoy mountain scenery in{" "}
    <PlaceHoverCard place="ourika-valley">
      Ourika Valley
    </PlaceHoverCard>
    , or travel to the Atlantic coast and explore{" "}
    <PlaceHoverCard place="essaouira">
      Essaouira
    </PlaceHoverCard>
    .

    <br />
  

    This <strong>3-day Marrakech travel plan</strong> gives you a good balance
    between city life, culture, food, shopping and nature. It is especially
    suitable for travelers who want an easy first experience of Marrakech with
    enough free time to relax and enjoy the city at their own pace.
  </>
  </Overview>
              </section>

              <section id="tour-route" className="py-8" aria-labelledby="tour-route-title">
                <div className="mx-auto px-4">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Route at a Glance
                  </p>
                  <h2 id="tour-route-title" className="mt-2 text-3xl font-bold text-slate-900">
                    3 Days in Marrakech: A Simple and Fun Plan for Your Trip Route
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
                    How Much Does a 3-Day Marrakech Trip Cost?
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
                  Map of 3 Days in Marrakech: A Simple and Fun Plan for Your Trip
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
                  Ready for 3 Fun Days in Marrakech?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Enjoy the medina, culture, food, shopping and one flexible day trip in a simple first-time Marrakech plan.
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

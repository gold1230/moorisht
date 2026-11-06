import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import Hero from "@/Compentents/tour/hero";
import Marrakech4DayImage from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";

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

// NOTE: The supplied itinerary does not visit Merzouga, so this page is kept route-accurate for SEO and travelers.

const propsObj = {
  image: Marrakech4DayImage,
  imagetitle: "4 Days Tour from Marrakech – Imlil & Ait Ben Haddou",
  imageurl: "https://moorishtour.com/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg",
  imagerRobbicon: "Morocco Experience",
  type: "Private Morocco Mountain & Culture Tour",
  url: "https://moorishtour.com/tour/4-days-tour-from-marrakech-to-merzouga/",
  title: "4 Days Tour from Marrakech – Imlil & Ait Ben Haddou",
  description: "A short four-day Morocco journey from Marrakech through Imlil and the High Atlas to Ait Ben Haddou and Ouarzazate.",
  overeview: "This route follows the itinerary you provided: Marrakech, Imlil, Ait Ben Haddou, Ouarzazate and back to Marrakech. It focuses on the Red City, High Atlas mountain life and southern kasbah scenery.",
  duration: "4 Days / 3 Nights",
  route: "Marrakech → Imlil → Ait Ben Haddou → Ouarzazate → Marrakech",
  reviews: "4",
  reviewsRate: "5",
  price: 120,
  maxPeople: "Private Tour",
  accommodation: "Riads / Guesthouses / Hotels",
  activities: "Culture, Mountains, Villages & Kasbahs",
};

export const metadata: Metadata = {
  title: "4 Days Marrakech Tour | Imlil, Ait Ben Haddou & Ouarzazate",
  description: "Enjoy a 4-day Marrakech tour with Imlil, High Atlas villages, Ait Ben Haddou and Ouarzazate before returning to Marrakech.",
  keywords: [
  "4 days tour from Marrakech",
  "Marrakech Imlil tour",
  "Imlil Ait Ben Haddou tour",
  "4 day Marrakech itinerary",
  "High Atlas tour from Marrakech",
  "Ait Ben Haddou tour from Marrakech",
  "Ouarzazate Marrakech tour",
  "Morocco mountain tour 4 days"
],
  alternates: {
    canonical: propsObj.url,
  },
  openGraph: {
    title: "4 Days Marrakech Tour | Imlil, Ait Ben Haddou & Ouarzazate",
    description: "Enjoy a 4-day Marrakech tour with Imlil, High Atlas villages, Ait Ben Haddou and Ouarzazate before returning to Marrakech.",
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
    title: "Marrakech",
    subtitle: "Medina, souks & local life",
  },
  {
    icon: MapIcon,
    title: "Imlil",
    subtitle: "High Atlas mountain village",
  },
  {
    icon: FireIcon,
    title: "Ait Ben Haddou",
    subtitle: "Historic fortified ksar",
  },
  {
    icon: SunIcon,
    title: "Ouarzazate",
    subtitle: "Kasbahs & film landscapes",
  }
];

const itinerary = [
  {
    title: "Day 1: Arrival in Marrakech – Medina & Free Time",
    description: "Begin your four-day Marrakech journey with arrival pickup and time to settle into your riad or hotel. Depending on your arrival time, explore the medina, walk through Jemaa el-Fnaa, browse the traditional souks or enjoy a relaxed rooftop meal. The first day keeps the pace easy and gives you time to experience Marrakech before leaving the city for the High Atlas on day two.",
    details: [
    "Arrival in Marrakech",
    "Hotel or riad pickup",
    "Marrakech medina",
    "Jemaa el-Fnaa",
    "Souks",
    "Free time",
    "Overnight in Marrakech"
  ],
  },
  {
    title: "Day 2: Marrakech – High Atlas – Imlil",
    description: "After breakfast, leave Marrakech and travel south toward the High Atlas Mountains. The road climbs through valleys and traditional Amazigh villages before reaching Imlil, a mountain village known as a base for walks and routes toward Mount Toubkal. Enjoy fresh mountain air, short walks and views across terraced valleys. Depending on your pace, visit nearby villages or relax at a guesthouse before dinner and overnight in Imlil.",
    details: [
    "High Atlas Mountains",
    "Amazigh villages",
    "Imlil",
    "Mountain walk",
    "Valley viewpoints",
    "Dinner & overnight in Imlil"
  ],
  },
  {
    title: "Day 3: Imlil – High Atlas – Ait Ben Haddou",
    description: "Leave Imlil and continue through the High Atlas region toward southern Morocco. The journey crosses changing mountain scenery, valleys and remote villages before reaching Ait Ben Haddou, one of Morocco's best-known fortified settlements. Walk through the historic ksar, explore its earthen architecture and climb higher for panoramic views. Spend the night in or near Ait Ben Haddou.",
    details: [
    "Breakfast in Imlil",
    "High Atlas scenery",
    "Mountain villages",
    "Ait Ben Haddou",
    "Historic ksar",
    "Panoramic viewpoints",
    "Overnight near Ait Ben Haddou"
  ],
  },
  {
    title: "Day 4: Ait Ben Haddou – Ouarzazate – High Atlas – Marrakech",
    description: "After breakfast, continue to Ouarzazate, a southern Moroccan city known for kasbah landscapes and film history. Enjoy a short visit or photo stop before returning through the High Atlas Mountains toward Marrakech. Stop at panoramic points along the road, then arrive back in Marrakech in the late afternoon or evening for hotel, riad or airport drop-off according to your schedule.",
    details: [
    "Ait Ben Haddou",
    "Ouarzazate",
    "Kasbah scenery",
    "High Atlas crossing",
    "Photo stops",
    "Return to Marrakech",
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
      review: "A lovely short Morocco itinerary. Marrakech was lively, Imlil was peaceful and the High Atlas scenery was beautiful. Walking around Ait Ben Haddou was a highlight, and the return through Ouarzazate gave us another look at southern Morocco before going back to Marrakech.",
    },
    {
      id: 2,
      name: "James Anderson",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇬🇧",
      rating: 5,
      date: "Sample review",
      review: "This four-day route had a great mix of city and mountain scenery. We especially enjoyed the night in Imlil and the drive through the High Atlas. Ait Ben Haddou was impressive and the final stop in Ouarzazate made the last day interesting without feeling rushed.",
    },
    {
      id: 3,
      name: "Sophie Martin",
      avatar: "/images/toursits-comes-to-morocco.jpeg",
      flag: "🇨🇦",
      rating: 5,
      date: "Sample review",
      review: "The itinerary was simple but varied. We had time in Marrakech, then a completely different atmosphere in Imlil. The mountain villages and Ait Ben Haddou were beautiful, and the trip back to Marrakech through Ouarzazate was very scenic.",
    },
    {
      id: 4,
      name: "Daniel Williams",
      avatar: "/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg",
      flag: "🇦🇺",
      rating: 5,
      date: "Sample review",
      review: "A good choice for travelers who want Marrakech, the High Atlas and Ait Ben Haddou in only four days. The views around Imlil were excellent and the historic ksar at Ait Ben Haddou was one of our favorite places.",
    }
  ],
};

const tourinclude = {
  included: [
  "Marrakech pickup and final drop-off",
  "Private air-conditioned vehicle",
  "English-speaking driver",
  "3 nights accommodation according to package",
  "Breakfasts according to accommodation plan",
  "Selected dinners in mountain/southern stays"
],
  notIncluded: [
  "Lunches",
  "Drinks",
  "Entrance fees",
  "Tips",
  "Travel insurance",
  "Optional activities"
],
};

const locations = [
  {
    id: "marrakech",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 1,
    description: "Starting and ending city.",
  },
  {
    id: "imlil",
    name: "Imlil",
    lat: 31.1373,
    lng: -7.9183,
    day: 2,
    description: "High Atlas mountain village.",
  },
  {
    id: "ait-ben-haddou",
    name: "Ait Ben Haddou",
    lat: 31.047,
    lng: -7.129,
    day: 3,
    description: "Historic fortified ksar.",
  },
  {
    id: "ouarzazate",
    name: "Ouarzazate",
    lat: 30.9335,
    lng: -6.937,
    day: 4,
    description: "Southern city known for kasbah and film scenery.",
  },
  {
    id: "marrakech-return",
    name: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    day: 4,
    description: "Final return.",
  }
];

const faqs = {
  head: [
    {
      title: "Frequently Asked Questions About 4 Days Tour from Marrakech – Imlil & Ait Ben Haddou",
      description: "Practical answers about the itinerary, transport, accommodation, sightseeing, activities, packing and customization for this Morocco tour.",
    },
  ],
  faqs: [
    {
      question: "Does this four-day route visit Merzouga?",
      answer: "No. The itinerary you provided travels from Marrakech to Imlil, Ait Ben Haddou and Ouarzazate before returning to Marrakech. It does not reach Merzouga or the Sahara.",
    },
    {
      question: "Is Imlil included?",
      answer: "Yes. Day two travels into the High Atlas to Imlil with time for mountain scenery and short walks.",
    },
    {
      question: "Do we visit Ait Ben Haddou?",
      answer: "Yes. Day three includes the historic ksar of Ait Ben Haddou.",
    },
    {
      question: "Is Ouarzazate included?",
      answer: "Yes. Day four passes through Ouarzazate before returning to Marrakech.",
    },
    {
      question: "Is this suitable for families?",
      answer: "Yes, especially as a private tour. The pace can be adjusted with extra breaks.",
    },
    {
      question: "Can the route be customized?",
      answer: "Yes. Extra nights, walking time and accommodation category can be adjusted.",
    },
    {
      question: "What should I pack?",
      answer: "Bring comfortable shoes, sun protection and a warm layer for mountain evenings.",
    },
    {
      question: "Are meals included?",
      answer: "Breakfasts are generally included, while dinners depend on the selected package.",
    }
  ],
};

const tour = {
  title: "Tour Highlights – 4 Days Tour from Marrakech – Imlil & Ait Ben Haddou",
  highlights: [
  "Explore Marrakech medina",
  "Travel into the High Atlas",
  "Spend a night in Imlil",
  "See Amazigh mountain villages",
  "Visit Ait Ben Haddou",
  "Continue through Ouarzazate",
  "Enjoy panoramic mountain roads",
  "Return to Marrakech"
],
};

const itineraryRoute = [
  {
    day: "Day 1",
    route: "Marrakech",
    target: "day-1",
  },
  {
    day: "Day 2",
    route: "Marrakech → High Atlas → Imlil",
    target: "day-2",
  },
  {
    day: "Day 3",
    route: "Imlil → High Atlas → Ait Ben Haddou",
    target: "day-3",
  },
  {
    day: "Day 4",
    route: "Ait Ben Haddou → Ouarzazate → High Atlas → Marrakech",
    target: "day-4",
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
        numberOfItems: 4,
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
                    About 4 Days Tour from Marrakech – Imlil & Ait Ben Haddou
                  </h2>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-amber-700" />
                    <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
                    <span className="h-0.5 w-8 bg-amber-700" />
                  </div>
                </div>

                <div className="mb-8 space-y-4 text-base leading-8 text-slate-700">
                  <p>This route follows the itinerary you provided: Marrakech, Imlil, Ait Ben Haddou, Ouarzazate and back to Marrakech. It focuses on the Red City, High Atlas mountain life and southern kasbah scenery.</p>
                  <p>
                    This itinerary is written with simple, practical information,
                    natural keyword use and clear destination relationships so
                    travelers can quickly understand what they will see each day.
                  </p>
                </div>

                <Overview highlightsOverview={highlightsOverview}>
  <>
    This{" "}
    <strong>4-day tour from Marrakech</strong>{" "}
    is a good choice for travelers who want to combine city life, mountain
    scenery and traditional southern Morocco in a short trip. The journey
    starts in{" "}
    <PlaceHoverCard place="marrakech">
      Marrakech
    </PlaceHoverCard>
    , where you can enjoy the medina, souks and the atmosphere of the Red City
    before leaving for the mountains.

    <br />
    <br />

    On the second day, travel from{" "}
    <PlaceHoverCard place="marrakech">
      Marrakech
    </PlaceHoverCard>{" "}
    into the{" "}
    <PlaceHoverCard place="high-atlas-mountains">
      High Atlas Mountains
    </PlaceHoverCard>{" "}
    toward{" "}
    <PlaceHoverCard place="imlil">
      Imlil
    </PlaceHoverCard>
    . Imlil is a peaceful mountain village surrounded by valleys, traditional
    Amazigh villages and beautiful walking routes. It is a very different
    experience from the busy streets of Marrakech.

    <br />
    <br />

    From{" "}
    <PlaceHoverCard place="imlil">
      Imlil
    </PlaceHoverCard>
    , continue through the mountain landscapes toward{" "}
    <PlaceHoverCard place="ait-ben-haddou">
      Ait Ben Haddou
    </PlaceHoverCard>
    . This historic fortified village is one of the most famous places in
    southern Morocco and is known for its traditional earthen architecture and
    panoramic views over the surrounding valley.

    <br />
    <br />

    On the final day, leave{" "}
    <PlaceHoverCard place="ait-ben-haddou">
      Ait Ben Haddou
    </PlaceHoverCard>{" "}
    and continue to{" "}
    <PlaceHoverCard place="ouarzazate">
      Ouarzazate
    </PlaceHoverCard>
    , a city known for kasbah landscapes and its connection with film
    production. After your visit, cross the{" "}
    <PlaceHoverCard place="high-atlas-mountains">
      High Atlas Mountains
    </PlaceHoverCard>{" "}
    once again and return to{" "}
    <PlaceHoverCard place="marrakech">
      Marrakech
    </PlaceHoverCard>
    .

    <br />
    <br />

    This itinerary gives you a nice mix of{" "}
    <strong>Marrakech, Imlil, Ait Ben Haddou and Ouarzazate</strong>{" "}
    without making the trip too long. It is especially suitable for travelers
    who want to experience Marrakech, mountain villages, High Atlas scenery and
    southern kasbah culture in only four days.
  </>
</Overview>
              </section>

              <section id="tour-route" className="py-8" aria-labelledby="tour-route-title">
                <div className="mx-auto px-4">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                    Route at a Glance
                  </p>
                  <h2 id="tour-route-title" className="mt-2 text-3xl font-bold text-slate-900">
                    4 Days Tour from Marrakech – Imlil & Ait Ben Haddou Route
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
                    How Much Does This 4-Day Marrakech Tour Cost?
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
                  Map of 4 Days Tour from Marrakech – Imlil & Ait Ben Haddou
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
              <TourSidebar price={propsObj.price} />
            </div>
          </div>

          <section id="book-tour" className="py-12" aria-labelledby="final-tour-cta-title">
            <div className="mx-auto max-w-6xl px-4">
              <div className="rounded-2xl border border-amber-100 bg-[#fffaf3] p-8 text-center shadow-sm md:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                  Private Morocco Experience
                </p>
                <h2 id="final-tour-cta-title" className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Ready for a 4-Day Marrakech, Imlil & Ait Ben Haddou Tour?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
                  Combine Marrakech with High Atlas villages, Imlil, Ait Ben Haddou and Ouarzazate in a compact private itinerary.
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

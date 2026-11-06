import ReviewsSection from "@/Compentents/tour/Reveiws";
import { getTourReviewSchemaFields } from "@/lib/verifiedTourReviewData";
import { attachProductToTourGraph, serializeStructuredData } from "@/lib/tourProductSchema";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingLibraryIcon,
  FireIcon,
  HomeModernIcon,
  MapIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import TourFeatures from "@/Compentents/tour/whychose";
import TourNavigation from "@/Compentents/tour/contenttable";
import Overview from "@/Compentents/tour/overview";
import TourHighlights from "@/Compentents/tour/highlights";
import TourItinerary from "@/Compentents/tour/itinerary";
import TourInclusions from "@/Compentents/tour/include";
import WhatToBring from "@/Compentents/tour/bring";
import TourFAQs from "@/Compentents/tour/faqs";
import TourSidebar from "@/Compentents/tour/sidebar";
import TourMap from "@/Compentents/tour/tourmapclient";
import YouMayAlsoLike from "@/Compentents/tour/youmaylike";
import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";

import desertPhoto from "@/public/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg";
import fourDayPhoto from "@/public/tours/related/4-days-tour-from-marrakech-to-merzouga.jpg";
import marrakechToFesPhoto from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
import sevenDayPhoto from "@/public/tours/related/morocco-itinerary-7-days-from-marrakech.jpg";
import tenDayPhoto from "@/public/tours/related/morocco-itinerary-10-days-from-marrakech.jpg";

/** A full tour page at this requested address — not a redirect. */
const path = "/tour/3-days-tour-from-marrakech-to-merzouga/";
const url = absoluteSiteUrl(path);
const imageUrl = absoluteSiteUrl("/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg");
const pageTitle = "3 Days Tour from Marrakech to Merzouga";
const metaTitle = "3 Days Tour from Marrakech to Merzouga | Sahara Adventure";
const description =
  "Enjoy a 3 days tour from Marrakech to Merzouga with Atlas Mountain views, Ait Ben Haddou, Dades Valley, Todra Gorge, camel trekking and a Sahara camp.";

export const metadata: Metadata = {
  title: metaTitle,
  description,
  keywords: [
    "3 days tour from Marrakech to Merzouga",
    "3 day Marrakech to Merzouga tour",
    "Marrakech to Merzouga 3 day itinerary",
    "Marrakech Sahara tour 3 days",
    "Merzouga desert camp tour",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: metaTitle,
    description,
    url,
    type: "website",
    images: [{ url: imageUrl, alt: "Golden Sahara dunes in Merzouga on a 3-day tour from Marrakech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description,
    images: [imageUrl],
  },
  robots: { index: true, follow: true },
};

const highlightsOverview = [
  { icon: MapIcon, title: "High Atlas", subtitle: "Mountain scenery" },
  { icon: BuildingLibraryIcon, title: "Ait Ben Haddou", subtitle: "Historic kasbah" },
  { icon: MapIcon, title: "Dades & Todra", subtitle: "Valleys and gorges" },
  { icon: SunIcon, title: "Erg Chebbi", subtitle: "Sunset and sunrise" },
  { icon: HomeModernIcon, title: "Desert camp", subtitle: "A night in the Sahara" },
];

const itinerary = [
  {
    title: "Day 1: Marrakech – High Atlas Mountains – Ait Ben Haddou – Dades Valley",
    description:
      "Your 3 days tour from Marrakech to Merzouga begins with morning pickup from your hotel or riad. Travel through the High Atlas Mountains, passing mountain villages and stopping to enjoy the views from the Tizi n'Tichka route. At Ait Ben Haddou, discover the old earthen kasbah and its narrow paths, a famous stop for travelers crossing southern Morocco. Continue through Ouarzazate, the Skoura area and the Valley of Roses as the scenery changes from mountain peaks to rocky valleys and palm groves. Arrive in the Dades Valley for dinner and your first night in a hotel or riad. This first day is full of beautiful scenery, so expect time on the road as well as stops for photos and sightseeing.",
    details: ["Marrakech pickup", "Tizi n'Tichka", "Ait Ben Haddou", "Ouarzazate", "Dades Valley", "Hotel or riad"],
  },
  {
    title: "Day 2: Dades Valley – Todra Gorge – Erfoud – Merzouga Dunes",
    description:
      "After breakfast, head towards Tinghir and the tall rock walls of Todra Gorge. Enjoy a walk in the gorge and take time for photographs before continuing east across the dry landscapes of the Tafilalet region. Pass through Erfoud, known for its fossil workshops and nearby date-palm oases, and continue toward Merzouga. The golden dunes of Erg Chebbi appear as you get closer to the village. In the afternoon, meet your local camel guide for a ride on the sand dunes, with time to enjoy the desert colors at sunset. Reach your Sahara camp for a Moroccan dinner and a quiet evening under the stars. A 4x4 camp transfer may be arranged for guests who prefer not to ride a camel.",
    details: ["Todra Gorge", "Tinghir", "Erfoud", "Merzouga", "Camel trekking", "Desert camp"],
  },
  {
    title: "Day 3: Sahara Sunrise – Ouarzazate – Return to Marrakech",
    description:
      "Get up early if you would like to see the sunrise over the dunes, when the Sahara is peaceful and the sand changes color in the morning light. After breakfast at camp, return to the vehicle and begin the long drive back to Marrakech. On the way, see different views of the desert plateaus, villages, valleys and the High Atlas Mountains. There will be breaks during the journey, depending on the day's road conditions and timing. Cross the mountains and arrive back in Marrakech in the evening, where your driver will drop you at your agreed location. This is the longest driving day of the tour, so it is best to avoid planning an early evening flight or train connection.",
    details: ["Sunrise at Erg Chebbi", "Breakfast", "Return through Ouarzazate", "High Atlas Mountains", "Evening Marrakech drop-off"],
  },
];

const included = [
  "Pickup and drop-off at your accommodation in Marrakech",
  "Air-conditioned transport with a local driver",
  "One night in the Dades Valley at a hotel or riad",
  "One night at a camp near the Merzouga dunes",
  "Two dinners and two breakfasts",
  "Camel trekking experience at Erg Chebbi",
];
const notIncluded = [
  "Lunches and drinks",
  "Personal expenses and souvenirs",
  "Tips and optional activities",
  "Entrance fees or local guides where not stated in the booking confirmation",
];

const faqs = [
  {
    question: "Is three days enough to visit the Merzouga desert from Marrakech?",
    answer:
      "Yes, three days is a popular choice if you have limited time. It covers the High Atlas Mountains, Ait Ben Haddou, the Dades area, Todra Gorge and a night near the Erg Chebbi dunes. The driving days are long, especially on the way back to Marrakech.",
  },
  {
    question: "Where do we sleep during the three-day tour?",
    answer:
      "The usual plan includes a hotel or riad in the Dades Valley on the first night and a Sahara desert camp near Merzouga on the second night. Please confirm the exact accommodation category when you book.",
  },
  {
    question: "Can I book the Marrakech to Merzouga tour privately?",
    answer:
      "You can ask Moorish Tour about a private trip for your travel dates. A private tour allows more flexibility for stops and accommodation preferences; shared options depend on availability.",
  },
  {
    question: "Is a camel ride compulsory?",
    answer:
      "No. If you do not wish to ride a camel, ask in advance about reaching the desert camp by 4x4 instead.",
  },
  {
    question: "What time will we return to Marrakech on day three?",
    answer:
      "Return is normally in the evening, but the exact time depends on the weather, mountain roads, traffic and sightseeing stops. We recommend not booking an early evening departure from Marrakech that day.",
  },
  {
    question: "What should I pack for a night in the Sahara?",
    answer:
      "Bring comfortable shoes, sunglasses, sunscreen, a hat, water, a small overnight bag and a warm layer for cooler desert evenings and mornings.",
  },
];

const routeStops = [
  { id: "marrakech", name: "Marrakech", lat: 31.6295, lng: -7.9811, day: 1, description: "Departure and return city" },
  { id: "ait-ben-haddou", name: "Ait Ben Haddou", lat: 31.047, lng: -7.129, day: 1, description: "Historic kasbah stop" },
  { id: "dades", name: "Dades Valley", lat: 31.45, lng: -5.95, day: 1, description: "First-night accommodation area" },
  { id: "todra", name: "Todra Gorge", lat: 31.589, lng: -5.593, day: 2, description: "Rock gorge visit" },
  { id: "merzouga", name: "Merzouga", lat: 31.099, lng: -4.012, day: 2, description: "Desert camp and dune activities" },
  { id: "marrakech-return", name: "Marrakech return", lat: 31.6295, lng: -7.9811, day: 3, description: "Return on the third day" },
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: pageTitle,
      description,
      primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
      isPartOf: { "@id": "https://moorishtour.com/#website" },
    },
    {
      "@type": "TouristTrip",
      "@id": `${url}#trip`,
      name: pageTitle,
      url,
      description,
      image: imageUrl,
      touristType: "Travelers looking for a three-day Sahara Desert trip from Marrakech",
      itinerary: {
        "@type": "ItemList",
        itemListElement: itinerary.map((day, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: day.title,
          description: day.description,
        })),
      },
      provider: { "@id": "https://moorishtour.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteSiteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Morocco Tours", item: absoluteSiteUrl("/tour/") },
        { "@type": "ListItem", position: 3, name: pageTitle, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function ThreeDaysMarrakechMerzougaTourPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(attachProductToTourGraph(graph, { url, name: pageTitle, description, image: imageUrl, price: 195, priceCurrency: "EUR", ...getTourReviewSchemaFields(url) })) }}
      />

      <div className="bg-[#151515] border-b border-neutral-800">
        <nav aria-label="Breadcrumb" className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-5 text-sm text-gray-300">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/tour/" className="hover:text-amber-400">Tours</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="font-semibold text-[#D89A2B]">3 Days Marrakech to Merzouga</span>
        </nav>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16" aria-labelledby="tour-heading">
        <div className="grid items-center gap-9 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
            <Image
              src={desertPhoto}
              alt="Sahara sand dunes in Merzouga on the 3-day tour from Marrakech"
              width={940}
              height={650}
              priority
              fetchPriority="high"
              placeholder="blur"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
              3 Days / 2 Nights
            </span>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">Marrakech Sahara Tours</p>
            <h1 id="tour-heading" className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              3 Days Tour from Marrakech to Merzouga
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Cross the High Atlas Mountains, explore beautiful kasbahs and valleys, and spend a memorable night in a desert camp by the golden Erg Chebbi dunes.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-600">Marrakech → Dades Valley → Merzouga → Marrakech</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#reservation-form" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber-700 px-6 font-semibold text-white hover:bg-amber-800">
                Check Availability &amp; Book
              </a>
              <a href="#itinerary" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 px-6 font-semibold hover:bg-amber-50">
                View Day-by-Day Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection url={url} />
      <TourFeatures />
      <TourNavigation />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(285px,1fr)] lg:gap-9">
        <div className="min-w-0">
          <section id="overview" className="scroll-mt-36 py-12">
            <h2 className="mb-6 text-3xl font-bold">About This 3-Day Marrakech to Merzouga Tour</h2>
            <Overview highlightsOverview={highlightsOverview}>
              The journey begins in lively Marrakech and takes you across the Atlas Mountains, where the scenery changes from green mountain villages to dry rocky landscapes. Over three days, discover the historic Ait Ben Haddou kasbah, the Dades Valley and Todra Gorge before reaching Merzouga. Here you can enjoy a camel trek, sunset over the dunes and a night in a traditional-style desert camp. The return trip to Marrakech is long but gives you another chance to see Morocco&apos;s mountain and desert views. This itinerary is well suited to travelers who want a short Sahara experience while still visiting the main places along the route.
            </Overview>
            <div className="mt-8 rounded-xl bg-amber-50 p-6 text-sm leading-7 text-slate-700">
              <strong className="text-slate-900">A useful planning tip:</strong> This is a road trip with long drives on days one and three. For more time relaxing in the dunes, consider a 4-day desert tour instead.
            </div>
          </section>

          <section id="highlights" className="scroll-mt-36 py-10">
            <TourHighlights
              title="Highlights of the 3 Days Tour from Marrakech to Merzouga"
              highlights={[
                "Cross the High Atlas Mountains and enjoy views along Tizi n'Tichka",
                "Explore the famous Ait Ben Haddou kasbah near Ouarzazate",
                "Spend your first night among the scenery of the Dades Valley",
                "Walk between the towering rock walls of Todra Gorge",
                "Ride a camel across the dunes of Erg Chebbi at sunset",
                "Enjoy dinner and an overnight stay at a camp near Merzouga",
                "See the Sahara sunrise before heading back to Marrakech",
              ]}
            />
          </section>

          <section id="itinerary" className="scroll-mt-36 py-12">
            <TourItinerary title={pageTitle} days={itinerary} />
          </section>

          <section id="tourPrice" className="scroll-mt-36 py-8">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-2xl font-bold">Tour Price &amp; Booking Options</h2>
              <p className="mt-3 leading-7 text-slate-700">
                The tour is listed from €195 per person. Your final quote depends on your dates, group size, accommodation and whether you choose a private or shared tour. Use the booking form to confirm the current price and availability before making travel plans.
              </p>
              <a href="#reservation-form" className="mt-5 inline-flex font-semibold text-amber-800 underline underline-offset-4">Get a tour quote</a>
            </div>
          </section>

          <section id="included" className="scroll-mt-36 py-12">
            <TourInclusions title={pageTitle} included={included} notIncluded={notIncluded} />
          </section>

          <section id="info" className="scroll-mt-36 py-10">
            <WhatToBring description="The mountains can be cool and the Sahara can be hot during the day but cold at night. Pack light, bring water and keep your essentials in a small overnight bag for camp." />
          </section>

          <section id="map" className="scroll-mt-36 py-12">
            <h2 className="mb-6 text-3xl font-bold">Marrakech to Merzouga Route Map</h2>
            <p className="mb-6 leading-7 text-slate-700">Follow the route from Marrakech through Ait Ben Haddou and the Dades Valley to Merzouga, before returning to Marrakech on day three.</p>
            <TourMap locations={routeStops} />
          </section>

          <section id="faqs" className="scroll-mt-36 py-12">
            <TourFAQs
              head={[{ title: "Frequently Asked Questions", description: "Answers to common questions about a 3-day Sahara tour from Marrakech, including driving time, camping and what to pack." }]}
              faqs={faqs}
            />
          </section>
        </div>
        <div className="py-10 lg:py-12">
          <TourSidebar price={195} />
        </div>
      </div>

      <section id="book-tour" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center sm:p-12">
          <FireIcon className="mx-auto h-10 w-10 text-amber-700" aria-hidden="true" />
          <h2 className="mt-3 text-3xl font-bold">Ready to Experience the Sahara Desert?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-700">
            Tell us your travel dates and the number of guests. We can help you plan a 3-day tour from Marrakech to Merzouga with the right accommodation and desert activities.
          </p>
          <a href="#reservation-form" className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-amber-700 px-7 font-semibold text-white hover:bg-amber-800">Plan My Desert Tour</a>
        </div>
      </section>

      <YouMayAlsoLike
        tours={[
          { title: "4 Days Marrakech to Merzouga Desert Tour", href: "/tour/4-days-tour-from-marrakech-to-merzouga/", image: fourDayPhoto, duration: "4 DAYS" },
          { title: "4 Days Marrakech to Fes Tour", href: "/tour/4-days-tour-from-marrakech-to-fes/", image: marrakechToFesPhoto, duration: "4 DAYS" },
          { title: "Morocco 7-Day Tour from Marrakech", href: "/tour/morocco-itinerary-7-days-from-marrakech/", image: sevenDayPhoto, duration: "7 DAYS" },
          { title: "Morocco 10-Day Itinerary from Marrakech", href: "/tour/morocco-itinerary-10-days-from-marrakech/", image: tenDayPhoto, duration: "10 DAYS" },
        ]}
      />
    </main>
  );
}

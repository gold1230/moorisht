import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PopularMoroccoTours from "@/Compentents/tourFrom/mustPopular";
import { getTours } from "@/data/tourFilter";
import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import heroImage from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";

const pagePath = "/errachidia-desert-tours/";
const pageUrl = absoluteSiteUrl(pagePath);
const imageUrl = absoluteSiteUrl(
  "/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg"
);

const title = "Errachidia Desert Tours | Explore Merzouga & the Sahara";
const description =
  "Explore Errachidia desert tours to Merzouga and Erg Chebbi. Discover private Sahara trips, camel trekking, desert camps and flexible tours from Errachidia.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Errachidia desert tours",
    "tours from Errachidia",
    "Errachidia to Merzouga tour",
    "Errachidia Sahara Desert tours",
    "3 days from Errachidia to Merzouga",
    "Errachidia airport desert tour",
    "private desert tours from Errachidia",
    "Merzouga desert camp",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    images: [
      {
        url: imageUrl,
        width: 1521,
        height: 720,
        alt: "Travelers exploring the Sahara Desert near Merzouga, Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

const faqItems = [
  {
    question: "Can I start a Sahara Desert tour from Errachidia Airport?",
    answer:
      "Yes. Errachidia Moulay Ali Cherif Airport is a practical arrival point for trips to the Ziz Valley, Erfoud and Merzouga. Contact us with your flight details to arrange a suitable pickup and itinerary.",
  },
  {
    question: "How far is Errachidia from Merzouga?",
    answer:
      "Merzouga is about 123 km from Errachidia by road. Travel time depends on traffic, the route and sightseeing stops in places like the Ziz Valley and Erfoud.",
  },
  {
    question: "What can I see on a desert tour from Errachidia?",
    answer:
      "Popular stops include viewpoints over the Ziz Valley, Erfoud, Rissani and the Erg Chebbi dunes near Merzouga. Some itineraries also include Khamlia, local villages, camel trekking or a desert camp.",
  },
  {
    question: "Do you offer private Errachidia desert tours?",
    answer:
      "Yes. Our Errachidia tours include private tour options. You can ask us to adjust the route, pickup point, accommodation and activities to suit your group.",
  },
  {
    question: "Should I choose a 3-day or a 6-day tour from Errachidia?",
    answer:
      "A 3-day tour is ideal for visiting Merzouga and enjoying time in the Sahara. A 6-day tour gives you more time to discover valleys, gorges and villages in southeastern Morocco.",
  },
];

const highlights = [
  {
    title: "Arrive closer to the desert",
    text: "Start your journey in Errachidia and spend less time on long transfers from western Morocco.",
  },
  {
    title: "See the beautiful Ziz Valley",
    text: "Travel past palm groves, small villages and wide desert views on the way to Erfoud and Merzouga.",
  },
  {
    title: "Experience Erg Chebbi",
    text: "Enjoy the golden dunes near Merzouga, with options for camel trekking, sunset views and a desert camp.",
  },
  {
    title: "Travel at your own pace",
    text: "Choose a shorter Sahara escape or a longer private journey across southeastern Morocco.",
  },
];

export default function ErrachidiaDesertToursPage() {
  const tours = getTours({ collection: "tours-from-errachidia" });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Errachidia Desert Tours",
        description,
        image: imageUrl,
        inLanguage: "en",
        publisher: { "@id": "https://moorishtour.com/#organization" },
        mainEntity: { "@id": `${pageUrl}#tours` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#tours`,
        name: "Desert Tours from Errachidia",
        numberOfItems: tours.length,
        itemListElement: tours.map((tour, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tour.title,
          url: absoluteSiteUrl(`/${tour.slug}`),
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteSiteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Errachidia Desert Tours",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <Image
          src={heroImage}
          alt="Visitors enjoying the Sahara Desert landscape near Merzouga"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/25" />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/85">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-amber-300">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">
                Errachidia Desert Tours
              </li>
            </ol>
          </nav>
          <p className="mt-11 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
            Explore Morocco&apos;s Sahara
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Errachidia Desert Tours to Merzouga &amp; the Sahara
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
            Start your Morocco desert adventure in Errachidia. Discover the Ziz Valley,
            Erfoud and the golden dunes of Merzouga on a private Sahara tour with
            local experiences, desert activities and flexible itineraries.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#errachidia-tours"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber-700 px-6 font-semibold text-white transition hover:bg-amber-800"
            >
              Explore Errachidia Tours
            </a>
            <Link
              href="/contact/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/70 px-6 font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              Plan Your Private Trip
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Your gateway to Erg Chebbi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore the Best Desert Tours from Errachidia
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Errachidia is one of the easiest places to begin a trip to Morocco&apos;s
            southeastern desert. From the city and its airport, you can head
            south through the palm-filled Ziz Valley toward Erfoud, Rissani and
            Merzouga. This makes Errachidia a convenient starting point for
            travelers who want to experience the Sahara without a long journey
            from Marrakech or Fes.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Our Errachidia desert tours include a shorter 3-day journey to the
            Erg Chebbi dunes and a longer 6-day adventure through southern
            Morocco. Depending on the itinerary, you can enjoy camel trekking,
            sunset views, local villages, desert camping and time to discover
            the landscapes around Merzouga.
          </p>
        </div>
      </section>

      <div id="errachidia-tours" className="scroll-mt-20">
        <PopularMoroccoTours
          collection="tours-from-errachidia"
          title="Choose Your Errachidia Desert Tour"
          description="Discover our 3-day and 6-day private desert itineraries starting in Errachidia."
        />
      </div>

      <section className="bg-amber-50 py-14 sm:py-20" aria-labelledby="why-errachidia">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 id="why-errachidia" className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Why Start Your Morocco Sahara Tour in Errachidia?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {highlights.map(({ title: heading, text }) => (
              <div key={heading} className="rounded-xl border border-amber-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{heading}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Errachidia to Merzouga: What to Expect
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Most trips from Errachidia toward the Sahara follow the Ziz Valley,
            with its green oasis and views of traditional villages. After passing
            through Erfoud and the Tafilalet region, the scenery changes as you
            approach Merzouga and the sand dunes of Erg Chebbi.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            A 3-day Errachidia desert tour gives you time to enjoy the Merzouga
            area and activities such as camel trekking or a night in a desert camp.
            If you choose the 6-day tour, your journey can also take in Todra
            Gorge, Dades Valley and the surrounding villages. Visit each tour
            page for its exact day-by-day itinerary and inclusions.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            You can also explore our <Link href="/locations/errachidia/" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">Errachidia travel guide</Link> for
            useful information about the city, nearby places and planning your
            arrival.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20" aria-labelledby="errachidia-faq">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <h2 id="errachidia-faq" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Errachidia Desert Tours: Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-3">
            {faqItems.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-slate-900 marker:text-amber-700">
                  {question}
                </summary>
                <p className="mt-3 text-base leading-7 text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Plan Your Desert Trip from Errachidia</h2>
            <p className="mt-3 text-base leading-7 text-slate-200">
              Tell us your travel dates, group size and the desert experiences
              you would like to enjoy. We can help you choose the right itinerary.
            </p>
          </div>
          <Link
            href="/contact/"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-amber-700 px-7 font-semibold text-white transition hover:bg-amber-800"
          >
            Contact Moorish Tour
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents, { type TableOfContentItem } from "@/Compentents/blogtour/contentTable";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Section9 from "./section9";
import Section10 from "./section10";
import Section11 from "./section11";
import Section12 from "./section12";
import Section13 from "./section13";

const metainfo = {
  title: "3 Days in Morocco: Tours, Ideas, and Travel Tips",
  description: "Explore the best ways to enjoy three days in Morocco, from Marrakech and Fes to desert tours, Atlas Mountains and local cultural experiences.",
};

export const metadata: Metadata = {
  title: "3 Days in Morocco: Best Tours, Itineraries & Travel Tips | Moorish Tour",
  description: "Plan 3 days in Morocco with Moorish Tour. Compare Marrakech, Fes, Casablanca and Merzouga trips, sample itineraries, Sahara tours, costs, weather and local tips.",
  alternates: { canonical: "https://moorishtour.com/3-days-in-morocco-tours-ideas-and-travel-tips/" },
  openGraph: {
    type: "article",
    title: "3 Days in Morocco: Best Tours, Itineraries & Travel Tips",
    description: "Plan 3 days in Morocco with Moorish Tour. Compare Marrakech, Fes, Casablanca and Merzouga trips, sample itineraries, Sahara tours, costs, weather and local tips.",
    url: "https://moorishtour.com/3-days-in-morocco-tours-ideas-and-travel-tips/",
    siteName: "Moorish Tour",
    publishedTime: "2025-12-17T16:25:00+01:00",
  },
  twitter: { card: "summary_large_image", title: "3 Days in Morocco: Best Tours, Itineraries & Travel Tips", description: "Plan 3 days in Morocco with Moorish Tour. Compare Marrakech, Fes, Casablanca and Merzouga trips, sample itineraries, Sahara tours, costs, weather and local tips." },
};

const tableOfContents: TableOfContentItem[] = [
  { label: "3 Days in Morocco: Tours, Ideas, and Travel Tips", href: "#3-days-in-morocco-tours-ideas-and-travel-tips" },
  { label: "Our Best 3 Days Morocco Tours to Different Destinations", href: "#our-best-3-days-morocco-tours-to-different-destinations" },
  { label: "3 Days in Morocco: Best Short Tours and Travel Ideas", href: "#3-days-in-morocco-best-short-tours-and-travel-ideas" },
  { label: "3 Day Morocco Itinerary for Desert, Cities, and Nature", href: "#3-day-morocco-itinerary-for-desert-cities-and-nature" },
  { label: "Three Days in Morocco: What to See and Where to Go", href: "#three-days-in-morocco-what-to-see-and-where-to-go" },
  { label: "3 Day Trip to Morocco: A Simple Plan for a Short Stay", href: "#3-day-trip-to-morocco-a-simple-plan-for-a-short-stay" },
  { label: "Morocco 3 Day Itinerary from Marrakech, Fes, and Casablanca", href: "#morocco-3-day-itinerary-from-marrakech-fes-and-casablanca" },
  { label: "3 Days Morocco Desert Tour to Merzouga Sahara", href: "#3-days-morocco-desert-tour-to-merzouga-sahara" },
  { label: "3 Days in Morocco for Couples, Families, and Friends", href: "#3-days-in-morocco-for-couples-families-and-friends" },
  { label: "3 Day Morocco Tour Prices, Tips, and Travel Info", href: "#3-day-morocco-tour-prices-tips-and-travel-info" },
  { label: "Three Days in Morocco: Best Time to Visit and Weather", href: "#three-days-in-morocco-best-time-to-visit-and-weather" },
  { label: "Frequently Asked Questions About 3 Days in Morocco", href: "#frequently-asked-questions-about-3-days-in-morocco" },
  { label: "Plan Your 3 Days in Morocco with Moorish Tour", href: "#plan-your-3-days-in-morocco-with-moorish-tour" },

];

export default function ThreeDaysMoroccoPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "3 Days in Morocco: Tours, Ideas, and Travel Tips",
    description: metadata.description,
    mainEntityOfPage: "https://moorishtour.com/3-days-in-morocco-tours-ideas-and-travel-tips/",
    datePublished: "2025-12-17T16:25:00+01:00",
    author: { "@type": "Organization", name: "Moorish Tour", url: "https://moorishtour.com/" },
    publisher: { "@type": "Organization", name: "Moorish Tour", url: "https://moorishtour.com/" },
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c") }} />
      <MarrakechMerzougaBlogHero metainfo={metainfo} />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
        <article className="min-w-0">
          <BlogTableOfContents
            title="Table of Contents"
            description="Find the three-day Morocco tour, sample itinerary or travel tip you need."
            items={tableOfContents}
          />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section11 />
          <Section12 />
          <Section13 />
          <section className="mt-12 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">
            <h2 className="text-3xl font-bold text-[#102043]">Ready to Plan Your 3 Days in Morocco?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">
              Tell Moorish Tour where you want to start, how many people are traveling,
              and whether you prefer the Sahara, historic cities or mountain scenery.
              We can help you choose a realistic three-day route.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/plan-your-morocco-tour" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-bold text-white transition hover:bg-amber-800">
                Plan Your Morocco Tour
                <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 text-base font-bold text-slate-900 transition hover:bg-amber-50">Contact Us</Link>
            </div>
          </section>
        </article>
        <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Travelers planning a custom three-day Morocco tour" ctaHref="/plan-your-morocco-tour" />
      </div>
    </main>
  );
}

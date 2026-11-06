import type { Metadata } from "next";
import Link from "next/link";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
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
import Section14 from "./section14";
import Section15 from "./section15";
import Section16 from "./section16";
import { tableOfContents } from "./tableOfContents";

const canonical = "https://moorishtour.com/top-5-best-merzouga-luxury-desert-camps/";
const metainfo = {
  title: "Top 5 Best Merzouga Luxury Desert Camps, Morocco",
  description: "Compare 5 Merzouga luxury desert camps near Erg Chebbi. Explore dome tents, private bathrooms, Sahara activities, prices, seasons and booking tips.",
};
export const metadata: Metadata = {
  title: "Top 5 Best Merzouga Luxury Desert Camps | Moorish Tour",
  description: metainfo.description,
  alternates: { canonical },
  openGraph: {
    type: "article", title: metainfo.title, description: metainfo.description,
    url: canonical, siteName: "Moorish Tour",
    images: [{url:"https://moorishtour.com/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg", width:1200,height:630,alt:"Luxury Sahara desert camp near Merzouga, Morocco"}],
    publishedTime: "2023-11-01T00:00:00+00:00",
    modifiedTime: "2026-10-10T00:00:00+00:00",
  },
  twitter: {card:"summary_large_image",title:metainfo.title,description:metainfo.description},
};

export default function MerzougaLuxuryDesertCampsPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: metainfo.title, description:metainfo.description,
    mainEntityOfPage:canonical,
    datePublished:"2023-11-01", dateModified:"2026-10-10",
    author:{"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"},
    publisher:{"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"},
  };
  return <main className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
    <MarrakechMerzougaBlogHero metainfo={metainfo} />
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
      <article className="min-w-0">
        <BlogTableOfContents title="Table of Contents" description="Compare five desert camps, learn about tent facilities, Sahara travel and booking tips." items={tableOfContents} />
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
        <Section14 />
        <Section15 />
        <Section16 />
        <section className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">
          <h2 className="text-3xl font-bold text-[#102043]">Plan Your Luxury Sahara Night with Moorish Tour</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Share your travel dates, number of guests and starting city. We can help you plan a comfortable desert trip, compare camp styles and organize your journey around Merzouga.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/plan-your-morocco-tour" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-bold text-white transition hover:bg-amber-800">Plan a Sahara Tour <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
            <Link href="/contact/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 text-base font-bold text-slate-900 transition hover:bg-amber-50">Contact Us</Link>
          </div>
        </section>
      </article>
      <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a Merzouga luxury desert camp trip with Moorish Tour" ctaHref="/plan-your-morocco-tour" />
    </div>
  </main>;
}

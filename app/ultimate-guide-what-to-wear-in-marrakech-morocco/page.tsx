import type { Metadata } from "next";
import Link from "next/link";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";
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
import Section17 from "./section17";
import { tableOfContents } from "./tableOfContents";

const canonical = "https://moorishtour.com/ultimate-guide-what-to-wear-in-marrakech-morocco/";
const metainfo = {
 title: "Ultimate Guide: What to Wear in Marrakech, Morocco",
 description: "What to wear in Marrakech, Morocco: easy outfit ideas for women and men, seasonal packing lists, medina dress tips and what to wear in the Sahara Desert.",
};
export const metadata: Metadata = {
 title: "What to Wear in Marrakech, Morocco: Complete Packing Guide | Moorish Tour",
 description: metainfo.description,
 alternates: {canonical},
 openGraph: {
  type: "article", title: metainfo.title, description: metainfo.description,
  url:canonical, siteName:"Moorish Tour",
  images:[{url:new URL(MarrakechToFes4DayHero.src, "https://moorishtour.com").toString(),width:1200,height:630,alt:"Clothing and travel tips for Marrakech, Morocco"}],
  publishedTime:"2024-08-04T13:02:00+01:00",modifiedTime:"2026-10-10T00:00:00+01:00",
 },
 twitter: {card:"summary_large_image",title:metainfo.title,description:metainfo.description},
};

export default function MarrakechClothingGuidePage() {
 const schema={
  "@context":"https://schema.org","@type":"BlogPosting",
  headline:metainfo.title,description:metainfo.description,mainEntityOfPage:canonical,
  datePublished:"2024-08-04T13:02:00+01:00",dateModified:"2026-10-10T00:00:00+01:00",
  author:{"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"},
  publisher:{"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"},
 };
 return <main className="bg-white">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
  <MarrakechMerzougaBlogHero metainfo={metainfo} />
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
   <article className="min-w-0">
    <BlogTableOfContents title="Table of Contents" description="Explore Marrakech dress tips, seasonal outfits, Sahara clothing, packing lists and practical travel questions." items={tableOfContents} />
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
    <Section17 />
    <section className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">
     <h2 className="text-3xl font-bold text-[#102043]">Ready to Discover Marrakech and the Sahara?</h2>
     <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Tell Moorish Tour your dates, arrival city and the experiences you want. Our local team can help you plan a private Morocco journey and prepare for each destination.</p>
     <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Link href="/plan-your-morocco-tour" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-bold text-white transition hover:bg-amber-800">Plan Your Morocco Tour <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
      <Link href="/contact/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 text-base font-bold text-slate-900 transition hover:bg-amber-50">Contact Moorish Tour</Link>
     </div>
    </section>
   </article>
   <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a comfortable Marrakech or Sahara tour with Moorish Tour" ctaHref="/plan-your-morocco-tour" />
  </div>
 </main>;
}

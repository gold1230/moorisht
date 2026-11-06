import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import MerzougaTravelGuideArticle from "./MerzougaTravelGuideArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";

const canonical = "https://moorishtour.com/city-of-merzouga-easy-travel-guide/";
const meta = {
 title: "City of Merzouga: The Easy Travel Guide to Morocco’s Sahara Desert",
 description: "Explore Merzouga with local travel tips: Erg Chebbi dunes, camel trekking, desert camps, best time to visit, 1–3 day itineraries and how to get there.",
};
const ogImage = "https://moorishtour.com/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
export const metadata: Metadata = {
 title: "Merzouga Travel Guide: Things to Do, Desert Camps & Tips | Moorish Tour",
 description: meta.description,
 keywords: ["Merzouga travel guide", "things to do in Merzouga", "Erg Chebbi dunes", "Merzouga desert camp", "Merzouga camel trekking", "how to get to Merzouga", "best time to visit Merzouga", "Merzouga 2 day itinerary"],
 alternates: { canonical },
 robots: { index: true, follow: true },
 openGraph: {
  title: meta.title, description: meta.description, url: canonical, type: "article", siteName: "Moorish Tour",
  publishedTime: "2025-05-30T14:57:00+01:00",
  images: [{ url: ogImage, width: 1200, height: 630, alt: "Camel riders among the golden Erg Chebbi dunes near Merzouga" }],
 },
 twitter: {card:"summary_large_image",title:meta.title, description:meta.description, images:[ogImage]},
};

export default function MerzougaTravelGuidePage(){
 const publisher={"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
 const structuredData={"@context":"https://schema.org","@graph":[
  {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,datePublished:"2025-05-30",inLanguage:"en",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:publisher,publisher,image:ogImage,about:[{"@type":"Place",name:"Merzouga",address:{"@type":"PostalAddress",addressCountry:"MA"}},{"@type":"Place",name:"Erg Chebbi dunes"}],keywords:["Merzouga travel guide","Erg Chebbi","Merzouga desert camp","Sahara desert tours"]},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Merzouga Travel Guide",item:canonical}]},
  {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
 ]};
 return <main className="bg-white">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}} />
  <MarrakechMerzougaBlogHero metainfo={meta} />
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
   <div className="min-w-0">
    <BlogTableOfContents title="Table of Contents" description="Quick answers, dunes, local culture, trips, seasons, camp stays and practical advice." items={tableOfContents}/>
    <MerzougaTravelGuideArticle />
    <section aria-labelledby="merzouga-final-cta" className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">
     <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">Plan your Sahara holiday</p>
     <h2 id="merzouga-final-cta" className="mt-3 text-3xl font-bold text-[#102043]">Discover Merzouga With Moorish Tour</h2>
     <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Tell us where you will arrive, how many nights you have and what you most want to experience. We will help you build a relaxed desert plan, with clear details about your camp, transfers and activities.</p>
     <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Link href="/contact/" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800">Ask About a Private Tour <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1"/></Link>
      <Link href="/all-morocco-tours-packages/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 font-bold text-[#102043] hover:bg-amber-50">Explore Desert Tours</Link>
     </div>
    </section>
   </div>
   <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a guided desert trip with Moorish Tour" ctaHref="/plan-your-morocco-tour" />
  </div>
 </main>;
}

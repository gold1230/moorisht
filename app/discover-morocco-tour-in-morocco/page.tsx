import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import DiscoverMoroccoTourArticle from "./DiscoverMoroccoTourArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";

const canonical = "https://moorishtour.com/discover-morocco-tour-in-morocco/";
const meta = {
 title: "Discover Morocco Tour in Morocco: Complete Travel Guide & Itineraries",
 description: "Discover Morocco tours with Moorish Tour: Marrakech, Fes, Sahara dunes, Atlas Mountains, private trips, 7–14-day itineraries, costs and local travel tips.",
};
export const metadata: Metadata = {
 title: "Discover Morocco Tour: Routes, Sahara & Cities | Moorish Tour",
 description: meta.description,
 keywords: ["Discover Morocco tour", "discover Morocco travel", "Morocco private tour", "Morocco 7 day itinerary", "Morocco 10 day itinerary", "Sahara desert tour Morocco", "Marrakech to Merzouga tour", "Morocco guided tour"],
 alternates: { canonical },
 robots: { index: true, follow: true },
 openGraph: { title: meta.title, description: meta.description, url: canonical, type:"article", siteName:"Moorish Tour",
   publishedTime:"2024-06-16T01:46:00+01:00",
   images:[{url:"https://moorishtour.com/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg",width:1200,height:630,alt:"Discover the cities, desert and mountains of Morocco"}] },
 twitter: { card:"summary_large_image", title:meta.title, description:meta.description, images:["https://moorishtour.com/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg"] },
};
export default function DiscoverMoroccoTourPage(){
 const org={"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
 const graph={"@context":"https://schema.org","@graph":[
  {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,datePublished:"2024-06-16",inLanguage:"en",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:org,publisher:org,image:"https://moorishtour.com/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg",about:[{"@type":"Place",name:"Morocco"},{"@type":"Thing",name:"Morocco sightseeing tours and travel itineraries"}],keywords:["Discover Morocco tour","Merzouga desert trip","Marrakech Morocco tour","Fes guided tour","Morocco travel itinerary"]},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Discover Morocco Tour",item:canonical}]},
  {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
 ]};
 return <main className="bg-white">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph).replace(/</g,"\u003c")}} />
  <MarrakechMerzougaBlogHero metainfo={meta}/>
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
   <div className="min-w-0">
    <BlogTableOfContents title="Table of Contents" description="Explore Morocco's best destinations, sample 7–14-day routes, accommodation, seasons, budgets and FAQs." items={tableOfContents}/>
    <DiscoverMoroccoTourArticle />
    <section aria-labelledby="discover-final-cta" className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">
     <h2 id="discover-final-cta" className="text-3xl font-bold text-[#102043]">Discover Morocco With Moorish Tour</h2>
     <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Tell us your travel dates, arrival city and the experiences you want most. We will help you plan a practical route with time to enjoy the cities, mountains, culture and Sahara.</p>
     <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Link href="/contact/" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800">Request a Custom Tour <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1"/></Link>
      <Link href="/all-morocco-tours-packages/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 font-bold text-[#102043] hover:bg-amber-50">Explore More Tours</Link>
     </div>
    </section>
   </div>
   <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a scenic guided tour across Morocco" ctaHref="/plan-your-morocco-tour" />
  </div>
 </main>;
}

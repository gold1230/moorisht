import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";

// Local article imports: all these files sit BESIDE page.tsx in this one folder.
import MoroccanFoodTourArticle from "./MoroccanFoodTourArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";

const canonical = "https://moorishtour.com/moroccan-food-tour-the-tasty-heart-of-morocco/";
const meta = {
 title: "Moroccan Food Tour: The Tasty Heart of Morocco",
 description: "Explore Moroccan food tours, Marrakech and Fes flavours, tagine, couscous, street food, cooking classes, vegetarian choices and culinary itineraries with Moorish Tour."
};
export const metadata: Metadata = {
 title: "Moroccan Food Tour: Local Dishes & Culinary Guide | Moorish Tour",
 description: meta.description,
 alternates: {canonical},
 robots: {index: true, follow: true},
 openGraph: {title: meta.title, description: meta.description, url: canonical, type:"article", siteName:"Moorish Tour", publishedTime:"2025-06-28T18:11:00+01:00", modifiedTime:"2026-10-11T09:29:00+01:00"},
 twitter: {card:"summary_large_image", title:meta.title, description:meta.description}
};
export default function MoroccanFoodTourPage(){
 const organization = {"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
 const graph = {"@context":"https://schema.org","@graph":[
  {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,datePublished:"2025-06-28",dateModified:"2026-10-11",inLanguage:"en",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:organization,publisher:organization,about:[{"@type":"Thing",name:"Moroccan cuisine"},{"@type":"Place",name:"Morocco"}],keywords:["Moroccan food tour","Marrakech food tour","Fes cooking class","Moroccan cuisine","Morocco culinary holiday"]},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Moroccan Food Tour",item:canonical}]},
  {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
 ]};
 return <main className="bg-white">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph).replace(/</g,"\\u003c")}} />
  <MarrakechMerzougaBlogHero metainfo={meta} />
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
   <article className="min-w-0">
    <BlogTableOfContents title="Table of Contents" description="Explore Moroccan dishes, regional food tours, market experiences, cooking classes, travel tips and itineraries." items={tableOfContents} />
    <MoroccanFoodTourArticle />
    <section className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9" aria-labelledby="food-tour-final-cta">
     <h2 id="food-tour-final-cta" className="text-3xl font-bold text-[#102043]">Plan Your Morocco Food and Culture Experience</h2>
     <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Share your dates, food interests and preferred cities. Explore a private Morocco journey combining local flavours, cultural visits and beautiful destinations.</p>
     <div className="mt-6 flex flex-wrap justify-center gap-3"><Link href="/contact/" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800">Request Your Itinerary <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" /></Link><Link href="/all-morocco-tours-packages/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 font-bold text-[#102043] hover:bg-amber-50">Browse Morocco Tours</Link></div>
    </section>
   </article>
   <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a custom Morocco culinary and cultural tour" ctaHref="/contact/" />
  </div>
 </main>;
}

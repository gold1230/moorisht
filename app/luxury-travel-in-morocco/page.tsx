import type {Metadata} from "next";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import LuxuryTravelMoroccoArticle from "./LuxuryTravelMoroccoArticle";
import {tableOfContents} from "./tableOfContents";
import {faqs} from "./faqData";
const canonical = "https://moorishtour.com/luxury-travel-in-morocco/";
const meta = {title:"Luxury Travel in Morocco: Beautiful Riads, Private Desert Camps and Tailor-Made Tours", description:"Plan luxury travel in Morocco with private tours, beautiful Marrakech riads, Sahara desert camps, Atlas retreats, coastal stays and practical booking tips."};
const ogImage = canonical + "opengraph-image";
export const metadata: Metadata = {
 title:"Luxury Travel in Morocco: Tours & Riads | Moorish Tour", description:meta.description,
 alternates:{canonical}, robots:{index:true,follow:true},
 openGraph:{type:"article",url:canonical,siteName:"Moorish Tour",title:meta.title,description:meta.description,publishedTime:"2025-02-07",images:[{url:ogImage,width:1200,height:630,alt:"Luxury travel in Morocco with private tours, elegant riads and desert camps"}]},
 twitter:{card:"summary_large_image",title:meta.title,description:meta.description,images:[ogImage]},
};
const organization={"@type":"TravelAgency","@id":"https://moorishtour.com/#organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
const structuredData={"@context":"https://schema.org","@graph":[
 organization,
 {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,inLanguage:"en",datePublished:"2025-02-07",dateModified:"2026-10-11",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:organization,publisher:organization,image:ogImage,about:[{"@type":"Place",name:"Morocco"},{"@type":"Thing",name:"Luxury accommodation and private travel"}],keywords:["luxury tours Morocco","Luxury Morocco travel","Merzouga luxury desert camp","Private Morocco tours","Morocco luxury travel guide"]},
 {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Luxury Travel in Morocco",item:canonical}]},
 {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
]};
export default function LuxuryTravelMoroccoPage(){return <main className="bg-white">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}}/>
 <MarrakechMerzougaBlogHero metainfo={meta}/>
 <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
  <div className="min-w-0">
   <div className="mb-8 grid gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:grid-cols-3 sm:p-6">
    {[{n:"01",t:"Choose your route",d:"City, Atlas or Sahara"},{n:"02",t:"Compare the details",d:"Guides, stays and costs"},{n:"03",t:"Travel with confidence",d:"Plan the right pace"}].map(i=><div key={i.n} className="rounded-xl border border-white bg-white p-4"><span className="text-xs font-bold text-amber-700">{i.n}</span><p className="mt-1 font-extrabold text-[#102043]">{i.t}</p><p className="mt-1 text-sm text-slate-600">{i.d}</p></div>)}
   </div>
   <BlogTableOfContents title="Your Morocco luxury travel guide" description="Compare luxury stays, private tours, desert camps and ways to plan an unforgettable journey." items={tableOfContents}/>
   <LuxuryTravelMoroccoArticle/>
   <section aria-labelledby="luxury-morocco-final-cta" className="mt-16 overflow-hidden rounded-2xl bg-[#102043] p-7 text-center text-white sm:p-10">
    <p className="text-xs font-bold uppercase tracking-widest text-amber-300">Moorish Tour</p>
    <h2 id="luxury-morocco-final-cta" className="mt-3 text-3xl font-extrabold">Ready to plan your own luxury Morocco holiday?</h2>
    <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-200">Tell us your dates and interests. Compare elegant riads, Atlas stays and a Sahara desert experience with a practical private itinerary.</p>
    <div className="mt-6 flex flex-wrap justify-center gap-3"><Link href="/contact/" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-bold text-[#102043] hover:bg-amber-400">Contact Moorish Tour <ArrowRightIcon className="h-4 w-4"/></Link><Link href="/all-morocco-tours-packages/" className="inline-flex items-center rounded-lg border border-white/50 px-6 py-3 font-bold text-white hover:bg-white/10">Browse all tours</Link></div>
   </section>
  </div>
  <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a private luxury tour with Moorish Tour" ctaHref="/plan-your-morocco-tour"/>
 </div>
</main>}

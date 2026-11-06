import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import ComprehensiveMoroccoToursArticle from "./ComprehensiveMoroccoToursArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";
const canonical="https://moorishtour.com/comprehensive-guide-to-morocco-tours-2024/";
const meta={title:"A Comprehensive Guide to Morocco Tours: Cities, Sahara, Routes & Travel Tips",description:"Plan Morocco tours with clear 3\u201314 day itineraries, Sahara and city highlights, routes from the USA and Spain, travel costs, seasons and local tips."};
const ogImage=canonical+"opengraph-image";
export const metadata: Metadata = {
 title:"Morocco Tours Guide: Routes, Costs & Travel Tips | Moorish Tour", description:meta.description,
 keywords:["Morocco tours", "Morocco tour packages", "comprehensive guide to Morocco tours", "Morocco tours from USA", "Morocco tours from Spain", "Morocco tour from Casablanca", "Morocco tour from Tangier", "Morocco desert tours", "7 day Morocco tour", "10 day Morocco itinerary", "private Morocco tours"],
 alternates:{canonical}, robots:{index:true,follow:true},
 openGraph:{type:"article",url:canonical,siteName:"Moorish Tour",title:meta.title,description:meta.description,publishedTime:"2024-06-16",modifiedTime:"2026-10-13",images:[{url:ogImage,width:1200,height:630,alt:"Comprehensive guide to Morocco tours with cities, Sahara and travel routes"}]},
 twitter:{card:"summary_large_image",title:meta.title,description:meta.description,images:[ogImage]}
};
const agency={"@type":"TravelAgency","@id":"https://moorishtour.com/#organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
const schema={"@context":"https://schema.org","@graph":[
 agency,
 {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,inLanguage:"en",datePublished:"2024-06-16",dateModified:"2026-10-13",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:agency,publisher:agency,image:ogImage,about:[{"@type":"Place",name:"Morocco"},{"@type":"Thing",name:"Morocco tours and itineraries"}]},
 {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Morocco Tours Guide",item:canonical}]},
 {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
]};
export default function ComprehensiveMoroccoToursPage(){return <main className="bg-white">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\u003c")}}/>
 <MarrakechMerzougaBlogHero metainfo={meta} />
 <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
  <div className="min-w-0">
   <div className="mb-9 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-[#fff8e9] via-white to-[#e9f2f3] p-6 sm:p-8">
    <p className="text-xs font-black uppercase tracking-[.18em] text-amber-800">Travel planning made simple · Updated October 2026</p>
    <p className="mt-3 text-2xl font-black leading-snug text-[#102043] sm:text-3xl">One guide. Many beautiful ways to explore Morocco.</p>
    <p className="mt-4 text-[16px] leading-8 text-slate-700">Explore easy-to-follow routes, realistic travel days, local experiences and the little things that help every trip feel comfortable. Start with your available days and the places you truly want to see.</p>
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
     {[{number:"03–14",title:"Day-by-day ideas",detail:"Short breaks to grand tours"},{number:"USA · EU",title:"Arrival guidance",detail:"Flights, ferries and ports"},{number:"Local",title:"Travel insights",detail:"Food, customs and practical tips"}].map(x=><div key={x.number} className="rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm"><span className="text-lg font-black text-amber-800">{x.number}</span><p className="mt-1 text-sm font-extrabold text-[#102043]">{x.title}</p><p className="mt-1 text-xs leading-5 text-slate-600">{x.detail}</p></div>)}
    </div>
   </div>
   <BlogTableOfContents title="Explore this Morocco tours guide" description="Choose a topic: destinations, tours from overseas, realistic itineraries, costs, travel styles and FAQs." items={tableOfContents}/>
   <ComprehensiveMoroccoToursArticle/>
   <section aria-labelledby="comprehensive-guide-final-cta" className="mt-16 rounded-3xl bg-[#102043] p-7 text-center text-white sm:p-10">
    <p className="text-xs font-black uppercase tracking-widest text-amber-300">Explore with Moorish Tour</p>
    <h2 id="comprehensive-guide-final-cta" className="mt-3 text-3xl font-black">Ready to make this journey your own?</h2>
    <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200">Tell us your dates, arrival city, group size and favorite experiences. Ask about a comfortable route that makes the most of your time.</p>
    <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/contact/" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-black text-[#102043] hover:bg-amber-400">Request a tour plan <ArrowRightIcon aria-hidden="true" className="h-4 w-4"/></Link><Link href="/tour/" className="rounded-xl border border-white/50 px-6 py-3 font-bold text-white hover:bg-white/10">Browse tours</Link></div>
   </section>
  </div>
  <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a Morocco tour with Moorish Tour" ctaHref="/plan-your-morocco-tour"/>
 </div>
</main>;}

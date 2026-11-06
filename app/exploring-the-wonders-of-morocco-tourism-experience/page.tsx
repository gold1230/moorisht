import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import MoroccoWondersArticle from "./MoroccoWondersArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";
const canonical="https://moorishtour.com/exploring-the-wonders-of-morocco-tourism-experience/";
const meta={title:"Morocco Tours: Exploring the Wonders of Cities, Desert and Mountains",description:"Discover unforgettable Morocco tours with easy 3–14 day itineraries, Marrakech and Fes highlights, Sahara camps, Atlas Mountains, local food and planning tips."};
const ogImage=canonical+"opengraph-image";
export const metadata:Metadata={
 title:"Morocco Tours: Explore Cities, Sahara & Atlas | Moorish Tour",
 description:meta.description,
 keywords:["Morocco tours","Morocco tour packages","best Morocco tours","Morocco wonders tour","Morocco Sahara tours","7 day Morocco tour","10 day Morocco tour","private Morocco tours"],
 alternates:{canonical},robots:{index:true,follow:true},
 openGraph:{type:"article",url:canonical,siteName:"Moorish Tour",title:meta.title,description:meta.description,publishedTime:"2025-01-12",modifiedTime:"2026-10-12",images:[{url:ogImage,width:1200,height:630,alt:"Morocco tours exploring the wonders of cities, Sahara desert and Atlas Mountains"}]},
 twitter:{card:"summary_large_image",title:meta.title,description:meta.description,images:[ogImage]}
};
const agency={"@type":"TravelAgency","@id":"https://moorishtour.com/#organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
const structuredData={"@context":"https://schema.org","@graph":[
 agency,
 {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,inLanguage:"en",datePublished:"2025-01-12",dateModified:"2026-10-12",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:agency,publisher:agency,image:ogImage,about:[{"@type":"Place",name:"Morocco"},{"@type":"Thing",name:"Morocco tours and travel itineraries"}]},
 {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Morocco Tours: Exploring the Wonders",item:canonical}]},
 {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
]};
export default function MoroccoWondersPage(){return <main className="bg-white">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}}/>
 <MarrakechMerzougaBlogHero metainfo={meta}/>
 <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
  <div className="min-w-0">
   <div className="mb-9 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-[#fff9ed] via-white to-[#edf5f5] p-6 sm:p-8">
    <p className="text-xs font-black uppercase tracking-[.2em] text-amber-800">Morocco travel · Cities · Sahara · Culture</p>
    <p className="mt-3 text-2xl font-black leading-snug text-[#102043] sm:text-3xl">One country. So many ways to be amazed.</p>
    <p className="mt-3 text-base leading-8 text-slate-700">Explore welcoming cities, golden dunes, mountain villages and Atlantic towns—with realistic travel days and room for real experiences.</p>
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
     {[{n:"01",t:"Choose a feeling",d:"Culture, scenery or adventure"},{n:"02",t:"Choose your time",d:"3 days to two weeks"},{n:"03",t:"Make it yours",d:"Comfort, pace and interests"}].map(x=><div key={x.n} className="rounded-xl border border-white bg-white p-4 shadow-sm"><span className="text-xs font-black text-amber-700">{x.n}</span><p className="mt-1 font-black text-[#102043]">{x.t}</p><p className="mt-1 text-sm text-slate-600">{x.d}</p></div>)}
    </div>
   </div>
   <BlogTableOfContents title="In this guide to Morocco tours" description="Destinations, tour styles, sample itineraries, seasons, budgets and real travel planning tips." items={tableOfContents}/>
   <MoroccoWondersArticle/>
   <section aria-labelledby="wonders-final-cta" className="mt-16 overflow-hidden rounded-3xl bg-[#102043] p-7 text-center text-white sm:p-10">
    <p className="text-xs font-black uppercase tracking-widest text-amber-300">Plan with Moorish Tour</p>
    <h2 id="wonders-final-cta" className="mt-3 text-3xl font-black">Make your Morocco journey unforgettable</h2>
    <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200">Share your travel dates, arrival city, group size and favorite experiences. Ask about a route that gives you time to enjoy the country, not just drive through it.</p>
    <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/contact/" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-black text-[#102043] hover:bg-amber-400">Ask for a tour plan <ArrowRightIcon aria-hidden="true" className="h-4 w-4"/></Link><Link href="/tour/" className="rounded-xl border border-white/50 px-6 py-3 font-bold text-white hover:bg-white/10">See Morocco tours</Link></div>
   </section>
  </div>
  <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a Morocco tour with Moorish Tour" ctaHref="/plan-your-morocco-tour"/>
 </div>
</main>}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import MoroccoToursFromSpainArticle from "./MoroccoToursFromSpainArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";
const canonical="https://moorishtour.com/morocco-tours-from-spain/";
const meta={title:"Morocco Tours from Spain: Ferries, Tangier, Sahara and Real Itinerary Ideas",description:"Plan Morocco tours from Spain with ferry and flight tips, Tangier and Chefchaouen routes, realistic 3–14 day itineraries, passport advice and Sahara tour ideas."};
const ogImage=canonical+"opengraph-image";
export const metadata:Metadata={
 title:"Morocco Tours from Spain: Ferries & Itineraries | Moorish Tour",
 description:meta.description,
 keywords:["Morocco tours from Spain","Morocco tours from Tangier","Tangier day trip from Spain","ferry Spain to Morocco","Morocco itinerary from Spain","Morocco private tours from Spain"],
 alternates:{canonical},robots:{index:true,follow:true},
 openGraph:{type:"article",url:canonical,siteName:"Moorish Tour",title:meta.title,description:meta.description,publishedTime:"2024-06-15",modifiedTime:"2026-10-12",images:[{url:ogImage,width:1200,height:630,alt:"Morocco tours from Spain route and planning guide"}]},
 twitter:{card:"summary_large_image",title:meta.title,description:meta.description,images:[ogImage]}
};
const agency={"@type":"TravelAgency","@id":"https://moorishtour.com/#organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
const structuredData={"@context":"https://schema.org","@graph":[
 agency,
 {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,inLanguage:"en",datePublished:"2024-06-15",dateModified:"2026-10-12",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:agency,publisher:agency,image:ogImage,about:[{"@type":"Place",name:"Morocco"},{"@type":"Place",name:"Spain"},{"@type":"Thing",name:"Tours and ferry routes from Spain to Morocco"}]},
 {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Morocco Tours from Spain",item:canonical}]},
 {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
]};
export default function MoroccoToursFromSpainPage(){return <main className="bg-white">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}}/>
 <MarrakechMerzougaBlogHero metainfo={meta}/>
 <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
  <div className="min-w-0">
   <div className="mb-9 rounded-3xl border border-amber-200 bg-gradient-to-br from-[#fff9ed] via-white to-[#f1f6f8] p-6 sm:p-8">
    <p className="text-xs font-black uppercase tracking-[.2em] text-amber-800">Spain to Morocco travel guide</p>
    <p className="mt-3 text-2xl font-black leading-snug text-[#102043] sm:text-3xl">From the Strait of Gibraltar to the dunes of the Sahara</p>
    <p className="mt-3 text-base leading-8 text-slate-700">Compare ferry routes, choose the right number of days and discover a comfortable way to explore Morocco.</p>
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
     {[{n:"01",t:"Choose your arrival",d:"Ferry port or airport"},{n:"02",t:"Choose your pace",d:"2 days to 2 weeks"},{n:"03",t:"Explore with confidence",d:"Routes, costs and documents"}].map(x=><div key={x.n} className="rounded-xl border border-white bg-white p-4 shadow-sm"><span className="text-xs font-black text-amber-700">{x.n}</span><p className="mt-1 font-black text-[#102043]">{x.t}</p><p className="mt-1 text-sm text-slate-600">{x.d}</p></div>)}
    </div>
   </div>
   <BlogTableOfContents title="In this guide to Morocco tours from Spain" description="Ferry and flight choices, regional highlights, realistic sample tours and simple travel planning answers." items={tableOfContents}/>
   <MoroccoToursFromSpainArticle/>
   <section aria-labelledby="from-spain-final-cta" className="mt-16 overflow-hidden rounded-3xl bg-[#102043] p-7 text-center text-white sm:p-10">
    <p className="text-xs font-black uppercase tracking-widest text-amber-300">Moorish Tour</p>
    <h2 id="from-spain-final-cta" className="mt-3 text-3xl font-black">Ready to plan your Morocco journey from Spain?</h2>
    <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200">Share your arrival port or airport, travel dates, number of days and the places you dream of seeing. We&apos;ll help you start the conversation around a practical itinerary.</p>
    <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/contact/" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-black text-[#102043] hover:bg-amber-400">Ask for a tour plan <ArrowRightIcon aria-hidden="true" className="h-4 w-4"/></Link><Link href="/morocco-desert-tours-from-tangier/" className="rounded-xl border border-white/50 px-6 py-3 font-bold text-white hover:bg-white/10">See Tangier tours</Link></div>
   </section>
  </div>
  <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a Morocco tour with Moorish Tour" ctaHref="/plan-your-morocco-tour"/>
 </div>
</main>}

import type {Metadata} from "next";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import ErfoudFossilsArticle from "./ErfoudFossilsArticle";
import {tableOfContents} from "./tableOfContents";
import {faqs} from "./faqData";
const canonical="https://moorishtour.com/erfoud-fossils-for-sale-in-morocco/";
const meta={title:"Erfoud Fossils for Sale in Morocco: Authenticity, Shops & Tours",description:"Explore Erfoud fossils for sale: trilobites, ammonites, fossil workshops, buying tips, repairs, prices, export paperwork and nearby Sahara tours."};
const imageUrl=canonical+"opengraph-image";
export const metadata:Metadata={
 title:"Erfoud Fossils for Sale in Morocco: Buyer’s Guide | Moorish Tour",description:meta.description,
 alternates:{canonical},robots:{index:true,follow:true},
 openGraph:{type:"article",url:canonical,siteName:"Moorish Tour",title:meta.title,description:meta.description,publishedTime:"2025-01-25",images:[{url:imageUrl,width:1200,height:630,alt:"Erfoud fossils for sale – trilobites, ammonites and workshop guide"}]},
 twitter:{card:"summary_large_image",title:meta.title,description:meta.description,images:[imageUrl]},
};
const organization={"@type":"TravelAgency","@id":"https://moorishtour.com/#organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
const schema={"@context":"https://schema.org","@graph":[
 organization,
 {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,inLanguage:"en",datePublished:"2025-01-25",dateModified:"2026-10-12",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:organization,publisher:organization,image:imageUrl,about:[{"@type":"Place",name:"Erfoud, Morocco"},{"@type":"Thing",name:"Fossils, fossil preparation and responsible fossil buying"}]},
 {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Erfoud Fossils for Sale in Morocco",item:canonical}]},
 {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
]};
export default function Page(){return <main className="bg-white">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\u003c")}}/>
 <MarrakechMerzougaBlogHero metainfo={meta}/>
 <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
 <div className="min-w-0">
 <div className="mb-8 grid gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:grid-cols-3 sm:p-6">
 {[{n:"01",t:"Know the fossils",d:"Trilobites, ammonites and stone"},{n:"02",t:"Shop with confidence",d:"Original, repaired or replica"},{n:"03",t:"Plan your visit",d:"Workshops, Merzouga and paperwork"}].map(x=><div key={x.n} className="rounded-xl bg-white p-4"><span className="text-xs font-bold text-amber-700">{x.n}</span><p className="mt-1 font-extrabold text-[#102043]">{x.t}</p><p className="mt-1 text-sm text-slate-600">{x.d}</p></div>)}
 </div>
 <BlogTableOfContents title="Explore the Erfoud fossil guide" description="Learn about fossil types, authenticity, local workshops, practical buying questions and responsible travel." items={tableOfContents}/>
 <ErfoudFossilsArticle/>
 <section aria-labelledby="fossil-visit-final-cta" className="mt-16 rounded-2xl bg-[#102043] p-7 text-center text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-widest text-amber-300">Moorish Tour · Local experiences</p><h2 id="fossil-visit-final-cta" className="mt-3 text-3xl font-extrabold">Discover Erfoud fossils and the Sahara</h2><p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-200">Let us know your arrival city, dates and interests. We can help plan an enjoyable fossil-workshop stop alongside your Erfoud or Merzouga desert journey.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Link href="/contact/" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-bold text-[#102043] hover:bg-amber-400">Plan a visit <ArrowRightIcon className="h-4 w-4"/></Link><Link href="/erfoud-sahara-tours-4x4-desert-vehicles/" className="inline-flex items-center rounded-lg border border-white/50 px-6 py-3 font-bold text-white hover:bg-white/10">Explore Erfoud tours</Link></div></section>
 </div><BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan an Erfoud fossil workshop and Sahara visit" ctaHref="/plan-your-morocco-tour"/>
 </div></main>}

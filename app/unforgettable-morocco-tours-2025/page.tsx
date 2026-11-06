import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import UnforgettableMoroccoToursArticle from "./UnforgettableMoroccoToursArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";

const canonical = "https://moorishtour.com/unforgettable-morocco-tours-2025/";
const meta = {
 title: "Unforgettable Morocco Tours: Amazing Routes, Sahara Adventures and Local Travel Tips",
 description: "Discover unforgettable Morocco tours with easy 3–14 day itineraries, Sahara desert camps, Marrakech and Fes highlights, private travel tips and local advice.",
};
const ogImage = "https://moorishtour.com/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
export const metadata: Metadata = {
 title: "Unforgettable Morocco Tours: Desert, Cities & Itineraries | Moorish Tour",
 description: meta.description,
 keywords: ["unforgettable Morocco tours", "Morocco tours", "private Morocco tours", "Morocco itinerary", "Morocco desert tour", "7 days Morocco tour", "10 days in Morocco", "Marrakech to Merzouga", "Moorish Tour"],
 alternates: { canonical },
 robots: { index: true, follow: true },
 openGraph: {
  title: meta.title, description: meta.description, url: canonical, type: "article", siteName: "Moorish Tour",
  images: [{ url: ogImage, width: 1200, height: 630, alt: "Scenic journey through mountains and valleys on a Morocco tour" }],
 },
 twitter: { card:"summary_large_image", title:meta.title, description:meta.description, images:[ogImage] },
};

export default function UnforgettableMoroccoToursPage(){
 const publisher={"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
 const structuredData={"@context":"https://schema.org","@graph":[
  {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,inLanguage:"en",mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:publisher,publisher,image:ogImage,about:[{"@type":"Place",name:"Morocco"},{"@type":"Thing",name:"Private Morocco tours, Sahara desert and cultural itineraries"}],keywords:["Morocco tours","Sahara desert tour","Marrakech","Fes","Merzouga","Morocco travel itinerary"]},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},{"@type":"ListItem",position:2,name:"Unforgettable Morocco Tours",item:canonical}]},
  {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
 ]};
 return <main className="bg-white">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}} />
  <MarrakechMerzougaBlogHero metainfo={meta} />
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
   <div className="min-w-0">
    <BlogTableOfContents title="Table of Contents" description="Choose your route, see real travel tips and compare Morocco tours at your own pace." items={tableOfContents}/>
    <UnforgettableMoroccoToursArticle />
    <section aria-labelledby="unforgettable-final-cta" className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">
     <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">Plan your Morocco adventure</p>
     <h2 id="unforgettable-final-cta" className="mt-3 text-3xl font-bold text-[#102043]">Make Your Morocco Trip Unforgettable with Moorish Tour</h2>
     <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Share your dates, group size, starting city and the places you care about most. We can help you put together a comfortable route with clear details about transport, hotels, desert camps, guiding and inclusions.</p>
     <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Link href="/contact/" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800">Ask for Your Tour Plan <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1"/></Link>
      <Link href="/all-morocco-tours-packages/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 font-bold text-[#102043] hover:bg-amber-50">Compare Morocco Tour Packages</Link>
     </div>
    </section>
   </div>
   <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Discuss a tailored Morocco tour with Moorish Tour" ctaHref="/plan-your-morocco-tour" />
  </div>
 </main>;
}

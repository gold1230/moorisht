import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import CasablancaTravelAgencyArticle from "./CasablancaTravelAgencyArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";

const canonical = "https://moorishtour.com/exploring-trusted-casablanca-travel-agency/";
const ogImage = "https://moorishtour.com/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
const meta = {
  title: "Exploring a Trusted Casablanca Travel Agency: Private Tours, Local Guides & Travel Tips",
  description: "Find a trusted Casablanca travel agency for private city tours, airport transfers and Sahara trips. Compare routes, costs, guides and booking tips with Moorish Tour.",
};

export const metadata: Metadata = {
  title: "Casablanca Travel Agency: Private Tours & Local Guide | Moorish Tour",
  description: meta.description,
  alternates: {canonical},
  robots: {index: true, follow: true},
  openGraph: {type: "article", url: canonical, siteName: "Moorish Tour", title: meta.title,
    description: meta.description, publishedTime: "2025-02-17T18:36:00",
    images: [{url: ogImage, width: 1200, height: 630,
      alt: "Travelers on a guided journey in Morocco starting from Casablanca"}]},
  twitter: {card:"summary_large_image", title:meta.title, description:meta.description, images:[ogImage]},
};

const organization = {
 "@type":"Organization", "@id":"https://moorishtour.com/#organization",
 name:"Moorish Tour", url:"https://moorishtour.com/"
};
const structuredData = {"@context":"https://schema.org", "@graph":[
  organization,
  {"@type":"BlogPosting", "@id":canonical+"#article", headline:meta.title,
   description:meta.description, inLanguage:"en", datePublished:"2025-02-17T18:36:00",
   mainEntityOfPage:{"@type":"WebPage","@id":canonical}, author:organization,
   publisher:organization, image:ogImage,
   about:[{"@type":"Place",name:"Casablanca"},{"@type":"Thing",name:"Private Morocco tours and local travel agencies"}],
   keywords:["Casablanca travel agency","Casablanca private tours","Casablanca tour operator","Casablanca to Sahara desert tour","Casablanca airport transfer"]},
  {"@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem", position:1, name:"Home", item:"https://moorishtour.com/"},
   {"@type":"ListItem", position:2, name:"Casablanca Travel Agency Guide", item:canonical}]},
  {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
]};

export default function CasablancaTravelAgencyPage(){
 return <main className="bg-white">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}} />
  <MarrakechMerzougaBlogHero metainfo={meta} />
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
   <div className="min-w-0">
    <BlogTableOfContents title="Table of Contents"
      description="Learn how to choose your tour, explore Casablanca and compare private journeys." items={tableOfContents}/>
    <CasablancaTravelAgencyArticle />
    <section aria-labelledby="casablanca-contact-title" className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">
     <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">Travel with local knowledge</p>
     <h2 id="casablanca-contact-title" className="mt-3 text-3xl font-bold text-[#102043]">Plan Your Casablanca Tour with Moorish Tour</h2>
     <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Tell us your arrival date, group size, number of days and favorite experiences. We&apos;ll help you compare realistic routes, accommodation and the services that matter most to you.</p>
     <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Link href="/contact/" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800">Request a Casablanca Tour Plan <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1"/></Link>
      <Link href="/all-morocco-tours-packages/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 font-bold text-[#102043] hover:bg-amber-50">Explore Tour Packages</Link>
     </div>
    </section>
   </div>
   <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan a private Casablanca and Morocco tour with Moorish Tour" ctaHref="/plan-your-morocco-tour" />
  </div>
 </main>;
}

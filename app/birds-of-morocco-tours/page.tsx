import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

// IMPORTANT: all generated files are in this SAME route folder.
import BirdsOfMoroccoToursArticle from "./BirdsOfMoroccoToursArticle";
import { tableOfContents } from "./tableOfContents";
import { faqs } from "./faqData";

const canonical = "https://moorishtour.com/birds-of-morocco-tours/";
const meta = {
  title: "Birds of Morocco Tours – Best Morocco Birdwatching Tours & Birding Holidays",
  description: "Explore private Morocco birdwatching tours across Merzouga, the Atlas Mountains and Atlantic wetlands. Compare birding seasons, species, routes and trip lengths.",
};

export const metadata: Metadata = {
  title: "Birds of Morocco Tours: Birdwatching Holidays | Moorish Tour",
  description: meta.description,
  keywords: ["birds of Morocco tours", "Morocco birdwatching tours", "Morocco birding holidays", "Merzouga birdwatching", "High Atlas birds", "Souss-Massa bald ibis", "Atlas Wheatear", "private birdwatching Morocco"],
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: meta.title, description: meta.description, url: canonical,
    siteName: "Moorish Tour", type: "article",
    publishedTime: "2026-02-20T06:36:00+01:00", modifiedTime: "2026-10-11T00:00:00+01:00",
    images: [{url: "https://moorishtour.com/tours/related/4-days-tour-from-marrakech-to-fes.jpg",width:1200,height:630,alt:"Moroccan landscape on a birdwatching holiday"}],
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
};

export default function BirdsOfMoroccoToursPage() {
  const org = {"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"};
  const graph = {"@context":"https://schema.org","@graph":[
    {"@type":"BlogPosting","@id":canonical+"#article",headline:meta.title,description:meta.description,
      inLanguage:"en",datePublished:"2026-02-20",dateModified:"2026-10-11",
      mainEntityOfPage:{"@type":"WebPage","@id":canonical},author:org,publisher:org,
      about:[{"@type":"Thing",name:"Birdwatching"},{"@type":"Place",name:"Morocco"}],
      keywords:["Morocco birding tour", "Merzouga desert birds", "Atlas Mountains birdwatching", "Morocco wetlands", "Souss-Massa Northern Bald Ibis"]},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://moorishtour.com/"},
      {"@type":"ListItem",position:2,name:"Morocco Birdwatching",item:canonical}
    ]},
    {"@type":"FAQPage",mainEntity:faqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}
  ]};
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph).replace(/</g,"\\u003c")}} />
      <MarrakechMerzougaBlogHero metainfo={meta} />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
        <div className="min-w-0">
          <BlogTableOfContents title="Table of Contents" description="Find birds, destinations, birding seasons, itineraries and booking advice for your wildlife trip." items={tableOfContents} />
          <BirdsOfMoroccoToursArticle />
          <section className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9" aria-labelledby="birding-tour-final-cta">
            <h2 id="birding-tour-final-cta" className="text-3xl font-bold text-[#102043]">Plan Your Private Birdwatching Holiday with Moorish Tour</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Tell us your dates, starting city, group size and priority bird species. We can discuss a practical route around the Sahara, Atlas Mountains and Atlantic wetlands based on seasonal conditions and your birding interests.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact/" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800">Ask for a Birding Itinerary <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              <Link href="/bird-watching-tours-morocco/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 font-bold text-[#102043] hover:bg-amber-50">Explore Birdwatching Routes</Link>
            </div>
          </section>
        </div>
        <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Scenic Morocco landscapes for a private birding tour" ctaHref="/plan-your-morocco-tour" />
      </div>
    </main>
  );
}

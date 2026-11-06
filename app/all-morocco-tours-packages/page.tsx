import type { Metadata } from "next";
import Link from "next/link";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ctaImage from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg";
import GroupHero from "@/public/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Section9 from "./section9";
import Section10 from "./section10";
import Section11 from "./section11";
import Section12 from "./section12";
import Section13 from "./section13";
import Section14 from "./section14";
import Section15 from "./section15";
import Section16 from "./section16";
import Section17 from "./section17";
import Section18 from "./section18";
import Section19 from "./section19";
import Section20 from "./section20";
import Section21 from "./section21";
import Section22 from "./section22";
import Section23 from "./section23";
import { tableOfContents } from "./tableOfContents";
const canonical="https://moorishtour.com/all-morocco-tours-packages/";
const metainfo={title:"All Morocco Tours Packages – Desert, Imperial Cities & Custom Travel",description:"Explore all Morocco tours packages by duration and departure city. Compare Marrakech, Fes, Tangier and Casablanca tours, Sahara desert trips, and private travel."};
export const metadata:Metadata={
 title:"All Morocco Tours Packages: Desert, Cities & More | Moorish Tour",description:metainfo.description,alternates:{canonical},robots:{index:true,follow:true},
 openGraph:{type:"article",title:metainfo.title,description:metainfo.description,url:canonical,siteName:"Moorish Tour",publishedTime:"2026-10-10T09:00:00+01:00",images:[{url:new URL(GroupHero.src,"https://moorishtour.com").toString(),width:1200,height:630,alt:"Morocco tour travelers exploring the Sahara by 4x4"}]},
 twitter:{card:"summary_large_image",title:metainfo.title,description:metainfo.description},
};
export default function AllMoroccoToursPackagesPage(){
 const schema={"@context":"https://schema.org","@type":"BlogPosting",headline:metainfo.title,description:metainfo.description,mainEntityOfPage:canonical,datePublished:"2026-10-10",dateModified:"2026-10-10",author:{"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"},publisher:{"@type":"Organization",name:"Moorish Tour",url:"https://moorishtour.com/"}};
 return <main className="bg-white">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
 <MarrakechMerzougaBlogHero metainfo={metainfo} />
 <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
 <article className="min-w-0">
 <BlogTableOfContents title="Table of Contents" description="Compare all Morocco tour packages, departure cities, trip durations, desert adventures, travel costs and booking advice." items={tableOfContents} />
 <Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section6 />
<Section7 />
<Section8 />
<Section9 />
<Section10 />
<Section11 />
<Section12 />
<Section13 />
<Section14 />
<Section15 />
<Section16 />
<Section17 />
<Section18 />
<Section19 />
<Section20 />
<Section21 />
<Section22 />
<Section23 />
 <section className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9">
 <h2 className="text-3xl font-bold text-[#102043]">Ready to Plan Your Morocco Tour?</h2>
 <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Choose your arrival city, travel dates and favorite destinations. Moorish Tour can help you explore a private itinerary designed around your interests.</p>
 <div className="mt-6 flex flex-wrap justify-center gap-3"><Link href="/tour/" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800">Browse Morocco Tours <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" /></Link><Link href="/contact/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 font-bold text-[#102043] hover:bg-amber-50">Request a Custom Quote</Link></div>
 </section>
 </article>
 <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Plan your private Morocco tour with Moorish Tour" ctaHref="/contact/" />
 </div>
 </main>;
}

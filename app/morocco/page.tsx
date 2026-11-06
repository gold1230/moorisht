import type { Metadata } from "next";
import BlogPostHeader from "@/Compentents/blog/BlogPostHeader";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

import { tableOfContents } from "./tableOfContents";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import { ComponentType } from "react";

const sidebarPosts: { title: string; href: string; image: string; imageAlt: string; date: string; dateTime: string }[] = [];
const GuidesSidebar = BlogSidebar as ComponentType<{
  posts?: typeof sidebarPosts;
  ctaImage: typeof MarrakechToFes4DayHero;
  ctaImageAlt?: string;
  ctaHref?: string;
}>;

const title = "Morocco – General Information for Travelers";
const excerpt = "Learn about Morocco's cities, Sahara Desert, Atlas Mountains, weather, history, traditions, currency, transport and practical travel advice. A complete first-time Morocco travel guide by Moorish Tour.";
const canonicalUrl = "https://moorishtour.com/morocco-general-information-for-travelers/";

export const metadata: Metadata = {
 title: "Morocco Travel Guide: Essential Information & Local Tips",
 description: "Explore Morocco travel information: cities, Sahara Desert, Atlas Mountains, weather, culture, transport, costs and planning tips from Moorish Tour.",
 keywords: ["Morocco travel guide", "Morocco general information", "travel to Morocco", "Morocco travel tips", "Morocco Sahara Desert", "Marrakech and Merzouga tours", "Morocco culture and traditions", "best time to visit Morocco"],
 alternates: { canonical: canonicalUrl },
 openGraph: { title: "Morocco Travel Guide | Cities, Sahara & Atlas Mountains", description: excerpt, url: canonicalUrl, siteName: "Moorish Tour", type: "article", images: [{url:"/tours/related/4-days-tour-from-marrakech-to-fes.jpg",alt:"Morocco Sahara and Atlas Mountains travel guide"}] },
 twitter: { card: "summary_large_image", title: "Morocco Travel Guide | Moorish Tour", description: excerpt },
};

// const sidebarPosts = [
//  { title: "Morocco Wonders Tour: The Ultimate Morocco Tour", href: "/morocco-wonders-tour-the-ultimate-morocco-tour/", image: MarrakechToFes4DayHero, imageAlt: "Morocco tour in the Atlas Mountains", date: "February 18, 2026", dateTime: "2026-02-18", category: "Morocco Tours" },
//  { title: "Erfoud Sahara Tours & 4×4 Desert Excursions", href: "/erfoud-sahara-tours-4x4-desert-vehicles/", image: MarrakechToFes4DayHero, imageAlt: "Moroccan desert tour landscape", date: "February 23, 2026", dateTime: "2026-02-23", category: "Sahara Desert" },
//  { title: "Birds of Morocco Tours & Birdwatching Holidays", href: "/birds-of-morocco-tours/", image: MarrakechToFes4DayHero, imageAlt: "Morocco landscape and nature", date: "February 20, 2026", dateTime: "2026-02-20", category: "Nature Travel" },
// ];

export default function Page() {
 const blogPosting = {
   "@context": "https://schema.org",
   "@type": "BlogPosting",
   headline: title,
   description: excerpt,
   mainEntityOfPage: canonicalUrl,
   datePublished: "2025-12-21T15:19:00+01:00",
   dateModified: "2026-10-09",
   author: { "@type": "Organization", name: "Moorish Tour", url: "https://moorishtour.com" },
   publisher: { "@type": "Organization", name: "Moorish Tour", url: "https://moorishtour.com" },
   image: "https://moorishtour.com/blog/banner/morocco-sahara-desert-tour-travelers-1439x520.webp"
 };

 return (
  <>
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(blogPosting)}} />
   
   <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10">
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]">
     <main className="w-full min-w-0 px-5 pb-12 pt-6 sm:px-7 sm:pb-14 lg:px-10 lg:pb-16">
      <BlogPostHeader
      category="Morocco Travel Guide"
      title={title}
      excerpt={excerpt}
      author={{name:"Moorish Tour", avatar:MarrakechToFes4DayHero}}
      publishedDate="December 21, 2025"
      updatedDate="October 9, 2026"
      readTime="21 min read"
      heroImage={MarrakechToFes4DayHero}
      heroAlt="Morocco travel guide featuring Atlas Mountains and southern landscapes"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Morocco Travel Guide"}]}
      tableOfContents={tableOfContents.map((item)=>({label:item.label,href:item.href}))}
   />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
     </main>
     <aside className="min-w-0 w-full py-10 lg:sticky lg:top-24 lg:self-start" aria-label="Related Morocco travel articles">
       <div className="mx-auto grid w-full max-w-xl gap-5 lg:max-w-none">
         <GuidesSidebar posts={sidebarPosts} ctaImage={MarrakechToFes4DayHero} ctaImageAlt="Plan a private Morocco trip with Moorish Tour" ctaHref="/plan-your-morocco-tour" />
       </div>
     </aside>
    </div>
   </div>
  </>
 );
}

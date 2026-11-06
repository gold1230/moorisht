import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MarrakechMerzougaBlogHero from "@/Compentents/blogtour/blogTour";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BlogTableOfContents from "@/Compentents/blogtour/contentTable";
import ctaImage from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

// Article files are all alongside page.tsx in this route folder.
import MoroccoGeneralInformationArticle from "./MoroccoGeneralInformationArticle";
import { tableOfContents } from "./tableOfContents";

const canonical = "https://moorishtour.com/morocco-general-information-for-travelers/";
const meta = {
  title: "Morocco – General Information for Travelers",
  description: "Explore essential Morocco travel information: Marrakech, Fes, Sahara Desert, Atlas Mountains, weather, food, culture, safety, transport, costs and local travel tips from Moorish Tour.",
};

export const metadata: Metadata = {
  title: "Morocco Travel Guide: Essential Information & Local Tips | Moorish Tour",
  description: meta.description,
  keywords: ["Morocco travel information", "Morocco travel guide", "Morocco facts for tourists", "Marrakech and Merzouga", "Morocco itinerary", "Morocco travel tips", "Morocco Sahara tours"],
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Morocco Travel Guide: Cities, Desert, Culture & Travel Tips",
    description: meta.description,
    url: canonical,
    type: "article",
    siteName: "Moorish Tour",
    publishedTime: "2025-12-21T15:19:00+01:00",
    modifiedTime: "2026-10-11T09:00:00+01:00",
    images: [{ url: "https://moorishtour.com/tours/related/4-days-tour-from-marrakech-to-fes.jpg", width: 1200, height: 630, alt: "Morocco travel guide through cities, Atlas Mountains and Sahara Desert" }],
  },
  twitter: { card: "summary_large_image", title: "Morocco Travel Guide | Moorish Tour", description: meta.description },
};

export default function MoroccoGeneralInformationPage() {
  const publisher = { "@type": "Organization", name: "Moorish Tour", url: "https://moorishtour.com/" };
  const graph = { "@context": "https://schema.org", "@graph": [
    {
      "@type": "BlogPosting", "@id": canonical + "#article", headline: meta.title,
      description: meta.description, inLanguage: "en", datePublished: "2025-12-21",
      dateModified: "2026-10-11", mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      author: publisher, publisher,
      about: [{ "@type": "Place", name: "Morocco", url: "https://moorishtour.com/morocco/" }, { "@type": "Thing", name: "Travel to Morocco" }],
      keywords: ["Morocco travel guide", "Morocco climate", "Morocco Sahara Desert", "Morocco tourism", "Morocco itinerary"],
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://moorishtour.com/" },
      { "@type": "ListItem", position: 2, name: "Morocco", item: "https://moorishtour.com/morocco/" },
      { "@type": "ListItem", position: 3, name: "Morocco General Information", item: canonical },
    ] },
  ] };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\u003c") }} />
      <MarrakechMerzougaBlogHero metainfo={meta} />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-12">
        <div className="min-w-0">
          <BlogTableOfContents title="Table of Contents" description="Quickly find important travel facts, destinations, culture, weather, Sahara activities and practical trip advice." items={tableOfContents} />
          <MoroccoGeneralInformationArticle />
          <section className="mt-14 rounded-2xl border border-amber-200 bg-[#fffaf4] p-7 text-center sm:p-9" aria-labelledby="morocco-guide-final-cta">
            <h2 id="morocco-guide-final-cta" className="text-3xl font-bold text-[#102043]">Discover Morocco with Moorish Tour</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700">Ready to turn these travel ideas into your own journey? Tell us your dates, starting city and favourite destinations. We can help you plan a comfortable private tour with the right amount of time for each place.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact/" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800">Ask Moorish Tour <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              <Link href="/morocco/" className="inline-flex h-12 items-center rounded-lg border border-amber-500 bg-white px-6 font-bold text-[#102043] hover:bg-amber-50">Explore Morocco</Link>
            </div>
          </section>
        </div>
        <BlogSidebar ctaImage={ctaImage} ctaImageAlt="Private Morocco trip with Moorish Tour" ctaHref="/plan-your-morocco-tour" />
      </div>
    </main>
  );
}

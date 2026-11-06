import type { Metadata } from "next";
import type { ComponentType } from "react";
import BlogPostHeader from "@/Compentents/blog/BlogPostHeader";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import ErfoudSaharaToursArticle from "./ErfoudSaharaToursArticle";
import { erfoudSaharaTableOfContents } from "./tableOfContents";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

const PAGE_URL = "https://moorishtour.com/erfoud-sahara-tours-4x4-desert-vehicles/";
const TITLE = "Erfoud Sahara Tours – 4×4 Desert Vehicles & Excursion from Erfoud to Merzouga";
const DESCRIPTION = "Discover Erfoud Sahara tours and 4×4 excursions to Merzouga, Erg Chebbi dunes, camel trekking, desert camps, fossils, Khamlia and local guided adventures.";

export const metadata: Metadata = {
  title: "Erfoud Sahara Tours | 4×4 Excursions to Merzouga",
  description: DESCRIPTION,
  keywords: [
    "Erfoud Sahara tours",
    "excursion from Erfoud to Merzouga",
    "4x4 Sahara tour Erfoud Morocco",
    "Erfoud desert tours",
    "Erg Chebbi excursion",
    "Merzouga private 4x4 tour",
  ],
  alternates: { canonical: "/erfoud-sahara-tours-4x4-desert-vehicles/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Moorish Tour",
    type: "article",
    images: [{
      url: "/tours/related/4-days-tour-from-marrakech-to-fes.jpg",
      width: 1200,
      height: 630,
      alt: "Morocco desert travel landscapes and 4x4 Erfoud excursions",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/tours/related/4-days-tour-from-marrakech-to-fes.jpg"],
  },
};

// Allows use with older and newer BlogSidebar implementations.
// Replace with real recent posts if your sidebar version requires them.
const sidebarPosts: {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  date: string;
  dateTime: string;
}[] = [];
const ErfoudSidebar = BlogSidebar as ComponentType<{
  posts?: typeof sidebarPosts;
  ctaImage: typeof MarrakechToFes4DayHero;
  ctaImageAlt?: string;
  ctaHref?: string;
}>;

const postSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-02-23",
  author: { "@type": "Organization", name: "Moorish Tour" },
  publisher: {
    "@type": "Organization",
    name: "Moorish Tour",
    url: "https://moorishtour.com/",
  },
  image: "https://moorishtour.com/tours/related/4-days-tour-from-marrakech-to-fes.jpg",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

export default function ErfoudSaharaToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]">
          <article className="min-w-0 w-full">
            <BlogPostHeader
              category="Erfoud & Sahara Desert Excursions"
              title={TITLE}
              excerpt="Plan a private or shared 4×4 desert excursion from Erfoud to Merzouga, with dunes, cultural villages, fossil workshops, camel rides and desert camp options."
              author={{ name: "Moorish Tour", avatar: "/erfoud-sahara/author.svg" }}
              publishedDate="February 23, 2026"
              readTime="36 min read"
              heroImage={MarrakechToFes4DayHero}
              heroAlt="Morocco Sahara desert landscape for Erfoud to Merzouga 4x4 excursion article"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Morocco Tours", href: "/tour/" },
                { label: "Erfoud Sahara Tours" },
              ]}
              tableOfContents={[...erfoudSaharaTableOfContents]}
            />
            <main className="w-full min-w-0 px-5 pb-12 pt-6 sm:px-7 sm:pb-14 lg:px-10 lg:pb-16">
              <ErfoudSaharaToursArticle />
            </main>
          </article>
          <aside className="min-w-0 w-full py-10 lg:sticky lg:top-24 lg:self-start">
            <div className="mx-auto grid w-full max-w-xl gap-5 lg:max-w-none">
              <ErfoudSidebar
                posts={sidebarPosts}
                ctaImage={MarrakechToFes4DayHero}
                ctaImageAlt="Plan an Erfoud 4x4 excursion to the Sahara Desert"
                ctaHref="/plan-your-morocco-tour"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

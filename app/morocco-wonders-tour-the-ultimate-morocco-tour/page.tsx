import type { Metadata } from "next";
import type { ComponentType } from "react";
import BlogPostHeader from "@/Compentents/blog/BlogPostHeader";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import MoroccoWondersTourArticle from "./MoroccoWondersTourArticle";
import { moroccoWondersTableOfContents } from "./tableOfContents";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

const PAGE_URL = "https://moorishtour.com/morocco-wonders-tour-the-ultimate-morocco-tour/";
const TITLE = "Morocco Wonders Tour – The Ultimate Morocco Tour Package with Moorish Tour";
const DESCRIPTION = "Discover the Morocco Wonders Tour: imperial cities, Sahara Desert, Atlas Mountains and Essaouira. Explore 7–14-day private tours, itinerary ideas and travel tips.";

export const metadata: Metadata = {
  title: "Morocco Wonders Tour | Desert, Cities & Atlas Mountains",
  description: DESCRIPTION,
  keywords: [
    "Morocco wonders tour",
    "Morocco tour package",
    "Morocco tour itinerary",
    "private Morocco tours",
    "Morocco desert tour",
    "7 day Morocco tour",
    "10 days in Morocco",
    "14 day Morocco itinerary",
  ],
  alternates: { canonical: "/morocco-wonders-tour-the-ultimate-morocco-tour/" },
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
      alt: "Morocco landscape representing the Morocco Wonders Tour",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/tours/related/4-days-tour-from-marrakech-to-fes.jpg"],
  },
};

// The original sidebar is compatible with a posts prop; use your real post data here.
const sidebarPosts: { title: string; href: string; image: string; imageAlt: string; date: string; dateTime: string; }[] = [];
const WondersSidebar = BlogSidebar as ComponentType<{
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
  datePublished: "2026-02-18",
  author: { "@type": "Organization", name: "Moorish Tour" },
  publisher: { "@type": "Organization", name: "Moorish Tour", url: "https://moorishtour.com/" },
  image: "https://moorishtour.com/tours/related/4-days-tour-from-marrakech-to-fes.jpg",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

export default function MoroccoWondersTourPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema).replace(/</g, "\u003c") }} />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]">
          <article className="min-w-0 w-full">
            <BlogPostHeader
              category="Morocco Tours & Travel Guides"
              title={TITLE}
              excerpt="Discover imperial cities, the Sahara Desert, the Atlas Mountains, and coastal Morocco with a private or small-group tour tailored to your travel style."
              author={{ name: "Moorish Tour", avatar: MarrakechToFes4DayHero }}
              publishedDate="February 18, 2026"
              readTime="55 min read"
              heroImage={MarrakechToFes4DayHero}
              heroAlt="Scenic Morocco landscape illustrating the Morocco Wonders Tour"
              breadcrumbs={[{ label: "Home", href: "/" }, { label: "Morocco Tours", href: "/tour/" }, { label: "Morocco Wonders Tour" }]}
              tableOfContents={[...moroccoWondersTableOfContents]}
            />
            <main className="w-full min-w-0 px-5 pb-12 pt-6 sm:px-7 sm:pb-14 lg:px-10 lg:pb-16">
              <MoroccoWondersTourArticle />
            </main>
          </article>
          <aside className="min-w-0 w-full py-10 lg:sticky lg:top-24 lg:self-start">
            <div className="mx-auto grid w-full max-w-xl gap-5 lg:max-w-none">
              <WondersSidebar posts={sidebarPosts} ctaImage={MarrakechToFes4DayHero} ctaImageAlt="Plan a private Morocco Wonders Tour" ctaHref="/plan-your-morocco-tour" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

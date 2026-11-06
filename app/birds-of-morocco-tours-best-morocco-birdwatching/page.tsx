import type { Metadata } from "next";
import type { ComponentType } from "react";
import BlogPostHeader from "@/Compentents/blog/BlogPostHeader";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import BirdsOfMoroccoToursArticle from "./BirdsOfMoroccoToursArticle";
import { birdsOfMoroccoTableOfContents } from "./tableOfContents";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

const PAGE_URL = "https://moorishtour.com/birds-of-morocco-tours-best-morocco-birdwatching/";
const TITLE = "Birds of Morocco Tours – Best Morocco Birdwatching Tours & Birding Holidays";
const DESCRIPTION = "Plan private Morocco birdwatching tours across Merzouga, Atlas Mountains and Atlantic wetlands. Explore birding seasons, target species and 7–14-day holidays.";

export const metadata: Metadata = {
  title: "Birds of Morocco Tours | Birdwatching Holidays & Guides",
  description: DESCRIPTION,
  keywords: [
    "birds of Morocco tours",
    "Morocco birdwatching tours",
    "Morocco birding holidays",
    "Merzouga desert birding",
    "High Atlas birdwatching",
    "Morocco bird photography tours",
    "Souss-Massa National Park birding",
    "Morocco private birding tours",
  ],
  alternates: { canonical: "/birds-of-morocco-tours-best-morocco-birdwatching/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Moorish Tour",
    type: "article",
    images: [{
      url: "/tours/related/4-days-tour-from-marrakech-to-fes.jpg",
      width: 1200, height: 630,
      alt: "Morocco landscape for birdwatching travel guide",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/tours/related/4-days-tour-from-marrakech-to-fes.jpg"],
  },
};

// Optional "posts" prop supports earlier versions of BlogSidebar.
// Replace with actual blog post data if your sidebar expects it.
const sidebarPosts: {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  date: string;
  dateTime: string;
}[] = [];
const BirdingSidebar = BlogSidebar as ComponentType<{
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
  datePublished: "2026-02-20",
  author: { "@type": "Organization", name: "Moorish Tour" },
  publisher: {
    "@type": "Organization",
    name: "Moorish Tour",
    url: "https://moorishtour.com/",
  },
  image: "https://moorishtour.com/tours/related/4-days-tour-from-marrakech-to-fes.jpg",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

export default function BirdsOfMoroccoToursPage() {
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
              category="Morocco Birdwatching & Nature Travel"
              title={TITLE}
              excerpt="Explore Morocco birding holidays, local birding sites, Atlas and Sahara target birds, migration seasons, private itineraries and wildlife photography."
              author={{ name: "Moorish Tour", avatar: "/birds-of-morocco/author.svg" }}
              publishedDate="February 20, 2026"
              readTime="51 min read"
              heroImage={MarrakechToFes4DayHero}
              heroAlt="Landscape of Morocco used as a temporary photo for the Birds of Morocco birdwatching article"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Morocco Tours", href: "/tour/" },
                { label: "Birds of Morocco Tours" },
              ]}
              tableOfContents={[...birdsOfMoroccoTableOfContents]}
            />
            <main className="w-full min-w-0 px-5 pb-12 pt-6 sm:px-7 sm:pb-14 lg:px-10 lg:pb-16">
              <BirdsOfMoroccoToursArticle />
            </main>
          </article>
          <aside className="min-w-0 w-full py-10 lg:sticky lg:top-24 lg:self-start">
            <div className="mx-auto grid w-full max-w-xl gap-5 lg:max-w-none">
              <BirdingSidebar
                posts={sidebarPosts}
                ctaImage={MarrakechToFes4DayHero}
                ctaImageAlt="Plan a private Morocco birdwatching holiday"
                ctaHref="/plan-your-morocco-tour"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

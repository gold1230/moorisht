import type { Metadata } from "next";
import type { ComponentType } from "react";
import BlogPostHeader from "@/Compentents/blog/BlogPostHeader";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import MoroccanGuidesTravelArticle from "./MoroccanGuidesTravelArticle";
import { moroccanGuidesTableOfContents } from "./tableOfContents";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

const PAGE_URL = "https://moorishtour.com/moroccan-guides-travel-best-tour-guides-in-morocco/";
const TITLE = "Moroccan Guides Travel | Best Tour Guides in Morocco for Unforgettable Experiences";
const DESCRIPTION = "Find local tour guides in Morocco for private and small-group trips. Explore Marrakech, Fes, the Sahara Desert, Atlas Mountains, food tours and tailored itineraries.";

export const metadata: Metadata = {
  title: "Moroccan Guides Travel | Local Tour Guides in Morocco",
  description: DESCRIPTION,
  keywords: ["tour guides in Morocco", "guided tours in Morocco", "Moroccan local guides", "private Morocco tours", "Moroccan Guides Travel"],
  alternates: { canonical: "/moroccan-guides-travel-best-tour-guides-in-morocco/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Moorish Tour",
    type: "article",
    images: [{ url: "/tours/related/4-days-tour-from-marrakech-to-fes.jpg", width: 1200, height: 630, alt: "Guided tours and local guides in Morocco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/tours/related/4-days-tour-from-marrakech-to-fes.jpg"],
  },
};

// This supports both an older BlogSidebar (requiring posts) and the newer
// auto-loaded getBlogs() version of your sidebar.
const sidebarPosts: { title: string; href: string; image: string; imageAlt: string; date: string; dateTime: string }[] = [];
const GuidesSidebar = BlogSidebar as ComponentType<{
  posts?: typeof sidebarPosts;
  ctaImage: typeof MarrakechToFes4DayHero;
  ctaImageAlt?: string;
  ctaHref?: string;
}>;

export default function MoroccanGuidesTravelPage() {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]">
        <article className="min-w-0 w-full">
          <BlogPostHeader
            category="Morocco Travel Guides"
            title={TITLE}
            excerpt="Discover professional local guides, private Sahara trips, imperial city walking tours, Atlas Mountain adventures and personalized travel experiences across Morocco."
            author={{ name: "Mohamed", avatar: "/images/author.jpg" }}
            publishedDate="October 8, 2026"
            readTime="34 min read"
            heroImage={MarrakechToFes4DayHero}
            heroAlt="Moroccan Guides Travel: discover Morocco with knowledgeable local guides"
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Morocco Tours", href: "/tour/" },
              { label: "Moroccan Guides Travel" },
            ]}
            tableOfContents={[...moroccanGuidesTableOfContents]}
          />
          <main className="w-full min-w-0 px-5 pb-12 pt-6 sm:px-7 sm:pb-14 lg:px-10 lg:pb-16">
            <MoroccanGuidesTravelArticle />
          </main>
        </article>
        <aside className="min-w-0 w-full py-10 lg:sticky lg:top-24 lg:self-start">
          <div className="mx-auto grid w-full max-w-xl gap-5 lg:max-w-none">
            <GuidesSidebar
              posts={sidebarPosts}
              ctaImage={MarrakechToFes4DayHero}
              ctaImageAlt="Plan a private guided Morocco adventure"
              ctaHref="/plan-your-morocco-tour"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

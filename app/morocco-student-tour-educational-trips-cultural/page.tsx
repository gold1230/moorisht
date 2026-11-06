import type { Metadata } from "next";
import type { ComponentType } from "react";
import BlogPostHeader from "@/Compentents/blog/BlogPostHeader";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import MoroccoStudentToursArticle from "./MoroccoStudentToursArticle";
import { moroccoStudentTableOfContents } from "./tableOfContents";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

const PAGE_URL = "https://moorishtour.com/morocco-student-tour-educational-trips-cultural/";
const TITLE = "Morocco Student Tour – Educational Trips, Cultural Adventures & Safe Group Travel";
const DESCRIPTION = "Explore Morocco student tours for schools and universities, with cultural workshops, Sahara Desert stays, historical sites, Atlas Mountains adventures and custom group itineraries.";

export const metadata: Metadata = {
  title: "Morocco Student Tours | School & University Educational Trips",
  description: DESCRIPTION,
  keywords: ["Morocco student tours", "Morocco educational tours", "Morocco school trips", "university study tours Morocco", "Morocco student group travel"],
  alternates: { canonical: "/morocco-student-tour-educational-trips-cultural/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Moorish Tour",
    type: "article",
    images: [{ url: "/tours/related/4-days-tour-from-marrakech-to-fes.jpg", width: 1200, height: 630, alt: "Educational group travel and Morocco student tours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/tours/related/4-days-tour-from-marrakech-to-fes.jpg"],
  },
};

// Compatible with the older sidebar (posts required) and the newer getBlogs() sidebar.
const sidebarPosts: { title: string; href: string; image: string; imageAlt: string; date: string; dateTime: string }[] = [];
const StudentSidebar = BlogSidebar as ComponentType<{
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
  datePublished: "2026-02-22",
  author: { "@type": "Organization", name: "Moorish Tour" },
  publisher: { "@type": "Organization", name: "Moorish Tour", url: "https://moorishtour.com/" },
  image: "https://moorishtour.com/tours/related/4-days-tour-from-marrakech-to-fes.jpg",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

export default function MoroccoStudentToursPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema).replace(/</g, "\\u003c") }} />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]">
          <article className="min-w-0 w-full">
            <BlogPostHeader
              category="Morocco Student & Educational Tours"
              title={TITLE}
              excerpt="Explore educational Morocco trips for schools, colleges and universities, from historic cities to desert field trips, culture, nature and group learning."
              author={{ name: "Moorish Tour", avatar: `${MarrakechToFes4DayHero.src}` }}
              publishedDate="February 22, 2026"
              readTime="32 min read"
              heroImage={MarrakechToFes4DayHero}
              heroAlt="Morocco student tours across the mountains, desert and cultural cities"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Morocco Tours", href: "/tour/" },
                { label: "Morocco Student Tours" },
              ]}
              tableOfContents={[...moroccoStudentTableOfContents]}
            />
            <main className="w-full min-w-0 px-5 pb-12 pt-6 sm:px-7 sm:pb-14 lg:px-10 lg:pb-16">
              <MoroccoStudentToursArticle />
            </main>
          </article>
          <aside className="min-w-0 w-full py-10 lg:sticky lg:top-24 lg:self-start">
            <div className="mx-auto grid w-full max-w-xl gap-5 lg:max-w-none">
              <StudentSidebar
                posts={sidebarPosts}
                ctaImage={MarrakechToFes4DayHero}
                ctaImageAlt="Plan a custom Morocco student group tour"
                ctaHref="/plan-your-morocco-tour"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

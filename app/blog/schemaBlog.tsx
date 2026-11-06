import Script from "next/script";
import blogs from "@/data/blogs.json";

const SITE_URL = "https://moorishtour.com";
const list = [...blogs].sort((a, b) => b.dateISO.localeCompare(a.dateISO)).slice(0, 12).map((post, index) => ({
  "@type": "ListItem",
  position: index + 1,
  name: post.title,
  url: `${SITE_URL}/${post.slug}/`,
}));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/blog/#webpage`,
      url: `${SITE_URL}/blog/`,
      name: "Morocco Travel Blog | Guides, Tours & Travel Tips",
      description: "Useful Morocco travel guides, Sahara itineraries, cultural tips and destinations with Moorish Tour.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/blog/#articles`,
      name: "Morocco Travel Guides",
      numberOfItems: list.length,
      itemListElement: list,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Morocco Travel Blog", item: `${SITE_URL}/blog/` },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Moorish Tour",
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/moorishtours3white.png` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Moorish Tour",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function BlogSchema() {
  return (
    <Script id="morocco-blog-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema).replace(/</g, "\\u003c")}
    </Script>
  );
}

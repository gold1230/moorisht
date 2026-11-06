import type { Metadata } from "next";
import camelImage from "../assets/camel-sunset.webp";
import { ActivityDetail, camelQuestions } from "../_components/ActivityDetail";

const base = "https://moorishtour.com";
const path = "/activity/camel-trekking-in-the-desert/";

export const metadata: Metadata = {
  title: "Camel Trekking in the Sahara Desert, Merzouga | Moorish Tour",
  description: "Enjoy guided camel trekking in Merzouga's Sahara dunes. Discover the experience, what to wear, best times for a ride and helpful booking advice.",
  keywords: ["camel trekking in the desert", "Merzouga camel trekking", "Sahara camel ride", "Erg Chebbi camel experience", "camel trek Morocco"],
  alternates: { canonical: `${base}${path}` },
  openGraph: { title: "Camel Trekking in the Merzouga Desert | Moorish Tour", description: "A peaceful camel ride across the Sahara dunes near Merzouga.", url: `${base}${path}`, type: "website", images: [{url: `${base}${camelImage.src}`, width:1800, height:1125, alt:"Camel trekking illustration in the Sahara at sunset"}] },
  twitter: {card:"summary_large_image", title:"Camel Trekking in Merzouga | Moorish Tour"},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "TouristTrip", "name": "Camel Trekking in the Desert", "description": "A guided Sahara camel trekking activity near Merzouga, Morocco.", "url": `${base}${path}`, "touristType": ["Couples", "Families", "Nature lovers"], "provider": { "@type": "TravelAgency", "name": "Moorish Tour", "url": base } },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${base}/` },
      { "@type": "ListItem", "position": 2, "name": "Activities", "item": `${base}/activity/` },
      { "@type": "ListItem", "position": 3, "name": "Camel Trekking in the Desert", "item": `${base}${path}` },
    ] },
    { "@type": "FAQPage", "mainEntity": camelQuestions.map(({question, answer}) => ({"@type":"Question", "name":question, "acceptedAnswer":{"@type":"Answer", "text":answer}})) },
  ],
};

export default function CamelTrekkingPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><ActivityDetail kind="camel"/></>;
}

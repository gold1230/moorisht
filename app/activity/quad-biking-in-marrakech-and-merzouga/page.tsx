import type { Metadata } from "next";
import quadImage from "../assets/quad-merzouga.webp";
import { ActivityDetail, quadQuestions } from "../_components/ActivityDetail";

const base = "https://moorishtour.com";
const path = "/activity/quad-biking-in-marrakech-and-merzouga/";

export const metadata: Metadata = {
  title: "Quad Biking in Marrakech & Merzouga | Moorish Tour",
  description: "Explore quad biking in Marrakech's Palmeraie and the Sahara near Merzouga. Compare locations, get safety tips and learn how to plan your adventure.",
  keywords: ["quad biking Marrakech", "quad biking Merzouga", "Marrakech Palmeraie quad", "Sahara quad bike", "Morocco quad biking"],
  alternates: { canonical: `${base}${path}` },
  openGraph: { title: "Quad Biking in Marrakech & Merzouga | Moorish Tour", description: "Guided quad adventures in Morocco's palm groves and Sahara landscapes.", url: `${base}${path}`, type: "website", images: [{url: `${base}${quadImage.src}`, width:1800, height:1125, alt:"Quad biking adventure illustration in the Sahara dunes"}] },
  twitter: {card:"summary_large_image", title:"Quad Biking in Marrakech & Merzouga | Moorish Tour"},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "TouristTrip", "name": "Quad Biking in Marrakech and Merzouga", "description": "Guided quad biking options around the Marrakech Palmeraie and near Merzouga, Morocco.", "url": `${base}${path}`, "touristType": ["Adventure travelers", "Outdoor enthusiasts"], "provider": { "@type": "TravelAgency", "name": "Moorish Tour", "url": base } },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${base}/` },
      { "@type": "ListItem", "position": 2, "name": "Activities", "item": `${base}/activity/` },
      { "@type": "ListItem", "position": 3, "name": "Quad Biking in Marrakech and Merzouga", "item": `${base}${path}` },
    ] },
    { "@type": "FAQPage", "mainEntity": quadQuestions.map(({question, answer}) => ({"@type":"Question", "name":question, "acceptedAnswer":{"@type":"Answer", "text":answer}})) },
  ],
};

export default function QuadBikingPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><ActivityDetail kind="quad"/></>;
}

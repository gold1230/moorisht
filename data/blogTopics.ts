import { getBlogs } from "@/data/blogFilter";

/* =========================================================
   TOPIC CONFIG

   Counts are calculated automatically from blogs.json.
   Do NOT manually write numbers like 24, 18, 15, etc.
========================================================= */

export type BlogTopic = {
  id: string;
  label: string;
  href: string;
  count: number;
};

const topicConfig = [
  {
    id: "morocco-travel-guides",
    label: "Morocco Travel Guides",
    href: "/blog",
    filter: {},
  },
  {
    id: "morocco-desert-tours",
    label: "Morocco Desert Tours",
    href: "/morocco-desert-tours",
    filter: { category: "Desert Tours" },
  },
  {
    id: "marrakech",
    label: "Marrakech",
    href: "/locations/marrakech",
    filter: { place: "marrakech" },
  },
  {
    id: "sahara-desert",
    label: "Sahara Desert",
    href: "/morocco-desert-tours",
    filter: { tag: "sahara desert" },
  },
  {
    id: "fes",
    label: "Fes",
    href: "/locations/fes",
    filter: { place: "fes" },
  },
  {
    id: "chefchaouen",
    label: "Chefchaouen",
    href: "/locations/chefchaouen",
    filter: { place: "chefchaouen" },
  },
  {
    id: "merzouga",
    label: "Merzouga",
    href: "/locations/merzouga",
    filter: { place: "merzouga" },
  },
  {
    id: "travel-tips",
    label: "Travel Tips",
    href: "/morocco-travel-tips",
    filter: { category: "Travel Tips" },
  },
  {
    id: "morocco-itineraries",
    label: "Morocco Itineraries",
    href: "/morocco-itinerary",
    filter: { tag: "morocco itinerary" },
  },
] as const;

export function getBlogTopics(): BlogTopic[] {
  return topicConfig.map((topic) => ({
    id: topic.id,
    label: topic.label,
    href: topic.href,
    count: getBlogs(topic.filter).length,
  }));
}

export default getBlogTopics;

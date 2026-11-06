import type { MetadataRoute } from "next";
import routes from "@/data/routes.json";
import blogs from "@/data/blogs.json";
import newTourIndex from "@/data/popular-tour-index.json";

const BASE_URL = "https://moorishtour.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-14T00:00:00Z");
  const blogDates = new Map(blogs.map((post) => [`/${post.slug}`, post.lastModified || post.dateISO]));
  const newTourPaths = new Set(newTourIndex.map((tour) => `/tour/${tour.slug}`));
  return [
    { url: BASE_URL + "/", lastModified, changeFrequency: "weekly", priority: 1 },
    ...routes.map((item) => ({
      url: BASE_URL + item.path + "/",
      lastModified: newTourPaths.has(item.path) ? new Date("2026-10-24T00:00:00Z") : blogDates.has(item.path) ? new Date(`${blogDates.get(item.path)}T00:00:00Z`) : lastModified,
      changeFrequency: "monthly" as const,
      priority: item.kind === "tour" ? 0.8 : item.kind === "blog" ? 0.7 : 0.5,
    })),
  ];
}

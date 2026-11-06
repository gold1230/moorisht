import MoroccoEditorialArticle, { editorialMetadata } from "@/content/editorial/MoroccoEditorialArticle";

const slug = "morocco-in-winter-weather-packing-guide";
export const metadata = editorialMetadata(slug);
export default function Page() {
  return <MoroccoEditorialArticle slug={slug} />;
}

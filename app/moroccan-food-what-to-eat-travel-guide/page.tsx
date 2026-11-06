import MoroccoEditorialArticle, { editorialMetadata } from "@/content/editorial/MoroccoEditorialArticle";

const slug = "moroccan-food-what-to-eat-travel-guide";
export const metadata = editorialMetadata(slug);
export default function Page() {
  return <MoroccoEditorialArticle slug={slug} />;
}

import MoroccoEditorialArticle, { editorialMetadata } from "@/content/editorial/MoroccoEditorialArticle";

const slug = "marrakech-souks-shopping-guide";
export const metadata = editorialMetadata(slug);
export default function Page() {
  return <MoroccoEditorialArticle slug={slug} />;
}

import MoroccoEditorialArticle, { editorialMetadata } from "@/content/editorial/MoroccoEditorialArticle";

const slug = "getting-around-morocco-transport-guide";
export const metadata = editorialMetadata(slug);
export default function Page() {
  return <MoroccoEditorialArticle slug={slug} />;
}

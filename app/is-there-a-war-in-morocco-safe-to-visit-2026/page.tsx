import MoroccoEditorialArticle, { editorialMetadata } from "@/content/editorial/MoroccoEditorialArticle";

const slug = "is-there-a-war-in-morocco-safe-to-visit-2026";
export const metadata = editorialMetadata(slug);
export default function Page() {
  return <MoroccoEditorialArticle slug={slug} />;
}

import { ArticleSection, ArticleTable } from "./ArticleElements";
import Link from "next/link";

export default function Section15() {
 return (
<ArticleSection id="how-to-choose-a-moroccan-cooking-class-and-food-tour" label="CHOOSE YOUR EXPERIENCE" title="How to Choose a Moroccan Cooking Class and Food Tour">
<p className="mt-5 text-lg leading-8 text-gray-700">Start with the type of experience you want. A guided tasting walk offers many small introductions to food and neighbourhood life. A cooking class is more hands-on and can teach you one dish from start to finish. A private culinary day can combine both, but it should still leave enough free time to enjoy the experience instead of moving between activities on a strict timetable.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Ask the operator who leads the experience, how large the group is and whether tastings are actually included. For a cooking class, check whether you prepare food yourself, watch a demonstration or join a mixture of both. If visiting a local home, ask whether the host is comfortable receiving visitors and whether photography is allowed. These questions help support respectful tourism.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">It is also sensible to check meeting points, walking distances, cancellation terms and accessibility. Food tours in the old medinas may use narrow streets and uneven surfaces, while some desert or village experiences require a longer drive. Browse <Link href="/all-morocco-tours-packages/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Moorish Tour’s Morocco packages</Link> to see how a culinary experience might fit into a wider trip.</p>
<ArticleTable headings={["Tour style", "What you do", "Good for"]} rows={[["Street-food walking tour", "Taste several small dishes and explore local markets", "First visit and short stays"], ["Cooking class", "Learn ingredients and prepare a dish", "Hands-on food lovers"], ["Private food experience", "Flexible guide, tastings and schedule", "Families and dietary needs"], ["Multi-day culinary holiday", "Food, markets, towns and cultural travel", "Travellers exploring more regions"]]} />
</ArticleSection>
 );
}

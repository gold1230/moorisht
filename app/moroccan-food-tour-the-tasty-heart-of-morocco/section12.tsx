import { ArticleSection, ArticleTable } from "./ArticleElements";

export default function Section12() {
 return (
<ArticleSection id="is-moroccan-food-spicy-essential-spices-and-flavours" label="SPICE GUIDE" title="Is Moroccan Food Spicy? Essential Spices and Flavours">
<p className="mt-5 text-lg leading-8 text-gray-700">Moroccan food is usually more aromatic than fiery. Cumin, ginger, paprika, cinnamon, coriander, turmeric and saffron all contribute different notes. A tagine may taste warming and complex without burning your mouth. Harissa, a chilli paste sometimes served alongside food, is an optional way to add heat. Because recipes vary, visitors who dislike chilli can ask for a milder preparation.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Ras el hanout is a spice blend rather than a single spice, and its ingredients change depending on the maker. Chermoula is a herb-and-spice marinade often associated with fish and seafood. Preserved lemon is not a spice, but its salty, tangy flavour is essential in many Moroccan dishes. Learning to identify these ingredients at a spice stall can make dinner easier to understand.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">If you enjoy cooking at home, ask your host for a simple recipe and where to buy small quantities of spices from reputable sellers. You do not need to buy a huge bag of every spice to remember your trip. The flavour lesson is often more valuable than shopping.</p>
<ArticleTable headings={["Ingredient", "Typical flavour", "Often used in"]} rows={[["Cumin", "Earthy and warm", "Salads, soups and grilled food"], ["Ginger", "Warm and fragrant", "Tagines and stews"], ["Cinnamon", "Sweet and aromatic", "Pastilla, desserts and some savoury dishes"], ["Preserved lemon", "Salty and bright", "Chicken and fish tagines"], ["Ras el hanout", "Varied blend of warm spices", "Slow-cooked meat and special dishes"], ["Harissa", "Hot chilli flavour", "Optional condiment"]]} />
</ArticleSection>
 );
}

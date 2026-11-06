import { ArticleSection, TravelQuote, GuideTable } from "./ArticleElements";

export default function Section5() {
 return (
  <ArticleSection id="what-not-to-wear-in-marrakech-practical-clothing-mistakes" label="What to Avoid" title="What Not to Wear in Marrakech: Practical Clothing Mistakes">
  <p className="mt-5 text-lg leading-8 text-gray-700">The question is often not what clothes are banned, but what clothing will make sightseeing less comfortable. Very short beachwear, heavy winter fabrics in summer, stiff shoes and delicate high heels are all choices that can make a long day in Marrakech harder than it needs to be. People dress in many different ways in the city, but outfits that feel suitable beside a hotel pool may not feel as suitable in the middle of an old residential souk.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">For women, extremely short skirts, very revealing tops and clothes that require constant adjustment may attract more attention in some traditional areas. That does not mean you must dress in a particular way; it simply helps to know the local atmosphere when choosing what feels right for you. Men may also prefer to save tank tops and beachwear for leisure areas instead of wearing them through the medina. Everyone should avoid clothing that carries insulting messages or images.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">Practical mistakes matter just as much as cultural ones. Wearing brand-new sandals on a long tour can cause blisters. Packing only short-sleeved shirts can leave your shoulders exposed to too much sun. Bringing only black jeans to Marrakech in August may be uncomfortable, while arriving with no warm layer for a January evening or an overnight desert trip can be equally unpleasant.</p>
  <GuideTable headings={["Common mistake", "Better alternative", "Reason"]} rows={[["Thin flip-flops for a long city walk", "Supportive trainers or walking sandals", "Uneven streets and dust"], ["Only beachwear for the city", "Everyday shorts, shirts, skirts or trousers", "More comfortable across different settings"], ["Heavy denim in summer", "Light cotton or linen trousers", "Easier in strong heat"], ["No warm layer for desert nights", "Sweater or fleece", "Evenings may be cold"], ["New shoes on the travel day", "Shoes already worn at home", "Reduce blisters"]]} />
  <TravelQuote>Dress for the walk you are going to take, not only for the photograph you want to bring home.</TravelQuote>
</ArticleSection>
 );
}

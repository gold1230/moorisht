import { ArticleSection, TravelQuote, GuideTable } from "./ArticleElements";

export default function Section8() {
 return (
  <ArticleSection id="marrakech-outfit-ideas-for-different-travel-days" label="Easy Clothing Combinations" title="Marrakech Outfit Ideas for Different Travel Days">
  <p className="mt-5 text-lg leading-8 text-gray-700">You do not need to plan a completely different outfit for every photograph. The easiest Marrakech travel wardrobe has a few pieces you can mix and repeat. Choose two or three colors that work well together and add one comfortable layer. This makes packing lighter, keeps your suitcase organized and gives you practical choices when the weather changes during the week.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">For a full medina walking tour, a breathable top, loose trousers and supportive shoes are hard to beat. For a garden visit or café lunch, a midi dress or smart cotton shirt works well. On a rooftop dinner evening, a light overshirt or cardigan is useful once the air becomes cooler. If you are visiting the Atlas Mountains, swap delicate footwear for good walking shoes and bring a jacket. When heading to the desert, prioritize protection from wind and sun over fashion accessories that can easily be lost.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">You can still enjoy Moroccan design during your holiday. A locally made scarf or traditional piece of clothing can be a meaningful souvenir when bought respectfully from an artisan. Ask before photographing craftspeople or people wearing traditional dress, and remember that the most important part of any outfit is being able to explore without discomfort.</p>
  <GuideTable headings={["Activity", "Simple outfit idea", "Useful extra"]} rows={[["Marrakech medina walk", "Loose trousers + T-shirt + trainers", "Crossbody bag and hat"], ["Palaces and gardens", "Midi dress or shirt with chinos", "Light scarf and sunglasses"], ["Rooftop dinner", "Smart casual dress or button-down shirt", "Thin evening layer"], ["Atlas day trip", "Comfortable trousers + sturdy shoes", "Warm layer and windproof jacket"], ["Merzouga camel trekking", "Long trousers + breathable top", "Secure hat, scarf and water"]]} />
  <TravelQuote>A small wardrobe that works together will serve you better than a suitcase full of outfits you cannot comfortably walk in.</TravelQuote>
</ArticleSection>
 );
}

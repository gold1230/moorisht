import { ArticleSection, TravelNote, GuideTable } from "./ArticleElements";

export default function Section9() {
 return (
  <ArticleSection id="best-shoes-to-wear-in-marrakech-souks-and-day-trips" label="Footwear Guide" title="Best Shoes to Wear in Marrakech, Souks and Day Trips">
  <p className="mt-5 text-lg leading-8 text-gray-700">Good shoes are probably more important than any other item in your Marrakech suitcase. The old medina is a wonderful place to explore, but its narrow streets can be uneven, dusty and very busy. You might walk for several hours while visiting shops, markets, courtyards and monuments, so think about support, grip and comfort rather than only how the shoes look. Shoes you have already worn at home are usually the best choice.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">Light trainers work well for most city tours. Supportive walking sandals are also a good option in warm months, especially if they have secure straps and comfortable soles. Flip-flops can be fine by a pool or for a very short walk, but they may be inconvenient for a full day in the souks. High heels are often difficult on old stone surfaces and are better saved for a short evening outing where transport is easy.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">If you plan to visit the Atlas Mountains, ask whether your activity involves a simple village walk or a real hike. A short guided walk may only need sturdy trainers, but rocky or steep trails need suitable hiking footwear. For the Sahara, closed shoes help on rocky ground and dusty tracks, while some travelers prefer sandals for short camp activities. Carry socks to protect your feet when the evening cools down.</p>
  <GuideTable headings={["Footwear", "Works best for", "Watch out for"]} rows={[["Comfortable trainers", "Marrakech city walks, long sightseeing days", "Choose breathable fabric in hot weather"], ["Supportive walking sandals", "Warm-weather walking and light sightseeing", "Dust and pebbles may enter"], ["Hiking shoes", "Atlas trails and rocky terrain", "Can feel heavy for city-only trips"], ["Flip-flops", "Hotel, riad or poolside", "Not ideal for long medina walks"], ["High heels", "Short evening plans", "Uneven streets and cobblestones"]]} />
  <TravelNote title="Before your tour"><p>Try your shoes on a long walk before traveling. Comfortable footwear can make the difference between enjoying Marrakech all day and wanting to return to your hotel early.</p></TravelNote>
</ArticleSection>
 );
}

import { ArticleSection, ArticlePicture, TravelNote, GuideTable } from "./ArticleElements";
import TodraImage from "@/public/blog/content/todra-gorge-dramatic-rocky-cliffs-in-southern-morocco.jpg";

export default function Section11() {
  return (
    <ArticleSection id="three-days-in-morocco-best-time-to-visit-and-weather" label="When to Travel" title="Three Days in Morocco: Best Time to Visit and Weather">
      <p className="mt-5 text-lg leading-8 text-gray-700">For many travelers, <strong className="font-bold text-slate-900">spring and autumn</strong> are pleasant times to spend three days in Morocco, especially if the plan includes city walks, outdoor viewpoints, or the Sahara Desert. However, the best season depends on where you will be staying. The Atlantic coast often feels different from Marrakech, the Atlas Mountains, or Merzouga on the same day. The right travel plan considers both season and destination.</p>
      <GuideTable headings={["Season", "What to expect", "Useful advice"]} rows={[["Spring (Mar–May)", "Generally comfortable in many cities; valleys can be green", "Popular for hiking, medinas and desert excursions"], ["Summer (Jun–Aug)", "Strong heat possible inland and in the Sahara", "Favor early/late outings, shade, hydration and coastal stays"], ["Autumn (Sep–Nov)", "Often pleasant for cities, mountains and desert", "Great balance for culture and outdoor activities"], ["Winter (Dec–Feb)", "Cooler cities, cold mountain conditions and chilly desert nights", "Pack warm layers; check mountain road conditions"]]} />
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">What to pack for three days in Morocco</h3>
      <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700"><li>Light, comfortable clothes for daytime walking and sightseeing.</li><li>A jacket or warm layer for cool evenings, highlands, or desert camp nights.</li><li>Comfortable closed walking shoes for medinas, stone paths, and dunes.</li><li>Sunglasses, sunscreen, a hat, and a refillable water bottle.</li><li>Phone charger, any essential medication, and a small bag for daily outings.</li><li>A scarf or light shawl for dust, wind, or modest dress where appropriate.</li></ul>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Planning for the Sahara in different seasons</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">Desert sightseeing is usually more pleasant during cooler hours. Summer temperatures around Merzouga can become extremely high, so long midday outdoor activities should be avoided. Winter can bring cold nights even when the afternoon feels comfortable. Spring and autumn are often popular for camel trekking, walking near the dunes, and overnight camps, but wind and weather can vary. A local guide can help adapt the timing and activities to the conditions.</p>
      <ArticlePicture src={TodraImage} alt="Dramatic cliff landscape at Todra Gorge in southern Morocco" caption="Morocco weather varies by region: cities, valleys, mountains, and desert need different clothing and planning." />
      <TravelNote title="Always check the forecast"><p>Weather can change quickly in mountain areas. Before a trip into the Atlas or Sahara, check current conditions and follow your driver or guide’s safety advice.</p></TravelNote>
    </ArticleSection>
  );
}

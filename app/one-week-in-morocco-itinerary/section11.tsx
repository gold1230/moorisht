import { ArticleSection, GuideTable, TravelNote } from "./ArticleElements";

export default function Section11() {
  return (
    <ArticleSection id="northern-morocco-in-one-week-casablanca-chefchaouen-and-fes" label="Another 7-Day Itinerary" title="Northern Morocco in One Week: Casablanca, Chefchaouen and Fes">
      <p className="mt-5 text-lg leading-8 text-gray-700">Not every one-week Morocco trip needs to include the desert. If you are more interested in architecture, royal history, markets and northern mountain towns, you can enjoy a <strong className="font-bold text-slate-900">seven-day Morocco cultural itinerary</strong> starting from Casablanca or Tangier. This option keeps the journey focused on the north of the country, which is better for travelers who want to visit Chefchaouen without the long road to Merzouga.</p>
      <GuideTable headings={["Day", "Example northern route"]} rows={[["1", "Arrive in Casablanca and explore the city if time allows"], ["2", "Visit Rabat; continue toward Chefchaouen"], ["3", "Discover Chefchaouen and relax in the Rif Mountains"], ["4", "Travel toward Fes; enjoy the medina in the evening"], ["5", "Guided Fes city tour, artisan neighborhoods and monuments"], ["6", "Optional Meknes and Volubilis day trip; stay near Fes"], ["7", "Transfer to your chosen departure airport"]]} />
      <p className="mt-5 text-lg leading-8 text-gray-700">Casablanca gives you a view of modern Moroccan life and the famous Hassan II Mosque. In Rabat, the capital, you can see historic landmarks and more peaceful streets. Chefchaouen offers mountain views and blue medina lanes, while Fes gives the trip its deep cultural character through traditional crafts, historic neighborhoods and beautiful buildings.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">The advantage of this route is that you can spend real time in the northern towns. The disadvantage is that the famous Sahara dunes are not included. For travelers whose main goal is camel trekking and a desert camp, our Marrakech-to-Merzouga or Fes-to-Merzouga routes will be more suitable.</p>
      <TravelNote title="Choosing your airport"><p>The best arrival and departure airports depend on your flight options. The order of these northern stops can be reversed for flights into Tangier, Fes or Casablanca.</p></TravelNote>
    </ArticleSection>
  );
}

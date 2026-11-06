import { ArticleSection, TravelNote, BulletList } from "./ArticleElements";






export default function Section10() {
 return (
  <ArticleSection id="what-is-included-in-a-merzouga-luxury-desert-camp-stay" label="Check before paying" title="What Is Included in a Merzouga Luxury Desert Camp Stay?">
  <p className="mt-5 text-lg leading-8 text-gray-700">A luxury camp reservation may include breakfast, dinner, a welcome tea and accommodation, but the details depend on the property and package. Some tours also include a sunset camel ride or 4×4 transfer. Others charge separately for these activities or for transport from a different city. A cheap-looking price can become much more expensive when extra services are added.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">When Moorish Tour helps travelers organize a Sahara visit, we recommend requesting a written explanation of what is included. Ask if the quoted rate is per person or per tent, whether taxes are covered, whether children are charged separately and whether pickup from Merzouga or Erfoud is included. You should also ask about cancellation terms and what happens if wind or weather affects an outdoor activity.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">For your comfort, confirm the actual sleeping arrangement, the number of beds, hot water, electrical outlets, Wi-Fi and heating or air-conditioning for the time of year. In the desert, internet and electrical supply may be less reliable than in a city hotel. Bring essential medication and keep valuable items with you instead of leaving them in an unattended vehicle.</p>
  <BulletList items={["Exact tent category and private-bathroom details", "Dinner, breakfast and dietary arrangements", "Camel trek, 4×4 pickup and meeting point", "Heating or air-conditioning for your dates", "Taxes, extra activities and cancellation rules", "Luggage transport and child arrangements"]} />
  <TravelNote title="Important booking question"><p>Ask: “Can you send me the full list of inclusions for the exact tent category and dates I am booking?” This one question often prevents confusion on arrival.</p></TravelNote>
</ArticleSection>
 );
}

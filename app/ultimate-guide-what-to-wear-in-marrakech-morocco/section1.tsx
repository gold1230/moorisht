import { ArticleSection, ArticlePicture } from "./ArticleElements";
import MarrakechImage from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

export default function Section1() {
 return (
  <ArticleSection id="what-to-wear-in-marrakech-morocco-a-complete-travel-clothing-guide" label="Start Here" title="What to Wear in Marrakech, Morocco: A Complete Travel Clothing Guide" first>
  <p className="mt-5 text-lg leading-8 text-gray-700">Packing for Morocco feels exciting until you start wondering what people really wear in Marrakech. You may be picturing colorful markets, beautiful riads, sunny rooftop cafés and the golden dunes of the Sahara Desert. You want clothes that look good in photographs, but you also want to feel comfortable walking through the medina, visiting historical places and spending long hours outdoors. The good news is that you do not need a completely new wardrobe to enjoy your holiday.</p>
  <ArticlePicture src={MarrakechImage} alt="A journey through Morocco is easier with versatile clothing that works in both busy cities and warm desert landscapes." caption="A journey through Morocco is easier with versatile clothing that works in both busy cities and warm desert landscapes." />
  <p className="mt-5 text-lg leading-8 text-gray-700">The most useful rule is simple: choose comfortable, breathable clothes and bring a few modest options for traditional places. Visitors will see many different styles in Marrakech, from fashionable modern outfits to traditional djellabas and everyday jeans. There is no single outfit that everyone must wear. Clothing choices depend on the weather, the neighborhood, what you are doing and your personal comfort. In the old medina and small rural villages, outfits that cover the shoulders and reach around the knees or lower are a practical and respectful choice for women and men.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">This updated Moorish Tour guide explains what to wear in Marrakech, what to pack for the Sahara, how to dress in different seasons and which shoes actually work for sightseeing. We also include easy outfit ideas, packing tables and answers to common questions about shorts, scarves, dresses and visiting cultural sites. Whether you are staying for a weekend in Marrakech or joining a longer Morocco tour to Merzouga, a little planning will help you travel with confidence.</p>
</ArticleSection>
 );
}

import { ArticleSection, ArticleBullets } from "./ArticleElements";
import Link from "next/link";

export default function Section13() {
 return (
<ArticleSection id="moroccan-sweets-breakfast-and-mint-tea-traditions" label="SWEET MOMENTS" title="Moroccan Sweets, Breakfast and Mint Tea Traditions">
<p className="mt-5 text-lg leading-8 text-gray-700">A Moroccan food tour should leave time for sweets and tea. Chebakia, an intricate honey-coated pastry with sesame, is especially associated with Ramadan. Ghriba biscuits, almond pastries and kaab el ghazal, sometimes called gazelle horns, offer different textures and flavours. Some contain nuts, eggs or butter, so anyone with allergies should ask about ingredients.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Mint tea is an important gesture of welcome in many places. Traditionally prepared using green tea and fresh mint, it may be served quite sweet. If you prefer less sugar, simply ask politely; preparation practices vary. Enjoying tea slowly in a riad courtyard or village home can be a welcome pause between busy sightseeing stops.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Breakfast is another easy way to try local food. Taste warm msemen, soft baghrir with honey, crusty bread or amlou, a spread commonly made with argan oil, almonds and honey in the southwest. During a <Link href="/one-week-in-morocco-itinerary/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">one-week Morocco journey</Link>, these small daily experiences help reveal how food differs by region and household.</p>
<ArticleBullets items={["Msemen — layered flatbread often served warm", "Baghrir — spongy pancakes with small holes", "Ghriba — crumbly traditional biscuits", "Chebakia — honey and sesame pastry", "Amlou — almond, argan oil and honey spread", "Mint tea — a familiar welcome drink"]} />
</ArticleSection>
 );
}

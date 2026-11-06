import { ArticleSection, ArticleBullets } from "./ArticleElements";

export default function Section6() {
 return (
<ArticleSection id="pastilla-harira-and-other-must-try-moroccan-dishes" label="CLASSIC FLAVOURS" title="Pastilla, Harira and Other Must-Try Moroccan Dishes">
<p className="mt-5 text-lg leading-8 text-gray-700">Pastilla, sometimes written bastilla, is a layered pastry associated with festive cooking and especially well known in Fes. Some versions include chicken or pigeon, almonds, cinnamon and a dusting of powdered sugar, creating a deliberate mix of sweet and savoury. Seafood pastilla is another popular style. Ask what filling is used because names and recipes change from one restaurant to another.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Harira is a comforting tomato-based soup often made with lentils, chickpeas, fresh herbs and sometimes meat and small noodles. It is especially associated with breaking the fast during Ramadan, although many places serve it at other times as well. Zaalouk, a cooked eggplant-and-tomato salad, is a good companion to fresh bread. Briouats, small pastries with savoury or sweet fillings, are an enjoyable snack or starter.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">For more variety, look for rfissa made with shredded flatbread, chicken, lentils and aromatic seasoning, or mechoui, slow-roasted meat that is common at celebrations and speciality eateries. A thoughtful guide will encourage smaller tastings of several dishes rather than one enormous meal that leaves no room for the rest of the market.</p>
<ArticleBullets items={["Pastilla — crisp pastry with a sweet-and-savoury filling", "Harira — warming soup with pulses and herbs", "Zaalouk — cooked eggplant and tomato salad", "Briouats — small filled pastries", "Rfissa — shredded flatbread with chicken and lentils", "Mechoui — traditionally slow-roasted meat"]} />
</ArticleSection>
 );
}

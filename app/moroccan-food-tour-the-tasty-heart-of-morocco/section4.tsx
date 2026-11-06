import { ArticleSection, ArticleNote, ArticleBullets } from "./ArticleElements";
import Link from "next/link";

export default function Section4() {
 return (
<ArticleSection id="moroccan-tagine-a-slow-cooked-dish-worth-trying" label="SIGNATURE DISH" title="Moroccan Tagine: A Slow-Cooked Dish Worth Trying">
<p className="mt-5 text-lg leading-8 text-gray-700">Tagine refers to both the cooking vessel with its pointed lid and the dish prepared inside it. Ingredients are arranged carefully and cooked slowly with a small amount of liquid. The method helps chicken, lamb, vegetables and spices develop deep flavour while remaining tender. Tagines are not all the same: the balance of ingredients changes from city to city, from kitchen to kitchen and with the season.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Chicken with preserved lemon and olives is a classic choice for people who like bright, salty flavours. Beef or lamb with prunes offers an interesting sweet-and-savoury combination, while vegetable tagines use carrots, potatoes, peas, squash and other seasonal produce. If you dislike strong spices, ask your guide to explain the dish; aromatic does not automatically mean hot.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">The best part of a tagine tasting is learning how it is cooked. A small cooking lesson may involve selecting vegetables at a market, grinding or measuring spices, preparing ingredients and sharing the finished dish. You can include a culinary stop during <Link href="/marrakech-desert-tours/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech desert tours</Link> or ask for a home-cooking lesson before leaving the city.</p>
<ArticleBullets items={["Chicken with preserved lemon and olives — tangy and savoury", "Lamb or beef with prunes — sweet, warming flavours", "Seasonal vegetable tagine — ask about stock and butter if vegan", "Fish tagine — often with tomatoes, herbs and chermoula"]} />
<ArticleNote title="Ordering tip"><p>Ask what is cooked fresh that day and allow time for slow preparation. A decorative tagine pot on the table does not by itself tell you how the food was cooked.</p></ArticleNote>
</ArticleSection>
 );
}

import Image from "next/image";
import type { StaticImageData } from "next/image";
import pic1 from "./assets/crossing.webp";
import pic2 from "./assets/port.webp";
import pic3 from "./assets/bluecity.webp";
import pic4 from "./assets/fes.webp";
import pic5 from "./assets/sahara.webp";
import pic6 from "./assets/atlas.webp";
import pic7 from "./assets/marrakech.webp";
import pic8 from "./assets/kasbah.webp";
import pic9 from "./assets/coast.webp";
import pic10 from "./assets/courtyard.webp";
import pic11 from "./assets/fossils.webp";
const photos:Record<string,{src:StaticImageData;alt:string;caption:string}> = {
  fossils:{src:pic11,alt:"Original illustration of ammonite and trilobite fossils from the Erfoud region",caption:"Erfoud fossil workshops offer insight into ancient marine life and skilled stonework."},
  crossing:{src:pic1,alt:"Illustration of the northern Moroccan maritime gateway",caption:"Northern Morocco connects coastal cities with inland travel routes."},
  port:{src:pic2,alt:"Illustration of Tangier waterfront, port and buildings",caption:"Tangier is a fascinating introduction to the northern coast."},
  bluecity:{src:pic3,alt:"Illustration of blue-painted lanes in Chefchaouen",caption:"Chefchaouen rewards travelers who leave time for slower moments."},
  fes:{src:pic4,alt:"Illustration of traditional buildings in the Fes medina",caption:"Fes brings history, craftsmanship and food together in its old city."},
  sahara:{src:pic5,alt:"Illustration of camel silhouettes among the Erg Chebbi dunes",caption:"The golden dunes near Merzouga reward unhurried exploration."},
  atlas:{src:pic6,alt:"Illustration of winding roads and peaks in the High Atlas",caption:"Mountain roads are a beautiful part of longer journeys across Morocco."},
  marrakech:{src:pic7,alt:"Illustration of Marrakech architecture and Koutoubia-style minaret",caption:"Marrakech is a lively finish to a longer north-to-south journey."},
  kasbah:{src:pic8,alt:"Illustration of Ait Ben Haddou traditional earthen buildings",caption:"Kasbah landscapes add rich history to journeys between desert and city."},
  coast:{src:pic9,alt:"Illustration of Essaouira seafront walls and Atlantic Ocean",caption:"Essaouira is a calmer Atlantic stop on a longer tour."},
  courtyard:{src:pic10,alt:"Illustration of a Moroccan riad courtyard and central fountain",caption:"A quiet riad moment can be as memorable as a famous landmark."},
};
export type ArticlePhotoName = keyof typeof photos;
export default function ArticlePhoto({name,compact=false}:{name:ArticlePhotoName;compact?:boolean}){
 const photo=photos[name];
 if(!photo)return null;
 return <figure className={compact?"min-w-0":"my-9"}>
  <div className={`relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ${compact?'aspect-[5/4]':'aspect-[16/9]'}`}>
   <Image src={photo.src} alt={photo.alt} fill placeholder="blur" sizes={compact?"(max-width: 767px) 100vw, 480px":"(max-width: 1024px) 100vw, 850px"} className="object-cover" loading="lazy"/>
  </div>
  <figcaption className="mt-3 text-sm leading-6 text-slate-500">{photo.caption} <span className="italic">(Original editorial illustration.)</span></figcaption>
 </figure>;
}

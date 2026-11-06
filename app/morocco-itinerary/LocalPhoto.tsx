import Image, { type StaticImageData } from "next/image";
import marrakech from "./assets/marrakech.webp";
import atlas from "./assets/atlas.webp";
import sahara from "./assets/sahara.webp";
import fes from "./assets/fes.webp";
import bluecity from "./assets/bluecity.webp";
import kasbah from "./assets/kasbah.webp";
import coast from "./assets/coast.webp";
import courtyard from "./assets/courtyard.webp";
const photos: Record<string,{src:StaticImageData;alt:string;caption:string}> = {
 marrakech:{src:marrakech,alt:"Illustrated Marrakech medina and minaret",caption:"Marrakech combines historic streets, gardens and a busy evening atmosphere."},
 atlas:{src:atlas,alt:"Illustration of the High Atlas mountains and winding road",caption:"The Atlas crossing is a highlight, but mountain road conditions can affect travel."},
 sahara:{src:sahara,alt:"Illustration of camel silhouettes in Erg Chebbi Sahara dunes",caption:"The dunes of Merzouga deserve more time than a quick photo stop."},
 fes:{src:fes,alt:"Illustration of Fes traditional medina buildings",caption:"Fes rewards an unhurried day in its old streets."},
 bluecity:{src:bluecity,alt:"Illustration of the blue-painted medina of Chefchaouen",caption:"Chefchaouen is at its best when you can enjoy a quiet morning."},
 kasbah:{src:kasbah,alt:"Illustration of earthen houses of Ait Ben Haddou",caption:"Ait Ben Haddou is an important stop on many southbound routes."},
 coast:{src:coast,alt:"Illustration of the Atlantic coast and Essaouira ramparts",caption:"Essaouira offers sea air and a slower rhythm after busy cities."},
 courtyard:{src:courtyard,alt:"Illustration of a traditional Moroccan riad courtyard",caption:"A peaceful riad can be part of the travel experience."},
};
export default function LocalPhoto({name,className="",priority=false}:{name:string;className?:string;priority?:boolean}){
 const photo=photos[name]; if(!photo)return null;
 return <figure className={`min-w-0 ${className}`}><div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#e4e9ef]">
  <Image src={photo.src} alt={photo.alt} fill priority={priority} loading={priority?"eager":"lazy"} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 800px" className="object-cover"/>
  </div><figcaption className="mt-2.5 text-xs leading-5 text-slate-500">{photo.caption} <span className="italic">Original editorial illustration.</span></figcaption></figure>;
}

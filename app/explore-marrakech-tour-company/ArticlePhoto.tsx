import Image from "next/image";
import type { StaticImageData } from "next/image";
import photo1 from "@/public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
import photo2 from "@/public/blog/content/mountain-road-through-tizi-n-tichka-pass-in-the-high-atlas-mountains.jpg";
import photo3 from "@/public/blog/content/travelers-visiting-ait-ben-haddou-ksar-morocco.jpg";
import photo4 from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
import photo7 from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";
import photo8 from "@/public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg";
import photo9 from "@/public/blog/content/tourists-visiting-nomad-tent-merzouga-desert.jpg";

const images: Record<string, {src:StaticImageData;alt:string;caption:string}> = {
  marrakechjourney: {src:photo1,alt:"Travelers admiring the scenery on an organized Morocco journey",caption:"Let a good travel plan leave room for experiences as well as sightseeing."},
  atlasroad: {src:photo2,alt:"Winding road through Morocco High Atlas mountains",caption:"Mountain routes reveal another side of travel beyond Marrakech."},
  kasbah: {src:photo3,alt:"Travelers exploring earthen buildings at Ait Ben Haddou",caption:"Historic kasbahs are part of many southbound routes from Marrakech."},
  sahara: {src:photo4,alt:"Camel caravan crossing sand dunes near Merzouga",caption:"Golden dunes are a multi-day journey from Marrakech, not a local day trip."},
  camp: {src:photo7,alt:"Sahara desert camp near the Erg Chebbi dunes",caption:"Ask about tent facilities, meals and arrival transfers before booking."},
  group: {src:photo8,alt:"Small group of travelers visiting the Moroccan Sahara",caption:"Group and private tours suit different budgets and travel rhythms."},
  village: {src:photo9,alt:"Travelers visiting local desert hosts respectfully",caption:"Local conversations can be among the nicest parts of the journey."},
};
export type ArticlePhotoName = keyof typeof images;
export default function ArticlePhoto({name,compact=false}:{name:ArticlePhotoName;compact?:boolean}){
 const image=images[name];
 if(!image) return null;
 return <figure className={compact?"min-w-0":"my-9"}>
  <div className={`relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ${compact?"aspect-[5/4]":"aspect-[16/9]"}`}>
    <Image src={image.src} alt={image.alt} fill placeholder="blur" sizes={compact?"(max-width: 767px) 100vw, 480px":"(max-width: 1024px) 100vw, 850px"} className="object-cover" loading="lazy" />
  </div>
  <figcaption className="mt-3 text-sm leading-6 text-slate-500">{image.caption}</figcaption>
 </figure>;
}

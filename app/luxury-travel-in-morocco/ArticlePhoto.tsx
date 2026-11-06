import Image from "next/image";
import type { StaticImageData } from "next/image";
import photo1 from "@/public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
import photo2 from "@/public/blog/content/mountain-road-through-tizi-n-tichka-pass-in-the-high-atlas-mountains.jpg";
import photo3 from "@/public/blog/content/travelers-visiting-ait-ben-haddou-ksar-morocco.jpg";
import photo4 from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
import photo5 from "@/public/blog/content/road-through-southern-morocco-during-marrakech-to-merzouga-desert-tour.jpg";
import photo6 from "@/public/blog/content/todra-gorge-dramatic-rocky-cliffs-in-southern-morocco.jpg";
import photo7 from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";
import photo8 from "@/public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg";
import photo9 from "@/public/blog/content/tourists-visiting-nomad-tent-merzouga-desert.jpg";

const images: Record<string, {src:StaticImageData;alt:string;caption:string}> = {
  journey: {src:photo1,alt:"Travelers overlooking a scenic landscape during a private Morocco journey",caption:"True luxury leaves time to enjoy the views, not just reach the next hotel."},
  atlas: {src:photo2,alt:"Winding High Atlas mountain road in Morocco",caption:"A private mountain drive should include comfortable stops and time for photographs."},
  kasbah: {src:photo3,alt:"Travelers visiting the historic earthen village of Ait Ben Haddou",caption:"Historic villages and beautiful architecture add meaning to a luxury journey."},
  dunes: {src:photo4,alt:"Camel caravan crossing the golden Erg Chebbi dunes at Merzouga",caption:"Camel trekking is an optional classic desert experience; 4x4 transfers may also be arranged."},
  road: {src:photo5,alt:"Road winding toward southern Morocco and the Sahara Desert",caption:"Allow enough days for the road between Marrakech and the dunes."},
  gorge: {src:photo6,alt:"Tall rock walls of Todra Gorge in southern Morocco",caption:"A scenic gorge walk is a peaceful change from city life."},
  camp: {src:photo7,alt:"Desert camp among dunes in the Moroccan Sahara",caption:"Confirm the bathroom, heating, meals and transfer details before booking a luxury camp."},
  group: {src:photo8,alt:"Travelers enjoying a guided visit near Merzouga dunes",caption:"Private and small-group travel can both be comfortable when the itinerary is clear."},
  local: {src:photo9,alt:"Guests visiting a traditional desert tent with local hosts",caption:"Respectful local encounters often become the most lasting memories."},
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

import Image from "next/image";
import type { StaticImageData } from "next/image";
import photo1 from "@/public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
import photo2 from "@/public/blog/content/road-through-southern-morocco-during-marrakech-to-merzouga-desert-tour.jpg";
import photo3 from "@/public/blog/content/mountain-road-through-tizi-n-tichka-pass-in-the-high-atlas-mountains.jpg";
import photo4 from "@/public/blog/content/travelers-visiting-ait-ben-haddou-ksar-morocco.jpg";
import photo5 from "@/public/blog/content/todra-gorge-dramatic-rocky-cliffs-in-southern-morocco.jpg";
import photo6 from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
import photo7 from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";
import photo8 from "@/public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg";
import photo9 from "@/public/blog/content/tourists-visiting-nomad-tent-merzouga-desert.jpg";

const images: Record<string, {src:StaticImageData;alt:string;caption:string}> = {
  panorama: {src:photo1,alt:"Travelers pausing at a beautiful viewpoint during a Moroccan road trip",caption:"Good journeys include time to look around, not only time on the road."},
  road: {src:photo2,alt:"Mountain and desert road on the way from Marrakech to the Sahara",caption:"The road itself is an important part of a Marrakech desert adventure."},
  atlas: {src:photo3,alt:"Winding mountain route through the High Atlas",caption:"Mountain weather and travel times deserve space in every good itinerary."},
  kasbah: {src:photo4,alt:"Travelers exploring the UNESCO-listed ksar of Ait Ben Haddou",caption:"Ait Ben Haddou is a rewarding historical stop on a southern Morocco journey."},
  gorge: {src:photo5,alt:"Steep limestone cliffs and path inside Todra Gorge",caption:"A short gorge walk can be a welcome break between longer road stages."},
  dunes: {src:photo6,alt:"Camel riders crossing the golden Erg Chebbi dunes at sunset",caption:"The Sahara experience is worth planning with realistic driving days."},
  camp: {src:photo7,alt:"Comfortable desert camp under the open sky at Merzouga",caption:"Camp facilities vary; check room types and transfers before making a booking."},
  friends: {src:photo8,alt:"Friends sharing an organized desert tour",caption:"Private and small-group journeys suit different travel styles."},
  local: {src:photo9,alt:"Visitors talking with local hosts during a guided journey",caption:"A respectful cultural encounter is an opportunity to listen and learn."},
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

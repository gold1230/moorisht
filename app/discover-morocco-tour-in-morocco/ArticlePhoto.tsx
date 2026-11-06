import Image from "next/image";
import type { StaticImageData } from "next/image";
import landscapesImage from "@/public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
import aitImage from "@/public/blog/content/travelers-visiting-ait-ben-haddou-ksar-morocco.jpg";
import camelsImage from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
import atlasImage from "@/public/blog/content/mountain-road-through-tizi-n-tichka-pass-in-the-high-atlas-mountains.jpg";
import todraImage from "@/public/blog/content/todra-gorge-dramatic-rocky-cliffs-in-southern-morocco.jpg";
import kasbahImage from "@/public/blog/content/traditional-kasbah-architecture-in-ouarzazate-morocco.jpg";
import roadImage from "@/public/blog/content/road-through-southern-morocco-during-marrakech-to-merzouga-desert-tour.jpg";
import campImage from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";
import travelersImage from "@/public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg";
const images: Record<string, {src:StaticImageData;alt:string;caption:string}> = {
 landscapes:{src:landscapesImage,alt:"Travelers looking across the scenic valleys and desert landscapes of Morocco",caption:"Scenic landscapes and viewpoints are part of a private Morocco discovery journey."},
 ait:{src:aitImage,alt:"Travelers visiting Ait Ben Haddou fortified village in southern Morocco",caption:"Ait Ben Haddou is a memorable cultural stop on a southern Morocco route."},
 camels:{src:camelsImage,alt:"Visitors riding camels across the Erg Chebbi dunes near Merzouga",caption:"Camel trekking is an optional Sahara experience that many travelers choose."},
 atlas:{src:atlasImage,alt:"Scenic mountain road through the High Atlas and Tizi n Tichka pass",caption:"The High Atlas road connects Marrakech with kasbah towns and southern valleys."},
 todra:{src:todraImage,alt:"Tall red rock walls in Todra Gorge in southern Morocco",caption:"Todra Gorge offers dramatic cliffs and a pleasant short walk between tour stops."},
 kasbah:{src:kasbahImage,alt:"Traditional earthen kasbah buildings around Ouarzazate Morocco",caption:"Traditional kasbah architecture helps tell the history of southern Morocco."},
 road:{src:roadImage,alt:"Road through the valleys of southern Morocco toward Merzouga",caption:"Allow enough time to enjoy the journey, not just the destinations."},
 camp:{src:campImage,alt:"Sahara desert camp beneath the dunes of Erg Chebbi",caption:"Desert camps vary in facilities; check the exact tent and transfer options."},
 travelers:{src:travelersImage,alt:"Small group travelers exploring the desert region near Merzouga",caption:"A small group journey can combine local culture and shared outdoor experiences."},
};
export default function ArticlePhoto({name}:{name:keyof typeof images}){
 const data=images[name];
 return <figure className="my-9">
  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
   <Image src={data.src} alt={data.alt} fill placeholder="blur" loading="lazy" sizes="(max-width: 1024px) 100vw, 850px" className="object-cover" />
  </div>
  <figcaption className="mt-3 text-sm leading-6 text-slate-500">{data.caption}</figcaption>
 </figure>;
}

import Image from "next/image";
import type { StaticImageData } from "next/image";
import openingImage from "@/public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
import atlasImage from "@/public/blog/content/mountain-road-through-tizi-n-tichka-pass-in-the-high-atlas-mountains.jpg";
import kasbahImage from "@/public/blog/content/travelers-visiting-ait-ben-haddou-ksar-morocco.jpg";
import desertImage from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
import campImage from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";
import todraImage from "@/public/blog/content/todra-gorge-dramatic-rocky-cliffs-in-southern-morocco.jpg";
import fourbyfourImage from "@/public/blog/content/4x4-vehicle-exploring-desert-landscapes-around-merzouga-and-erg-chebbi.jpg";
import groupImage from "@/public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg";
import localImage from "@/public/blog/content/tourists-visiting-nomad-tent-merzouga-desert.jpg";
import roadImage from "@/public/blog/content/road-through-southern-morocco-during-marrakech-to-merzouga-desert-tour.jpg";
const images: Record<string, {src:StaticImageData;alt:string;caption:string}> = {
 opening:{src:openingImage,alt:"Travelers enjoying a scenic viewpoint during a private Morocco road trip",caption:"The best Morocco tours give you time to enjoy the journey as well as the famous stops."},
 atlas:{src:atlasImage,alt:"Mountain road crossing the High Atlas Mountains at Tizi n Tichka pass",caption:"The Atlas route introduces a different world of villages, valleys and changing landscapes."},
 kasbah:{src:kasbahImage,alt:"Travelers visiting the historic earthen ksar of Ait Ben Haddou in southern Morocco",caption:"Ait Ben Haddou is an architectural highlight on many journeys toward the Sahara."},
 desert:{src:desertImage,alt:"Camel riders exploring golden Erg Chebbi dunes beside Merzouga",caption:"Quiet dune light turns a Sahara evening into a special moment."},
 camp:{src:campImage,alt:"Tents at a desert camp near the Erg Chebbi dunes in Merzouga",caption:"Camp stays range from simple tents to higher-comfort accommodation; confirm the facilities."},
 todra:{src:todraImage,alt:"Tall rocky walls of Todra Gorge in southeastern Morocco",caption:"Todra Gorge makes a pleasant scenic stop on many southern Morocco routes."},
 fourbyfour:{src:fourbyfourImage,alt:"Four wheel drive vehicle exploring stony plains near Merzouga",caption:"A guided 4x4 excursion can reveal a different side of the Sahara beyond the dunes."},
 group:{src:groupImage,alt:"Small group travelers enjoying a guided Sahara desert holiday",caption:"Thoughtful group sizes and flexible stops can make a big difference to comfort."},
 local:{src:localImage,alt:"Travelers visiting local desert hosts in southeastern Morocco",caption:"Meeting local hosts respectfully adds a human side to a scenic trip."},
 road:{src:roadImage,alt:"Road journey through southern Morocco toward the Sahara dunes",caption:"Leave realistic time for roads, meal breaks and scenic viewpoints."},
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

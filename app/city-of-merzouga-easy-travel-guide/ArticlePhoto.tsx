import Image from "next/image";
import type { StaticImageData } from "next/image";
import dunesImage from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
import camelsImage from "@/public/blog/content/travelers-camel-trekking-across-erg-chebbi-dunes-at-sunset.jpg";
import campImage from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";
import fourbyfourImage from "@/public/blog/content/4x4-vehicle-exploring-desert-landscapes-around-merzouga-and-erg-chebbi.jpg";
import roadImage from "@/public/blog/content/road-through-southern-morocco-during-marrakech-to-merzouga-desert-tour.jpg";
import groupImage from "@/public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg";
import villageImage from "@/public/blog/content/tourists-visiting-nomad-tent-merzouga-desert.jpg";
import ergImage from "@/public/blog/content/tourists-exploring-merzouga-desert-morocco.jpg";
import landscapeImage from "@/public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
const images: Record<string, {src:StaticImageData;alt:string;caption:string}> = {
 dunes:{src:dunesImage,alt:"Camel riders passing over golden Erg Chebbi sand dunes near Merzouga",caption:"A slow journey into the dunes is one of the most memorable ways to see the Sahara."},
 camels:{src:camelsImage,alt:"Travelers camel trekking in the golden sand near Merzouga at sunset",caption:"Soft evening light brings warm colors to the dune ridges."},
 camp:{src:campImage,alt:"Comfortable desert tent camp at the foot of Erg Chebbi sand dunes",caption:"A desert camp night lets you enjoy the dunes long after day visitors leave."},
 fourbyfour:{src:fourbyfourImage,alt:"Four wheel drive vehicle exploring rocky desert terrain near Merzouga",caption:"Guided off-road drives visit landscapes that are different from the tall sand dunes."},
 road:{src:roadImage,alt:"Road crossing southern Morocco on the way to Merzouga Sahara dunes",caption:"Reaching the Sahara is a scenic part of the journey, but driving times can be long."},
 group:{src:groupImage,alt:"Small group travelers visiting the Merzouga desert",caption:"Desert experiences can be adapted for couples, families and small groups."},
 village:{src:villageImage,alt:"Visitors learning about desert life in a local tent near Merzouga",caption:"Cultural visits are more meaningful when arranged with local hosts and permission."},
 erg:{src:ergImage,alt:"Wide view of the sands and plains of the Merzouga Sahara region",caption:"Beyond the famous dunes are small settlements, oases and open stony plains."},
 landscape:{src:landscapeImage,alt:"Travelers enjoying an elevated view of southern Morocco\u2019s desert landscape",caption:"Allow time for viewpoints and breaks rather than rushing through the whole route."},
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

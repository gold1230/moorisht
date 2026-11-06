import Image from "next/image";
import type { StaticImageData } from "next/image";
import openingImage from "@/public/blog/content/travelers-exploring-morocco-on-a-desert-journey-viewpoint.jpg";
import groupImage from "@/public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg";
import roadImage from "@/public/blog/content/road-through-southern-morocco-during-marrakech-to-merzouga-desert-tour.jpg";
import kasbahImage from "@/public/blog/content/travelers-visiting-ait-ben-haddou-ksar-morocco.jpg";
import atlasImage from "@/public/blog/content/mountain-road-through-tizi-n-tichka-pass-in-the-high-atlas-mountains.jpg";
import desertImage from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
import campImage from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";
import localImage from "@/public/blog/content/tourists-visiting-nomad-tent-merzouga-desert.jpg";
import fourbyfourImage from "@/public/blog/content/4x4-vehicle-exploring-desert-landscapes-around-merzouga-and-erg-chebbi.jpg";
const images: Record<string, {src:StaticImageData;alt:string;caption:string}> = {
 opening:{src:openingImage,alt:"Travelers enjoying a panoramic viewpoint during a guided Morocco journey",caption:"A well-planned tour gives you time for beautiful views, useful stops and local stories."},
 group:{src:groupImage,alt:"Travelers enjoying a guided group excursion during a Morocco holiday",caption:"An organized journey should feel comfortable for the people traveling together."},
 road:{src:roadImage,alt:"Scenic road through southern Morocco with changing landscapes",caption:"Long-distance journeys involve real driving time; choose a route that matches your energy."},
 kasbah:{src:kasbahImage,alt:"Travelers visiting historic Ait Ben Haddou during a cultural road trip",caption:"Ancient architecture and guided conversations make a Morocco tour richer."},
 atlas:{src:atlasImage,alt:"Winding road through the High Atlas Mountains",caption:"Mountain routes can be highlights in their own right when there is time to stop."},
 desert:{src:desertImage,alt:"Camel riders crossing Erg Chebbi dunes near Merzouga at golden hour",caption:"The Sahara can be part of a longer Casablanca tour when the schedule allows."},
 camp:{src:campImage,alt:"Desert camp tents near the dunes of Merzouga",caption:"Confirm the camp style, bathroom facilities and transfer method before you book."},
 local:{src:localImage,alt:"Travelers meeting local hosts in a desert community",caption:"Respectful cultural visits are about listening and learning, not only photographs."},
 fourbyfour:{src:fourbyfourImage,alt:"Four wheel drive vehicle in the desert landscape near Merzouga",caption:"A suitable vehicle matters on selected off-road desert excursions."},
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

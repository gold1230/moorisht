import Image from "next/image";
import type { StaticImageData } from "next/image";
import image1 from "./assets/crossing.webp";
import image2 from "./assets/port.webp";
import image3 from "./assets/bluecity.webp";
import image4 from "./assets/fes.webp";
import image5 from "./assets/sahara.webp";
import image6 from "./assets/atlas.webp";
import image7 from "./assets/marrakech.webp";
import image8 from "./assets/kasbah.webp";
import image9 from "./assets/coast.webp";
import image10 from "./assets/courtyard.webp";
import image11 from "./assets/fossils.webp";

const photos: Record<string, {src: StaticImageData; alt: string; caption: string}> = {
  crossing: {src: image1, alt: "Original illustrated travel view of ferries crossing toward northern Morocco", caption: "A ferry crossing can be an enjoyable part of a northern Morocco trip."},
  port: {src: image2, alt: "Original illustration of the Tangier port area and waterfront", caption: "Tangier is an inviting first stop for travelers arriving in northern Morocco."},
  bluecity: {src: image3, alt: "Original illustration of blue alleyways in Chefchaouen and Rif mountain homes", caption: "The slower rhythm of Chefchaouen invites travelers to stay overnight."},
  fes: {src: image4, alt: "Original illustration of traditional courtyards and rooftops in Fes", caption: "Fes rewards slow walks through its historic medina."},
  sahara: {src: image5, alt: "Original illustration of Erg Chebbi dunes with desert camel silhouettes", caption: "The Erg Chebbi dunes near Merzouga are a highlight of longer Morocco journeys."},
  atlas: {src: image6, alt: "Original illustration of an Atlas Mountains winding road and peaks", caption: "Mountain scenery is one of the pleasures of a well-paced southern route."},
  marrakech: {src: image7, alt: "Original illustration of Marrakech old city walls and traditional minaret", caption: "Marrakech offers culture, colors, food and historic landmarks."},
  kasbah: {src: image8, alt: "Original illustration of earthen fortified buildings at Ait Ben Haddou", caption: "The traditional earthen architecture of the south gives the journey another layer of history."},
  coast: {src: image9, alt: "Original illustration of Essaouira oceanfront fortifications and Atlantic waters", caption: "A few days beside the Atlantic can be a calming finish to a tour."},
  courtyard: {src: image10, alt: "Original illustration of a peaceful Moroccan riad courtyard with fountain", caption: "A restful riad afternoon can be as memorable as a famous monument."},
  fossils: {src: image11, alt: "Original illustrated ammonite and trilobite fossils related to Erfoud workshops", caption: "Fossil workshops introduce the natural history of the Erfoud region."},
};
export type ArticlePhotoName = keyof typeof photos;
export default function ArticlePhoto({name,compact=false}:{name:ArticlePhotoName; compact?:boolean}) {
 const photo=photos[name];
 if (!photo) return null;
 return <figure className={compact?"min-w-0":"my-9"}>
   <div className={`relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ${compact?"aspect-[5/4]":"aspect-[16/9]"}`}>
     <Image src={photo.src} alt={photo.alt} fill placeholder="blur" sizes={compact?"(max-width: 767px) 100vw, 480px":"(max-width: 1024px) 100vw, 850px"} loading="lazy" className="object-cover" />
   </div>
   <figcaption className="mt-3 text-sm leading-6 text-slate-500">{photo.caption} <span className="italic">(Original editorial illustration.)</span></figcaption>
 </figure>;
}

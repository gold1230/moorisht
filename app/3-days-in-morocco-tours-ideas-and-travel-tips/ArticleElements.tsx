import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export function ArticleSection({id,label,title,first=false,children}:{id:string;label:string;title:string;first?:boolean;children:ReactNode}) {
  return <section id={id} aria-labelledby={`${id}-heading`} className={`${first ? '' : 'mt-14 border-t border-gray-200 pt-12'} scroll-mt-28`}>
    <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">{label}</p>
    <h2 id={`${id}-heading`} className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl">{title}</h2>
    <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />
    {children}
  </section>
}
export function ArticlePicture({src,alt,caption}:{src:StaticImageData;alt:string;caption:string}) {
  return <figure className="my-9">
    <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
      <Image src={src} alt={alt} width={1200} height={625} placeholder="blur" loading="lazy" sizes="(max-width: 1024px) 100vw, 850px" className="aspect-[16/8] h-auto w-full object-cover transition duration-500 hover:scale-[1.02]" />
    </div>
    <figcaption className="mt-3 text-sm leading-6 text-gray-500">{caption}</figcaption>
  </figure>
}
export function TravelNote({title,children}:{title:string;children:ReactNode}) {
 return <aside className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-5 sm:p-7">
  <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">{title}</p>
  <div className="mt-3 text-base leading-8 text-slate-700">{children}</div>
 </aside>
}
export function TravelQuote({children}:{children:ReactNode}) {
 return <blockquote className="my-9 rounded-r-2xl border-l-4 border-amber-500 bg-slate-50 px-6 py-6 text-lg italic leading-8 text-[#102043]">“{children}”</blockquote>
}
export function GuideTable({headings,rows}:{headings:string[];rows:string[][]}) {
 return <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
  <table className="w-full min-w-[580px] border-collapse text-left text-[15px] leading-7">
   <thead className="bg-[#102043] text-white"><tr>{headings.map(h=><th key={h} scope="col" className="px-5 py-4 font-bold">{h}</th>)}</tr></thead>
   <tbody>{rows.map((cells,i)=><tr key={i} className="border-t border-slate-100 even:bg-[#fffaf4]">{cells.map((c,j)=><td key={j} className="px-5 py-4 align-top text-slate-700">{c}</td>)}</tr>)}</tbody>
  </table>
 </div>
}
export function TourChoiceCards({items}:{items:{title:string;description:string;href:string;image:StaticImageData}[]}) {
 return <div className="my-8 grid gap-5 sm:grid-cols-2">
 {items.map(item=><Link href={item.href} key={item.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
  <Image src={item.image} alt={item.title} width={660} height={320} loading="lazy" sizes="(max-width: 640px) 100vw, 390px" className="aspect-[16/8] h-auto w-full object-cover" />
  <div className="p-5"><h3 className="text-lg font-bold text-[#102043] group-hover:text-amber-700">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p><span className="mt-3 inline-block text-sm font-bold text-amber-700">Explore this tour →</span></div>
 </Link>)}
 </div>
}
export function FAQItems({items}:{items:{question:string;answer:string}[]}) {
 return <div className="my-8 space-y-3">{items.map((item,i)=><details key={i} className="group rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
  <summary className="cursor-pointer list-none pr-4 text-base font-bold text-[#102043] marker:hidden">{item.question}<span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span></summary>
  <p className="mt-3 border-t border-slate-100 pt-3 text-[16px] leading-7 text-slate-700">{item.answer}</p>
 </details>)}</div>
}

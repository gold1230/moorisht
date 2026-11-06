import Link from "next/link";
import type {ReactNode} from "react";
import { ArrowRightIcon, CheckCircleIcon,  MapPinIcon, LightBulbIcon } from "@heroicons/react/24/outline";
export function SectionFrame({id,label,title,index,children}:{id:string;label:string;title:string;index:number;children:ReactNode}){
 return <section id={id} aria-labelledby={`${id}-heading`} className={`scroll-mt-28 ${index>1?'mt-16 border-t border-slate-200 pt-12':'mt-8'}`}>
  <div className="flex items-center gap-3">
    <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102043] text-sm font-extrabold text-white">{String(index).padStart(2,'0')}</span>
    <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">{label}</p><div className="mt-2 h-[3px] w-11 rounded-full bg-amber-500"/></div>
  </div>
  <h2 id={`${id}-heading`} className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102043] sm:text-4xl">{title}</h2>
  <div className="mt-6">{children}</div>
 </section>
}
export function InfoPanel({title,children}:{title:string;children:ReactNode}){
 return <aside role="note" className="my-8 rounded-2xl border border-amber-200 bg-[#fff9ef] p-6 sm:p-7">
  <div className="flex gap-3"><LightBulbIcon className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" aria-hidden="true" />
    <div><p className="font-extrabold text-[#102043]">{title}</p><div className="mt-2 text-[16px] leading-8 text-slate-700">{children}</div></div>
  </div>
 </aside>
}
export function FeatureCards({items}:{items:[string,string][]}){
 return <div className="my-9 grid gap-3 sm:grid-cols-2">
  {items.map(([title,desc],i)=><div key={title} className={`rounded-2xl border p-5 sm:p-6 ${i%3===0?'border-amber-200 bg-[#fff9ef]':'border-slate-200 bg-slate-50'}`}>
     <div className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-amber-700" aria-hidden="true"/><h3 className="text-[18px] font-extrabold text-[#102043]">{title}</h3></div>
     <p className="mt-3 text-[15px] leading-7 text-slate-700">{desc}</p>
  </div>)}
 </div>
}
export function Checklist({items}:{items:string[]}){
 return <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
  <h3 className="flex items-center gap-2 text-xl font-extrabold text-[#102043]"><CheckCircleIcon className="h-6 w-6 text-amber-700" aria-hidden="true"/>Useful checklist</h3>
  <ul className="mt-5 grid gap-3 sm:grid-cols-2">{items.map(i=><li className="flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-[15px] leading-7 text-slate-700" key={i}><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true"/>{i}</li>)}</ul>
 </div>
}
export function QuotePanel({children}:{children:ReactNode}){
 return <blockquote className="my-9 rounded-r-2xl border-l-[5px] border-amber-500 bg-[#f5f7fa] px-6 py-6 text-xl font-medium italic leading-8 text-[#102043]">“{children}”</blockquote>
}
export function Timeline({items}:{items:[string,string][]}){
 return <ol className="relative my-9 ml-3 border-l-2 border-amber-200 pl-7">
  {items.map(([title,desc],index)=><li key={title} className="relative pb-7 last:pb-0">
    <span className="absolute -left-[42px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#102043] text-xs font-bold text-white ring-4 ring-white">{index+1}</span>
    <h3 className="font-extrabold text-[#102043]">{title}</h3><p className="mt-1 text-[16px] leading-8 text-slate-700">{desc}</p>
  </li>)}
 </ol>
}
export function CompareTable({headings,rows}:{headings:string[];rows:string[][]}){
 return <div className="my-9 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"><table className="w-full min-w-[550px] border-collapse text-left text-sm leading-7">
  <thead className="bg-[#102043] text-white"><tr>{headings.map(h=><th scope="col" className="px-5 py-4 font-bold" key={h}>{h}</th>)}</tr></thead>
  <tbody>{rows.map((cells,i)=><tr key={i} className="border-t border-slate-100 even:bg-[#fffaf4]">{cells.map((v,j)=><td className="px-5 py-4 align-top text-slate-700" key={j}>{v}</td>)}</tr>)}</tbody>
 </table></div>
}
export function ArticleCTA(){return <div className="mt-9 rounded-2xl bg-[#102043] p-7 text-white shadow-sm sm:p-9">
 <div className="flex items-center gap-2">< MapPinIcon className="h-5 w-5 text-amber-300"/><p className="text-sm font-bold uppercase tracking-widest text-amber-300">Your trip, your pace</p></div>
 <p className="mt-4 text-xl font-extrabold sm:text-2xl">Plan your Marrakech journey with local guidance</p>
 <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">Share your preferred travel dates, party size and main interests. We’ll help you compare a city visit, an Atlas day trip or a longer Sahara route.</p>
 <div className="mt-6 flex flex-wrap gap-3"><Link href="/contact/" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-extrabold text-[#102043] hover:bg-amber-400">Ask for a tour plan <ArrowRightIcon className="h-4 w-4"/></Link><Link href="/marrakech-desert-tours/" className="inline-flex items-center rounded-lg border border-white/50 px-5 py-3 font-bold text-white hover:bg-white/10">Browse Marrakech tours</Link></div>
 </div>}

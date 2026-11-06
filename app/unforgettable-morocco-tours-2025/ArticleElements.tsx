import type { ReactNode } from "react";

export function ArticleSection({id, label, title, first=false, children}:{id:string;label:string;title:string;first?:boolean;children:ReactNode}) {
 return <section id={id} aria-labelledby={`${id}-heading`} className={`${first ? "" : "mt-14 border-t border-slate-200 pt-12"} scroll-mt-28`}>
  <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">{label}</p>
  <h2 id={`${id}-heading`} className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102043] sm:text-4xl">{title}</h2>
  <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-700" />
  {children}
 </section>;
}
export function ArticleNote({title,children}:{title:string;children:ReactNode}) {
 return <aside className="mt-8 rounded-2xl border border-amber-200 bg-[#fffaf4] p-5 sm:p-7" role="note">
  <p className="text-sm font-bold uppercase tracking-[0.12em] text-amber-700">{title}</p>
  <div className="mt-3 text-base leading-8 text-slate-700">{children}</div>
 </aside>;
}
export function ArticleQuote({children}:{children:ReactNode}){
 return <blockquote className="my-9 rounded-r-2xl border-l-4 border-amber-500 bg-slate-50 px-6 py-6 text-lg italic leading-8 text-[#102043]">“{children}”</blockquote>;
}
export function ArticleTable({headings,rows}:{headings:string[];rows:string[][]}){
 return <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
  <table className="w-full min-w-[600px] border-collapse text-left text-[15px] leading-7">
   <thead className="bg-[#102043] text-white"><tr>{headings.map(h=><th key={h} scope="col" className="px-5 py-4 font-bold">{h}</th>)}</tr></thead>
   <tbody>{rows.map((cells,i)=><tr key={i} className="border-t border-slate-100 even:bg-[#fffaf4]">{cells.map((c,j)=><td key={j} className="px-5 py-4 align-top text-slate-700">{c}</td>)}</tr>)}</tbody>
  </table>
 </div>;
}
export function ArticleBullets({items}:{items:string[]}){
 return <ul className="my-7 grid gap-3 sm:grid-cols-2">{items.map(item=><li key={item} className="rounded-xl border border-amber-100 bg-[#fffaf4] p-4 text-[15px] leading-7 text-slate-700"><span aria-hidden="true" className="mr-2 font-black text-amber-700">✓</span>{item}</li>)}</ul>;
}

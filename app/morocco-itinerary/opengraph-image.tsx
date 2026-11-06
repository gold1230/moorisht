import { ImageResponse } from "next/og";
export const runtime = "nodejs";
export const alt="Morocco Itinerary: 3 to 21 Days | Moorish Tour";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function OpenGraphImage(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#102043",color:"#fff",display:"flex",flexDirection:"column",justifyContent:"center",padding:80,position:"relative",fontFamily:"sans-serif"}}><div style={{fontSize:24,fontWeight:800,letterSpacing:5,color:"#fbbf24"}}>MOORISH TOUR · TRAVEL GUIDE</div><div style={{display:"flex",flexDirection:"column",fontSize:85,fontWeight:900,lineHeight:1.05,marginTop:28}}><span>Your Morocco</span><span>Itinerary</span></div><div style={{fontSize:34,marginTop:34,color:"#fcd34d"}}>3 · 5 · 7 · 10 · 14 · 21 days</div><div style={{position:"absolute",bottom:30,right:60,fontSize:19,color:"#cbd5e1"}}>moorishtour.com</div></div>,size)}

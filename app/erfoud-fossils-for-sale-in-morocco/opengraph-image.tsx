import {ImageResponse} from "next/og";
export const runtime = "nodejs";
export const alt="Erfoud Fossils for Sale in Morocco – Moorish Tour";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function OpenGraphImage(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",background:"#102043",padding:72,color:"white",fontFamily:"sans-serif"}}><div style={{display:"flex",color:"#fbbf24",fontSize:27,fontWeight:700,letterSpacing:3,marginBottom:26}}>MOORISH TOUR · ERFOUD</div><div style={{display:"flex",fontSize:76,fontWeight:800,lineHeight:1.11,maxWidth:1050}}>Fossils of Erfoud</div><div style={{display:"flex",fontSize:35,marginTop:32,color:"#e2e8f0"}}>Trilobites · Ammonites · Workshops · Buying tips</div><div style={{display:"flex",width:160,height:8,marginTop:45,borderRadius:14,background:"#f59e0b"}}/></div>,size)}

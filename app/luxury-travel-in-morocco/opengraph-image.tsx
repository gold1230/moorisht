import {ImageResponse} from "next/og";
export const runtime = "nodejs";
export const alt="Luxury Travel in Morocco – Moorish Tour";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function OpenGraphImage(){return new ImageResponse(
 <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',background:'#102043',padding:76,color:'white',fontFamily:'sans-serif'}}>
 <div style={{display:'flex',color:'#fbbf24',fontSize:27,fontWeight:700,letterSpacing:4,marginBottom:27}}>MOORISH TOUR · LUXURY TRAVEL</div>
 <div style={{display:'flex',fontSize:75,fontWeight:800,lineHeight:1.11,letterSpacing:-2,maxWidth:1020}}>Luxury Travel in Morocco</div>
 <div style={{display:'flex',marginTop:30,fontSize:31,color:'#e2e8f0'}}>Private tours · Elegant riads · Desert camps</div>
 <div style={{display:'flex',marginTop:45,width:180,height:8,borderRadius:15,background:'#f59e0b'}}/>
 </div>,size)}

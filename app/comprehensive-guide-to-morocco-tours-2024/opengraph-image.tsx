import { ImageResponse } from "next/og";
export const runtime = "nodejs";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(
 <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",background:"linear-gradient(115deg, #102043 0%, #22526B 63%, #A06F46 100%)",padding:80,color:"white"}}>
  <div style={{fontSize:22,letterSpacing:4,color:"#F7C874",fontWeight:800}}>MOORISH TOUR · MOROCCO TRAVEL GUIDE</div>
  <div style={{display:"flex",flexDirection:"column",fontSize:74,fontWeight:900,lineHeight:1.1,marginTop:32,maxWidth:1040}}><span>Morocco Tours</span><span>The Complete Guide</span></div>
  <div style={{fontSize:29,marginTop:28,color:"#E5EDF4"}}>Cities · Sahara · Travel Routes · Local Tips</div>
 </div>,size);
}

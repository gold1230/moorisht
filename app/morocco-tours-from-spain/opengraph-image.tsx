import { ImageResponse } from "next/og";
export const runtime = "nodejs";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(
 <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",background:"linear-gradient(120deg, #102043 0%, #205068 68%, #9A6C42 100%)",padding:80,color:"white"}}>
  <div style={{fontSize:22,letterSpacing:5,color:"#F7C874",fontWeight:800}}>MOORISH TOUR · TRAVEL GUIDE</div>
  <div style={{display:"flex",flexDirection:"column",fontSize:76,fontWeight:900,lineHeight:1.08,marginTop:30,maxWidth:980}}><span>Morocco Tours</span><span>from Spain</span></div>
  <div style={{fontSize:29,marginTop:26,color:"#E5EDF4"}}>Ferries · Tangier · The Sahara · Itineraries</div>
 </div>,size);
}

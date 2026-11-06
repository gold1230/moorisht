import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";

/** Multi-section article: all imports resolve inside this route folder. */
export default function MoroccoGeneralInformationArticle(){
 return (
  <article className="space-y-16">
   <Section1 />
   <Section2 />
   <Section3 />
   <Section4 />
   <Section5 />
   <Section6 />
   <Section7 />
  </article>
 );
}

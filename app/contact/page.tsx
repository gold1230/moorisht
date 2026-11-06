import ContactHero from "./heroContact";
import ContactPlanningSection from "./palnningSection";
import ContactMoorishTour from "./cotactMo";
import MoroccoDestinations from "./destination";
import MoroccoTripPlanningProcess from "./whathappen";
import PopularMoroccoTours from "./populartour";
import ContactPlanningFAQ from "./faqscontact";
import SocialLinks from "@/Compentents/SocialLinks";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactPlanningSection />
      <ContactMoorishTour />
      <SocialLinks variant="contact" />
      <MoroccoDestinations />
      <MoroccoTripPlanningProcess />
      <PopularMoroccoTours/>
      <ContactPlanningFAQ />
    </>
  );
}
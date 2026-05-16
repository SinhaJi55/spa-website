import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import SpaGridSection from "../components/SpaGridSection.jsx";
import Testimonial from "../components/Testimonial.jsx"
import Services from "../components/Services.jsx";
import TeamSection from "../components/TeamSection.jsx";
import TherapyProducts from "../components/TherapyProducts.jsx";
import ContactPage from "../components/ContactPage.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Whatsapp from "../components/Whatsapp.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero></Hero>
       <SpaGridSection />
       <Services></Services>
       <TeamSection></TeamSection>
       <Testimonial></Testimonial>
       <TherapyProducts></TherapyProducts>
       <AboutUs></AboutUs>
       <ContactPage></ContactPage>
       <Whatsapp></Whatsapp>
    </>
  );
}
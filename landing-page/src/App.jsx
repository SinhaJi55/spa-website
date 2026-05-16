import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import SpaGridSection from "../components/SpaGridSection.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Services from "../components/Services.jsx";
import TeamSection from "../components/TeamSection.jsx";
import TherapyProducts from "../components/TherapyProducts.jsx";
import ContactPage from "../components/ContactPage.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Whatsapp from "../components/Whatsapp.jsx";
import AnimatedCursor from "../components/AnimatedCursor.jsx";
export default function App() {
  return (
    <>
      {/* FLOATING WHITE DOTS */}
      <div className="particles-container">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          ></span>
        ))}
      </div>

      <Navbar />
      <Hero />
      <SpaGridSection />
      <Services />
      <TeamSection />
      <Testimonial />
      {/* <TherapyProducts /> */}
      <AboutUs />
      <ContactPage />
      <Whatsapp />
      <AnimatedCursor></AnimatedCursor>

      {/* CSS */}
      <style>{`

        .particles-container{
          position:fixed;
          inset:0;
          width:100%;
          height:100%;
          overflow:hidden;
          pointer-events:none;
          z-index:1;
        }

        .particle{
          position:absolute;
          bottom:-20px;
          background:white;
          border-radius:50%;
          opacity:0.7;
          animation:floatUp linear infinite;
          box-shadow:0 0 10px rgba(255,255,255,0.9);
        }

        @keyframes floatUp{

          0%{
            transform:translateY(0) scale(1);
            opacity:0;
          }

          10%{
            opacity:0.7;
          }

          50%{
            opacity:1;
          }

          100%{
            transform:translateY(-120vh) scale(1.8);
            opacity:0;
          }
        }

      `}</style>
    </>
  );
}
// Navbar.jsx

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // SCROLL FUNCTION
  const goto = (id) => {
    const section = document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="bg-black/90 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          {/* LOGO */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              Unique B2B Spa
            </h1>

            <p className="text-gray-400 text-xs tracking-[4px] uppercase mt-1">
              Paharganj
            </p>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-white uppercase tracking-[3px] text-sm">

            <button
              onClick={() => goto("home-section")}
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </button>

            <button
              onClick={() => goto("about-section")}
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </button>

            <button
              onClick={() => goto("service-section")}
              className="hover:text-gray-300 transition duration-300"
            >
              Services
            </button>

            

            <button
              onClick={() => goto("contact-section")}
              className="hover:text-gray-300 transition duration-300"
            >
              Contact
            </button>

          </div>

          {/* BOOK BUTTON */}
          <button
            onClick={() => goto("contact-section")}
            className="hidden md:block bg-white hover:bg-gray-200 transition duration-300 text-black px-7 py-3 rounded-full font-semibold"
          >
            Book Now
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black px-6 pb-8 border-t border-white/10"
          >

            <div className="flex flex-col gap-6 text-white uppercase tracking-[3px] pt-8 text-sm">

              <button
                onClick={() => goto("home-section")}
                className="hover:text-gray-400 transition duration-300 text-left"
              >
                Home
              </button>

              <button
                onClick={() => goto("about-section")}
                className="hover:text-gray-400 transition duration-300 text-left"
              >
                About
              </button>

              <button
                onClick={() => goto("service-section")}
                className="hover:text-gray-400 transition duration-300 text-left"
              >
                Services
              </button>

             

              <button
                onClick={() => goto("contact-section")}
                className="hover:text-gray-400 transition duration-300 text-left"
              >
                Contact
              </button>

            </div>

            <button
              onClick={() => goto("contact-section")}
              className="mt-8 w-full bg-white hover:bg-gray-200 transition duration-300 text-black py-4 rounded-full font-semibold"
            >
              Book Appointment
            </button>

          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
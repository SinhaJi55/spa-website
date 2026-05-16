// Hero.jsx

import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

export default function Hero() {
  const goto = (id) => {
    const section = document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-[slowZoom_18s_linear_infinite]"
        style={{
          backgroundImage: "url('image1.png')",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-[-150px] left-[-120px] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-white/10 blur-[120px] rounded-full"
      ></motion.div>

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-[-200px] right-[-120px] w-[300px] md:w-[550px] h-[300px] md:h-[550px] bg-gray-400/10 blur-[120px] rounded-full"
      ></motion.div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl px-5 sm:px-8 lg:px-12 text-center">

        {/* TOP TAG */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6 md:mb-8"
        >
          <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5" />

          <p className="uppercase tracking-[4px] md:tracking-[8px] text-gray-300 text-[11px] sm:text-xs md:text-sm">
            Luxury Wellness Experience
          </p>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-black text-white leading-[1.05]"
        >
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-[110px]">
            Unique B2B Spa
          </span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="block text-gray-300 font-light mt-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl"
          >
            Paharganj, New Delhi
          </motion.span>
        </motion.h1>

        {/* SUB HEADING */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 md:mt-10 text-xl sm:text-2xl md:text-4xl font-semibold text-white leading-relaxed"
        >
          Escape Stress.
          <span className="text-gray-400">
            {" "}Embrace Pure Relaxation.
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-300 mt-6 md:mt-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-9 px-2"
        >
          Indulge in premium spa therapies crafted to relax your body,
          refresh your mind, and restore inner peace. Experience luxury
          wellness, professional care, and complete comfort at
          Unique B2B Spa in the heart of Paharganj.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-10 md:mt-14"
        >
          <button
            onClick={() => goto("contact-section")}
            className="group relative overflow-hidden bg-white text-black px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-[2px] shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10">
              Make Appointment
            </span>

            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>

          <button
            onClick={() => goto("service-section")}
            className="border border-white/40 hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 px-8 md:px-10 py-3.5 md:py-4 rounded-full text-white font-semibold uppercase tracking-[2px] text-xs md:text-sm backdrop-blur-md"
          >
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-white/70 w-8 h-8" />
      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

      {/* CUSTOM ANIMATION */}
      <style>
        {`
          @keyframes slowZoom {
            0% {
              transform: scale(1.05);
            }
            50% {
              transform: scale(1.15);
            }
            100% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </section>
  );
}
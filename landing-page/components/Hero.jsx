// Hero.jsx

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('image1.png')",
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GRADIENT GLOW */}
      <div className="absolute w-[750px] h-[750px] bg-white/5 blur-[180px] rounded-full top-[-200px]"></div>

      {/* SIDE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-6xl">

        {/* TOP TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Sparkles className="text-white w-5 h-5" />

          <p className="uppercase tracking-[8px] text-gray-300 text-sm md:text-base">
            Luxury Wellness Experience
          </p>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1]"
        >
          Unique B2B Spa

          <span className="block text-gray-300 text-3xl md:text-5xl font-light mt-5">
            Paharganj, New Delhi
          </span>
        </motion.h1>

        {/* SUB HEADING */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-2xl md:text-4xl font-semibold text-white leading-relaxed"
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
          transition={{ delay: 0.8 }}
          className="text-gray-300 mt-8 max-w-3xl mx-auto text-base md:text-xl leading-9"
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
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >

          <button
            onClick={() => goto("contact-section")}
            className="bg-white hover:bg-gray-200 transition duration-300 text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-[2px] shadow-2xl"
          >
            Make Appointment
          </button>

          <button
            onClick={() => goto("service-section")}
            className="border border-white/40 hover:bg-white hover:text-black transition duration-300 px-10 py-4 rounded-full text-white font-semibold uppercase tracking-[2px]"
          >
            Explore Services
          </button>

        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
}
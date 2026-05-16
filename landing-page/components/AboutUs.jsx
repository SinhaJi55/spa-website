import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about-section"
      className="w-full min-h-screen bg-black text-white py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="overflow-hidden rounded-[35px]">
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
              alt="Spa"
              className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-gray-400 text-sm mb-5">
            About Unique B2B Spa
          </p>

          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            Luxury Wellness & Relaxation In Paharganj
          </h1>

          <div className="w-28 h-[2px] bg-white mt-8"></div>

          <p className="text-gray-300 text-lg leading-9 mt-10">
            Welcome to Unique B2B Spa — your destination for premium wellness,
            deep relaxation, and luxury therapy experiences in Paharganj.
            Our expert therapists provide personalized spa treatments designed
            to refresh your body, calm your mind, and restore your energy.
          </p>

          <p className="text-gray-400 text-lg leading-9 mt-8">
            We combine peaceful ambiance, professional care, and luxury
            wellness therapies to create an unforgettable spa experience for
            every guest.
          </p>



         

        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
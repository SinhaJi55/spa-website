// Services.jsx

import { motion } from "framer-motion";

const services = [
  {
    title: "Aroma Therapy",
    desc: "Relax your mind and body with luxury aroma oil treatments.",
    image:
      "/image.png",
  },

  {
    title: "Hot Stone Massage",
    desc: "Experience deep relaxation with warm stone therapy sessions.",
    image:
      "/hotstone.jpg",
  },

  {
    title: "Luxury Wellness",
    desc: "Premium wellness rituals designed for comfort and serenity.",
    image:
      "/luxury.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0b0b0b] py-28 overflow-hidden" id="service-section">
      <div className="max-w-10xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-[#d4b29b] text-sm mb-5">
            Luxury Spa Services
          </p>

          <h2 className="text-5xl md:text-7xl text-white font-serif">
            Premium Wellness Experience
          </h2>

          <div className="w-40 h-[2px] bg-[#d4b29b] mx-auto mt-8"></div>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            Discover our exclusive massage therapies, wellness rituals, and
            luxury relaxation experiences crafted for complete rejuvenation.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-[35px] h-[650px]"
            >

              {/* IMAGE */}
              <img
                src={service.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* GLOW */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#d4b29b]/20 blur-[100px] rounded-full"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-10 z-10">

                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl text-white font-light"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 mt-6 leading-8"
                >
                  {service.desc}
                </motion.p>


              </div>

              {/* HOVER BORDER */}
              <div className="absolute inset-0 border border-white/10 rounded-[35px]"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
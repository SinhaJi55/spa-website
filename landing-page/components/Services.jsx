// ServiceOptions.jsx

import { motion } from "framer-motion";
import {
  User,
  HeartHandshake,
  Flame,
  Dumbbell,
  Waves,
} from "lucide-react";

const services = [
  {
    icon: <User size={55} />,
    title: "Full Body Massage",
    desc: "Complete head-to-toe relaxation by certified therapists in private suites.",
    time: "60 • 90 • 120 MIN",
  },

  {
    icon: <HeartHandshake size={55} />,
    title: "Couple Massage",
    desc: "Synchronised dual-therapist sessions in our premium couple's suite.",
    time: "90 • 120 MIN",
  },

  {
    icon: <Flame size={55} />,
    title: "Aroma Therapy",
    desc: "Premium essential oils, candles & flowing strokes for total sensory escape.",
    time: "90 • 120 MIN",
  },

  {
    icon: <Dumbbell size={55} />,
    title: "Deep Tissue Massage",
    desc: "Targeted pressure release for chronic tension and muscle recovery.",
    time: "60 • 90 MIN",
  },

  {
    icon: <Waves size={55} />,
    title: "Steam Therapy",
    desc: "Detoxifying steam room sessions to cleanse, relax and rejuvenate.",
    time: "30 • 45 MIN",
  },
];

export default function ServiceOptions() {
  return (
    <section className="bg-black py-20 px-4 md:px-10 overflow-hidden" id="service-section">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[#2a2a2a]">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative bg-[#111] border-r border-b lg:border-b-0 border-[#2a2a2a] px-7 py-14 text-center group overflow-hidden"
          >

            {/* GOLD GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* ICON */}
            <div className="relative z-10 flex justify-center mb-8 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="relative z-10 text-white text-2xl md:text-[30px] tracking-wide font-serif uppercase">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="relative z-10 text-gray-400 mt-6 leading-8 text-sm md:text-base">
              {service.desc}
            </p>

            {/* TIME BUTTON */}
            <button className="relative z-10 mt-10 border border-yellow-500/30 px-6 py-3 text-yellow-400 tracking-[3px] text-xs md:text-sm hover:bg-yellow-500 hover:text-black transition duration-500">
              {service.time}
            </button>

            {/* HOVER BORDER */}
            <div className="absolute inset-0 border border-transparent group-hover:border-yellow-500/20 transition duration-500"></div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
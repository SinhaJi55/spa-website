// SpaGridSection.jsx

import { motion } from "framer-motion";

export default function SpaGridSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP HEADING */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#777] text-sm mb-4">
            Unique B2B Spa - Paharganj
          </p>

          <h2 className="text-5xl md:text-6xl font-serif text-black">
            Premium Luxury Wellness
          </h2>

          <div className="w-32 h-[2px] bg-black mx-auto mt-6"></div>

          <p className="max-w-2xl mx-auto mt-8 text-gray-600 text-lg leading-relaxed">
            Experience deep relaxation, premium therapies, and luxury wellness
            treatments crafted to refresh your body and calm your mind.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3">

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="h-[420px] overflow-hidden"
          >
            <img
              src="/sleep.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>

          {/* TEXT CARD */}
          <div className="bg-black h-[420px] flex flex-col justify-center items-center text-center px-10">
            <h3 className="text-5xl font-light tracking-wide text-white">
              SPA THERAPY
            </h3>

            <p className="mt-8 text-gray-300 leading-8">
              Enjoy premium aroma therapy, relaxing body massage, and peaceful
              wellness sessions in a luxurious atmosphere.
            </p>

           
          </div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="h-[420px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>

          {/* TEXT CARD */}
          <div className="bg-white border border-gray-200 h-[420px] flex flex-col justify-center items-center text-center px-10">
            <h3 className="text-5xl font-light tracking-wide text-black">
              CONTACT US
            </h3>

            <p className="mt-8 text-gray-600 leading-8">
              Connect with Unique B2B Spa in Paharganj for luxury wellness,
              premium massage bookings, and relaxing spa experiences.
            </p>

           
          </div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="h-[420px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>

          {/* TEXT CARD */}
          <div className="bg-black h-[420px] flex flex-col justify-center items-center text-center px-10">
            <h3 className="text-5xl font-light tracking-wide text-white">
              EXPERT STAFF
            </h3>

            <p className="mt-8 text-gray-300 leading-8">
              Our professional wellness experts deliver premium spa treatments
              with elegance, comfort, and personalized care.
            </p>

            
          </div>

        </div>
      </div>
    </section>
  );
}
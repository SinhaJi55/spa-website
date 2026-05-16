// PremiumModal.jsx

import { motion } from "framer-motion";

export default function PremiumModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-[#111] border border-[#d4b29b]/30 rounded-[40px] overflow-hidden max-w-5xl w-full grid md:grid-cols-2"
      >
        {/* IMAGE SIDE */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* CONTENT */}
        <div className="p-12 relative">

          <button
            onClick={close}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ×
          </button>

          <p className="uppercase tracking-[5px] text-[#d4b29b] text-sm">
            VIP Wellness
          </p>

          <h2 className="text-5xl text-white mt-5 leading-tight">
            Luxury Relaxation Experience
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Enjoy premium wellness therapies, candle ambiance, aroma sessions,
            and ultimate comfort inside our elegant spa suites.
          </p>

          {/* INPUTS */}
          <div className="mt-10 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/30 border border-white/10 rounded-full px-6 py-4 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-black/30 border border-white/10 rounded-full px-6 py-4 text-white outline-none"
            />

            <select className="w-full bg-black/30 border border-white/10 rounded-full px-6 py-4 text-white outline-none">
              <option>Choose Service</option>
              <option>Aroma Therapy</option>
              <option>VIP Massage</option>
              <option>Luxury Relaxation</option>
            </select>

            <button className="w-full bg-[#d4b29b] hover:bg-[#e2c2ad] transition duration-300 text-black py-4 rounded-full uppercase tracking-[3px] font-semibold">
              Confirm Booking
            </button>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
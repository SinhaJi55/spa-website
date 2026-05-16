// BookingModal.jsx

import { motion } from "framer-motion";

export default function BookingModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[100] flex items-center justify-center px-4">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#111] border border-[#d6a77a]/30 p-10 rounded-[40px] max-w-lg w-full relative"
      >
        <button
          onClick={close}
          className="absolute top-5 right-5 text-white text-2xl"
        >
          ×
        </button>

        <h2 className="text-4xl font-bold text-white mb-3">
          Book Appointment
        </h2>

        <p className="text-gray-400 mb-8">
          Experience ultimate relaxation & luxury wellness.
        </p>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-white outline-none"
          />

          <select className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-white outline-none">
            <option>Choose Service</option>
            <option>Aroma Therapy</option>
            <option>Hot Stone Massage</option>
            <option>VIP Relaxation</option>
          </select>

          <button className="w-full bg-[#d6a77a] hover:bg-[#e8bc92] transition duration-300 text-black py-4 rounded-full font-bold">
            Confirm Booking
          </button>
        </div>
      </motion.div>
    </div>
  );
}
// OfferModal.jsx

import { motion } from "framer-motion";

export default function OfferModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-lg z-[90] flex items-center justify-center px-4">

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d6a77a]/30 p-10 rounded-[40px] max-w-md text-center overflow-hidden"
      >
        <button
          onClick={close}
          className="absolute top-5 right-5 text-white text-2xl"
        >
          ×
        </button>

        <div className="absolute w-60 h-60 bg-[#d6a77a]/20 blur-[100px] rounded-full"></div>

        <div className="relative z-10">
          <p className="uppercase tracking-[5px] text-[#d6a77a] mb-3">
            Tonight Exclusive
          </p>

          <h2 className="text-5xl font-bold text-white leading-tight">
            40% OFF
          </h2>

          <p className="text-gray-300 mt-5">
            Premium wellness therapy for limited customers tonight.
          </p>

          <button className="mt-8 bg-[#d6a77a] hover:bg-[#e8bc92] transition duration-300 text-black px-8 py-4 rounded-full font-bold">
            Claim Offer
          </button>
        </div>
      </motion.div>
    </div>
  );
}
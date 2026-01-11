import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Transcript() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100
                        flex items-center justify-center px-4 sm:px-6 py-12 sm:py-24">
      
      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full bg-white rounded-2xl shadow-xl
                   border border-sky-100 p-6 sm:p-10 text-center
                   mx-4" // เพิ่ม margin ข้างๆ บน mobile
      >
        {/* Icon with better animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 mx-auto mb-6 rounded-full
                    bg-gradient-to-br from-sky-100 to-sky-200
                    flex items-center justify-center
                    text-4xl text-sky-600 shadow-inner"
        >
          📄
        </motion.div>

        <h2 className="text-2xl sm:text-3xl font-bold text-sky-800 mb-3">
          Academic Transcript
        </h2>

        <p className="text-sky-600 mb-8 text-sm sm:text-base">
          Official academic record of my university studies
        </p>

        {/* preview with better hover */}
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(14, 165, 233, 0.15)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen(true)}
          className="cursor-zoom-in mb-10 rounded-xl overflow-hidden
                   border-2 border-sky-100 shadow-lg
                   hover:border-sky-300 transition-all duration-300"
        >
          <img
            src="/github.jpg"
            alt="Transcript Preview"
            className="w-full h-48 sm:h-56 object-cover"
            loading="lazy"
          />
          <div className="bg-sky-50 py-2">
            <p className="text-sm text-sky-600 font-medium">
              Click to view full transcript
            </p>
          </div>
        </motion.div>

        {/* buttons with better spacing */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/student.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 rounded-full font-semibold
                     bg-gradient-to-r from-sky-500 to-sky-600 text-white 
                     shadow-lg hover:shadow-xl hover:from-sky-600 hover:to-sky-700
                     transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="text-lg">👁️</span>
            View PDF
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/student.pdf"
            download
            className="px-6 sm:px-8 py-3 rounded-full font-semibold
                     border-2 border-sky-400 text-sky-700
                     hover:bg-sky-50 hover:border-sky-500
                     transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="text-lg">⬇️</span>
            Download
          </motion.a>
        </div>

        {/* Additional info */}
        <div className="mt-10 pt-6 border-t border-sky-100">
          <div className="grid grid-cols-2 gap-4 text-sm text-sky-600">
            <div>
              <p className="font-semibold">University</p>
              <p className="text-sky-500">Chula / Mahidol / etc.</p>
            </div>
            <div>
              <p className="font-semibold">GPA</p>
              <p className="text-sky-500">3.50 / 4.00</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* modal - improved */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/80 backdrop-blur-sm cursor-zoom-out p-4"
            onClick={() => setOpen(false)}
          >
            {/* close button - improved */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full
                       bg-white/10 backdrop-blur-md text-white
                       hover:bg-white/20 border border-white/20
                       flex items-center justify-center
                       text-xl sm:text-2xl font-light
                       transition-all duration-200 z-10"
              aria-label="Close"
            >
              ×
            </motion.button>

            {/* image with max constraints */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/github.jpg"
                alt="Full Transcript"
                className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl
                         object-contain bg-white"
              />
              
              {/* Download button inside modal */}
              <div className="mt-4 flex justify-center">
                <a
                  href="/student.pdf"
                  download
                  className="px-6 py-2 rounded-full font-medium
                           bg-white text-sky-700 border border-sky-200
                           hover:bg-sky-50 hover:shadow-md
                           transition-all duration-300 text-sm"
                >
                  ⬇️ Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
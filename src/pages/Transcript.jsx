import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Transcript() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#0b0d12] text-slate-200 overflow-hidden">

      {/* subtle background texture */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
          [background-size:24px_24px]
        "
      />

      <div
        className="
          relative z-10
          max-w-4xl mx-auto
          px-4 sm:px-6 lg:px-8
          pt-28 pb-32
          flex items-start justify-center
        "
      >
        {/* ===== MAIN CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            w-full
            rounded-2xl
            border border-slate-700
            bg-white/5
            p-6 sm:p-10
            text-center
          "
        >
          {/* ICON */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="
              w-16 h-16 sm:w-20 sm:h-20
              mx-auto mb-6
              rounded-full
              bg-cyan-400/10
              flex items-center justify-center
              text-3xl sm:text-4xl
            "
          >
            📄
          </motion.div>

          {/* TITLE */}
          <p className="text-xs tracking-[0.35em] text-slate-500 mb-3">
            TRANSCRIPT
          </p>

          <h2 className="
            text-3xl sm:text-4xl
            font-semibold
            mb-4
          ">
            Academic Transcript
          </h2>

          <p className="text-slate-400 mb-10 text-sm sm:text-base">
            Official academic record of my university studies
          </p>

          {/* PREVIEW */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setOpen(true)}
            className="
              cursor-zoom-in
              mb-10
              rounded-xl overflow-hidden
              border border-slate-700
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
              transition
            "
          >
            <img
              src="/Transcript.jpg"
              alt="Transcript Preview"
              className="w-full h-48 sm:h-64 object-cover"
              loading="lazy"
            />
            <div className="bg-[#0b0d12] py-2">
              <p className="text-xs text-slate-400">
                Click to view full transcript
              </p>
            </div>
          </motion.div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/Transcript.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3
                rounded-full
                font-medium
                bg-cyan-500 text-black
                hover:bg-cyan-400
                transition
              "
            >
              View PDF
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/Transcript.pdf"
              download
              className="
                px-8 py-3
                rounded-full
                border border-slate-700
                text-slate-300
                hover:border-slate-500
                transition
              "
            >
              Download
            </motion.a>
          </div>

          {/* INFO */}
          <div className="mt-12 pt-6 border-t border-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-xs tracking-wide text-slate-500 mb-1">
                  UNIVERSITY
                </p>
                <p className="text-slate-300">
                  King Mongkut’s University of Technology North Bangkok
                </p>
              </div>
              <div>
                <p className="text-xs tracking-wide text-slate-500 mb-1">
                  GPA
                </p>
                <p className="text-cyan-400 font-medium">
                  2.83
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-black/80 backdrop-blur-sm
              flex items-start justify-center
              pt-24 px-4 pb-8
            "
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="
                relative w-full max-w-5xl
                max-h-[calc(100vh-8rem)]
                overflow-y-auto
                rounded-2xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="
                  sticky top-4 ml-auto
                  w-10 h-10
                  rounded-full
                  bg-[#0b0d12]
                  border border-slate-700
                  text-slate-300
                  hover:text-cyan-400
                  transition
                "
              >
                ✕
              </button>

              <img
                src="/Transcript.jpg"
                alt="Full Transcript"
                className="
                  w-full h-auto
                  rounded-2xl
                  shadow-2xl
                  bg-white
                "
              />

              <div className="mt-6 flex justify-center">
                <a
                  href="/Transcript.pdf"
                  download
                  className="
                    px-6 py-2
                    rounded-full
                    font-medium
                    bg-cyan-500 text-black
                    hover:bg-cyan-400
                    transition text-sm
                  "
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

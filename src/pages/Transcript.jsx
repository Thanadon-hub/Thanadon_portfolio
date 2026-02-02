import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Transcript() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="
        relative min-h-screen
        bg-gradient-to-br from-sky-50 via-white to-purple-50
        px-4 sm:px-6
        pt-28 md:pt-24
        pb-32 md:pb-24
        overflow-hidden
        flex items-start md:items-center justify-center
      "
    >
      {/* background blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -top-32 -left-32
          w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem]
          bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-400
          opacity-30 rounded-full blur-3xl
        "
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -bottom-32 -right-32
          w-[24rem] h-[24rem] sm:w-[28rem] sm:h-[28rem]
          bg-gradient-to-tr from-sky-300 via-cyan-300 to-purple-300
          opacity-30 rounded-full blur-3xl
        "
      />

      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative z-10
          max-w-xl w-full
          backdrop-blur-xl bg-white/60
          rounded-3xl
          shadow-xl
          border border-white/40
          p-6 sm:p-10
          text-center
        "
      >
        {/* icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="
            w-16 h-16 sm:w-20 sm:h-20
            mx-auto mb-6
            rounded-full
            bg-gradient-to-tr from-pink-300 to-sky-300
            flex items-center justify-center
            text-3xl sm:text-4xl text-white
            shadow-lg
          "
        >
          📄
        </motion.div>

        <h2
          className="
            text-2xl sm:text-3xl
            font-extrabold mb-3
            bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500
            bg-clip-text text-transparent
          "
        >
          Academic Transcript
        </h2>

        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Official academic record of my university studies
        </p>

        {/* preview */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(true)}
          className="
            cursor-zoom-in
            mb-8 sm:mb-10
            rounded-2xl overflow-hidden
            backdrop-blur-md bg-white/70
            border border-white/40
            shadow-lg hover:shadow-xl
            transition-all duration-300
          "
        >
          <img
            src="/Transcript.jpg"
            alt="Transcript Preview"
            className="w-full h-44 sm:h-56 object-cover"
            loading="lazy"
          />
          <div className="bg-white/70 py-2">
            <p className="text-sm text-sky-600 font-medium">
              Tap to view full transcript
            </p>
          </div>
        </motion.div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Transcript.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto
              px-6 sm:px-8 py-3
              rounded-full font-semibold
              bg-gradient-to-r from-pink-500 to-sky-500
              text-white
              shadow-lg shadow-pink-500/30
              hover:shadow-xl
              transition-all
              flex items-center justify-center gap-2
            "
          >
            👁️ View PDF
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Transcript.pdf"
            download
            className="
              w-full sm:w-auto
              px-6 sm:px-8 py-3
              rounded-full font-semibold
              border border-purple-300
              text-purple-600
              hover:bg-purple-50
              transition-all
              flex items-center justify-center gap-2
            "
          >
            ⬇️ Download
          </motion.a>
        </div>

        {/* info */}
        <div className="mt-10 pt-6 border-t border-white/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-sky-700">University</p>
              <p>King Mongkut’s University of Technology North Bangkok</p>
            </div>
            <div>
              <p className="font-semibold text-sky-700">GPA</p>
              <p>2.83</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* modal */}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="
                relative
                w-full max-w-4xl
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
                  rounded-full bg-white
                  text-sky-600
                  shadow-lg
                  hover:scale-110 transition
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
                  object-contain
                  bg-white
                "
              />

              <div className="mt-4 flex justify-center">
                <a
                  href="/Transcript.pdf"
                  download
                  className="
                    px-6 py-2 rounded-full font-medium
                    bg-white text-sky-700
                    border border-sky-200
                    hover:bg-sky-50 hover:shadow-md
                    transition-all duration-300 text-sm
                  "
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

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen py-24 px-6
      bg-gradient-to-br from-sky-50 via-white to-purple-50 overflow-hidden">

      {/* background blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem]
        bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-400
        opacity-30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem]
        bg-gradient-to-tr from-sky-300 via-cyan-300 to-purple-300
        opacity-30 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16
            text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500
            bg-clip-text text-transparent"
        >
          Resume
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT: content */}
          <div className="md:col-span-2 space-y-10">

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-xl bg-white/60
              rounded-3xl shadow-xl p-8 border border-white/40"
            >
              <h3 className="text-xl font-semibold text-sky-600 mb-4">
                🎓 Education
              </h3>
              <p className="text-gray-700">
                Bachelor's Degree in Computer / Engineering / IT
              </p>
              <p className="text-sm text-gray-500 mt-1">
                University Name · 2021 – 2025
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="backdrop-blur-xl bg-white/60
              rounded-3xl shadow-xl p-8 border border-white/40"
            >
              <h3 className="text-xl font-semibold text-sky-600 mb-6">
                💻 Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "HTML / CSS",
                  "Git & GitHub",
                  "Basic Backend",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2 rounded-full
                      bg-white/70 backdrop-blur
                      text-sky-700 text-sm font-medium
                      border border-white/40
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="backdrop-blur-xl bg-white/60
              rounded-3xl shadow-xl p-8 border border-white/40"
            >
              <h3 className="text-xl font-semibold text-sky-600 mb-4">
                🛠 Experience
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li>• Built responsive web apps with React & Tailwind</li>
                <li>• Developed IoT projects with ESP8266 / ESP32</li>
                <li>• Integrated frontend with Firebase & APIs</li>
              </ul>
            </motion.div>
          </div>

          {/* RIGHT: preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="sticky top-28 space-y-6">

              {/* image */}
              <div
                onClick={() => setOpen(true)}
                className="cursor-zoom-in
                backdrop-blur-xl bg-white/60
                rounded-3xl shadow-xl p-4
                border border-white/40
                hover:shadow-2xl transition"
              >
                <img
                  src="/github.jpg"
                  alt="Resume"
                  className="rounded-2xl w-full
                  hover:scale-105 transition-transform duration-300"
                />
                <p className="text-center text-sm text-sky-500 mt-3">
                  👆 Click to preview
                </p>
              </div>

              {/* download */}
              <motion.a
                href="/student.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  flex items-center justify-center gap-3
                  w-full py-4 rounded-xl font-semibold
                  bg-gradient-to-r from-pink-500 to-sky-500
                  text-white shadow-lg shadow-pink-500/30
                  hover:shadow-xl transition-all
                "
              >
                ⬇️ Download Resume (PDF)
              </motion.a>

              {/* info */}
              <div className="backdrop-blur-xl bg-white/60
                rounded-3xl shadow-xl p-6 border border-white/40">
                <h4 className="font-semibold text-sky-700 mb-3">
                  📄 Resume Info
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Updated: December 2024</li>
                  <li>• Format: PDF (2 pages)</li>
                  <li>• Size: 1.2 MB</li>
                </ul>
              </div>

            </div>
          </motion.div>
        </div>

        {/* modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm
              flex items-center justify-center p-4"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4
                  w-10 h-10 rounded-full bg-white
                  text-sky-600 shadow-lg
                  hover:scale-110 transition"
                >
                  ✕
                </button>

                <img
                  src="/github.jpg"
                  alt="Resume Full"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

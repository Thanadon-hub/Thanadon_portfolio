import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Resume() {
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
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-8
          pt-28 pb-32
        "
      >
        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          
          <h2 className="
            text-4xl sm:text-5xl lg:text-6xl
            font-semibold tracking-tight
          ">
            RESUME
          </h2>

          <div className="h-px w-20 bg-cyan-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">

          {/* ===== LEFT : CONTENT ===== */}
          <div className="md:col-span-2 space-y-10">

            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                rounded-2xl
                border border-slate-700
                bg-white/5
                p-6 sm:p-8
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
                Education
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Chumphon Technical College – Computer Technology (2019–2021)
                <br />
                Chumphon Technical College – Computer Hardware (2021–2023)
                <br />
                King Mongkut's University of Technology North Bangkok
                <br />
                Bachelor’s Degree in Electronic Computer Technology
                (2024–Present)
              </p>
            </motion.div>

            {/* SKILLS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                rounded-2xl
                border border-slate-700
                bg-white/5
                p-6 sm:p-8
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-6">
                Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "C / C++",
                  "JavaScript",
                  "HTML / CSS",
                  "Tailwind CSS",
                  "LAN / Wi-Fi Setup",
                  "Basic Network Configuration",
                  "Layer 2 / Layer 3 Switch",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-xs sm:text-sm
                      px-4 py-2
                      rounded-full
                      border border-slate-700
                      text-slate-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                rounded-2xl
                border border-slate-700
                bg-white/5
                p-6 sm:p-8
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
                Experience
              </h3>

              <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
                <li>• Smart Farm Dashboard (Flutter & Firebase)</li>
                <li>• IoT projects using ESP8266 / ESP32</li>
                <li>• Frontend integration with Firebase & REST APIs</li>
              </ul>
            </motion.div>
          </div>

          {/* ===== RIGHT : PREVIEW ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <div className="sticky top-28 space-y-6">

              {/* PREVIEW */}
              <div
                onClick={() => setOpen(true)}
                className="
                  cursor-zoom-in
                  rounded-2xl
                  border border-slate-700
                  bg-white/5
                  p-4
                  transition
                  hover:border-slate-500
                "
              >
                <img
                  src="/_Resume_thanadon.jpg"
                  alt="Resume Preview"
                  className="rounded-xl w-full"
                />
                <p className="text-center text-xs text-slate-500 mt-3">
                  Click to preview
                </p>
              </div>

              {/* DOWNLOAD */}
              <motion.a
                href="/_Resume_thanadon.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex items-center justify-center
                  w-full py-4
                  rounded-xl
                  font-medium
                  bg-cyan-500 text-black
                  hover:bg-cyan-400
                  transition
                "
              >
                Download Resume (PDF)
              </motion.a>

              {/* INFO */}
              <div
                className="
                  rounded-2xl
                  border border-slate-700
                  bg-white/5
                  p-6
                "
              >
                <h4 className="font-medium text-slate-200 mb-3">
                  Resume Info
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Updated: January 2026</li>
                  <li>• Format: PDF (1 page)</li>
                  <li>• Size: 1.2 MB</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== MODAL PREVIEW ===== */}
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
                src="/_Resume_thanadon.jpg"
                alt="Resume Full"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

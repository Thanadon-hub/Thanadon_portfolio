import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-16 lg:gap-24
            items-center
          "
        >
          {/* ===== LEFT : TEXT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="text-xs tracking-[0.35em] text-slate-500">
              ABOUT
            </p>

            <h2 className="
              text-4xl sm:text-5xl lg:text-6xl
              font-semibold tracking-tight
            ">
              About Me
            </h2>

            {/* accent line */}
            <div className="h-px w-16 bg-cyan-400 mx-auto md:mx-0" />

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              I am a technology enthusiast with a strong interest in
              <span className="text-slate-200"> network systems</span>,
              <span className="text-slate-200"> IT support</span>, and
              <span className="text-slate-200"> web development</span>.
              I focus on building reliable, structured, and practical solutions.
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              My experience includes real-world projects and continuous learning,
              helping me adapt quickly and work effectively in technical environments.
            </p>

            {/* HIGHLIGHTS */}
            <div
              className="
                grid grid-cols-1 sm:grid-cols-2
                gap-4 pt-6
                text-left
              "
            >
              {[
                { label: "Focus", value: "Network & IT Support" },
                { label: "Skills", value: "React · HTML · Tailwind · Basic C++" },
                { label: "Experience", value: "Web & System Support" },
                { label: "Mindset", value: "Continuous Learning" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    rounded-xl
                    border border-slate-700
                    bg-white/5
                    px-5 py-4
                    transition
                    hover:border-slate-500
                  "
                >
                  <p className="text-xs tracking-wide text-slate-500">
                    {item.label}
                  </p>
                  <p className="text-slate-200 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===== RIGHT : IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">

              {/* soft glow */}
              <div
                className="
                  absolute -inset-6 rounded-2xl
                  bg-cyan-500/15 blur-3xl
                "
              />

              <div
                className="
                  relative
                  w-56 h-72
                  sm:w-64 sm:h-80
                  md:w-72 md:h-96
                  rounded-2xl overflow-hidden
                  border border-slate-700
                  shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                  transition-transform duration-700
                  hover:-translate-y-2
                "
              >
                <img
                  src="/TYu.jpg"
                  alt="Profile"
                  className="
                    w-full h-full object-cover
                    brightness-95 contrast-105
                  "
                />
              </div>

              <p className="mt-4 text-xs tracking-wide text-slate-500 text-center">
                Network & IT Support
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen bg-[#0b0d12] text-slate-200 flex items-center overflow-hidden">
      {/* ===== AMBIENT BACKGROUND MOTION ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute -top-1/2 -left-1/2 w-[120%] h-[120%]
            bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]
            animate-[spin_60s_linear_infinite]
          "
        />
      </div>

      {/* ===== SUBTLE DOT TEXTURE ===== */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
          [background-size:24px_24px]
        "
      />

      <div
        className="relative max-w-6xl mx-auto w-full
        px-4 sm:px-6 lg:px-8
        py-20 sm:py-24 lg:py-32"
      >
        {/* ===== MAIN GRID ===== */}
        <div
          className="grid grid-cols-1 md:grid-cols-2
          gap-16 lg:gap-24 items-center"
        >
          {/* ===== IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* glow depth */}
              <div
                className="absolute -inset-6 rounded-2xl
                bg-cyan-500/15 blur-3xl"
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
                  src="/IMG_4512.jpg"
                  alt="Thanadon profile"
                  className="
    w-full h-full object-cover
    transition-transform duration-700
  "
                />
              </div>
            </div>
          </motion.div>

          {/* ===== TEXT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 text-center md:text-left space-y-6"
          >
            <p className="text-xs tracking-[0.35em] text-slate-500">
              PORTFOLIO
            </p>

            <h1
              className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-semibold tracking-tight
            "
            >
              HI, I'am Thanadon
            </h1>

            {/* animated underline */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-px w-16 bg-cyan-400 mx-auto md:mx-0"
            />

            <h2
              className="
              text-lg sm:text-xl lg:text-2xl
              text-cyan-400 tracking-wide
            "
            >
              Network & IT Support
            </h2>

            <p
              className="
              max-w-xl mx-auto md:mx-0
              text-slate-400
              text-base sm:text-lg
              leading-relaxed pt-2
            "
            >
              Technology enthusiast focused on{" "}
              <span className="text-slate-200">network systems</span>,{" "}
              <span className="text-slate-200">IT support</span>, and{" "}
              <span className="text-slate-200">modern web development</span>.
              Passionate about building reliable and structured solutions.
            </p>

            {/* ACTIONS */}
            <div
              className="
              flex flex-col sm:flex-row
              gap-4 sm:gap-6
              justify-center md:justify-start
              pt-8 sm:pt-10
            "
            >
              <a
                href="/about"
                className="
                  px-8 py-3 rounded-full
                  bg-cyan-500 text-black font-medium
                  hover:bg-cyan-400
                  hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]
                  transition
                "
              >
                About Me
              </a>

              <a
                href="/contact"
                className="
                  px-8 py-3 rounded-full
                  border border-slate-600
                  text-slate-300
                  hover:border-slate-400
                  hover:bg-white/5
                  transition
                "
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== SCROLL CUE ===== */}
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2
          text-cyan-400 text-lg"
      >
        ↓
      </motion.div>
    </section>
  );
}

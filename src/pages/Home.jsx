import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-purple-50">
      
      {/* colorful floating blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[30rem] h-[30rem]
        bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-400
        opacity-40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem]
        bg-gradient-to-tr from-sky-300 via-cyan-300 to-purple-300
        opacity-40 rounded-full blur-3xl"
      />

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT */}
        <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-10 shadow-xl border border-white/40">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6
              bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500
              bg-[length:200%_200%] animate-gradient
              bg-clip-text text-transparent drop-shadow-sm"
          >
            Hi, I'm Thanadon
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed"
          >
            Frontend Developer passionate about crafting
            <span className="text-sky-600 font-semibold">
              {" "}beautiful & interactive
            </span>{" "}
            web experiences with React.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 flex-wrap"
          >
            <a
              href="/about"
              className="px-10 py-4 rounded-full font-semibold
              bg-gradient-to-r from-pink-500 to-sky-500 text-white
              shadow-lg shadow-pink-500/30
              hover:scale-105 hover:shadow-xl
              transition-all duration-300
              inline-flex items-center gap-2"
            >
              About Me →
            </a>

            <a
              href="/contact"
              className="px-10 py-4 rounded-full font-semibold
              border border-purple-300 text-purple-600
              hover:bg-purple-100
              hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 
              bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-400
              opacity-40 rounded-full blur-2xl animate-pulse" />
            <img
              src="/pro.jpg"
              alt="profile"
              className="relative w-72 h-72 md:w-80 md:h-80
              rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </motion.div>
      </div>

      {/* footer text */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2
        text-sky-500 text-xs tracking-[0.35em]"
      >
        THANADON.COM 🌈
      </motion.div>
    </section>
  );
}

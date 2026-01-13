import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* floating gradient blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-sky-300/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-sky-200/40 rounded-full blur-3xl"
      />

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6
              bg-gradient-to-r from-sky-600 to-sky-400
              bg-clip-text text-transparent"
          >
            Hi, I'm Thanadon Chaiwisit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sky-700/80 text-lg md:text-xl mb-10 leading-relaxed"
          >
            Frontend Developer who loves building modern, clean and interactive
            web experiences with React.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6"
          >
            <a
              href="/about"
              className="px-10 py-4 rounded-full font-semibold
    bg-sky-500 text-white shadow-lg
    hover:bg-sky-600 hover:shadow-xl
    transition-all duration-300
    inline-flex items-center justify-center gap-2"
            >
            <span>About Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              
            </a>

            <a
              href="/contact"
              className="px-10 py-4 rounded-full font-semibold
                border border-sky-400 text-sky-600
                hover:bg-sky-100 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT: image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-sky-400/30 rounded-full blur-2xl" />
            <img
              src="/github.jpg" // เปลี่ยนเป็นรูปของคุณ
              alt="profile"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-500 text-xs tracking-[0.3em]"
      >
        Thanadon.com🌎
      </motion.div>
    </section>
  );
}

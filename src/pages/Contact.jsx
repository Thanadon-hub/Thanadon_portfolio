import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center
      text-center px-6
      bg-gradient-to-br from-sky-50 via-white to-purple-50
      overflow-hidden"
    >
      {/* background blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[26rem] h-[26rem]
        bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-400
        opacity-30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem]
        bg-gradient-to-tr from-sky-300 via-cyan-300 to-purple-300
        opacity-30 rounded-full blur-3xl"
      />

      {/* title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-4
        text-4xl md:text-5xl font-extrabold
        bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500
        bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 mb-14 max-w-md
        text-gray-600"
      >
        You can contact me through the channels below.
      </motion.p>

      {/* cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card template */}
        {[
          {
            label: "Email",
            value: "aon59079@email.com",
            href: "mailto:aon59079@email.com",
            icon: "📧",
          },
          {
            label: "GitHub",
            value: "Thanadon-hub",
            href: "https://github.com/Thanadon-hub",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.56v-2.02c-3.2.7-3.88-1.39-3.88-1.39-.53-1.36-1.29-1.72-1.29-1.72-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.27 3.37.97.1-.75.4-1.27.72-1.56-2.55-.29-5.23-1.29-5.23-5.75 0-1.27.45-2.31 1.19-3.13-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.2a10.9 10.9 0 0 1 5.8 0c2.21-1.51 3.18-1.2 3.18-1.2.63 1.59.23 2.76.11 3.05.74.82 1.19 1.86 1.19 3.13 0 4.47-2.69 5.45-5.25 5.73.41.36.77 1.07.77 2.16v3.2c0 .31.21.66.79.55A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
              </svg>
            ),
          },
          {
            label: "Facebook",
            value: "Thanadon Chiwisit",
            href: "https://www.facebook.com/ThanadonChiwisit",
            icon: "📘",
          },
          {
            label: "Line",
            value: "Thanadon Chiwisit",
            href: "https://line.me/ti/p/4uTbdf-6if",
            icon: "💬",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            whileHover={{ y: -10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group backdrop-blur-xl bg-white/60
              rounded-3xl px-10 py-8
              border border-white/40
              shadow-xl hover:shadow-2xl
              transition-all duration-300
              cursor-pointer
            "
          >
            <div
              className="
                w-16 h-16 mx-auto mb-4 rounded-full
                bg-gradient-to-tr from-pink-200 to-sky-200
                flex items-center justify-center
                text-3xl text-sky-700
                group-hover:from-pink-500 group-hover:to-sky-500
                group-hover:text-white
                transition-all duration-300
              "
            >
              {item.icon}
            </div>

            <h3 className="font-semibold text-gray-800">
              {item.label}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {item.value}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

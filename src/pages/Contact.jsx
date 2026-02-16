import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] text-slate-500 mb-4">
            CONTACT
          </p>

          <h2 className="
            text-4xl sm:text-5xl lg:text-6xl
            font-semibold tracking-tight
          ">
            Get in Touch
          </h2>

          <div className="h-px w-20 bg-cyan-400 mx-auto mt-6" />

          <p className="mt-6 text-slate-400 max-w-md mx-auto">
            You can contact me through the channels below.
          </p>
        </motion.div>

        {/* ===== CARDS ===== */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6 lg:gap-10
        ">
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
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-2xl
                border border-slate-700
                bg-white/5
                px-6 py-8
                text-center
                transition
                hover:border-slate-500
              "
            >
              {/* ICON */}
              <div className="
                w-14 h-14 mx-auto mb-4
                rounded-xl
                bg-cyan-400/10
                flex items-center justify-center
                text-2xl
                transition
                group-hover:bg-cyan-400/20
              ">
                {item.icon}
              </div>

              <h3 className="font-medium text-slate-200">
                {item.label}
              </h3>

              <p className="text-sm text-slate-400 mt-2 break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

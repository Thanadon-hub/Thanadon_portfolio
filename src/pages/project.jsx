import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Farm Dashboard",
    description:
      "Flutter + Firebase dashboard for monitoring IoT sensors in real time.",
    tech: ["Flutter", "Firebase", "API", "IoT", "Dart"],
    link: "https://github.com/Thanadon-hub/smartfarm_Fluter",
    icon: "🌱",
  },
  {
    title: "People Counter System",
    description: "ESP32 & sensor-based people counting with live display.",
    tech: ["ESP32", "IoT", "C++"],
    link: "https://github.com/yourusername/people-counter",
    icon: "👥",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, animations and clean UI.",
    tech: ["React", "Framer Motion", "UI/UX"],
    link: "https://github.com/Thanadon-hub/portfolio",
    icon: "💻",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen px-6 py-24
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

      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-20"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-3
          bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500
          bg-clip-text text-transparent"
        >
          Projects<br /> & Works
        </h2>
        <p className="text-gray-600">
          Selected works & personal projects
        </p>
      </motion.div>

      {/* grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -12 }}
            className="
              group backdrop-blur-xl bg-white/60
              rounded-3xl p-8
              border border-white/40
              shadow-xl hover:shadow-2xl
              transition-all duration-300
            "
          >
            {/* icon */}
            <div
              className="
                w-16 h-16 mb-6 rounded-2xl
                bg-gradient-to-tr from-pink-200 to-sky-200
                flex items-center justify-center
                text-3xl
                group-hover:from-pink-500 group-hover:to-sky-500
                group-hover:scale-110
                transition-all duration-300
              "
            >
              <span className="group-hover:text-white transition">
                {project.icon}
              </span>
            </div>

            {/* title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>

            {/* description */}
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* tech */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-white/70 backdrop-blur
                    text-sky-600
                    border border-white/40
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* link */}
            <span
              className="
                inline-flex items-center gap-2
                text-sm font-medium
                bg-gradient-to-r from-pink-500 to-sky-500
                bg-clip-text text-transparent
                group-hover:opacity-80 transition
              "
            >
              View on GitHub →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

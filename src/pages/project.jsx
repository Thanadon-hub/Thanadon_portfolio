import React from "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Smart Farm Dashboard",
    description: "Flutter + Firebase dashboard for monitoring IoT sensors in real time.",
    tech: ["Flutter", "Firebase", "API", "IoT","Dart"],
    link: "https://github.com/Thanadon-hub/smartfarm_Fluter",
  },
  {
    title: "People Counter System",
    description: "ESP32 & sensor-based people counting with live display.",
    tech: ["ESP32", "IoT", "C++"],
    link: "https://github.com/yourusername/people-counter",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, animations and clean UI.",
    tech: ["React", "Framer Motion", "UI/UX"],
    link: "https://github.com/yourusername/portfolio",
  },
]

export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-80px)] px-6 py-24">
      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-sky-700 mb-3">
          Projects
        </h2>
        <p className="text-sky-600">
          Selected works & personal projects
        </p>
      </motion.div>

      {/* project grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl p-8
                       border border-sky-100 shadow-lg
                       hover:shadow-2xl transition-all duration-300"
          >
            {/* icon */}
            <div className="w-14 h-14 mb-6 rounded-xl
                            bg-sky-100 flex items-center justify-center
                            text-2xl text-sky-600
                            group-hover:bg-sky-500 group-hover:text-white
                            transition-all duration-300">
              🚀
            </div>

            {/* content */}
            <h3 className="text-xl font-semibold text-sky-700 mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-sky-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full
                             bg-sky-50 text-sky-600 border border-sky-100"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* link */}
            <span className="text-sm font-medium text-sky-500
                             group-hover:text-sky-700 transition">
              View on GitHub →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

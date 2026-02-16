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
    title: "ESP32 People Counter",
    description: "ESP32 & sensor-based people counting with live display.",
    tech: ["ESP32", "IoT", "C++", "Sensors", "Firebase"],
    link: "https://github.com/Thanadon-hub/my-project",
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
    <section className="relative min-h-screen bg-[#0b0d12] text-slate-200 overflow-hidden">

      {/* subtle background texture */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
          [background-size:24px_24px]
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto
        px-4 sm:px-6 lg:px-8
        pt-28 pb-32">

        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs tracking-[0.35em] text-slate-500 mb-4">
            PROJECTS
          </p>

          <h2 className="
            text-4xl sm:text-5xl lg:text-6xl
            font-semibold tracking-tight
          ">
            Selected Works
          </h2>

          <div className="h-px w-20 bg-cyan-400 mx-auto mt-6" />

          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            A selection of personal and academic projects
            focused on web, system, and IoT development.
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 lg:gap-12
        ">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="
                group
                rounded-2xl
                border border-slate-700
                bg-white/5
                p-6 sm:p-8
                transition
                hover:border-slate-500
              "
            >
              {/* ICON */}
              <div className="
                w-14 h-14 mb-6
                rounded-xl
                bg-cyan-400/10
                flex items-center justify-center
                text-2xl
                transition
                group-hover:bg-cyan-400/20
              ">
                {project.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      text-xs px-3 py-1 rounded-full
                      border border-slate-700
                      text-slate-300
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <span className="
                inline-flex items-center gap-2
                text-sm font-medium
                text-cyan-400
                group-hover:text-cyan-300
                transition
              ">
                View on GitHub →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

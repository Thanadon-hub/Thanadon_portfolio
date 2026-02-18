import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👤" },
    { path: "/projects", label: "Projects", icon: "🧩" },
    { path: "/resume", label: "Resume", icon: "📄" },
    { path: "/transcript", label: "Transcript", icon: "🎓" },
    { path: "/contact", label: "Contact", icon: "✉️" },
  ];

  return (
    <>
      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 z-50
        bg-[#0b0d12]
        border-r border-slate-800
        px-6 py-8
      ">
        <div className="flex flex-col w-full">

          {/* LOGO */}
          <div className="mb-12">
            <p className="text-xs tracking-[0.4em] text-slate-500">
              PORTFOLIO
            </p>
            <h1 className="mt-2 text-lg font-semibold text-slate-200">
              Thanadon
            </h1>
          </div>

          {/* LINKS */}
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  group flex items-center gap-4
                  px-4 py-3 rounded-xl
                  text-sm tracking-wide
                  transition
                  ${
                    isActive
                      ? "bg-white/5 text-cyan-400"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }
                `
                }
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* FOOTER */}
          <div className="mt-auto pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Thanadon
            </p>
          </div>
        </div>
      </aside>

      {/* ===== MOBILE TOGGLE BUTTON ===== */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50
          w-11 h-11
          rounded-full
          bg-[#0b0d12]/90
          border border-slate-700
          text-slate-300
          hover:text-cyan-400
          transition
        "
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* ===== MOBILE SIDEBAR ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-black/80 backdrop-blur-sm
              flex
            "
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="
                w-64 h-full
                bg-[#0b0d12]
                border-r border-slate-800
                px-6 py-8
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-lg font-semibold text-slate-200">
                  Thanadon
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-4
                      px-4 py-3 rounded-xl
                      text-sm tracking-wide
                      transition
                      ${
                        isActive
                          ? "bg-white/5 text-cyan-400"
                          : "text-slate-300 hover:bg-white/5"
                      }
                    `
                    }
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

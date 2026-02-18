import React from "react";
import { useState, useEffect } from "react";
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

  /* ===== AUTO CLOSE ON RESIZE ===== */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false); // lg breakpoint
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="
        hidden lg:flex fixed top-0 left-0 h-screen w-64 z-50
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
                  flex items-center gap-4
                  px-4 py-3 rounded-xl
                  text-sm tracking-wide transition
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

      {/* ================= MOBILE BUTTON ================= */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          lg:hidden fixed top-4 left-4 z-50
          w-11 h-11 rounded-full
          bg-[#0b0d12]/90
          border border-slate-700
          flex items-center justify-center
          transition
        "
        aria-label="Toggle menu"
      >
        {/* HAMBURGER → X */}
        <motion.div
          animate={open ? "open" : "closed"}
          className="relative w-5 h-5"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="absolute top-0 left-0 w-5 h-[2px] bg-slate-300"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="absolute top-[6px] left-0 w-5 h-[2px] bg-slate-300"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 12 },
              open: { rotate: -45, y: 6 },
            }}
            className="absolute top-0 left-0 w-5 h-[2px] bg-slate-300"
          />
        </motion.div>
      </button>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-40
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
              <div className="mb-10">
                <h2 className="text-lg font-semibold text-slate-200">
                  Thanadon
                </h2>
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
                      text-sm tracking-wide transition
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

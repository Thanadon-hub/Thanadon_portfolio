import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Folder,
  FileText,
  GraduationCap,
  Mail,
  ChevronRight,
} from "lucide-react";

export default function Navbar({ collapse, setCollapse }) {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: Folder },
    { path: "/resume", label: "Resume", icon: FileText },
    { path: "/transcript", label: "Transcript", icon: GraduationCap },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  /* ===== AUTO CLOSE MOBILE ===== */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}

      <aside
        className={`
        hidden lg:flex fixed top-0 left-0 h-screen z-50
        ${collapse ? "w-20" : "w-64"}
        bg-[#0b0d12]
        border-r border-slate-800
        px-4 py-8
        transition-all duration-300
      `}
      >
        <div className="flex flex-col w-full">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-10">
            {!collapse && (
              <h2 className="text-lg font-semibold text-slate-200">Thanadon</h2>
            )}

            <button
              onClick={() => setCollapse(!collapse)}
              className="w-9 h-9 flex items-center justify-center
              rounded-lg border border-slate-700
              hover:bg-white/5 transition"
            >
              <motion.div
                animate={{ rotate: collapse ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight size={18} />
              </motion.div>
            </button>
          </div>

          {/* LINKS */}
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  flex items-center
                  ${collapse ? "justify-center" : "gap-4"}
                  px-4 py-3 rounded-xl
                  text-sm transition
                  ${
                    isActive
                      ? "bg-white/5 text-cyan-400"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }
                `
                }
              >
                <link.icon size={20} />

                {!collapse && link.label}
              </NavLink>
            ))}
          </nav>

          {/* FOOTER */}
          {!collapse && (
            <div className="mt-auto pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} Thanadon
              </p>
            </div>
          )}
        </div>
      </aside>

      {/* ================= MOBILE BUTTON ================= */}
      <div
        className="
  lg:hidden
  fixed top-0 left-0 right-0
  h-16
  flex items-center justify-between
  px-4
  bg-[#0b0d12]/80
  backdrop-blur
  border-b border-slate-800
  z-40
"
      >
        <h1 className="text-sm font-semibold text-slate-200">Thanadon</h1>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="
    w-10 h-10
    flex items-center justify-center
    rounded-lg
    border border-slate-700
    hover:bg-white/5
    transition
  "
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40
            bg-black/80 backdrop-blur-sm flex"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.25 }}
              className="w-64 h-full
              bg-[#0b0d12]
              border-r border-slate-800
              px-6 py-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold text-slate-200 mb-10">
                Thanadon
              </h2>

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
                      text-sm transition
                      ${
                        isActive
                          ? "bg-white/5 text-cyan-400"
                          : "text-slate-300 hover:bg-white/5"
                      }
                    `
                    }
                  >
                    <link.icon size={20} />
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

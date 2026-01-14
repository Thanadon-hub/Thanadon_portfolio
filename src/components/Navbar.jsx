import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/transcript", label: "Transcript" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <div
        className="
          mx-auto max-w-6xl
          rounded-full
          bg-white/70 backdrop-blur-xl
          shadow-xl shadow-sky-200/40
          px-6 py-4
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <h1
          className="
            flex items-center gap-2
            text-lg font-extrabold
            bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500
            bg-clip-text text-transparent
          "
        >
          Thanadon.com
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-sky-500 text-white shadow-md scale-105"
                    : "text-gray-600 hover:bg-white/70 hover:text-sky-600 hover:scale-105"
                }
              `
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-full
            bg-white/70 backdrop-blur
            flex items-center justify-center
            shadow hover:scale-110 transition"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            mt-4 mx-4
            rounded-3xl
            bg-white/80 backdrop-blur-xl
            shadow-xl
            border border-white/40
            p-4
            space-y-2
          "
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                block text-center px-4 py-3 rounded-xl font-medium
                transition-all
                ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-sky-500 text-white"
                    : "text-gray-700 hover:bg-sky-100"
                }
              `
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

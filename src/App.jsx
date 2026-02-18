import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/about";
import Projects from "./pages/project";
import Resume from "./pages/Resume";
import Transcript from "./pages/Transcript";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-slate-200">
      <Navbar />

      {/* ===== CONTENT WRAPPER ===== */}
      <main className="lg:pl-64 transition-all duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/transcript" element={<Transcript />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

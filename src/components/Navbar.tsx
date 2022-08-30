"use client";

import { useState } from "react";

const links = [
  { name: "Studio", href: "#studio" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e2e2df]/95 backdrop-blur-sm border-b border-[#070607]/10">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
          Caldera
        </a>

        <div className="hidden md:flex items-center gap-9 bg-[#f7f6f2] rounded-full px-8 py-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[#070607]/70 hover:text-[#070607] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-[#fc5000] text-[#070607] rounded-full px-6 py-3 text-base font-medium hover:opacity-85 transition-opacity"
        >
          Start a project
        </a>

        <button
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-full h-px bg-[#070607] transition-transform ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`w-full h-px bg-[#070607] transition-transform ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#e2e2df] border-b border-[#070607]/10 px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-[#070607]/70 hover:text-[#070607]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-[#fc5000] text-[#070607] rounded-full px-6 py-3 text-base font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
}

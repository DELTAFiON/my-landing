"use client";

import { useState } from "react";

const links = [
  { name: "Studio", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#0D0D0D]/[0.08]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-base font-semibold tracking-tight font-[Space_Grotesk]">
          Landing
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#0D0D0D]/60 hover:text-[#0D0D0D] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#0D0D0D] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#FF4D00] transition-colors"
          >
            Start a project
          </a>
        </div>

        <button
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-full h-px bg-[#0D0D0D] transition-transform ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`w-full h-px bg-[#0D0D0D] transition-transform ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#0D0D0D]/[0.08] px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-[#0D0D0D]/60 hover:text-[#0D0D0D]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-[#0D0D0D] text-white px-5 py-2 rounded-full text-sm font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
}

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-[rgba(15,15,15,0.12)]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-sm font-bold tracking-tight font-display">
          Landing
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-ink/50 hover:text-ink transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-ink text-surface px-5 py-2 rounded text-sm font-bold uppercase tracking-[0.06em] hover:bg-accent transition-colors"
          >
            Start a project
          </a>
        </div>

        <button
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-full h-px bg-ink transition-transform ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`w-full h-px bg-ink transition-transform ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-[rgba(15,15,15,0.12)] px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-ink/50 hover:text-ink"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-ink text-surface px-5 py-2 rounded text-sm font-bold uppercase tracking-[0.06em] text-center"
            onClick={() => setIsOpen(false)}
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
}

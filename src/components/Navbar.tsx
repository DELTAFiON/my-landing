"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          Landing
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">
            Get Started
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-md border-b border-white/10 px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block btn-primary text-center text-sm"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

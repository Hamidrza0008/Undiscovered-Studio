"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  // { label: "Studio", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ?  "rgb(151,191,168)"  // mint green with blur when scrolled
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(150, 200, 175, 0.3)" : "none",
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-secondary" />
          </span>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">Undiscovered Studio </span>
        </a>
        <ul className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="relative text-foreground/80 hover:text-foreground transition story-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        
         <a href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium hover:bg-primary/90 transition"
        >
          Contact
          <span className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center group-hover:rotate-45 transition-transform">
            <ArrowUpRight size={16} />
          </span>
        </a>
      </nav>
    </motion.header>
  );
}
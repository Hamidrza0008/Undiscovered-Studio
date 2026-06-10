"use client";
import Image from "next/image";
import cakeshop from "../public/Lotus Cakes.png";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; 

const projects = [
  { 
    img: cakeshop, 
    cat: "Website", 
    t: "Lotus Cakes", 
    d: "Premium Cake Shop Online Ordering & Management System", 
    year: "2026", 
    size: "lg",
    url: "https://lotuscakesin.vercel.app/" 
  },
  { 
    img: "/project-2.jpg", 
    cat: "Campaign", 
    t: "Neon Spring", 
    d: "A fashion week campaign film and microsite for an emerging eyewear brand.", 
    year: "2025", 
    size: "md",
    url: "#" 
  },
  { 
    img: "/project-3.jpg", 
    cat: "Identity", 
    t: "Little Break", 
    d: "Visual identity and packaging for a craft coffee studio.", 
    year: "2025", 
    size: "md",
    url: "#" 
  },
  { 
    img: "/project-4.jpg", 
    cat: "Web / SaaS", 
    t: "Verdant Dashboard", 
    d: "Product design and engineering for a sustainability analytics platform.", 
    year: "2024", 
    size: "lg",
    url: "#" 
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-32 bg-card">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        {/* Header Section */}
        <div className="flex items-end justify-between mb-12 md:mb-20 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">[ Selected Work ]</p>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              Featured<br />
              <span className="font-serif-display italic font-normal lowercase">projects</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline text-sm story-link hover:text-emerald-800 transition">All projects →</a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-12 gap-y-12 gap-x-6 md:gap-x-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className={`group ${p.size === "lg" ? "md:col-span-7" : "md:col-span-5"} ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              {/* Image Container with Link */}
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-2xl bg-muted aspect-[4/3]">
                <Image
                  src={p.img}
                  alt={p.t}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] bg-background/90 text-foreground backdrop-blur px-3 py-1.5 rounded-full z-10">
                  {p.cat}
                </span>
              </a>

              {/* Title & Year */}
              <div className="flex items-baseline justify-between mt-5">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  <h3 className="font-display text-3xl md:text-4xl uppercase text-foreground">{p.t}</h3>
                </a>
                <span className="text-sm text-muted-foreground font-mono">{p.year}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mt-2 max-w-md text-sm md:text-base leading-relaxed">{p.d}</p>

              {/* Action Button: Take a look */}
              <div className="mt-4">
                <a 
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium tracking-wider uppercase text-foreground/80 group-hover:text-emerald-800 transition-colors duration-300"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                    Take a Look
                  </span>
                  <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-muted-foreground group-hover:text-emerald-800" />
                </a>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
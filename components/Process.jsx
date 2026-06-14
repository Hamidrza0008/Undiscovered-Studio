"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { 
    n: "01", 
    t: "Discover", 
    d: "Workshops, audits and research to map the territory.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600" // Research/analytics mapping concept
  },
  { 
    n: "02", 
    t: "Strategy", 
    d: "Positioning, narrative and a roadmap for the build.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600" // Planning/wireframing flow
  },
  { 
    n: "03", 
    t: "Design", 
    d: "Identity, product and experience design in tight cycles.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" // Aesthetic design/3D curves
  },
  { 
    n: "04", 
    t: "Develop", 
    d: "Production engineering with a craft-first culture.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" // Modern clean code interface
  },
  { 
    n: "05", 
    t: "Launch", 
    d: "Go-live, measurement and a partnership for what's next.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" // Global digital network/live concept
  },
];

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="process" className="py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-12 gap-6 mb-12 md:mb-20">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-secondary">[ Process ]</p>
          <h2 className="md:col-span-9 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            A clear path from blank page to <span className="font-serif-display italic font-normal lowercase text-secondary">launch day.</span>
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-5 gap-px bg-primary-foreground/10 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-primary p-6 md:p-8 min-h-[260px] flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              
              {/* --- IMAGE BACKGROUND REVEAL --- */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 z-0 pointer-events-none"
                  >
                    {/* Image overlay to keep text fully readable */}
                    <div className="absolute inset-0 bg-primary/85 z-10 transition-colors duration-300 group-hover:bg-primary/75" />
                    <img 
                      src={s.image} 
                      alt={s.t} 
                      className="w-full h-full object-cover filtering brightness-90 grayscale contrast-125"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content Layer (z-20 explicitly targets text clarity above image) */}
              <span className="text-sm text-secondary z-20 font-mono transition-transform duration-300 group-hover:-translate-y-1">
                {s.n}
              </span>
              
              <div className="z-20">
                <h3 className="font-display text-3xl uppercase transition-colors duration-300 group-hover:text-secondary">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/70 group-hover:text-primary-foreground transition-colors duration-300">
                  {s.d}
                </p>
              </div>

              {/* Card Top Border Accent on Hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
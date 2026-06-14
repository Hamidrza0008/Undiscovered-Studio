"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    n: "1",
    t: "Built by builders",
    d: "Undiscovered Studio is founder-led. Every project is designed and developed with hands-on attention from start to finish.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600", // Craft/Workspace vibe
  },
  {
    n: "2",
    t: "Modern by default",
    d: "We use modern tools and frameworks to create fast, responsive, and scalable digital experiences built for today's web.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600", // Tech nodes/Modern web structure
  },
  {
    n: "3",
    t: "Focused on growth",
    d: "Whether it's a portfolio, startup website, or product landing page, our goal is simple — help ideas get noticed and grow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", // Abstract analytics/Growth curves
  },
];

export default function WhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="why-us" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        {/* Header Title */}
        <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9] mb-12 md:mb-20 max-w-3xl">
          Why ?<br />
          <span className="font-serif-display italic font-normal lowercase text-emerald-800">
            Undiscovered
          </span>
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden relative">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-card p-8 md:p-10 min-h-[300px] flex flex-col justify-between overflow-hidden group cursor-pointer transition-colors duration-300"
            >
              
              {/* --- PREMIUM HOVER IMAGE BACKDROP --- */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 z-0 pointer-events-none"
                  >
                    {/* Dark gradient mask text ki high readability ke liye */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/75 z-10" />
                    <img
                      src={it.image}
                      alt={it.t}
                      className="w-full h-full object-cover grayscale brightness-[0.25] contrast-125 transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content Structure */}
              <div className="z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="text-sm font-mono text-muted-foreground group-hover:text-emerald-800 transition-colors duration-300">
                    {it.n.padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-semibold tracking-tight text-sm uppercase group-hover:text-emerald-800 transition-colors duration-300">
                    {it.t}
                  </h3>
                </div>
                
                <p className="mt-6 text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                  {it.d}
                </p>
              </div>

              {/* Subtle Glowing Corner Indicator */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-emerald-800/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
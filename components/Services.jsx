"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { 
    n: "01", 
    t: "Web Design", 
    d: "Modern, aesthetic websites built for clarity and impact.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    n: "02", 
    t: "Web Development", 
    d: "Scalable frontend builds using React & Next.js.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    n: "03", 
    t: "UI/UX Design", 
    d: "User-focused interfaces that feel intuitive and clean.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    n: "04", 
    t: "Landing Pages", 
    d: "Conversion-focused pages for startups and products.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    n: "05", 
    t: "Portfolio Sites", 
    d: "Personal brands and portfolios that stand out online.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    n: "06", 
    t: "Website Optimization", 
    d: "Speed, performance and SEO improvements for better reach.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
  },
];

export default function Services() {
  // Mouse position aur active state track karne ke liye
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseMove = (e) => {
    // Row ke relative mouse ki position calculate karne ke liye
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-20">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">[ Capabilities ]</p>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              Things<br />
              <span className="font-serif-display italic font-normal lowercase text-[#9ac1ab]">we’re good </span>
              at
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end text-lg text-muted-foreground max-w-md">
            Built from passion, curiosity, and countless hours of learning. We create modern digital experiences that prove great work speaks louder than credentials.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <motion.a
              href="#contact"
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative group grid grid-cols-12 gap-4 items-center border-b border-border py-7 md:py-9 hover:bg-foreground hover:text-background transition-colors px-2 md:px-6 -mx-2 md:-mx-6 z-10"
            >
              {/* --- IMAGE REVEAL LOGIC --- */}
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 2,
                      x: mousePos.x - 150, // Image width ka aadha taaki center m rhe cursor k
                      y: mousePos.y - 100, // Image height ka aadha
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                    className="pointer-events-none absolute left-0 top-0 w-[300px] h-[200px] rounded-xl overflow-hidden z-20 hidden md:block shadow-2xl border border-white/10"
                  >
                    <img 
                      src={s.image} 
                      alt={s.t} 
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500" 
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <span className="col-span-2 md:col-span-1 text-xs md:text-sm text-muted-foreground group-hover:text-background/60 z-10">
                {s.n}
              </span>
              <h3 className="col-span-7 md:col-span-4 font-display text-2xl md:text-4xl uppercase z-10">
                {s.t}
              </h3>
              <p className="hidden md:block col-span-5 text-sm text-muted-foreground group-hover:text-background/70 max-w-md z-10">
                {s.d}
              </p>
              <span className="col-span-3 md:col-span-2 flex justify-end z-10">
                <ArrowUpRight className="opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all" size={28} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
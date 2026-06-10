"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { img: "/project-1.jpg", cat: "Product / Branding", t: "Auralis Audio", d: "Brand system and e-commerce experience for a boutique audio label.", year: "2026", size: "lg" },
  { img: "/project-2.jpg", cat: "Campaign", t: "Neon Spring", d: "A fashion week campaign film and microsite for an emerging eyewear brand.", year: "2025", size: "md" },
  { img: "/project-3.jpg", cat: "Identity", t: "Little Break", d: "Visual identity and packaging for a craft coffee studio.", year: "2025", size: "md" },
  { img: "/project-4.jpg", cat: "Web / SaaS", t: "Verdant Dashboard", d: "Product design and engineering for a sustainability analytics platform.", year: "2024", size: "lg" },
];

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-32 bg-card">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-20 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">[ Selected Work ]</p>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              Featured<br />
              <span className="font-serif-display italic font-normal lowercase">projects</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline text-sm story-link">All projects →</a>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className={`group ${p.size === "lg" ? "md:col-span-7" : "md:col-span-5"} ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/3]">
                <Image
                  src={p.img}
                  alt={p.t}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] bg-background/90 backdrop-blur px-3 py-1.5 rounded-full">
                  {p.cat}
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-5">
                <h3 className="font-display text-3xl md:text-4xl uppercase">{p.t}</h3>
                <span className="text-sm text-muted-foreground">{p.year}</span>
              </div>
              <p className="text-muted-foreground mt-2 max-w-md">{p.d}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

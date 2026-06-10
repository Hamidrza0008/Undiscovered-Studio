"use client";
import { motion } from "framer-motion";

const quotes = [
  { q: "Studio Noir reframed our entire brand in a single quarter. The work outperformed our wildest projections.", a: "Sara Lin", r: "VP Marketing, Greendot" },
  { q: "Genuinely the best creative partner we've worked with — sharp strategy, gorgeous craft, zero ego.", a: "Marcus Hale", r: "Founder, Auralis" },
  { q: "They ship like a product team and design like an art house. Rare combination.", a: "Yui Tanaka", r: "Head of Product, Sonos" },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-10">[ Kind words ]</p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border flex flex-col h-full"
            >
              <blockquote className="text-xl md:text-2xl leading-snug font-serif-display not-italic">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-semibold">{t.a}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

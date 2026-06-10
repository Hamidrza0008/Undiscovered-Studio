"use client";
import { motion } from "framer-motion";

const items = [
  {
    n: "1",
    t: "Built by builders",
    d: "Undiscovered Studio is founder-led. Every project is designed and developed with hands-on attention from start to finish.",
  },
  {
    n: "2",
    t: "Modern by default",
    d: "We use modern tools and frameworks to create fast, responsive, and scalable digital experiences built for today's web.",
  },
  {
    n: "3",
    t: "Focused on growth",
    d: "Whether it's a portfolio, startup website, or product landing page, our goal is simple — help ideas get noticed and grow.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9] mb-12 md:mb-20 max-w-3xl">
          Why ?<br />
          <span className="font-serif-display italic font-normal lowercase">Undiscovered</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card p-8 md:p-10 min-h-[280px] flex flex-col"
            >
              <span className="text-sm text-muted-foreground">{it.n}</span>
              <h3 className="mt-6 font-semibold tracking-tight text-sm uppercase">{it.t}</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

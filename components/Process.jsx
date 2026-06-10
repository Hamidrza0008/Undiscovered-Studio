"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discover", d: "Workshops, audits and research to map the territory." },
  { n: "02", t: "Strategy", d: "Positioning, narrative and a roadmap for the build." },
  { n: "03", t: "Design", d: "Identity, product and experience design in tight cycles." },
  { n: "04", t: "Develop", d: "Production engineering with a craft-first culture." },
  { n: "05", t: "Launch", d: "Go-live, measurement and a partnership for what's next." },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-6 mb-12 md:mb-20">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-secondary">[ Process ]</p>
          <h2 className="md:col-span-9 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            A clear path from blank page to <span className="font-serif-display italic font-normal lowercase text-secondary">launch day.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-px bg-primary-foreground/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-primary p-6 md:p-8 min-h-[220px] flex flex-col justify-between"
            >
              <span className="text-sm text-secondary">{s.n}</span>
              <div>
                <h3 className="font-display text-3xl uppercase">{s.t}</h3>
                <p className="mt-3 text-sm text-primary-foreground/70">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

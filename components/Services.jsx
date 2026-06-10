"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", t: "Web Design", d: "Modern, aesthetic websites built for clarity and impact." },
  { n: "02", t: "Web Development", d: "Scalable frontend builds using React & Next.js." },
  { n: "03", t: "UI/UX Design", d: "User-focused interfaces that feel intuitive and clean." },
  { n: "04", t: "Landing Pages", d: "Conversion-focused pages for startups and products." },
  { n: "05", t: "Portfolio Sites", d: "Personal brands and portfolios that stand out online." },
  { n: "06", t: "Website Optimization", d: "Speed, performance and SEO improvements for better reach." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-20">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">[ Capabilities ]</p>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              Things<br />
              <span className="font-serif-display italic font-normal lowercase">we’re good </span>
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
              className="group grid grid-cols-12 gap-4 items-center border-b border-border py-7 md:py-9 hover:bg-foreground hover:text-background transition-colors px-2 md:px-6 -mx-2 md:-mx-6"
            >
              <span className="col-span-2 md:col-span-1 text-xs md:text-sm text-muted-foreground group-hover:text-background/60">{s.n}</span>
              <h3 className="col-span-7 md:col-span-4 font-display text-2xl md:text-4xl uppercase">{s.t}</h3>
              <p className="hidden md:block col-span-5 text-sm text-muted-foreground group-hover:text-background/70 max-w-md">{s.d}</p>
              <span className="col-span-3 md:col-span-2 flex justify-end">
                <ArrowUpRight className="opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all" size={28} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

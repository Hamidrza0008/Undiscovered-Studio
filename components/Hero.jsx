"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.9, clipPath: "inset(10% 10% 10% 10% round 50%)" },
  show: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 50%)",
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 },
  },
};

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount((prev) => prev + 2), 25);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsLoading(false), 600);
    }
  }, [count]);

  return (
    <>
      {/* LOADER */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col justify-between p-10 bg-[#c8e8d8] text-foreground select-none"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="flex justify-between items-center w-full">
              <span className="font-mono text-xs tracking-widest uppercase">Undiscovered Studio</span>
              <span className="font-mono text-xs">©2026</span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-display uppercase leading-none"
              >
                Turning Ideas Into Reality
              </motion.h2>
            </div>
            <div className="flex justify-between items-end w-full">
              <div className="w-24 h-[1px] bg-foreground/20 relative overflow-hidden hidden sm:block">
                <motion.div className="absolute inset-y-0 left-0 bg-foreground" animate={{ width: `${count}%` }} />
              </div>
              <span className="font-display text-[12vw] md:text-[8vw] leading-none font-bold">{count}%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section
        className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden min-h-screen flex items-center"
        style={{
          background: "linear-gradient(to bottom, #c8e8d8 0%, #d8eedf 40%, #f0f7f2 100%)",
        }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#b8dfc8]/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-5 md:px-10 w-full z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "show"}
            className="relative"
          >
            {/* Grid */}
            <div className="relative grid grid-cols-12 items-start">

              {/* Top Heading */}
              <motion.h1
                variants={fadeUp}
                className="col-span-12 md:col-span-7 font-display text-[13vw] md:text-[9vw] leading-[0.82] uppercase pt-4 md:pt-10 order-1 tracking-tighter"
              >
                We Turn
                <br />
                Undiscovered
              </motion.h1>

              {/* Image */}
              <motion.div
                variants={imageReveal}
                className="col-span-12 sm:col-span-8 md:col-span-4 md:col-start-9 md:row-start-1 relative order-2 md:order-none my-4 md:mt-0 group cursor-pointer"
              >
                <motion.div
                  className="relative aspect-[4/5] rounded-[50%] overflow-hidden max-w-[280px] md:max-w-none mx-auto md:mx-0 shadow-xl shadow-black/5"
                  style={{ backgroundColor: "#b8dfc8" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src="/hero-portrait.jpg"
                    alt="Undiscovered Studio Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Bottom Heading — negative margin se gap bilkul kam */}
              <motion.h1
                variants={fadeUp}
                className="col-span-12 font-display text-[13vw] md:text-[9vw] leading-[0.82] uppercase order-3 tracking-tighter  md:-mt-16"
              >
                Ideas{" "}
                <br className="block md:hidden" />
                <span className="font-serif-display lowercase italic font-normal text-emerald-800">
                  Into Reality
                </span>
              </motion.h1>
            </div>

            {/* Description + CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-10 md:mt-12 grid md:grid-cols-2 gap-8 items-end"
            >
              <p className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
                We started without opportunities, internships, or recognition.
                Undiscovered Studio is a creative digital agency built by
                self-taught developers and designers, crafting modern websites,
                apps, and digital experiences that help brands grow — and prove
                that talent doesn&apos;t need permission.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:justify-end">
                <motion.a
                  href="#work"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium transition-shadow relative overflow-hidden group shadow-lg shadow-primary/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles size={16} className="text-secondary animate-pulse" />
                  <span className="relative z-10">See What We Can Build</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let&apos;s Work
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowDown size={16} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import bg from "../public/BG3.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  // 1. काउंटर प्रोग्रेस लॉजिक
  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount((prev) => prev + 2), 20);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [count]);

  // 2. स्क्रॉल लॉक करने का लॉजिक
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <>
      {/* LOADER */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col justify-between p-6 md:p-10 bg-[#c8e8d8] text-foreground select-none"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="flex justify-between items-center w-full">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase opacity-60">Undiscovered Studio</span>
              <span className="font-mono text-[10px] md:text-xs opacity-60">©2026</span>
            </div>
            <div className="overflow-hidden my-auto">
              {/* text-3xl to text-4xl for mobile */}
              <motion.h2
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl sm:text-4xl md:text-6xl font-display uppercase leading-tight md:leading-none tracking-tight"
              >
                Turning Ideas <br className="sm:hidden" /> Into Reality
              </motion.h2>
            </div>
            <div className="flex justify-between items-end w-full">
              <div className="w-20 md:w-24 h-[1px] bg-foreground/20 relative overflow-hidden hidden xs:block">
                <motion.div className="absolute inset-y-0 left-0 bg-foreground" animate={{ width: `${count}%` }} />
              </div>
              <span className="font-display text-[16vw] sm:text-[12vw] md:text-[8vw] leading-none font-bold ml-auto">{count}%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden px-6 sm:px-12 md:px-28 py-24 md:py-32">
        
        {/* बैकग्राउंड इमेज कंटेनर (z-0) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bg.src || bg} 
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        </div>

        {/* मेन कंटेंट कंटेनर - लेफ्ट अलाइन (z-10) */}
        <div className="max-w-[1200px] w-full z-10 text-left flex flex-col items-start justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "show"}
            className="w-full flex flex-col items-start"
          >
            {/* text-[12vw] to text-[14vw] for bigger heading, leading-[0.95] to leading-[0.9] for tighter look */}
            <motion.h1
              variants={fadeUp}
              className=" text-white font-display text-[14vw] sm:text-[9vw] md:text-[6.5vw] leading-[0.9] sm:leading-[0.9] md:leading-[1.05] lg:leading-[1.1] uppercase tracking-wide max-w-xs sm:max-w-3xl md:max-w-4xl break-words  text-left"
            >
              We Turn
              <br />
              <span className="block my-1 sm:my-0 text-[#9ac1ab]">Undiscovered</span>
              <span className="text-white">Ideas</span>
              <br />
              <span className=" text-white font-serif-display lowercase italic font-normal  block mt-4 sm:mt-2 tracking-normal">
                Into Reality
              </span>
            </motion.h1>

            {/* ऐक्शन बटन्स - px-8 py-4 to px-6 py-3 & text-sm to text-xs for smaller mobile buttons */}
            <motion.div
              variants={fadeUp}
              className="transparent mt-10 flex flex-col sm:flex-row items-center justify-start gap-4 w-full max-w-[280px] sm:max-w-none"
            >
              <motion.a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-emerald-900 text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-medium transition-all relative overflow-hidden group shadow-lg shadow-emerald-900/10"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={14} className="text-emerald-300 animate-pulse" />
                <span className="relative z-10 tracking-wide">See Our Work</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
              </motion.a>

              <motion.a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-foreground/20 px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-medium bg-white/80 backdrop-blur-md text-foreground hover:bg-foreground hover:text-background transition-all"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Talk
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowDown size={14} />
                </motion.div>
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
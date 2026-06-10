"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

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

const particles = Array.from({ length: 25 });

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

  // 2. स्क्रॉल लॉक करने का लॉजिक (जब तक लोडर एक्टिव है)
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // क्लीनअप फ़ंक्शन: अगर कंपोनेंट अनमाउंट हो तो स्क्रॉल वापस नॉर्मल हो जाए
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
              <motion.h2
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-6xl font-display uppercase leading-tight md:leading-none tracking-tight"
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
      <section
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 py-24 md:py-32"
        style={{
          background: "linear-gradient(to bottom, #c8e8d8 0%, #d8eedf 50%, #f0f7f2 100%)",
        }}
      >
        {/* प्रीमियम बैकग्राउंड वीडियो/थीम ओवरले */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter blur-[1px]"
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-41765-large.mp4" 
          />
        </div>

        {/* नेक्स्ट-लेवल फ्लोटिंग एम्बिएंट ग्लो लाइट्स */}
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#b8dfc8]/50 blur-[70px] sm:blur-[120px] rounded-full pointer-events-none z-0" 
        />
        <motion.div 
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#aedcc0]/30 blur-[80px] sm:blur-[140px] rounded-full pointer-events-none z-0" 
        />

        {/* एडवांस मैजिकल पार्टिकल्स */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
          {particles.map((_, index) => {
            const size = Math.random() * 3 + 1;
            return (
              <motion.div
                key={index}
                className="absolute bg-emerald-800 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: size,
                  height: size,
                }}
                animate={{
                  y: [0, -140, 0],
                  x: [0, (Math.random() - 0.5) * 40, 0],
                  opacity: [0.1, Math.random() * 0.6 + 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            );
          })}
        </div>

        {/* मेन कंटेंट कंटेनर */}
        <div className="max-w-[1200px] mx-auto w-full z-10 text-center flex flex-col items-center justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "show"}
            className="w-full flex flex-col items-center"
          >
            {/* रिस्पॉन्सिव हेडिंग */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[12vw] sm:text-[10vw] md:text-[7.5vw] leading-[0.95] sm:leading-[0.9] md:leading-[1.05] lg:leading-[1.1] uppercase tracking-wide max-w-xs sm:max-w-3xl md:max-w-5xl mx-auto break-words"
            >
              We Turn
              <br />
              <span className="block my-1 sm:my-0">Undiscovered</span>
              Ideas
              <br />
              <span className="font-serif-display lowercase italic font-normal text-emerald-800 block mt-4 sm:mt-2 tracking-normal">
                Into Reality
              </span>
            </motion.h1>

            {/* ऐक्शन बटन्स */}
            <motion.div
              variants={fadeUp}
              className="transparent mt-12 md:mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[280px] sm:max-w-none"
            >
              <motion.a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-emerald-900 text-white px-8 py-4 text-sm font-medium transition-all relative overflow-hidden group shadow-lg shadow-emerald-900/10"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={15} className="text-emerald-300 animate-pulse" />
                <span className="relative z-10 tracking-wide">See Our Work</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
              </motion.a>

              <motion.a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 py-4 text-sm font-medium bg-white/50 backdrop-blur-md text-foreground hover:bg-foreground hover:text-background transition-all"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Talk
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowDown size={15} />
                </motion.div>
              </motion.a>
            </motion.div>

            {/* एंकर पैराग्राफ */}
            <motion.p
              variants={fadeUp}
              className="mt-10 md:mt-12 max-w-sm sm:max-w-md md:max-w-xl text-sm sm:text-base md:text-lg text-neutral-600/90 leading-relaxed mx-auto px-2"
            >
              We started without opportunities or recognition. Undiscovered Studio is a creative digital agency built by self-taught minds, crafting modern digital experiences that prove talent doesn&apos;t need permission.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
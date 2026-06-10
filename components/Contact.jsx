"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl bg-primary text-primary-foreground py-12 px-6 md:p-20 relative overflow-hidden"
        >
          <motion.div 
            variants={glowVariants}
            className="absolute -right-20 -top-20 w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary/40 blur-3xl pointer-events-none" 
          />

          <motion.p 
            variants={itemVariants}
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary mb-6 md:mb-8 relative"
          >
            [ Let&apos;s Build Something Great ]
          </motion.p>

          <motion.h2 
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-[9rem] uppercase leading-[0.95] md:leading-[0.9] relative break-words"
          >
            Let&apos;s Build
            <br />
            <span className="font-serif-display italic font-normal lowercase text-secondary">
              together.
            </span>
          </motion.h2>

          <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-10 md:gap-12 relative">
            <motion.div variants={itemVariants} className="flex flex-col items-start">
              <p className="text-primary-foreground/70 text-sm md:text-base max-w-md leading-relaxed">
                Have an idea, startup, portfolio, or website project in mind?
                Let&apos;s discuss how we can turn it into reality.
              </p>

              <a
                href="mailto:hamidrza0008@gmail.com"
                className="inline-flex items-center gap-3 mt-6 md:mt-8 rounded-full bg-secondary text-primary px-5 py-3.5 md:px-6 md:py-4 text-xs md:text-sm font-medium hover:bg-secondary/90 transition group break-all"
              >
                hamidrza0008@gmail.com
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition shrink-0"
                />
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-sm pt-6 md:pt-0 border-t border-primary-foreground/10 md:border-t-0"
            >
              <div>
                <p className="uppercase tracking-[0.2em] text-secondary text-[10px] md:text-xs mb-2">
                  Location
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  India
                  <br />
                  Remote Worldwide
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-secondary text-[10px] md:text-xs mb-2">
                  Studio
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Undiscovered Studio
                  <br />
                  Founder-Led Creative Studio
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-secondary text-[10px] md:text-xs mb-2">
                  Follow
                </p>
                <div className="text-primary-foreground/80 flex flex-wrap gap-x-4 gap-y-1 sm:block">
                  <a href="#" className="hover:text-secondary transition block">Instagram</a>
                  <a href="#" className="hover:text-secondary transition block">LinkedIn</a>
                  <a href="#" className="hover:text-secondary transition block">GitHub</a>
                </div>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-secondary text-[10px] md:text-xs mb-2">
                  Response Time
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Usually Within
                  <br />
                  24 Hours
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
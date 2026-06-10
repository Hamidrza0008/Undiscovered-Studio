"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "919599424493"; 
  const whatsappMessage = encodeURIComponent("Hello! I would like to discuss a project with you.");
  const emailAddress = "undiscoveredstudio.in@gmail.com";

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
    <section id="contact" className="py-12 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-2xl md:rounded-3xl bg-primary text-primary-foreground py-10 px-5 sm:p-12 md:p-20 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <motion.div
            variants={glowVariants}
            className="absolute -right-20 -top-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
          />

          <motion.p
            variants={itemVariants}
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary mb-4 md:mb-8 relative"
          >
            [ Let&apos;s Build Something Great ]
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-[7rem] lg:text-[8rem] uppercase leading-[1.1] md:leading-[0.9] relative break-words"
          >
            Let&apos;s Build
            <br />
            <span className="font-serif-display italic font-normal lowercase text-secondary block sm:inline mt-2 sm:mt-0">
              together.
            </span>
          </motion.h2>

          {/* Core Content Layout Grid */}
          <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative items-start">
            
            {/* Left Column: Info & Details */}
            <div className="grid grid-cols-1 gap-8 lg:col-span-5">
              <motion.div variants={itemVariants} className="flex flex-col items-start">
                <p className="text-primary-foreground/70 text-sm md:text-base max-w-md leading-relaxed">
                  Have an idea, startup, portfolio, or website project in mind?
                  Reach out through any of the platforms and let&apos;s turn it into reality.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-xs sm:text-sm pt-8 border-t border-primary-foreground/10"
              >
                <div>
                  <p className="uppercase tracking-[0.2em] text-secondary text-[10px] md:text-xs mb-1.5">
                    Location
                  </p>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    India <br /> Remote Worldwide
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-secondary text-[10px] md:text-xs mb-1.5">
                    Studio
                  </p>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Undiscovered Studio <br /> Founder-Led Creative Studio
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-secondary text-[10px] md:text-xs mb-1.5">
                    Follow
                  </p>
                  <div className="text-primary-foreground/80 flex flex-wrap gap-x-4 gap-y-1 sm:block">
                    <a href="#" className="hover:text-secondary transition block">Instagram</a>
                    <a href="#" className="hover:text-secondary transition block">LinkedIn</a>
                    <a href="#" className="hover:text-secondary transition block">GitHub</a>
                  </div>
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-secondary text-[10px] md:text-xs mb-1.5">
                    Response Time
                  </p>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Usually Within <br /> 24 Hours
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Premium Connect Cards (Replacing the Form) */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-7 w-full"
            >
              {/* WhatsApp Card */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between bg-primary-foreground/[0.02] border border-primary-foreground/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-secondary/40 hover:bg-primary-foreground/[0.04] transition-all duration-3xl text-left"
              >
                <div className="flex justify-between items-start w-full">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-xl group-hover:bg-secondary group-hover:text-primary transition-all duration-3xl">
                    <MessageSquare size={24} />
                  </div>
                  <ArrowUpRight size={20} className="text-primary-foreground/40 group-hover:text-secondary group-hover:rotate-45 transition-all duration-3xl" />
                </div>
                
                <div className="mt-12">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary-foreground/50 mb-1">Fast Response</p>
                  <h3 className="text-lg md:text-xl font-medium text-primary-foreground">Chat on WhatsApp</h3>
                  <p className="text-xs text-primary-foreground/70 mt-1">Instant support, quick queries & discussions.</p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href={`mailto:${emailAddress}`}
                className="group flex flex-col justify-between bg-primary-foreground/[0.02] border border-primary-foreground/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-secondary/40 hover:bg-primary-foreground/[0.04] transition-all duration-3xl text-left"
              >
                <div className="flex justify-between items-start w-full">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-xl group-hover:bg-secondary group-hover:text-primary transition-all duration-3xl">
                    <Mail size={24} />
                  </div>
                  <ArrowUpRight size={20} className="text-primary-foreground/40 group-hover:text-secondary group-hover:rotate-45 transition-all duration-3xl" />
                </div>
                
                <div className="mt-12">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary-foreground/50 mb-1">Official Enquiry</p>
                  <h3 className="text-lg md:text-xl font-medium text-primary-foreground">Drop an Email</h3>
                  <p className="text-xs text-primary-foreground/70 mt-1">{emailAddress}</p>
                </div>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
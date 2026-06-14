"use client";
import Image from "next/image";
import cakeshop from "../public/Lotus Cakes.png";
import oscar from "../public/oscar.png";
import firmilenge from "../public/firmilenge.png";
import topstar from "../public/topstar.png";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    img: cakeshop,
    cat: "Website",
    t: "Lotus Cakes",
    d: "A modern full-stack Cake Shop website built with Next.js, MySQL, Redux Toolkit, and Framer Motion. Features secure authentication, cart management, product ordering, order tracking, and responsive UI for users.",
    year: "2026",
    size: "lg",
    url: "https://lotuscakesin.vercel.app/",
  },
  {
    img: oscar,
    cat: "Website",
    t: "Oscar Hospital",
    d: "Premium healthcare website concept for Oscar Hospital featuring modern UI, hospital overview, departments, doctors showcase, appointment booking, and seamless patient experience designed to connect patients easily.",
    year: "2025",
    size: "md",
    url: "https://oscar-hospital.vercel.app/",
  },
  {
    img: firmilenge,
    cat: "Website",
    t: "Little Break",
    d: "A premium restaurant website concept for Fir Milenge, designed to showcase its luxurious ambience, signature vegetarian cuisine, and memorable dining experience with modern, responsive UI and interactive sections.",
    year: "2025",
    size: "md",
    url: "https://fir-milenge.vercel.app",
  },
  {
    img: topstar,
    cat: "Web / SaaS",
    t: "Verdant Dashboard",
    d: "Top Star Restaurant is a modern restaurant website concept built with Next.js, featuring authentic Mughlai & Chinese cuisine, an interactive menu, responsive design, smooth animations, and premium UI.",
    year: "2024",
    size: "lg",
    url: "https://top-star-restaurant.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hover: { scale: 1.03, transition: { duration: 0.4 } },
};

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-card overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-12 items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-800 mb-4">[ Selected Work ]</p>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              Featured<br />
              <span className="font-serif-display italic font-normal lowercase">projects</span>
            </h2>
          </div>
          <motion.div
            className="md:col-span-4 flex md:justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="#" className="story-link text-sm hover:text-emerald-800 transition-colors flex items-center gap-1 group">
              All projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-12 gap-y-16 gap-x-8 md:gap-x-12"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.t}
              variants={itemVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              className={`group flex flex-col ${p.size === "lg" ? "md:col-span-7" : "md:col-span-5"} ${
                i % 2 === 1 ? "md:mt-24" : ""
              }`}
            >
              {/* Image Container */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-2xl bg-muted aspect-[4/3] w-full"
              >
                <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <motion.div variants={imageVariants} className="relative w-full h-full overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.t}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <span className="absolute top-5 left-5 text-xs uppercase tracking-[0.2em] bg-emerald-800 text-white backdrop-blur px-4 py-2 rounded-full z-20 font-medium">
                  {p.cat}
                </span>
                
                {/* Reveal Arrow */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    hover: { opacity: 1, scale: 1 },
                  }}
                  className="absolute bottom-5 right-5 p-4 rounded-full bg-emerald-800 text-white z-20 pointer-events-none transition-all duration-300 shadow-xl"
                >
                  <ArrowUpRight size={24} />
                </motion.div>
              </a>

              {/* Text & Content Block */}
              <div className="flex flex-col mt-7 flex-grow">
                {/* Title & Year */}
                <div className="flex items-baseline justify-between mb-3">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                    <h3 className="font-display text-3xl md:text-4xl uppercase text-foreground group-hover:text-emerald-800 transition-colors duration-300">
                      {p.t}
                    </h3>
                  </a>
                  <span className="text-sm text-muted-foreground font-mono">{p.year}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground max-w-lg text-base leading-relaxed flex-grow">
                  {p.d}
                </p>

                {/* Animated Border Line */}
                <div className="relative h-[2px] w-full mt-6 bg-border overflow-hidden">
                  <motion.div 
                    variants={{
                      hidden: { x: '-100%' },
                      hover: { x: '0%' }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 bg-emerald-800"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
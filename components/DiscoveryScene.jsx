"use client";

import { motion } from "framer-motion";

export default function DiscoveryScene() {
  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center overflow-hidden select-none">
      {/* Ambient Outer Glow Layer */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-emerald-200/40 blur-[80px] z-0"
      />

      {/* Main Micro-Universe Floating Container */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full flex items-center justify-center z-10"
      >
        {/* SVG Canvas for precise vector line paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Constellation Discovery Path 1 */}
          <motion.path
            d="M 100 400 Q 200 250 350 320 T 550 200"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -40 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          {/* Constellation Discovery Path 2 */}
          <motion.path
            d="M 50 200 Q 250 100 300 280 T 500 450"
            fill="none"
            stroke="url(#gradient-line-subtle)"
            strokeWidth="1"
            strokeDasharray="2 4"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 40 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065f46" stopOpacity="0" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient-line-subtle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Floating Abstract Island */}
        <div className="absolute bottom-[30%] w-64 h-16 md:w-80 md:h-20 bg-gradient-to-r from-emerald-800 via-emerald-950 to-neutral-900 rounded-[50%] shadow-2xl flex items-center justify-center">
          {/* Island Depth Layer */}
          <div className="absolute -top-1 inset-x-2 h-full bg-emerald-700/40 rounded-[50%] blur-[2px]" />
          
          {/* Small Explorer Silhouette & Telescope Setup */}
          <div className="absolute -top-14 left-[35%] w-10 h-16 flex flex-col items-center">
            {/* Telescope */}
            <motion.div 
              animate={{ rotate: [-3, 5, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "bottom left" }}
              className="w-8 h-1.5 bg-neutral-800 rounded-full relative ml-4 mb-1 origin-bottom-left"
            >
              {/* Telescope Lens Glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-300 rounded-full blur-[1px] animate-ping" />
            </motion.div>
            {/* Explorer Silhouette */}
            <div className="w-3 h-3.5 bg-neutral-900 rounded-full" />
            <div className="w-4 h-8 bg-neutral-900 rounded-t-xl -mt-1" />
          </div>
        </div>

        {/* Premium Floating Ideas / Luxury Light Orbs */}
        {/* Core Idea Orb 1 */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[25%] w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)]"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-900/10 backdrop-blur-sm" />
        </motion.div>

        {/* Hidden Idea Orb 2 */}
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] left-[20%] w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-200 opacity-80 shadow-[0_0_15px_rgba(4,120,87,0.4)]"
        />

        {/* Abstract Geometrical Innovation Shape */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[40%] w-12 h-12 border border-emerald-800/30 rounded-lg opacity-40 mix-blend-multiply"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[30%] w-16 h-16 border border-emerald-600/20 rounded-full border-dashed opacity-60"
        />

        {/* Local Micro Particle System */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            style={{
              top: `${25 + Math.random() * 40}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
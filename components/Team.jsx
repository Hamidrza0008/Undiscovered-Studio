"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  { img: "/team-1.jpg", name: "Maya Okafor", role: "Creative Director" },
  { img: "/team-2.jpg", name: "Leo Castellanos", role: "Design Lead" },
  { img: "/team-3.jpg", name: "Priya Anand", role: "Head of Engineering" },
  { img: "/team-4.jpg", name: "Jonas Weber", role: "Strategy Partner" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-20 gap-6">
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
            The<br />
            <span className="font-serif-display italic font-normal lowercase">studio</span>
          </h2>
          <p className="hidden md:block max-w-sm text-muted-foreground">
            A senior, hand-picked team across four continents — assembled per engagement, never templated.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-4 font-display text-xl md:text-2xl uppercase">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

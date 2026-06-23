"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="estudio" ref={ref} className="relative overflow-hidden">
      {/* Full-width statement — Locomotive style */}
      <div className="border-t border-border px-6 py-24 md:px-12 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="font-display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[1.2] font-medium tracking-tight">
            Design e código são apenas ferramentas de expressão. O que nos
            diferencia — e diferencia nosso trabalho — são as{" "}
            <span className="text-accent">pessoas</span>.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg">
            Somos um grupo enxuto de pensadores criativos que criam identidades
            de marca e experiências digitais sob medida — feitas para você e seu
            público.
          </p>
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="border-r border-b border-border px-6 py-12 text-center last:border-r-0 md:border-b-0 md:py-16"
            >
              <span className="number-display font-display text-5xl font-bold text-accent md:text-7xl">
                {stat.value}
              </span>
              <p className="mt-3 font-body text-xs tracking-widest text-muted uppercase md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynasty / timeline strip — Locomotive inspired */}
      <div className="overflow-hidden border-t border-border bg-surface py-8">
        <div
          className="flex w-max gap-16"
          style={{ animation: "marquee-left 40s linear infinite" }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="shrink-0 font-display text-lg font-bold tracking-tight text-foreground/20 uppercase md:text-2xl"
            >
              PRISMA® Studio 2024–∞ — Design · Dev · Digital
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

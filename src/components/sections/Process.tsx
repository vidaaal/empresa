"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { process } from "@/lib/data";

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="processo" ref={ref} className="px-6 py-24 md:px-12 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24"
      >
        <span className="font-body text-sm tracking-[0.3em] text-accent uppercase">
          Como trabalhamos
        </span>
        <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-bold tracking-tight">
          Nosso
          <br />
          processo<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <div className="space-y-0">
        {process.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group grid grid-cols-12 items-center gap-4 border-t border-border py-8 md:py-12"
          >
            <span className="number-display col-span-2 font-display text-3xl font-bold text-foreground/15 transition-colors group-hover:text-accent md:col-span-1 md:text-5xl">
              {step.step}
            </span>
            <h3 className="col-span-4 font-display text-xl font-bold tracking-tight md:col-span-3 md:text-3xl">
              {step.title}
            </h3>
            <p className="col-span-6 font-body text-sm leading-relaxed text-muted md:col-span-8 md:text-base">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

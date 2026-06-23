"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { featured } from "@/lib/data";

export default function Featured() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="font-body text-sm tracking-[0.3em] text-accent uppercase">
          Parcerias
        </span>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] font-bold tracking-tight">
          Engajamentos em destaque
        </h2>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-12">
        {/* Client list — Basic Agency drag style */}
        <div className="flex flex-col gap-0 md:col-span-5">
          {featured.map((item, i) => (
            <button
              key={item.client}
              onClick={() => setActive(i)}
              className={`group flex items-center justify-between border-b border-border py-6 text-left transition-colors ${
                active === i ? "text-foreground" : "text-muted"
              }`}
              data-cursor="pointer"
            >
              <span className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {item.client}
              </span>
              <span
                className={`font-body text-sm transition-colors ${
                  active === i ? "text-accent" : "text-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="flex flex-col justify-center md:col-span-7 md:pl-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-body text-lg leading-relaxed text-muted md:text-xl">
                {featured[active].description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {featured[active].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-4 py-1.5 font-body text-xs tracking-wide text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="link-hover mt-8 inline-block font-body text-sm tracking-widest text-foreground uppercase"
                data-cursor="pointer"
              >
                Ver case completo →
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

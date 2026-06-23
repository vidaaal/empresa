"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="servicos" ref={ref} className="px-6 py-24 md:px-12 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24"
      >
        <span className="font-body text-sm tracking-[0.3em] text-accent uppercase">
          O que fazemos
        </span>
        <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-bold tracking-tight">
          Lideramos
          <br />
          pelo design<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <div className="grid gap-0 border-t border-border md:grid-cols-12">
        {/* Service tabs — Fantasy.co numbered style */}
        <div className="border-border md:col-span-4 md:border-r">
          {services.map((service, i) => (
            <button
              key={service.number}
              onClick={() => setActiveIndex(i)}
              className={`group flex w-full items-start gap-6 border-b border-border px-0 py-8 text-left transition-colors md:px-8 ${
                activeIndex === i ? "text-foreground" : "text-muted"
              }`}
              data-cursor="pointer"
            >
              <span
                className={`number-display font-display text-3xl font-bold transition-colors md:text-5xl ${
                  activeIndex === i ? "text-accent" : "text-foreground/20"
                }`}
              >
                {service.number}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-1 font-body text-sm text-muted">
                  {service.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <div className="flex flex-col justify-center py-8 md:col-span-8 md:px-16 md:py-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="number-display font-display text-[8rem] leading-none font-bold text-foreground/5 md:text-[12rem]">
                {services[activeIndex].number}
              </span>
              <p className="mt-4 max-w-lg font-body text-lg leading-relaxed text-muted md:text-xl">
                {services[activeIndex].description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {services[activeIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-4 py-1.5 font-body text-xs tracking-wide text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

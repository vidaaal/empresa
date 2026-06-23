"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { awards } from "@/lib/data";

export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const text =
    "PRISMA® é um estúdio global de design e desenvolvimento que constrói produtos, plataformas e experiências digitais que transformam visão em valor real.";

  return (
    <section ref={ref} className="px-6 py-24 md:px-12 md:py-40">
      {/* Awards strip — Basic Agency style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16 flex flex-wrap gap-4 md:mb-24"
      >
        {awards.map((award, i) => (
          <span
            key={award}
            className="rounded-full border border-border px-4 py-2 font-body text-xs tracking-wide text-muted md:text-sm"
          >
            <span className="mr-2 text-accent">●</span>
            {award}
          </span>
        ))}
      </motion.div>

      {/* Big statement */}
      <div className="max-w-6xl">
        <motion.p
          className="font-display text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.15] font-medium tracking-tight"
        >
          {text.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="mr-[0.3em] inline-block"
              initial={{ opacity: 0.15, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.03,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              {word === "PRISMA®" ? (
                <span className="text-accent">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12"
      >
        <a
          href="#trabalhos"
          className="link-hover font-body text-sm tracking-widest text-accent uppercase"
          data-cursor="pointer"
        >
          Ver os trabalhos →
        </a>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { company } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["Criamos", "experiências", "digitais"];

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 md:px-12 md:pb-24"
    >
      <motion.div style={{ y, opacity }} className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-8 font-body text-sm tracking-[0.3em] text-muted uppercase md:mb-12"
        >
          {company.tagline}
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-bold tracking-tight">
          {words.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1.4 + i * 0.12,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
                {i === 1 && (
                  <span className="text-accent">.</span>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md font-body text-base leading-relaxed text-muted md:text-lg">
            Desde {company.founded}, ajudamos startups inovadoras e marcas
            premium a projetar, construir e lançar produtos que merecem ser
            comentados.
          </p>

          <a
            href="#trabalhos"
            className="group flex items-center gap-4"
            data-cursor="pointer"
          >
            <span className="font-body text-sm tracking-widest uppercase">
              Ver trabalhos
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative gradient orb */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[100px]" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-muted uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-foreground/30"
        />
      </motion.div>
    </section>
  );
}

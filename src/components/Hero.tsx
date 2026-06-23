"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32">
      <div className="mesh" />

      <motion.div style={{ opacity, y }} className="wrap relative z-10 w-full">
        <p className="label mb-8 text-[var(--lime)]">{site.line}</p>

        <h1 className="headline max-w-[14ch] text-[clamp(3.5rem,11vw,8.5rem)] text-[var(--fg)]">
          Fazemos
          <br />
          interfaces
          <span className="text-[var(--lime)]">.</span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 border-t border-[var(--border)] pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Estúdio de design e engenharia. Ajudamos marcas ambiciosas a projetar,
            construir e lançar produtos digitais que importam.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="btn btn-lime">
              Ver trabalhos <span>↗</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Iniciar projeto
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="label">scroll</p>
        <motion.div
          animate={{ height: [24, 40, 24] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto mt-2 w-px bg-[var(--muted)]"
        />
      </motion.div>
    </section>
  );
}

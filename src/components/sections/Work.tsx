"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="trabalhos" ref={ref} className="py-24 md:py-40">
      <div className="mb-16 px-6 md:mb-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="font-body text-sm tracking-[0.3em] text-accent uppercase">
              Portfólio
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-bold tracking-tight">
              Trabalhos
              <br />
              selecionados<span className="text-accent">.</span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm text-muted md:text-base">
            Cada projeto é um estudo de caso — desenvolvido com cuidado e
            atenção aos detalhes.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery — Obys style */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-4 md:gap-8 md:px-12"
        data-lenis-prevent
      >
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href="#"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="project-card group shrink-0"
            data-cursor="pointer"
          >
            <div className="relative h-[400px] w-[300px] overflow-hidden md:h-[500px] md:w-[380px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="project-image object-cover"
                sizes="380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Number overlay — Obys style */}
              <span className="number-display absolute top-6 left-6 font-display text-6xl font-bold text-white/20 md:text-8xl">
                {project.id}
              </span>

              <div className="absolute right-0 bottom-0 left-0 p-6">
                <span className="font-body text-xs tracking-widest text-accent uppercase">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 font-body text-xs text-white/60">
                  {project.services}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Grid view — secondary layout */}
      <div className="mt-16 hidden grid-cols-2 gap-px bg-border lg:grid lg:grid-cols-4">
        {projects.slice(0, 4).map((project) => (
          <a
            key={`grid-${project.id}`}
            href="#"
            className="group relative aspect-square overflow-hidden bg-surface"
            data-cursor="pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              sizes="25vw"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <span className="number-display font-display text-4xl font-bold text-white/30">
                {project.id}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

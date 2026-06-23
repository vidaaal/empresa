"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { projects, workFilters, projectFilters } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState<(typeof workFilters)[number]>("Todos");

  const filtered =
    filter === "Todos"
      ? projects
      : projects.filter((p) => projectFilters[p.id] === filter);

  const layoutPattern = [
    "md:col-span-7 md:row-span-2",
    "md:col-span-5",
    "md:col-span-5",
    "md:col-span-7",
    "md:col-span-6",
    "md:col-span-6",
    "md:col-span-5",
    "md:col-span-7",
  ];

  return (
    <Section id="trabalhos">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Trabalhos recentes</SectionLabel>
            <SectionTitle>Projetos que contam histórias</SectionTitle>
          </div>
          <a href="#contato" className="link-soft shrink-0">
            Iniciar um projeto <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {workFilters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`pill ${filter === item ? "pill-active" : "pill-muted"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:auto-rows-[180px] md:grid-cols-12 md:gap-5">
          {filtered.map((project, i) => (
            <motion.a
              key={project.id}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className={`project-card group relative overflow-hidden ${layoutPattern[i % layoutPattern.length]}`}
            >
              <div className="image-shell relative h-full min-h-[260px] shadow-[0_20px_60px_-30px_rgba(28,28,26,0.25)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-5 md:p-6">
                  <span className="rounded-full bg-white/15 px-3 py-1 font-body text-[12px] font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-white md:text-[1.75rem]">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-body text-[14px] text-white/75">
                    {project.services}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

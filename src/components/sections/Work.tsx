"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { projects, workFilters, projectFilters } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";
import TiltCard from "@/components/ui/TiltCard";

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState<(typeof workFilters)[number]>("Todos");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered =
    filter === "Todos"
      ? projects
      : projects.filter((p) => projectFilters[p.id] === filter);

  const featured = projects[0];

  return (
    <Section id="trabalhos" size="wide">
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Trabalhos recentes</SectionLabel>
            <SectionTitle>Projetos que movem cultura</SectionTitle>
          </div>
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Featured hero project */}
        <TiltCard className="mb-6 glow-card">
          <a
            href="#"
            className="project-card group relative block overflow-hidden rounded-[var(--radius-xl)]"
            onMouseEnter={() => setHovered(featured.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative aspect-[16/10] md:aspect-[21/9]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="project-image object-cover"
                sizes="100vw"
                priority
              />
              <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="card-content absolute right-0 bottom-0 left-0 flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-10">
                <div>
                  <span className="rounded-full bg-accent-bright px-3 py-1 font-body text-[12px] font-bold text-dark">
                    Destaque
                  </span>
                  <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] text-white/70">{featured.services}</p>
                </div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white backdrop-blur-md transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </div>
            </div>
          </a>
        </TiltCard>

        {/* Horizontal snap scroll */}
        <div
          ref={scrollRef}
          className="no-scrollbar snap-x-mandatory -mx-4 flex gap-5 overflow-x-auto px-4 pb-4 md:-mx-0 md:px-0"
          data-lenis-prevent
        >
          {filtered.slice(1).map((project, i) => (
            <motion.a
              key={project.id}
              href="#"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.7 }}
              className="project-card snap-item group w-[82vw] shrink-0 md:w-[420px]"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="image-shell relative aspect-[3/4] shadow-[0_30px_80px_-30px_rgba(18,18,16,0.3)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image object-cover"
                  sizes="420px"
                />
                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="card-content absolute right-0 bottom-0 left-0 p-6">
                  <span className="font-body text-[12px] font-semibold tracking-widest text-accent-bright uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-body text-[14px] text-white/65">{project.services}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {hovered && (
          <motion.p
            key={hovered}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-body text-[14px] font-medium text-muted"
          >
            {projects.find((p) => p.id === hovered)?.title} — arraste para ver mais →
          </motion.p>
        )}
      </motion.div>
    </Section>
  );
}

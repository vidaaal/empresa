"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/site";

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const dragging = useRef(false);
  const start = useRef({ x: 0, scroll: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onDown = (e: MouseEvent) => {
      dragging.current = true;
      start.current = { x: e.clientX, scroll: wrap.scrollLeft };
    };
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      wrap.scrollLeft = start.current.scroll - (e.clientX - start.current.x);
    };
    const onUp = () => {
      dragging.current = false;
    };

    wrap.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      wrap.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <section id="work" ref={ref} className="section bg-[var(--bg-soft)] text-[var(--fg-dark)]">
      <div className="wrap mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label mb-3 text-[var(--muted)]">Trabalhos</p>
          <h2 className="headline text-[clamp(2.5rem,6vw,4.5rem)]">
            Projetos selecionados
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
          Arraste para explorar — cada projeto é craft do início ao fim.
        </p>
      </div>

      <motion.div
        ref={wrapRef}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="work-track-wrap pl-[max(1.25rem,calc((100%-1320px)/2+1.25rem))]"
        data-lenis-prevent
      >
        <div ref={trackRef} className="work-track pr-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group relative block w-[min(78vw,420px)] shrink-0 select-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-black/5">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="img-zoom object-cover"
                  sizes="420px"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-5 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {p.year}
                </div>
                <div className="absolute right-0 bottom-0 left-0 p-6">
                  <p className="text-xs font-semibold tracking-widest text-[var(--lime)] uppercase">
                    {p.type}
                  </p>
                  <h3 className="headline mt-2 text-3xl text-white">{p.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

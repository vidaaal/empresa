"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services, clients } from "@/lib/site";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const doubled = [...clients, ...clients];

  return (
    <section id="services" ref={ref} className="section">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="label mb-3">Serviços</p>
            <h2 className="headline text-[clamp(2.5rem,6vw,4.5rem)]">
              O que fazemos
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Três disciplinas, uma visão — para que marca, produto e tecnologia
            falem a mesma língua.
          </p>
        </motion.div>

        <div className="border-b border-[var(--border)]">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group grid gap-4 border-t border-[var(--border)] py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[80px_1fr_2fr] md:items-center md:py-10"
            >
              <span className="headline text-4xl text-[var(--muted)] transition-colors group-hover:text-[var(--lime)] md:text-5xl">
                {s.id}
              </span>
              <h3 className="headline text-2xl md:text-3xl">{s.name}</h3>
              <p className="text-base text-[var(--muted)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-[var(--border)] py-5">
        <div className="marquee-track gap-16 px-4">
          {doubled.map((c, i) => (
            <span key={`${c}-${i}`} className="headline shrink-0 text-4xl text-white/15 md:text-5xl">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

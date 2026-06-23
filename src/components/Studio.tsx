"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/site";

export default function Studio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="studio" ref={ref} className="section bg-[var(--bg-soft)] text-[var(--fg-dark)]">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="label mb-4">Estúdio</p>
          <h2 className="headline text-[clamp(2rem,5vw,3.75rem)] leading-[1.05]">
            Design e código são ferramentas.
            <br />
            <span className="text-[var(--fg-dark)]/40">Pessoas fazem a diferença.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            Time enxuto, senior, obcecado por craft. Cada projeto é tratado como
            caso único — sem template, sem atalho.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="rounded-3xl border border-[var(--border-dark)] bg-white p-6 text-center md:p-8"
            >
              <p className="headline text-4xl md:text-5xl">{s.v}</p>
              <p className="mt-2 text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
                {s.l}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

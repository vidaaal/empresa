"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clients } from "@/lib/data";

export default function ClientRoster() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const doubled = [...clients, ...clients, ...clients];

  return (
    <section className="section-padding-sm !pt-0 !pb-8">
      <div className="section-container max-w-[1400px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface/60 py-6 backdrop-blur-sm"
        >
          <p className="mb-5 text-center font-body text-[12px] font-semibold tracking-[0.18em] text-muted uppercase">
            Marcas que confiam em nós
          </p>
          <div
            className="flex w-max gap-14 md:gap-24"
            style={{ animation: "marquee-left 50s linear infinite" }}
          >
            {doubled.map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="shrink-0 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground/25 transition-colors hover:text-foreground/60 md:text-3xl"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

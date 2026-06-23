"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clients } from "@/lib/data";
import Section, { SectionLabel } from "@/components/ui/Section";

export default function ClientRoster() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const doubled = [...clients, ...clients];

  return (
    <Section className="section-padding-sm !pt-0">
      <SectionLabel>Clientes</SectionLabel>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="soft-card overflow-hidden px-2 py-5"
      >
        <div
          className="flex w-max gap-10 md:gap-16"
          style={{ animation: "marquee-left 45s linear infinite" }}
        >
          {doubled.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="shrink-0 font-display text-xl font-semibold tracking-[-0.02em] text-foreground/35 md:text-2xl"
            >
              {client}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

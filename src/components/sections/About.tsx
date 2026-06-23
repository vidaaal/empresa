"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="estudio" className="bg-surface-soft/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-[820px] text-center">
          <SectionLabel>Nosso propósito</SectionLabel>
          <SectionTitle>
            Design e código são ferramentas — o que diferencia nosso trabalho
            são as pessoas.
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-[640px] font-body text-[17px] leading-[1.7] text-muted">
            Somos um time enxuto de pensadores criativos que criam identidades
            e experiências digitais sob medida, com proximidade e cuidado em cada
            etapa.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
              className="soft-card px-5 py-6 text-center md:px-6 md:py-8"
            >
              <p className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-accent">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-[13px] font-medium text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

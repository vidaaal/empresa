"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { process } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="processo" className="bg-surface-soft/40">
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
        <SectionLabel>Como trabalhamos</SectionLabel>
        <SectionTitle className="mb-12">Do insight ao lançamento</SectionTitle>

        <div className="relative">
          <div className="absolute top-8 right-0 left-8 hidden h-px bg-border md:block" />

          <div className="grid gap-5 md:grid-cols-5">
            {process.map((step, i) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                className="soft-card relative p-6 transition-transform duration-500 hover:-translate-y-2 md:p-7"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-body text-[13px] font-bold text-white">
                  {step.step}
                </div>
                <h3 className="font-display text-[1.15rem] font-semibold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-[14px] leading-[1.65] text-muted">
                  {step.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

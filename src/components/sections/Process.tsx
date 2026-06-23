"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { process } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="processo">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SectionLabel>Como trabalhamos</SectionLabel>
        <SectionTitle className="mb-10 md:mb-12">Nosso processo</SectionTitle>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="soft-card p-6 md:p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[13px] font-semibold text-white">
                  {step.step}
                </span>
                <h3 className="font-display text-[1.2rem] font-semibold tracking-[-0.02em]">
                  {step.title}
                </h3>
              </div>
              <p className="font-body text-[15px] leading-[1.65] text-muted">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { awards } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="section-padding-sm">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="soft-card mx-auto max-w-[980px] px-6 py-10 md:px-10 md:py-14"
      >
        <SectionLabel>Sobre o estúdio</SectionLabel>
        <SectionTitle className="max-w-[760px]">
          Construímos marcas, produtos e experiências digitais com a mesma
          narrativa em cada ponto de contato.
        </SectionTitle>

        <p className="mt-6 max-w-[680px] font-body text-[17px] leading-[1.7] text-muted">
          {awards[0]} · {awards[2]}. Unimos estratégia, design e engenharia
          para transformar visão em valor real — com processo cuidadoso e
          parceria de perto com cada cliente.
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {awards.slice(0, 3).map((award) => (
            <span key={award} className="pill pill-muted">
              {award}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="servicos" className="bg-surface-soft/70">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-10 md:mb-14">
          <SectionLabel>Serviços</SectionLabel>
          <SectionTitle className="max-w-[700px]">
            Criamos marcas, produtos, sites e campanhas.
          </SectionTitle>
          <p className="mt-5 max-w-[620px] font-body text-[17px] leading-[1.7] text-muted">
            Atuamos em branding, produto e marketing para que cada touchpoint
            funcione junto e conte a mesma história.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {services.map((service, i) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              className="soft-card group flex h-full flex-col p-6 transition-transform duration-500 hover:-translate-y-1 md:p-7"
            >
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft font-body text-[13px] font-semibold text-accent">
                {service.number}
              </span>
              <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.02em]">
                {service.title}
              </h3>
              <p className="mt-1 font-body text-[14px] font-medium text-muted">
                {service.subtitle}
              </p>
              <p className="mt-4 flex-1 font-body text-[15px] leading-[1.65] text-muted">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="pill pill-muted !px-3 !py-1.5 !text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <a href="#contato" className="link-soft">
            Ver nossas ofertas <span aria-hidden>→</span>
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

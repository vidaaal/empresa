"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { services } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";
import MagneticButton from "@/components/ui/MagneticButton";

const serviceImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <Section id="servicos" className="bg-surface-soft/50">
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Serviços</SectionLabel>
            <SectionTitle>
              Fazemos marcas, produtos, sites e campanhas.
            </SectionTitle>
          </div>
          <p className="font-body text-[17px] leading-[1.75] text-muted">
            Design em branding, produto e marketing — para que cada touchpoint
            funcione junto e conte a mesma história.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-3">
            {services.map((service, i) => (
              <button
                key={service.number}
                onClick={() => setActive(i)}
                className={`rounded-[var(--radius-lg)] border p-5 text-left transition-all duration-500 md:p-6 ${
                  active === i
                    ? "border-accent/30 bg-surface shadow-[0_24px_60px_-24px_rgba(18,18,16,0.2)]"
                    : "border-transparent bg-transparent hover:bg-surface/60"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-body text-[13px] font-bold transition-colors ${
                      active === i
                        ? "bg-accent text-white"
                        : "bg-surface-soft text-muted"
                    }`}
                  >
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">
                      {service.title}
                    </h3>
                    <p className="mt-0.5 font-body text-[14px] text-muted">
                      {service.subtitle}
                    </p>
                    <AnimatePresence>
                      {active === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 overflow-hidden font-body text-[15px] leading-[1.65] text-muted"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            ))}
            <MagneticButton href="#contato" variant="ghost" className="mt-2 w-fit">
              Ver ofertas completas ↗
            </MagneticButton>
          </div>

          <div className="relative min-h-[400px] overflow-hidden rounded-[var(--radius-xl)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={serviceImages[active]}
                  alt={services[active].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <div className="flex flex-wrap gap-2">
                    {services[active].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/15 px-3 py-1 font-body text-[12px] font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { featured } from "@/lib/data";
import { testimonials } from "@/lib/data-extra";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";
import TiltCard from "@/components/ui/TiltCard";

export default function Featured() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section>
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
        <SectionLabel>Parcerias</SectionLabel>
        <SectionTitle className="mb-12">Engajamentos em destaque</SectionTitle>

        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {featured.map((item, i) => (
            <TiltCard key={item.client}>
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="glow-card soft-card flex h-full flex-col p-7 md:p-8"
              >
                <h3 className="font-display text-[1.6rem] font-semibold tracking-[-0.02em]">
                  {item.client}
                </h3>
                <p className="mt-4 flex-1 font-body text-[15px] leading-[1.7] text-muted">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="pill pill-muted !px-3 !py-1.5 !text-[12px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </TiltCard>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-[var(--radius-lg)] border border-border bg-surface-soft/80 p-7 md:p-8"
            >
              <p className="font-display text-[1.35rem] leading-[1.45] font-medium tracking-[-0.02em] text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-body text-[14px] font-semibold">{t.author}</p>
                <p className="font-body text-[13px] text-muted">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

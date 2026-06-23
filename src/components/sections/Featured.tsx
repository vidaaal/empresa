"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { featured } from "@/lib/data";
import Section, { SectionLabel, SectionTitle } from "@/components/ui/Section";

export default function Featured() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SectionLabel>Parcerias</SectionLabel>
        <SectionTitle className="mb-10 md:mb-12">
          Engajamentos em destaque
        </SectionTitle>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((item, i) => (
            <motion.article
              key={item.client}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="soft-card flex h-full flex-col p-6 md:p-7"
            >
              <h3 className="font-display text-[1.5rem] font-semibold tracking-[-0.02em]">
                {item.client}
              </h3>
              <p className="mt-3 flex-1 font-body text-[15px] leading-[1.65] text-muted">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="pill pill-muted !px-3 !py-1.5 !text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { insights } from "@/lib/data-extra";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TextReveal from "@/components/ui/TextReveal";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <section id="estudio" className="dark-section section-padding">
        <div className="mesh-bg">
          <div className="mesh-orb mesh-orb-2" />
        </div>
        <div ref={ref} className="section-container relative z-10 max-w-[1100px]">
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
            <p className="mb-4 font-body text-[13px] font-semibold tracking-wide text-white/50">
              Nosso propósito
            </p>
            <TextReveal
              as="h2"
              text="Design e código são ferramentas. O que diferencia nosso trabalho são as pessoas."
              highlight={["pessoas."]}
              className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#f5f2ea]"
            />

            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:p-7"
                >
                  <AnimatedCounter
                    value={stat.value}
                    className="font-display text-4xl font-semibold tracking-[-0.03em] text-accent-bright md:text-5xl"
                  />
                  <p className="mt-2 font-body text-[13px] font-medium text-white/50">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insights / News */}
      <section className="section-padding-sm">
        <div className="section-container max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-body text-[13px] font-semibold text-muted">
                News & Noteworthy
              </p>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em]">
                O que estamos pensando
              </h2>
            </div>
            <a href="#" className="link-soft">
              Ver tudo <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {insights.map((item, i) => (
              <motion.a
                key={item.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group soft-card block p-6 transition-transform duration-500 hover:-translate-y-1 md:p-7"
              >
                <span className="pill pill-muted !px-3 !py-1 !text-[11px]">
                  {item.category} · {item.readTime}
                </span>
                <h3 className="mt-4 font-display text-[1.2rem] leading-[1.35] font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

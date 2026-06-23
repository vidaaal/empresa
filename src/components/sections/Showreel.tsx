"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Showreel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="section-padding-sm">
      <div className="section-container max-w-[1400px]">
        <motion.div style={{ scale, y }} ref={videoRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[16/9] overflow-hidden rounded-[var(--radius-xl)] md:aspect-[21/9]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.8s] group-hover:scale-105"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-dark/70 via-dark/30 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                className="group/btn relative flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-white/20"
                aria-label="Play showreel"
              >
                <span className="absolute inset-0 rounded-full border border-white/40" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="mt-5 font-body text-[13px] font-semibold tracking-[0.2em] text-white/70 uppercase">
                Assistir showreel
              </p>
              <p className="mt-2 font-display text-3xl font-semibold text-white md:text-4xl">
                PRISMA® 2024–∞
              </p>
            </div>

            <div className="absolute top-6 left-6 rounded-full bg-white/10 px-4 py-2 font-body text-[12px] font-medium text-white backdrop-blur-md">
              02:47
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <TextReveal
            as="h2"
            text="Onde criatividade encontra engenharia de verdade."
            highlight={["engenharia"]}
            className="max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.03em]"
          />
          <MagneticButton href="#trabalhos" variant="ghost">
            Explorar portfólio ↗
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

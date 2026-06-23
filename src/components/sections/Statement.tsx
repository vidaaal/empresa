"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { awards } from "@/lib/data";
import TextReveal from "@/components/ui/TextReveal";

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="dark-section section-padding">
      <div className="mesh-bg">
        <div className="mesh-orb mesh-orb-1 !opacity-60" />
        <div className="mesh-orb mesh-orb-3 !opacity-50" />
      </div>

      <div ref={ref} className="section-container relative z-10 max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {awards.map((award) => (
            <span
              key={award}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-body text-[12px] font-medium text-white/70 backdrop-blur-sm"
            >
              {award}
            </span>
          ))}
        </motion.div>

        <TextReveal
          as="h2"
          text="Construímos marcas, produtos e experiências que transformam visão em valor real."
          highlight={["valor", "real."]}
          className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-[#f5f2ea]"
          delay={0.1}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-8 max-w-2xl font-body text-[17px] leading-[1.75] text-white/55"
        >
          Unimos estratégia, design e tecnologia em uma única narrativa — para
          que cada ponto de contato pareça inevitável, não decorativo.
        </motion.p>
      </div>
    </section>
  );
}

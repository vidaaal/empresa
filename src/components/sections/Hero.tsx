"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { company } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="section-padding pt-36 md:pt-44">
      <div className="section-container max-w-[1400px]">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div style={{ y }} className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 font-body text-[15px] font-medium text-muted"
            >
              {company.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-foreground"
            >
              Somos um estúdio digital onde criatividade encontra tecnologia.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#trabalhos"
                className="rounded-full bg-foreground px-6 py-3 font-body text-[14px] font-medium text-white transition-transform hover:scale-[1.02]"
              >
                Ver todos os trabalhos
              </a>
              <a href="#servicos" className="link-soft">
                Conhecer serviços
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="image-shell relative aspect-[4/5] overflow-hidden shadow-[0_40px_100px_-40px_rgba(28,28,26,0.28)] md:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                alt="Estúdio digital"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-5 left-5 rounded-[20px] bg-white/90 p-4 backdrop-blur-md">
                <p className="font-body text-[13px] font-medium text-muted">
                  Desde {company.founded}
                </p>
                <p className="mt-1 font-display text-lg font-semibold tracking-[-0.02em]">
                  Design premium, código e experiências que conectam.
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 hidden h-20 w-20 rounded-full bg-accent/10 md:block" />
            <div className="absolute -right-3 bottom-16 hidden h-14 w-14 rounded-[18px] bg-surface-soft md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

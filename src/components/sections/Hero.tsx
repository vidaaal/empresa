"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { company } from "@/lib/data";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const floatingImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80",
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3ce8?w=600&q=80",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="mesh-bg">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
      </div>

      <div className="section-container relative z-10 max-w-[1400px]">
        <motion.div style={{ opacity, scale }} className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <motion.div style={{ y: yText }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
              </span>
              <span className="font-body text-[13px] font-medium text-muted">
                {company.tagline}
              </span>
            </motion.div>

            <TextReveal
              as="h1"
              text="Criamos experiências digitais que as pessoas sentem."
              highlight={["experiências", "sentem."]}
              className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.035em]"
              delay={0.3}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-7 max-w-xl font-body text-[17px] leading-[1.75] text-muted md:text-lg"
            >
              Estúdio onde{" "}
              <span className="text-serif-italic text-foreground">design premium</span>,
              engenharia e estratégia convergem — para marcas que querem sair do
              óbvio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#trabalhos" variant="primary">
                Ver trabalhos
                <span aria-hidden>↗</span>
              </MagneticButton>
              <MagneticButton href="#contato" variant="outline">
                Iniciar projeto
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-14 flex flex-wrap gap-8 border-t border-border/80 pt-8"
            >
              {[
                { n: "50+", l: "Projetos" },
                { n: "12", l: "Países" },
                { n: "98%", l: "Satisfação" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl font-semibold tracking-[-0.03em]">{s.n}</p>
                  <p className="mt-0.5 font-body text-[13px] font-medium text-muted">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yImg }} className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div className="relative aspect-[4/5] w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="image-shell absolute inset-0 z-10 shadow-[0_50px_120px_-40px_rgba(18,18,16,0.35)]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80"
                  alt="Experiência digital"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute right-5 bottom-5 left-5 rounded-[24px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                  <p className="font-body text-[12px] font-semibold tracking-widest text-white/70 uppercase">
                    Showreel 2024
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    Design · Dev · Digital
                  </p>
                </div>
              </motion.div>

              {floatingImages.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.8 }}
                  className={`image-shell absolute z-20 w-[38%] shadow-[0_24px_60px_-20px_rgba(18,18,16,0.4)] ${
                    i === 0
                      ? "-top-6 -left-4 md:-left-10"
                      : i === 1
                        ? "-right-2 top-1/4 md:-right-8"
                        : "-bottom-4 left-1/4 !w-[42%]"
                  }`}
                  style={{ animation: `float ${5 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
                >
                  <div className="relative aspect-square">
                    <Image src={src} alt="" fill className="object-cover" sizes="200px" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-body text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-10 w-px bg-foreground/25"
        />
      </motion.div>
    </section>
  );
}

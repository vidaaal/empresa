"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Showreel() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={ref} className="relative px-6 py-12 md:px-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[16/9] w-full overflow-hidden bg-surface md:aspect-[21/9]"
      >
        {/* Cinematic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#0a0a0a] to-[#001a1a]" />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-accent/30 blur-[100px]"
            style={{ animation: "pulse 4s ease-in-out infinite" }}
          />
          <div
            className="absolute right-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-accent/20 blur-[80px]"
            style={{ animation: "pulse 4s ease-in-out infinite 2s" }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <button
            onClick={() => setPlaying(!playing)}
            className="group flex h-20 w-20 items-center justify-center rounded-full border border-foreground/20 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-accent hover:bg-accent/10 md:h-28 md:w-28"
            data-cursor="pointer"
            aria-label="Play showreel"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 text-foreground transition-colors group-hover:text-accent"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          <p className="mt-6 font-body text-sm tracking-[0.3em] text-muted uppercase">
            Assistir Reel
          </p>
          <p className="mt-2 font-display text-2xl font-bold tracking-tight md:text-4xl">
            PRISMA® 2024–∞
          </p>
        </div>

        {/* Corner info — Basic Agency style */}
        <div className="absolute bottom-6 left-6 font-body text-xs tracking-widest text-muted uppercase md:bottom-8 md:left-8">
          Showreel
        </div>
        <div className="absolute right-6 bottom-6 font-body text-xs text-muted md:right-8 md:bottom-8">
          02:47
        </div>
      </motion.div>
    </section>
  );
}

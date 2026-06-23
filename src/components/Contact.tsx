"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/lib/site";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="section relative overflow-hidden">
      <div className="mesh" />
      <div className="wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="label mb-6">Contato</p>
          <h2 className="headline text-[clamp(3rem,10vw,7rem)]">
            Vamos criar
            <br />
            algo <span className="text-[var(--lime)]">juntos</span>
            <span className="text-[var(--lime)]">.</span>
          </h2>

          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-block headline text-[clamp(1.5rem,4vw,3rem)] text-[var(--fg)] transition-opacity hover:opacity-60"
          >
            {site.email}
          </a>

          <p className="mt-6 text-[var(--muted)]">{site.city}</p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href={`mailto:${site.email}`} className="btn btn-lime">
              Enviar email ↗
            </a>
            {["Instagram", "LinkedIn", "Behance"].map((s) => (
              <a key={s} href="#" className="btn btn-ghost">
                {s}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

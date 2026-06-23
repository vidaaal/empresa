"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { company } from "@/lib/data";
import Section from "@/components/ui/Section";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${company.email}?subject=Contato&body=${encodeURIComponent(
      `Nome: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
  };

  return (
    <Section id="contato">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="glow-card overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface"
      >
        <div className="grid lg:grid-cols-2">
          <div className="dark-section relative p-8 md:p-12 lg:p-14">
            <div className="mesh-bg">
              <div className="mesh-orb mesh-orb-1 !opacity-50" />
            </div>
            <div className="relative z-10">
              <p className="mb-4 font-body text-[13px] font-semibold tracking-wide text-white/50">
                Vamos conversar
              </p>
              <TextReveal
                as="h2"
                text="Tem um projeto em mente?"
                className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-[#f5f2ea]"
              />
              <a
                href={`mailto:${company.email}`}
                className="mt-6 inline-block font-display text-2xl font-semibold text-accent-bright transition-opacity hover:opacity-80 md:text-3xl"
              >
                {company.email}
              </a>
              <p className="mt-6 max-w-sm font-body text-[15px] leading-[1.7] text-white/55">
                Conte o que você está construindo. Respondemos em até 2 dias úteis
                com próximos passos claros.
              </p>
              <div className="mt-10 space-y-4">
                <p className="font-body text-[14px] text-white/70">{company.location}</p>
                <div className="flex flex-wrap gap-4">
                  {["Instagram", "LinkedIn", "Behance"].map((s) => (
                    <a key={s} href="#" className="font-body text-[14px] text-white/60 hover:text-white">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-8 md:p-12 lg:p-14">
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label className="mb-2 block font-body text-[13px] font-semibold text-muted capitalize">
                  {field === "name" ? "Nome" : "Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  value={formState[field]}
                  onChange={(e) => setFormState({ ...formState, [field]: e.target.value })}
                  className="form-field"
                  placeholder={field === "name" ? "Seu nome" : "seu@email.com"}
                />
              </div>
            ))}
            <div>
              <label className="mb-2 block font-body text-[13px] font-semibold text-muted">
                Mensagem
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="form-field resize-none"
                placeholder="Conte sobre seu projeto, timeline e objetivos..."
              />
            </div>
            <MagneticButton type="submit" variant="primary" className="w-full md:w-auto">
              Enviar mensagem ↗
            </MagneticButton>
          </form>
        </div>
      </motion.div>
    </Section>
  );
}

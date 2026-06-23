"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { company } from "@/lib/data";
import Section, { SectionLabel } from "@/components/ui/Section";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${company.email}?subject=Contato via site&body=${encodeURIComponent(
      `Nome: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
  };

  return (
    <Section id="contato" className="section-padding-sm">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="soft-card overflow-hidden"
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b border-border bg-accent p-8 text-white md:p-10 lg:border-r lg:border-b-0">
            <SectionLabel className="!text-white/70">Vamos conversar</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.02em]">
              Tem um projeto em mente?
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.65] text-white/80">
              Conte um pouco sobre o que você está construindo. Respondemos em
              até 2 dias úteis.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-8 inline-block font-display text-xl font-semibold tracking-[-0.02em] text-white underline-offset-4 hover:underline"
            >
              {company.email}
            </a>

            <div className="mt-10 space-y-4">
              <div>
                <p className="font-body text-[12px] font-medium uppercase tracking-wide text-white/60">
                  Localização
                </p>
                <p className="mt-1 font-body text-[15px]">{company.location}</p>
              </div>
              <div>
                <p className="font-body text-[12px] font-medium uppercase tracking-wide text-white/60">
                  Redes
                </p>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["Instagram", "LinkedIn", "Behance", "Dribbble"].map((s) => (
                    <a key={s} href="#" className="font-body text-[14px] text-white/85 hover:text-white">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-8 md:p-10">
            <div>
              <label className="mb-2 block font-body text-[13px] font-medium text-muted">
                Nome
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="form-field"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="mb-2 block font-body text-[13px] font-medium text-muted">
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="form-field"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="mb-2 block font-body text-[13px] font-medium text-muted">
                Mensagem
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="form-field resize-none"
                placeholder="Conte sobre seu projeto..."
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3.5 font-body text-[14px] font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </motion.div>
    </Section>
  );
}

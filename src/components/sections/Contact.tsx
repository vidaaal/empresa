"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { company } from "@/lib/data";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
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
    <section id="contato" ref={ref} className="relative overflow-hidden">
      {/* Big CTA — Obys/Fantasy style */}
      <div className="border-t border-border px-6 py-24 md:px-12 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="font-body text-sm tracking-[0.3em] text-accent uppercase">
            Vamos conversar
          </span>
          <h2 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-bold tracking-tight">
            Tem um projeto
            <br />
            em mente<span className="text-accent">?</span>
          </h2>
          <a
            href={`mailto:${company.email}`}
            className="mt-8 inline-block font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-accent transition-opacity hover:opacity-70"
            data-cursor="pointer"
          >
            {company.email}
          </a>
        </motion.div>
      </div>

      {/* Contact form + info */}
      <div className="grid border-t border-border md:grid-cols-2">
        <div className="border-b border-border px-6 py-12 md:border-r md:border-b-0 md:px-12 md:py-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="mb-2 block font-body text-xs tracking-widest text-muted uppercase">
                Nome
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full border-b border-border bg-transparent py-3 font-body text-lg text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="mb-2 block font-body text-xs tracking-widest text-muted uppercase">
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full border-b border-border bg-transparent py-3 font-body text-lg text-foreground outline-none transition-colors focus:border-accent"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="mb-2 block font-body text-xs tracking-widest text-muted uppercase">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full resize-none border-b border-border bg-transparent py-3 font-body text-lg text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Conte sobre seu projeto..."
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-4 rounded-full bg-accent px-8 py-4 font-body text-sm tracking-widest text-background uppercase transition-all hover:bg-foreground hover:text-background"
              data-cursor="pointer"
            >
              Enviar mensagem
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between px-6 py-12 md:px-12 md:py-16">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight">
              Informações
            </h3>
            <div className="mt-8 space-y-6">
              <div>
                <p className="font-body text-xs tracking-widest text-muted uppercase">
                  Email
                </p>
                <p className="mt-1 font-body text-lg">{company.email}</p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest text-muted uppercase">
                  Localização
                </p>
                <p className="mt-1 font-body text-lg">{company.location}</p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest text-muted uppercase">
                  Redes
                </p>
                <div className="mt-2 flex gap-6">
                  {["Instagram", "LinkedIn", "Behance", "Dribbble"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="link-hover font-body text-sm text-muted transition-colors hover:text-foreground"
                        data-cursor="pointer"
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 font-body text-sm leading-relaxed text-muted">
            O estúdio é moldado por pessoas que se importam profundamente com
            design e o processo por trás. Cada projeto se torna um estudo de
            caso e uma parte significativa do nosso portfólio.
          </p>
        </div>
      </div>
    </section>
  );
}

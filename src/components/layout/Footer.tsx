"use client";

import { company, navLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      {/* Giant footer text — Metalab/Obys style */}
      <div className="overflow-hidden px-6 py-16 md:px-12 md:py-24">
        <h2 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] font-bold tracking-tight text-foreground/5 uppercase">
          {company.name}
        </h2>
      </div>

      <div className="grid border-t border-border md:grid-cols-3">
        <div className="border-b border-border px-6 py-8 md:border-r md:border-b-0 md:px-12">
          <p className="font-body text-sm text-muted">
            {company.fullName}
            <br />
            {company.tagline}
          </p>
        </div>

        <div className="border-b border-border px-6 py-8 md:border-r md:border-b-0 md:px-12">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-hover w-fit font-body text-sm text-muted transition-colors hover:text-foreground"
                data-cursor="pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="px-6 py-8 md:px-12">
          <p className="font-body text-sm text-muted">{company.email}</p>
          <p className="mt-1 font-body text-sm text-muted">
            {company.location}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-6 md:flex-row md:px-12">
        <p className="font-body text-xs text-muted">
          Todos os direitos reservados. ©{currentYear} {company.fullName}
        </p>
        <p className="font-body text-xs text-muted">
          Feito com obsessão por detalhe.
        </p>
      </div>
    </footer>
  );
}

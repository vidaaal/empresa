"use client";

import { company, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border pb-8">
      <div className="section-container max-w-[1200px] pt-10">
        <div className="soft-card grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:p-8">
          <div>
            <p className="font-display text-xl font-semibold tracking-[-0.02em]">
              {company.fullName}
            </p>
            <p className="mt-2 max-w-sm font-body text-[14px] leading-relaxed text-muted">
              {company.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[14px] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="font-body text-[14px] text-foreground">{company.email}</p>
            <p className="mt-1 font-body text-[14px] text-muted">{company.location}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 px-2 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} {company.fullName}. Todos os direitos reservados.</p>
          <p>Feito com cuidado e atenção ao detalhe.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { company, navLinks } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding-sm border-t border-border">
      <div className="section-container max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold tracking-[-0.03em]">
              {company.fullName}
            </p>
            <p className="mt-3 max-w-xs font-body text-[15px] leading-relaxed text-muted">
              {company.tagline}
            </p>
            <MagneticButton href="#contato" variant="ghost" className="mt-6">
              Trabalhe conosco ↗
            </MagneticButton>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 md:grid-cols-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[14px] font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="font-body text-[14px] font-semibold">{company.email}</p>
            <p className="mt-1 font-body text-[14px] text-muted">{company.location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-[13px] text-muted md:flex-row md:justify-between">
          <p>© {year} {company.fullName}</p>
          <p>Feito com obsessão por detalhe — São Paulo → Mundo</p>
        </div>
      </div>
    </footer>
  );
}

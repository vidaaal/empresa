"use client";

import { useState } from "react";
import { site, nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-5 pt-5">
      <div className="wrap flex items-center justify-between rounded-full border border-[var(--border)] bg-[rgba(7,7,7,0.65)] px-5 py-3 backdrop-blur-xl">
        <a href="#" className="headline text-lg text-[var(--fg)]">
          {site.mark}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-lime !py-2 !px-4 !text-sm">
            Fale conosco
          </a>
        </nav>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`h-px w-5 bg-white transition ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-white transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="mt-3 rounded-3xl border border-[var(--border)] bg-[rgba(7,7,7,0.9)] p-6 backdrop-blur-xl md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="headline block py-3 text-3xl"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

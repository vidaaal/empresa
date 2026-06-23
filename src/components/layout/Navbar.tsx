"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company, navLinks } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[9000] px-4 pt-4 md:px-6 md:pt-6">
        <nav className="section-container flex max-w-[1400px] items-center justify-between rounded-full border border-border/80 bg-surface/80 px-5 py-3 shadow-[0_12px_40px_-20px_rgba(28,28,26,0.18)] backdrop-blur-xl md:px-6 md:py-3.5">
          <a
            href="#"
            className="font-display text-lg font-semibold tracking-[-0.02em] text-foreground"
          >
            {company.name}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[14px] font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full bg-foreground px-5 py-2.5 font-body text-[14px] font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Fale conosco
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft md:hidden"
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[8999] bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-4xl font-semibold tracking-[-0.02em]"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

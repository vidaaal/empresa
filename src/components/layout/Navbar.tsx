"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { company, navLinks } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 120);
    setScrolled(y > 40);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 right-0 left-0 z-[9000] px-4 pt-4 md:px-6 md:pt-5"
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`section-container flex max-w-[1400px] items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-6 md:py-3.5 ${
            scrolled
              ? "border border-border/70 bg-surface/90 shadow-[0_20px_60px_-24px_rgba(18,18,16,0.25)] backdrop-blur-2xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#" className="font-display text-xl font-semibold tracking-[-0.03em]">
            {company.name}
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-body text-[14px] font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-bright transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <MagneticButton href="#contato" variant="primary" className="!py-2.5 !px-5 !text-[14px]">
              Fale conosco
            </MagneticButton>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft md:hidden"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1">
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="dark-section fixed inset-0 z-[8999] flex flex-col justify-center px-8 md:hidden"
          >
            <div className="mesh-bg">
              <div className="mesh-orb mesh-orb-1" />
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-display py-3 text-5xl font-semibold tracking-[-0.03em] text-[#f5f2ea]"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

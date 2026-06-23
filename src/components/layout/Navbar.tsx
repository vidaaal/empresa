"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company, navLinks } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[9000] mix-blend-difference">
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <a
            href="#"
            className="font-display text-xl font-bold tracking-tight text-white md:text-2xl"
            data-cursor="pointer"
          >
            {company.name}
          </a>

          <div className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-hover font-body text-sm tracking-wide text-white/80 transition-colors hover:text-white"
                data-cursor="pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full border border-white/30 px-6 py-2 font-body text-sm text-white transition-all hover:bg-white hover:text-black"
              data-cursor="pointer"
            >
              Fale conosco
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[9001] flex flex-col gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-7 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[8999] flex flex-col justify-center bg-background px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
                  className="font-display text-5xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-8"
            >
              <p className="font-body text-sm text-muted">{company.email}</p>
              <p className="mt-1 font-body text-sm text-muted">{company.location}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

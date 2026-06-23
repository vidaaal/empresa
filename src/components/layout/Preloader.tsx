"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/lib/data";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
              {company.name}
            </h1>
            <p className="mt-4 font-body text-sm tracking-[0.3em] text-muted uppercase">
              Studio
            </p>
          </motion.div>

          <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
            <span className="font-body text-xs tracking-widest text-muted uppercase">
              Carregando experiência
            </span>
            <span className="number-display font-display text-4xl font-bold text-accent md:text-6xl">
              {Math.min(Math.round(progress), 100).toString().padStart(2, "0")}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] bg-accent" style={{ width: `${Math.min(progress, 100)}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

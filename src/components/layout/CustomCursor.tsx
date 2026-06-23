"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [data-hover], .project-card, .tilt-card")
      );
    };

    const hide = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[10000] hidden md:block"
        animate={{
          x: pos.x - (hovering ? 28 : 6),
          y: pos.y - (hovering ? 28 : 6),
          width: hovering ? 56 : 10,
          height: hovering ? 56 : 10,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        <div
          className={`h-full w-full rounded-full border-2 transition-colors duration-300 ${
            hovering
              ? "border-accent bg-accent/10"
              : "border-foreground bg-foreground"
          }`}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[10000] hidden h-1 w-1 rounded-full bg-accent md:block"
        animate={{ x: pos.x, y: pos.y, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
      />
    </>
  );
}

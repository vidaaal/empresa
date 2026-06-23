"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleHoverStart);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleHoverStart);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden mix-blend-difference md:block"
        animate={{
          x: position.x - (isHovering ? 40 : 6),
          y: position.y - (isHovering ? 40 : 6),
          width: isHovering ? 80 : 12,
          height: isHovering ? 80 : 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`h-full w-full rounded-full border-2 border-white transition-colors duration-300 ${
            isHovering ? "bg-white/10" : "bg-white"
          }`}
        />
      </motion.div>
      {isHovering && (
        <motion.div
          className="pointer-events-none fixed z-[9999] hidden font-body text-[10px] tracking-widest text-white uppercase mix-blend-difference md:block"
          animate={{
            x: position.x - 20,
            y: position.y - 6,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          Ver
        </motion.div>
      )}
    </>
  );
}

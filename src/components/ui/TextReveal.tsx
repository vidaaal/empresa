"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  highlight?: string[];
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
  highlight = [],
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => {
          const clean = word.replace(/[.,!?]/g, "");
          const isHighlight = highlight.some(
            (h) => clean.toLowerCase() === h.toLowerCase() || word.includes(h)
          );
          return (
            <span key={i} className="mr-[0.28em] inline-block overflow-hidden">
              <motion.span
                className={`inline-block ${isHighlight ? "text-gradient" : ""}`}
                initial={{ y: "110%", rotate: 4 }}
                animate={isInView ? { y: 0, rotate: 0 } : {}}
                transition={{
                  delay: delay + i * 0.04,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </Tag>
    </div>
  );
}

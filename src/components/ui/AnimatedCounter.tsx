"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numeric = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      start = Math.round(numeric * eased);
      setDisplay(`${start}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(x * 10);
      rotateX.set(-y * 10);
    };

    const onLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`tilt-card ${className}`}
    >
      {children}
    </motion.div>
  );
}

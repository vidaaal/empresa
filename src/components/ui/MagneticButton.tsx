"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
  type?: "button" | "submit";
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const variants = {
    primary: "btn-primary",
    ghost: "btn-ghost",
    outline: "btn-outline",
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * 0.18);
      y.set((e.clientY - cy) * 0.18);
    };

    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  const shared = `inline-flex items-center justify-center gap-2 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        style={{ x: springX, y: springY }}
        className={shared}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      type={type}
      style={{ x: springX, y: springY }}
      className={shared}
    >
      {children}
    </motion.button>
  );
}

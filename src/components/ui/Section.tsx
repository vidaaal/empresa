import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  default: "max-w-[1200px]",
  narrow: "max-w-[900px]",
  wide: "max-w-[1400px]",
};

export default function Section({
  children,
  id,
  className = "",
  innerClassName = "",
  size = "default",
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={`section-container ${sizes[size]} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`mb-4 font-body text-[13px] font-medium tracking-wide text-muted ${className}`}>
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground ${className}`}
    >
      {children}
    </h2>
  );
}

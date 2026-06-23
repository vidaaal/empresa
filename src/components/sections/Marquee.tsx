"use client";

import { marqueeWords, company } from "@/lib/data";

function MarqueeRow({
  words,
  direction = "left",
  speed = "30s",
}: {
  words: string[];
  direction?: "left" | "right";
  speed?: string;
}) {
  const doubled = [...words, ...words];

  return (
    <div className="overflow-hidden border-y border-border py-6 md:py-8">
      <div
        className="flex w-max gap-8 md:gap-16"
        style={{
          animation: `marquee-${direction} ${speed} linear infinite`,
        }}
      >
        {doubled.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex shrink-0 items-center gap-8 font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight text-foreground/10 uppercase md:gap-16"
          >
            {word}
            <span className="text-accent">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative overflow-hidden bg-background py-4">
      <MarqueeRow words={marqueeWords} direction="left" speed="35s" />

      <div className="overflow-hidden bg-accent py-4">
        <div
          className="flex w-max gap-12"
          style={{ animation: "marquee-right 25s linear infinite" }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="shrink-0 font-display text-2xl font-bold tracking-tight text-background uppercase md:text-4xl"
            >
              {company.name} {company.name} {company.name}
            </span>
          ))}
        </div>
      </div>

      <MarqueeRow
        words={[...marqueeWords].reverse()}
        direction="right"
        speed="40s"
      />
    </section>
  );
}

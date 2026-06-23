import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRISMA STUDIO — Estúdio de Design & Desenvolvimento",
  description: "Design premium, desenvolvimento e experiências digitais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

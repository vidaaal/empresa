import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PRISMA® Studio — Design Premium · Desenvolvimento · Experiência Digital",
  description:
    "Estúdio de design premium, desenvolvimento de software e experiências digitais. Criamos produtos que transcendem o convencional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

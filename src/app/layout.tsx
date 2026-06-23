import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PRISMA® Studio — Design Premium · Desenvolvimento · Experiência Digital",
  description:
    "Estúdio de design premium, desenvolvimento de software e experiências digitais. Criamos produtos que transcendem o convencional.",
  keywords: [
    "design premium",
    "desenvolvimento de software",
    "experiência digital",
    "agência digital",
    "UI/UX",
    "branding",
  ],
  openGraph: {
    title: "PRISMA® Studio",
    description: "Design Premium · Desenvolvimento · Experiência Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

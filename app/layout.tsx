import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/components/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sacha Fontaine - Product Builder & Entrepreneur",
  description:
    "Product builder, AI enthusiast, passionné par le développement de produits digitaux et le sport.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Sacha Fontaine - Product Builder et Entrepreneur",
    description:
      "Product builder, AI enthusiast, passionné par le développement de produits digitaux et le sport.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}


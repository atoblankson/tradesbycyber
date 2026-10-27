import type { Metadata } from "next";
import { Anton, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRADEDBYCYBER | Institutional Forex Edge",
  description: "High-conviction forex trading, institutional orderflow, and execution psychology by Tradedbycyber.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0B0A08] text-cyber-cream flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

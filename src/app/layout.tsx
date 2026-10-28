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
  metadataBase: new URL("https://tradesbycyber.com"),
  title: "TRADESBYCYBER | Forex Educator",
  description: "High-conviction forex trading, institutional orderflow, and execution psychology by Tradesbycyber.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "TRADESBYCYBER | Forex Educator",
    description: "High-conviction forex trading, institutional orderflow, and execution psychology by Tradesbycyber.",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "TRADESBYCYBER Logo",
      },
    ],
  },
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

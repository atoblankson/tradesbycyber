import type { Metadata } from "next";
import { ArenaPageClient } from "./ArenaPageClient";

export const metadata: Metadata = {
  title: "CYBER FX Trading Arena | TRADESBYCYBER",
  description:
    "A disciplined MT5 demo trading competition platform. Test your edge, follow strict risk management, and compete on the CYBER FX public leaderboard.",
  openGraph: {
    title: "CYBER FX Trading Arena | TRADESBYCYBER",
    description:
      "A disciplined MT5 demo trading competition platform. Test your edge, follow strict risk management, and compete on the CYBER FX public leaderboard.",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "CYBER FX Trading Arena",
      },
    ],
  },
};

export default function ArenaPage() {
  return <ArenaPageClient />;
}

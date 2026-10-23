import {
  Container,
  Navbar,
  HeroTop,
  HeroGridPanel,
  TickerStrip,
  StatsRow,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#EFEAE4] overflow-x-hidden">
      {/* Hero Section Container */}
      <Container size="lg" className="flex flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Hero Top: Giant Headline + Two-Column Intro Row + Far-right CTA */}
        <HeroTop />

        {/* Cream Chart-Grid Panel with Curved Right Edge, Photo Placeholder & Scattered Stickers */}
        <HeroGridPanel />
      </Container>

      {/* 1. Full-Width Ticker Strip */}
      <TickerStrip />

      {/* 2. Black Stats Row with 4 Big Condensed Stats in Cream */}
      <StatsRow />
    </main>
  );
}

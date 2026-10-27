import {
  Container,
  Navbar,
  HeroTop,
  HeroGridPanel,
  TickerStrip,
  StatsRow,
  AboutSection,
  ResultsSection,
  WorkWithMeSection,
  TestimonialsSection,
  CtaSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0A08] text-[#EFEAE4] overflow-x-hidden">
      {/* Hero Top Area on Warm Black with Subtle Gold Glow & Film Grain */}
      <div className="w-full bg-gold-glow-tr film-grain relative">
        <Container size="lg" className="flex flex-col relative z-10">
          {/* Top Navbar */}
          <Navbar />

          {/* Hero Top: Giant Headline with Gold metallic keyword + Intro Row */}
          <HeroTop />

          {/* Cream Chart-Grid Panel with Curved Right Edge, Photo Placeholder & Scattered Stickers */}
          <HeroGridPanel />
        </Container>
      </div>

      {/* 1. Full-Width Ticker Strip (Cream) */}
      <TickerStrip />

      {/* 2. Dark-Gold Stats Row with Metallic Gold Numbers & Thin Gold Dividers */}
      <StatsRow />

      {/* 3. About / My Approach Section (Cream Grid Background - Untouched) */}
      <AboutSection />

      {/* 4. Results Section: "THE RECEIPTS." with Dark-Gold Cards & Gold-800 Shadows */}
      <ResultsSection />

      {/* 5. Work With Me Section (Cream Background with 3 Offer Cards - Untouched) */}
      <WorkWithMeSection />

      {/* 6. Testimonials Section: Dark-Gold Masonry Cards & Original Colorful Stickers */}
      <TestimonialsSection />

      {/* 7. Final Loud Full-Bleed CTA Section (Cream Background - Untouched) */}
      <CtaSection />

      {/* 8. Site Footer: Warm Black with Vertical Cream-to-Gold Wordmark & Disclaimer */}
      <Footer />
    </main>
  );
}

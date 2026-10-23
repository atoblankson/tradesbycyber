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

      {/* 3. About / My Approach Section with Cream Grid Background */}
      <AboutSection />

      {/* 4. Results Section: "THE RECEIPTS." on Black with Trade Tickets & Equity Curve */}
      <ResultsSection />

      {/* 5. Work With Me Section on Cream with 3 Offer Cards & Most Popular Sticker */}
      <WorkWithMeSection />

      {/* 6. Testimonials Section on Black: Student Quote Cards in Masonry Layout */}
      <TestimonialsSection />

      {/* 7. Final Loud Full-Bleed CTA Section on Cream with Scattered Stickers & Two Buttons */}
      <CtaSection />

      {/* 8. Site Footer on Black with Giant Wordmark, Socials & Risk Disclaimer */}
      <Footer />
    </main>
  );
}

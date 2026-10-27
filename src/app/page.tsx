import {
  HeroSection,
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
      {/* 1. New Full-Viewport Height 2-Column Hero on Warm Black */}
      <HeroSection />

      {/* 2. Full-Width Ticker Strip (Cream) */}
      <TickerStrip />

      {/* 3. Dark-Gold Stats Row with Metallic Gold Numbers & Thin Gold Dividers */}
      <StatsRow />

      {/* 4. About / My Approach Section with Cream Curved Grid Panel Background */}
      <AboutSection />

      {/* 5. Results Section: "THE RECEIPTS." with Dark-Gold Cards & Gold-800 Shadows */}
      <ResultsSection />

      {/* 6. Work With Me Section (Cream Background with 3 Offer Cards) */}
      <WorkWithMeSection />

      {/* 7. Testimonials Section: Dark-Gold Masonry Cards & Original Colorful Stickers */}
      <TestimonialsSection />

      {/* 8. Final Loud Full-Bleed CTA Section (Cream Background) */}
      <CtaSection />

      {/* 9. Site Footer: Warm Black with Vertical Cream-to-Gold Wordmark & Disclaimer */}
      <Footer />
    </main>
  );
}

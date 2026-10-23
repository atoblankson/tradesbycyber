import { Container, Navbar, HeroTop, HeroGridPanel } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#EFEAE4] overflow-x-hidden">
      <Container size="lg" className="flex flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Hero Top: Giant Headline + Two-Column Intro Row + Far-right CTA */}
        <HeroTop />

        {/* Cream Chart-Grid Panel with Curved Right Edge, Photo Placeholder & Scattered Stickers */}
        <HeroGridPanel />
      </Container>
    </main>
  );
}

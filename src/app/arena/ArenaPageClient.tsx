"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "@/components";
import {
  ArenaHero,
  ArenaContests,
  ArenaLeaderboard,
  ArenaPrizes,
  ArenaHowItWorks,
  ArenaRules,
  ArenaCta,
  ArenaRiskNotice,
  ArenaModal,
} from "@/components/arena";

export function ArenaPageClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContest, setSelectedContest] = useState("Demo Trading Championship");

  const handleOpenModal = (contestName?: string) => {
    if (contestName) {
      setSelectedContest(contestName);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0A08] text-[#EFEAE4] overflow-x-hidden">
      {/* Shared Site Navigation Pill */}
      <Navbar />

      {/* 1. Arena Hero Section */}
      <ArenaHero onOpenModal={handleOpenModal} />

      {/* 2. Available Contests (Cream Grid Theme) */}
      <ArenaContests onOpenModal={handleOpenModal} />

      {/* 3. Season 01 Leaderboard (Dark Gold Theme) */}
      <ArenaLeaderboard />

      {/* 4. Four Steps to Compete (Cream Grid Theme) */}
      <ArenaHowItWorks />

      {/* 5. Prize Distribution Pool (Dark Gold Theme) */}
      <ArenaPrizes />

      {/* 6. Official Draft Rules (Dark Gold Theme) */}
      <ArenaRules />

      {/* 7. Bottom Call to Action (Cream Grid Theme) */}
      <ArenaCta onOpenModal={() => handleOpenModal()} />

      {/* 8. Risk Disclosure & Disclaimer Box */}
      <ArenaRiskNotice />

      {/* Shared Site Footer */}
      <Footer />

      {/* Prototype Interest Registration Modal */}
      <ArenaModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultContest={selectedContest}
      />
    </div>
  );
}

export default ArenaPageClient;

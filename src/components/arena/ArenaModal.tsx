"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASING } from "@/lib/motion";

export interface ArenaModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultContest?: string;
}

export function ArenaModal({
  isOpen,
  onClose,
  defaultContest = "Demo Trading Championship",
}: ArenaModalProps) {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [contest, setContest] = useState(defaultContest);
  const [platform, setPlatform] = useState("MT5");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultContest) {
      setContest(defaultContest);
    }
  }, [defaultContest]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setAlias("");
      setEmail("");
      setAgreed(false);
    }, 3200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="arena-modal-title"
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0A08]/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: EASING }}
            className="relative z-10 w-full max-w-lg bg-[#14110D] border-2 border-[#D4A62A]/40 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#6B4F12] text-[#EFEAE4] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[rgba(212,166,42,0.3)] bg-[#0B0A08] text-[#EFEAE4]/70 hover:text-[#E8C766] hover:border-[#E8C766] flex items-center justify-center text-sm font-mono transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#E8C766] font-bold block mb-1">
                CYBER FX • REGISTRATION INTEREST
              </span>
              <h2
                id="arena-modal-title"
                className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-[#EFEAE4]"
              >
                ENTER THE <span className="gold-metallic-text">ARENA</span>
              </h2>
              <p className="font-sans text-xs text-[#A89F8C] mt-1.5 leading-relaxed">
                Prototype form preview. This does not submit data to a server or create a live entry.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl border border-[#3DDC97]/40 bg-[#0B0A08] text-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#3DDC97]/15 text-[#3DDC97] mx-auto flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <h3 className="font-display uppercase text-xl text-[#EFEAE4]">
                  INTEREST REGISTERED
                </h3>
                <p className="font-sans text-xs text-[#A89F8C] leading-relaxed">
                  Prototype only — no data was sent or saved. Official contest registration will launch once funding and verification rules are confirmed.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Public Alias */}
                <div>
                  <label
                    htmlFor="trader-alias"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#A89F8C] mb-1.5 font-bold"
                  >
                    Public Trader Alias
                  </label>
                  <input
                    id="trader-alias"
                    type="text"
                    required
                    maxLength={24}
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    placeholder="e.g. CyberRaven"
                    className="w-full bg-[#0B0A08] border border-[rgba(212,166,42,0.3)] rounded-lg px-4 py-3 text-sm text-[#EFEAE4] placeholder-[#A89F8C]/40 focus:outline-none focus:border-[#E8C766] focus:ring-1 focus:ring-[#E8C766]"
                  />
                  <span className="block font-mono text-[10px] text-[#A89F8C]/60 mt-1">
                    This alias is the only identifier shown on public leaderboards.
                  </span>
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="trader-email"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#A89F8C] mb-1.5 font-bold"
                  >
                    Email Address
                  </label>
                  <input
                    id="trader-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-[#0B0A08] border border-[rgba(212,166,42,0.3)] rounded-lg px-4 py-3 text-sm text-[#EFEAE4] placeholder-[#A89F8C]/40 focus:outline-none focus:border-[#E8C766] focus:ring-1 focus:ring-[#E8C766]"
                  />
                </div>

                {/* Contest Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contest-select"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#A89F8C] mb-1.5 font-bold"
                    >
                      Contest
                    </label>
                    <select
                      id="contest-select"
                      value={contest}
                      onChange={(e) => setContest(e.target.value)}
                      className="w-full bg-[#0B0A08] border border-[rgba(212,166,42,0.3)] rounded-lg px-3 py-3 text-sm text-[#EFEAE4] focus:outline-none focus:border-[#E8C766]"
                    >
                      <option value="Demo Trading Championship">Demo Championship</option>
                      <option value="Trader of the Month">Trader of the Month</option>
                      <option value="Trading War — Volume">Trading War (Volume)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="platform-select"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#A89F8C] mb-1.5 font-bold"
                    >
                      Platform
                    </label>
                    <select
                      id="platform-select"
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      className="w-full bg-[#0B0A08] border border-[rgba(212,166,42,0.3)] rounded-lg px-3 py-3 text-sm text-[#EFEAE4] focus:outline-none focus:border-[#E8C766]"
                    >
                      <option value="MT5">MetaTrader 5 (MT5)</option>
                    </select>
                  </div>
                </div>

                {/* Rules Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-[#A89F8C] cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded border-[rgba(212,166,42,0.3)] text-[#D4A62A] focus:ring-0 focus:outline-none bg-[#0B0A08]"
                    />
                    <span>
                      I understand this is a prototype interest preview, not a live contest registration or guaranteed prize commitment.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-mono font-black uppercase tracking-wider text-xs sm:text-sm gold-metallic-bg text-[#0B0A08] shadow-[3px_3px_0px_#6B4F12] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-[1px] transition-all"
                  >
                    PREVIEW SUBMISSION →
                  </button>
                </div>

                {/* Security Warning Notice */}
                <div className="pt-2">
                  <p className="font-mono text-[10px] text-[#A89F8C]/70 leading-relaxed text-center bg-[#0B0A08]/60 p-2.5 rounded-lg border border-[rgba(212,166,42,0.15)]">
                    ⚠️ NEVER enter your MT5 master password, account passwords, ID documents, or payment details here.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ArenaModal;

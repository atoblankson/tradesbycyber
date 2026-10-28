import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TRADESBYCYBER",
  description: "Privacy Policy and personal data protection practices for Tradesbycyber, in compliance with Ghana Data Protection Act (Act 843) and international standards.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0A08] text-[#EFEAE4] relative overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Background radial gold glow depth */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 10%, rgba(212, 166, 42, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 90% 80%, rgba(212, 166, 42, 0.04) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Faint film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Navigation / Header Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-[rgba(212,166,42,0.2)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-[#E8C766] hover:text-[#EFEAE4] transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">
              ←
            </span>
            <span>BACK TO HOME</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-[#EFEAE4]"
          >
            <span
              className="w-6 h-3.5 bg-[#EFEAE4] rounded-r-full rounded-l-[2px]"
              aria-hidden="true"
            />
            <span>tradesbycyber</span>
          </Link>
        </div>

        {/* Page Title */}
        <header className="mb-12 sm:mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded bg-[#D4A62A]/10 border border-[#D4A62A]/30 font-mono text-[11px] font-bold tracking-wider text-[#E8C766] uppercase">
            PRIVACY &amp; DATA PROTECTION
          </div>
          <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-[#EFEAE4] mb-4">
            PRIVACY <span className="gold-metallic-text">POLICY</span>
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#A89F8C]">
            Last updated: October 2026 • Compliant with Ghana Data Protection Act, 2012 (Act 843)
          </p>
        </header>

        {/* Main Document Body */}
        <article className="space-y-10 font-sans text-sm sm:text-base leading-relaxed text-[#A89F8C]">
          {/* Section 1 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">01</span>
              <span>Who We Are &amp; Privacy Overview</span>
            </h2>
            <p>
              1.1. This Privacy Policy details how <strong>tradesbycyber</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), based in [Accra, Ghana], collects, uses, protects, and discloses personal information gathered through our website, WhatsApp inquiries, Telegram communities, and educational programs.
            </p>
            <p>
              1.2. We are committed to processing your data transparently, securely, and lawfully under:
              <br />
              • The <strong>Data Protection Act, 2012 (Act 843)</strong> of the Republic of Ghana;
              <br />
              • The <strong>General Data Protection Regulation (GDPR)</strong> and UK GDPR where applicable to European/UK visitors; and
              <br />
              • International best practices for user data rights.
            </p>
            <p>
              1.3. <strong>Data Controller Contact:</strong> For any privacy questions or data subject requests, please contact our Data Lead at <a href="mailto:contact@tradesbycyber.com" className="text-[#D4A62A] underline">contact@tradesbycyber.com</a>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">02</span>
              <span>Personal Data We Collect &amp; How We Collect It</span>
            </h2>
            <p>
              2.1. <strong>Direct Communications Data:</strong> When you click &ldquo;Book a Call&rdquo;, message us on WhatsApp or Telegram, or email us, we collect your name, phone number, messaging handle, and the contents of your messages to assist with your inquiry.
            </p>
            <p>
              2.2. <strong>Student Enrollment Information:</strong> When you register for our programs, we collect your name, email address, country/time zone, and trading background to customize your curriculum and personal trading plan.
            </p>
            <p className="text-[#EFEAE4] font-medium">
              2.3. <strong>Payment Details:</strong> Tuition payments are processed directly by certified third-party payment gateways (e.g. Paystack, Flutterwave, Stripe, or bank transfer). <strong>We never see or store your full debit/credit card numbers or banking PINs.</strong> We receive only transaction confirmation records (transaction reference ID, payer name, amount, date, and status).
            </p>
            <p>
              2.4. <strong>Technical &amp; Usage Logs:</strong> When you visit our website, our servers automatically log non-identifying technical data such as IP addresses, browser specifications, page view duration, and interaction timestamps.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">03</span>
              <span>Why We Use Your Data &amp; Legal Basis</span>
            </h2>
            <p>
              In accordance with Ghana Act 843 (Section 18) and GDPR Article 6, we process personal data only when a lawful basis exists:
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-[#D4A62A]/40 text-xs sm:text-sm">
              <li>
                <strong className="text-[#EFEAE4] block font-mono uppercase">Performance of a Contract:</strong>
                To onboard you into the 4-Week Development Program or Elite Mentorship, issue session schedules, and deliver live instruction.
              </li>
              <li>
                <strong className="text-[#EFEAE4] block font-mono uppercase">Consent:</strong>
                To answer WhatsApp inquiries initiated by you and deliver community updates. You can withdraw consent at any time.
              </li>
              <li>
                <strong className="text-[#EFEAE4] block font-mono uppercase">Legitimate Interests:</strong>
                To maintain website performance, prevent malicious DDoS attacks, verify enrollment security, and optimize instructional quality.
              </li>
              <li>
                <strong className="text-[#EFEAE4] block font-mono uppercase">Legal Obligation:</strong>
                To maintain accounting, tax, and corporate audit records as mandated by Ghanaian law.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">04</span>
              <span>Sharing Your Data with Third Parties</span>
            </h2>
            <p className="text-[#EFEAE4] font-medium">
              4.1. <strong>We Never Sell Your Data:</strong> We do not sell, rent, monetize, or trade your personal information to third parties, advertising networks, or data brokers.
            </p>
            <p>
              4.2. <strong>Authorized Service Providers:</strong> We share data strictly with trusted service providers who support our operations under strict confidentiality obligations:
              <br />
              • <strong>Payment Gateways:</strong> Authorized processors (e.g. Paystack, Flutterwave) to process enrollment fees;
              <br />
              • <strong>Communication Platforms:</strong> WhatsApp (Meta Platforms) and Telegram to manage student interactions and private community discussions;
              <br />
              • <strong>Hosting Infrastructure:</strong> Cloud hosting providers (e.g. Vercel) to deliver our website securely;
              <br />
              • <strong>Virtual Classroom Tools:</strong> Google Meet or Zoom for live webinars and screen-share breakdowns.
            </p>
            <p>
              4.3. <strong>Legal &amp; Regulatory Disclosures:</strong> We may disclose data if required by a court of competent jurisdiction or statutory law enforcement body in Ghana.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">05</span>
              <span>International Data Transfers</span>
            </h2>
            <p>
              5.1. While our business is operated from Ghana, our hosting servers, communication apps (Telegram, WhatsApp), and cloud infrastructure maintain servers internationally across the EU, UK, and US.
            </p>
            <p>
              5.2. Whenever personal data is transferred across borders, we ensure adequate security safeguards (including end-to-end encryption and contractual data agreements) are upheld in compliance with Act 843 and international standards.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">06</span>
              <span>Cookies &amp; Tracking Technologies</span>
            </h2>
            <p>
              6.1. <strong>What Are Cookies:</strong> Cookies are small text files placed on your browser to ensure website responsiveness and security.
            </p>
            <p>
              6.2. <strong>Our Usage:</strong> We utilize essential technical cookies to maintain site performance and optional non-intrusive traffic analytics to measure visitor volumes. We do not use intrusive third-party cross-site behavioral tracking cookies.
            </p>
            <p>
              6.3. <strong>Opting Out:</strong> You can block or delete cookies via your browser settings (Chrome, Safari, Firefox, Edge).
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">07</span>
              <span>Data Retention</span>
            </h2>
            <p>
              7.1. We keep personal information only for as long as needed to fulfill the purpose for which it was collected:
              <br />
              • <strong>Inquiry Records:</strong> Kept for up to 12 months after the last conversation, unless you request earlier deletion.
              <br />
              • <strong>Student Records:</strong> Retained for the duration of your mentorship plus 2 years for alumni verification.
              <br />
              • <strong>Financial &amp; Tax Records:</strong> Stored for 6 years in accordance with Ghanaian statutory accounting mandates.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">08</span>
              <span>Data Security</span>
            </h2>
            <p>
              8.1. We employ robust security controls including HTTPS/TLS 1.3 encryption across all web pages, restricted administrative account access, and multi-factor authentication (MFA) on business portals.
            </p>
            <p className="text-[#EFEAE4]">
              8.2. <strong>Honest Security Notice:</strong> While we implement rigorous technical safeguards, no electronic transmission over the internet or storage method is 100% impenetrable. In the unlikely event of a verified data incident impacting your rights, we will notify you and relevant authorities in accordance with Act 843.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">09</span>
              <span>Your Statutory Rights</span>
            </h2>
            <p>
              Under the <strong>Ghana Data Protection Act, 2012 (Act 843)</strong> and applicable global data frameworks, you hold the following rights:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-[#EFEAE4]">
              <li><strong>Right of Access:</strong> Request a summary and copy of personal data held about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete records.</li>
              <li><strong>Right to Erasure (&ldquo;To Be Forgotten&rdquo;):</strong> Request deletion of your personal data when no overriding statutory obligation requires retention.</li>
              <li><strong>Right to Object:</strong> Object to processing for direct marketing or specific legitimate interests.</li>
              <li><strong>Right to Withdraw Consent:</strong> Revoke any previously granted consent at any time.</li>
            </ul>
            <p>
              To exercise these rights, email us at <a href="mailto:contact@tradesbycyber.com" className="text-[#D4A62A] underline">contact@tradesbycyber.com</a>. We will respond within thirty (30) days without fee.
            </p>
            <p>
              <strong>Regulatory Body:</strong> You also have the right to lodge a formal complaint with the <strong>Data Protection Commission (DPC) of Ghana</strong> (dataprotection.org.gh).
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">10</span>
              <span>Children&apos;s Privacy (18+ Requirement)</span>
            </h2>
            <p>
              10.1. Our services and content are strictly intended for adults aged 18 and older. We do not knowingly solicit or collect personal data from minors. If you believe a minor has submitted personal information to us, please notify us immediately for prompt deletion.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">11</span>
              <span>Marketing Messages &amp; Opt-Out</span>
            </h2>
            <p>
              11.1. We may occasionally send educational updates or cohort announcements.
            </p>
            <p>
              11.2. <strong>Opting Out:</strong>
              <br />
              • On WhatsApp: Reply <strong>&ldquo;STOP&rdquo;</strong> to cease non-essential messages.
              <br />
              • On Telegram: Mute or leave our announcement channel at your convenience.
              <br />
              • On Email: Click &ldquo;Unsubscribe&rdquo; at the bottom of promotional communications.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">12</span>
              <span>Policy Updates &amp; Contact Details</span>
            </h2>
            <p>
              12.1. We may update this Privacy Policy to reflect evolving legal standards. The latest revision will always be accessible at this URL with an updated effective date.
            </p>
            <p>
              12.2. <strong>Privacy Contact:</strong>
              <br />
              • Brand: <strong>tradesbycyber</strong>
              <br />
              • Email: <a href="mailto:contact@tradesbycyber.com" className="text-[#D4A62A] underline hover:text-[#E8C766]">contact@tradesbycyber.com</a>
              <br />
              • WhatsApp: [WhatsApp business number, e.g. +233 50 935 7336]
              <br />
              • Location: [Accra, Ghana]
            </p>
          </section>
        </article>

        {/* Footer Navigation Switcher */}
        <div className="mt-16 pt-8 border-t border-[rgba(212,166,42,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A89F8C]">
          <span>© 2026 TRADESBYCYBER • ALL RIGHTS RESERVED</span>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-[#E8C766] hover:text-[#EFEAE4] underline underline-offset-4">
              READ TERMS OF SERVICE →
            </Link>
            <Link href="/" className="text-[#A89F8C] hover:text-[#EFEAE4]">
              HOME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

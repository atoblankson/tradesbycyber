import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | TRADESBYCYBER",
  description: "Terms of Service and legal educational disclaimers for Tradesbycyber forex mentorship and training programs.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0A08] text-[#EFEAE4] relative overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Background radial gold glow depth */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 10%, rgba(212, 166, 42, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 10% 80%, rgba(212, 166, 42, 0.04) 0%, transparent 50%)
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
            LEGAL DOCUMENTATION
          </div>
          <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-[#EFEAE4] mb-4">
            TERMS OF <span className="gold-metallic-text">SERVICE</span>
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#A89F8C]">
            Last updated: October 2026 • Effective immediately
          </p>
        </header>

        {/* High-Risk Warning Alert Box */}
        <div className="mb-12 p-6 rounded-xl border border-[#D4A62A]/40 bg-[#14110D] shadow-[4px_4px_0px_#6B4F12]">
          <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-[#EFEAE4]">
            <strong className="block font-mono uppercase tracking-wider text-[#E8C766] font-black">
              IMPORTANT RISK NOTICE &amp; EDUCATIONAL DISCLAIMER
            </strong>
            <p className="text-[#EFEAE4]/90">
              Trading foreign exchange (Forex), Gold (XAU/USD), and leveraged contracts carries a high level of risk and can result in the loss of all your deposited capital. All content provided by <strong>tradesbycyber</strong> is strictly for educational purposes and does not constitute financial, investment, or trading advice.
            </p>
          </div>
        </div>

        {/* Main Document Body */}
        <article className="space-y-10 font-sans text-sm sm:text-base leading-relaxed text-[#A89F8C]">
          {/* Section 1 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">01</span>
              <span>Who We Are and Acceptance of Terms</span>
            </h2>
            <p>
              1.1. These Terms of Service (&ldquo;Terms&rdquo;) form a legally binding agreement between you (&ldquo;you&rdquo;, &ldquo;your&rdquo;, or &ldquo;User&rdquo;) and <strong>tradesbycyber</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating via this website and our official communication channels, based in Accra, Ghana.
            </p>
            <p>
              1.2. By visiting our website, contacting us through WhatsApp or Telegram, or purchasing our trading education programs, you acknowledge that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy. If you do not agree to every provision of these Terms, you must discontinue use of our site and services immediately.
            </p>
            <p className="text-[#EFEAE4] font-medium">
              1.3. <strong>18+ Age Requirement:</strong> You must be at least eighteen (18) years of age to access our materials, join our community, or enroll in any mentorship program. If you are under 18, you are strictly prohibited from using this website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">02</span>
              <span>Educational Purpose Only (Not Financial Advice)</span>
            </h2>
            <p>
              2.1. <strong>Purely Educational:</strong> All lessons, chart markups, breakdowns, recorded training sessions, livestreams, Telegram updates, and commentary published on or through tradesbycyber are produced strictly for educational and general informational purposes.
            </p>
            <p>
              2.2. <strong>No Financial Advice:</strong> Nothing published by tradesbycyber constitutes financial, investment, legal, or tax advice. We do not provide personalized recommendations directing you to execute, hold, or close any position in currencies, gold, commodities, or derivatives.
            </p>
            <p>
              2.3. <strong>Not a Broker, Bank, or Fund:</strong> We are an independent trading educator. We are <strong>not</strong> a broker-dealer, introducing broker, commercial bank, asset manager, or licensed investment advisory firm. We do not hold client funds, execute trades on your behalf via this website, or accept deposits for investment.
            </p>
            <p>
              2.4. <strong>Your Sole Responsibility:</strong> You alone assume full responsibility for any decision to place a trade, risk capital, or configure orders in live or demo accounts. We strongly advise consulting an accredited, independent financial advisor prior to executing trades.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">03</span>
              <span>High-Risk Trading Warning</span>
            </h2>
            <p>
              3.1. <strong>Substantial Risk of Loss:</strong> Trading Foreign Exchange (Forex), Gold (XAU/USD), Contracts for Difference (CFDs), and leveraged financial instruments involves substantial risk of loss and is not suitable for all individuals.
            </p>
            <p>
              3.2. <strong>Leverage Amplification:</strong> Leverage can work against you just as strongly as it works for you. Small adverse price fluctuations can cause substantial losses that equal or exceed your account balance.
            </p>
            <p className="text-[#EFEAE4] font-medium">
              3.3. <strong>Capital at Risk:</strong> Never trade with funds required for essentials, such as rent, food, medical care, debts, or emergency savings. Only trade with discretionary risk capital.
            </p>
            <p>
              3.4. <strong>No Guarantees:</strong> Historical backtests, trade journals, equity curves, and past winning setups do not guarantee, forecast, or imply future results. Financial markets are subject to slippage, spreads, news events, and execution delays.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">04</span>
              <span>Results &amp; Testimonials Disclaimer</span>
            </h2>
            <p>
              4.1. <strong>Individual Results Vary:</strong> Any profit numbers, payout amounts, funded account certifications, win rates, or risk-to-reward ratios highlighted on this site or in student testimonials reflect historical milestones achieved by specific individuals under unique market conditions.
            </p>
            <p>
              4.2. <strong>No Promise of Profit:</strong> We make zero guarantee or warranty that you will make a profit, pass an evaluation, receive a payout, or avoid financial loss. Most retail traders lose money. Your results depend on your own discipline, execution, risk model, and emotional psychology.
            </p>
            <p>
              4.3. <strong>Prop Firm Evaluations:</strong> References to prop firm evaluations (e.g. FTMO, MFF) refer to simulated evaluation challenges provided by independent third parties. Tradesbycyber is not a proprietary trading firm and does not issue proprietary capital directly.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">05</span>
              <span>Products and Services</span>
            </h2>
            <p>
              5.1. <strong>Full Trader Development Program:</strong>
              <br />
              • Tuition: USD $100.
              <br />
              • Structure: 4 weeks of live training, practical chart work, strategy curriculum, and personal trading plan development.
              <br />
              • Enrollment: Cohorts are limited in capacity to ensure high instructional quality.
            </p>
            <p>
              5.2. <strong>Elite Mentorship:</strong>
              <br />
              • Tuition: GHS 1,300 for 3 months.
              <br />
              • Structure: 3-month comprehensive mentorship program focused on long-term trader development, routine audits, and direct guidance.
            </p>
            <p>
              5.3. <strong>Delivery Method:</strong> Programs are delivered online via platforms including Telegram, Zoom, or Google Meet. You are solely responsible for your own internet connection, compatible hardware, and software.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">06</span>
              <span>Payments, Pricing, Currency &amp; Taxes</span>
            </h2>
            <p>
              6.1. <strong>Inquiry &amp; Payment Process:</strong> Program enrollment is initiated via WhatsApp through our &ldquo;Book a Call&rdquo; links. Payment links or transfer instructions are delivered directly.
            </p>
            <p>
              6.2. <strong>Payment Processors:</strong> Transactions are handled securely via authorized third-party payment gateways (including [Paystack, Flutterwave, Stripe, direct bank transfer, or crypto]). We do not store or process payment card numbers or bank credentials on our website servers.
            </p>
            <p>
              6.3. <strong>Currencies &amp; Fees:</strong> Prices are quoted in USD or Ghana Cedis (GHS). If you complete a transaction using an international currency or card, foreign exchange fees and conversion spreads charged by your bank are your responsibility.
            </p>
            <p>
              6.4. <strong>Chargebacks:</strong> Disputing or reversing a legitimate tuition charge without contacting us first will result in immediate termination of all community access, forfeiture of program privileges, and potential recovery action.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">07</span>
              <span>Refunds and Cancellation Policy</span>
            </h2>
            <p>
              7.1. <strong>Digital Content &amp; Live Instruction:</strong> Our mentorship programs provide immediate access to proprietary intellectual property, live instructor hours, and exclusive community resources.
            </p>
            <p className="text-[#EFEAE4] font-medium">
              7.2. <strong>Strict Refund Policy:</strong> All digital program sales and mentorship enrollments are final and non-refundable once course access credentials, curriculum documents, or private community invitations have been issued.
            </p>
            <p>
              7.3. <strong>No Disciplinary Refunds:</strong> If you are removed from a community or course for violating our conduct rules, harassing members, or sharing proprietary material, no refund will be issued under any circumstances.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">08</span>
              <span>Intellectual Property &amp; Non-Disclosure</span>
            </h2>
            <p>
              8.1. <strong>Exclusive Ownership:</strong> All training videos, chart breakdowns, slide decks, trading frameworks, PDF guides, text markups, logos, and materials provided by tradesbycyber are the proprietary intellectual property of [trader&apos;s legal name / tradesbycyber].
            </p>
            <p>
              8.2. <strong>Personal License:</strong> You receive a limited, non-exclusive, non-transferable, revocable license to view and study the materials solely for your personal trading development.
            </p>
            <p className="text-[#EFEAE4]">
              8.3. <strong>Strict Prohibitions:</strong> You may not record, screen-capture, redistribute, resell, republish, leak, or upload our course materials, live session recordings, or trade setups to any public or private group, torrent, or website.
            </p>
            <p>
              8.4. <strong>Legal Enforcement:</strong> Any copyright infringement or unauthorized distribution will result in immediate termination of service without refund and will be prosecuted to the fullest extent permitted by the Copyright Act, 2005 (Act 690) of Ghana and international copyright treaties.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">09</span>
              <span>Community Conduct &amp; Group Rules</span>
            </h2>
            <p>
              9.1. When participating in any Telegram group, WhatsApp chat, or live session hosted by tradesbycyber, you agree to uphold professional conduct.
            </p>
            <p>
              9.2. <strong>Strictly Prohibited:</strong>
              <br />
              • Soliciting community members for investments, loans, or third-party schemes;
              <br />
              • Promoting external signal groups, referral links, or MLM programs;
              <br />
              • Sending abusive, harassing, defamatory, or unsolicited private direct messages (DMs) to other members;
              <br />
              • Distributing spam, malicious links, or unverified files.
            </p>
            <p>
              9.3. We reserve the right to ban or mute any member immediately and without refund for violating community guidelines.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">10</span>
              <span>Third-Party Platforms &amp; Brokers</span>
            </h2>
            <p>
              10.1. <strong>Independent Broker Choice:</strong> You are completely free to choose any broker, prop firm, or exchange that aligns with your criteria. We do not require you to open accounts with any specific brokerage.
            </p>
            <p>
              10.2. <strong>No Third-Party Liability:</strong> Tradesbycyber is not responsible for the solvency, execution quality, slippage, withdrawal handling, or technical outages of any third-party broker, exchange, or prop firm you utilize.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">11</span>
              <span>Separate Private Arrangements</span>
            </h2>
            <p>
              11.1. This website is dedicated exclusively to trading education and mentorship.
            </p>
            <p>
              11.2. Any private arrangement relating to [account management / copy-trading / institutional consulting / write &ldquo;None&rdquo;] is strictly handled off this website and is governed solely by an independent, signed written contract.
            </p>
            <p>
              11.3. You are strongly advised to obtain independent legal and financial advice before entering into any private financial agreement.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">12</span>
              <span>Disclaimer of Warranties &amp; Limitation of Liability</span>
            </h2>
            <p>
              12.1. <strong>&ldquo;As-Is&rdquo; Basis:</strong> All programs, websites, and content are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any kind, whether express, statutory, or implied.
            </p>
            <p>
              12.2. <strong>Trading Loss Exclusion:</strong> Under no legal theory shall tradesbycyber, its owner, instructors, or contractors be liable for any direct, indirect, incidental, or consequential damages, including <strong>trading losses, lost profits, capital drawdown, loss of data, or emotional distress</strong>.
            </p>
            <p>
              12.3. <strong>Liability Cap:</strong> In all circumstances where liability cannot be lawfully excluded, our total aggregate liability to you shall not exceed the total amount you actually paid to us for the specific program in question.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">13</span>
              <span>Indemnification</span>
            </h2>
            <p>
              13.1. You agree to defend, indemnify, and hold harmless tradesbycyber, its founder, affiliates, and representatives from and against any claims, losses, damages, liabilities, or legal expenses arising from your violation of these Terms, your market executions, or your interactions with third parties.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">14</span>
              <span>Termination</span>
            </h2>
            <p>
              14.1. We reserve the right to suspend or terminate your access to our programs, site, or community immediately if you violate these Terms or engage in conduct detrimental to other students.
            </p>
            <p>
              14.2. Sections 2, 3, 4, 8, 12, 13, 15, and 16 shall survive any termination of these Terms.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3 pb-8 border-b border-[rgba(212,166,42,0.15)]">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">15</span>
              <span>Governing Law &amp; Dispute Resolution</span>
            </h2>
            <p>
              15.1. <strong>Governing Law:</strong> These Terms and any dispute arising from them shall be governed by and interpreted under the laws of the <strong>Republic of Ghana</strong>, without regard to conflict of law principles.
            </p>
            <p>
              15.2. <strong>Informal Resolution:</strong> You agree to first contact us directly at <a href="mailto:contact@tradesbycyber.com" className="text-[#D4A62A] underline hover:text-[#E8C766]">contact@tradesbycyber.com</a> and allow at least thirty (30) business days to resolve any dispute amicably.
            </p>
            <p>
              15.3. <strong>Jurisdiction:</strong> Any legal action or dispute that cannot be resolved informally shall be submitted to the exclusive jurisdiction of the competent courts in <strong>Accra, Ghana</strong>.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#EFEAE4] flex items-baseline gap-3">
              <span className="font-mono text-sm text-[#D4A62A]">16</span>
              <span>General Provisions &amp; Contact</span>
            </h2>
            <p>
              16.1. <strong>Updates:</strong> We may update these Terms periodically. Continued use of our site or community after updates are published signifies acceptance of the revised Terms.
            </p>
            <p>
              16.2. <strong>Severability:</strong> If any provision of these Terms is determined to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
            <p>
              16.3. <strong>Contact Inquiries:</strong>
              <br />
              • Brand: <strong>tradesbycyber</strong>
              <br />
              • Email: <a href="mailto:contact@tradesbycyber.com" className="text-[#D4A62A] underline hover:text-[#E8C766]">contact@tradesbycyber.com</a>
              <br />
              • WhatsApp: <a href="https://wa.me/233509357336" target="_blank" rel="noopener noreferrer" className="text-[#D4A62A] underline hover:text-[#E8C766]">+233 50 935 7336</a>
              <br />
              • Operating Location: Accra, Ghana
            </p>
          </section>
        </article>

        {/* Footer Navigation Switcher */}
        <div className="mt-16 pt-8 border-t border-[rgba(212,166,42,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A89F8C]">
          <span>© 2026 TRADESBYCYBER • ALL RIGHTS RESERVED</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#E8C766] hover:text-[#EFEAE4] underline underline-offset-4">
              READ PRIVACY POLICY →
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

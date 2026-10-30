# CYBER FX Trading Arena: Roadmap

A trading competition web app that lives inside the **tradedbycyber** website at `/arena`. Traders register for free MT5 contests, get ranked on a public leaderboard, and winners are paid after verification.

Status: planning. Everything marked **(proposed)** still needs client approval.

---

## 1. Product summary

**What it is:** a contest platform. Traders sign up, enter a contest, trade on MT5 under the published rules, and are ranked on a leaderboard. Results are verified before anyone is declared a winner.

**Contests**

| Contest | Format | Ranked by | Launch? |
|---|---|---|---|
| Demo Trading Championship | 7 days, $10K virtual balance, MT5 demo | Net return %, with drawdown and fair-play limits | Yes (proposed) |
| Trader of the Month | Monthly | Consistency, risk-adjusted performance, rule compliance | Yes (proposed) |
| Trading War (Volume) | Weekly | Closed-trade volume | Later (proposed). It rewards overtrading, so it needs tight risk limits and any broker links disclosed. |

---

## 2. Scope

**In scope for v1**

- `/arena` landing page, contest pages, leaderboard, prizes, how it works, official rules
- Registration with email confirmation
- Admin dashboard (create contests, approve entrants, enter or import results)
- Public leaderboard with `provisional` and `verified` labels
- Manual result verification

**Out of scope for v1**

- Automatic MT5 data import
- Cash payouts through the app (paid manually)
- Trader profiles and contest history
- Volume contest

---

## 3. Design: reuse the website UI/UX

The app must feel like part of the main site, not a separate product.

- Same navbar (glass pill on scroll), same footer, same legal pages. Add an **Arena** link to the main nav.
- Same tokens as the site: warm black `#0B0A08`, raised dark `#14110D`, panel `#1B1712`, gold ramp, cream `#EFEAE4` text.
- Same type: condensed uppercase display font for headlines, clean grotesk for body.
- Same components: sticker tags, circle badges, chunky cards with thick borders and hard offset shadows, black and gold buttons.
- Gold gradients only on key words, primary buttons, stats and thin accents. Max one strong gold focal point per viewport.
- Green (`#3DDC97`) and red (`#FF5C5C`) only for profit/loss and status data. Never for headlines or buttons.
- No numbered mono labels like "// 06" or "01 /" anywhere.
- Animations follow the site's rules: reveals, count-ups, subtle hovers, no parallax or gimmicks. Respect `prefers-reduced-motion`.
- Mobile-first. Tables scroll inside their own container.

---

## 4. Tech stack (proposed)

| Layer | Choice |
|---|---|
| Framework | Existing Next.js project, `/arena` route group, Tailwind |
| Database, auth, file storage | Supabase (Postgres, row-level security, storage for statements) |
| Email | Resend |
| Spam protection | Cloudflare Turnstile |
| Hosting | Vercel |
| Scheduled jobs (later) | Vercel Cron or Supabase scheduled functions |
| MT5 data (later) | MetaApi, if automation is wanted |

No MT5 API is needed for v1. Only the service keys (Supabase, Resend, Turnstile) go in environment variables.

---

## 5. Routes

| Route | Purpose |
|---|---|
| `/arena` | Landing: hero, contests, leaderboard preview, prizes, how it works, rules, CTA |
| `/arena/contests/[slug]` | Single contest: details, dates, rules summary, register button |
| `/arena/leaderboard` | Full leaderboard with contest selector |
| `/arena/rules` | Official rules |
| `/arena/register` | Registration flow |
| `/arena/dashboard` | Trader's entries and statement upload (phase 5) |
| `/admin` | Protected admin area |
| `/terms`, `/privacy` | Existing legal pages, updated for contests |

---

## 6. Data model (draft)

- **profiles**: id, alias (public, unique), email, country, role (`trader` / `admin`), created_at
- **contests**: id, slug, title, type, status (`draft` / `open` / `running` / `scoring` / `complete`), starts_at, ends_at, timezone, starting_balance, prize_pool, rules_version
- **entries**: id, contest_id, profile_id, status (`pending` / `approved` / `rejected` / `disqualified`), mt5_server, mt5_account_id (not the password), submitted_at
- **results**: id, entry_id, net_return_pct, max_drawdown_pct, profit_factor, rank, status (`provisional` / `verified`), notes
- **statements**: id, entry_id, file_path, uploaded_at, reviewed_by
- **audit_log**: id, actor, action, target, before, after, created_at (every manual change is logged)
- **appeals**: id, entry_id, reason, status, resolved_by

Row-level security: traders can only read and write their own rows. The public sees aliases and stats only, never email or account IDs.

---

## 7. Phases

### Phase 0: Decisions and legal (before building)

- [ ] Confirm who funds the prize pool and the amount. Publish prizes only once the money is secured.
- [ ] Confirm which contests launch (Championship and Trader of the Month proposed).
- [ ] Confirm eligibility: minimum age, countries, open to everyone or community only.
- [ ] Have a Ghanaian lawyer review the contest rules and check whether any licensing or gaming rules apply.
- [ ] Update Terms and Privacy for contests (data collected, MT5 details, retention, appeals).
- [ ] Decide the verification method for v1 (manual statement check proposed).
- [ ] Choose payout method and currency (manual mobile money or bank proposed).

### Phase 1: Static `/arena` in the site's design

- [ ] Create the `/arena` route and add "Arena" to the navbar and footer.
- [ ] Build the sections from the prototype using the site's components: hero, contests, leaderboard (sample data, clearly labeled), prizes, how it works, rules, CTA, risk notice.
- [ ] Interest/registration modal wired to a placeholder.
- [ ] Mobile and responsive pass. Animations per the site's rules.
- [ ] Sample data labeled "SAMPLE DATA, NOT LIVE RESULTS" until real results exist.

**Done when:** `/arena` looks native to the website on desktop and mobile.

### Phase 2: Real registration

- [ ] Set up Supabase project, environment variables, row-level security.
- [ ] Sign-up with email confirmation (Resend) and Turnstile.
- [ ] Registration form: alias, email, country, contest, platform, rules acceptance.
- [ ] One entry per person per contest. Reject duplicate aliases and emails.
- [ ] Confirmation page and email.
- [ ] Warning on every form: never enter a master password, ID documents or payment info.

**Done when:** a real person can register and the entry is saved as `pending`.

### Phase 3: Admin dashboard

- [ ] Admin login with role check.
- [ ] Create and edit contests: dates, timezone, balance, prize pool, status.
- [ ] Entries table: approve, reject, disqualify, with reasons.
- [ ] Result entry and CSV import. Everything is written to the audit log.
- [ ] Email entrants on approval, rejection and results.

**Done when:** he can run a full contest from the admin area without touching the database.

### Phase 4: Live leaderboard

- [ ] Leaderboard reads from the database, sorted by the published scoring rules.
- [ ] Tie-breakers: lower max drawdown, then higher profit factor, then earlier time the final score was reached.
- [ ] `provisional` and `verified` badges. Status `disqualified` shown clearly.
- [ ] Contest selector and mobile-friendly table.
- [ ] Winners block and prizes shown only after verification and the appeal window.

**Done when:** results entered in admin appear on the public leaderboard correctly.

### Phase 5: Trader accounts

- [ ] Trader dashboard: my entries, status, deadlines.
- [ ] Statement upload to private storage, viewable only by the trader and admins.
- [ ] Appeal form (72 hours from notification, per the rules).
- [ ] Contest history and a public trader page by alias (optional).

### Phase 6: Automation and growth

- [ ] Evaluate MetaApi (read-only investor password) or a broker-run contest server. Check current pricing first.
- [ ] Scheduled import and score calculation (return, drawdown, profit factor).
- [ ] Telegram bot posting leaderboard updates and announcements.
- [ ] Launch Trading War (Volume) only if risk limits and disclosures are in place.
- [ ] Payout automation (Paystack or Flutterwave transfers) if volume justifies it.
- [ ] Analytics and a cookie banner if targeting EU/UK visitors.

---

## 8. Scoring rules (from the prototype, to confirm)

- Net return % = (final equity − starting equity) ÷ starting equity × 100.
- Final equity includes realized P/L, floating P/L at cutoff, swaps, commissions and account charges where available.
- Only trades opened and closed inside the contest window count. Pending orders are cancelled at the end. Open positions are marked to market using the published method.
- Disqualification: max equity drawdown above 20% from the contest equity peak (calculation to be published before launch).
- Recommended max risk per trade: 2% of current equity (a contest rule, not trading advice).
- Results stay provisional until the trade history and equity are verified.
- Scoring rules never change after results are seen.

---

## 9. Risks and open questions

| Risk | Mitigation |
|---|---|
| Advertised prize isn't funded | Publish the pool only after funds are secured |
| Fake or duplicate entries | Email confirmation, captcha, one entry per person, identity checks before payout |
| Fake or edited statements | Require original MT5 statements; automate with read-only data later |
| Leaderboard disputes | Published scoring, audit log, 72-hour appeal window |
| Volume contest encourages reckless trading | Delay it; add risk limits; disclose any broker links |
| Legal and licensing in Ghana | Lawyer review before launch (Phase 0) |
| Sensitive data (MT5 details, emails) | Collect the minimum, encrypt, never store master passwords, restrict admin access, set retention periods |
| Managed-account services next to a contest | Keep it separate; the site must not imply returns on managed money |

**Open questions for the client**

1. Who funds the prize pool, and how much?
2. Open to everyone, or only students and community members?
3. Which countries and what minimum age?
4. Payout method and currency?
5. Who reviews statements and handles appeals?
6. Does the Arena need its own branding, or only "CYBER FX Trading Arena" inside tradedbycyber?

---

## 10. Definition of done for launch

- [ ] Prize funding confirmed and rules legally reviewed
- [ ] Terms, Privacy and official rules published and linked
- [ ] Registration, admin and leaderboard working end to end on a test contest
- [ ] Risk notice visible on `/arena` and in the footer
- [ ] No sample data on any public page
- [ ] Mobile and accessibility pass done
- [ ] Support contact (WhatsApp/email) set up and monitored

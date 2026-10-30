# agent.md: tradedbycyber website + CYBER FX Trading Arena

Instructions for any coding agent (Antigravity, etc.) working in this repo. Read this file fully before changing anything. If a request conflicts with this file, follow the request and tell me about the conflict.

---

## 1. Project

**tradedbycyber** is the personal brand website of a forex trader who specializes in gold (XAU/USD). It sells trading education and mentorship, runs a Telegram signals community, and is adding a contest web app, the **CYBER FX Trading Arena**, at `/arena`.

- Site: single-page marketing site (hero, ticker/stats, about, results, offers, testimonials, CTA, footer).
- Web app: `/arena`, a free MT5 trading-contest platform. See `roadmap.md` for scope and phases.
- Audience: retail traders, mainly in Ghana and Africa, mostly on mobile.

## 2. Stack

- Next.js (App Router) + Tailwind CSS
- Motion (framer-motion) for animation
- Supabase (database, auth, storage) for the Arena
- Resend for email, Cloudflare Turnstile for captcha
- Deployed on Vercel

If the repo uses something different, follow the repo and tell me.

---

## 3. How to work (important)

1. **One section or task at a time.** Never rebuild the whole site in one pass.
2. **Touch only what was asked.** Don't change layout, copy, colors, fonts or other sections unless told to. If you spot a problem elsewhere, list it at the end instead of fixing it.
3. **Reuse before creating.** Use existing components (`Sticker`, `CircleBadge`, `Container`, buttons, cards) and the design tokens below. Don't hardcode colors or fonts.
4. **Don't invent content.** No made-up stats, testimonials, prices, features, results or legal claims. Use clearly marked placeholders with a `TODO: client to confirm` comment.
5. **Finish with a summary.** End every task with a short list of what changed (files and behavior), plus anything you were unsure about.
6. **Ask only when blocked.** If a missing detail has a safe default, use it, state your assumption in one line, and continue.

---

## 4. Design system (the existing site UI)

The site is a **bold editorial / neo-brutalist** look: huge condensed uppercase headlines, chunky bordered cards with hard offset shadows, rotated sticker tags and faint grid lines. Dark areas get a **warm black + gold** treatment. Cream areas stay cream.

### 4.1 Color tokens

Define as CSS variables and expose in the Tailwind theme. Never hardcode hex values in components.

**Dark areas (navbar/hero, stats, results, testimonials, footer, Arena)**

| Token | Value | Use |
|---|---|---|
| `--bg-dark` | `#0B0A08` | Base warm black. Never pure `#000` |
| `--bg-raised` | `#14110D` | Raised surfaces, alternate sections |
| `--bg-panel` | `#1B1712` | Cards and panels |
| `--gold-100` | `#F6E7B4` | Gradient highlight |
| `--gold-300` | `#E8C766` | Gradient mid |
| `--gold-500` | `#D4A62A` | Main gold |
| `--gold-600` | `#B8871B` | Gradient deep / bronze |
| `--gold-800` | `#6B4F12` | Hairlines, hard shadows |
| `--cream` | `#EFEAE4` | Headlines and text on dark |
| `--muted` | `#A89F8C` | Body text on dark |

**Cream areas (offers, about, CTA, hero panel where used)**

| Token | Value | Use |
|---|---|---|
| `--bg-cream` | `#EFEAE4` | Section background, with faint grid lines |
| `--ink` | `#0A0A0A` | Headlines, borders, buttons |

**Sticker colors (used as in the original reference, on cream and dark)**

| Token | Value |
|---|---|
| `--sticker-teal` | `#5ED1C4` |
| `--sticker-pink` | `#F0527E` |
| `--sticker-yellow` | `#F7D417` |
| `--sticker-orange` | `#FF8A1F` |
| `--sticker-lime` | `#A6E36E` |

**Data colors (trade data only)**

| Token | Value |
|---|---|
| `--profit` | `#3DDC97` |
| `--loss` | `#FF5C5C` |

> **Green rule:** profit/loss green is for trade numbers, up/down arrows and status only. **Never** use neon green for headlines, buttons, card titles or accents. If you find green outside data, remove it and tell me.

### 4.2 Gold usage

- **Metallic gold gradient:** `linear-gradient(135deg, gold-100, gold-300, gold-500, gold-600)`. Use only on 1 to 2 key words in headlines, primary buttons on dark, stats numbers, thin accents and the footer wordmark (cream to gold, vertical).
- Never use the gold gradient as a full-section background.
- Dark section backgrounds get only a soft radial gold glow (`gold-500` at 6 to 10% opacity) from one corner. No flat gold fills.
- Max **one strong gold focal point per viewport**.
- Hairline borders on dark cards: 1px gradient from `gold-800` to `gold-500`. Hard offset shadow in `gold-800`.
- Film-grain overlay at 3 to 4% opacity on dark areas only.
- Thin gold line as divider between dark and cream sections.
- No purple, blue, neon, rainbow gradients, glassmorphism blobs, sparkles or heavy glows.

### 4.3 Typography

- **Display:** heavy condensed font (Anton or Bebas Neue), uppercase, tight line-height (about 0.9 to 1), huge sizes with fluid `clamp()`.
- **Body:** clean grotesk (Inter). Body text on dark uses `--muted`, with emphasis sentences in `--cream`.
- **Mono:** small monospace used for buttons and tiny UI text only.
- **Headline pattern:** stacked lines, one key word in gold gradient, the last line faded (cream at 25 to 30% opacity) like a trailing word. Example: `TRADE / GOLD / WITH / PRECISION.`
- Typographic quotes and apostrophes in all visible text.
- **Banned:** numbered or slashed mono labels such as `// 06 • TIME TO EXECUTE`, `01 /`, `DAILY ACCESS 01`. The client hates them. Do not add them anywhere.

### 4.4 Layout and spacing

- Container with generous side padding; headline, divider, paragraph, bullets and buttons share **one left edge**.
- Hero: two columns on desktop (text left, trader photo right); on mobile the photo comes first, fading into the black, then text, with full-width buttons.
- Mobile-first. Use relative units, flex/grid, `max-width: 100%` images. Wide content (tables, code) scrolls inside its own `overflow-x: auto` container, never the page body.
- Sections alternate warm-black (`--bg-dark`) and raised dark (`--bg-raised`), or cream, separated by thin gold dividers. Don't mix a new background color in.
- Keep spacing, type scale and alignment consistent across sections.

### 4.5 Components

**Navbar**
- At the top: transparent over the hero, logo left, links right.
- After about 80px of scroll: floating **glass pill**, centered, max-width about 960px, 16px from top, fully rounded, `backdrop-filter: blur(14px) saturate(140%)`, subtle tint, 1px gold hairline at about 25% opacity.
- Switches tint and text color depending on the section underneath (dark glass with cream text over dark, light glass with black text over cream). Hides on scroll down, returns on scroll up.
- Sections need `scroll-margin-top` and the hero needs top padding so the pill never covers content. Mobile: pill collapses to logo + menu button with a glass dropdown.

**Sticker / CircleBadge**
- Rotated rounded rectangles with bold uppercase labels, thick border, small hard shadow. Circle badges have text around the edge and rotate slowly.
- Positioned relative to their image container with percentages. Never cover faces or phone screens.
- Keep their original colors on both dark and cream backgrounds.

**Buttons**
- On dark: primary = metallic gold gradient with dark text; secondary = transparent, gold border, cream text.
- On cream: primary = black with cream text; secondary = outlined black with hard offset shadow.
- Mono uppercase label, arrow `→` where it fits. Hover: 2px lift, slight brightness. Active: 1px press. No glow explosions.

**Cards**
- Cream sections: thick black border, hard black offset shadow.
- Dark sections: `--bg-panel` background, gold hairline border, `gold-800` hard offset shadow.
- Hover: translate up 4px and shift the shadow slightly. No scale, no tilt.

**Hero photo**
- Full uncropped portrait, height 100% of the hero, anchored to the bottom and bleeding off the bottom edge. No frame, box or border.
- Dissolve edges with `mask-image` gradients (left/right/top), never over the face. Slightly warm filter. Soft gold radial glow behind the head and shoulders.
- Use `next/image` with the original file, quality 90, `priority`. No CSS upscaling past native pixels.

**Ticker:** seamless infinite marquee, pauses on hover, green ▲ and red ▼ for moves.

**Footer:** logo + wordmark, nav, socials, email, giant cream-to-gold `TRADEDBYCYBER` wordmark, then the legal block under a gold hairline.

### 4.6 Motion

- Library: Motion. Animate **transform and opacity only**. Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Reveals 0.5 to 0.8s, hovers 0.2s.
- Hero on load: masked line-by-line headline reveal, divider draws in, text fades up, photo fades in with slight scale, stickers pop in last.
- Scroll reveals once per element (fade and rise 24px), grouped cards stagger 0.08s.
- Stats count up once. Stickers drift 4 to 6px and about 1deg on offset loops. Circle badge rotates slowly.
- **Banned:** parallax, cursor effects, particles, scroll-jacking, 3D tilt, text scramble or typewriter effects, animated gradients, looping glows, bounce or overshoot.
- Respect `prefers-reduced-motion` (no animation, show final states). No layout shift. Pause off-screen loops.

---

## 5. Content and compliance rules

- **No income promises.** No guaranteed returns, no "get rich" claims, no fake win rates or profit numbers. Placeholder stats are labeled in code comments.
- Keep the risk disclaimer in the footer. Add "Trading involves risk" near results and offers.
- Results and testimonials carry "not typical, not a promise of profit" language.
- The trader also does account management / copy-trading. **Never write that he doesn't manage funds, isn't an advisor, or similar**, anywhere on the site. Marketing of managed accounts is separate and must be reviewed by a lawyer first.
- Legal pages `/terms` and `/privacy` exist as placeholders with `TODO: client to supply final legal text`. Do not write final legal text yourself.
- Footer legal block wording is set by the client; edit only when asked.

### Offers (source of truth)

1. **Full Trader Development Program:** USD 100, 4 weeks, live training, practical chart work, personal trading plan. "Master:" Support & Resistance, Supply & Demand, Bullish & Bearish Order Blocks, Market Structure, Liquidity, Trade Confirmation, Risk Management, Trading Psychology, XAUUSD Execution. Line: "Your goal isn't to copy my trades. Your goal is to understand WHY the trade exists." Button: ENROLL NOW →.
2. **Elite Mentorship:** GHS 1,300, 3 months, "Long-term development." Feature bullets are **unknown**: keep three placeholders with `TODO: client to confirm what Elite includes`. Button: APPLY FOR ELITE →.

Only these two offers are shown. Only show a "LIMITED ENROLLMENT" sticker if the cap is real (confirm with the client).

### Contact

- All "BOOK A CALL" buttons open WhatsApp with a pre-filled message via one config file (`lib/contact.ts`): `https://wa.me/{WHATSAPP_NUMBER}?text={encodeURIComponent(message)}`.
- Messages per location: `cta`, `program`, `elite`, `general`. Number is a placeholder until the client confirms.
- Use real `<a>` tags with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 6. The Arena (`/arena`) rules

- **Use the website's UI/UX.** Same navbar, footer, tokens, components and motion rules as above. Don't import the prototype's separate styling (its own fonts, radii or colors).
- The prototype `cyber_fx_trading_arena.html` is a **content and structure reference only**: sections, copy, rules text, form fields.
- Sample data must be labeled "SAMPLE DATA, NOT LIVE RESULTS" and removed before launch.
- Leaderboards show `provisional` vs `verified` clearly. Never show a prize as guaranteed unless it is funded.
- Public pages show aliases and stats only. Never expose emails, real names or MT5 account IDs.
- Never collect or store an MT5 master password. If read-only investor passwords are used later, pass them straight to the data provider or encrypt them server-side. Add a visible warning on every form: don't enter passwords, ID documents or payment info.
- Admin changes to results are written to an audit log.
- Scoring rules never change after results are seen.
- Follow `roadmap.md` phases in order.

---

## 7. Code conventions

- TypeScript, functional components, server components by default; client components only when needed (interactivity, Motion).
- Colors and fonts come from tokens. No inline hex values.
- Reusable pieces live in `components/`. Page-specific pieces next to the page.
- Contact config in `lib/contact.ts`. Supabase client in `lib/supabase/`. Never expose service keys to the client.
- Secrets in environment variables only. Never commit `.env*`.
- Accessible by default: semantic HTML, alt text, visible focus states, keyboard-friendly menus and modals, WCAG AA contrast (muted text on dark must still pass).
- Performance: `next/image`, WebP, `priority` only for the hero image, lazy-load below the fold, no layout shift, keep 60fps on mid-range phones.
- Typographic punctuation in visible text (’ “ ”).

---

## 8. Never do this

- Never add numbered or slashed mono labels (`// 06`, `01 /`).
- Never use neon green outside profit/loss data.
- Never use the old rainbow sticker palette on dark sections' backgrounds, or gold gradients on cream sections.
- Never re-theme or restructure sections you weren't asked to touch.
- Never make unverified claims about returns, win rates, licensing or fund management.
- Never use `localStorage`-dependent logic for anything that must be shared or secure.
- Never paste real credentials, passwords or personal data into code, logs or forms.

---

## 9. Definition of done (every task)

- [ ] Matches the tokens, type and components above
- [ ] Looks right on desktop and mobile (about 380px wide)
- [ ] No horizontal page scroll, no layout shift
- [ ] Reduced-motion respected
- [ ] No console errors, no TypeScript errors, build passes
- [ ] No placeholder text left unmarked
- [ ] Summary of changes written, with open questions listed

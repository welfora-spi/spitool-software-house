# PRD — SPI Tool (Sito aziendale)

## Problem Statement (original)
Sito web aziendale per SPI Tool, software house italiana che sviluppa piattaforme SaaS verticali con AI operativa. Production-ready, responsive, in italiano. Presenta 4 prodotti SaaS indipendenti (SPI Pension, ACTELYA, RistoAI, Gestionale AI per PMI), ne comunica il valore e cattura richieste demo. VINCOLO: nessun riferimento a "Welfora"/"Welfora AI". Estetica SaaS moderna (no serif/oro), accento tech, dark mode con toggle.

## Architecture
- Frontend-only marketing site: React 19 + react-router-dom v7, Tailwind + shadcn/ui.
- Motion: framer-motion (reveal, masked hero, magnetic CTA) + lenis (smooth scroll).
- Theme: custom `ThemeProvider` (`src/context/theme.jsx`), class-based dark/light, persisted `localStorage['spitool-theme']`, default dark. (Replaced next-themes which was not toggling reliably.)
- No backend used. Contact form is client-side only (react-hook-form + zod), shows sonner toast on submit; no data saved (per user choice).
- SEO: per-page title/description via `Seo` component, Organization JSON-LD in index.html, sitemap.xml, robots.txt.

## User Personas
- Consulenti previdenziali/intermediari (SPI Pension).
- Consulenti/agenzie/PMI (ACTELYA).
- Ristorazione: bar/ristoranti/pasticcerie (RistoAI).
- PMI amministrazione (Gestionale AI per PMI).

## Core Requirements (static)
- Home, Prodotti (tabella comparativa + sezioni), 4 pagine prodotto, Chi Siamo, Contatti, Privacy/Cookie, 404.
- Badge stato: Disponibile (verde), In prova·Beta (ambra), In sviluppo (blu).
- SPI Pension CTA → https://app.spitool.it; altri 3 CTA → /contatti?prodotto=NOME (preselect).
- Pricing SPI Pension: 29,90€/mese · 238,80€/anno.
- Nessun riferimento a Welfora.

## Implemented (2026-06)
- Full site, IT language, dark+light themes verified working.
- Kinetic hero (masked line reveal), editorial marquee, catalog 4-card grid, "Due mondi" dual-path, numbered manifesto, trust box.
- Comparative table + 4 detail pages with feature grids.
- RistoAI dashboard mockup + Gestionale AI natural-language command example (AI-generated images).
- Contact form with product preselect, client-side validation + toast. Founder card (Raffaele Patarino) + open team slots.
- SEO meta/JSON-LD, sitemap.xml, robots.txt.
- Verified: theme toggle (dark→light), CTA preselect (ACTELYA), form submit toast, validation errors, SPI Pension external link, zero Welfora references.

## Backlog / Next
- P1: Wire contact form to real email service (Resend) when ready.
- P2: Real product screenshots to replace AI mockups.
- P2: Blog/case studies, cookie consent banner, analytics.

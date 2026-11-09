# DESIGN SPECIFICATION — HUSNI NUR DZAKI PORTFOLIO

## 1. Visual Identity & Editorial Direction
Inspired by modern digital creative engineering studios (reference: InterOne aesthetic principles):
- **Aesthetic:** Editorial Technology Portfolio. High typographic contrast, structured asymmetrical grids, generous whitespace, razor-sharp borders, and measured accents.
- **Tone:** Authoritative, rigorously technical, pragmatic, and human. Balances data science rigor with modern software engineering craft.
- **Anti-patterns strictly avoided:**
  - No generic AI gradients (no purple/pink glows).
  - No fabricated statistics ("10+ years", "50+ happy clients").
  - No identical rounded template cards with arbitrary icons.
  - No over-the-top slow parallax effects that hinder reading speed.

---

## 2. Color Palette & Design Tokens

### Backgrounds & Surfaces
- **Canvas Base:** `#080B11` (Deep Obsidian / Near-Black)
- **Surface Elevation 1 (Cards, Nav):** `#0E131F` with `1px border border-white/8`
- **Surface Elevation 2 (Hover, Modals):** `#141C2E`
- **Surface Inset / Code blocks:** `#05070B`

### Typography Colors
- **Headline / Primary:** `#F8FAFC` (Slate 50, crisp high-contrast off-white)
- **Secondary / Body:** `#94A3B8` (Slate 400, comfortable reading contrast)
- **Muted / Metadata:** `#64748B` (Slate 500, accessible WCAG AA for auxiliary info)

### Accents & Indicators
- **Primary Accent (Cyan):** `#00F2FE` / `#06B6D4` (Strategic electric focal points, active tabs, CTA borders)
- **Secondary Accent (Emerald/Teal):** `#10B981` (Pipeline success, 90%+ test coverage badge, data flow tags)
- **Highlight Border:** `rgba(6, 182, 212, 0.25)`

---

## 3. Typography Hierarchy
- **Headline Display:** High-impact geometric sans, `tracking-tight`, font-weight 700/800.
- **Section Eyebrows:** Uppercase, `text-xs tracking-widest font-mono text-cyan-400`.
- **Body Text:** Clean sans-serif, relaxed leading (`leading-relaxed`), max-w-prose (`max-w-2xl`) for reading comfort.
- **Data / Stats / Code:** Monospace font for technical facts, test coverage, and repo stats.

---

## 4. Layout Architecture & Sections
1. **Header / Navigation:**
   - Minimalist sticky frosted header (`backdrop-blur-md bg-[#080B11]/80`).
   - Monogram logo: `HND.` with subtle status pulse ("Available for opportunities").
   - Navigation links: Home, About, Capabilities, Featured Projects, More Work, Contact.
   - Interactive Language Switcher (`EN` / `ID`) for bilingual accessibility.
   - Primary CTA: "Let's Talk".
2. **Hero Section:**
   - Direct value proposition: "Turning Complex Data Into Insight. Building Technology Into Solutions."
   - Clear multi-disciplinary positioning: Data Science · Data Engineering · Analytics · Software Development.
   - Direct CTA triggers: "Explore Projects", "Get in Touch", plus direct links to GitHub & LinkedIn.
   - Live interactive capability preview metric cards (verified factual numbers: 3 featured case studies, 90%+ test coverage, multi-model architectures).
3. **About Section:**
   - Narrative highlighting end-to-end capabilities: from raw ingestion and automated pipelines to predictive modeling and user-facing dashboards.
   - Work philosophy: Evidence-driven, test-backed, and production-conscious.
4. **Capabilities / Expertise:**
   - 4 discrete domains:
     - Data Science & Machine Learning (EDA, Feature Engineering, Classification, Deep Learning Anomaly Detection, Explainability)
     - Data Engineering (Modular ETL, Multi-destination storage, Web Scraping, Data Cleaning, Pytest)
     - Analytics & Business Intelligence (Exploratory Analytics, Streamlit dashboards, KPI visualization)
     - Software & Web Development (Full-stack prototypes, Next.js, React, REST API integration, Responsive UI)
5. **Featured Projects (Case Studies):**
   - **Mirai:** Healthcare risk indication platform. Explicit Data Science contribution (preprocessing, feature engineering, model evaluation). Medical disclaimer present.
   - **Hunian.id:** Property discovery & SaaS prototype. Client-side prototype with interactive Leaflet map, mortgage calculator, and seller dashboard.
   - **ETL Fashion Data Pipeline:** Multi-destination data pipeline (CSV, Sheets, PostgreSQL) with 90%+ test coverage via Pytest.
   - Interactive deep-dive modals/expanders to view architectural flow, problem-solving journey, and GitHub code.
6. **Other Projects & Experiments:**
   - Deep Learning Anomaly Detection (LSTM & Transformer Autoencoder for predictive maintenance).
   - Credit Card Default Risk Prediction (Comparative multi-model evaluation: ROC-AUC, SMOTE).
   - Bike Sharing Analytics Dashboard (Interactive Streamlit web app).
7. **Contact & Footer:**
   - "Have a data challenge or digital product in mind?"
   - One-click copy email button with feedback tooltip.
   - Verified links to GitHub, LinkedIn, and direct mailto.
   - Semantic accessible footer.

---

## 5. Accessibility & Motion Rules
- Keyboard navigable with clear focus outlines (`focus-visible:ring-2 focus-visible:ring-cyan-400`).
- Semantic HTML (`header`, `main`, `section`, `article`, `nav`, `footer`).
- `aria-label` on all icon-only buttons.
- Fully supports `prefers-reduced-motion`.
- Responsive test targets: 360px, 390px, 768px, 1024px, 1440px.


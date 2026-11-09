# Husni Nur Dzaki — Portfolio Website

> **Production URL:** [https://portofolio-husni.vercel.app](https://portofolio-husni.vercel.app)  
> **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React

An editorial-grade, modern digital technology portfolio built to showcase multidisciplinary capabilities across **Data Science, Data Engineering, Analytics & Business Intelligence, and Software/Web Development**.

Inspired by the visual design principles of **InterOne** (distinct typography, structured asymmetrical grid, generous whitespace, focused accent hierarchy, and deep obsidian canvas).

---

## 🚀 Key Features

1. **Multidisciplinary Positioning:**
   - Clearly positions Husni as a cross-functional engineer bridging raw data pipelines, machine learning intelligence, and user-facing software.
2. **Three Featured In-Depth Case Studies:**
   - **Mirai (Healthcare Risk Assessment):** Accurate Data Science Division attribution (preprocessing, feature engineering, SMOTE, and SHAP explainability) with medical disclaimer and real confusion matrix/SHAP plots.
   - **Hunian.id (Property Marketplace & SaaS Platform):** Client-side interactive prototype with Leaflet.js geospatial mapping, dynamic budget filtering, side-by-side comparison, and seller analytics UI.
   - **ETL Fashion Data Pipeline (Multi-Destination Architecture):** Modular extraction of 50 catalog pages, clean currency/attribute standardization, multi-destination load (PostgreSQL, Google Sheets, CSV), with documented **90%+ unit test coverage in Pytest**.
3. **Secondary Research & Experiments:**
   - Deep Learning Anomaly Detection (LSTM & Transformer Autoencoder for predictive maintenance).
   - Credit Card Default Risk Prediction (multi-model ROC-AUC benchmarks).
   - Bike Sharing Analytics Dashboard (interactive Streamlit application with live demo link).
4. **Bilingual Accessibility (English & Bahasa Indonesia):**
   - Instant language switch with preference persistence in `localStorage`.
5. **Interactive Project Deep-Dive Modal:**
   - Keyboard accessible (`Esc` to dismiss, scroll lock, accessible focus rings).
6. **Accessible Contact Section:**
   - One-click copy email button with feedback tooltip.
   - Instant email client composer.
   - Direct verified links to GitHub (@husnindz) and LinkedIn.
7. **Production & SEO Optimization:**
   - Automated `sitemap.xml` and `robots.txt`.
   - OpenGraph and Twitter card metadata.
   - Fully optimized next/font loading (Space Grotesk + Plus Jakarta Sans + JetBrains Mono).

---

## 🛠️ Getting Started Locally

```bash
# Navigate to the project directory
cd portofolio-husni

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification

```bash
npm run build
npm run start
```

---

## 🚢 Deployment to Vercel & GitHub

Repository is already git-initialized on the `main` branch with the initial commit ready.

### 1. Push to Your GitHub Account

Create a new repository on your GitHub (e.g. `portofolio-husni`), then run:

```bash
# Add your GitHub remote repository
git remote add origin https://github.com/husnindz/portofolio-husni.git

# Push to GitHub
git push -u origin main
```

### 2. Connect to Vercel

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import your `portofolio-husni` repository from GitHub.
4. Framework preset will automatically be detected as **Next.js**.
5. Click **Deploy**.
6. Under **Project Settings > Domains**, configure or verify your domain:
   ```
   portofolio-husni.vercel.app
   ```

---

## 📂 Project Structure

```text
portofolio-husni/
├── public/
│   └── images/
│       └── projects/          # Real screenshots, SHAP plots, and schemas
├── src/
│   ├── app/
│   │   ├── globals.css        # Obsidian design tokens & typography rules
│   │   ├── layout.tsx         # Google fonts, SEO & OpenGraph metadata
│   │   ├── page.tsx           # Assembled portfolio page
│   │   ├── robots.ts          # Search engine indexing rules
│   │   └── sitemap.ts         # Sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky header with bilingual toggle & mobile menu
│   │   ├── ProjectModal.tsx   # Accessible case study deep-dive dialog
│   │   ├── SocialIcons.tsx    # Crisp SVGs for GitHub & LinkedIn
│   │   └── Footer.tsx         # Semantic footer & back-to-top button
│   ├── context/
│   │   └── LanguageContext.tsx# Bilingual state management (EN / ID)
│   ├── data/
│   │   └── portfolioData.ts   # Type-safe verified facts, case studies & copy
│   └── sections/
│       ├── HeroSection.tsx    # Impactful headline & verified discipline badges
│       ├── AboutSection.tsx   # Engineering lifecycle & problem-solving philosophy
│       ├── ExpertiseSection.tsx# 4 core domains with production tools
│       ├── FeaturedProjectsSection.tsx # The 3 flagship case studies with filters
│       ├── OtherProjectsSection.tsx    # Secondary experiments & Streamlit demo
│       └── ContactSection.tsx # Direct channels & email composer
├── DESIGN.md                  # Comprehensive design specifications
├── package.json
└── tsconfig.json
```

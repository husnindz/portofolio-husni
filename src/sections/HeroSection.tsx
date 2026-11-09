"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { ArrowDown, Mail, ShieldCheck, Terminal, Layers, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center overflow-hidden bg-grid-subtle"
    >
      {/* Ambient background glow */}
      <div className="ambient-glow -top-24 left-1/4 w-[500px] h-[500px] bg-cyan-500/20" />
      <div className="ambient-glow top-1/3 -right-24 w-[450px] h-[450px] bg-teal-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E131F] border border-cyan-500/25 text-cyan-300 text-xs font-mono font-medium tracking-wider uppercase mb-6">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>DATA SCIENCE · DATA ENGINEERING · SOFTWARE</span>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              {language === "en" ? (
                <>
                  Turning Data <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                    Into Clear Insight.
                  </span>
                  <br />
                  Building Technology Into Solutions.
                </>
              ) : (
                <>
                  Mengubah Data <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                    Menjadi Wawasan Jelas.
                  </span>
                  <br />
                  Membangun Teknologi Menjadi Solusi.
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              {PERSONAL_INFO.heroBio[language]}
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 focus-ring"
              >
                <span>{language === "en" ? "Explore Featured Work" : "Jelajahi Proyek Utama"}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#0E131F] hover:bg-[#141C2E] border border-white/10 hover:border-cyan-500/30 transition-all focus-ring"
              >
                <span>{language === "en" ? "Let's Connect" : "Hubungi Saya"}</span>
              </a>

              {/* Verified Direct Channels */}
              <div className="flex items-center gap-2 ml-0 sm:ml-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0E131F] text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all focus-ring"
                  aria-label="GitHub Profile (@husnindz)"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0E131F] text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all focus-ring"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl bg-[#0E131F] text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all focus-ring"
                  aria-label={`Send email to ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Discipline Evidence */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <div className="p-5 rounded-2xl bg-[#0E131F]/90 border border-white/[0.08] backdrop-blur-sm hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                  01 · ML & Explainability
                </span>
                <Sparkles className="w-4 h-4 text-cyan-400/80 group-hover:text-cyan-300 transition-colors" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Mirai Healthcare Analysis
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === "en"
                  ? "Medical check-up feature selection & SHAP explainability across 3 health-risk domains."
                  : "Seleksi fitur tes lab medis & interpretasi SHAP pada 3 domain risiko penyakit."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E131F]/90 border border-white/[0.08] backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
                  02 · Resilient ETL
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400/80 group-hover:text-emerald-300 transition-colors" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Fashion Data Pipeline
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === "en"
                  ? "Multi-destination ingestion (PostgreSQL, Sheets, CSV) with 90%+ unit test coverage in Pytest."
                  : "Ekstraksi multi-tujuan (PostgreSQL, Sheets, CSV) dengan cakupan uji 90%+ di Pytest."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E131F]/90 border border-white/[0.08] backdrop-blur-sm hover:border-teal-500/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium text-teal-400 uppercase tracking-wider">
                  03 · Software Prototype
                </span>
                <Layers className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 transition-colors" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Hunian.id Marketplace
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === "en"
                  ? "Geospatial property discovery via Leaflet.js, KPR loan simulations, and seller dashboards."
                  : "Pencarian properti geospasial Leaflet.js, kalkulator KPR, dan dashboard pemilik."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

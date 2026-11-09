"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GitBranch, Database, Cpu, Layout, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  const lifecycleSteps = [
    {
      num: "01",
      title: { en: "Collect & Validate", id: "Pengumpulan & Validasi" },
      desc: {
        en: "Scraping multi-page datasets, handling null/sentinel anomalies, and enforcing schema validation.",
        id: "Scraping dataset multi-halaman, menangani nilai anomali, dan menegakkan validasi skema data.",
      },
      icon: Database,
    },
    {
      num: "02",
      title: { en: "Engineer & Pipeline", id: "Rekayasa & Pipeline" },
      desc: {
        en: "Designing modular ETL pipelines, standardizing formats, and dispatching to relational and flat destinations.",
        id: "Merancang pipeline ETL modular, menstandarisasi format data, dan memuat ke database relasional & file.",
      },
      icon: GitBranch,
    },
    {
      num: "03",
      title: { en: "Model & Explain", id: "Pemodelan & Explainability" },
      desc: {
        en: "Training predictive and unsupervised models with SMOTE, cross-validation, and SHAP explainability.",
        id: "Melatih model prediktif dan deteksi anomali dengan SMOTE, validasi silang, serta transparansi SHAP.",
      },
      icon: Cpu,
    },
    {
      num: "04",
      title: { en: "Deliver & Interface", id: "Antarmuka & Solusi Web" },
      desc: {
        en: "Building responsive web interfaces, interactive map explorers, and analytical dashboards.",
        id: "Membangun antarmuka web responsif, eksplorasi peta interaktif, dan dashboard analitik fungsional.",
      },
      icon: Layout,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-white/[0.06] bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400 mb-3">
              <span>// 01 · ABOUT & PHILOSOPHY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              {language === "en" ? (
                <>
                  Connecting raw data points to{" "}
                  <span className="text-cyan-400">tangible software experiences.</span>
                </>
              ) : (
                <>
                  Menghubungkan data mentah menjadi{" "}
                  <span className="text-cyan-400">pengalaman software nyata.</span>
                </>
              )}
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{PERSONAL_INFO.aboutExtended[language]}</p>
              <p>
                {language === "en"
                  ? "Whether architecting multi-destination ETL scrapers with 90%+ unit test coverage, interpreting biomarker importance for healthcare risk assessment, or building interactive property management tools with geospatial maps — my work focuses on reliability, verified performance, and clear user value."
                  : "Baik merancang pipeline ETL multi-tujuan dengan cakupan uji unit 90%+, menginterpretasi signifikansi biomarker klinis untuk penilaian risiko kesehatan, maupun membangun platform properti interaktif berbasis peta — karya saya berfokus pada keandalan, akurasi terverifikasi, dan kemudahan pengguna."}
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { en: "Evidence-Based & Test-Backed", id: "Berbasis Bukti & Teruji" },
                { en: "Explainable AI & Fair Metrics", id: "AI Transparan (Explainable)" },
                { en: "Strict Data Quality & Typing", id: "Kualitas & Skema Data Ketat" },
                { en: "Human-Centered UX Design", id: "Desain Berorientasi Pengguna" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4-Step Lifecycle Graphic */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E131F]/90 border border-white/[0.08] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {language === "en" ? "End-to-End Problem Solving Lifecycle" : "Siklus Pemecahan Masalah End-to-End"}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  4 Stages
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lifecycleSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="p-5 rounded-xl bg-[#141C2E]/60 border border-white/[0.05] hover:border-cyan-500/30 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {step.num}
                        </span>
                        <div className="p-2 rounded-lg bg-white/[0.04] text-slate-300 group-hover:text-cyan-300 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-white text-sm mb-1.5">
                        {step.title[language]}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.desc[language]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

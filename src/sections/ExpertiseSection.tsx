"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EXPERTISE_AREAS } from "@/data/portfolioData";
import { BrainCircuit, DatabaseZap, LineChart, Code2, Check, ArrowRight } from "lucide-react";

export const ExpertiseSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedId, setSelectedId] = useState(EXPERTISE_AREAS[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case "BrainCircuit":
        return BrainCircuit;
      case "DatabaseZap":
        return DatabaseZap;
      case "LineChart":
        return LineChart;
      case "Code2":
      default:
        return Code2;
    }
  };

  const activeArea = EXPERTISE_AREAS.find((a) => a.id === selectedId) || EXPERTISE_AREAS[0];
  const ActiveIcon = getIcon(activeArea.iconName);

  return (
    <section id="expertise" className="py-24 md:py-32 relative border-t border-white/[0.06] bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            <span>// 02 · CORE EXPERTISE & DOMAINS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {language === "en" ? (
              <>
                Engineered with purpose. <br />
                <span className="text-slate-400">Structured across 4 specialized disciplines.</span>
              </>
            ) : (
              <>
                Dibangun dengan terarah. <br />
                <span className="text-slate-400">Terstruktur dalam 4 disiplin spesialisasi.</span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === "en"
              ? "Every technical competency is grounded in verified repository deliverables, avoiding speculative skills or unused buzzwords."
              : "Setiap kompetensi teknis didasarkan pada bukti pengerjaan repositori nyata, tanpa klaim spekulatif atau sekadar tumpukan logo."}
          </p>
        </div>

        {/* Tab Selector + Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Domain Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERTISE_AREAS.map((area) => {
              const Icon = getIcon(area.iconName);
              const isSelected = area.id === selectedId;

              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedId(area.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-4 focus-ring ${
                    isSelected
                      ? "bg-[#141C2E] border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                      : "bg-[#0E131F]/70 border-white/[0.06] hover:bg-[#141C2E]/60 hover:border-white/10"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                      isSelected
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-white/[0.04] text-slate-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-sm sm:text-base font-semibold truncate ${
                          isSelected ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {area.title[language]}
                      </h3>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 ml-2" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {area.description[language]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Card */}
          <div className="lg:col-span-7 bg-[#0E131F] border border-white/[0.08] rounded-2xl p-6 sm:p-8 relative">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/[0.06]">
              <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  {activeArea.title[language]}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">
                  Proven in: {activeArea.relatedProject}
                </p>
              </div>
            </div>

            {/* Core Competencies List */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                {language === "en" ? "Technical Competencies & Workflow" : "Kompetensi Teknis & Alur Kerja"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeArea.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#141C2E]/60 border border-white/[0.04]"
                  >
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-snug">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div className="pt-6 border-t border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                {language === "en" ? "Production Technologies & Libraries" : "Teknologi & Library Produksi"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeArea.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-[#141C2E] text-slate-200 border border-white/[0.08] hover:border-cyan-500/30 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Link to featured projects */}
            <div className="mt-8 pt-4 flex justify-end">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-ring"
              >
                <span>{language === "en" ? "See related projects" : "Lihat proyek terkait"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


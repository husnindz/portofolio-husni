"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { OTHER_PROJECTS, ProjectDetail } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ProjectModal";
import { GithubIcon } from "@/components/SocialIcons";
import { ExternalLink, ArrowRight, Cpu, TrendingUp, Bike } from "lucide-react";

export const OtherProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "deep-learning-anomaly":
        return Cpu;
      case "credit-card-risk":
        return TrendingUp;
      case "bike-sharing-dashboard":
      default:
        return Bike;
    }
  };

  return (
    <section id="other-projects" className="py-24 md:py-32 relative border-t border-white/[0.06] bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            <span>// 04 · MORE EXPERIMENTS & RESEARCH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {language === "en" ? (
              <>
                Targeted experiments. <br />
                <span className="text-slate-400">Deep learning, risk benchmarks, and analytics.</span>
              </>
            ) : (
              <>
                Eksperimen terfokus. <br />
                <span className="text-slate-400">Deep learning, benchmark risiko, dan analitik.</span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === "en"
              ? "Supplementary algorithmic investigations, predictive modeling benchmarks, and interactive data visualization dashboards."
              : "Riset algoritmik tambahan, benchmark model prediktif, dan dashboard visualisasi data interaktif."}
          </p>
        </div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((project) => {
            const Icon = getIcon(project.id);

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#0E131F] border border-white/[0.07] hover:border-cyan-500/30 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-cyan-400">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-lg bg-white/[0.03] text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {project.tagline[language]}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141C2E] text-slate-300 border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-ring"
                  >
                    <span>{language === "en" ? "Details" : "Rincian"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors focus-ring"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors focus-ring"
                        aria-label="Streamlit Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

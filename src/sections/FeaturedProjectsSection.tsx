"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FEATURED_PROJECTS, ProjectDetail } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ProjectModal";
import { GithubIcon } from "@/components/SocialIcons";
import { ExternalLink, ArrowUpRight, ShieldAlert, Sparkles, Database, Code, Activity } from "lucide-react";

export const FeaturedProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const filterOptions = [
    { id: "all", label: { en: "All Domains", id: "Semua Domain" } },
    { id: "data-science", label: { en: "Data Science & ML", id: "Data Science & ML" } },
    { id: "data-engineering", label: { en: "Data Engineering", id: "Data Engineering" } },
    { id: "software", label: { en: "Software & Web", id: "Software & Web" } },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "data-science") return p.category.includes("Data Science");
    if (activeFilter === "data-engineering") return p.category.includes("Data Engineering");
    if (activeFilter === "software") return p.category.includes("Software");
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative border-t border-white/[0.06] bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400 mb-3">
              <span>// 03 · FEATURED CASE STUDIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {language === "en" ? (
                <>
                  Proven systems. <br />
                  <span className="text-slate-400">Engineered from data to deployment.</span>
                </>
              ) : (
                <>
                  Sistem teruji. <br />
                  <span className="text-slate-400">Dari pemrosesan data hingga deployment.</span>
                </>
              )}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0E131F] p-1.5 rounded-xl border border-white/[0.08]">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus-ring ${
                  activeFilter === filter.id
                    ? "bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {filter.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="group rounded-3xl bg-[#0E131F]/90 border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xl shadow-black/30"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Column */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-cyan-500/20 transition-all">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#080B11]/85 backdrop-blur-md border border-white/10 text-cyan-300 text-[11px] font-mono">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Narrative Column */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono text-cyan-400">
                      <span>PROJECT 0{index + 1}</span>
                      <span>·</span>
                      <span className="text-slate-400">{project.role[language]}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {project.tagline[language]}
                    </p>

                    {/* Factual Metrics Snapshot */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2.5 mb-6 py-3 px-4 rounded-xl bg-[#141C2E]/60 border border-white/[0.04]">
                        {project.metrics.map((m, idx) => (
                          <div key={idx}>
                            <span className="text-[10px] font-mono text-slate-400 block">
                              {m.label[language]}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-100">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.02] text-slate-400">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all focus-ring"
                      >
                        <span>{language === "en" ? "Explore Case Study" : "Buka Studi Kasus"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-[#141C2E] hover:bg-[#1A243B] border border-white/10 transition-all focus-ring"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-950/20 hover:bg-cyan-950/40 border border-cyan-500/20 transition-all focus-ring"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
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

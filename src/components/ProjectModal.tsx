"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectDetail } from "@/data/portfolioData";
import { GithubIcon } from "@/components/SocialIcons";
import { X, ExternalLink, AlertTriangle, ShieldCheck, CheckCircle, Terminal } from "lucide-react";

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0E131F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-[#0A0E17]/80 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
              {project.category}
            </span>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors focus-ring"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Key Metrics / Snapshot */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#141C2E] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    {metric.label[language]}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-cyan-300">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Problem Statement */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2.5 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>{language === "en" ? "Problem & Context" : "Latar Belakang & Masalah"}</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-[#141C2E]/40 p-4 rounded-xl border border-white/[0.04]">
              {project.problem[language]}
            </p>
          </div>

          {/* Solution & Engineering Approach */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{language === "en" ? "Engineering Architecture & Approach" : "Pendekatan & Arsitektur Rekayasa"}</span>
            </h3>
            <div className="space-y-2.5">
              {project.approach[language].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#141C2E]/30 border border-white/[0.03]">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Author Contribution (Accurate attribution) */}
          <div className="p-4 sm:p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-2">
              {language === "en" ? "Verified Contribution & Role" : "Peran & Kontribusi Terverifikasi"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {project.contribution[language]}
            </p>
          </div>

          {/* Important Disclaimer if present */}
          {project.disclaimer && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200 leading-relaxed">
                {project.disclaimer[language]}
              </p>
            </div>
          )}

          {/* Visual Gallery if present */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                {language === "en" ? "Project Visual Evidence" : "Bukti Visual Proyek"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60 border border-white/10">
                      <Image
                        src={item.url}
                        alt={item.caption[language]}
                        fill
                        className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono italic">
                      {item.caption[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              {language === "en" ? "Technologies & Environment" : "Teknologi & Lingkungan"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#141C2E] text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Direct Actions */}
        <div className="flex items-center justify-between p-6 border-t border-white/[0.08] bg-[#0A0E17]/80">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs text-white bg-[#141C2E] hover:bg-[#1E293B] border border-white/10 transition-colors focus-ring"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{language === "en" ? "View Repository" : "Buka Repositori"}</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-colors focus-ring"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{language === "en" ? "Live Demo / Video" : "Demo / Video"}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            {language === "en" ? "Close" : "Tutup"}
          </button>
        </div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { ArrowUp, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#05070B] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="font-display font-bold text-base text-white tracking-tight">
              {PERSONAL_INFO.name}
              <span className="text-cyan-400">.</span>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-slate-400 text-xs">
              {language === "en"
                ? "Data Scientist · Data Engineer · Analytics & Software Developer"
                : "Data Scientist · Data Engineer · Analitik & Pengembang Perangkat Lunak"}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors focus-ring"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors focus-ring"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors focus-ring"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/5 transition-colors focus-ring ml-2"
              aria-label="Scroll back to top"
            >
              <span>{language === "en" ? "Top" : "Atas"}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>
            © 2026 {PERSONAL_INFO.name}. Built with Next.js & Tailwind CSS. Designed for Vercel.
          </p>
          <p className="font-mono text-slate-500">
            {PERSONAL_INFO.location} · portofolio-husni.vercel.app
          </p>
        </div>
      </div>
    </footer>
  );
};

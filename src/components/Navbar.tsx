"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "expertise", "projects", "other-projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: { en: "About", id: "Tentang" } },
    { id: "expertise", label: { en: "Expertise", id: "Keahlian" } },
    { id: "projects", label: { en: "Featured Work", id: "Proyek Utama" } },
    { id: "other-projects", label: { en: "Experiments", id: "Eksperimen" } },
    { id: "contact", label: { en: "Contact", id: "Kontak" } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080B11]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus-ring rounded-lg py-1 px-1.5"
          aria-label="Husni Nur Dzaki Home"
        >
          <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            {PERSONAL_INFO.shortName}
            <span className="text-cyan-400">.</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {language === "en" ? "Available" : "Tersedia"}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0E131F]/90 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 focus-ring ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-300 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {item.label[language]}
              </a>
            );
          })}
        </nav>

        {/* Controls: Language Switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Functional Bilingual Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white bg-[#0E131F] hover:bg-[#141C2E] border border-white/10 px-2.5 py-1.5 rounded-lg transition-colors focus-ring"
            aria-label={`Switch to ${language === "en" ? "Bahasa Indonesia" : "English"}`}
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Primary CTA button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 focus-ring"
          >
            <span>{language === "en" ? "Let's Talk" : "Hubungi"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#0E131F] text-slate-300 hover:text-white border border-white/10 focus-ring"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#080B11]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-white/5 transition-colors"
              >
                {item.label[language]}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400"
            >
              {language === "en" ? "Let's Talk" : "Hubungi Saya"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


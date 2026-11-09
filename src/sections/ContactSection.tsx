"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { Mail, Copy, Check, Send, Sparkles } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [inquiryType, setInquiryType] = useState("project");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio Inquiry - ${inquiryType.toUpperCase()}] from ${name || "Collaborator"}`
    );
    const body = encodeURIComponent(
      `Hi Husni,\n\n${message || "I would like to connect regarding a potential opportunity/project."}\n\nBest regards,\n${name}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-white/[0.06] bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400">
              <span>// 05 · DIRECT CONTACT & COLLABORATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {language === "en" ? (
                <>
                  Have a data challenge or <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                    digital product in mind?
                  </span>{" "}
                  <br />
                  Let's build something meaningful.
                </>
              ) : (
                <>
                  Punya tantangan data atau <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                    ide produk digital?
                  </span>{" "}
                  <br />
                  Mari bangun solusi nyata.
                </>
              )}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "I am always open to discussing data engineering pipelines, predictive machine learning models, analytics dashboards, or full-stack web prototypes. Feel free to reach out directly via email or LinkedIn."
                : "Saya selalu terbuka untuk berdiskusi seputar pipeline data engineering, model machine learning prediktif, dashboard analitik, maupun prototipe web full-stack. Silakan hubungi langsung lewat email atau LinkedIn."}
            </p>

            {/* Email Copy Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0E131F] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    {language === "en" ? "Direct Email Address" : "Alamat Email Langsung"}
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-[#141C2E] hover:bg-[#1E293B] text-slate-200 border border-white/10 transition-colors focus-ring"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">
                      {language === "en" ? "Copied!" : "Tersalin!"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{language === "en" ? "Copy" : "Salin"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E131F] hover:bg-[#141C2E] text-slate-300 hover:text-white border border-white/10 transition-colors text-xs font-medium focus-ring"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E131F] hover:bg-[#141C2E] text-slate-300 hover:text-white border border-white/10 transition-colors text-xs font-medium focus-ring"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Mail Composer */}
          <div className="lg:col-span-6 bg-[#0E131F] border border-white/[0.08] rounded-3xl p-6 sm:p-8 relative">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span>{language === "en" ? "QUICK MESSAGE COMPOSER" : "KIRIM PESAN CEPAT"}</span>
            </div>

            <form onSubmit={handleComposeMail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                  {language === "en" ? "Your Name or Organization" : "Nama atau Organisasi Anda"}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === "en" ? "e.g. Alex (Data Lead)" : "misal: Alex (Lead Data)"}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus-ring"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-xs font-medium text-slate-300 mb-1.5">
                  {language === "en" ? "Subject / Inquiry Type" : "Topik / Tipe Diskusi"}
                </label>
                <select
                  id="inquiryType"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-white/10 text-white text-xs sm:text-sm focus-ring"
                >
                  <option value="project">{language === "en" ? "New Project / Collaboration" : "Proyek Baru / Kolaborasi"}</option>
                  <option value="job">{language === "en" ? "Career / Full-time Opportunity" : "Peluang Kerja / Karir"}</option>
                  <option value="consultation">{language === "en" ? "Data Architecture Consultation" : "Konsultasi Arsitektur Data"}</option>
                  <option value="other">{language === "en" ? "General Question" : "Pertanyaan Umum"}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  {language === "en" ? "Message Summary" : "Ringkasan Pesan"}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === "en"
                      ? "Describe your data challenge, timeline, or scope..."
                      : "Jelaskan kebutuhan data, linimasa, atau lingkup proyek..."
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus-ring resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-teal-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 focus-ring"
              >
                <span>{language === "en" ? "Send via Email Client" : "Kirim Melalui Email"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

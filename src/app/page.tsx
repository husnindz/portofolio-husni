"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { FeaturedProjectsSection } from "@/sections/FeaturedProjectsSection";
import { OtherProjectsSection } from "@/sections/OtherProjectsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#080B11] text-[#F8FAFC]">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <FeaturedProjectsSection />
          <OtherProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { WelcomeAnimation } from "@/components/ui/WelcomeAnimation";

export default function DeveloperPortfolio() {
  const [mounted, setMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <LanguageProvider>
      {showWelcome && <WelcomeAnimation />}
      <div
        className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-900 dark:to-blue-950 overflow-x-hidden transition-opacity duration-1000 ${
          showWelcome ? "opacity-0" : "opacity-100"
        }`}
      >
        <FloatingElements />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

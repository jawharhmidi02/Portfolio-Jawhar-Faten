"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

export default function SynergyTeamPortfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-950 dark:via-gray-900 dark:to-green-950 overflow-x-hidden">
        <FloatingElements />
        <Navigation />
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <AchievementsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

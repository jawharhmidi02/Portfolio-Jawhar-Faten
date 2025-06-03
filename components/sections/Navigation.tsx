"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Languages, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "home",
        "about",
        "projects",
        "testimonials",
        "achievements",
        "skills",
        "contact",
      ];

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 z-20">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flame-glow">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Synergy Team
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-3 py-2 transition-all duration-300 hover:scale-105",
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-100 transition-transform duration-300" />
                  )}
                </Button>
              ))}
            </div>

            {/* Language and Theme Toggles */}
            <div className="hidden md:flex items-center space-x-2 z-20">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Languages className="h-4 w-4" />
                <span>{language === "en" ? "FR" : "EN"}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:scale-105 transition-transform"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Separate from nav for proper positioning */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8">
          <div className="flex flex-col items-center space-y-6 w-full max-w-sm mt-12">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-lg justify-center transition-all duration-300 hover:scale-105",
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {item.label}
              </Button>
            ))}

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-8 border-t border-gray-200 dark:border-gray-700 w-full">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <Languages className="h-4 w-4" />
                <span>{language === "en" ? "Français" : "English"}</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                <span>{theme === "dark" ? "Light" : "Dark"}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

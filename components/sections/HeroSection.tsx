"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  Code,
  Palette,
  Trophy,
  Users,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { teamData } from "@/lib/data/team";

export function HeroSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      number: "20+",
      label: "Projects Completed",
      icon: <Trophy className="h-5 w-5" />,
      color: "text-amber-500",
    },
    {
      number: "2",
      label: "Hackathon Wins",
      icon: <Sparkles className="h-5 w-5" />,
      color: "text-purple-500",
    },
    {
      number: "4",
      label: "Competition Awards",
      icon: <Trophy className="h-5 w-5" />,
      color: "text-emerald-500",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <Users className="h-5 w-5" />,
      color: "text-blue-500",
    },
  ];

  return (
    <section
      className="min-h-screen flex items-center py-20 justify-center px-4 relative overflow-hidden"
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-6">
              <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Full-Stack Development Duo
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Creative Developers
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
                Building Digital Excellence
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full px-8"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="mr-2">{t.hero.viewProjects}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 rounded-full px-8 bg-transparent"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.contactUs}
            </Button>
          </div>

          {/* Team Members */}
          <div className="flex justify-center items-center space-x-12 mb-16">
            <div className="text-center group">
              <div className="relative mb-4">
                <Avatar className="w-24 h-24 mx-auto ring-4 ring-blue-200 dark:ring-blue-800 group-hover:ring-blue-400 dark:group-hover:ring-blue-600 transition-all duration-300 group-hover:scale-110">
                  <AvatarImage
                    src={teamData.jawhar.avatar || "/placeholder.svg"}
                    className="object-cover"
                    alt="Jawhar"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg">
                    JH
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Code className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {teamData.jawhar.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t.team.jawhar.role}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <Avatar className="w-24 h-24 mx-auto ring-4 ring-emerald-200 dark:ring-emerald-800 group-hover:ring-emerald-400 dark:group-hover:ring-emerald-600 transition-all duration-300 group-hover:scale-110">
                  <AvatarImage
                    // src={teamData.faten.avatar || "/placeholder.svg"}
                    alt="Faten"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg">
                    FS
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Palette className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {teamData.faten.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t.team.faten.role}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`flex justify-center mb-3 ${stat.color} group-hover:scale-110 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

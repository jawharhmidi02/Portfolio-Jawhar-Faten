"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Target, Award, Star, Rocket } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { teamData } from "@/lib/data/team";

export function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    {
      number: "20+",
      label: "Projects Completed",
      icon: <Target className="h-6 w-6" />,
    },
    {
      number: "2",
      label: "Hackathon Wins",
      icon: <Award className="h-6 w-6" />,
    },
    {
      number: "4",
      label: "Competition Awards",
      icon: <Star className="h-6 w-6" />,
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <section className="pt-24 pb-16 px-4 relative">
      <div className="container mx-auto text-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="flame-bg-1"></div>
          <div className="flame-bg-2"></div>
          <div className="flame-bg-3"></div>
        </div>

        <div className="relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-green-400/30 blur-3xl rounded-full animate-pulse-slow"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="flame-text bg-gradient-to-r from-blue-600  to-green-600 bg-clip-text text-transparent">
                Synergy Team
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="flame-button bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Zap className="h-5 w-5 mr-2" />
              {t.hero.viewProjects}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-all duration-300 border-2 hover:border-blue-500 dark:hover:border-green-500"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.contactUs}
            </Button>
          </div>

          {/* Team Members Preview */}
          <div className="flex justify-center items-center space-x-8 mb-16 animate-fade-in-up animation-delay-600">
            <div className="text-center group">
              <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-blue-500/30 group-hover:ring-blue-500/60 transition-all duration-300 group-hover:scale-110">
                <AvatarImage
                  src={teamData.jawhar.avatar || "/placeholder.svg"}
                  alt="Jawhar"
                />
                <AvatarFallback className="bg-blue-500 text-white text-lg">
                  JH
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                {teamData.jawhar.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.team.jawhar.role}
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flame-glow animate-pulse-slow">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="text-center group">
              <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-green-500/30 group-hover:ring-green-500/60 transition-all duration-300 group-hover:scale-110">
                <AvatarImage
                  src={teamData.faten.avatar || "/placeholder.svg"}
                  alt="Faten"
                />
                <AvatarFallback className="bg-green-500 text-white text-lg">
                  FS
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                {teamData.faten.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.team.faten.role}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-2 text-blue-500">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
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

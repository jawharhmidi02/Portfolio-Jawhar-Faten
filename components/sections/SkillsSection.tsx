"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { skillsData } from "@/lib/data/skills";

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
      id="skills"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flame-text bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 flame-glow hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-blue-600 dark:text-blue-400">
                {t.skills.frontend}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillsData.frontend.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="hover:scale-105 transition-transform cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 flame-glow hover:scale-110 transition-transform">
                <Database className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-green-600 dark:text-green-400">
                {t.skills.backend}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillsData.backend.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="hover:scale-105 transition-transform cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 flame-glow hover:scale-110 transition-transform">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-purple-600 dark:text-purple-400">
                {t.skills.design}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillsData.design.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="hover:scale-105 transition-transform cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

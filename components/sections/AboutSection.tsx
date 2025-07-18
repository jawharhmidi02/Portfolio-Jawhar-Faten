"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Github, Linkedin, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { teamData } from "@/lib/data/team";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-800/50"
      id="about"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Meet the Developers
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Jawhar's Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-slate-800 border-blue-200/50 dark:border-blue-700/50">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="w-20 h-20 ring-4 ring-blue-200 dark:ring-blue-700 group-hover:ring-blue-400 dark:group-hover:ring-blue-500 transition-all duration-300">
                    <AvatarImage
                      src={teamData.jawhar.avatar || "/placeholder.svg"}
                      alt="Jawhar"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg">
                      JH
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">J</span>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {teamData.jawhar.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {t.team.jawhar.role}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {t.team.jawhar.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {teamData.jawhar.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:scale-105 transition-transform cursor-pointer border border-blue-200 dark:border-blue-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform rounded-full bg-transparent"
                >
                  <a
                    href={teamData.jawhar.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Portfolio
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform rounded-full bg-transparent"
                >
                  <a
                    href={teamData.jawhar.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform rounded-full bg-transparent"
                >
                  <a
                    href={teamData.jawhar.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Faten's Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/10 dark:to-slate-800 border-emerald-200/50 dark:border-emerald-700/50">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="w-20 h-20 ring-4 ring-emerald-200 dark:ring-emerald-700 group-hover:ring-emerald-400 dark:group-hover:ring-emerald-500 transition-all duration-300">
                    <AvatarImage
                      // src={teamData.faten.avatar || "/placeholder.svg"}
                      alt="Faten"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg">
                      FS
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">F</span>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {teamData.faten.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {t.team.faten.role}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {t.team.faten.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {teamData.faten.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:scale-105 transition-transform cursor-pointer border border-emerald-200 dark:border-emerald-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform rounded-full bg-transparent"
                >
                  <a
                    href={teamData.faten.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Portfolio
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform rounded-full bg-transparent"
                >
                  <a
                    href={teamData.faten.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform rounded-full bg-transparent"
                >
                  <a
                    href={teamData.faten.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Collaboration Section */}
        <Card className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="h-8 w-8 text-white animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  {t.about.synergyTitle}
                </span>
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {t.about.synergyDescription}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

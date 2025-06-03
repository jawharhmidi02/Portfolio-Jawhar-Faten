"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { teamData } from "@/lib/data/team"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm" id="about">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flame-text bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-left">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16 ring-4 ring-blue-500/30 hover:ring-blue-500/60 transition-all duration-300">
                  <AvatarImage src={teamData.jawhar.avatar || "/placeholder.svg"} alt="Jawhar" />
                  <AvatarFallback className="bg-blue-500 text-white">JH</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-blue-600 dark:text-blue-400">{teamData.jawhar.name}</CardTitle>
                  <CardDescription>{t.team.jawhar.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.team.jawhar.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {teamData.jawhar.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:scale-105 transition-transform cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-transform">
                  <a href={teamData.jawhar.portfolio} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Portfolio
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-transform">
                  <a href={teamData.jawhar.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-transform">
                  <a href={teamData.jawhar.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-right">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16 ring-4 ring-green-500/30 hover:ring-green-500/60 transition-all duration-300">
                  <AvatarImage src={teamData.faten.avatar || "/placeholder.svg"} alt="Faten" />
                  <AvatarFallback className="bg-green-500 text-white">FS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-green-600 dark:text-green-400">{teamData.faten.name}</CardTitle>
                  <CardDescription>{t.team.faten.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.team.faten.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {teamData.faten.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:scale-105 transition-transform cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-transform">
                  <a href={teamData.faten.portfolio} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Portfolio
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-transform">
                  <a href={teamData.faten.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-transform">
                  <a href={teamData.faten.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 border-0 hover:shadow-xl transition-all duration-500 animate-fade-in-up">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 flame-text bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t.about.synergyTitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t.about.synergyDescription}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

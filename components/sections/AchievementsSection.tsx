"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Code } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"

export function AchievementsSection() {
  const { t } = useLanguage()

  const achievements = [
    {
      title: t.achievements.hackathon1,
      description: t.achievements.hackathonDesc,
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: t.achievements.hackathon2,
      description: t.achievements.hackathonDesc,
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: t.achievements.problemSolving1,
      description: t.achievements.problemSolvingDesc,
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: t.achievements.problemSolving2,
      description: t.achievements.problemSolvingDesc,
      icon: <Code className="h-6 w-6" />,
    },
  ]

  return (
    <section className="py-16 px-4" id="achievements">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flame-text bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up">
          {t.achievements.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white flame-glow">
                    {achievement.icon}
                  </div>
                  <div>
                    <CardTitle className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

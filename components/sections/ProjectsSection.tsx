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
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { projectsData } from "@/lib/data/projects";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flame-text bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-t-lg flex items-center justify-center overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="hover:scale-110 transition-transform"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs hover:scale-105 transition-transform cursor-pointer"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

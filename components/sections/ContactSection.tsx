"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, User } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ContactForm } from "@/components/ContactForm";
import { teamData } from "@/lib/data/team";

export function ContactSection() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Jawhar",
      data: teamData.jawhar,
      role: "Full Stack Developer",
    },
    {
      name: "Faten",
      data: teamData.faten,
      role: "UI/UX Designer",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden"
      id="contact"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="flame-bg-contact-1"></div>
        <div className="flame-bg-contact-2"></div>
      </div>

      <div className="container mx-auto text-center text-white relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
          {t.contact.title}
        </h2>
        <p className="text-xl mb-12 opacity-90 animate-fade-in-up animation-delay-200">
          {t.contact.subtitle}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Team Contact Cards */}
          <div className="grid md:grid-cols-2  gap-8 lg:max-w-7xl w-full mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="flex flex-col justify-center bg-white/10 backdrop-blur-md border-white/20 animate-fade-in-up w-full text-white"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  {member.role && (
                    <CardDescription className="text-white/80 text-sm">
                      {member.role}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="h-4 w-4 text-white/70" />
                      <span className="opacity-90 break-all">
                        {member.data.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone className="h-4 w-4 text-white/70" />
                      <span className="opacity-90">{member.data.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-white/70" />
                      <span className="opacity-90">
                        {teamData.synergy.location}
                      </span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-2 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 hover:scale-110 transition-all p-2"
                      asChild
                    >
                      <a
                        href={member.data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 hover:scale-110 transition-all p-2"
                      asChild
                    >
                      <a
                        href={member.data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 hover:scale-110 transition-all p-2"
                      asChild
                    >
                      <a href={`mailto:${member.data.email}`} title="Email">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in-up animation-delay-400 lg:col-span-1">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-xl">
                Send us a message
              </CardTitle>
              <CardDescription className="text-white/80">
                Let's discuss your project and bring your ideas to life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

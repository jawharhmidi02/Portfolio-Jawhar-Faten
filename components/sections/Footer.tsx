"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Code2, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { teamData } from "@/lib/data/team";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold">Developer Portfolio</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Creating digital excellence through collaboration and innovation.
              Two passionate developers crafting exceptional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Full-Stack Development</li>
              <li className="text-slate-400">UI/UX Design</li>
              <li className="text-slate-400">Mobile Applications</li>
              <li className="text-slate-400">Technical Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Contact Info</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>{teamData.jawhar.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>{teamData.jawhar.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>{teamData.faten.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>{teamData.faten.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>{teamData.synergy.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Developer Portfolio. {t.footer.rights}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:scale-110 transition-all rounded-full"
              asChild
            >
              <a
                href={teamData.jawhar.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:scale-110 transition-all rounded-full"
              asChild
            >
              <a
                href={teamData.jawhar.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:scale-110 transition-all rounded-full"
              asChild
            >
              <a href={`mailto:${teamData.jawhar.email}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

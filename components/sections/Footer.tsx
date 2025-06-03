"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Users, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { teamData } from "@/lib/data/team";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flame-glow">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">Synergy Team</span>
            </div>
            <p className="text-gray-400 text-sm">
              Creating digital excellence through collaboration and innovation.
              Two passionate developers, one powerful team.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-green-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Mobile Apps</li>
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-2 text-purple-400">Contact Info</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <p className="flex flex-row items-center gap-1">
                <Mail className="h-4 w-4" />
                {teamData.jawhar.email}
              </p>
              <p className="flex flex-row items-center gap-1">
                <Phone className="h-4 w-4" />
                {teamData.jawhar.phone}
              </p>
              <p className="flex flex-row items-center gap-1">
                <Mail className="h-4 w-4" />
                {teamData.faten.email}
              </p>
              <p className="flex flex-row items-center gap-1">
                <Phone className="h-4 w-4" />
                {teamData.faten.phone}
              </p>
              <p className="flex flex-row items-center gap-1">
                <MapPin className="h-4 w-4" />
                {teamData.synergy.location}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Synergy Team. {t.footer.rights}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all"
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
              className="text-gray-400 hover:text-white hover:scale-110 transition-all"
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
              className="text-gray-400 hover:text-white hover:scale-110 transition-all"
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

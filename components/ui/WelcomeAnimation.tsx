"use client";

import { useEffect, useState } from "react";
import { Code, Palette } from "lucide-react";

export function WelcomeAnimation() {
  const [currentText, setCurrentText] = useState(0);

  const texts = ["Welcome", "Bienvenue"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Icons */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="relative">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
              <Code
                className="h-8 w-8 text-white animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          </div>

          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div
            className="w-1 h-1 bg-white/70 rounded-full animate-pulse"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "0.6s" }}
          ></div>

          <div className="relative">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
              <Palette
                className="h-8 w-8 text-white animate-bounce"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <div
              className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full animate-ping"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Animated Text */}
        <div className="relative h-20 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
            {texts[currentText]}
          </h1>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-white/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full animate-spin-slow"></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-white rounded-full animate-spin-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full animate-spin-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </div>
  );
}

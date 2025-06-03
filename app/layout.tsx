import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synergy Team - Professional Web Development Duo",
  description:
    "Jawhar Hmidi & Faten Selmi - Award-winning web developers creating exceptional digital experiences through collaboration and innovation.",
  keywords:
    "web development, full-stack, frontend, backend, NextJs, Vue.js, NestJs, team portfolio",
  authors: [{ name: "Jawhar Hmidi" }, { name: "Faten Selmi" }],
  openGraph: {
    title: "Synergy Team - Professional Web Development",
    description:
      "Two passionate developers creating digital excellence together",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

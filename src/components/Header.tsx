"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Mail, FileText, Briefcase, BookOpen } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md"
      style={{ backgroundColor: "var(--background)", opacity: 0.95 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <span 
            className="text-2xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            S
          </span>
          <span 
            className="text-2xl font-light"
            style={{ color: "var(--accent)" }}
          >
            K
          </span>
        </Link>

        {/* Center - Email & Theme */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="mailto:smkofficial609@gmail.com"
            className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
            style={{ color: "var(--foreground)" }}
          >
            <Mail size={16} />
            smkofficial609@gmail.com
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ 
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)"
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={18} style={{ color: "var(--foreground)" }} />
            ) : (
              <Sun size={18} style={{ color: "var(--foreground)" }} />
            )}
          </button>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="#works"
            className="flex items-center gap-2 text-sm font-medium transition-colors link-underline"
            style={{ color: "var(--foreground)" }}
          >
            <Briefcase size={16} />
            <span className="hidden sm:inline">Works</span>
          </Link>
          <Link
            href="#resume"
            className="flex items-center gap-2 text-sm font-medium transition-colors link-underline"
            style={{ color: "var(--foreground)" }}
          >
            <FileText size={16} />
            <span className="hidden sm:inline">Resume</span>
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-2 text-sm font-medium transition-colors link-underline"
            style={{ color: "var(--foreground)" }}
          >
            <BookOpen size={16} />
            <span className="hidden sm:inline">About</span>
          </Link>
          
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="md:hidden p-2 rounded-full transition-all"
            style={{ 
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)"
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={16} style={{ color: "var(--foreground)" }} />
            ) : (
              <Sun size={16} style={{ color: "var(--foreground)" }} />
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}


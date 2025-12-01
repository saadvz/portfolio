"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-8 px-6 border-t"
      style={{ 
        backgroundColor: "var(--background)",
        borderColor: "var(--border)"
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span 
              className="text-xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              S
            </span>
            <span 
              className="text-xl font-light"
              style={{ color: "var(--accent)" }}
            >
              K
            </span>
          </div>

          {/* Copyright */}
          <p 
            className="text-sm flex items-center gap-1"
            style={{ color: "var(--muted)" }}
          >
            © {currentYear} Saad Khan. Built with{" "}
            <Heart size={14} fill="var(--accent)" style={{ color: "var(--accent)" }} />{" "}
            using Next.js
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="#works"
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: "var(--muted)" }}
            >
              Works
            </a>
            <a
              href="#resume"
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: "var(--muted)" }}
            >
              Resume
            </a>
            <a
              href="#contact"
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: "var(--muted)" }}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}


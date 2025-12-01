"use client";

import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saadkhan8",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/saadvz",
    icon: Github,
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.2, x: 5 }}
          className="p-3 rounded-full transition-all"
          style={{ 
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
            color: "var(--foreground)"
          }}
          aria-label={social.name}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
      <div 
        className="w-px h-20 mx-auto mt-4"
        style={{ backgroundColor: "var(--border)" }}
      />
    </motion.div>
  );
}


"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span 
              className="inline-block px-4 py-2 text-sm font-medium rounded-md"
              style={{ 
                backgroundColor: "var(--foreground)",
                color: "var(--background)"
              }}
            >
              It&apos;s me
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Saad
              <br />
              Khan
            </h1>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--muted)" }}
          >
            Product Engineer @ Verizon
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg max-w-md leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            MS Analytics @ Georgia Tech. Software Developer with rock-solid experience 
            in building complex applications and innovative products with modern technologies.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle size={20} />
                let&apos;s talk
              </span>
              {/* Pulse effect */}
              <span 
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </a>
          </motion.div>
        </div>

        {/* Right - Avatar/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Avatar container with sketch image */}
            <div 
              className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden relative animate-float"
              style={{ 
                backgroundColor: "var(--card-bg)",
                border: "4px solid var(--border)"
              }}
            >
              <Image
                src="/portfolio_sketch.png"
                alt="Saad Khan - Sketch Portrait"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* Decorative dots */}
            <div 
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <div 
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full"
              style={{ backgroundColor: "var(--accent)", opacity: 0.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} style={{ color: "var(--muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}


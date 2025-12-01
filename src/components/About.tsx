"use client";

import { motion } from "framer-motion";
import { Heart, Users, Globe } from "lucide-react";
import Image from "next/image";

const volunteering = [
  {
    org: "United Mission Relief",
    role: "Volunteer",
    period: "Sept 2021 - Present",
    icon: Heart,
    logo: "/umr_logo.jpeg",
  },
  {
    org: "Pakistani Student Association",
    role: "Board Member",
    period: "Active",
    icon: Users,
    logo: "/psa_logo.jpeg",
  },
  {
    org: "Good Stuff For Folks",
    role: "Volunteer",
    period: "Sept 2021 - Present",
    icon: Globe,
    logo: "/gs_logo.jpeg",
  },
  {
    org: "Verizon Volunteer Program",
    role: "Participant",
    period: "June 2024 - Dec 2024",
    icon: Heart,
    logo: "/vz_logo.png",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span 
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              About Me
            </span>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              Passionate about building{" "}
              <span style={{ color: "var(--accent)" }}>impactful</span> solutions
            </h2>
            <div 
              className="space-y-4 text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              <p>
                I&apos;m a software engineer and product innovator currently pursuing my 
                MS in Analytics at Georgia Tech while working as a Product Engineer at Verizon.
              </p>
              <p>
                My journey in tech started with a curiosity for how things work, which evolved 
                into a passion for building products that make a real difference. From developing 
                AI-integrated applications to creating full-stack SaaS platforms, I thrive on 
                turning complex problems into elegant solutions.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me volunteering with local organizations, 
                contributing to open-source projects, or exploring the latest in AI and machine learning.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div 
                  className="text-4xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  5+
                </div>
                <div 
                  className="text-sm mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  Years Experience
                </div>
              </div>
              <div>
                <div 
                  className="text-4xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  100+
                </div>
                <div 
                  className="text-sm mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  Projects Worked On
                </div>
              </div>
              <div>
                <div 
                  className="text-4xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  100,000+
                </div>
                <div 
                  className="text-sm mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  Number of People Impacted
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Volunteering */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-xl font-semibold mb-8 flex items-center gap-2"
              style={{ color: "var(--foreground)" }}
            >
              <Heart size={20} style={{ color: "var(--accent)" }} />
              Community Involvement
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {volunteering.map((vol, index) => (
                <motion.div
                  key={vol.org}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border)"
                  }}
                >
                  {vol.logo ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white mb-3">
                      <Image
                        src={vol.logo}
                        alt={`${vol.org} logo`}
                        width={44}
                        height={44}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{ 
                        backgroundColor: "var(--accent)",
                        opacity: 0.1
                      }}
                    >
                      <vol.icon size={24} style={{ color: "var(--accent)" }} />
                    </div>
                  )}
                  <h4 
                    className="font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {vol.org}
                  </h4>
                  <p 
                    className="text-sm mt-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {vol.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Property Core",
    subtitle: "Bring-Your-Own AI Operations for Short-Term Rental Hosts",
    description: "An AI operations platform that runs the day-to-day work of a short-term rental for a remote host. The host talks to their own agent (Grok Bot or Muse); Property Core gives that agent its instructions, keeps every record, and holds the guardrails in code. Piloting with several Airbnb hosts on live properties.",
    technologies: ["TypeScript", "Node.js", "MCP", "Twilio SMS", "AI Agents"],
    highlights: [
      "Cleaner Core: reads booking calendars, texts cleaners for each turnover, releases door codes only after checkout",
      "Supply Core: approval rules, spending caps, and go/hold decisions on every agent-built cart, with a full order log",
      "Safety gates enforced in code and checked by CI on every pull request",
    ],
    github: "https://github.com/saadvz/PropertyCore",
    featured: true,
    period: "2026",
  },
  {
    id: 2,
    title: "KHANEX",
    subtitle: "AI SaaS Platform for SMB Workflow Automation",
    description: "Owned development of a multi-tenant B2B AI SaaS product, translating small-business workflow needs into AI-powered ordering, analytics, and automation features. Shipped automation that reduced customer operating costs by an average of $500/month.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "BigQuery", "Cloud Run", "ElevenLabs"],
    highlights: [
      "REST APIs and webhook pipelines connecting ElevenLabs voice agents to Clover, Toast, and Square POS",
      "Voice-initiated order processing for SMB customers",
      "Real-time analytics dashboards with BigQuery, Recharts, and Cloud Run ingestion",
    ],
    link: "https://khanex.ai/",
    featured: true,
    period: "2025 - 2026",
  },
  {
    id: 3,
    title: "HardwareMCP",
    subtitle: "Remote MCP Server for Physical Hardware",
    description: "A public, no-auth remote MCP server that helps AI agents find the right MCP server for physical hardware: ESP32, Arduino, Raspberry Pi, 3D printers (Bambu, Prusa, Klipper), Home Assistant, cameras, Zigbee, and lab gear. Listed in the official MCP Registry.",
    technologies: ["TypeScript", "MCP", "Streamable HTTP", "Vercel"],
    highlights: [
      "Catalog of 59 hardware MCP servers with install commands and client configs",
      "Tools for search, device listing, and per-device recommendations (e.g. \"Bambu P1S\")",
      "Works with Claude Code, Cursor, Claude Desktop, Grok Bot, and Muse",
    ],
    link: "https://hardwaremcp.khanex.ai",
    github: "https://github.com/saadvz/hardwaremcp-mcp",
    featured: true,
    period: "2026",
  },
  {
    id: 4,
    title: "Pakistan Pandemic Response",
    subtitle: "Data Science Research",
    description: "Published a data science research project through Columbia University's CIC Student Working Group analyzing Pakistan's COVID-19 policy response, vaccination rollout, and public health intervention effectiveness.",
    technologies: ["Python", "Pandas", "Matplotlib", "ARIMA/ARIMAX", "Colab"],
    highlights: [
      "Cleaned and analyzed public health datasets",
      "ARIMA/ARIMAX forecasting to evaluate pandemic trends and policy impact",
      "Written research paper plus an interactive Colab notebook",
    ],
    github: "https://github.com/saadvz/Analyzing-Pandemic_Responses_Project",
    featured: true,
    period: "2024",
  },
  {
    id: 5,
    title: "10DLC Ready",
    subtitle: "A2P SMS Registration Prep Toolkit",
    description: "A local-first Python CLI and set of agent skills that help a business prepare A2P 10DLC SMS registration with the AI assistant it already has: consent flow design, policy copy, sample messages, and draft Twilio registration fields with an evidence report.",
    technologies: ["Python", "CLI", "MCP", "Agent Skills", "Twilio"],
    highlights: [
      "Plan, lint, audit, and export commands with PASS / NEEDS_REVIEW / BLOCK findings",
      "Optional three-tool MCP connector so existing agents can call the same engine",
      "No hosting or provider credentials required; network use only on explicit capture",
    ],
    period: "2026",
  },
  {
    id: 6,
    title: "Video Studio",
    subtitle: "Claude Code Skill for Product Videos",
    description: "A Claude Code skill that produces polished product videos entirely in code: an HTML timeline rendered frame by frame in Chromium, then encoded with ffmpeg. Supports text overlays, phone and chat mockups, generated sound effects and music, voiceover timing, and privacy blurring for real screen recordings.",
    technologies: ["HTML/CSS", "Chromium", "ffmpeg", "Claude Code"],
    highlights: [
      "Investor trailers and product demos generated from a prompt",
      "Layered privacy blurring for real screen recordings",
      "Design rules that keep output away from generic \"AI slop\"",
    ],
    period: "2026",
  },
  {
    id: 7,
    title: "Urdu Voice Assistant",
    subtitle: "Accessible Voice App for Urdu Speakers",
    description: "An always-listening iOS voice assistant for Urdu speakers built on ElevenLabs Conversational AI. Users can ask for directions, call or text contacts, and have spoken conversations entirely in Urdu.",
    technologies: ["Expo", "React Native", "TypeScript", "ElevenLabs"],
    highlights: [
      "Full Urdu speech recognition and text-to-speech",
      "Deep links into Maps, Phone, Messages, and WhatsApp",
      "Accessibility first: large targets, high contrast, RTL support",
    ],
    period: "2026",
  },
  {
    id: 8,
    title: "Supercharger Price Alerts",
    subtitle: "Personal Tesla Charging Price Tracker",
    description: "A small web app that emails you when a Tesla Supercharger near you drops to (or rises above) a target price per kWh. Runs entirely on free tiers.",
    technologies: ["Next.js", "Upstash Redis", "GitHub Actions", "Resend", "OAuth (PKCE)"],
    highlights: [
      "PKCE OAuth login with automatic token refresh and rotation",
      "Cron worker every 5 minutes compares live prices to your targets",
      "Expected running cost: $0/month",
    ],
    period: "2026",
  },
  {
    id: 9,
    title: "PureGlow Aesthetics",
    subtitle: "Full-Stack Web Application",
    description: "Developed a fully functional ReactJS website for PureGlow Aesthetics with responsive design, service galleries, appointment scheduling, client testimonials, and secure payment gateway integration.",
    technologies: ["ReactJS", "Node.js", "Express.js", "RESTful APIs"],
    highlights: [
      "Service galleries & online appointment scheduling",
      "Secure payment gateway integration",
      "SEO optimized with enhanced animations",
    ],
    link: "https://pureglowaesthetics.uk/",
    period: "2024",
  },
  {
    id: 10,
    title: "ManageLiveEvents",
    subtitle: "Senior Capstone Project",
    description: "Led an Agile Scrum project to develop an API for creating, analyzing, and managing live sports game footage. Achieved 2nd place in the capstone competition.",
    technologies: ["Agile/Scrum", "JIRA", "API Development"],
    highlights: [
      "Weekly Scrum meetings & sprint planning",
      "Stakeholder requirement alignment",
      "2nd place in NJIT Capstone Competition",
    ],
    period: "2024",
  },
  {
    id: 11,
    title: "QB Touchdown Predictor",
    subtitle: "Machine Learning Model",
    description: "Developed a machine learning model in Python using NFL play-by-play data to predict quarterback touchdown throws by analyzing key in-game statistics. Achieved accurate predictions validated through MSE and RMSE evaluations.",
    technologies: ["Python", "Linear Regression", "Pandas", "Jupyter Notebook"],
    highlights: [
      "Achieved accurate touchdown predictions using Linear Regression on NFL data",
      "Preprocessed data focusing on QBs with 15+ games per season using Pandas",
      "Validated model performance through Mean Squared Error and RMSE metrics",
    ],
    github: "https://github.com/saadvz/QB_Touchdown_Predictor",
    period: "2023",
  },
  {
    id: 12,
    title: "TATA Data Visualization",
    subtitle: "Business Intelligence Project",
    description: "Completed a virtual data visualization project for TATA, creating executive-level questions for CEO and CMO, selecting appropriate visuals, and building interactive dashboards to present actionable business insights.",
    technologies: ["Tableau", "Data Visualization", "Business Intelligence"],
    highlights: [
      "Developed strategic questions for C-suite executives (CEO & CMO)",
      "Built interactive Tableau dashboards using provided company data",
      "Delivered findings in a 5-minute video presentation demonstrating data storytelling",
    ],
    period: "2023",
  },
  {
    id: 13,
    title: "SpaceX Launch Predictor",
    subtitle: "Data Science Capstone",
    description: "Comprehensive analysis and prediction of SpaceX launch outcomes using data science techniques. From data collection via API and web scraping, through EDA and visualization, to predictive modeling with machine learning. Includes an interactive Dash application.",
    technologies: ["Python", "Pandas", "Plotly", "Dash", "Scikit-learn", "SQL", "BeautifulSoup"],
    highlights: [
      "Data collection via SpaceX API and web scraping with BeautifulSoup",
      "Machine learning model for launch outcome prediction",
      "Interactive Dash application for data visualization",
    ],
    github: "https://github.com/saadvz/data_science_capstone",
    period: "2023",
  },
];

// Verizon Innovation Projects
const verizonProjects = [
  {
    id: 101,
    title: "Innovation Lab Platform",
    subtitle: "Consumer Product Demo Platform",
    description: "Full-stack cross-platform mobile application serving as an internal innovation lab and demo platform. Consolidates multiple consumer product concepts including home networking, cloud storage, family safety, identity protection, and AI assistants into a unified native app deployed to iOS and Android.",
    technologies: ["React", "TypeScript", "Ionic", "Capacitor", "Firebase", "Node.js", "Tailwind CSS"],
    highlights: [
      "Multi-tenant AI backend with Flowise and custom MMRAG service",
      "Custom Android Capacitor plugins in Java for system-level APIs",
      "Cross-platform push notifications with FCM/APNs integration",
    ],
    period: "2024-2025",
    verizonProject: true,
  },
  {
    id: 102,
    title: "Network Failover System",
    subtitle: "Intelligent Connectivity Backup",
    description: "Cross-platform mobile feature providing seamless internet backup during broadband outages. Automatically detects outage type (power vs. network), guides users through enabling mobile hotspot backup, and notifies when connectivity is restored, all with zero additional data charges.",
    technologies: ["React", "TypeScript", "Ionic", "Capacitor", "Firebase", "Java", "FCM"],
    highlights: [
      "Custom Android plugin for WiFi/hotspot state monitoring via BroadcastReceiver",
      "Intelligent outage detection algorithm distinguishing power vs. network failures",
      "Real-time push notification system with APNs and FCM integration",
    ],
    period: "2025",
    verizonProject: true,
  },
  {
    id: 103,
    title: "Router Optimization Assistant",
    subtitle: "Signal Analysis & Placement Tool",
    description: "Mobile-first guided setup experience for fixed wireless access customers using real-time GPS tracking, Mapbox integration, and cellular signal analysis to determine optimal router placement location before installation.",
    technologies: ["React", "TypeScript", "Mapbox GL", "Capacitor Geolocation", "OAuth2"],
    highlights: [
      "Real-time GPS tracking with sub-meter accuracy for spot-checking",
      "Cell tower API integration for signal strength analysis",
      "Vector mathematics for signal quality ranking and visualization",
    ],
    period: "2025",
    verizonProject: true,
  },
  {
    id: 104,
    title: "Document Intelligence Platform",
    subtitle: "AI-Powered Document Assistant",
    description: "AI-powered document intelligence feature enabling natural language queries across personal cloud storage. Uses Multimodal RAG pipeline to extract and synthesize information from documents, supporting questions like 'What's my car insurance premium?' across all stored files.",
    technologies: ["React", "TypeScript", "Firebase", "Node.js", "RAG", "LLM", "JWT"],
    highlights: [
      "Multimodal RAG pipeline for document Q&A with retrieval augmented generation",
      "JWT-based authentication with automatic token refresh (15-min expiry)",
      "Forward-to-Save automation for email-based document sorting",
    ],
    period: "2025",
    verizonProject: true,
  },
];

const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl"
      style={{ 
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--border)"
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div 
          className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full"
          style={{ 
            backgroundColor: "var(--accent)",
            color: "white"
          }}
        >
          Featured
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left - Info */}
        <div className="space-y-4">
          <div>
            <span 
              className="text-sm font-medium"
              style={{ color: "var(--muted)" }}
            >
              {project.period}
            </span>
            <h3 
              className="text-2xl md:text-3xl font-bold mt-1 group-hover:translate-x-2 transition-transform"
              style={{ color: "var(--foreground)" }}
            >
              {project.title}
            </h3>
            <p 
              className="text-sm font-medium mt-1"
              style={{ color: "var(--accent)" }}
            >
              {project.subtitle}
            </p>
          </div>

          <p 
            className="leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{ 
                  backgroundColor: "var(--background)",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Highlights & Links */}
        <div className="space-y-6">
          {/* Highlights */}
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li 
                key={i}
                className="flex items-start gap-3 text-sm"
                style={{ color: "var(--muted)" }}
              >
                <ArrowUpRight 
                  size={16} 
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "var(--accent)" }}
                />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105"
                style={{ 
                  backgroundColor: "var(--accent)",
                  color: "white"
                }}
              >
                <ExternalLink size={16} />
                Visit Site
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105"
                style={{ 
                  backgroundColor: "var(--background)",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)"
                }}
              >
                <Github size={16} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="works" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span 
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Portfolio
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ color: "var(--foreground)" }}
          >
            Projects
          </h2>
          <p 
            className="mt-4 text-lg max-w-2xl"
            style={{ color: "var(--muted)" }}
          >
            AI agents, voice products, MCP servers, and SaaS tools I&apos;ve built and
            shipped, plus earlier data science work.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all hover:scale-105"
            style={{ 
              backgroundColor: "var(--card-bg)",
              color: "var(--foreground)",
              border: "1px solid var(--border)"
            }}
          >
            {showAll ? (
              <>
                <ChevronUp size={18} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={18} />
                View More Projects ({otherProjects.length})
              </>
            )}
          </button>
        </motion.div>

        {/* Other Projects (Expandable) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-8 mt-8 overflow-hidden"
            >
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Verizon Projects Section */}
        <div id="verizon-projects" className="mt-24 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white p-1">
                <img
                  src="/vz_logo.png"
                  alt="Verizon logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <span 
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Enterprise Innovation
                </span>
                <h3 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  Corporate Projects
                </h3>
              </div>
            </div>
            <p 
              className="text-lg max-w-2xl"
              style={{ color: "var(--muted)" }}
            >
              Internal innovation projects developed during my corporate experience, 
              showcasing full-stack development, mobile engineering, and AI integration.
            </p>
          </motion.div>

          <div className="space-y-8">
            {verizonProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl"
                style={{ 
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border)"
                }}
              >
                {/* Enterprise badge */}
                <div 
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5"
                  style={{ 
                    backgroundColor: "#cd040b",
                    color: "white"
                  }}
                >
                  <img src="/vz_logo.png" alt="" className="w-3 h-3 object-contain brightness-0 invert" />
                  Enterprise
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <span 
                        className="text-sm font-medium"
                        style={{ color: "var(--muted)" }}
                      >
                        {project.period}
                      </span>
                      <h3 
                        className="text-2xl md:text-3xl font-bold mt-1 group-hover:translate-x-2 transition-transform"
                        style={{ color: "var(--foreground)" }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        className="text-sm font-medium mt-1"
                        style={{ color: "var(--accent)" }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    <p 
                      className="leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: "var(--background)",
                            color: "var(--foreground)",
                            border: "1px solid var(--border)"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: "var(--muted)" }}
                        >
                          <ArrowUpRight 
                            size={16} 
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: "var(--accent)" }}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


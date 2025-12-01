"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KHANEX",
    subtitle: "B2B SaaS Platform",
    description: "Built a multi-tenant B2B SaaS platform for custom AI solutions using Next.js, TypeScript, Supabase, and Stripe. Enables SMBs to automate workflows with 24/7 voice agents powered by ElevenLabs Conversational AI.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "BigQuery", "ElevenLabs AI"],
    highlights: [
      "REST APIs integrating with POS systems (Clover, Toast, Square)",
      "Real-time analytics dashboards with Recharts",
      "Cloud Run webhook pipelines for data ingestion",
    ],
    link: "https://khanex.ai/",
    github: "#",
    featured: true,
    period: "Aug 2025 - Present",
  },
  {
    id: 2,
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
    featured: true,
    period: "2024",
  },
  {
    id: 3,
    title: "Pakistan Pandemic Response",
    subtitle: "Data Analysis & Research",
    description: "Evaluated Pakistan's COVID-19 policies through detailed analysis of government interventions and vaccination efforts. Published research paper delivered to Columbia University's CIC Student Working Group.",
    technologies: ["Python", "Pandas", "Matplotlib", "ARIMA/ARIMAX"],
    highlights: [
      "Policy effectiveness analysis",
      "Predictive modeling with ARIMA/ARIMAX",
      "Published academic research paper",
    ],
    github: "https://github.com/saadvz/Analyzing-Pandemic_Responses_Project",
    featured: true,
    period: "April 2024",
  },
  {
    id: 4,
    title: "ManageLiveEvents",
    subtitle: "Senior Capstone Project",
    description: "Led an Agile Scrum project to develop an API for creating, analyzing, and managing live sports game footage. Achieved 2nd place in the capstone competition.",
    technologies: ["Agile/Scrum", "JIRA", "API Development"],
    highlights: [
      "Weekly Scrum meetings & sprint planning",
      "Stakeholder requirement alignment",
      "2nd place in NJIT Capstone Competition",
    ],
    period: "Sep 2024 - Dec 2024",
  },
  {
    id: 5,
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
    period: "Aug 2023",
  },
  {
    id: 6,
    title: "TATA Data Visualization",
    subtitle: "Business Intelligence Project",
    description: "Completed a virtual data visualization project for TATA, creating executive-level questions for CEO and CMO, selecting appropriate visuals, and building interactive dashboards to present actionable business insights.",
    technologies: ["Tableau", "Data Visualization", "Business Intelligence"],
    highlights: [
      "Developed strategic questions for C-suite executives (CEO & CMO)",
      "Built interactive Tableau dashboards using provided company data",
      "Delivered findings in a 5-minute video presentation demonstrating data storytelling",
    ],
    period: "Aug 2023",
  },
  {
    id: 7,
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
    title: "HomeSandbox",
    subtitle: "Consumer Innovation Platform",
    description: "Full-stack cross-platform mobile application serving as Verizon's internal innovation lab and demo platform. Consolidates multiple consumer product concepts including home networking, cloud storage, family safety, identity protection, and AI assistants into a unified native app deployed to iOS and Android.",
    technologies: ["React", "TypeScript", "Ionic", "Capacitor", "Firebase", "Node.js", "Tailwind CSS"],
    highlights: [
      "Multi-tenant AI backend with Flowise and custom MMRAG service",
      "Custom Android Capacitor plugins in Java for system-level APIs",
      "Cross-platform push notifications with FCM/APNs integration",
    ],
    period: "June 2024 - Dec 2024",
    verizonProject: true,
  },
  {
    id: 102,
    title: "Backup Internet (eSIM)",
    subtitle: "Intelligent Connectivity Failover",
    description: "Cross-platform mobile feature providing seamless internet backup during broadband outages. Automatically detects outage type (power vs. network), guides users through enabling mobile hotspot backup, and notifies when connectivity is restored, all with zero additional data charges.",
    technologies: ["React", "TypeScript", "Ionic", "Capacitor", "Firebase", "Java", "FCM"],
    highlights: [
      "Custom Android plugin for WiFi/hotspot state monitoring via BroadcastReceiver",
      "Intelligent outage detection algorithm distinguishing power vs. network failures",
      "Real-time push notification system with APNs and FCM integration",
    ],
    period: "June 2024 - Dec 2024",
    verizonProject: true,
  },
  {
    id: 103,
    title: "Homeview (HomeSense)",
    subtitle: "Router Placement Optimization",
    description: "Mobile-first guided setup experience for Verizon Fixed Wireless Access customers using real-time GPS tracking, Mapbox integration, and cellular signal analysis to determine optimal router placement location before installation.",
    technologies: ["React", "TypeScript", "Mapbox GL", "Capacitor Geolocation", "OAuth2"],
    highlights: [
      "Real-time GPS tracking with sub-meter accuracy for spot-checking",
      "Verizon Cell Tower API integration for signal strength analysis",
      "Vector mathematics for signal quality ranking and visualization",
    ],
    period: "June 2024 - Dec 2024",
    verizonProject: true,
  },
  {
    id: 104,
    title: "DocuDojo",
    subtitle: "AI Document Intelligence",
    description: "AI-powered document intelligence feature enabling natural language queries across personal cloud storage. Uses Multimodal RAG pipeline to extract and synthesize information from documents, supporting questions like 'What's my car insurance premium?' across all stored files.",
    technologies: ["React", "TypeScript", "Firebase", "Node.js", "RAG", "LLM", "JWT"],
    highlights: [
      "Multimodal RAG pipeline for document Q&A with retrieval augmented generation",
      "JWT-based authentication with automatic token refresh (15-min expiry)",
      "Forward-to-Save automation for email-based document sorting",
    ],
    period: "June 2024 - Dec 2024",
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
            Featured Projects
          </h2>
          <p 
            className="mt-4 text-lg max-w-2xl"
            style={{ color: "var(--muted)" }}
          >
            A collection of projects that showcase my skills in building innovative 
            solutions across different domains.
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
                  Verizon Innovation Lab
                </span>
                <h3 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  Enterprise Projects
                </h3>
              </div>
            </div>
            <p 
              className="text-lg max-w-2xl"
              style={{ color: "var(--muted)" }}
            >
              Internal innovation projects developed during my time at Verizon, 
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
                {/* Verizon badge */}
                <div 
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5"
                  style={{ 
                    backgroundColor: "#cd040b",
                    color: "white"
                  }}
                >
                  <img src="/vz_logo.png" alt="" className="w-3 h-3 object-contain brightness-0 invert" />
                  Verizon
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


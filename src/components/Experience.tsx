"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Award, Code, Briefcase, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Experience = {
  company: string;
  location: string;
  logo?: string;
  roles: { title: string; period: string; current: boolean }[];
  highlights: string[];
  icon: typeof Building2;
  projectsLink?: string;
};

const experiences: Experience[] = [
  {
    company: "Threshold Care",
    location: "VERA: AI voice platform for family caregivers",
    roles: [
      {
        title: "Founding Engineer",
        period: "Feb 2026 - Oct 2026",
        current: false,
      },
    ],
    highlights: [
      "Took VERA from prototype to a production platform with a projected $1M ARR, owning roadmap and launch priorities",
      "Defined and shipped the core caregiver journey: signup, client onboarding, phone verification and consent, scheduled AI check-in calls, post-call summaries, Shopify billing, family sharing, and agency outreach workflows",
      "Designed the production conversational voice agent (Pipecat, Gemini Live, Twilio) with barge-in, voicemail handling, multilingual calls, Voice ID, consent, and wrong-person privacy hangups",
      "Presented weekly shareholder updates on growth, conversion, call quality, and risk, turning metrics into product priorities",
      "Built AWS infrastructure (EC2, S3, Cognito, Terraform), CI/CD, PR previews, evals, and synthetic canaries for reliable releases",
    ],
    icon: Building2,
  },
  {
    company: "Verizon",
    location: "Basking Ridge, NJ",
    logo: "/vz_logo.png",
    roles: [
      {
        title: "Product Engineer (Full-Time)",
        period: "Jun 2025 - Feb 2026",
        current: false,
      },
      {
        title: "Product Innovation Co-Op",
        period: "Jun 2024 - Dec 2024",
        current: false,
      },
    ],
    highlights: [
      "Turned ambiguous AI and cloud concepts into stakeholder-ready prototypes, advancing 3 ideas into leadership proposals",
      "Won the Verizon Spotlight Award for building the Android app in an edge-AI demo (NVIDIA GPU in the home router): a live Verizon Home mirror with camera feeds and object-detection alerts, shown to Verizon VPs and NVIDIA",
      "Built a platform-agnostic prototyping sandbox that brought development in-house, cutting costs 90% versus outsourced builds and raising approval rates 60% versus slide-based reviews",
      "Prototyped a multi-tenant AI backend (Flowise, multimodal RAG) for document Q&A across personal cloud files, a network failover system, and a GPS and cell-signal router placement assistant",
    ],
    icon: Building2,
    projectsLink: "#verizon-projects",
  },
  {
    company: "Treble",
    location: "Remote",
    logo: "/treble_logo.jpg",
    roles: [
      {
        title: "Software Developer Contractor",
        period: "Sep 2023 - Dec 2023",
        current: false,
      },
    ],
    highlights: [
      "Developed automatic image resizing function slashing storage costs by 95%",
      "Integrated Google Analytics for detailed user interaction tracking",
      "Informed UI/UX improvements and strategic decisions through data analysis",
    ],
    icon: Code,
  },
  {
    company: "Crestron Electronics",
    location: "Rockleigh, NJ",
    logo: "/crestron_logo.png",
    roles: [
      {
        title: "Software Platforms Co-Op",
        period: "Feb 2023 - Aug 2023",
        current: false,
      },
    ],
    highlights: [
      "Engineered 10 C# integration tests for Crestron Home Multimedia products",
      "Boosted operational efficiency by 75% with WPF Address Book feature",
      "Enhanced product reliability and user satisfaction through comprehensive testing",
    ],
    icon: Briefcase,
  },
  {
    company: "TheCoderSchool",
    location: "Montclair, NJ",
    logo: "/the_coder_school_logo.png",
    roles: [
      {
        title: "Code Coach",
        period: "Sep 2022 - Jan 2023",
        current: false,
      },
    ],
    highlights: [
      "Educated 50+ students aged 5-14 on programming fundamentals, improving coding proficiency using Python, Java, HTML & CSS, and Scratch",
      "Developed personalized lesson plans tailored to individual learning styles, accelerating student progress in software development concepts",
    ],
    icon: Code,
  },
  {
    company: "TheDepoAppCompany",
    location: "Philadelphia, PA",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "Mar 2022 - Dec 2022",
        current: false,
      },
    ],
    highlights: [
      "Reduced resource consumption by 20% by auditing the codebase and optimizing the Depo App using Python",
      "Built the company website frontend from scratch, delivering a fully responsive site using HTML, CSS, and Node.js",
      "Ensured data accuracy by auditing the App Data Algorithm in Python, validating variable weights for optimal performance",
    ],
    icon: Briefcase,
  },
];

const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "MS Computer Science",
    location: "Atlanta, GA",
    period: "Expected May 2027",
    icon: GraduationCap,
    logo: "/gt_logo.png",
  },
  {
    school: "New Jersey Institute of Technology",
    degree: "BS Business & Information Systems",
    location: "Newark, NJ",
    period: "May 2025",
    gpa: "3.64/4.0",
    icon: GraduationCap,
    logo: "/njit_logo.png",
  },
];

const skillGroups = [
  {
    label: "Product & Prototyping",
    items: ["Rapid Prototyping", "Product Requirements", "Roadmapping", "Stakeholder Demos", "Product Analytics"],
  },
  {
    label: "AI & Agentic",
    items: ["Agentic Workflows", "MCP Servers", "Tool Calling", "Human-in-the-Loop", "Multimodal RAG", "Prompt Engineering", "Evals"],
  },
  {
    label: "AI Tools & Models",
    items: ["OpenAI", "Gemini", "Claude Code", "Cursor", "Grok Bot", "LangChain", "Flowise", "Pipecat", "ElevenLabs", "Twilio"],
  },
  {
    label: "Engineering & Cloud",
    items: ["TypeScript", "Python", "JavaScript", "Java", "SQL", "React", "Next.js", "Node.js", "REST APIs", "Webhooks", "Pandas", "AWS", "Terraform", "GCP", "Cloud Run", "Firebase", "Supabase", "BigQuery", "Docker"],
  },
];

const certifications = [
  { name: "IBM Data Science Professional Certificate", icon: Award, logo: "/IBM_logo.svg.png" },
  { name: "Verizon Spotlight Award Winner", icon: Award, logo: "/vz_logo.png" },
  { name: "Senior Capstone Project Winner", icon: Award, logo: "/njit_logo.png" },
];

export default function Experience() {
  return (
    <section id="resume" className="py-32 px-6" style={{ backgroundColor: "var(--card-bg)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span 
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                Experience
              </span>
              <h2 
                className="text-4xl md:text-5xl font-bold mt-2"
                style={{ color: "var(--foreground)" }}
              >
                Resume
              </h2>
            </div>
            <a
              href="/Saad Khan Resume.pdf"
              download="Saad_Khan_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 flex-shrink-0"
              style={{ 
                backgroundColor: "var(--accent)",
                color: "white"
              }}
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <h3 
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: "var(--foreground)" }}
            >
              <Briefcase size={20} style={{ color: "var(--accent)" }} />
              Work Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 border-l-2"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ 
                    backgroundColor: exp.roles[0].current ? "var(--accent)" : "var(--background)",
                    border: `2px solid ${exp.roles[0].current ? "var(--accent)" : "var(--border)"}`
                  }}
                >
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  ) : (
                    <exp.icon size={12} style={{ color: exp.roles[0].current ? "white" : "var(--muted)" }} />
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {exp.logo && (
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white p-1">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h4 
                        className="text-lg font-bold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {exp.company}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {exp.roles.map((role) => (
                    <div key={role.title} className="flex items-center gap-3 flex-wrap">
                      <span 
                        className="text-sm font-medium px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: role.current ? "var(--accent)" : "var(--background)",
                          color: role.current ? "white" : "var(--foreground)",
                          border: `1px solid ${role.current ? "var(--accent)" : "var(--border)"}`
                        }}
                      >
                        {role.title}
                      </span>
                      <span 
                        className="text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        {role.period}
                      </span>
                    </div>
                  ))}

                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, i) => (
                      <li 
                        key={i}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--muted)" }}
                      >
                        <span style={{ color: "var(--accent)" }}>→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {exp.projectsLink && (
                    <Link
                      href={exp.projectsLink}
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 hover:gap-3"
                      style={{ 
                        backgroundColor: "#cd040b",
                        color: "white"
                      }}
                    >
                      See Projects
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right sidebar - Education, Skills, Certifications */}
          <div className="space-y-10">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-xl font-semibold mb-6 flex items-center gap-2"
                style={{ color: "var(--foreground)" }}
              >
                <GraduationCap size={20} style={{ color: "var(--accent)" }} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div 
                    key={edu.school}
                    className="p-4 rounded-xl"
                    style={{ 
                      backgroundColor: "var(--background)",
                      border: "1px solid var(--border)"
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {edu.logo && (
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white p-1">
                          <Image
                            src={edu.logo}
                            alt={`${edu.school} logo`}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h4 
                          className="font-semibold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {edu.school}
                        </h4>
                        <p 
                          className="text-sm"
                          style={{ color: "var(--accent)" }}
                        >
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span 
                        className="text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <span 
                          className="text-xs font-medium px-2 py-1 rounded"
                          style={{ 
                            backgroundColor: "var(--accent)",
                            color: "white"
                          }}
                        >
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-xl font-semibold mb-6 flex items-center gap-2"
                style={{ color: "var(--foreground)" }}
              >
                <Code size={20} style={{ color: "var(--accent)" }} />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "var(--muted)" }}
                    >
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded"
                          style={{
                            backgroundColor: "var(--background)",
                            color: "var(--foreground)",
                            border: "1px solid var(--border)"
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-xl font-semibold mb-6 flex items-center gap-2"
                style={{ color: "var(--foreground)" }}
              >
                <Award size={20} style={{ color: "var(--accent)" }} />
                Awards & Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{ 
                      backgroundColor: "var(--background)",
                      border: "1px solid var(--border)"
                    }}
                  >
                    {cert.logo ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white p-1.5">
                        <Image
                          src={cert.logo}
                          alt="Verizon logo"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div 
                        className="p-2 rounded-full"
                        style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
                      >
                        <cert.icon size={16} style={{ color: "var(--accent)" }} />
                      </div>
                    )}
                    <span 
                      className="text-sm font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

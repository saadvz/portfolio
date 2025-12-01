"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6" style={{ backgroundColor: "var(--card-bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span 
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                Get in Touch
              </span>
              <h2 
                className="text-4xl md:text-5xl font-bold mt-2"
                style={{ color: "var(--foreground)" }}
              >
                Let&apos;s work{" "}
                <span style={{ color: "var(--accent)" }}>together</span>
              </h2>
              <p 
                className="mt-4 text-lg"
                style={{ color: "var(--muted)" }}
              >
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:smkofficial609@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105"
                style={{ 
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)"
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Mail size={20} color="white" />
                </div>
                <div>
                  <p 
                    className="text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    Email
                  </p>
                  <p 
                    className="font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    smkofficial609@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+19738421983"
                className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105"
                style={{ 
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)"
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Phone size={20} color="white" />
                </div>
                <div>
                  <p 
                    className="text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    Phone
                  </p>
                  <p 
                    className="font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    (973) 842-1983
                  </p>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ 
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)"
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <MapPin size={20} color="white" />
                </div>
                <div>
                  <p 
                    className="text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    Location
                  </p>
                  <p 
                    className="font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    New Jersey
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/saadkhan8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full transition-all hover:scale-110"
                style={{ 
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)"
                }}
              >
                <Linkedin size={24} style={{ color: "var(--foreground)" }} />
              </a>
              <a
                href="https://github.com/saadvz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full transition-all hover:scale-110"
                style={{ 
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)"
                }}
              >
                <Github size={24} style={{ color: "var(--foreground)" }} />
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2"
                  style={{ 
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                    // @ts-expect-error CSS custom properties
                    "--tw-ring-color": "var(--accent)"
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2"
                  style={{ 
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)"
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 resize-none"
                  style={{ 
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)"
                  }}
                  placeholder="Hello Saad, I'd like to discuss..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: "var(--accent)",
                  color: "white"
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-start gap-3 ${
                    submitStatus === "success" ? "bg-green-500/10" : "bg-red-500/10"
                  }`}
                  style={{
                    border: `1px solid ${submitStatus === "success" ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`
                  }}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <p
                    className="text-sm"
                    style={{
                      color: submitStatus === "success" ? "#22c55e" : "#ef4444"
                    }}
                  >
                    {submitMessage}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

